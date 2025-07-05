// app/calculator/page.tsx
export default function CalculatorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#059669] to-[#047857] bg-[length:400%_400%] animate-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Investment <span className="text-yellow-400">Calculators</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Choose the perfect tool for analyzing your Italian property investment and PIA grant eligibility
            </p>
          </div>
        </div>
      </section>

      {/* Calculators Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* InvestiScope Light */}
            <div className="bg-white rounded-2xl shadow-xl p-10 relative overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                RECOMMENDED
              </div>
              <div className="text-6xl mb-6">⚡</div>
              <h2 className="text-3xl font-bold mb-4">InvestiScope™ Light</h2>
              <p className="text-gray-600 mb-6">
                Perfect for quick assessments. Get instant ROI projections and grant eligibility in under 60 seconds.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  Lightning-fast analysis
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  Instant grant eligibility check
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  Basic ROI projections
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  No registration required
                </li>
              </ul>
              <a 
                href="https://investiscopeeasy.netlify.app/" 
                className="block w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-4 rounded-xl font-bold hover:shadow-lg transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Light Calculator →
              </a>
            </div>
            
            {/* InvestiScope Classic */}
            <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow">
              <div className="text-6xl mb-6">🧮</div>
              <h2 className="text-3xl font-bold mb-4">InvestiScope™ Classic</h2>
              <p className="text-gray-600 mb-6">
                Comprehensive analysis tool for serious investors. Detailed financial projections and advanced grant calculations.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  Advanced grant calculations
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  Detailed financial modeling
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  5-year exit strategies
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  Up to €2.25M grant analysis
                </li>
              </ul>
              <a 
                href="https://investiscope.net" 
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-4 rounded-xl font-bold hover:shadow-lg transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Classic Calculator →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-center mb-12">Feature Comparison</h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">Light ⚡</th>
                  <th className="px-6 py-4 text-center font-semibold">Classic 🧮</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4">Analysis Speed</td>
                  <td className="px-6 py-4 text-center">60 seconds</td>
                  <td className="px-6 py-4 text-center">2-3 minutes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Grant Calculation</td>
                  <td className="px-6 py-4 text-center">Basic</td>
                  <td className="px-6 py-4 text-center">Advanced</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Maximum Grant Analysis</td>
                  <td className="px-6 py-4 text-center">€2.25M</td>
                  <td className="px-6 py-4 text-center">€2.25M</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Exit Strategy Analysis</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
