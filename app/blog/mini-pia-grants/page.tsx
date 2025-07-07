'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function MiniPiaGrantsPost() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient Overlay */}
      <div className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">GRANTS & FUNDING</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              How to Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">€540,000</span> in Italian Property Grants
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Complete guide to Mini PIA grants that can fund 45% of your Puglia property investment. Real examples and step-by-step process.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                Giuseppe Funaro
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8h12v8H4V8z" clipRule="evenodd" />
                </svg>
                November 15, 2024
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                12 min read
              </span>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Lead Paragraph */}
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12 font-light">
          The Mini PIA Turismo grant program represents one of the most significant opportunities for foreign property investors in Italy, offering up to <strong className="font-semibold text-gray-900">€2.25 million in non-repayable funding</strong>. Yet many investors remain unaware of this incredible opportunity or struggle with the application process.
        </p>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">45-50%</div>
            <div className="text-sm text-gray-600">Grant Coverage</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">€2.25M</div>
            <div className="text-sm text-gray-600">Max Funding</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">€30K</div>
            <div className="text-sm text-gray-600">Min Investment</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">15%</div>
            <div className="text-sm text-gray-600">Tax Credit</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-xl max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Mini PIA?</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Mini PIA (Piccoli Investimenti Attrattivi) is a regional funding program specifically designed to boost tourism infrastructure in Puglia. The program offers:
          </p>
          
          <ul className="space-y-3 mb-12">
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong className="font-semibold">45-50% non-refundable grants</strong> on eligible project costs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong className="font-semibold">Additional 15% tax credit</strong> on top of the grant</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong className="font-semibold">Maximum funding of €2.25 million</strong> per project</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong className="font-semibold">Minimum investment threshold of €30,000</strong></span>
            </li>
          </ul>

          {/* Success Story Box */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white my-12">
            <h3 className="text-2xl font-bold mb-6">Real Success Story: €540,000 Grant Secured</h3>
            <p className="text-white/90 mb-6">
              Last month, our client Sarah from London secured €540,000 in Mini PIA grants for her trullo renovation project in Ostuni. Here's how the numbers worked:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-sm text-white/70 mb-1">Total Investment</div>
                <div className="text-3xl font-bold">€1,000,000</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-sm text-white/70 mb-1">Mini PIA Grant</div>
                <div className="text-3xl font-bold">€450,000</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-sm text-white/70 mb-1">Tax Credit</div>
                <div className="text-3xl font-bold">€150,000</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-sm text-white/70 mb-1">Net Investment</div>
                <div className="text-3xl font-bold text-green-400">€400,000</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Eligibility Requirements</h2>
          
          <div className="space-y-8 mb-12">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Location Requirements</h3>
              <p className="text-gray-700 mb-3">The property must be located in Puglia region, specifically in areas designated for tourism development:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Coastal municipalities</li>
                <li>• Historic centers</li>
                <li>• Rural areas with tourism potential</li>
                <li>• Areas near major attractions</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Property Type</h3>
              <p className="text-gray-700 mb-3">Eligible properties include:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Masserie</strong> (traditional farmhouses)</li>
                <li>• <strong>Trulli</strong> (cone-shaped houses)</li>
                <li>• <strong>Historic palazzos</strong></li>
                <li>• <strong>Coastal properties</strong></li>
                <li>• <strong>Rural estates</strong></li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Tourism Purpose</h3>
              <p className="text-gray-700 mb-3">The property must be used for tourism accommodation:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Hotels and B&Bs</li>
                <li>• Vacation rentals</li>
                <li>• Agriturismos</li>
                <li>• Boutique accommodations</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 my-16 border border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Calculate Your Grant Potential</h3>
            <p className="text-gray-700 text-center mb-8">
              Use our free calculator to instantly see how much funding you could receive for your property investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator" className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all hover:scale-105 text-center">
                🧮 Calculate My Grant
              </Link>
              <Link href="/contact" className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all hover:scale-105 text-center">
                📞 Book Consultation
              </Link>
            </div>
          </div>

          {/* Application Process Timeline */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-16">Step-by-Step Application Process</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              <div className="relative flex items-start gap-8">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">1</div>
                <div className="flex-1 bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 1: Preparation (2-3 months)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Property selection and due diligence</li>
                    <li>• Business plan development</li>
                    <li>• Technical documentation preparation</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative flex items-start gap-8">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">2</div>
                <div className="flex-1 bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 2: Application (1 month)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Online registration on PugliaSemplice</li>
                    <li>• Document submission</li>
                    <li>• Financial guarantees</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative flex items-start gap-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">3</div>
                <div className="flex-1 bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 3: Approval & Implementation (3-6 months)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Evaluation process</li>
                    <li>• Grant agreement signing</li>
                    <li>• Project execution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Updated on Italian Property Investment
          </h3>
          <p className="text-gray-300 mb-8 text-lg">
            Get exclusive insights on grants, market trends, and investment opportunities delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Author Bio */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              GF
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Giuseppe Funaro</h3>
              <p className="text-purple-600 font-semibold mb-4">Senior Property Investment Advisor</p>
              <p className="text-gray-700">
                With 35+ years of international business experience, Giuseppe specializes in helping foreign investors 
                maximize their returns through Italian property investment and EU grant optimization. He has successfully 
                secured over €50 million in grants for clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">Nov 10, 2024 • 4 min read</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Why Puglia Property Prices Will Double by 2027</h4>
                <p className="text-gray-600">Data-driven analysis of Puglia's property boom...</p>
              </div>
            </article>
            
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">Nov 5, 2024 • 6 min read</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">From €200k to €2M: Ostuni Villa Success Story</h4>
                <p className="text-gray-600">How our client turned a ruined masseria into...</p>
              </div>
            </article>
            
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">Oct 28, 2024 • 5 min read</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Tax Optimization for Italian Property Investors</h4>
                <p className="text-gray-600">Advanced strategies to minimize liability and...</p>
              </div>
            </article>
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
        
        .animate-blob {
          animation: blob 7s infinite;
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
