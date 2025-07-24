// app/page.tsx - Complete Modern Design with Glass Morphism

'use client'

import { useState, useEffect } from 'react'
import CTAButton from '@/components/CTAButton'
import ExitIntentPopup from '@/components/ExitIntentPopup'

export default function HomePage() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <>
      {/* Exit Intent Popup */}
      <ExitIntentPopup />

      {/* Hero Section with Video + Glass Morphism */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          {/* Loading Placeholder with Gradient */}
          {!videoLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-emerald-700 to-teal-700 flex items-center justify-center z-10">
              <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          )}
          
          {/* Optimized Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            poster="/puglia-background-poster.jpg"
            onLoadedData={() => setVideoLoaded(true)}
            onCanPlay={(e) => (e.target as HTMLVideoElement).play()}
          >
            <source src="/puglia-background-optimized.webm" type="video/webm" />
            <source src="/puglia-background.mp4" type="video/mp4" />
            <img 
              src="/puglia-background-fallback.jpg" 
              alt="Beautiful Puglia landscape"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </video>
          
          {/* Gradient Overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-transparent to-emerald-900/50"></div>
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        

        
        {/* Content with Glass Morphism */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 text-center">
          {/* Glass Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-fadeIn shadow-xl">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            PROPERTY INVESTMENT ADVISORY • PUGLIA
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 animate-fadeIn animation-delay-100 leading-tight">
            Your Clear Path to<br />
            <span className="font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
              Property Investment in Puglia
            </span>
          </h1>
          
          {/* Glass Card for Subtitle */}
          <div className="max-w-4xl mx-auto mb-10 animate-fadeIn animation-delay-200">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
              <p className="text-xl md:text-2xl text-white font-medium mb-3">
                Navigate Italian property investment with confidence
              </p>
              <p className="text-lg md:text-xl text-white/90 font-light">
                Professional tools, grant analysis, and expert guidance—all in one place
              </p>
            </div>
          </div>
          
          {/* Glass Benefits Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fadeIn animation-delay-300">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-2xl text-white font-medium text-sm hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              ✓ Free grant eligibility calculator
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-2xl text-white font-medium text-sm hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              ✓ Property due diligence reports
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-2xl text-white font-medium text-sm hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              ✓ Local market expertise
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-2xl text-white font-medium text-sm hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              ✓ Step-by-step guidance
            </div>
          </div>
          
          {/* Glass CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fadeIn animation-delay-400">
            <CTAButton 
              variant="custom"
              href="/calculator"
              text="Calculate My Grant"
              location="hero"
              className="bg-white/90 backdrop-blur-md text-purple-700 px-8 py-5 rounded-full font-bold hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-lg border border-white/50"
            />
            <CTAButton 
              variant="custom"
              href="#how-it-works"
              text="Learn How It Works"
              location="hero"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-5 rounded-full text-lg font-bold hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            />
          </div>
          
          {/* Glass Contact Card */}
          <div className="mt-16 animate-fadeIn animation-delay-500">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 inline-block shadow-xl">
              <p className="text-white font-medium text-lg mb-3">Questions? Let's talk.</p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-white">
                <a href="tel:+393514001402" className="hover:text-emerald-300 transition-colors font-medium">
                  📞 +39 351 400 1402
                </a>
                <span className="text-white/30">•</span>
                <a href="mailto:info@investinpuglia.eu" className="hover:text-emerald-300 transition-colors font-medium">
                  ✉️ info@investinpuglia.eu
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator with glass effect */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Grant Source Institutions Section - Glass Design */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-purple-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
                FUNDING PROGRAM AFFILIATION
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Grant Source <strong className="font-bold">Institutions</strong>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Invest in Puglia™ provides consultancy and support services related to the Mini PIA program — 
                a public funding initiative co-financed by Regione Puglia and the European Union.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50">
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
                    className="h-20 w-auto mb-2"
                  />
                  <p className="text-sm text-gray-600">Regione Puglia</p>
                  <p className="text-xs text-gray-500">POR Puglia 2014-2027</p>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <p className="text-xs text-gray-500 text-center italic">
                  <strong>Disclaimer:</strong> Invest in Puglia™ is an independent private consultancy and is not 
                  affiliated with or endorsed by Regione Puglia or the European Union.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity Section - Glass Cards over Gradient */}
      <section className="py-20 relative bg-gradient-to-br from-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              🎯 THE OPPORTUNITY
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
              Why Smart Money is <strong className="font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">Flowing to Puglia</strong>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/50">
              <div className="text-4xl mb-4 filter drop-shadow-lg">📈</div>
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">47% Surge in Tourism</h3>
              <p className="text-gray-700">
                Puglia outpaces all Italian regions in growth, with property values 
                climbing 12-18% annually in key areas.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/50">
              <div className="text-4xl mb-4 filter drop-shadow-lg">💸</div>
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">€300M in EU Grants</h3>
              <p className="text-gray-700">
                Mini PIA 2024-2027 allocates massive funding for tourism properties. 
                Secure 35-65% of your investment.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/50">
              <div className="text-4xl mb-4 filter drop-shadow-lg">✈️</div>
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Perfect Timing</h3>
              <p className="text-gray-700">
                New Ryanair hub at Brindisi + UNESCO sites + untapped coastal areas = 
                your investment opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Modern Glass Process */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-emerald-900 text-white relative overflow-hidden" id="how-it-works">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
              🔄 SIMPLE PROCESS
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
              Your Path to <strong className="font-bold">Investment Success</strong>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:-translate-y-2 transition-all">
              <div className="text-4xl mb-4 filter drop-shadow-lg">💡</div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Discovery</h3>
              <p className="text-gray-300">
                Free consultation to understand your goals and calculate grant eligibility
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:-translate-y-2 transition-all">
              <div className="text-4xl mb-4 filter drop-shadow-lg">🔍</div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Analysis</h3>
              <p className="text-gray-300">
                Property search, due diligence, and investment feasibility studies
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:-translate-y-2 transition-all">
              <div className="text-4xl mb-4 filter drop-shadow-lg">📊</div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Strategy</h3>
              <p className="text-gray-300">
                Comprehensive investment planning including exit strategies and ROI optimization
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:-translate-y-2 transition-all">
              <div className="text-4xl mb-4 filter drop-shadow-lg">🏆</div>
              <h3 className="text-2xl font-bold mb-4 text-rose-400">Results</h3>
              <p className="text-gray-300">
                €50M+ in grants secured for clients with zero rejections
              </p>
            </div>
          </div>
        </div>
      </section>
{/* NEW: Buyer Profile Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg animate-pulse">
              🆕 NEW FEATURE
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
              Get Your Personalized <strong className="font-bold">Buyer Profile</strong>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join our exclusive database of qualified property buyers and get matched with perfect investment opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎯</span> Get Matched with Properties
                </h3>
                <p className="text-white/80">
                  Our AI-powered system matches your requirements with available properties and grants
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔔</span> Priority Notifications
                </h3>
                <p className="text-white/80">
                  Be the first to know about new properties that match your investment criteria
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🤝</span> Connect with Top Agents
                </h3>
                <p className="text-white/80">
                  Qualified real estate professionals compete to serve your specific needs
                </p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all">
              <div className="text-center">
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-2xl font-bold mb-4">Complete Your Profile</h3>
                <p className="text-white/80 mb-6">
                  10-minute questionnaire to understand your:
                </p>
                <ul className="text-left space-y-2 mb-8 text-white/90">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-300">•</span> Investment budget & financing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-300">•</span> Property preferences & locations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-300">•</span> Timeline & readiness
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-300">•</span> Grant eligibility factors
                  </li>
                </ul>
                <a 
                  href="/buyer-profile" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:-translate-y-1 transition-all w-full justify-center"
                >
                  Start Your Profile
                  <span className="text-xl">→</span>
                </a>
                <p className="text-sm text-white/60 mt-4">
                  Free • No obligation • 100% confidential
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Giuseppe - Glass Card Design */}
      <section className="py-20 bg-gradient-to-br from-white via-purple-50 to-emerald-50 relative overflow-hidden" id="advisor">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              👤 YOUR ADVISOR
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
              Meet <strong className="font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">Giuseppe Funaro</strong>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your strategic partner in Italian property investment success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-emerald-600 rounded-3xl transform rotate-3"></div>
              <img 
                src="/Giuseppe Funaro 062025.jpg" 
                alt="Giuseppe Funaro - Property Investment Advisor Puglia" 
                className="relative rounded-3xl shadow-2xl w-full transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              />
            </div>
            
            <div>
              <div className="prose prose-lg">
                <p className="text-lg text-gray-700 mb-6">
                  With 35+ years of international business experience and deep expertise in Italian 
                  property markets, Giuseppe Funaro leads a powerful network of professionals dedicated 
                  to maximizing your investment returns in Puglia.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-lg">
                    <span className="text-emerald-600 text-xl">✅</span>
                    <span className="text-gray-700">
                      <strong>Expert Network</strong> of Puglia-based consultants, engineers, and architects
                    </span>
                  </div>
                  <div className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-lg">
                    <span className="text-emerald-600 text-xl">✅</span>
                    <span className="text-gray-700">
                      <strong>€50M+ in grants secured</strong> by our combined professional network
                    </span>
                  </div>
                  <div className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-lg">
                    <span className="text-emerald-600 text-xl">✅</span>
                    <span className="text-gray-700">
                      <strong>Fluent in 3 languages</strong> - Italian, English, Spanish
                    </span>
                  </div>
                  <div className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-lg">
                    <span className="text-emerald-600 text-xl">✅</span>
                    <span className="text-gray-700">
                      <strong>Local partnerships</strong> with Puglia's top real estate experts
                    </span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-100 to-emerald-100 rounded-2xl p-6 border border-white/50 shadow-lg">
                  <p className="text-sm text-gray-600 italic mb-2">
                    "My mission is simple: to connect international investors with our trusted network 
                    of local professionals, ensuring every project benefits from deep regional expertise 
                    and maximizes available grants."
                  </p>
                  <p className="text-sm font-semibold text-gray-800">— Giuseppe Funaro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Glass Cards with Hover Effects */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              🛠️ PROFESSIONAL TOOLS
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
              Your Complete <strong className="font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">Investment Toolkit</strong>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial analysis to grant approval - everything you need for success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group border border-white/50">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="text-5xl mb-4 filter drop-shadow-lg group-hover:scale-110 transition-transform">🧮</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Grant Calculators</h3>
              <p className="mb-6 text-gray-600">
                AI-powered tools to instantly calculate your eligibility for up to €2.25M in grants
              </p>
              <CTAButton 
                variant="custom"
                href="/calculator"
                text="Try Calculator"
                location="services"
                className="inline-flex items-center gap-2 font-semibold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
                showIcon={true}
              />
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group border border-white/50">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="text-5xl mb-4 filter drop-shadow-lg group-hover:scale-110 transition-transform">🔍</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Property Survey</h3>
              <p className="mb-6 text-gray-600">
                Complete due diligence reports - legal, technical, and financial analysis
              </p>
              <CTAButton 
                variant="custom"
                href="/surveys"
                text="Order Survey"
                location="services"
                className="inline-flex items-center gap-2 font-semibold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
                showIcon={true}
              />
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group border border-white/50">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="text-5xl mb-4 filter drop-shadow-lg group-hover:scale-110 transition-transform">📋</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Application Support</h3>
              <p className="mb-6 text-gray-600">
                End-to-end grant application management with 100% success rate
              </p>
              <CTAButton 
                variant="bookCall"
                location="services"
                className="inline-flex items-center gap-2 font-semibold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories - Glass Cards on Dark Background */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white/90 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              ⭐ PROVEN RESULTS
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
              Success Stories That <strong className="font-bold">Inspire</strong>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:-translate-y-2 transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-lg mb-4 text-white/90">
                "Giuseppe secured us €1.8M in grants for our boutique hotel project. 
                His knowledge of the system is unmatched."
              </p>
              <div className="pt-4 border-t border-white/20">
                <p className="font-semibold">Mark Thompson</p>
                <p className="text-sm text-white/70">UK Investor • Lecce Project</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:-translate-y-2 transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-lg mb-4 text-white/90">
                "From property search to grant approval in 6 months. The ROI calculator 
                was spot-on - we're at 28% already!"
              </p>
              <div className="pt-4 border-t border-white/20">
                <p className="font-semibold">Sophie Laurent</p>
                <p className="text-sm text-white/70">French Investor • Ostuni Villa</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:-translate-y-2 transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-lg mb-4 text-white/90">
                "The survey report saved us from a bad investment. Found a better property 
                and got €950k in grants!"
              </p>
              <div className="pt-4 border-t border-white/20">
                <p className="font-semibold">James Mitchell</p>
                <p className="text-sm text-white/70">US Investor • Gallipoli Resort</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-8 text-white/90 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full">
              <div>
                <p className="text-4xl font-bold">€50M+</p>
                <p className="text-sm">Network Grants Secured</p>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div>
                <p className="text-4xl font-bold">95%+</p>
                <p className="text-sm">Network Success Rate</p>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div>
                <p className="text-4xl font-bold">47+</p>
                <p className="text-sm">Happy Investors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Clean Glass Design */}
      <section className="py-20 bg-gradient-to-br from-white via-purple-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-5 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              ❓ COMMON QUESTIONS
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
              Everything You Need to <strong className="font-bold">Know</strong>
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-white/50">
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Who qualifies for Mini PIA grants?
              </h3>
              <p className="text-gray-700">
                Both EU and non-EU investors qualify! The key requirements are: investment 
                in tourism-related property, minimum €400k project size, and commitment to 
                operate for 5+ years. We'll assess your eligibility for free.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-white/50">
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Why invest in Puglia property?
              </h3>
              <p className="text-gray-700">
                Puglia offers Europe's highest tourism growth (47% in 3 years), property 
                prices 60% below Tuscany, new Ryanair hub connectivity, UNESCO heritage sites, 
                and massive EU grant funding. Prime areas include Lecce, Gallipoli, 
                and Valle d'Itria for property investment.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-white/50">
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
                How much are Puglia property grants?
              </h3>
              <p className="text-gray-700">
                Foreign investors can secure up to €2.25M for property investment 
                in Puglia through Mini PIA grants, covering 35-65% of eligible costs.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-white/50">
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Best areas for Puglia property investment?
              </h3>
              <p className="text-gray-700">
                Top investment zones: Lecce (cultural capital), coastal properties 
                in Gallipoli and Otranto, trulli properties in Valle d'Itria, 
                and emerging areas near Brindisi airport.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-white/50">
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Can foreigners buy property in Puglia?
              </h3>
              <p className="text-gray-700">
                Yes, EU and non-EU citizens can freely purchase property in Puglia. 
                Our advisory services handle all legal requirements and maximize 
                available grants for foreign investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient with Glass Elements */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-emerald-600 text-white relative overflow-hidden animate-gradient bg-[length:400%_400%]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Ready to Secure Your <strong className="font-bold">Future?</strong>
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Join successful investors who've turned Italian dreams into profitable realities
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CTAButton 
                variant="calculator"
                location="footer-cta"
                className="text-lg px-10 py-5 bg-white text-purple-700 hover:bg-gray-100 rounded-full font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
              />
              <CTAButton 
                variant="bookCall"
                location="footer-cta"
                className="text-lg px-10 py-5 bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 rounded-full font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
              />
            </div>
            
            <p className="mt-8 text-sm text-white/70">
              Limited availability - Only 10 advisory clients accepted annually
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
