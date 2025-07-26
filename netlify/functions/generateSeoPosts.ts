// This will be the Netlify Function: `/netlify/functions/generateSeoPosts.ts`

import { createClient } from '@sanity/client'
import { OpenAI } from 'openai'

const client = createClient({
  projectId: 'trb0xnj0',
  dataset: 'production',
  apiVersion: '2023-07-25',
  token: process.env.SANITY_WRITE_API_TOKEN,
  useCdn: false,
})

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const locations = [
  'Ostuni', 'Martina Franca', 'Lecce', 'Cisternino', 'Alberobello',
  'Polignano a Mare', 'Monopoli', 'Carovigno', 'Brindisi', 'Taranto'
]

export async function handler() {
  const results = []

  for (let i = 0; i < 50; i++) {
    const geo = locations[Math.floor(Math.random() * locations.length)]

    const prompt = `Generate a multilingual blog post metadata entry for a real estate SEO blog. Focus on ${geo} in Puglia. Return JSON with: title, seoTitle, metaDescription, tags, geoFocus. Keep it short, clean, SEO-optimized.`

    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-4'
    })

    const jsonRaw = completion.choices[0].message.content?.trim()
    let parsed
    try {
      parsed = JSON.parse(jsonRaw || '')
    } catch (err) {
      console.error('Bad JSON:', jsonRaw)
      continue
    }

    const doc = {
      _type: 'blogPost',
      title: {
        en: parsed.title,
        it: '', fr: '', de: '', zh: '', ar: ''
      },
      seoTitle: parsed.seoTitle,
      metaDescription: parsed.metaDescription,
      tags: parsed.tags,
      geoFocus: parsed.geoFocus,
      body: { en: [], it: [], fr: [], de: [], zh: [], ar: [] },
      mainImage: null,
      status: 'draft',
      publishedAt: new Date().toISOString()
    }

    const created = await client.create(doc)
    results.push(created._id)
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `✅ Created ${results.length} SEO posts`, ids: results })
  }
}
