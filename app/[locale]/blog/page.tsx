// app/[locale]/blog/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { client } from '@/lib/sanity/client'
import { urlForImage } from '@/lib/sanity/image'
import { CalendarIcon, UserIcon, ArrowRightIcon } from 'lucide-react'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { type Locale } from '@/lib/i18n/config'

interface PageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const dict = await getDictionary(params.locale)
  return {
    title: dict.blog.title,
    description: dict.blog.subtitle,
  }
}

interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  publishedAt?: string
  author?: string
  mainImage?: any
  categories?: string[]
  language?: string
}

async function getPosts(locale: Locale): Promise<Post[]> {
  // Fetch posts for the current language
  const query = `*[_type == "post" && language == $language && !(_id in path("drafts.**"))] | order(publishedAt desc) {
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
  
  return client.fetch(query, { language: locale })
}

// Helper function to format date based on locale
function formatDate(date: string, locale: Locale): string {
  const localeMap: Record<Locale, string> = {
    en: 'en-US',
    it: 'it-IT',
    ar: 'ar-SA',
    zh: 'zh-CN',
    de: 'de-DE',
    fr: 'fr-FR'
  }
  
  return new Date(date).toLocaleDateString(localeMap[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default async function BlogPage({ params }: PageProps) {
  const dict = await getDictionary(params.locale)
  const posts = await getPosts(params.locale)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {dict.blog.title}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {dict.blog.subtitle}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">{dict.blog.noPosts}</p>
              <p className="text-gray-500 mt-2">{dict.blog.checkBack}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: Post) => (
                <article 
                  key={post._id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Post Image */}
                  {post.mainImage && (
                    <Link href={`/${params.locale}/blog/${post.slug.current}`}>
                      <div className="relative h-48 overflow-hidden">
