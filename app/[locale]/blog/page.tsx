// app/[locale]/blog/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { client } from '@/lib/sanity/client'
import { urlForImage } from '@/lib/sanity/image'
import { CalendarIcon, UserIcon, ArrowRightIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | InvestinPuglia',
  description: 'Latest insights on property investment opportunities in Puglia, Italy',
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

async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
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
  
  return client.fetch(query)
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default async function BlogPage() {
  const posts = await getPosts()
  const englishPosts = posts.filter((post: Post) => !post.language || post.language === 'en')

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            InvestinPuglia Blog
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the latest insights, market trends, and investment opportunities 
            in Puglia&apos;s thriving real estate market
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {englishPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No blog posts available yet.</p>
              <p className="text-gray-500 mt-2">Check back soon for updates!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {englishPosts.map((post: Post) => (
                <article 
                  key={post._id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {post.mainImage && (
                    <Link href={`/blog/${post.slug.current}`}>
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={urlForImage(post.mainImage).width(400).height(300).url()}
                          alt={post.mainImage.alt || post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                  )}
                  
                  <div className="p-6">
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.map((category: string, index: number) => (
                          <span 
                            key={index}
                            className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      <Link 
                        href={`/blog/${post.slug.current}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    
                    {post.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        {post.publishedAt && (
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="w-4 h-4" />
                            <time dateTime={post.publishedAt}>
                              {formatDate(post.publishedAt)}
                            </time>
                          </div>
                        )}
                        {post.author && (
                          <div className="flex items-center gap-1">
                            <UserIcon className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug.current}`}
                      className="inline-flex items-center gap-2 text-blue-600 font-medium mt-4 hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
