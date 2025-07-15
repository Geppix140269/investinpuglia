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
    requestType: 'attribution',
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

  const setQuickCountry = (field: string, country: string) => {
    setFormData(prev => ({ ...prev, [field]: country }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email notification using EmailJS
      if (typeof window !== 'undefined' && (window as any).emailjs) {
        try {
          // Send confirmation email to user
          await (window as any).emailjs.send(
            'service_w6tghqr',
            'template_j0xsdcl',
            {
              to_email: formData.delegatorEmail,
              user_name: formData.delegatorName || `${formData.name} ${formData.surname}`,
              application_type: 'Fiscal Code Application',
              status: 'received'
            }
          )

          // Send notification to agency
          await (window as any).emailjs.send(
            'service_w6tghqr',
            'template_pkjko4e',
            {
              applicant_name: `${formData.name} ${formData.surname}`,
              applicant_email: formData.delegatorEmail,
              applicant_phone: formData.delegatorPhone,
              request_type: formData.requestType,
              birth_date: formData.birthDate,
              country: formData.foreignCountry
            }
          )
        } catch (emailError) {
          console.error('Email error:', emailError)
        }
      }

      // Save to Supabase
      const response = await fetch('/api/fiscal-code-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString()
        })
      })

      if (response.ok) {
        setShowSuccess(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const error = await response.json()
        alert(`Error: ${error.error || 'Failed to submit application'}`)
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
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Get Your Italian Fiscal Code
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Official Codice Fiscale application service for foreigners. 
            Process your application remotely in 2-3 business days.
          </p>
          
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl mx-auto">
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Official Application</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>2-3 Days Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
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
                  <span>Duplicate Card</span>
                </label>
              </div>
            </div>

            {/* Section B - Personal Data */}
            <div className="mb-10 p-6 bg-green-50 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">B</span>
                Personal Data
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-2">
                    Surname <span className="text-red-500">*</span>
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
                    Name <span className="text-red-500">*</span>
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
                    <option value="">Select...</option>
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

            {/* Section D - Foreign Residence */}
            <div className="mb-10 p-6 bg-orange-50 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm">D</span>
                Foreign Residence
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block font-semibold mb-2">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="foreignCountry"
                      value={formData.foreignCountry}
                      onChange={handleInputChange}
                      required
                      className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setQuickCountry('foreignCountry', 'United States')}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
                    >
                      USA
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuickCountry('foreignCountry', 'United Kingdom')}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
                    >
                      UK
                    </button>
                  </div>
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
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    name="delegatorName"
                    value={formData.delegatorName}
                    onChange={handleInputChange}
                    placeholder="Leave blank to use name from Section B"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">
                    Email <span className="text-red-500">*</span>
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
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="delegatorPhone"
                    value={formData.delegatorPhone}
                    onChange={handleInputChange}
                    required
                    placeholder="+1234567890"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-10 p-6 bg-red-50 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Declaration and Agreement</h3>
              
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
                    I declare that all information provided is true and accurate. 
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
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
              
              <p className="text-sm text-gray-600 mt-4">
                You will receive payment instructions via email after submission
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
