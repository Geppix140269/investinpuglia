// app/pro/page.tsx - Fixed version without styled-jsx

'use client'  // Add this to make it a Client Component

export default function ProPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center py-20 px-5 relative overflow-hidden bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#059669] to-[#047857] bg-[length:400%_400%] animate-gradient">
        <div className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] opacity-10" 
             style={{
               background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
               animation: 'shimmer 15s linear infinite'
             }} />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-7 py-3 rounded-full text-sm font-bold mb-8 shadow-lg animate-fadeIn">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
              ⚡ €810,000 SECURED FOR BRIGITTE IN 5 MONTHS
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 animate-fadeIn animation-delay-100">
              Secure Up to <strong className="font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">€2.25M in EU Grants</strong><br/>
              for Your Dream Property in Puglia
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto animate-fadeIn animation-delay-200">
              Without bureaucracy, language barriers, or losing €200K to the system.<br/>
              <span className="text-lg opacity-90">I handle everything while you stay in London, Paris, or New York.</span>
            </p>
            
            <div className="inline-block bg-gradient-to-r from-yellow-400/20 to-orange-500/10 backdrop-blur-md border border-yellow-400/30 px-8 py-5 rounded-full mb-10 animate-fadeIn animation-delay-300">
              <p className="text-white text-lg font-semibold">
                💎 One expert, one mission: turn your renovation dream into €2.25M in non-repayable funding
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fadeIn animation-delay-400">
              <a 
                href="https://calendly.com/investiscope_pro/30min" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-5 rounded-full text-lg font-bold hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Strategy Call
                <span className="text-2xl">→</span>
              </a>
              <a 
                href="#story" 
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300"
              >
                See €1.08M Success Story
              </a>
            </div>
            
            <div className="mt-10 inline-block bg-black/40 backdrop-blur-md px-6 py-3 rounded-full animate-fadeIn animation-delay-400">
              <p className="text-white font-semibold">
                🎯 I work with a maximum of <span className="text-2xl text-yellow-400">3 clients</span> at a time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-20 bg-gray-50" id="story">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            How Brigitte Secured <strong className="font-extrabold">€1.08M in Grants</strong> in 5 Months<br/>While Living in Paris
          </h2>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600" />
            <div className="absolute top-8 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold">
              ✓ VERIFIED SUCCESS
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                BL
              </div>
              <div>
                <h3 className="text-2xl font-bold">Brigitte L., Paris</h3>
                <p className="text-gray-600">Property in Lecce centro storico, next to Duomo</p>
              </div>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-10">
              <p className="text-lg italic text-green-800">
                "Giuseppe didn't just find me a property. He negotiated €100,000 off the price, 
                reduced agency fees from 4% to 3%, and secured €810,000 in grants plus €270,000 
                in tax credits. All while I was in Paris."
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-1 transition-transform">
                <div className="text-5xl mb-4">💰</div>
                <div className="text-4xl font-bold text-green-600 mb-2">€1.08M</div>
                <div className="text-gray-600 uppercase text-sm font-semibold">Total Funding</div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-1 transition-transform">
                <div className="text-5xl mb-4">⚡</div>
                <div className="text-4xl font-bold text-green-600 mb-2">5 Months</div>
                <div className="text-gray-600 uppercase text-sm font-semibold">To Approval</div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-1 transition-transform">
                <div className="text-5xl mb-4">📈</div>
                <div className="text-4xl font-bold text-green-600 mb-2">2,400%</div>
                <div className="text-gray-600 uppercase text-sm font-semibold">ROI on Fees</div>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://calendly.com/investiscope_pro/30min" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full text-lg font-bold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Results Like This →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#059669] to-[#047857] bg-[length:400%_400%] animate-gradient" id="services">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-6">
            What You're <strong className="font-extrabold">Really Paying Me For</strong>
          </h2>
          <p className="text-xl text-white/90 text-center mb-16 max-w-3xl mx-auto">
            I'm not just a grant consultant. I'm your complete investment protection system.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Strategic Mastery",
                items: [
                  "Find only grant-eligible properties",
                  "Structure for maximum funding",
                  "Negotiate best purchase terms",
                  "Avoid costly property traps"
                ]
              },
              {
                icon: "🛡️",
                title: "Total Protection",
                items: [
                  "Due diligence that catches issues",
                  "Contracts that protect you",
                  "Budget controls that work",
                  "No hidden surprises"
                ]
              },
              {
                icon: "👥",
                title: "Elite Team Access",
                items: [
                  "MY trusted professionals only",
                  "Architects who understand grants",
                  "Lawyers who protect foreigners",
                  "Everyone speaks YOUR language"
                ]
              },
              {
                icon: "📋",
                title: "Grant Excellence",
                items: [
                  "Bulletproof applications",
                  "Perfect documentation",
                  "Regione Puglia expertise",
                  "Track through disbursement"
                ]
              },
              {
                icon: "🚀",
                title: "Execution Power",
                items: [
                  "Contractors stay honest",
                  "Timelines stay real",
                  "Budgets stay controlled",
                  "You stay stress-free"
                ]
              },
              {
                icon: "💰",
                title: "ROI Guarantee",
                items: [
                  "Save €50K-250K in mistakes",
                  "Access hidden funding streams",
                  "Maximize every grant euro",
                  "24x return on investment"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:-translate-y-2 transition-all duration-300">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/85">
                      <span className="text-green-400 font-bold mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <p className="text-2xl text-white font-bold text-center mt-16">
            You don't hire me to try. You hire me to win.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800" id="about">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12">
            Who Am I? <strong className="font-extrabold">And Why Should You Trust Me?</strong>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-12">
            <div className="w-44 h-44 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full p-1">
              <img 
                src="/images/foto.jpeg" 
                alt="Giuseppe Funaro" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="text-left">
              <h3 className="text-3xl font-bold text-white mb-2">Giuseppe Funaro</h3>
              <p className="text-xl text-white/80">56 years • 35+ years international experience</p>
              <p className="text-lg text-white/70 mt-2">Fluent in English, Spanish, Italian</p>
            </div>
          </div>
          
          <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Former telecommunications executive managing €120M+ operations across Europe.<br/>
            Now I dedicate my expertise to protecting foreign investors in Puglia.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-3">International Executive</h3>
              <p className="text-white/80">35+ years managing multimillion-euro deals across Europe. I know how big money moves.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">🇮🇹</div>
              <h3 className="text-xl font-bold text-white mb-3">Italian System Expert</h3>
              <p className="text-white/80">Deep knowledge of grant systems and the relationships that actually matter in Puglia.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-3">Your Advocate Only</h3>
              <p className="text-white/80">No agency kickbacks. No hidden agendas. I work exclusively for your success.</p>
            </div>
          </div>
          
          <p className="text-xl text-green-400 italic mb-8">
            "At 56, I've done the corporate race. Now I only take on clients I believe in.<br/>
            I want your project to win — because that's what I'd want if I were in your shoes."
          </p>
          
          <a 
            href="https://www.linkedin.com/in/giuseppefunaro" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0077b5] text-white px-8 py-3 rounded-full font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            Verify My Background on LinkedIn
            <span className="text-xl">→</span>
          </a>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">I'll Tell You in 30 Minutes If Your Project Qualifies</h2>
          <p className="text-xl mb-10 opacity-90">
            Free discovery call — I'll assess your project and tell you exactly what it would take to get funded
          </p>
          
          <a 
            href="https://calendly.com/investiscope_pro/30min" 
            className="inline-flex items-center gap-3 bg-white text-green-700 px-10 py-5 rounded-full text-xl font-extrabold hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Free Strategy Call →
          </a>
          
          <div className="mt-10 inline-block bg-red-600/20 border-2 border-red-400/50 px-8 py-4 rounded-full">
            <p className="text-lg font-semibold">
              ⚠️ Mini PIA funds are limited and first-come, first-served.<br/>
              Once they're gone, they won't return until 2028.
            </p>
          </div>
          
          <p className="mt-12 text-lg italic opacity-80">
            I'm not the cheapest. I'm the one who saves you from the most expensive mistake of your life —<br/>
            buying the wrong property in the wrong way with the wrong team.
          </p>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <div className="flex justify-center gap-8 mb-8">
            <a href="/" className="hover:text-green-400 transition-colors">Home</a>
            <a href="/calculator" className="hover:text-green-400 transition-colors">Calculators</a>
            <a href="/surveys" className="hover:text-green-400 transition-colors">Surveys</a>
            <a href="/blog" className="hover:text-green-400 transition-colors">Blog</a>
          </div>
          <p className="text-gray-400">© 2024 InvestiScope. Professional Advisory Services.</p>
        </div>
      </footer>
    </>
  )
}
