// app/blog/page.tsx - COMPLETE FILE REPLACEMENT
'use client'

import Link from 'next/link'

export default function BlogPage() {
  const blogPosts = [
    {
      title: "How to Get €540,000 in Italian Property Grants",
      description: "Complete guide to Mini PIA grants that can fund 45% of your Puglia property investment. Real examples and step-by-step process.",
      date: "November 15, 2024",
      readTime: "5 min",
      slug: "mini-pia-grants",
      keywords: "italian property grants, mini pia puglia, italy real estate incentives"
    },
    {
      title: "Why Puglia Property Prices Will Double by 2027",
      description: "Data-driven analysis of Puglia's property boom. International buyers are driving 30% annual growth in coastal areas.",
      date: "November 10, 2024",
      readTime: "4 min",
      slug: "puglia-property-trends",
      keywords: "puglia property investment, italy real estate market, puglia property prices"
    },
    {
      title: "From €200k to €2M: Ostuni Villa Success Story",
      description: "How our client turned a ruined masseria into a luxury rental generating €180,000/year using government grants.",
      date: "November 5, 2024",
      readTime: "6 min",
      slug: "ostuni-success-story",
      keywords: "puglia property success story, italian villa renovation, ostuni real estate"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800">
      {/* Hero */}
      <div className="text-white text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">Italian Property Investment Blog</h1>
        <p className="text-xl opacity-90">Expert insights on grants, market trends, and success stories</p>
      </div>

      {/* Blog Posts */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1 cursor-pointer">
              <Link href={`/blog/${post.slug}`}>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date} • {post.readTime}</div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-800">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-height-relaxed">{post.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-600 font-semibold hover:text-purple-700">Read More →</span>
                    <Link href="/calculator" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                      Calculate ROI
                    </Link>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Invest in Puglia?</h2>
          <p className="text-gray-600 mb-6">Calculate your potential returns and grant eligibility instantly</p>
          <Link href="/calculator" className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 inline-block">
            Try Our Free Calculator
          </Link>
        </div>
      </div>
    </div>
  )
}
