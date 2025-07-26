// lib/sanity/client.ts
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
})

// Helper to get the correct language version of a document
export async function getLocalizedDocument(documentId: string, language: string = 'en') {
  // First try to get the document in the requested language
  const query = `*[_id == $documentId || _id == $langDocId][0]`
  
  const doc = await client.fetch(query, {
    documentId,
    langDocId: `${documentId}__i18n_${language}`
  })
  
  return doc
}

// Helper to get all posts in a specific language
export async function getPostsByLanguage(language: string = 'en') {
  const query = `*[_type == "post" && language == $language] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "author": author->name,
    mainImage,
    "categories": categories[]->title,
    language
  }`
  
  return client.fetch(query, { language })
}
