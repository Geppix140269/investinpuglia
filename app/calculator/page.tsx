// app/calculator/page.tsx - Calculator selection page

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Simple Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container-custom py-4">
          <a href="/" className="text-2xl font-bold text-primary hover:opacity-80">
            InvestiScope™
          </a>
        </div>
      </nav>
      
      <div className="container-custom py-16">
        <h1 className="text-4xl font-bold text-center mb-4">
          Choose Your Calculator
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Select the tool that best fits your needs for analyzing Italian property investments and PIA grant eligibility
        </p>
        
        {/* Calculator Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* InvestiScope Light */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              RECOMMENDED
            </div>
            <div className="text-5xl mb-4">⚡</div>
            <h2 className="text-2xl font-bold mb-3">InvestiScope™ Light</h2>
            <p className="text-gray-600 mb-6">
              Perfect for quick assessments. Get instant ROI projections and grant eligibility in under 60 seconds.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span>
                Lightning-fast analysis
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span>
                Instant grant eligibility check
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span>
                Basic ROI projections
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span>
                No registration required
              </li>
            </ul>
            <a 
              href="https://investiscopeeasy.netlify.app/" 
              className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-lg text-center hover:from-green-600 hover:to-green-700 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch Light Calculator →
            </a>
          </div>
          
          {/* InvestiScope Classic */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🧮</div>
            <h2 className="text-2xl font-bold mb-3">InvestiScope™ Classic</h2>
            <p className="text-gray-600 mb-6">
              Comprehensive analysis tool for serious investors. Detailed financial projections and advanced grant calculations.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span>
                Advanced grant calculations
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span>
                Detailed financial modeling
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span>
                5-year exit strategies
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span>
                Up to €2.25M grant analysis
              </li>
            </ul>
            <a 
              href="https://investiscope.net" 
              className="block w-full bg-primary text-white font-semibold py-3 rounded-lg text-center hover:bg-secondary transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch Classic Calculator →
            </a>
          </div>
        </div>
        
        {/* Comparison Table */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Feature Comparison</h3>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
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
                  <td className="px-6 py-4">ROI Projections</td>
                  <td className="px-6 py-4 text-center">Simple</td>
                  <td className="px-6 py-4 text-center">Detailed</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Exit Strategy Analysis</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Registration Required</td>
                  <td className="px-6 py-4 text-center">No</td>
                  <td className="px-6 py-4 text-center">Optional</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
