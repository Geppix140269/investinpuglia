// app/page.tsx - Updated with your complete hero section

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Both Products */}
      <section className="min-h-screen flex items-center py-20 px-5 relative overflow-hidden bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#059669] to-[#047857] animate-gradient">
        {/* Animated background effect */}
        <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-radial-gradient opacity-10 animate-shimmer" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center mb-16 fade-in">
            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg animate-pulse">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
              AI-POWERED INVESTMENT ANALYSIS
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light text-white mb-3">
              InvestiScope<strong className="font-bold">™</strong> Suite
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto mb-8">
              Professional investment analysis tools to maximize your property returns and government grant opportunities
            </p>
            
            {/* Regional Grants Available */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 mt-8">
              <span className="text-3xl">🏛️</span>
              <div className="text-left">
                <div className="font-semibold text-white text-lg">Regional Grants Available</div>
                <div className="text-sm text-white/80">This version includes Mini PIA Turismo calculators for Puglia Region grants (up to 45% funding)</div>
              </div>
            </div>
          </div>
          
          {/* Products Showcase */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* InvestiScope Light */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-10 text-center border border-white/20 transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 animate-slideUp">
              <span className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">NEW</span>
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-2xl font-semibold text-white mb-4">InvestiScope™ Light</h3>
              <p className="text-white/80 mb-6">
                Lightning-fast investment calculator with instant ROI projections and grant eligibility check
              </p>
              <div className="bg-white/20 text-white font-semibold py-2 px-4 rounded-lg mb-6">
                60-Second Analysis
              </div>
              <a 
                href="https://investiscopeeasy.netlify.app/" 
                className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg"
                target="_blank" 
                rel="noopener noreferrer"
              >
                ⚡ Quick Calculator →
              </a>
            </div>
            
            {/* InvestiScope Classic */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 text-center border border-white/20 transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 animate-slideUp animation-delay-100">
              <div className="text-6xl mb-6">🧮</div>
              <h3 className="text-2xl font-semibold text-white mb-4">InvestiScope™ Classic</h3>
              <p className="text-white/80 mb-6">
                Advanced calculator for Mini PIA Turismo grants with detailed financial projections
              </p>
              <div className="bg-white/20 text-white font-semibold py-2 px-4 rounded-lg mb-6">
                Up to €2.25M Grants
              </div>
              <a 
                href="https://investiscope.net" 
                className="inline-block bg-white/90 text-purple-700 font-semibold px-8 py-4 rounded-xl hover:bg-white transition-all transform hover:scale-105 shadow-lg"
                target="_blank" 
                rel="noopener noreferrer"
              >
                🧮 Use Calculator →
              </a>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:-translate-y-1 transition-all animate-slideUp animation-delay-200">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-white font-semibold mb-2">Grant Calculator</h4>
              <p className="text-white/80 text-sm">Mini PIA grants up to €2.25M (45% of €5M max project value)</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:-translate-y-1 transition-all animate-slideUp animation-delay-300">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-white font-semibold mb-2">Investment Analysis</h4>
              <p className="text-white/80 text-sm">Property appreciation projections based on Puglia market data</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:-translate-y-1 transition-all animate-slideUp animation-delay-400">
              <div className="text-4xl mb-4">🔍</div>
              <h4 className="text-white font-semibold mb-2">Due Diligence</h4>
              <p className="text-white/80 text-sm">Professional property survey services available</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:-translate-y-1 transition-all animate-slideUp animation-delay-500">
              <div className="text-4xl mb-4">🔑</div>
              <h4 className="text-white font-semibold mb-2">Turnkey Solutions</h4>
              <p className="text-white/80 text-sm">Complete investment management from A to Z</p>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-white/90">
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>100% Free Tools</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Instant Results</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>No Registration Required</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Professional Grade</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose InvestiScope</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-semibold mb-4">Precision Analysis</h3>
              <p className="text-gray-600">
                Get accurate investment projections based on real market data and government grant programs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-semibold mb-4">Instant Results</h3>
              <p className="text-gray-600">
                No waiting weeks for consultants. Get professional-grade analysis in under 60 seconds.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-6">💶</div>
              <h3 className="text-2xl font-semibold mb-4">Save Thousands</h3>
              <p className="text-gray-600">
                Our free tools save you €10,000+ in consultant fees while maximizing your grant eligibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Italian Property Journey?</h2>
          <p className="text-xl mb-10 opacity-90">
            Choose your tool and discover your investment potential in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://investiscopeeasy.netlify.app/" 
              className="inline-block bg-white text-purple-700 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              ⚡ Try Light Version
            </a>
            <a 
              href="https://investiscope.net" 
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-purple-700 transition-all transform hover:scale-105"
            >
              🧮 Use Classic Calculator
            </a>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h3 className="text-2xl font-bold mb-2">InvestiScope™</h3>
          <p className="text-gray-400 mb-8">AI-Powered Investment Analysis for Italian Property</p>
          <div className="flex justify-center gap-8 mb-8">
            <a href="/calculator" className="hover:text-green-400 transition-colors">Calculators</a>
            <a href="/pro" className="hover:text-green-400 transition-colors">Advisory</a>
            <a href="/surveys" className="hover:text-green-400 transition-colors">Surveys</a>
            <a href="/blog" className="hover:text-green-400 transition-colors">Blog</a>
          </div>
          <p className="text-gray-500">© 2024 InvestiScope. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
