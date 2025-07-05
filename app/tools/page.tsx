// app/tools/page.tsx
'use client'

export default function ToolsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#059669] to-[#047857] bg-[length:400%_400%] animate-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Investment <span className="text-yellow-400">Analysis Tools</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Suite of AI-powered tools designed to maximize your Italian property investment returns and grant opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Calculator Tools */}
            <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow">
              <div className="text-6xl mb-6">🧮</div>
              <h2 className="text-3xl font-bold mb-4">Grant Calculators</h2>
              <p className="text-gray-600 mb-6">
                Choose between our Light (quick) or Classic (detailed) calculators to analyze your investment and grant eligibility.
              </p>
              <a 
                href="/calculator" 
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all"
              >
                View Calculators →
              </a>
            </div>

            {/* Property Survey */}
            <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow">
              <div className="text-6xl mb-6">🔍</div>
              <h2 className="text-3xl font-bold mb-4">Property Survey</h2>
              <p className="text-gray-600 mb-6">
                Professional due diligence reports to verify legal status, renovation possibilities, and grant compatibility.
              </p>
              <a 
                href="/surveys" 
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all"
              >
                Order Survey →
              </a>
            </div>

            {/* Advisory Services */}
            <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow">
              <div className="text-6xl mb-6">💼</div>
              <h2 className="text-3xl font-bold mb-4">Advisory Services</h2>
              <p className="text-gray-600 mb-6">
                Work directly with Giuseppe Funaro for personalized investment strategy and grant application support.
              </p>
              <a 
                href="/" 
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all"
              >
                Learn More →
              </a>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow">
              <div className="text-6xl mb-6">📚</div>
              <h2 className="text-3xl font-bold mb-4">Resources & Blog</h2>
              <p className="text-gray-600 mb-6">
                Expert insights, market updates, and investment guides for foreign property buyers in Italy.
              </p>
              <a 
                href="/blog" 
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all"
              >
                Visit Blog →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Personal Guidance?</h2>
          <p className="text-xl text-gray-600 mb-8">
            While our tools provide instant analysis, complex investments benefit from expert advisory
          </p>
          <a 
            href="/" 
            className="inline-flex items-center gap-3 bg-green-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-green-700 transition-all"
          >
            Work with Giuseppe →
          </a>
        </div>
      </section>
    </>
  )
}
