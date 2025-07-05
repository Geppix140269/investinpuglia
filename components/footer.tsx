export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <h3 className="text-2xl font-bold mb-2">InvestiScope™</h3>
        <p className="text-gray-400 mb-8">Expert Investment Advisory for Italian Property</p>
        
        <div className="flex justify-center gap-8 mb-8">
          <a href="/" className="hover:text-green-400 transition-colors">Home</a>
          <a href="/calculator" className="hover:text-green-400 transition-colors">Calculators</a>
          <a href="/surveys" className="hover:text-green-400 transition-colors">Property Survey</a>
          <a href="/contact" className="hover:text-green-400 transition-colors">Contact</a>
          <a href="/blog" className="hover:text-green-400 transition-colors">Blog</a>
        </div>
        
        <div className="text-gray-400">
          <p>📧 info@investiscope.net</p>
          <p>📱 +39 351 400 1402</p>
        </div>
        
        <p className="text-gray-500 mt-8">© 2024 InvestiScope. All rights reserved.</p>
      </div>
    </footer>
  )
}
