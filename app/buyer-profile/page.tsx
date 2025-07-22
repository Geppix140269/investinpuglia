'use client'

import React, { useState } from 'react'
import { ChevronRight, ChevronLeft, CheckCircle, Send, Download, X } from 'lucide-react'

interface FormData {
  // Personal Information
  fullName: string
  email: string
  phone: string
  nationality: string
  residency: string
  
  // Investment Goals
  investmentPurpose: string
  propertyType: string
  budget: string
  timeline: string
  
  // Property Preferences
  location: string[]
  propertySize: string
  bedrooms: string
  amenities: string[]
  
  // Financial Details
  financingMethod: string
  downPaymentPercentage: string
  preApproved: string
  monthlyBudget: string
  
  // Experience Level
  previousInvestments: string
  italianPropertyExperience: string
  languageSkills: string
  needsAssistance: string[]
  
  // Legal Requirements
  taxId: string
  needsTaxId: string
  legalRepresentation: string
  powerOfAttorney: string
  
  // Property Management
  propertyManagement: string
  rentalStrategy: string
  maintenanceBudget: string
  localContacts: string
  
  // Due Diligence
  propertyInspection: string
  legalReview: string
  surveyRequired: string
  insuranceNeeds: string[]
  
  // Grant Eligibility
  businessPlan: string
  employmentCreation: string
  sustainabilityFeatures: string[]
  grantInterest: string
  
  // Additional Services
  additionalServices: string[]
  urgency: string
  specialRequests: string
  howHeard: string
}

type RecipientType = 'agency' | 'internal' | 'custom'

interface RecipientOption {
  label: string
  emails: string[]
}

const BuyerProfilePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [emailSent, setEmailSent] = useState<boolean>(false)
  const [recipientEmail, setRecipientEmail] = useState<string>('')
  const [recipientType, setRecipientType] = useState<RecipientType>('agency')
  const [customRecipients, setCustomRecipients] = useState<string>('')
  
  // Predefined recipient emails
  const recipientOptions: Record<RecipientType, RecipientOption> = {
    agency: {
      label: 'Partner Agencies',
      emails: ['agencies@investinpuglia.eu', 'partners@investinpuglia.eu']
    },
    internal: {
      label: 'Internal Team',
      emails: ['team@investinpuglia.eu', 'sales@investinpuglia.eu']
    },
    custom: {
      label: 'Custom Recipients',
      emails: []
    }
  }
  
  const [formData, setFormData] = useState<FormData>({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    residency: '',
    
    // Investment Goals
    investmentPurpose: '',
    propertyType: '',
    budget: '',
    timeline: '',
    
    // Property Preferences
    location: [],
    propertySize: '',
    bedrooms: '',
    amenities: [],
    
    // Financial Details
    financingMethod: '',
    downPaymentPercentage: '',
    preApproved: '',
    monthlyBudget: '',
    
    // Experience Level
    previousInvestments: '',
    italianPropertyExperience: '',
    languageSkills: '',
    needsAssistance: [],
    
    // Legal Requirements
    taxId: '',
    needsTaxId: '',
    legalRepresentation: '',
    powerOfAttorney: '',
    
    // Property Management
    propertyManagement: '',
    rentalStrategy: '',
    maintenanceBudget: '',
    localContacts: '',
    
    // Due Diligence
    propertyInspection: '',
    legalReview: '',
    surveyRequired: '',
    insuranceNeeds: [],
    
    // Grant Eligibility
    businessPlan: '',
    employmentCreation: '',
    sustainabilityFeatures: [],
    grantInterest: '',
    
    // Additional Services
    additionalServices: [],
    urgency: '',
    specialRequests: '',
    howHeard: ''
  })

  const totalSteps = 10

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleCheckboxChange = (field: keyof FormData, value: string, checked: boolean) => {
    const currentValues = formData[field]
    if (Array.isArray(currentValues)) {
      if (checked) {
        updateFormData(field, [...currentValues, value])
      } else {
        updateFormData(field, currentValues.filter(item => item !== value))
      }
    }
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowModal(true)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const formatValue = (value: string): string => {
    if (!value) return 'Not specified'
    return value.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }

  const generateEmailContent = (): JSX.Element => {
    const today = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
    
    return (
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Buyer Profile Summary</h2>
        <p className="text-gray-600 mb-6">Date: {today}</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Personal Information</h3>
            <p><strong>Name:</strong> {formData.fullName || 'Not provided'}</p>
            <p><strong>Email:</strong> {formData.email || 'Not provided'}</p>
            <p><strong>Phone:</strong> {formData.phone || 'Not provided'}</p>
            <p><strong>Nationality:</strong> {formData.nationality || 'Not provided'}</p>
            <p><strong>Residency:</strong> {formData.residency || 'Not provided'}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Investment Goals</h3>
            <p><strong>Purpose:</strong> {formatValue(formData.investmentPurpose)}</p>
            <p><strong>Property Type:</strong> {formatValue(formData.propertyType)}</p>
            <p><strong>Budget:</strong> {formatValue(formData.budget)}</p>
            <p><strong>Timeline:</strong> {formatValue(formData.timeline)}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Property Preferences</h3>
            <p><strong>Locations:</strong> {formData.location.join(', ') || 'Not specified'}</p>
            <p><strong>Size:</strong> {formatValue(formData.propertySize)}</p>
            <p><strong>Bedrooms:</strong> {formData.bedrooms || 'Not specified'}</p>
            <p><strong>Amenities:</strong> {formData.amenities.join(', ') || 'None selected'}</p>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-amber-50 rounded-lg">
          <p className="text-gray-700 italic">
            This buyer profile was generated through Invest in Puglia. 
            We specialize in connecting international buyers with exceptional properties in the heart of Southern Italy.
          </p>
        </div>
      </div>
    )
  }

  const handleSendEmail = async (): Promise<void> => {
    // Determine recipients based on selection
    let recipients: string[] = []
    
    if (recipientType === 'custom') {
      // Parse custom email addresses
      recipients = customRecipients
        .split(',')
        .map(email => email.trim())
        .filter(email => email.includes('@'))
    } else {
      recipients = recipientOptions[recipientType].emails
    }

    if (recipients.length === 0) {
      alert('Please select or enter at least one recipient email address')
      return
    }

    // Prepare email data
    const emailData = {
      to: recipients,
      cc: [formData.email], // CC the buyer
      subject: `New Buyer Profile: ${formData.fullName} - ${formatValue(formData.propertyType)} in Puglia`,
      buyerData: formData,
      sentAt: new Date().toISOString()
    }
    
    console.log('Sending email to:', recipients)
    console.log('Email data:', emailData)
    
    // In production, you would call your backend API here
    // const response = await fetch('/api/send-buyer-profile', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(emailData)
    // })
    
    // Simulate email sending
    setTimeout(() => {
      setEmailSent(true)
    }, 1000)
  }

  const handleDownloadPDF = (): void => {
    // In a real implementation, you would generate a PDF here
    console.log('Downloading PDF with form data:', formData)
    alert('PDF download functionality would be implemented with a library like jsPDF or by calling a backend service')
  }

  const renderStepContent = (): JSX.Element => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Personal Information</h2>
            <p className="text-gray-600">Let's start with some basic information about you.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => updateFormData('fullName', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+1 234 567 8900"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nationality *
                </label>
                <input
                  type="text"
                  value={formData.nationality}
                  onChange={(e) => updateFormData('nationality', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="e.g., American, British, Canadian"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country of Residency *
                </label>
                <input
                  type="text"
                  value={formData.residency}
                  onChange={(e) => updateFormData('residency', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="e.g., United States, United Kingdom"
                  required
                />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Investment Goals</h2>
            <p className="text-gray-600">Help us understand your investment objectives.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Purpose of Investment *
                </label>
                <select
                  value={formData.investmentPurpose}
                  onChange={(e) => updateFormData('investmentPurpose', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select purpose</option>
                  <option value="vacation-home">Vacation Home</option>
                  <option value="rental-income">Rental Income</option>
                  <option value="retirement">Retirement Home</option>
                  <option value="business">Business/Tourism</option>
                  <option value="mixed-use">Mixed Use</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type *
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => updateFormData('propertyType', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select type</option>
                  <option value="trullo">Trullo</option>
                  <option value="masseria">Masseria</option>
                  <option value="villa">Villa</option>
                  <option value="apartment">Apartment</option>
                  <option value="palazzo">Palazzo</option>
                  <option value="land">Land/Development</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range (EUR) *
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => updateFormData('budget', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select budget</option>
                  <option value="0-150k">€0 - €150,000</option>
                  <option value="150k-300k">€150,000 - €300,000</option>
                  <option value="300k-500k">€300,000 - €500,000</option>
                  <option value="500k-1m">€500,000 - €1,000,000</option>
                  <option value="1m+">€1,000,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Investment Timeline *
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => updateFormData('timeline', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (0-3 months)</option>
                  <option value="short">Short-term (3-6 months)</option>
                  <option value="medium">Medium-term (6-12 months)</option>
                  <option value="long">Long-term (12+ months)</option>
                </select>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Property Preferences</h2>
            <p className="text-gray-600">Tell us about your ideal property.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Locations (select all that apply)
                </label>
                <div className="space-y-2">
                  {['Ostuni', 'Monopoli', 'Polignano a Mare', 'Locorotondo', 'Alberobello', 'Cisternino', 'Martina Franca', 'Fasano', 'Other'].map(location => (
                    <label key={location} className="flex items-center p-2 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.location.includes(location)}
                        onChange={(e) => handleCheckboxChange('location', location, e.target.checked)}
                        className="mr-3 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{location}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Size
                </label>
                <select
                  value={formData.propertySize}
                  onChange={(e) => updateFormData('propertySize', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select size</option>
                  <option value="small">Small (&lt; 100 m²)</option>
                  <option value="medium">Medium (100-200 m²)</option>
                  <option value="large">Large (200-400 m²)</option>
                  <option value="xlarge">Extra Large (400+ m²)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Bedrooms
                </label>
                <select
                  value={formData.bedrooms}
                  onChange={(e) => updateFormData('bedrooms', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select bedrooms</option>
                  <option value="1-2">1-2 bedrooms</option>
                  <option value="3-4">3-4 bedrooms</option>
                  <option value="5-6">5-6 bedrooms</option>
                  <option value="7+">7+ bedrooms</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Essential Amenities (select all that apply)
                </label>
                <div className="space-y-2">
                  {['Swimming Pool', 'Garden', 'Sea View', 'Parking', 'Guest House', 'Wine Cellar', 'Olive Grove', 'Historic Features'].map(amenity => (
                    <label key={amenity} className="flex items-center p-2 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.amenities.includes(amenity)}
                        onChange={(e) => handleCheckboxChange('amenities', amenity, e.target.checked)}
                        className="mr-3 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Financial Details</h2>
            <p className="text-gray-600">Help us understand your financial situation.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Financing Method *
                </label>
                <select
                  value={formData.financingMethod}
                  onChange={(e) => updateFormData('financingMethod', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select method</option>
                  <option value="cash">Cash Purchase</option>
                  <option value="mortgage">Mortgage</option>
                  <option value="mixed">Cash + Mortgage</option>
                  <option value="investor">Investor Funding</option>
                </select>
              </div>

              {(formData.financingMethod === 'mortgage' || formData.financingMethod === 'mixed') && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Down Payment Percentage
                    </label>
                    <select
                      value={formData.downPaymentPercentage}
                      onChange={(e) => updateFormData('downPaymentPercentage', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select percentage</option>
                      <option value="20">20%</option>
                      <option value="30">30%</option>
                      <option value="40">40%</option>
                      <option value="50">50%</option>
                      <option value="60+">60% or more</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pre-approved for Mortgage?
                    </label>
                    <select
                      value={formData.preApproved}
                      onChange={(e) => updateFormData('preApproved', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select status</option>
                      <option value="yes">Yes, pre-approved</option>
                      <option value="in-process">In process</option>
                      <option value="no">Not yet</option>
                      <option value="not-needed">Not needed</option>
                    </select>
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Budget for Property Expenses
                </label>
                <select
                  value={formData.monthlyBudget}
                  onChange={(e) => updateFormData('monthlyBudget', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select budget</option>
                  <option value="0-500">€0 - €500</option>
                  <option value="500-1000">€500 - €1,000</option>
                  <option value="1000-2000">€1,000 - €2,000</option>
                  <option value="2000+">€2,000+</option>
                </select>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Experience Level</h2>
            <p className="text-gray-600">Tell us about your real estate investment experience.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Real Estate Investments
                </label>
                <select
                  value={formData.previousInvestments}
                  onChange={(e) => updateFormData('previousInvestments', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select experience</option>
                  <option value="none">First-time investor</option>
                  <option value="1-2">1-2 properties</option>
                  <option value="3-5">3-5 properties</option>
                  <option value="5+">5+ properties</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience with Italian Property
                </label>
                <select
                  value={formData.italianPropertyExperience}
                  onChange={(e) => updateFormData('italianPropertyExperience', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select experience</option>
                  <option value="none">No experience</option>
                  <option value="researching">Currently researching</option>
                  <option value="visited">Visited properties</option>
                  <option value="owned">Previously owned</option>
                  <option value="current">Current owner</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Italian Language Skills
                </label>
                <select
                  value={formData.languageSkills}
                  onChange={(e) => updateFormData('languageSkills', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select level</option>
                  <option value="none">No Italian</option>
                  <option value="basic">Basic</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="fluent">Fluent</option>
                  <option value="native">Native speaker</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Areas Where You Need Assistance (select all that apply)
                </label>
                <div className="space-y-2">
                  {['Property Search', 'Legal Process', 'Financing', 'Renovation', 'Property Management', 'Tax Planning', 'Residency/Visa', 'Local Connections'].map(area => (
                    <label key={area} className="flex items-center p-2 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.needsAssistance.includes(area)}
                        onChange={(e) => handleCheckboxChange('needsAssistance', area, e.target.checked)}
                        className="mr-3 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{area}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Legal Requirements</h2>
            <p className="text-gray-600">Important legal considerations for your purchase.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Italian Tax ID (Codice Fiscale)
                </label>
                <select
                  value={formData.taxId}
                  onChange={(e) => updateFormData('taxId', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select status</option>
                  <option value="have">I have one</option>
                  <option value="need">I need one</option>
                  <option value="not-sure">Not sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Need Assistance with Tax ID?
                </label>
                <select
                  value={formData.needsTaxId}
                  onChange={(e) => updateFormData('needsTaxId', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select option</option>
                  <option value="yes">Yes, help me obtain one</option>
                  <option value="no">No, I'll handle it</option>
                  <option value="have">Already have one</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Legal Representation
                </label>
                <select
                  value={formData.legalRepresentation}
                  onChange={(e) => updateFormData('legalRepresentation', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select option</option>
                  <option value="have-lawyer">I have an Italian lawyer</option>
                  <option value="need-lawyer">I need a lawyer</option>
                  <option value="notary-only">Notary only is fine</option>
                  <option value="full-service">Want full legal service</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Power of Attorney
                </label>
                <select
                  value={formData.powerOfAttorney}
                  onChange={(e) => updateFormData('powerOfAttorney', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select option</option>
                  <option value="present">I'll be present for closing</option>
                  <option value="need-poa">I'll need power of attorney</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>
            </div>
          </div>
        )

      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Property Management</h2>
            <p className="text-gray-600">How do you plan to manage your property?</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Management Needs
                </label>
                <select
                  value={formData.propertyManagement}
                  onChange={(e) => updateFormData('propertyManagement', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select option</option>
                  <option value="self-manage">Self-manage</option>
                  <option value="local-caretaker">Local caretaker</option>
                  <option value="full-management">Full management company</option>
                  <option value="hybrid">Hybrid approach</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rental Strategy
                </label>
                <select
                  value={formData.rentalStrategy}
                  onChange={(e) => updateFormData('rentalStrategy', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select strategy</option>
                  <option value="no-rental">No rentals (personal use)</option>
                  <option value="occasional">Occasional rentals</option>
                  <option value="seasonal">Seasonal rentals</option>
                  <option value="year-round">Year-round rentals</option>
                  <option value="mixed">Mixed use</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Maintenance Budget
                </label>
                <select
                  value={formData.maintenanceBudget}
                  onChange={(e) => updateFormData('maintenanceBudget', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select budget</option>
                  <option value="minimal">Minimal (&lt; €5,000)</option>
                  <option value="moderate">Moderate (€5,000 - €10,000)</option>
                  <option value="substantial">Substantial (€10,000 - €20,000)</option>
                  <option value="premium">Premium (€20,000+)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Local Support Network
                </label>
                <select
                  value={formData.localContacts}
                  onChange={(e) => updateFormData('localContacts', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select option</option>
                  <option value="have-contacts">Have local contacts</option>
                  <option value="need-contacts">Need local contacts</option>
                  <option value="building-network">Building network</option>
                  <option value="rely-on-management">Will rely on management company</option>
                </select>
              </div>
            </div>
          </div>
        )

      case 8:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Due Diligence</h2>
            <p className="text-gray-600">Important checks and inspections for your purchase.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Inspection
                </label>
                <select
                  value={formData.propertyInspection}
                  onChange={(e) => updateFormData('propertyInspection', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select option</option>
                  <option value="basic">Basic inspection</option>
                  <option value="comprehensive">Comprehensive survey</option>
                  <option value="structural">Structural engineer review</option>
                  <option value="full-team">Full professional team</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Legal Review
                </label>
                <select
                  value={formData.legalReview}
                  onChange={(e) => updateFormData('legalReview', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select level</option>
                  <option value="basic">Basic title check</option>
                  <option value="standard">Standard due diligence</option>
                  <option value="enhanced">Enhanced due diligence</option>
                  <option value="comprehensive">Comprehensive review</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Professional Survey Required?
                </label>
                <select
                  value={formData.surveyRequired}
                  onChange={(e) => updateFormData('surveyRequired', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select option</option>
                  <option value="yes">Yes, full survey</option>
                  <option value="basic">Basic survey only</option>
                  <option value="no">No survey needed</option>
                  <option value="depends">Depends on property</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Insurance Needs (select all that apply)
                </label>
                <div className="space-y-2">
                  {['Building Insurance', 'Contents Insurance', 'Liability Insurance', 'Rental Income Protection', 'Title Insurance', 'Natural Disaster Coverage'].map(insurance => (
                    <label key={insurance} className="flex items-center p-2 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.insuranceNeeds.includes(insurance)}
                        onChange={(e) => handleCheckboxChange('insuranceNeeds', insurance, e.target.checked)}
                        className="mr-3 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{insurance}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 9:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Grant Eligibility</h2>
            <p className="text-gray-600">Explore potential grant opportunities for your investment.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Plan for Property
                </label>
                <select
                  value={formData.businessPlan}
                  onChange={(e) => updateFormData('businessPlan', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select option</option>
                  <option value="tourism">Tourism/Hospitality</option>
                  <option value="agriculture">Agriculture/Farming</option>
                  <option value="residential">Residential only</option>
                  <option value="mixed">Mixed use</option>
                  <option value="undecided">Undecided</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employment Creation
                </label>
                <select
                  value={formData.employmentCreation}
                  onChange={(e) => updateFormData('employmentCreation', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select option</option>
                  <option value="none">No employees planned</option>
                  <option value="1-2">1-2 employees</option>
                  <option value="3-5">3-5 employees</option>
                  <option value="6+">6+ employees</option>
                  <option value="seasonal">Seasonal workers</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sustainability Features (select all that apply)
                </label>
                <div className="space-y-2">
                  {['Solar Panels', 'Rainwater Harvesting', 'Geothermal Heating', 'Energy Efficient Windows', 'Organic Farming', 'EV Charging Station', 'Waste Recycling System'].map(feature => (
                    <label key={feature} className="flex items-center p-2 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.sustainabilityFeatures.includes(feature)}
                        onChange={(e) => handleCheckboxChange('sustainabilityFeatures', feature, e.target.checked)}
                        className="mr-3 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest in Grant Programs
                </label>
                <select
                  value={formData.grantInterest}
                  onChange={(e) => updateFormData('grantInterest', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select interest level</option>
                  <option value="very-interested">Very interested - tell me more</option>
                  <option value="interested">Interested if eligible</option>
                  <option value="maybe">Maybe, need more info</option>
                  <option value="not-interested">Not interested</option>
                </select>
              </div>
            </div>
          </div>
        )

      case 10:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Additional Services</h2>
            <p className="text-gray-600">Select any additional services you might need.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Services (select all that apply)
                </label>
                <div className="space-y-2">
                  {[
                    'Property Search Assistance',
                    'Virtual Property Tours',
                    'Renovation Planning',
                    'Interior Design Services',
                    'Visa/Residency Assistance',
                    'Bank Account Setup',
                    'Utility Connections',
                    'Property Marketing (if renting)',
                    'Tax Planning Services',
                    'Estate Planning'
                  ].map(service => (
                    <label key={service} className="flex items-center p-2 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.additionalServices.includes(service)}
                        onChange={(e) => handleCheckboxChange('additionalServices', service, e.target.checked)}
                        className="mr-3 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Urgency Level
                </label>
                <select
                  value={formData.urgency}
                  onChange={(e) => updateFormData('urgency', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select urgency</option>
                  <option value="asap">ASAP - Ready to move fast</option>
                  <option value="flexible">Flexible timeline</option>
                  <option value="researching">Just researching</option>
                  <option value="specific-date">Specific date in mind</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests or Questions
                </label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => updateFormData('specialRequests', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Tell us anything else that would help us serve you better..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about us?
                </label>
                <select
                  value={formData.howHeard}
                  onChange={(e) => updateFormData('howHeard', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select source</option>
                  <option value="google">Google Search</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Friend/Family Referral</option>
                  <option value="agent">Real Estate Agent</option>
                  <option value="blog">Blog/Article</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center py-12">
            <p className="text-gray-500">Step content not yet implemented</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-amber-50 to-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-20 bg-white/70 backdrop-blur-md border-b border-gray-200/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-2xl">🇮🇹</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                  investinpuglia.eu
                </h1>
                <p className="text-sm text-gray-600">Your Profile</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm hidden md:block">
              Your Gateway to Italian Property Investment
            </p>
          </div>
        </div>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="pt-20">

      {/* Progress Bar */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-20 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-600">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            <button
              onClick={nextStep}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
            >
              {currentStep === totalSteps ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Generate Email & PDF
                </>
              ) : (
                <>
                  Next
                  <ChevronRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Step Overview */}
        <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
          <h3 className="font-semibold text-gray-900 mb-4">Profile Sections Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              'Personal Info',
              'Goals',
              'Preferences',
              'Financial',
              'Experience',
              'Legal',
              'Management',
              'Due Diligence',
              'Grants',
              'Services'
            ].map((section, index) => (
              <div
                key={index}
                className={`text-center p-3 rounded-lg text-sm font-medium transition-all ${
                  index + 1 === currentStep
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-md'
                    : index + 1 < currentStep
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {section}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

      {/* Email Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-blue-900">Email & PDF Preview</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              {!emailSent ? (
                <>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    {generateEmailContent()}
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Select Recipients</h4>
                    
                    <div className="space-y-4 mb-6">
                      <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                        <input
                          type="radio"
                          name="recipientType"
                          value="agency"
                          checked={recipientType === 'agency'}
                          onChange={(e) => setRecipientType(e.target.value as RecipientType)}
                          className="mr-3"
                        />
                        <div>
                          <p className="font-medium">Partner Agencies</p>
                          <p className="text-sm text-gray-600">Send to our network of real estate agencies</p>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                        <input
                          type="radio"
                          name="recipientType"
                          value="internal"
                          checked={recipientType === 'internal'}
                          onChange={(e) => setRecipientType(e.target.value as RecipientType)}
                          className="mr-3"
                        />
                        <div>
                          <p className="font-medium">Internal Team</p>
                          <p className="text-sm text-gray-600">Send to Invest in Puglia sales team</p>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                        <input
                          type="radio"
                          name="recipientType"
                          value="custom"
                          checked={recipientType === 'custom'}
                          onChange={(e) => setRecipientType(e.target.value as RecipientType)}
                          className="mr-3"
                        />
                        <div className="flex-1">
                          <p className="font-medium">Custom Recipients</p>
                          <p className="text-sm text-gray-600 mb-2">Enter email addresses (comma-separated)</p>
                          {recipientType === 'custom' && (
                            <input
                              type="text"
                              value={customRecipients}
                              onChange={(e) => setCustomRecipients(e.target.value)}
                              placeholder="agent1@email.com, agent2@email.com"
                              className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              onClick={(e) => e.stopPropagation()}
                            />
                          )}
                        </div>
                      </label>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                      <p className="text-sm text-blue-800">
                        <strong>Note:</strong> A copy of this profile will be automatically sent to {formData.email || 'the buyer\'s email'} for their records.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={handleSendEmail}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
                    >
                      <Send className="w-5 h-5" />
                      Send Email
                    </button>
                    <button
                      onClick={handleDownloadPDF}
                      className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all"
                    >
                      <Download className="w-5 h-5" />
                      Download PDF
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Profile Sent Successfully!</h3>
                  <p className="text-gray-600 mb-4">
                    The buyer profile has been sent to {recipientType === 'custom' ? 'your selected recipients' : recipientOptions[recipientType].label.toLowerCase()}.
                  </p>
                  <p className="text-sm text-gray-500">
                    A copy has also been sent to {formData.email} for the buyer's records.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BuyerProfilePage
