// components/Navbar.tsx
'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img 
              src="/Logo_InvestiScope.png" 
              alt="InvestiScope Logo" 
              className="h-10 w-auto"
            />
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                InvestiScope
              </span>
              <span className="text-xs text-gray-700 font-normal">™</span>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Home
            </a>
            <a href="/investment-process" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Process
            </a>
            <a href="/tools" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Tools
            </a>
            <div className="relative group">
              <a href="/calculator" className="text-gray-700 hover:text-gray-900 transition-colors font-medium flex items-center gap-1">
                Calculators
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="https://investiscopeeasy.netlify.app/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                  InvestiScope Light
                </a>
                <a href="/classic" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                  InvestiScope Classic
                </a>
              </div>
            </div>
            <a href="/surveys" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Surveys
            </a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Contact
            </a>
            <a href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
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
            className="md:hidden text-gray-700"
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
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2">
                Home
              </a>
              <a href="/investment-process" className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2">
                Investment Process
              </a>
              <a href="/tools" className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2">
                Tools
              </a>
              <div>
                <a href="/calculator" className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2 block">
                  Calculators
                </a>
                <div className="ml-4 mt-2 space-y-2">
                  <a href="https://investiscopeeasy.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors text-sm block">
                    → InvestiScope Light
                  </a>
                  <a href="/classic" className="text-gray-600 hover:text-gray-900 transition-colors text-sm block">
                    → InvestiScope Classic
                  </a>
                </div>
              </div>
              <a href="/surveys" className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2">
                Surveys
              </a>
              <a href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2">
                Contact
              </a>
              <a href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2">
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
