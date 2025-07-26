// app/blog/[slug]/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { client } from '@/lib/sanity/client'
import { urlForImage } from '@/lib/sanity/image'
import { CalendarIcon, UserIcon, ArrowLeftIcon, GlobeIcon } from 'lucide-react'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

interface Author {
  name: string
  image?: any
  bio?: string
}

interface Translation {
  title: string
  slug: {
    current: string
  }
  language: string
}

interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  publishedAt?: string
  author?: Author
  mainImage?: any
  categories?: string[]
  body?: any[]
  seoTitle?: string
  seoDescription?: string
  language?: string
  translations?: Translation[]
}

async function getPost(slug: string): Promise<Post | null> {
  if (!slug) {
    return null
  }

  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "author": author->{
      name,
      image,
      bio
    },
    mainImage,
    "categories": categories[]->title,
    body,
    seoTitle,
    seoDescription,
    // Get language and translations
    "language": language,
    "translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
      title,
      slug,
      language
    }
  }`
  
  return client.fetch(query, { slug })
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | InvestinPuglia',
    }
  }

  return {
    title: post.seoTitle || `${post.title} | InvestinPuglia`,
    description: post.seoDescription || post.excerpt || 'Read our latest insights on property investment in Puglia',
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage ? [urlForImage(post.mainImage).width(1200).height(630).url()] : [],
    },
  }
}

// Helper function to format date
function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Language names mapping
const languageNames: Record<string, string> = {
  en: 'English',
  it: 'Italiano',
  ar: 'العربية',
  zh: '中文',
  de: 'Deutsch',
  fr: 'Français'
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <div className="relative h-[400px] md:h-[500px] bg-gray-900">
        {post.mainImage && (
          <>
            <img
              src={urlForImage(post.mainImage).width(1920).height(500).url()}
              alt={post.mainImage.alt || post.title}
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </>
        )}
        
        {/* Content Overlay */}
        <div className="relative h-full flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            {/* Back Link */}
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Blog
            </Link>
            
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category: string, index: number) => (
                  <span 
                    key={index}
                    className="text-sm font-medium text-white bg-white/20 backdrop-blur px-3 py-1 rounded"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              {post.author && (
                <div className="flex items-center gap-2">
                  {post.author.image && (
                    <img
                      src={urlForImage(post.author.image).width(40).height(40).url()}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                  <div>
                    <div className="flex items-center gap-1">
                      <UserIcon className="w-4 h-4" />
                      <span className="font-medium">{post.author.name}</span>
                    </div>
                  </div>
                </div>
              )}
              {post.publishedAt && (
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Language Switcher */}
        {post.translations && post.translations.length > 0 && (
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <GlobeIcon className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">This post is available in:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href={`/blog/${post.slug.current}`}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  (!post.language || post.language === 'en')
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {languageNames.en}
              </Link>
              {post.translations.map((translation: Translation) => (
                <Link
                  key={translation.language}
                  href={`/blog/${translation.slug.current}`}
                  className="px-3 py-1 rounded text-sm font-medium bg-white text-gray-700 hover:bg-gray-100"
                >
                  {languageNames[translation.language] || translation.language}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>
        )}

        {/* Body Content */}
        {post.body && (
          <div className="prose prose-lg max-w-none">
            <PortableText 
              value={post.body}
              components={{
                types: {
                  image: ({ value }: any) => (
                    <img
                      src={urlForImage(value).width(800).url()}
                      alt={value.alt || ''}
                      className="rounded-lg my-8"
                    />
                  ),
                },
                marks: {
                  link: ({ children, value }: any) => (
                    <a 
                      href={value.href}
                      target={value.href.startsWith('http') ? '_blank' : undefined}
                      rel={value.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-blue-600 hover:underline"
                    >
                      {children}
                    </a>
                  ),
                },
              }}
            />
          </div>
        )}

        {/* Author Bio */}
        {post.author && post.author.bio && (
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3">About the Author</h3>
            <div className="flex items-start gap-4">
              {post.author.image && (
                <img
                  src={urlForImage(post.author.image).width(80).height(80).url()}
                  alt={post.author.name}
                  className="w-20 h-20 rounded-full flex-shrink-0"
                />
              )}
              <div>
                <h4 className="font-medium text-gray-900 mb-2">{post.author.name}</h4>
                <p className="text-gray-600">{post.author.bio}</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to all posts
          </Link>
        </div>
      </div>
    </article>
  )
}
