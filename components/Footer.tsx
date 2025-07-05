export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <div className="flex justify-center items-center gap-3 mb-4">
          <img 
            src="/Logo_InvestiScope.png" 
            alt="InvestiScope Logo" 
            className="h-12 w-auto"
          />
          <div className="flex items-baseline gap-1">
            <h3 className="text-3xl font-bold m-0" style={{ fontFamily: "'Playfair Display', serif" }}>
              InvestiScope
            </h3>
            <span className="text-sm font-normal">™</span>
          </div>
        </div>
        <p className="text-gray-400 text-sm tracking-wider mb-8" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.15em' }}>
          CLARITY • TOOLS • CONFIDENCE
        </p>
