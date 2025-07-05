// app/page.tsx - Professional homepage flow

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Problem & Solution */}
      <section className="min-h-screen flex items-center py-20 px-5 relative overflow-hidden bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#059669] to-[#047857] bg-[length:400%_400%] animate-gradient">
        <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] opacity-10" 
             style={{
               background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
               animation: 'shimmer 15s linear infinite'
             }} />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center">
            {/* Professional badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-7 py-3 rounded-full text-sm font-bold mb-8 shadow-lg animate-fadeIn">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
              ITALIAN PROPERTY INVESTMENT EXPERTS
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 animate-fadeIn animation-delay-100">
              Maximize Your <strong className="font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Italian Property Investment</strong>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto animate-fadeIn animation-delay-200">
              Secure up to €2.25M in EU grants with professional analysis tools and expert advisory services
            </p>
            
            {/* Value prop box */}
            <div className="inline-block bg-gradient-to-r from-green-400/20 to-emerald-500/10 backdrop-blur-md border border-green-400/30 px-8 py-5 rounded-full mb-10 animate-fadeIn animation-delay-300">
              <p className="text-white text-lg font-semibold">
                💰 The only platform combining grant calculators with expert advisory
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fadeIn animation-delay-400">
              <a 
                href="/tools" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-5 rounded-full text-lg font-bold hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                Explore Our Tools
                <span className="text-2xl">→</span>
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300"
              >
                Get Expert Help
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-12">
            The <span className="text-red-600">€200,000 Mistake</span> Most Foreign Buyers Make
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl mb-8">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Without Proper Guidance:</h3>
              <ul className="space-y-3 text-red-700">
                <li>• Missing out on €2.25M in available grants</li>
                <li>• Buying properties with hidden legal issues</li>
                <li>• Overpaying due to lack of local knowledge</li>
                <li>• Getting stuck with unbuildable renovation plans</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-r-xl">
              <h3 className="text-2xl font-bold text-green-800 mb-4">With InvestiScope:</h3>
              <ul className="space-y-3 text-green-700">
                <li>✓ Instant grant eligibility analysis</li>
                <li>✓ Professional property due diligence</li>
                <li>✓ Expert negotiation and guidance</li>
                <li>✓ Complete investment protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-6">
            Professional Tools & Services
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Everything you need to make smart property investment decisions in Italy
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Grant Calculators */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-4">🧮</div>
              <h3 className="text-2xl font-bold mb-4">Grant Calculators</h3>
              <p className="text-gray-600 mb-6">
                Instant analysis of your eligibility for up to €2.25M in EU grants
              </p>
              <a href="/calculator" className="text-green-600 font-semibold hover:underline">
                Try Calculator →
              </a>
            </div>
            
            {/* Property Survey */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-4">Property Survey</h3>
              <p className="text-gray-600 mb-6">
                Complete due diligence before you buy - legal, technical, and financial
              </p>
              <a href="/surveys" className="text-green-600 font-semibold hover:underline">
                Learn More →
              </a>
            </div>
            
            {/* Expert Advisory */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-4">Expert Advisory</h3>
              <p className="text-gray-600 mb-6">
                Personal guidance through every step of your investment journey
              </p>
              <a href="#advisor" className="text-green-600 font-semibold hover:underline">
                Meet Your Advisor →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-12">
            Proven <span className="text-green-600">Success</span>
          </h2>
          
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10">
            <div className="text-center mb-8">
              <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                VERIFIED RESULT
              </div>
              <h3 className="text-3xl font-bold mb-2">€1.08M Secured in Grants</h3>
              <p className="text-gray-600">Brigitte L., Paris - Property in Lecce</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">€810K</div>
                <div className="text-gray-600">Grant Secured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">5 Months</div>
                <div className="text-gray-600">To Approval</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">€270K</div>
                <div className="text-gray-600">Tax Credits</div>
              </div>
            </div>
            
            <p className="text-center text-gray-700 italic">
              "The guidance saved me from costly mistakes and secured funding I didn't even know existed."
            </p>
          </div>
        </div>
      </section>

      {/* About the Advisor */}
      <section className="py-20 bg-gray-50" id="advisor">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-12">
            Meet Your <span className="text-green-600">Expert Advisor</span>
          </h2>
          
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="text-center mb-8">
              <img 
                src="/images/foto.jpeg" 
                alt="Giuseppe Funaro" 
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-green-100"
              />
              <h3 className="text-2xl font-bold">Giuseppe Funaro</h3>
              <p className="text-gray-600">Senior Investment Advisor</p>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                With 35+ years of international business experience and deep knowledge of Italian 
                grant systems, Giuseppe helps foreign investors navigate the complexities of property 
                investment in Italy.
              </p>
              <p>
                Former telecommunications executive who now dedicates his expertise to protecting 
                international clients from costly mistakes while maximizing their investment potential.
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="https://calendly.com/investiscope_pro/30min" 
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Free Consultation →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Invest Smarter?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Start with our free tools or get personalized expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/calculator" 
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all"
            >
              Try Free Calculator
            </a>
            <a 
              href="/contact" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-green-700 transition-all"
            >
              Get Expert Help
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
