export default function SurveysPage() {
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
          Request Property Survey
        </h1>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Property Location</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Budget</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-2 border rounded-lg"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
