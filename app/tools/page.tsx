// app/tools/page.tsx
'use client'

export default function ToolsPage() {
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-7 py-3 rounded-full text-sm font-bold mb-8 shadow-lg animate-fadeIn">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-ping" />
              PROFESSIONAL TOOLKIT
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 animate-fadeIn animation-delay-100">
              Investment Analysis <strong className="font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Tools</strong>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto animate-fadeIn animation-delay-200">
              Suite of AI-powered tools designed to maximize your Italian property investment returns and grant opportunities
            </p>
            
            {/* Glass morphism box */}
            <div className="inline-block bg-gradient-to-r from-purple-400/20 to-blue-500/10 backdrop-blur-md border border-purple-400/30 px-8 py-5 rounded-full mb-10 animate-fadeIn animation-delay-300">
              <p className="text-white text-lg font-semibold">
                🚀 Everything you need for smart property investment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid with glass morphism */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Calculator Tools - Glass card */}
            <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-white/50 hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🧮</div>
              <h2 className="text-3xl font-bold mb-4">Grant Calculators</h2>
              <p className="text-gray-600 mb-6">
                Choose between our Light (quick) or Classic (detailed) calculators to analyze your investment and grant eligibility.
              </p>
              <a 
                href="/calculator" 
                className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                View Calculators →
              </a>
            </div>

            {/* Property Survey - Glass card */}
            <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-white/50 hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🔍</div>
              <h2 className="text-3xl font-bold mb-4">Property Survey</h2>
              <p className="text-gray-600 mb-6">
                Professional due diligence reports to verify legal status, renovation possibilities, and grant compatibility.
              </p>
              <a 
                href="/surveys" 
                className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Order Survey →
              </a>
            </div>

            {/* Advisory Services - Glass card */}
            <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-white/50 hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">💼</div>
              <h2 className="text-3xl font-bold mb-4">Advisory Services</h2>
              <p className="text-gray-600 mb-6">
                Work directly with Giuseppe Funaro for personalized investment strategy and grant application support.
              </p>
              <a 
                href="/" 
                className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Learn More →
              </a>
            </div>

            {/* Resources - Glass card */}
            <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-white/50 hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">📚</div>
              <h2 className="text-3xl font-bold mb-4">Resources & Blog</h2>
              <p className="text-gray-600 mb-6">
                Expert insights, market updates, and investment guides for foreign property buyers in Italy.
              </p>
              <a 
                href="/blog" 
                className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Visit Blog →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
