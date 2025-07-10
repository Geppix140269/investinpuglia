// app/blog/[slug]/page.tsx
import { sanity } from '@/lib/sanity'
import { PortableText } from '@/lib/PortableText'
import { groq } from 'next-sanity'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export const revalidate = 60

export async function generateStaticParams() {
  const query = groq`*[_type == "post"]{ "slug": slug.current }`
  const slugs = await sanity.fetch(query)
  return slugs.map((s: any) => ({ slug: s.slug }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    publishedAt,
    mainImage {
      asset->{url},
      alt
    },
    author->{
      name,
      bio,
      image{
        asset->{url}
      }
    },
    categories[]->{
      title
    }
  }`
  
  const post = await sanity.fetch(query, { slug: params.slug })
  if (!post) notFound()

  // Format date
  const publishDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <>
      {/* Hero Section with Gradient Overlay - Matches your site style */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 py-20">
          {/* Category Badge */}
          {post.categories && post.categories.length > 0 && (
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">
                📁 {post.categories[0].title}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            {post.author && (
              <div className="flex items-center gap-3">
                {post.author.image?.asset?.url && (
                  <img 
                    src={post.author.image.asset.url} 
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full border-2 border-white/30"
                  />
                )}
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  {post.author.bio && (
                    <p className="text-sm text-white/60">{post.author.bio}</p>
                  )}
                </div>
              </div>
            )}
            <span className="text-sm">•</span>
            <time className="text-sm">{publishDate}</time>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <article className="relative">
        {/* Featured Image */}
        {post.mainImage?.asset?.url && (
          <div className="relative h-[500px] -mt-20 mb-12">
            <div className="max-w-5xl mx-auto px-5">
              <img
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || post.title}
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-5 py-12">
          {/* Glass Card for Content */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-8 md:p-12 border border-white/50">
            <div className="prose prose-lg md:prose-xl max-w-none 
                          prose-headings:font-bold prose-headings:text-gray-900
                          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                          prose-li:text-gray-700 prose-li:mb-2
                          prose-strong:text-emerald-700 prose-strong:font-semibold
                          prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline
                          prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 
                          prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600">
              <PortableText value={post.body} />
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Puglia Property Journey?
            </h3>
            <p className="text-lg mb-8 text-white/90">
              Get expert guidance and unlock up to €2.25M in EU grants for your investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/classic" 
                className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-all"
              >
                Calculate Your Grant
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-all"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* You'll fetch related posts here */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-emerald-400 to-teal-500"></div>
                <div className="p-6">
                  <h4 className="font-bold mb-2">Loading related posts...</h4>
                  <Link href="/blog" className="text-emerald-600 font-medium">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Back to Blog */}
      <div className="max-w-4xl mx-auto px-5 py-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
        >
          ← Back to All Articles
        </Link>
      </div>
    </>
  )
}

// app/blog/page.tsx - Blog Listing Page
import { sanity } from '@/lib/sanity'
import { groq } from 'next-sanity'
import Link from 'next/link'

export default async function BlogPage() {
  const query = groq`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage {
      asset->{url},
      alt
    },
    categories[]->{
      title
    },
    author->{
      name
    },
    "excerpt": body[0].children[0].text
  }`
  
  const posts = await sanity.fetch(query)

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-5 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Puglia Property Investment Insights
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Expert guidance on grants, property investment strategies, and market analysis for Puglia
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <article key={post._id} className="group">
                <Link href={`/blog/${post.slug.current}`}>
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-emerald-400 to-teal-500">
                      {post.mainImage?.asset?.url ? (
                        <img 
                          src={post.mainImage.asset.url} 
                          alt={post.mainImage.alt || post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-6xl opacity-50">🏛️</span>
                        </div>
                      )}
                      
                      {/* Category Badge */}
                      {post.categories && post.categories.length > 0 && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                            {post.categories[0].title}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      
                      {post.excerpt && (
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <span className="text-emerald-600 font-semibold group-hover:text-emerald-700">
                          Read More →
                        </span>
                        {post.publishedAt && (
                          <time className="text-sm text-gray-500">
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </time>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}