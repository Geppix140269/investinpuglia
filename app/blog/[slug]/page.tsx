// app/blog/[slug]/page.tsx - Beautiful blog post that works without any dependencies
'use client'

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Sample blog post data - in real app, this would come from your data source
  const blogPost = {
    title: "How to Get €540,000 in Italian Property Grants",
    subtitle: "Complete guide to Mini PIA grants that can fund 45% of your Puglia property investment",
    author: "Giuseppe Funaro",
    date: "November 15, 2024",
    readTime: "12 min read",
    category: "Grants & Funding",
    content: {
      intro: "The Mini PIA Turismo grant program represents one of the most significant opportunities for foreign property investors in Italy, offering up to €2.25 million in non-repayable funding. Yet many investors remain unaware of this incredible opportunity or struggle with the application process.",
      sections: [
        {
          title: "What is Mini PIA?",
          content: "Mini PIA (Piccoli Investimenti Attrattivi) is a regional funding program specifically designed to boost tourism infrastructure in Puglia. The program offers substantial financial incentives to investors who commit to developing tourism-related properties in the region."
        },
        {
          title: "Key Benefits",
          bullets: [
            "45-50% non-refundable grants on eligible project costs",
            "Additional 15% tax credit on top of the grant",
            "Maximum funding of €2.25 million per project",
            "Minimum investment threshold of only €30,000"
          ]
        },
        {
          title: "Real Success Story",
          highlight: {
            title: "€540,000 Grant Secured",
            client: "Sarah from London",
            investment: "€1,000,000",
            grant: "€450,000",
            taxCredit: "€150,000",
            netInvestment: "€400,000"
          }
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 py-20 sm:py-32">
          <div className="text-center">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              {blogPost.category}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {blogPost.title.split('€540,000')[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                €540,000
              </span>
              {blogPost.title.split('€540,000')[1]}
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              {blogPost.subtitle}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">GF</span>
                </div>
                <span>{blogPost.author}</span>
              </div>
              <span>•</span>
              <span>{blogPost.date}</span>
              <span>•</span>
              <span>{blogPost.readTime}</span>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl leading-relaxed text-gray-700 first-letter:text-7xl first-letter:font-bold first-letter:text-purple-600 first-letter:mr-3 first-letter:float-left">
            {blogPost.content.intro}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">45-50%</div>
            <div className="text-sm text-gray-600">Grant Coverage</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">€2.25M</div>
            <div className="text-sm text-gray-600">Max Funding</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">€30K</div>
            <div className="text-sm text-gray-600">Min Investment</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">15%</div>
            <div className="text-sm text-gray-600">Tax Credit</div>
          </div>
        </div>

        {/* Main sections */}
        {blogPost.content.sections.map((section, index) => (
          <section key={index} className="mb-12">
            {section.title && (
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-purple-600">{String(index + 1).padStart(2, '0')}.</span>
                {section.title}
              </h2>
            )}
            
            {section.content && (
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {section.content}
              </p>
            )}
            
            {section.bullets && (
              <ul className="space-y-4 mb-8">
                {section.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-700 text-lg">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {section.highlight && (
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">{section.highlight.title}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm opacity-70">Client</div>
                      <div className="text-xl font-semibold">{section.highlight.client}</div>
                    </div>
                    <div>
                      <div className="text-sm opacity-70">Total Investment</div>
                      <div className="text-2xl font-bold">{section.highlight.investment}</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm opacity-70">Mini PIA Grant</div>
                      <div className="text-2xl font-bold text-green-400">{section.highlight.grant}</div>
                    </div>
                    <div>
                      <div className="text-sm opacity-70">Net Investment</div>
                      <div className="text-2xl font-bold text-yellow-400">{section.highlight.netInvestment}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        ))}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 text-center my-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Secure Your Grant?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Use our free calculator to instantly see how much funding you could receive for your Italian property investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/calculator" className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-all hover:scale-105">
              <span>🧮</span> Calculate My Grant
            </a>
            <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all hover:scale-105">
              <span>📞</span> Book Consultation
            </a>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-16 border border-gray-100">
          <div className="flex items-center gap-6 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              GF
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900">{blogPost.author}</h4>
              <p className="text-gray-600">Senior Property Investment Advisor</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            With 35+ years of international business experience, Giuseppe specializes in helping foreign investors maximize their returns through Italian property investment and EU grant optimization.
          </p>
        </div>

        {/* Related Articles */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600"></div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Why Puglia Property Prices Will Double by 2027
                </h4>
                <p className="text-gray-600 mb-4">
                  Data-driven analysis of Puglia's property boom and market trends...
                </p>
                <a href="#" className="text-purple-600 font-semibold hover:text-purple-700">
                  Read More →
                </a>
              </div>
            </article>
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-600"></div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Complete Guide to Trullo Renovation Costs
                </h4>
                <p className="text-gray-600 mb-4">
                  Everything you need to know about renovating a trullo in Puglia...
                </p>
                <a href="#" className="text-purple-600 font-semibold hover:text-purple-700">
                  Read More →
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* Newsletter */}
      <section className="bg-gradient-to-br from-purple-900 to-indigo-900 py-16 mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Get Weekly Investment Insights
          </h3>
          <p className="text-white/80 mb-8 text-lg">
            Join 5,000+ investors getting exclusive tips on Italian property investment
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="px-8 py-3 bg-white text-purple-900 font-semibold rounded-full hover:bg-gray-100 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
