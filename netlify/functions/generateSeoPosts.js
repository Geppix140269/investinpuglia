import { createClient } from '@sanity/client'
import { OpenAI } from 'openai'

const client = createClient({
  projectId: 'trb0xnj0',
  dataset: 'production',
  apiVersion: '2023-07-25',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
  apiHost: 'https://trb0xnj0.api.sanity.io'
})

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const locations = [
  'Ostuni', 'Martina Franca', 'Lecce', 'Cisternino', 'Alberobello',
  'Polignano a Mare', 'Monopoli', 'Carovigno', 'Brindisi', 'Taranto'
]

export async function handler(event) {
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
    
    for (let i = 0; i < count; i++) {
      try {
        const geo = locations[Math.floor(Math.random() * locations.length)]
        
        // Updated prompt to ensure JSON response without response_format
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
          // Removed response_format as it's not supported
        })
        
        const jsonRaw = completion.choices[0].message.content?.trim()
        
        // Clean up potential markdown formatting
        const cleanJson = jsonRaw
          .replace(/```json\n?/g, '')
          .replace(/```\n?/g, '')
          .trim()
        
        let parsed
        try {
          parsed = JSON.parse(cleanJson)
        } catch (err) {
          console.error('JSON parse error:', err, 'Raw:', jsonRaw)
          errors.push({ index: i, error: 'Invalid JSON from OpenAI' })
          continue
        }
        
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
        
        // Create document in Sanity
        const created = await client.create(doc)
        results.push({
          id: created._id,
          title: doc.title.en,
          geo: doc.geoFocus
        })
        
        console.log(`Created post ${i + 1}/${count}: ${created._id}`)
        
      } catch (innerError) {
        console.error(`Error creating post ${i + 1}:`, innerError)
        errors.push({
          index: i,
          error: innerError.message || 'Unknown error'
        })
      }
    }
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
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
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        error: error.message || 'Unknown error',
        type: error.constructor?.name || 'Error'
      })
    }
  }
}
