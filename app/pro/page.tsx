export default function ProPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="container-custom py-4">
          <a href="/" className="text-2xl font-bold text-primary hover:opacity-80">
            InvestiScope
          </a>
        </div>
      </nav>
      
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">
            Giuseppe Funaro — Strategic Advisor for Foreign Property Investors
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            With over 15 years of experience in Italian real estate and investment advisory,
            Giuseppe helps international clients navigate the complexities of property investment in Italy.
          </p>
          <div className="space-x-4">
            <a href="#" className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary">
              Schedule a Consultation
            </a>
            <a href="#" className="inline-block border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white">
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
