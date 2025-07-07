// app/blog/[slug]/page.tsx - Individual blog post page
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

// Generate metadata for SEO
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - InvestiScope Blog',
    }
  }

  return {
    title: `${post.title} | InvestiScope Property Investment Blog`,
    description: post.description,
    keywords: post.keywords,
    authors: post.author ? [{ name: post.author }] : undefined,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: post.image ? [post.image] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(params.slug, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800">
      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link href="/blog" className="text-white hover:text-purple-200 inline-flex items-center gap-2">
          ← Back to Blog
        </Link>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Article Header */}
          {post.image && (
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          )}
          
          <div className="p-8 md:p-12">
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{post.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                <span>📅 {post.date}</span>
                <span>⏱️ {post.readTime}</span>
                {post.author && <span>✍️ By {post.author}</span>}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {post.keywords.map((keyword, index) => (
                  <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </header>
            
            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content || '' }}
            />
            
            {/* Call to Actions */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Start Your Investment Journey?</h3>
                <p className="text-gray-700 mb-6">Use our free tools to analyze your investment opportunity or get expert consultation.</p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/calculator" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center gap-2">
                    🧮 Calculate Your Grant
                  </Link>
                  <Link href="/surveys" className="bg-white text-purple-600 border-2 border-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors inline-flex items-center gap-2">
                    🔍 Order Property Survey
                  </Link>
                  <Link href="/contact" className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
                    📞 Get Expert Help
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Author Bio (if provided) */}
            {post.author && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-lg mb-2">About the Author</h3>
                <p className="text-gray-700">
                  {post.author === 'Giuseppe Funaro' 
                    ? 'Giuseppe Funaro is a senior property investment advisor with 35+ years of international business experience, specializing in Italian property investment and EU grant optimization.'
                    : `${post.author} is a property investment expert at InvestiScope.`
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {relatedPost.date} • {relatedPost.readTime}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{relatedPost.title}</h3>
                    <p className="text-gray-600 text-sm">{relatedPost.description}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-lg shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated on Italian Property Investment</h3>
          <p className="text-gray-600 mb-6">Get the latest insights on grants, market trends, and investment opportunities.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
            />
            <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
