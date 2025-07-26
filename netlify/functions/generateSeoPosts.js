import { createClient } from '@sanity/client'
import { OpenAI } from 'openai'

const client = createClient({
  projectId: 'trdbxmjo', // FIXED: Correct project ID!
  dataset: 'production',
  apiVersion: '2023-07-25',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false
})

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const locations = [
  'Ostuni', 'Martina Franca', 'Lecce', 'Cisternino', 'Alberobello',
  'Polignano a Mare', 'Monopoli', 'Carovigno', 'Brindisi', 'Taranto'
]

export async function handler(event) {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  }
  
  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' }
  }
  
  try {
    const count = Number(event.queryStringParameters?.count || 50)
    const results = []
    const errors = []
    
    if (!process.env.SANITY_API_WRITE_TOKEN) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'SANITY_API_WRITE_TOKEN not configured' })
      }
    }
    
    if (!process.env.OPENAI_API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'OPENAI_API_KEY not configured' })
      }
    }
    
    // Process in batches to avoid timeout
    const BATCH_SIZE = 5
    const batches = []
    
    // Create batches
    for (let i = 0; i < count; i += BATCH_SIZE) {
      const batchEnd = Math.min(i + BATCH_SIZE, count)
      const batch = []
      for (let j = i; j < batchEnd; j++) {
        batch.push(j)
      }
      batches.push(batch)
    }
    
    // Process each batch
    for (const batch of batches) {
      const batchPromises = batch.map(async (index) => {
        try {
          const geo = locations[Math.floor(Math.random() * locations.length)]
          
          const prompt = `Generate a multilingual blog post metadata entry for a real estate SEO blog focused on ${geo} in Puglia, Italy. 
          
          IMPORTANT: Return ONLY a valid JSON object, no other text or markdown.
          
          The JSON must have these exact fields:
          {
            "title": "English title about real estate in ${geo}",
            "title_it": "Italian title",
            "title_ar": "Arabic title",
            "title_zh": "Chinese title",
            "seoTitle": "SEO-optimized English title (60 chars max)",
            "metaDescription": "English meta description (150-160 chars)",
            "metaDescription_it": "Italian meta description",
            "metaDescription_ar": "Arabic meta description",
            "metaDescription_zh": "Chinese meta description",
            "tags": ["tag1", "tag2", "tag3"],
            "geoFocus": "${geo}"
          }
          
          Make it authentic, location-specific, and SEO-friendly. Focus on luxury real estate, villas, or property investment.
          
          RESPOND WITH ONLY THE JSON OBJECT, NO EXPLANATIONS.`
          
          const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'gpt-4',
            temperature: 0.7
          })
          
          const jsonRaw = completion.choices[0].message.content?.trim()
          
          // Clean up potential markdown formatting
          const cleanJson = jsonRaw
            .replace(/```json\n?/g, '')
            .replace(/```\n?/g, '')
            .trim()
          
          const parsed = JSON.parse(cleanJson)
          
          // Create document with full multilingual support
          const doc = {
            _type: 'blogPost',
            title: {
              en: parsed.title || `Real Estate in ${geo}`,
              it: parsed.title_it || '',
              fr: '',
              de: '',
              zh: parsed.title_zh || '',
              ar: parsed.title_ar || ''
            },
            seoTitle: parsed.seoTitle || parsed.title,
            metaDescription: {
              en: parsed.metaDescription || `Discover luxury real estate in ${geo}, Puglia`,
              it: parsed.metaDescription_it || '',
              fr: '',
              de: '',
              zh: parsed.metaDescription_zh || '',
              ar: parsed.metaDescription_ar || ''
            },
            tags: parsed.tags || ['real-estate', 'puglia', geo.toLowerCase()],
            geoFocus: parsed.geoFocus || geo,
            body: { 
              en: [], 
              it: [], 
              fr: [], 
              de: [], 
              zh: [], 
              ar: [] 
            },
            mainImage: null,
            status: 'draft',
            publishedAt: new Date().toISOString()
          }
          
          // Create document using Sanity client
          const created = await client.create(doc)
          console.log(`Created post ${index + 1}/${count}: ${created._id}`)
          
          return {
            success: true,
            data: {
              id: created._id,
              title: doc.title.en,
              geo: doc.geoFocus
            }
          }
          
        } catch (error) {
          console.error(`Error creating post ${index + 1}:`, error)
          return {
            success: false,
            error: error.message || 'Unknown error',
            index
          }
        }
      })
      
      // Wait for batch to complete
      const batchResults = await Promise.all(batchPromises)
      
      // Collect results
      batchResults.forEach(result => {
        if (result.success) {
          results.push(result.data)
        } else {
          errors.push(result)
        }
      })
    }
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        message: `✅ Created ${results.length} SEO posts`,
        created: results.length,
        failed: errors.length,
        results: results,
        errors: errors.length > 0 ? errors : undefined
      })
    }
    
  } catch (error) {
    console.error('Handler error:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: error.message || 'Unknown error',
        type: error.constructor?.name || 'Error'
      })
    }
  }
}
