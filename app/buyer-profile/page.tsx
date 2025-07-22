// app/buyer-profile/page.tsx
'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, Globe, Euro, Home, Calendar, Briefcase, Heart, Shield, Phone, Mail, Clock, MapPin, Building, Users, FileText } from 'lucide-react';

export default function BuyerProfilePage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayToggle = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev as any)[field].includes(value)
        ? (prev as any)[field].filter((item: string) => item !== value)
        : [...(prev as any)[field], value]
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
        return true; // Optional section
      case 4:
        return formData.primaryPurpose;
      case 5:
        return true; // Optional section
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

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Here you would normally submit to your backend
      console.log('Submitting profile:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success!
      alert('Thank you! Your comprehensive buyer profile has been submitted successfully. We will be in touch soon with matching properties.');
      window.location.href = '/';
      
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('There was an error saving your profile. Please try again or contact us for assistance.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Section 1: Personal Information
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

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Languages Spoken
        </label>
        <div className="grid grid-cols-3 gap-3">
          {['English', 'Italian', 'German', 'French', 'Spanish', 'Other'].map(lang => (
            <label key={lang} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.languages.includes(lang)}
                onChange={() => handleArrayToggle('languages', lang)}
                className="w-4 h-4 text-purple-600"
              />
              <span className="text-sm">{lang}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Italian Language Level
        </label>
        <select
          value={formData.italianLanguageLevel}
          onChange={(e) => handleInputChange('italianLanguageLevel', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select level</option>
          <option value="none">No Italian</option>
          <option value="basic">Basic (A1-A2)</option>
          <option value="intermediate">Intermediate (B1-B2)</option>
          <option value="advanced">Advanced (C1-C2)</option>
          <option value="native">Native Speaker</option>
        </select>
      </div>
    </div>
  );

  // Section 2: Financial Profile
  const renderFinancialProfile = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Total Budget Range (Including Renovations) *
        </label>
        <select
          value={formData.budgetRange}
          onChange={(e) => handleInputChange('budgetRange', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select budget range</option>
          <option value="under-200k">Under €200,000</option>
          <option value="200k-400k">€200,000 - €400,000</option>
          <option value="400k-600k">€400,000 - €600,000</option>
          <option value="600k-800k">€600,000 - €800,000</option>
          <option value="800k-1m">€800,000 - €1,000,000</option>
          <option value="1m-1.5m">€1,000,000 - €1,500,000</option>
          <option value="1.5m-2m">€1,500,000 - €2,000,000</option>
          <option value="over-2m">Over €2,000,000</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Financing Type *
        </label>
        <select
          value={formData.financingType}
          onChange={(e) => handleInputChange('financingType', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select financing type</option>
          <option value="cash">Cash Purchase</option>
          <option value="mortgage">Mortgage Needed</option>
          <option value="partial">Partial Financing</option>
          <option value="exploring">Exploring Options</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Proof of Funds Available? *
        </label>
        <select
          value={formData.proofOfFunds}
          onChange={(e) => handleInputChange('proofOfFunds', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select option</option>
          <option value="Yes">Yes, readily available</option>
          <option value="No">Not yet, but can arrange</option>
          <option value="Partial">Partial funds available</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Pre-approved for Mortgage?
        </label>
        <select
          value={formData.preApprovedMortgage}
          onChange={(e) => handleInputChange('preApprovedMortgage', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="InProgress">In Progress</option>
          <option value="NotApplicable">Not Applicable (Cash Buyer)</option>
        </select>
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
          <option value="ready-now">Ready to buy immediately</option>
          <option value="actively-searching">Actively searching</option>
          <option value="planning-stage">In planning stage</option>
          <option value="exploring-options">Just exploring options</option>
        </select>
      </div>
    </div>
  );

  // Section 3: Property Requirements
  const renderPropertyRequirements = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Property Types Interested In *
        </label>
        <div className="grid grid-cols-2 gap-3">
          {['Trullo', 'Masseria', 'Villa', 'Palazzo', 'Apartment', 'Land', 'Commercial', 'New Build'].map(type => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.propertyTypes.includes(type)}
                onChange={() => handleArrayToggle('propertyTypes', type)}
                className="w-4 h-4 text-purple-600"
              />
              <span className="text-sm">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Preferred Locations in Puglia *
        </label>
        <div className="grid grid-cols-2 gap-3">
          {['Valle d\'Itria', 'Salento Coast', 'Gargano', 'Bari Province', 'Brindisi Province', 'Lecce Province', 'Taranto Province', 'Foggia Province'].map(location => (
            <label key={location} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.preferredLocations.includes(location)}
                onChange={() => handleArrayToggle('preferredLocations', location)}
                className="w-4 h-4 text-purple-600"
              />
              <span className="text-sm">{location}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Property Condition Preference *
        </label>
        <select
          value={formData.propertyCondition}
          onChange={(e) => handleInputChange('propertyCondition', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select condition preference</option>
          <option value="move-in-ready">Move-in Ready</option>
          <option value="minor-work">Minor Work Needed</option>
          <option value="major-renovation">Major Renovation Project</option>
          <option value="complete-restoration">Complete Restoration</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Minimum Bedrooms
          </label>
          <select
            value={formData.minimumBedrooms}
            onChange={(e) => handleInputChange('minimumBedrooms', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
            <option value="6">6+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Minimum Bathrooms
          </label>
          <select
            value={formData.minimumBathrooms}
            onChange={(e) => handleInputChange('minimumBathrooms', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Min. Land (m²)
          </label>
          <input
            type="number"
            value={formData.minimumLandSqm}
            onChange={(e) => handleInputChange('minimumLandSqm', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="e.g., 5000"
          />
        </div>
      </div>
    </div>
  );

  // Section 4: Features & Amenities
  const renderFeaturesAmenities = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Must-Have Features
        </label>
        <div className="grid grid-cols-2 gap-3">
          {['Swimming Pool', 'Garden', 'Garage', 'Sea View', 'Countryside View', 'Privacy', 'Guest House', 'Original Features'].map(feature => (
            <label key={feature} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.mustHaveFeatures.includes(feature)}
                onChange={() => handleArrayToggle('mustHaveFeatures', feature)}
                className="w-4 h-4 text-purple-600"
              />
              <span className="text-sm">{feature}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Nice-to-Have Features
        </label>
        <div className="grid grid-cols-2 gap-3">
          {['Tennis Court', 'Wine Cellar', 'Olive Grove', 'Outbuildings', 'Beach Access', 'Fireplace', 'Air Conditioning', 'Central Heating'].map(feature => (
            <label key={feature} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.niceToHaveFeatures.includes(feature)}
                onChange={() => handleArrayToggle('niceToHaveFeatures', feature)}
                className="w-4 h-4 text-purple-600"
              />
              <span className="text-sm">{feature}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Deal Breakers (Will NOT Accept)
        </label>
        <div className="grid grid-cols-2 gap-3">
          {['Main Road Location', 'No Privacy', 'Flight Path', 'Industrial Area', 'No Parking', 'Shared Access', 'Conservation Restrictions', 'Structural Issues'].map(feature => (
            <label key={feature} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.dealBreakers.includes(feature)}
                onChange={() => handleArrayToggle('dealBreakers', feature)}
                className="w-4 h-4 text-purple-600"
              />
              <span className="text-sm">{feature}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Architectural Style Preferences
        </label>
        <div className="grid grid-cols-2 gap-3">
          {['Traditional Pugliese', 'Modern', 'Contemporary', 'Rustic', 'Minimalist', 'Classic Italian', 'Stone Construction', 'Restored Historic'].map(style => (
            <label key={style} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.architecturalPreferences.includes(style)}
                onChange={() => handleArrayToggle('architecturalPreferences', style)}
                className="w-4 h-4 text-purple-600"
              />
              <span className="text-sm">{style}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          View Requirements
        </label>
        <div className="grid grid-cols-2 gap-3">
          {['Sea View', 'Countryside View', 'Mountain View', 'Valley View', 'Town View', 'Garden View', 'Pool View', 'No Specific View Required'].map(view => (
            <label key={view} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.viewPreferences.includes(view)}
                onChange={() => handleArrayToggle('viewPreferences', view)}
                className="w-4 h-4 text-purple-600"
              />
              <span className="text-sm">{view}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  // Section 5: Investment Purpose
  const renderInvestmentPurpose = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Primary Purpose of Purchase *
        </label>
        <select
          value={formData.primaryPurpose}
          onChange={(e) => handleInputChange('primaryPurpose', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select primary purpose</option>
          <option value="personal-use">Personal/Family Use Only</option>
          <option value="rental-investment">Rental Investment</option>
          <option value="mixed-use">Mixed Personal & Rental</option>
          <option value="business">Business (B&B, Hotel, Restaurant)</option>
          <option value="retirement">Retirement Home</option>
          <option value="relocation">Permanent Relocation</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Rental Income Required?
        </label>
        <select
          value={formData.rentalIncomeRequired}
          onChange={(e) => handleInputChange('rentalIncomeRequired', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select option</option>
          <option value="yes">Yes, essential</option>
          <option value="nice-to-have">Nice to have</option>
          <option value="no">No, not important</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Expected Personal Use (Days/Year)
        </label>
        <select
          value={formData.expectedPersonalUseDays}
          onChange={(e) => handleInputChange('expectedPersonalUseDays', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select usage</option>
          <option value="0-30">0-30 days</option>
          <option value="30-60">30-60 days</option>
          <option value="60-90">60-90 days</option>
          <option value="90-180">90-180 days</option>
          <option value="180+">180+ days</option>
          <option value="permanent">Year-round</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Guest Capacity Needed
        </label>
        <select
          value={formData.guestCapacityNeeded}
          onChange={(e) => handleInputChange('guestCapacityNeeded', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select capacity</option>
          <option value="2-4">2-4 guests</option>
          <option value="4-6">4-6 guests</option>
          <option value="6-8">6-8 guests</option>
          <option value="8-10">8-10 guests</option>
          <option value="10+">10+ guests</option>
        </select>
      </div>
    </div>
  );

  // Section 6: Location Preferences
  const renderLocationPreferences = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Maximum Distance from Sea
        </label>
        <select
          value={formData.maxDistanceFromSea}
          onChange={(e) => handleInputChange('maxDistanceFromSea', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">No preference</option>
          <option value="walking">Walking distance (< 1km)</option>
          <option value="5km">Within 5km</option>
          <option value="10km">Within 10km</option>
          <option value="20km">Within 20km</option>
          <option value="30km">Within 30km</option>
          <option value="inland">Inland preferred</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Maximum Distance from Airport
        </label>
        <select
          value={formData.maxDistanceFromAirport}
          onChange={(e) => handleInputChange('maxDistanceFromAirport', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">No preference</option>
          <option value="30min">Within 30 minutes</option>
          <option value="45min">Within 45 minutes</option>
          <option value="1hour">Within 1 hour</option>
          <option value="90min">Within 90 minutes</option>
          <option value="2hours">Within 2 hours</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Maximum Distance from Town/Services
        </label>
        <select
          value={formData.maxDistanceFromTown}
          onChange={(e) => handleInputChange('maxDistanceFromTown', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">No preference</option>
          <option value="walking">Walking distance</option>
          <option value="5min">5 minute drive</option>
          <option value="10min">10 minute drive</option>
          <option value="15min">15 minute drive</option>
          <option value="20min">20 minute drive</option>
          <option value="rural">Rural/isolated preferred</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Neighborhood Type Preference
        </label>
        <select
          value={formData.neighborhoodType}
          onChange={(e) => handleInputChange('neighborhoodType', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select preference</option>
          <option value="town-center">Town Center</option>
          <option value="residential">Residential Area</option>
          <option value="countryside">Countryside</option>
          <option value="coastal">Coastal Area</option>
          <option value="rural">Rural/Agricultural</option>
          <option value="isolated">Completely Isolated</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Essential Local Amenities
        </label>
        <div className="grid grid-cols-2 gap-3">
          {['Restaurants', 'Supermarket', 'Medical Services', 'Schools', 'Public Transport', 'Beach Clubs', 'Marina', 'Golf Course'].map(amenity => (
            <label key={amenity} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.localAmenitiesRequired.includes(amenity)}
                onChange={() => handleArrayToggle('localAmenitiesRequired', amenity)}
                className="w-4 h-4 text-purple-600"
              />
              <span className="text-sm">{amenity}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  // Section 7: Timeline & Process
  const renderTimelineProcess = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Purchase Timeline *
        </label>
        <select
          value={formData.purchaseTimeline}
          onChange={(e) => handleInputChange('purchaseTimeline', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select timeline</option>
          <option value="immediate">Immediate (Within 1 month)</option>
          <option value="1-3months">1-3 months</option>
          <option value="3-6months">3-6 months</option>
          <option value="6-12months">6-12 months</option>
          <option value="12months+">12+ months</option>
          <option value="exploring">Just exploring</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Viewing Trip Planned?
        </label>
        <select
          value={formData.viewingTripPlanned}
          onChange={(e) => handleInputChange('viewingTripPlanned', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select option</option>
          <option value="Yes">Yes, dates confirmed</option>
          <option value="Planning">Currently planning</option>
          <option value="No">Not yet</option>
          <option value="Remote">Prefer remote purchase</option>
        </select>
      </div>

      {formData.viewingTripPlanned === 'Yes' && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Viewing Trip Date
          </label>
          <input
            type="date"
            value={formData.viewingTripDate}
            onChange={(e) => handleInputChange('viewingTripDate', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Previous Experience with Italian Property?
        </label>
        <select
          value={formData.previousItalyExperience}
          onChange={(e) => handleInputChange('previousItalyExperience', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select experience</option>
          <option value="none">No previous experience</option>
          <option value="visited">Visited as tourist</option>
          <option value="rented">Rented property before</option>
          <option value="owned-property">Previously owned property</option>
          <option value="current-owner">Current property owner</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Willing to Purchase Remotely?
        </label>
        <select
          value={formData.remotePurchaseWilling}
          onChange={(e) => handleInputChange('remotePurchaseWilling', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select option</option>
          <option value="yes">Yes, with proper documentation</option>
          <option value="maybe">Maybe, depends on property</option>
          <option value="no">No, must view in person</option>
        </select>
      </div>
    </div>
  );

  // Section 8: Legal & Administrative
  const renderLegalAdministrative = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Interested in EU Grants? *
        </label>
        <select
          value={formData.interestedInGrants}
          onChange={(e) => handleInputChange('interestedInGrants', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select interest level</option>
          <option value="yes">Yes, very interested</option>
          <option value="maybe">Possibly, need more info</option>
          <option value="no">No, not interested</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Business Plan Ready? (For Grants)
        </label>
        <select
          value={formData.businessPlanReady}
          onChange={(e) => handleInputChange('businessPlanReady', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select status</option>
          <option value="Yes">Yes, completed</option>
          <option value="InProgress">In progress</option>
          <option value="No">Not yet</option>
          <option value="NeedHelp">Need help creating one</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Italian Tax Number (Codice Fiscale)?
        </label>
        <select
          value={formData.italianTaxNumber}
          onChange={(e) => handleInputChange('italianTaxNumber', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select status</option>
          <option value="Yes">Yes, I have one</option>
          <option value="No">No, need to obtain</option>
          <option value="InProgress">Application in progress</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Italian Bank Account?
        </label>
        <select
          value={formData.italianBankAccount}
          onChange={(e) => handleInputChange('italianBankAccount', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select status</option>
          <option value="Yes">Yes, I have one</option>
          <option value="No">No, need to open</option>
          <option value="Planning">Planning to open</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Preferred Notary?
        </label>
        <select
          value={formData.preferredNotary}
          onChange={(e) => handleInputChange('preferredNotary', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select preference</option>
          <option value="have-one">I have a notary</option>
          <option value="need-recommendation">Need recommendation</option>
          <option value="no-preference">No preference</option>
        </select>
      </div>
    </div>
  );

  // Section 9: Renovation Plans
  const renderRenovationPlans = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Willing to Renovate? *
        </label>
        <select
          value={formData.willingToRenovate}
          onChange={(e) => handleInputChange('willingToRenovate', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select willingness</option>
          <option value="yes">Yes, happy to renovate</option>
          <option value="minor">Minor work only</option>
          <option value="no">No, prefer move-in ready</option>
        </select>
      </div>

      {formData.willingToRenovate !== 'no' && (
        <>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Renovation Budget (Additional to Purchase)
            </label>
            <select
              value={formData.renovationBudget}
              onChange={(e) => handleInputChange('renovationBudget', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
            >
              <option value="">Select budget</option>
              <option value="under-50k">Under €50,000</option>
              <option value="50k-100k">€50,000 - €100,000</option>
              <option value="100k-200k">€100,000 - €200,000</option>
              <option value="200k-300k">€200,000 - €300,000</option>
              <option value="300k-500k">€300,000 - €500,000</option>
              <option value="over-500k">Over €500,000</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Renovation Timeframe
            </label>
            <select
              value={formData.renovationTimeframe}
              onChange={(e) => handleInputChange('renovationTimeframe', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
            >
              <option value="">Select timeframe</option>
              <option value="asap">As soon as possible</option>
              <option value="6months">Within 6 months</option>
              <option value="1year">Within 1 year</option>
              <option value="2years">Within 2 years</option>
              <option value="no-rush">No rush</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contractor Preferences
            </label>
            <select
              value={formData.preferredContractors}
              onChange={(e) => handleInputChange('preferredContractors', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
            >
              <option value="">Select preference</option>
              <option value="need-recommendations">Need recommendations</option>
              <option value="have-contacts">Have contacts already</option>
              <option value="will-find">Will find my own</option>
            </select>
          </div>
        </>
      )}

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Sustainability Important?
        </label>
        <select
          value={formData.sustainabilityImportant}
          onChange={(e) => handleInputChange('sustainabilityImportant', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select importance</option>
          <option value="very">Very important</option>
          <option value="somewhat">Somewhat important</option>
          <option value="nice-to-have">Nice to have</option>
          <option value="not-important">Not important</option>
        </select>
      </div>
    </div>
  );

  // Section 10: Communication Preferences
  const renderCommunicationPreferences = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Preferred Contact Method *
        </label>
        <select
          value={formData.preferredContactMethod}
          onChange={(e) => handleInputChange('preferredContactMethod', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select method</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="video-call">Video Call</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Best Time to Contact
        </label>
        <select
          value={formData.bestTimeToContact}
          onChange={(e) => handleInputChange('bestTimeToContact', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select time</option>
          <option value="morning">Morning (9am-12pm)</option>
          <option value="afternoon">Afternoon (12pm-5pm)</option>
          <option value="evening">Evening (5pm-8pm)</option>
          <option value="anytime">Anytime</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Your Timezone
        </label>
        <input
          type="text"
          value={formData.timezone}
          onChange={(e) => handleInputChange('timezone', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
          placeholder="e.g., GMT, EST, CET"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Preferred Communication Language
        </label>
        <select
          value={formData.communicationLanguage}
          onChange={(e) => handleInputChange('communicationLanguage', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select language</option>
          <option value="english">English</option>
          <option value="italian">Italian</option>
          <option value="german">German</option>
          <option value="french">French</option>
          <option value="spanish">Spanish</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Property Alerts Frequency
        </label>
        <select
          value={formData.propertyAlertsFrequency}
          onChange={(e) => handleInputChange('propertyAlertsFrequency', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select frequency</option>
          <option value="instant">Instant alerts</option>
          <option value="daily">Daily summary</option>
          <option value="weekly">Weekly roundup</option>
          <option value="monthly">Monthly overview</option>
          <option value="none">No alerts</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Additional Notes or Special Requirements
        </label>
        <textarea
          value={formData.additionalNotes}
          onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors h-32"
          placeholder="Any other information you'd like to share..."
        />
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
        return renderFeaturesAmenities();
      case 4:
        return renderInvestmentPurpose();
      case 5:
        return renderLocationPreferences();
      case 6:
        return renderTimelineProcess();
      case 7:
        return renderLegalAdministrative();
      case 8:
        return renderRenovationPlans();
      case 9:
        return renderCommunicationPreferences();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50">
      <div className="max-w-4xl mx-auto px-4 py-8 pt-24">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Foreign Buyer Requirements Profile</h1>
          <p className="text-gray-600">Help us understand your property needs in Puglia</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                {React.createElement(sections[currentSection].icon, { className: "w-6 h-6" })}
                {sections[currentSection].title}
              </h2>
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
                disabled={!isCurrentSectionComplete() || isSubmitting}
                className={`px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                  isCurrentSectionComplete() && !isSubmitting
                    ? 'bg-gradient-to-r from-purple-600 to-orange-600 text-white hover:shadow-lg'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Profile'}
                <Check className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Your information will be used to match you with suitable properties.</p>
          <p className="mt-2">Progress: {calculateProgress()}% complete</p>
        </div>
      </div>
    </div>
  );
}
