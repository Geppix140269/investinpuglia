// app/surveys/page.tsx
'use client'

import { useState } from 'react'

export default function SurveysPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <>
      {/* Hero Section with ALL effects */}
      <section className="min-h-screen flex items-center py-20 px-5 relative overflow-hidden bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#059669] to-[#047857] bg-[length:400%_400%] animate-gradient">
        {/* Animated background elements */}
        <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] opacity-10" 
             style={{
               background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
               animation: 'shimmer 15s linear infinite'
             }} />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center">
            {/* Badge with glow */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-7 py-3 rounded-full text-sm font-bold mb-8 shadow-lg animate-fadeIn">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
              PROFESSIONAL DUE DILIGENCE
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 animate-fadeIn animation-delay-100">
              Property Survey <strong className="font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Report</strong>
            </h1>
            
            <p className="text-2xl font-light text-white/90 mb-4 animate-fadeIn animation-delay-200">
              "Don't Buy Blind – Buy Smart"
            </p>
            
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-10 animate-fadeIn animation-delay-200">
              Our comprehensive property survey gives you complete confidence before investing. 
              Know exactly what you're buying, what you can do with it, and what grants you qualify for.
            </p>
            
            {/* Glass morphism box */}
            <div className="inline-block bg-gradient-to-r from-yellow-400/20 to-orange-500/10 backdrop-blur-md border border-yellow-400/30 px-8 py-5 rounded-full mb-10 animate-fadeIn animation-delay-300">
              <p className="text-white text-lg font-semibold">
                🛡️ Save €100,000+ by avoiding costly mistakes
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fadeIn animation-delay-400">
              <a 
                href="https://www.marietrulli.com/property-survey-order" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 px-10 py-5 rounded-full text-lg font-bold hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔘 Order Survey Report
                <span className="text-2xl">→</span>
              </a>
              <a 
                href="#sample" 
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300"
              >
                📄 View Sample Report
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of survey content with glass morphism styling... */}
    </>
  )
}
