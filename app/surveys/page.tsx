// app/surveys/page.tsx
'use client'

import { useState } from 'react'

export default function SurveysPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#059669] to-[#047857] bg-[length:400%_400%] animate-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              PROFESSIONAL DUE DILIGENCE
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Property Survey <span className="text-yellow-400">Report</span>
            </h1>
            
            <p className="text-2xl font-light mb-4">
              "Don't Buy Blind – Buy Smart"
            </p>
            
            <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-10">
              Our comprehensive property survey gives you complete confidence before investing. 
              Know exactly what you're buying, what you can do with it, and what grants you qualify for.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.marietrulli.com/property-survey-order" 
                className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔘 Order Survey Report
              </a>
              <a 
                href="#sample" 
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
              >
                📄 View Sample Report
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your survey content with consistent styling... */}
      {/* Include all the tabs, pricing, etc. from your project knowledge */}
    </>
  )
}
