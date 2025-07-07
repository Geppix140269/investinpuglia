// app/blog/[slug]/page.tsx - Fixed with generateStaticParams
export async function generateStaticParams() {
  // Define all your blog post slugs here
  return [
    { slug: 'mini-pia-grants' },
    { slug: 'puglia-property-trends' },
    { slug: 'ostuni-success-story' },
    { slug: 'tax-optimization' },
    { slug: 'coastal-towns-puglia' },
    { slug: 'trullo-renovation-guide' },
  ]
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Blog post data - in a real app, you'd fetch this based on the slug
  const posts = {
    'mini-pia-grants': {
      title: "How to Get €540,000 in Italian Property Grants",
      content: "Complete guide to Mini PIA grants that can fund 45% of your Puglia property investment.",
      author: "Giuseppe Funaro",
      date: "November 15, 2024",
      readTime: "5 min"
    },
    'puglia-property-trends': {
      title: "Why Puglia Property Prices Will Double by 2027",
      content: "Data-driven analysis of Puglia's property boom.",
      author: "Maria Trulli",
      date: "November 10, 2024",
      readTime: "4 min"
    },
    'ostuni-success-story': {
      title: "From €200k to €2M: Ostuni Villa Success Story",
      content: "How our client turned a ruined masseria into a luxury rental.",
      author: "Giuseppe Funaro",
      date: "November 5, 2024",
      readTime: "6 min"
    },
    'tax-optimization': {
      title: "Tax Optimization for Italian Property Investors",
      content: "Advanced strategies to minimize tax liability.",
      author: "Marco Rossi",
      date: "October 28, 2024",
      readTime: "7 min"
    },
    'coastal-towns-puglia': {
      title: "Best Coastal Towns in Puglia for Investment",
      content: "Discover the hidden gems along Puglia's coastline.",
      author: "Sofia Bianchi",
      date: "October 20, 2024",
      readTime: "6 min"
    },
    'trullo-renovation-guide': {
      title: "Complete Guide to Trullo Renovation Costs",
      content: "Everything about renovating a trullo.",
      author: "Giuseppe Funaro",
      date: "October 15, 2024",
      readTime: "8 min"
    }
  }

  const post = posts[params.slug as keyof typeof posts]

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-4">Sorry, this blog post doesn't exist.</p>
          <a href="/blog" className="text-purple-600 hover:text-purple-700">← Back to Blog</a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-center gap-4 text-sm opacity-80">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">{post.content}</p>
          
          <div className="bg-purple-50 rounded-lg p-8 my-8">
            <h2 className="text-2xl font-bold mb-4">Want to Learn More?</h2>
            <p className="mb-4">This is a preview. Full article coming soon!</p>
            <div className="flex gap-4">
              <a href="/calculator" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
                Calculate Your Grant
              </a>
              <a href="/blog" className="text-purple-600 border-2 border-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50">
                Back to Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
