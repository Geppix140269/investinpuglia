// app/blog/page.tsx - Beautiful blog page with stunning design
'use client'

export default function BlogPage() {
  const blogPosts = [
    {
      title: "How to Get €540,000 in Italian Property Grants",
      description: "Complete guide to Mini PIA grants that can fund 45% of your Puglia property investment. Real examples and step-by-step process.",
      date: "November 15, 2024",
      readTime: "5 min",
      slug: "mini-pia-grants",
      category: "Grants",
      categoryColor: "from-green-400 to-emerald-600",
      featured: true,
      author: "Giuseppe Funaro",
      image: "💰"
    },
    {
      title: "Why Puglia Property Prices Will Double by 2027",
      description: "Data-driven analysis of Puglia's property boom. International buyers are driving 30% annual growth in coastal areas.",
      date: "November 10, 2024",
      readTime: "4 min",
      slug: "puglia-property-trends",
      category: "Market Analysis",
      categoryColor: "from-blue-400 to-indigo-600",
      author: "Maria Trulli",
      image: "📈"
    },
    {
      title: "From €200k to €2M: Ostuni Villa Success Story",
      description: "How our client turned a ruined masseria into a luxury rental generating €180,000/year using government grants.",
      date: "November 5, 2024",
      readTime: "6 min",
      slug: "ostuni-success-story",
      category: "Success Stories",
      categoryColor: "from-purple-400 to-pink-600",
      author: "Giuseppe Funaro",
      image: "🏆"
    },
    {
      title: "Tax Optimization for Italian Property Investors",
      description: "Advanced strategies to minimize tax liability and maximize returns on your Italian property investment.",
      date: "October 28, 2024",
      readTime: "7 min",
      slug: "tax-optimization",
      category: "Tax & Legal",
      categoryColor: "from-yellow-400 to-orange-600",
      author: "Marco Rossi",
      image: "⚖️"
    },
    {
      title: "Best Coastal Towns in Puglia for Investment",
      description: "Discover the hidden gems and upcoming hotspots along Puglia's stunning coastline before prices skyrocket.",
      date: "October 20, 2024",
      readTime: "6 min",
      slug: "coastal-towns-puglia",
      category: "Area Guides",
      categoryColor: "from-cyan-400 to-blue-600",
      author: "Sofia Bianchi",
      image: "🏖️"
    },
    {
      title: "Complete Guide to Trullo Renovation Costs",
      description: "Everything you need to know about renovating a trullo: realistic budgets, timeline, and avoiding costly mistakes.",
      date: "October 15, 2024",
      readTime: "8 min",
      slug: "trullo-renovation-guide",
      category: "Renovation",
      categoryColor: "from-orange-400 to-red-600",
      author: "Giuseppe Funaro",
      image: "🏗️"
    }
  ]

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white/90 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              NEW ARTICLES EVERY WEEK
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Investment <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400">Insights</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12">
              Expert guidance on Italian property investment, EU grants, market analysis, and proven strategies for maximizing returns in Puglia
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/calculator" className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2">
                <span>🧮</span>
                Calculate Your Grant
              </a>
              <a href="#newsletter" className="bg-purple-700/50 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-purple-700/70 transition-all inline-flex items-center gap-2">
                <span>📧</span>
                Subscribe to Newsletter
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L48 8.5C96 17 192 34 288 46.7C384 59 480 67 576 63.2C672 59 768 43 864 34.2C960 25 1056 23 1152 29.8C1248 37 1344 53 1392 61L1440 69V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
            <div className="grid md:grid-cols-2">
              <div className={`bg-gradient-to-br ${featuredPost.categoryColor} p-16 flex items-center justify-center`}>
                <div className="text-center">
                  <div className="text-8xl mb-4 animate-float">{featuredPost.image}</div>
                  <div className="bg-white/20 backdrop-blur rounded-full px-4 py-2 text-white font-semibold text-sm">
                    FEATURED ARTICLE
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <span className={`bg-gradient-to-r ${featuredPost.categoryColor} text-white px-4 py-1 rounded-full font-medium`}>
                    {featuredPost.category}
                  </span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {featuredPost.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-sm">
                        {featuredPost.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-gray-700 font-medium">{featuredPost.author}</span>
                  </div>
                  <a 
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors group"
                  >
                    Read Article
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Articles</h2>
          <p className="text-xl text-gray-600">Stay updated with the latest investment insights and opportunities</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <article 
              key={post.slug}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className={`h-48 bg-gradient-to-br ${post.categoryColor} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl z-10">{post.image}</div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm mb-4">
                  <span className={`bg-gradient-to-r ${post.categoryColor} text-white px-3 py-1 rounded-full font-medium text-xs`}>
                    {post.category}
                  </span>
                  <span className="text-gray-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <a 
                    href={`/blog/${post.slug}`}
                    className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    Read →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                <span className="text-4xl">📧</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get Weekly Investment Insights
              </h2>
              
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Join 5,000+ smart investors receiving exclusive tips on Italian property investment, grant opportunities, and market analysis
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-4 focus:ring-white/20 focus:bg-white/30 transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-white/60 text-sm mt-6">
                ✓ No spam ✓ Unsubscribe anytime ✓ 100% free
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Discover how much you could save with EU grants and optimize your investment strategy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/calculator" className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 hover:shadow-xl transition-all hover:scale-105">
              <span>🧮</span>
              Try Investment Calculator
            </a>
            <a href="/surveys" className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all hover:scale-105">
              <span>🔍</span>
              Order Property Survey
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
