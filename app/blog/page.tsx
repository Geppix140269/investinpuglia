import { sanity } from '@/lib/sanity'
import { getAllPosts } from '@/lib/queries'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await sanity.fetch(getAllPosts)

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-2">InvestiScope Blog</h1>
      <p className="text-center text-gray-500 mb-10">
        Insights on grants, tourism, restoration and strategy in Southern Italy
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <div key={post._id} className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
            {post.mainImage?.asset?.url && (
              <img src={post.mainImage.asset.url} alt={post.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <Link href={`/blog/${post.slug.current}`} className="text-green-600 font-medium hover:underline">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
