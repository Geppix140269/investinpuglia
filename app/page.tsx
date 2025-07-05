export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Simple Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container-custom py-4">
          <h1 className="text-2xl font-bold text-primary">InvestiScope</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-5xl font-bold mb-6">
            Unlock Italian Property Investment Opportunities
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expert guidance for foreign investors seeking to maximize returns 
            through PIA grants and strategic property acquisition in Italy
          </p>
          <div className="space-x-4">
            <a href="/calculator" className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition">
              Check Grant Eligibility
            </a>
            <a href="/surveys" className="inline-block border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition">
              Request Survey
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Choose InvestiScope
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">Expert Guidance</h4>
              <p className="text-gray-600">
                Navigate Italian property investment with confidence through our expert advisory services.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">Grant Assistance</h4>
              <p className="text-gray-600">
                Maximize your investment with our PIA grant eligibility calculator and application support.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">Technical Surveys</h4>
              <p className="text-gray-600">
                Get comprehensive property assessments to make informed investment decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container-custom text-center">
          <p>© 2024 InvestiScope. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
