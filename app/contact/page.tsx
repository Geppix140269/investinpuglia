// app/contact/page.tsx
'use client'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#059669] to-[#047857] bg-[length:400%_400%] animate-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="text-yellow-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ready to secure your Italian property investment with expert guidance? Let's discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Direct Contact */}
            <div className="bg-white rounded-2xl shadow-xl p-10">
              <h2 className="text-2xl font-bold mb-8">Direct Contact</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Email</h3>
                  <a href="mailto:info@investiscope.net" className="text-green-600 hover:underline text-lg">
                    info@investiscope.net
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Phone/WhatsApp</h3>
                  <a href="tel:+393514001402" className="text-green-600 hover:underline text-lg">
                    +39 351 400 1402
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 - 18:00 CET<br/>
                    Saturday: 10:00 - 14:00 CET
                  </p>
                </div>
              </div>
            </div>

            {/* Schedule Consultation */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-10">
              <h2 className="text-2xl font-bold mb-8">Schedule a Consultation</h2>
              
              <p className="text-gray-700 mb-6">
                Book a free 30-minute strategy call to discuss your property investment goals and grant opportunities.
              </p>
              
              <a 
                href="https://calendly.com/investiscope_pro/30min" 
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Strategy Call →
              </a>
              
              <p className="text-sm text-gray-600 mt-4">
                Average response time: Within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Send us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Subject *</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" required>
                  <option value="">Select a topic</option>
                  <option value="grant-consultation">Grant Consultation</option>
                  <option value="property-survey">Property Survey</option>
                  <option value="investment-advisory">Investment Advisory</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Message *</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Tell us about your property investment plans..."
                  required
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
