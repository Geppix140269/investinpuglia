export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="container-custom py-4">
          <a href="/" className="text-2xl font-bold text-primary hover:opacity-80">
            InvestiScope
          </a>
        </div>
      </nav>
      
      <div className="container-custom py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Redirecting to Blog...</h1>
        <p className="text-gray-600 mb-4">You'll be redirected to our blog in a moment.</p>
        <a href="https://marietrulli.com/blog" className="text-primary hover:underline">
          Click here if not redirected automatically
        </a>
        <script dangerouslySetInnerHTML={{
          __html: `setTimeout(() => window.location.href = 'https://marietrulli.com/blog', 2000);`
        }} />
      </div>
    </div>
  )
}
