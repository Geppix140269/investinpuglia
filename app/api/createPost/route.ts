import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@sanity/client'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { v4 as uuidv4 } from 'uuid'
import { IncomingForm } from 'formidable'
import { writeFile } from 'fs/promises'
import { tmpdir } from 'os'

// Required because Next.js doesn't handle FormData with files natively in API routes
export const dynamic = 'force-dynamic'

// Sanity client setup
const client = createClient({
  projectId: 'trb0xnj0',
  dataset: 'production',
  apiVersion: '2023-07-25',
  token: process.env.SANITY_API_TOKEN, // make sure this is set in Netlify
  useCdn: false,
})

async function parseForm(req: NextRequest): Promise<any> {
  const form = new IncomingForm({ multiples: false, uploadDir: tmpdir(), keepExtensions: true })
  return new Promise((resolve, reject) => {
    form.parse(req as any, (err, fields, files) => {
      if (err) return reject(err)
      resolve({ fields, files })
    })
  })
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const title = formData.get('title') as string
    const body = formData.get('body') as string
    const seoTitle = formData.get('seoTitle') as string
    const metaDescription = formData.get('metaDescription') as string
    const tags = formData.get('tags') as string
    const geoFocus = formData.get('geoFocus') as string
    const altText = formData.get('altText') as string
    const caption = formData.get('caption') as string
    const file = formData.get('mainImage') as File | null

    let mainImageRef = null

    if (file && typeof file === 'object') {
      const arrayBuffer = await file.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      const uploaded = await client.assets.upload('image', buffer, {
        filename: file.name,
        contentType: file.type
      })

      mainImageRef = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: uploaded._id
        },
        alt: altText,
        caption
      }
    }

    const doc = {
      _type: 'blogPost',
      title: {
        en: title,
        it: '',
        fr: '',
        de: '',
        zh: '',
        ar: ''
      },
      body: {
        en: [
          {
            _type: 'block',
            style: 'normal',
            markDefs: [],
            children: [
              { _type: 'span', text: body, marks: [] }
            ]
          }
        ],
        it: [],
        fr: [],
        de: [],
        zh: [],
        ar: []
      },
      seoTitle,
      metaDescription,
      tags: tags.split(',').map(tag => tag.trim()),
      geoFocus,
      status: 'published',
      mainImage: mainImageRef,
      publishedAt: new Date().toISOString()
    }

    const created = await client.create(doc)

    return NextResponse.json({ message: `✅ Blog post created with ID: ${created._id}` })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ message: `❌ Failed: ${err.message}` }, { status: 500 })
  }
}
