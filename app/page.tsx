// app/page.tsx - Complete page with intentional design variety

'use client'

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Video Background - Clean & Modern */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/puglia-background.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img 
              src="/puglia-background-fallback.jpg" 
              alt="Beautiful Puglia landscape"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </video>
          
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 text-center">
          {/* Simple, honest badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-fadeIn">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            PROPERTY INVESTMENT ADVISORY • PUGLIA
          </div>
          
          {/* Clear, straightforward headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 animate-fadeIn animation-delay-100 leading-tight">
            Your Clear Path to<br />
            <span className="font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Property Investment in Puglia
            </span>
          </h1>
          
          {/* Honest value proposition */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto animate-fadeIn animation-delay-200 font-light">
            Navigate Italian property investment with confidence
            <span className="block mt-2 text-lg md:text-xl text-white/80">
              Professional tools, grant analysis, and expert guidance—all in one place
            </span>
          </p>
          
          {/* Real benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fadeIn animation-delay-300">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm">
              ✓ Free grant eligibility calculator
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm">
              ✓ Property due diligence reports
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm">
              ✓ Local market expertise
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm">
              ✓ Step-by-step guidance
            </div>
          </div>
          
          {/* Clear CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fadeIn animation-delay-400">
            <a 
              href="/calculator" 
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-5 rounded-full text-lg font-bold hover:from-emerald-700 hover:to-teal-700 transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <span>Calculate Your Grant Eligibility</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#how-it-works"
              className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300"
            >
              <span>Learn How It Works</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
          
          {/* Simple trust indicator */}
          <div className="mt-16 animate-fadeIn animation-delay-500">
            <p className="text-white/80 text-lg mb-2">Questions? Let's talk.</p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-white/70">
              <a href="tel:+393514001402" className="hover:text-white transition-colors">
                📞 +39 351 400 1402
              </a>
              <span>•</span>
              <a href="mailto:info@investiscope.net" className="hover:text-white transition-colors">
                ✉️ info@investiscope.net
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Grant Source Institutions Section - Professional & Clean */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
                FUNDING PROGRAM AFFILIATION
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Grant Source Institutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                InvestiScope™ provides consultancy and support services related to the Mini PIA program — 
                a public funding initiative co-financed by Regione Puglia and the European Union.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <p className="text-center text-sm text-gray-600 mb-6 font-medium">
                This grant opportunity is co-financed by:
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-12 mb-8">
                <div className="flex flex-col items-center">
                  <img 
                    src="/EN_co_fundedvertical_RGB_POS.png" 
                    alt="Co-funded by the European Union" 
                    className="h-24 w-auto mb-2"
                  />
                </div>
                
                <div className="flex flex-col items-center">
                  <img 
                    src="/regione_puglia-Photoroom.png" 
                    alt="Regione Puglia" 
                    className="h-20 w-auto mb-2 grayscale opacity-80"
                  />
                  <p className="text-sm text-gray-600">Regione Puglia</p>
                  <p className="text-xs text-gray-500">POR Puglia 2014-2027</p>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <p className="text-xs text-gray-500 text-center italic">
                  <strong>Disclaimer:</strong> InvestiScope™ is an independent private consultancy and is not 
                  affiliated with or endorsed by Regione Puglia or the European Union.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity Section - Bright & Optimistic */}
      <section className="py-20 relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/30"></div>
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              🎯 THE OPPORTUNITY
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Smart Money is <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Flowing to Puglia</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3">300% Property Growth</h3>
              <p className="text-gray-600">Puglia property values projected to triple by 2030 (Knight Frank)</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-bold mb-3">Tourism Explosion</h3>
              <p className="text-gray-600">15M+ tourists annually, new Ryanair hub opening 2025</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">💶</div>
              <h3 className="text-xl font-bold mb-3">€3.2B in EU Funds</h3>
              <p className="text-gray-600">Massive grants available until 2027 for property development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story - Premium & Dramatic */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative" id="success-story">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%)',
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 text-amber-300 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              ⭐ CLIENT SUCCESS STORY
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              From Vision to <span className="text-amber-400">€1.08M Reality</span>
            </h2>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <blockquote className="text-2xl font-light mb-6 leading-relaxed">
                  "Giuseppe turned my dream of owning a luxury property in Puglia into a profitable investment. 
                  His expertise secured me <span className="text-amber-400 font-bold">€810,000 in grants</span> I didn't even know existed."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900">
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
                  <div className="text-3xl font-bold text-amber-400">€1.8M</div>
                  <div className="text-sm text-gray-300">Property Value</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-400">€810K</div>
                  <div className="text-sm text-gray-300">Grant Secured</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-sky-400">€270K</div>
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

      {/* Services Section - Colorful & Dynamic */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              💼 PROFESSIONAL SERVICES
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Your Complete <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Investment Toolkit</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial analysis to grant approval - everything you need for success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service cards with consistent styling but different accent colors */}
            <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 group-hover:text-white transition-colors">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🧮</div>
                <h3 className="text-2xl font-bold mb-4">Grant Calculators</h3>
                <p className="mb-6 text-gray-600 group-hover:text-white/90">
                  AI-powered tools to instantly calculate your eligibility for up to €2.25M in grants
                </p>
                <a href="/calculator" className="inline-flex items-center gap-2 font-semibold text-emerald-600 group-hover:text-white">
                  Try Calculator <span>→</span>
                </a>
              </div>
            </div>
            
            <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 group-hover:text-white transition-colors">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Elite Advisory</h3>
                <p className="mb-6 text-gray-600 group-hover:text-white/90">
                  1-on-1 guidance through every step of your investment journey
                </p>
                <a href="#advisor" className="inline-flex items-center gap-2 font-semibold text-amber-600 group-hover:text-white">
                  Meet Giuseppe <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - Dark & Premium */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              💎 VALUE PROPOSITION
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Why Clients Choose <span className="text-emerald-400">InvestiScope</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Consistent glass morphism cards with color accents */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Protection</h3>
              <p className="text-gray-300">
                Save €200,000+ by avoiding hidden property issues and legal complications
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-sky-400">Precision</h3>
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
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Network</h3>
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
              <h3 className="text-2xl font-bold mb-4 text-rose-400">Results</h3>
              <p className="text-gray-300">
                €50M+ in grants secured for clients with zero rejections
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Giuseppe - Professional & Trustworthy */}
      <section className="py-20 bg-white relative" id="advisor">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              👤 YOUR ADVISOR
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Meet <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Giuseppe Funaro</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your strategic partner in Italian property investment success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/Giuseppe Funaro 062025.jpg" 
                alt="Giuseppe Funaro - Property Investment Advisor Puglia" 
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
                
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                  <p className="text-gray-700 italic mb-4">
                    "I work with a maximum of 10 clients annually to ensure each receives the 
                    dedicated attention their investment deserves."
                  </p>
                  <p className="font-bold text-indigo-900">— Giuseppe Funaro</p>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://calendly.com/investiscope_pro/30min" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all"
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

      {/* FAQ Section - Clean & Informative */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Property Investment in Puglia - Quick Answers
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3">Why invest in Puglia property?</h3>
              <p className="text-gray-700">
                Puglia offers 300% projected growth by 2030, €3.2B in EU grants, 
                and 15M+ annual tourists. Prime areas include Lecce, Gallipoli, 
                and Valle d'Itria for property investment.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3">How much are Puglia property grants?</h3>
              <p className="text-gray-700">
                Foreign investors can secure up to €2.25M for property investment 
                in Puglia through Mini PIA grants, covering 35-65% of eligible costs.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3">Best areas for Puglia property investment?</h3>
              <p className="text-gray-700">
                Top investment zones: Lecce (cultural capital), coastal properties 
                in Gallipoli and Otranto, trulli properties in Valle d'Itria, 
                and emerging areas near Brindisi airport.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3">Can foreigners buy property in Puglia?</h3>
              <p className="text-gray-700">
                Yes, EU and non-EU citizens can freely purchase property in Puglia. 
                Our advisory services handle all legal requirements and maximize 
                available grants for foreign investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Bold & Action-Oriented */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 70%)',
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Join successful investors who've turned Italian dreams into profitable realities
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/calculator" 
              className="inline-flex items-center gap-3 bg-white text-emerald-700 px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              Check Grant Eligibility
              <span className="text-2xl">→</span>
            </a>
            <a 
              href="https://calendly.com/investiscope_pro/30min" 
              className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-emerald-700 transition-all"
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