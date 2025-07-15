// app/fiscal-code/page.tsx

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function FiscalCodePage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    // Section A - Request Type
    requestType: 'attribution', // attribution, variation, death, certificate, duplicate
    deathDate: '',
    
    // Section B - Personal Data
    fiscalCode: '',
    surname: '',
    name: '',
    sex: '',
    birthDate: '',
    birthMunicipality: '',
    birthProvince: '',
    
    // Section C - Italian Residence
    residenceType: 'via',
    residenceAddress: '',
    residenceNumber: '',
    residenceMunicipality: '',
    residenceProvince: '',
    residenceCAP: '',
    residenceFraction: '',
    
    // Section D - Foreign Residence
    foreignCountry: '',
    foreignState: '',
    foreignAddress: '',
    foreignPostalCode: '',
    
    // Section E - Other Fiscal Codes
    otherFiscalCode1: '',
    otherFiscalCode2: '',
    
    // Delegation Information
    delegatorName: '',
    delegatorBirthPlace: '',
    delegatorBirthDate: '',
    delegatorEmail: '',
    delegatorPhone: '',
    
    // Agreement
    termsAccepted: false,
    privacyAccepted: false,
    delegationAccepted: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save to Supabase
      const response = await fetch('/api/fiscal-code-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          status: 'pending'
        })
      })

      if (response.ok) {
        setShowSuccess(true)
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        alert('There was an error submitting your application. Please try again.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('There was an error submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <div className="text-6xl mb-6">✅</div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Application Submitted Successfully!</h1>
            <p className="text-xl text-gray-600 mb-8">
              We've received your Fiscal Code application and will process it within 2-3 business days.
            </p>
            <div className="bg-emerald-50 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-emerald-900 mb-3">What happens next?</h3>
              <ol className="text-left space-y-2 text-emerald-800">
                <li>1. We'll review your application and prepare the documents</li>
                <li>2. Submit your application to the Italian tax authorities</li>
                <li>3. Receive your Fiscal Code within 2-3 business days</li>
                <li>4. We'll email you the official document</li>
              </ol>
            </div>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => router.push('/')}
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-bold hover:shadow-xl transition-all"
              >
                Back to Home
              </button>
              <button
                onClick={() => router.push('/contact')}
                className="px-8 py-4 bg-white border-2 border-emerald-600 text-emerald-600 rounded-full font-bold hover:bg-emerald-50 transition-all"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center py-20 px-5 relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              OFFICIAL FISCAL CODE APPLICATION
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Italian Fiscal Code (Codice Fiscale) Application
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              We'll handle your Fiscal Code application remotely - no need to travel to Italy
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Official Application</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>2-3 Days Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span>€99 Service Fee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need It Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-center mb-12">Why You Need a Fiscal Code</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏦</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Open Bank Accounts</h3>
              <p className="text-gray-600">Required by all Italian banks to open personal or business accounts</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Buy Property</h3>
              <p className="text-gray-600">Essential for all property transactions and notary procedures</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Official Business</h3>
              <p className="text-gray-600">Needed for contracts, utilities, taxes, and all official procedures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Fiscal Code Application Form</h2>
            
            {/* Section A - Request Type */}
            <div className="mb-10 p-6 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">A</span>
                Type of Request
              </h3>
              
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="requestType"
                    value="attribution"
                    checked={formData.requestType === 'attribution'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span>Attribution of Fiscal Code (First Time)</span>
                </label>
                
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="requestType"
                    value="variation"
                    checked={formData.requestType === 'variation'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span>Data Variation</span>
                </label>
                
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="requestType"
                    value="duplicate"
                    checked={formData.requestType === 'duplicate'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span>Request Duplicate Card</span>
                </label>
              </div>
            </div>

            {/* Section B - Personal Data */}
            <div className="mb-10 p-6 bg-green-50 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">B</span>
                Personal Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-2">
                    Surname (Last Name) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">
                    Name (First Name) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">
                    Sex <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="sex"
                    value={formData.sex}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="M">Male (M)</option>
                    <option value="F">Female (F)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">
                    Municipality of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="birthMunicipality"
                    value={formData.birthMunicipality}
                    onChange={handleInputChange}
                    required
                    placeholder="City or foreign country"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">
                    Province of Birth
                  </label>
                  <input
                    type="text"
                    name="birthProvince"
                    value={formData.birthProvince}
                    onChange={handleInputChange}
                    placeholder="If born in Italy"
                    maxLength={2}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Section C - Italian Residence (Optional) */}
            <div className="mb-10 p-6 bg-purple-50 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">C</span>
                Italian Residence (If Applicable)
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block font-semibold mb-2">
                    Address Type
                  </label>
                  <select
                    name="residenceType"
                    value={formData.residenceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="via">Via (Street)</option>
                    <option value="piazza">Piazza (Square)</option>
                    <option value="corso">Corso</option>
                    <option value="viale">Viale</option>
                    <option value="largo">Largo</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block font-semibold mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="residenceAddress"
                    value={formData.residenceAddress}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">
                    Civic Number
                  </label>
                  <input
                    type="text"
                    name="residenceNumber"
                    value={formData.residenceNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">
                    Municipality
                  </label>
                  <input
                    type="text"
                    name="residenceMunicipality"
                    value={formData.residenceMunicipality}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">
                    Province
                  </label>
                  <input
                    type="text"
                    name="residenceProvince"
                    value={formData.residenceProvince}
                    onChange={handleInputChange}
                    maxLength={2}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">
                    Postal Code (CAP)
                  </label>
                  <input
                    type="text"
                    name="residenceCAP"
                    value={formData.residenceCAP}
                    onChange={handleInputChange}
                    maxLength={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Section D - Foreign Residence */}
            <div className="mb-10 p-6 bg-orange-50 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm">D</span>
                Foreign Residence
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-2">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="foreignCountry"
                    value={formData.foreignCountry}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">
                    State/Province/Region
                  </label>
                  <input
                    type="text"
                    name="foreignState"
                    value={formData.foreignState}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block font-semibold mb-2">
                    Full Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="foreignAddress"
                    value={formData.foreignAddress}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="foreignPostalCode"
                    value={formData.foreignPostalCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Delegation Section */}
            <div className="mb-10 p-6 bg-yellow-50 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm">✍️</span>
                Delegation Authorization
              </h3>
              
              <p className="text-gray-700 mb-6">
                By completing this section, you authorize Giuseppe Funaro / InvestiScope to submit this application on your behalf.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block font-semibold mb-2">
                    Your Full Name (for delegation) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="delegatorName"
                    value={formData.delegatorName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="delegatorEmail"
                    value={formData.delegatorEmail}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="delegatorPhone"
                    value={formData.delegatorPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Agreements */}
            <div className="mb-10 p-6 bg-gray-100 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Terms & Agreements</h3>
              
              <div className="space-y-4">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    I understand that this is an official Italian government form and declare that all information provided is true and accurate. 
                    False declarations are punishable under Italian law.
                  </span>
                </label>
                
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    I consent to the processing of my personal data by the Italian Ministry of Economy and Finance and the Revenue Agency 
                    for the purpose of fiscal code attribution, as per D.Lgs. n. 196/2003.
                  </span>
                </label>
                
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="delegationAccepted"
                    checked={formData.delegationAccepted}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    I hereby delegate Giuseppe Funaro / InvestiScope to submit this fiscal code application on my behalf 
                    and to handle all related communications with the Italian tax authorities. Service fee: €99.
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting || !formData.termsAccepted || !formData.privacyAccepted || !formData.delegationAccepted}
                className={`px-12 py-5 rounded-full font-bold text-lg transition-all ${
                  isSubmitting || !formData.termsAccepted || !formData.privacyAccepted || !formData.delegationAccepted
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application & Pay €99'}
              </button>
              
              <p className="text-sm text-gray-600 mt-4">
                You will be redirected to secure payment after submission
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">How long does it take to receive my Fiscal Code?</h3>
              <p className="text-gray-700">
                Typically 2-3 business days from submission. We handle everything remotely - 
                you don't need to visit any Italian offices.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">What documents will I receive?</h3>
              <p className="text-gray-700">
                You'll receive the official Fiscal Code certificate and card via email. 
                The physical card can be collected at an Italian consulate if needed.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">Is this the official process?</h3>
              <p className="text-gray-700">
                Yes, this is the official AA4/8 form from the Italian Revenue Agency. 
                We submit it directly to the authorities on your behalf.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">What if I need to update my information later?</h3>
              <p className="text-gray-700">
                You can use this same form to request data variations. Just select 
                "Data Variation" in the request type and we'll handle the update.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
