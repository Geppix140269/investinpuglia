// app/calculator/page.tsx
export default function CalculatorPage() {
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-7 py-3 rounded-full text-sm font-bold mb-8 shadow-lg animate-fadeIn">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
              AI-POWERED GRANT ANALYSIS
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 animate-fadeIn animation-delay-100">
              Investment <strong className="font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Calculators</strong>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto animate-fadeIn animation-delay-200">
              Choose the perfect tool for analyzing your Italian property investment and PIA grant eligibility
            </p>
            
            {/* Glass morphism box */}
            <div className="inline-block bg-gradient-to-r from-green-400/20 to-emerald-500/10 backdrop-blur-md border border-green-400/30 px-8 py-5 rounded-full mb-10 animate-fadeIn animation-delay-300">
              <p className="text-white text-lg font-semibold">
                💰 Calculate up to €2.25M in grants instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculators Section with glass morphism cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* InvestiScope Light - Glass morphism card */}
            <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-white/50 hover:-translate-y-2 transition-all duration-300">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                RECOMMENDED
              </div>
              <div className="text-6xl mb-6 animate-float">⚡</div>
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
                className="block w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-4 rounded-xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Light Calculator →
              </a>
            </div>
            
            {/* InvestiScope Classic - Glass morphism card */}
            <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-white/50 hover:-translate-y-2 transition-all duration-300">
              <div className="text-6xl mb-6 animate-float animation-delay-200">🧮</div>
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
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-4 rounded-xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Classic Calculator →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
