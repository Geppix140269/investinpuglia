export default function CalculatorPage() {
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
        <h1 className="text-4xl font-bold text-center mb-8">
          PIA Grant Eligibility Calculator
        </h1>
        <div className="max-w-2xl mx-auto bg-gray-100 p-12 rounded-lg text-center">
          <p className="text-lg text-gray-600 mb-6">
            Calculator coming soon
          </p>
          <p className="text-gray-500">
            Our interactive tool will help you determine your eligibility for PIA grants
            and estimate potential funding for your Italian property investment.
          </p>
          <a href="/" className="inline-block mt-6 text-primary hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
