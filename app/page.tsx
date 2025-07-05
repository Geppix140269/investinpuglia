// app/page.tsx - Professional flow with all your beautiful content

'use client'

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Reordered but keeping all effects */}
      <section className="min-h-screen flex items-center py-20 px-5 relative overflow-hidden bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#059669] to-[#047857] bg-[length:400%_400%] animate-gradient">
        {/* Animated background elements */}
        <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] opacity-10" 
             style={{
               background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
               animation: 'shimmer 15s linear infinite'
             }} />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center">
            {/* Professional badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-7 py-3 rounded-full text-sm font-bold mb-8 shadow-lg animate-fadeIn">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
              EU GRANT EXPERTS - ITALIAN PROPERTY INVESTMENT
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 animate-fadeIn animation-delay-100">
              Secure <strong className="font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">€2.25M in Grants</strong> for Your Italian Property
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto animate-fadeIn animation-delay-200">
              Professional tools and expert advisory to maximize your investment in Puglia's booming real estate market
            </p>
            
            {/* Glass morphism value box */}
            <div className="inline-block bg-gradient-to-r from-yellow-400/20 to-orange-500/10 backdrop-blur-md border border-yellow-400/30 px-8 py-5 rounded-full mb-10 animate-fadeIn animation-delay-300">
              <p className="text-white text-lg font-semibold">
                💎 100% Success Rate - €50M+ in Grants Secured for Clients
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fadeIn animation-delay-400">
              <a 
                href="/calculator" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-5 rounded-full text-lg font-bold hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                Check Your Eligibility
                <span className="text-2xl">→</span>
              </a>
              <a 
                href="#success-story" 
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300"
              >
                See Success Stories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-20 relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/30"></div>
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🎯 THE OPPORTUNITY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Smart Money is <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Flowing to Puglia</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-xl hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3">300% Property Growth</h3>
              <p className="text-gray-600">Puglia property values projected to triple by 2030 (Knight Frank)</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-xl hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-bold mb-3">Tourism Explosion</h3>
              <p className="text-gray-600">15M+ tourists annually, new Ryanair hub opening 2025</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-xl hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-4">💶</div>
              <h3 className="text-xl font-bold mb-3">€3.2B in EU Funds</h3>
              <p className="text-gray-600">Massive grants available until 2027 for property development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story - Brigitte */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative" id="success-story">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%)',
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⭐ CLIENT SUCCESS STORY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              From Vision to <span className="text-yellow-400">€1.08M Reality</span>
            </h2>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <blockquote className="text-2xl font-light mb-6 leading-relaxed">
                  "Giuseppe turned my dream of owning a luxury property in Puglia into a profitable investment. 
                  His expertise secured me <span className="text-yellow-400 font-bold">€810,000 in grants</span> I didn't even know existed."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900">
                    BL
                  </div>
                  <div>
                    <div className="font-bold text-lg">Brigitte L.</div>
                    <div className="text-gray-300">Luxury Property Investor, Paris</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-400">€1.8M</div>
                  <div className="text-sm text-gray-300">Property Value</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-400">€810K</div>
                  <div className="text-sm text-gray-300">Grant Secured</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400">€270K</div>
                  <div className="text-sm text-gray-300">Tax Credits</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400">5 Months</div>
                  <div className="text-sm text-gray-300">To Approval</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Beautiful grid */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              💼 PROFESSIONAL SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Complete <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Investment Toolkit</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial analysis to grant approval - everything you need for success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service cards with hover effects */}
            <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 group-hover:text-white transition-colors">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🧮</div>
                <h3 className="text-2xl font-bold mb-4">Grant Calculators</h3>
                <p className="mb-6 text-gray-600 group-hover:text-white/90">
                  AI-powered tools to instantly calculate your eligibility for up to €2.25M in grants
                </p>
                <a href="/calculator" className="inline-flex items-center gap-2 font-semibold text-green-600 group-hover:text-white">
                  Try Calculator <span>→</span>
                </a>
              </div>
            </div>
            
            <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 group-hover:text-white transition-colors">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🔍</div>
                <h3 className="text-2xl font-bold mb-4">Property Survey</h3>
                <p className="mb-6 text-gray-600 group-hover:text-white/90">
                  Complete due diligence reports - legal, technical, and financial analysis
                </p>
                <a href="/surveys" className="inline-flex items-center gap-2 font-semibold text-purple-600 group-hover:text-white">
                  Learn More <span>→</span>
                </a>
              </div>
            </div>
            
            <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 group-hover:text-white transition-colors">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Elite Advisory</h3>
                <p className="mb-6 text-gray-600 group-hover:text-white/90">
                  1-on-1 guidance through every step of your investment journey
                </p>
                <a href="#advisor" className="inline-flex items-center gap-2 font-semibold text-orange-600 group-hover:text-white">
                  Meet Giuseppe <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Pay For Section - Repositioned */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              💎 VALUE PROPOSITION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Clients Choose <span className="text-green-400">InvestiScope</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value props with glass morphism */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Protection</h3>
              <p className="text-gray-300">
                Save €200,000+ by avoiding hidden property issues and legal complications
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Precision</h3>
              <p className="text-gray-300">
                100% success rate in securing grants - we know exactly what works
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Speed</h3>
              <p className="text-gray-300">
                5-month average from application to approval vs 18+ months alone
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Network</h3>
              <p className="text-gray-300">
                Direct access to key decision makers and exclusive off-market properties
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Strategy</h3>
              <p className="text-gray-300">
                Comprehensive investment planning including exit strategies and ROI optimization
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-4 text-red-400">Results</h3>
              <p className="text-gray-300">
                €50M+ in grants secured for clients with zero rejections
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Giuseppe - Now positioned appropriately */}
      <section className="py-20 bg-white relative" id="advisor">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              👤 YOUR ADVISOR
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Giuseppe Funaro</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your strategic partner in Italian property investment success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/foto.jpeg" 
                alt="Giuseppe Funaro" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            
            <div>
              <div className="prose prose-lg">
                <p className="text-lg text-gray-700 mb-6">
                  With 35+ years of international business experience and deep expertise in Italian 
                  property markets, Giuseppe Funaro has become the trusted advisor for sophisticated 
                  foreign investors seeking to maximize their returns in Italy.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <h4 className="font-bold mb-1">Elite Business Background</h4>
                      <p className="text-gray-600">Former telecom executive with €500M+ in managed projects</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">🌍</span>
                    <div>
                      <h4 className="font-bold mb-1">International Expertise</h4>
                      <p className="text-gray-600">Fluent in 5 languages, worked across 20+ countries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">💼</span>
                    <div>
                      <h4 className="font-bold mb-1">Grant Specialist</h4>
                      <p className="text-gray-600">100% success rate, €50M+ secured for clients</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                  <p className="text-gray-700 italic mb-4">
                    "I work with a maximum of 10 clients annually to ensure each receives the 
                    dedicated attention their investment deserves."
                  </p>
                  <p className="font-bold text-blue-900">— Giuseppe Funaro</p>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://calendly.com/investiscope_pro/30min" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Your Consultation
                  <span className="text-2xl">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 70%)',
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Join successful investors who've turned Italian dreams into profitable realities
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/calculator" 
              className="inline-flex items-center gap-3 bg-white text-green-700 px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              Check Grant Eligibility
              <span className="text-2xl">→</span>
            </a>
            <a 
              href="https://calendly.com/investiscope_pro/30min" 
              className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-green-700 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Strategy Call
            </a>
          </div>
          
          <p className="mt-8 text-sm text-white/70">
            Limited availability - Only 10 advisory clients accepted annually
          </p>
        </div>
      </section>
    </>
  )
}
