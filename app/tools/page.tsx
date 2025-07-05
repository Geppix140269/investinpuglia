'use client'

export default function ToolsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Professional Investment <span className="text-green-400">Analysis Tools</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Suite of AI-powered tools designed to maximize your Italian property investment returns and grant opportunities
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Calculator Tools */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-5xl mb-4">🧮</div>
              <h2 className="text-3xl font-bold mb-4">Grant Calculators</h2>
              <p className="text-gray-600 mb-6">
                Choose between our Light (quick) or Classic (detailed) calculators to analyze your investment and grant eligibility.
              </p>
              <a 
                href="/calculator" 
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
              >
                View Calculators →
              </a>
            </div>

            {/* Property Survey */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-5xl mb-4">🔍</div>
              <h2 className="text-3xl font-bold mb-4">Property Survey</h2>
              <p className="text-gray-600 mb-6">
                Professional due diligence reports to verify legal status, renovation possibilities, and grant compatibility.
              </p>
              <a 
                href="/surveys" 
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
              >
                Order Survey →
              </a>
            </div>

            {/* Advisory Services */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-5xl mb-4">💼</div>
              <h2 className="text-3xl font-bold mb-4">Advisory Services</h2>
              <p className="text-gray-600 mb-6">
                Work directly with Giuseppe Funaro for personalized investment strategy and grant application support.
              </p>
              <a 
                href="/" 
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
              >
                Learn More →
              </a>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-5xl mb-4">📚</div>
              <h2 className="text-3xl font-bold mb-4">Resources & Blog</h2>
              <p className="text-gray-600 mb-6">
                Expert insights, market updates, and investment guides for foreign property buyers in Italy.
              </p>
              <a 
                href="/blog" 
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
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
