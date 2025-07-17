import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, Globe, Euro, Home, Calendar, Briefcase, Heart, Shield, Phone, Mail, Clock, MapPin, Building, Users, FileText } from 'lucide-react';

const ComprehensiveBuyerQuestionnaire = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    countryOfResidence: '',
    ageRange: '',
    occupation: '',
    languages: [],
    italianLanguageLevel: '',
    budgetRange: '',
    financingType: '',
    proofOfFunds: '',
    preApprovedMortgage: '',
    investmentReadiness: '',
    propertyTypes: [],
    preferredLocations: [],
    alternativeLocations: [],
    propertyCondition: '',
    minimumBedrooms: '',
    minimumBathrooms: '',
    minimumLandSqm: '',
    mustHaveFeatures: [],
    niceToHaveFeatures: [],
    dealBreakers: [],
    architecturalPreferences: [],
    viewPreferences: [],
    primaryPurpose: '',
    rentalIncomeRequired: '',
    expectedPersonalUseDays: '',
    guestCapacityNeeded: '',
    maxDistanceFromSea: '',
    maxDistanceFromAirport: '',
    maxDistanceFromTown: '',
    neighborhoodType: '',
    localAmenitiesRequired: [],
    purchaseTimeline: '',
    viewingTripPlanned: '',
    viewingTripDate: '',
    previousItalyExperience: '',
    remotePurchaseWilling: '',
    interestedInGrants: '',
    businessPlanReady: '',
    italianTaxNumber: '',
    italianBankAccount: '',
    preferredNotary: '',
    willingToRenovate: '',
    renovationBudget: '',
    renovationTimeframe: '',
    preferredContractors: '',
    sustainabilityImportant: '',
    preferredContactMethod: '',
    bestTimeToContact: '',
    timezone: '',
    communicationLanguage: '',
    propertyAlertsFrequency: '',
    currentPropertyOwned: '',
    sellingProperty: '',
    familySize: '',
    pets: '',
    specialRequirements: '',
    howHeardAboutUs: '',
    additionalNotes: ''
  });

  const sections = [
    { title: 'Personal Information', icon: Users, fields: 8 },
    { title: 'Financial Profile', icon: Euro, fields: 5 },
    { title: 'Property Requirements', icon: Home, fields: 7 },
    { title: 'Features & Amenities', icon: Heart, fields: 5 },
    { title: 'Investment Purpose', icon: Briefcase, fields: 4 },
    { title: 'Location Preferences', icon: MapPin, fields: 5 },
    { title: 'Timeline & Process', icon: Calendar, fields: 5 },
    { title: 'Legal & Administrative', icon: Shield, fields: 5 },
    { title: 'Renovation Plans', icon: Building, fields: 5 },
    { title: 'Communication', icon: Phone, fields: 5 }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayToggle = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const calculateProgress = () => {
    const totalFields = sections.reduce((acc, section) => acc + section.fields, 0);
    const filledFields = Object.values(formData).filter(value => 
      value !== '' && (Array.isArray(value) ? value.length > 0 : true)
    ).length;
    return Math.round((filledFields / totalFields) * 100);
  };

  const isCurrentSectionComplete = () => {
    switch (currentSection) {
      case 0:
        return formData.fullName && formData.email && formData.phone && 
               formData.nationality && formData.countryOfResidence && formData.ageRange;
      case 1:
        return formData.budgetRange && formData.financingType && 
               formData.proofOfFunds && formData.investmentReadiness;
      case 2:
        return formData.propertyTypes.length > 0 && formData.preferredLocations.length > 0 && 
               formData.propertyCondition;
      case 3:
        return formData.mustHaveFeatures.length > 0;
      case 4:
        return formData.primaryPurpose;
      case 5:
        return true;
      case 6:
        return formData.purchaseTimeline;
      case 7:
        return formData.interestedInGrants;
      case 8:
        return formData.willingToRenovate;
      case 9:
        return formData.preferredContactMethod;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you! Your comprehensive buyer profile has been submitted. We will create a detailed report for our partner agents.');
  };

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => handleInputChange('fullName', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
          placeholder="John Smith"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="+44 7123 456789"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Nationality *
          </label>
          <select
            value={formData.nationality}
            onChange={(e) => handleInputChange('nationality', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
          >
            <option value="">Select nationality</option>
            <option value="UK">United Kingdom</option>
            <option value="USA">United States</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Belgium">Belgium</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Country of Residence *
          </label>
          <input
            type="text"
            value={formData.countryOfResidence}
            onChange={(e) => handleInputChange('countryOfResidence', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="United Kingdom"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Age Range *
        </label>
        <select
          value={formData.ageRange}
          onChange={(e) => handleInputChange('ageRange', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select age range</option>
          <option value="18-30">18-30 years</option>
          <option value="31-40">31-40 years</option>
          <option value="41-50">41-50 years</option>
          <option value="51-60">51-60 years</option>
          <option value="60+">60+ years</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Occupation
        </label>
        <input
          type="text"
          value={formData.occupation}
          onChange={(e) => handleInputChange('occupation', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
          placeholder="e.g., Business Owner, Retired, IT Professional"
        />
      </div>
    </div>
  );

  const renderFinancialProfile = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Investment Budget Range *
        </label>
        <select
          value={formData.budgetRange}
          onChange={(e) => handleInputChange('budgetRange', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select budget range</option>
          <option value="under-200k">Under €200,000</option>
          <option value="200-400k">€200,000 - €400,000</option>
          <option value="400-600k">€400,000 - €600,000</option>
          <option value="600-800k">€600,000 - €800,000</option>
          <option value="800k-1m">€800,000 - €1,000,000</option>
          <option value="1m-1.5m">€1,000,000 - €1,500,000</option>
          <option value="over-1.5m">Over €1,500,000</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Financing Type *
        </label>
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: 'cash', label: 'Cash Purchase', icon: '💵' },
            { value: 'mortgage', label: 'Mortgage', icon: '🏦' },
            { value: 'mixed', label: 'Mixed', icon: '💰' }
          ].map(option => (
            <button
              key={option.value}
              onClick={() => handleInputChange('financingType', option.value)}
              className={`p-4 rounded-xl border-2 transition-all ${
                formData.financingType === option.value
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <div className="text-2xl mb-2">{option.icon}</div>
              <div className="text-sm font-medium">{option.label}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Proof of Funds Available? *
        </label>
        <div className="grid grid-cols-2 gap-4">
          {['Yes', 'No'].map(option => (
            <button
              key={option}
              onClick={() => handleInputChange('proofOfFunds', option)}
              className={`p-4 rounded-xl border-2 transition-all ${
                formData.proofOfFunds === option
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Investment Readiness *
        </label>
        <select
          value={formData.investmentReadiness}
          onChange={(e) => handleInputChange('investmentReadiness', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select readiness level</option>
          <option value="immediate">Ready to purchase immediately</option>
          <option value="1-3months">Ready within 1-3 months</option>
          <option value="3-6months">Ready within 3-6 months</option>
          <option value="6-12months">Ready within 6-12 months</option>
          <option value="exploring">Just exploring options</option>
        </select>
      </div>
    </div>
  );

  const renderPropertyRequirements = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Property Types of Interest * (Select all that apply)
        </label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { value: 'trullo', label: 'Traditional Trullo', icon: '🏛️' },
            { value: 'masseria', label: 'Historic Masseria', icon: '🏰' },
            { value: 'villa', label: 'Modern Villa', icon: '🏖️' },
            { value: 'townhouse', label: 'Town House', icon: '🏘️' },
            { value: 'palazzo', label: 'Historic Palazzo', icon: '🏢' },
            { value: 'apartment', label: 'Apartment', icon: '🏙️' }
          ].map(type => (
            <button
              key={type.value}
              onClick={() => handleArrayToggle('propertyTypes', type.value)}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                formData.propertyTypes.includes(type.value)
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{type.icon}</span>
                <span className="font-medium">{type.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Preferred Locations * (Select up to 3)
        </label>
        <div className="grid grid-cols-2 gap-3">
          {[
            'Lecce & Surroundings',
            'Valle d\'Itria',
            'Salento Coast',
            'Gallipoli',
            'Otranto',
            'Ostuni'
          ].map(location => (
            <button
              key={location}
              onClick={() => {
                if (formData.preferredLocations.includes(location)) {
                  handleArrayToggle('preferredLocations', location);
                } else if (formData.preferredLocations.length < 3) {
                  handleArrayToggle('preferredLocations', location);
                }
              }}
              className={`p-3 rounded-xl border-2 transition-all text-sm ${
                formData.preferredLocations.includes(location)
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              {location}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Property Condition Preference *
        </label>
        <div className="space-y-3">
          {[
            { value: 'move-in-ready', label: 'Move-in Ready', desc: 'No work needed' },
            { value: 'minor-renovation', label: 'Minor Renovation', desc: 'Cosmetic updates only' },
            { value: 'major-renovation', label: 'Major Renovation', desc: 'Structural work needed' }
          ].map(option => (
            <button
              key={option.value}
              onClick={() => handleInputChange('propertyCondition', option.value)}
              className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                formData.propertyCondition === option.value
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <div className="font-medium">{option.label}</div>
              <div className="text-sm text-gray-600">{option.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 0:
        return renderPersonalInfo();
      case 1:
        return renderFinancialProfile();
      case 2:
        return renderPropertyRequirements();
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Must-Have Features * (Select all that apply)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Swimming Pool',
                  'Sea View',
                  'Garden',
                  'Parking',
                  'Guest House',
                  'Historic Features',
                  'Modern Kitchen',
                  'Air Conditioning'
                ].map(feature => (
                  <label key={feature} className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-xl hover:border-purple-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.mustHaveFeatures.includes(feature)}
                      onChange={() => handleArrayToggle('mustHaveFeatures', feature)}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <span className="text-sm font-medium">{feature}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Primary Investment Purpose *
              </label>
              <div className="space-y-3">
                {[
                  { value: 'holiday-rental', label: 'Holiday Rental Business', icon: '🏖️' },
                  { value: 'personal-holiday', label: 'Personal Holiday Home', icon: '🏡' },
                  { value: 'permanent-residence', label: 'Permanent Residence', icon: '🏠' },
                  { value: 'boutique-hotel', label: 'Boutique Hotel/B&B', icon: '🏨' }
                ].map(purpose => (
                  <button
                    key={purpose.value}
                    onClick={() => handleInputChange('primaryPurpose', purpose.value)}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                      formData.primaryPurpose === purpose.value
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{purpose.icon}</span>
                      <div className="font-medium">{purpose.label}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Maximum distance from the sea
              </label>
              <select
                value={formData.maxDistanceFromSea}
                onChange={(e) => handleInputChange('maxDistanceFromSea', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
              >
                <option value="">No preference</option>
                <option value="walking">Walking distance</option>
                <option value="5km">Within 5 km</option>
                <option value="10km">Within 10 km</option>
                <option value="20km">Within 20 km</option>
              </select>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Purchase Timeline *
              </label>
              <div className="space-y-3">
                {[
                  { value: 'immediate', label: 'Immediate', desc: 'Ready to buy now' },
                  { value: '1-3months', label: 'Within 1-3 months', desc: 'Actively searching' },
                  { value: '3-6months', label: 'Within 3-6 months', desc: 'Planning phase' },
                  { value: '6-12months', label: 'Within 6-12 months', desc: 'Early research' }
                ].map(timeline => (
                  <button
                    key={timeline.value}
                    onClick={() => handleInputChange('purchaseTimeline', timeline.value)}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                      formData.purchaseTimeline === timeline.value
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="font-medium">{timeline.label}</div>
                    <div className="text-sm text-gray-600">{timeline.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Are you interested in EU grants for property investment? *
              </label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 'yes', label: 'Yes, Very Interested' },
                  { value: 'no', label: 'No, Not Interested' }
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => handleInputChange('interestedInGrants', option.value)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      formData.interestedInGrants === option.value
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Are you willing to undertake renovation work? *
              </label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' }
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => handleInputChange('willingToRenovate', option.value)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      formData.willingToRenovate === option.value
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case 9:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Preferred contact method *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'email', label: 'Email', icon: '📧' },
                  { value: 'whatsapp', label: 'WhatsApp', icon: '💬' },
                  { value: 'phone', label: 'Phone Call', icon: '📞' },
                  { value: 'video-call', label: 'Video Call', icon: '📹' }
                ].map(method => (
                  <button
                    key={method.value}
                    onClick={() => handleInputChange('preferredContactMethod', method.value)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      formData.preferredContactMethod === method.value
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="text-2xl mb-1">{method.icon}</div>
                    <div className="text-sm font-medium">{method.label}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Foreign Buyer Requirements Profile</h1>
          <p className="text-gray-600">Help us understand your property needs in Puglia</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{sections[currentSection].title}</h2>
              <span className="text-sm text-gray-500">
                Step {currentSection + 1} of {sections.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-orange-500 h-full rounded-full transition-all"
                style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            {renderCurrentSection()}
          </div>

          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentSection === 0}
              className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                currentSection === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            {currentSection < sections.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={!isCurrentSectionComplete()}
                className={`px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                  isCurrentSectionComplete()
                    ? 'bg-gradient-to-r from-purple-600 to-orange-600 text-white hover:shadow-lg'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!isCurrentSectionComplete()}
                className={`px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                  isCurrentSectionComplete()
                    ? 'bg-gradient-to-r from-purple-600 to-orange-600 text-white hover:shadow-lg'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Submit Profile
                <Check className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Your information will be used to create detailed buyer reports for qualified real estate agents.</p>
          <p className="mt-2">Progress: {calculateProgress()}% complete</p>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveBuyerQuestionnaire;
