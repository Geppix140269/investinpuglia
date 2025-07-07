// app/blog/page.tsx - Updated to use markdown posts
import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Italian Property Investment Blog - Puglia Real Estate Insights',
  description: 'Expert insights on property investment in Puglia, Mini PIA grants, market trends, and success stories. Learn how to maximize your Italian real estate investment.',
  keywords: ['puglia property blog', 'italian real estate insights', 'mini pia grants', 'property investment italy'],
}

export default function BlogPage() {
  const posts = getAllPosts()
  const featuredPost = posts.find(post => post.featured) || posts[0]
  const regularPosts = posts.filter(post => post.slug !== featuredPost?.slug)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800">
      {/* Hero */}
      <div className="text-white text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">Italian Property Investment Blog</h1>
        <p className="text-xl opacity-90">Expert insights on grants, market trends, and success stories</p>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden hover:shadow-3xl transition-all transform hover:-translate-y-1">
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="md:flex">
                {featuredPost.image && (
                  <div className="md:w-1/2">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className={`p-8 ${featuredPost.image ? 'md:w-1/2' : ''}`}>
                  <div className="text-sm text-purple-600 font-semibold mb-2">FEATURED</div>
                  <h2 className="text-3xl font-bold mb-3 text-gray-800">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-4 text-lg">{featuredPost.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {featuredPost.date} • {featuredPost.readTime}
                    </div>
                    <span className="text-purple-600 font-semibold hover:text-purple-700">
                      Read More →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1 cursor-pointer">
              <Link href={`/blog/${post.slug}`}>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date} • {post.readTime}</div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-800">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-height-relaxed">{post.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-600 font-semibold hover:text-purple-700">Read More →</span>
                    <Link href="/calculator" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-sm">
                      Calculate ROI
                    </Link>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center text-white py-20">
            <p className="text-xl mb-4">No blog posts yet.</p>
            <p>Add markdown files to /content/blog/ to see them here!</p>
          </div>
        )}

        {/* CTA Section */}
        {posts.length > 0 && (
          <div className="mt-16 bg-white rounded-lg shadow-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Invest in Puglia?</h2>
            <p className="text-gray-600 mb-6">Calculate your potential returns and grant eligibility instantly</p>
            <Link href="/calculator" className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 inline-block">
              Try Our Free Calculator
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
