// app/surveys/page.tsx - Comprehensive Property Survey Page

'use client'

import { useState } from 'react'

export default function SurveysPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white relative overflow-hidden">
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
                href="#order" 
                className="inline-flex items-center gap-2 bg-yellow-500 text-green-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 transition-all"
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

      {/* Stats Section */}
      <section className="py-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-700">€2.8M</div>
              <div className="text-gray-600 mt-2">Saved in Bad Purchases</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700">147</div>
              <div className="text-gray-600 mt-2">Properties Surveyed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700">23%</div>
              <div className="text-gray-600 mt-2">Failed Due Diligence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700">€180K</div>
              <div className="text-gray-600 mt-2">Avg. Saved Per Client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-16 bg-white border-b z-40">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex overflow-x-auto gap-8 py-4">
            {['overview', 'included', 'process', 'sample', 'pricing'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap pb-2 px-1 font-semibold capitalize transition-all ${
                  activeTab === tab 
                    ? 'text-green-600 border-b-2 border-green-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab === 'included' ? "What's Included" : tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5">
          {activeTab === 'overview' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Why You Need a Property Survey</h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-3">The €200,000 Mistake</h3>
                <p className="text-red-700">
                  Maria from London bought a "perfect" masseria near Ostuni. Six months later, she discovered:
                </p>
                <ul className="mt-3 space-y-2 text-red-700">
                  <li>• The property had illegal additions that needed demolition</li>
                  <li>• Landscape restrictions prevented her pool plans</li>
                  <li>• The structure wasn't eligible for tourism grants</li>
                  <li>• Total loss: €240,000 + her Italian dream</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-green-800 mb-3">The Smart Investment</h3>
                <p className="text-green-700">
                  Our €3,500 survey would have revealed every issue. Instead of losing €240,000, 
                  Maria could have negotiated €80,000 off the price or walked away.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'included' && (
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-2xl font-bold mb-4">Legal Verification</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Property title and ownership history check</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Building permits and compliance verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Outstanding debts and liens search</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Cadastral registration accuracy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Right of way and easement analysis</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-2xl font-bold mb-4">Technical Assessment</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Structural integrity evaluation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Renovation possibility assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Heritage and landscape restrictions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Utility connections and costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Environmental compliance check</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-4">Grant & Financial Analysis</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Mini PIA grant eligibility assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Other available grants identification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Tax implications analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Realistic renovation cost estimates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>ROI projections for tourism use</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-2xl font-bold mb-4">Strategic Recommendations</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Negotiation points identification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Risk assessment and mitigation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Investment optimization strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Project timeline recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Professional team suggestions</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Survey Process</h2>
              
              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: "Initial Consultation",
                    time: "Day 1",
                    description: "We discuss your property details, investment goals, and specific concerns. You provide property information and documents."
                  },
                  {
                    step: 2,
                    title: "Document Analysis",
                    time: "Days 2-3",
                    description: "Our legal team reviews all property documents, checking registrations, permits, and compliance with current regulations."
                  },
                  {
                    step: 3,
                    title: "On-Site Inspection",
                    time: "Days 4-5",
                    description: "Our technical expert visits the property, conducting thorough structural, technical, and compliance assessments."
                  },
                  {
                    step: 4,
                    title: "Research & Verification",
                    time: "Days 6-8",
                    description: "We verify findings with local authorities, check grant eligibility, and research any restrictions or opportunities."
                  },
                  {
                    step: 5,
                    title: "Report Preparation",
                    time: "Days 9-10",
                    description: "Our team compiles all findings into a comprehensive report with clear recommendations and action points."
                  },
                  {
                    step: 6,
                    title: "Delivery & Consultation",
                    time: "Day 10-12",
                    description: "You receive the full report and a 60-minute consultation call to discuss findings and next steps."
                  }
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'sample' && (
            <div className="max-w-4xl mx-auto" id="sample">
              <h2 className="text-3xl font-bold mb-8 text-center">Sample Report Sections</h2>
              
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-green-700">Executive Summary</h3>
                <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm">
                  <p className="mb-4"><strong>Property:</strong> Trullo complex, Contrada Esempio, Cisternino (BR)</p>
                  <p className="mb-4"><strong>Overall Assessment:</strong> <span className="text-yellow-600">PROCEED WITH CONDITIONS</span></p>
                  <p className="mb-4"><strong>Key Findings:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Property has clear title, no liens or encumbrances ✓</li>
                    <li>Main trullo requires structural reinforcement (€35,000)</li>
                    <li>Eligible for Mini PIA grant up to €675,000 (45%)</li>
                    <li>Landscape restrictions limit pool size to 40m²</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-green-700">Grant Eligibility Analysis</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Grant Program</th>
                        <th className="text-left py-2">Eligibility</th>
                        <th className="text-left py-2">Potential Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">Mini PIA Turismo</td>
                        <td className="py-2 text-green-600">✓ Eligible</td>
                        <td className="py-2">€675,000 (45%)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Tax Credit (65%)</td>
                        <td className="py-2 text-green-600">✓ Eligible</td>
                        <td className="py-2">€195,000</td>
                      </tr>
                      <tr>
                        <td className="py-2">Resto al Sud</td>
                        <td className="py-2 text-red-600">✗ Not Eligible</td>
                        <td className="py-2">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="text-center">
                <a 
                  href="https://www.marietrulli.com/sample-survey-report.pdf" 
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📥 Download Full Sample Report (PDF)
                </a>
              </div>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="max-w-5xl mx-auto" id="order">
              <h2 className="text-3xl font-bold mb-8 text-center">Investment & Pricing</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-xl shadow-lg p-8 relative">
                  <h3 className="text-xl font-bold mb-4">Basic Survey</h3>
                  <div className="text-4xl font-bold text-green-600 mb-4">€2,500</div>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Legal verification
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Document analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Basic grant check
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gray-400">✗</span>
                      On-site inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gray-400">✗</span>
                      Technical assessment
                    </li>
                  </ul>
                  <a href="#contact" className="block w-full bg-gray-200 text-gray-700 text-center py-3 rounded-lg font-semibold">
                    Select Basic
                  </a>
                </div>

                <div className="bg-gradient-to-b from-green-50 to-white rounded-xl shadow-xl p-8 relative border-2 border-green-500">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    RECOMMENDED
                  </div>
                  <h3 className="text-xl font-bold mb-4">Complete Survey</h3>
                  <div className="text-4xl font-bold text-green-600 mb-4">€3,500</div>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Everything in Basic
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      On-site inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Technical assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Grant optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      60-min consultation
                    </li>
                  </ul>
                  <a href="#contact" className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-all">
                    Select Complete
                  </a>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 relative">
                  <h3 className="text-xl font-bold mb-4">Premium Survey</h3>
                  <div className="text-4xl font-bold text-green-600 mb-4">€5,000</div>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Everything in Complete
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Contractor verification
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      3D renovation plans
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Grant application help
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      3 months support
                    </li>
                  </ul>
                  <a href="#contact" className="block w-full bg-gray-200 text-gray-700 text-center py-3 rounded-lg font-semibold">
                    Select Premium
                  </a>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">ROI Example</h3>
                <p className="text-lg mb-4">
                  Our €3,500 survey helped James from NYC:
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div>
                    <div className="text-3xl font-bold text-yellow-700">€120,000</div>
                    <div className="text-gray-700">Negotiated Off Price</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-700">€80,000</div>
                    <div className="text-gray-700">Avoided Repairs</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-700">5,714%</div>
                    <div className="text-gray-700">Return on Survey</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-100" id="contact">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-center mb-8">Request Your Property Survey</h2>
          
          <form className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Property Location *</label>
                <input 
                  type="text" 
                  placeholder="City, Province"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Survey Type *</label>
              <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" required>
                <option value="">Select survey type</option>
                <option value="basic">Basic Survey (€2,500)</option>
                <option value="complete">Complete Survey (€3,500) - Recommended</option>
                <option value="premium">Premium Survey (€5,000)</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Property Details</label>
              <textarea 
                rows={4}
                placeholder="Tell us about the property, your plans, and any specific concerns..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all"
            >
              Submit Survey Request
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Prefer to speak with us first?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:survey@marietrulli.com" className="text-green-600 font-semibold hover:underline">
                survey@marietrulli.com
              </a>
              <span className="hidden sm:block">•</span>
              <a href="tel:+393514001402" className="text-green-600 font-semibold hover:underline">
                +39 351 400 1402
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h3 className="text-2xl font-bold mb-8">Trusted by Smart Investors Worldwide</h3>
          <div className="flex flex-wrap justify-center gap-8 text-gray-500">
            <div>🇺🇸 USA</div>
            <div>🇬🇧 UK</div>
            <div>🇨🇦 Canada</div>
            <div>🇦🇺 Australia</div>
            <div>🇩🇪 Germany</div>
            <div>🇫🇷 France</div>
            <div>🇨🇭 Switzerland</div>
            <div>🇦🇪 UAE</div>
          </div>
          <p className="mt-8 text-gray-600">
            Professional property surveys by Mari e Trulli International<br/>
            <span className="text-sm">Property development arm of 1402 Celsius Ltd</span>
          </p>
        </div>
      </section>
    </>
  )
}
