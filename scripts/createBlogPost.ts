// scripts/createBlogPost.ts

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'trb0xnj0',
  dataset: 'production',
  apiVersion: '2023-07-25',
  token: 'skPMMzqE6I8xMDejdgrPKY8GOUpYbxtY3NQacGmzabVXwHvjQcG8XvbM9II9MNrDrP9Q3UVWFlgfGjsfYKcnyfzjwrZyWiPC9NiMNtCvaHsQC3l4PU1bRLxYmfM7G7JWhPFESvbXFjpKKkUA5cCk72E3ygm2X4aP26C7wkSqhpu7V0vYB1Um',
  useCdn: false,
})

async function run() {
  const post = {
    _type: 'blogPost',
    title: {
      en: 'Why Puglia Is the Most Promising Property Market in Europe',
      ar: 'أصبحت بوليا واحدة من أكثر الأسواق العقارية الواعدة في أوروبا',
      zh: '为什么普利亚是欧洲最有前景的房地产市场',
      it: '',
      de: '',
      fr: '',
    },
    slug: {
      _type: 'slug',
      current: 'why-puglia-property-market'
    },
    language: 'en',
    status: 'published',
    body: {
      en: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Puglia has emerged as one of the most promising real estate markets in Europe...',
              marks: [],
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      ar: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'أصبحت بوليا واحدة من أكثر الأسواق العقارية الواعدة في أوروبا...',
              marks: [],
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      zh: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: '普利亚已成为欧洲最具前景的房地产市场之一...',
              marks: [],
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      it: [],
      de: [],
      fr: [],
    },
    seoTitle: 'Invest in Puglia: Real Estate 2025',
    metaDescription: 'Why Puglia is the hottest destination for real estate investors in 2025. Historic homes, low prices, and government grants.',
    tags: ['puglia', 'investment', 'real estate', 'foreign buyers', '2025', 'trulli', 'masseria'],
    geoFocus: 'Valle d’Itria',
    publishedAt: new Date().toISOString(),
  }

  const result = await client.create(post)
  console.log('✅ Post created with ID:', result._id)
}

run().catch((err) => console.error('❌ ERROR:', err))
