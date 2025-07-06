// app/blog/page.tsx - COMPLETE REWRITE
export default function BlogPage() {
  const blogPosts = [
    {
      title: "How to Get €540,000 in Italian Property Grants",
      description: "Complete guide to Mini PIA grants that can fund 45% of your Puglia property investment. Real examples and step-by-step process.",
      date: "November 15, 2024",
      readTime: "5 min",
      keywords: "italian property grants, mini pia puglia, italy real estate incentives"
    },
    {
      title: "Why Puglia Property Prices Will Double by 2027",
      description: "Data-driven analysis of Puglia's property boom. International buyers are driving 30% annual growth in coastal areas.",
      date: "November 10, 2024",
      readTime: "4 min",
      keywords: "puglia property investment, italy real estate market, puglia property prices"
    },
    {
      title: "From €200k to €2M: Ostuni Villa Success Story",
      description: "How our client turned a ruined masseria into a luxury rental generating €180,000/year using government grants.",
      date: "November 5, 2024",
      readTime: "6 min",
      keywords: "puglia property success story, italian villa renovation, ostuni real estate"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800">
      {/* Simple Nav */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-purple-600">InvestiScope</a>
          <div className="space-x-6">
            <a href="/" className="text-gray-700 hover:text-purple-600">Home</a>
            <a href="/blog" className="text-purple-600 font-bold">Blog</a>
            <a href="/calculator" className="text-gray-700 hover:text-purple-600">Calculator</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="text-white text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">Italian Property Investment Blog</h1>
        <p className="text-xl opacity-90">Expert insights on grants, market trends, and success stories</p>
      </div>

      {/* Blog Posts */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date} • {post.readTime}</div>
                <h2 className="text-2xl font-bold mb-3 text-gray-800">{post.title}</h2>
                <p className="text-gray-600 mb-4 line-height-relaxed">{post.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-600 font-semibold">Read More →</span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                    Calculate ROI
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Invest in Puglia?</h2>
          <p className="text-gray-600 mb-6">Calculate your potential returns and grant eligibility instantly</p>
          <a href="/calculator" className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 inline-block">
            Try Our Free Calculator
          </a>
        </div>
      </div>
    </div>
  )
}
