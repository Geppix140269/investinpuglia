'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">InvestiScope</span>
            <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full font-semibold">PRO</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-white/80 hover:text-white transition-colors font-medium">
              Home
            </a>
            <a href="/tools" className="text-white/80 hover:text-white transition-colors font-medium">
              Tools
            </a>
            <a href="/calculator" className="text-white/80 hover:text-white transition-colors font-medium">
              Calculators
            </a>
            <a href="/surveys" className="text-white/80 hover:text-white transition-colors font-medium">
              Surveys
            </a>
            <a href="/contact" className="text-white/80 hover:text-white transition-colors font-medium">
              Contact
            </a>
            <a href="/blog" className="text-white/80 hover:text-white transition-colors font-medium">
              Blog
            </a>
            <a 
              href="https://calendly.com/investiscope_pro/30min" 
              className="bg-green-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Call →
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a href="/" className="text-white/80 hover:text-white transition-colors font-medium py-2">
                Home
              </a>
              <a href="/tools" className="text-white/80 hover:text-white transition-colors font-medium py-2">
                Tools
              </a>
              <a href="/calculator" className="text-white/80 hover:text-white transition-colors font-medium py-2">
                Calculators
              </a>
              <a href="/surveys" className="text-white/80 hover:text-white transition-colors font-medium py-2">
                Surveys
              </a>
              <a href="/contact" className="text-white/80 hover:text-white transition-colors font-medium py-2">
                Contact
              </a>
              <a href="/blog" className="text-white/80 hover:text-white transition-colors font-medium py-2">
                Blog
              </a>
              <a 
                href="https://calendly.com/investiscope_pro/30min" 
                className="bg-green-600 text-white px-5 py-3 rounded-full font-semibold text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Strategy Call →
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
