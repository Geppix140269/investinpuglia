// app/blog/[slug]/page.tsx - CREATE NEW FILE
export default function BlogPost({ params }: { params: { slug: string } }) {
  // Temporary placeholder - shows which post was clicked
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Blog Post: {params.slug}</h1>
        <p className="text-gray-600 mb-4">This blog post is coming soon!</p>
        <a href="/blog" className="text-purple-600 hover:text-purple-700">← Back to Blog</a>
      </div>
    </div>
  )
}
