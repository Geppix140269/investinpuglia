// app/buyer-profile/page.tsx
'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, Globe, Euro, Home, Calendar, Briefcase, Heart, Shield, Phone, Mail, Clock, MapPin, Building, Users, FileText } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

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

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // First check if email already exists
      const { data: existingProfile } = await supabase
        .from('buyer_profiles')
        .select('id')
        .eq('email', formData.email)
        .single();

      if (existingProfile) {
        alert('A profile with this email already exists. Please use a different email or contact us to update your existing profile.');
        setIsSubmitting(false);
        return;
      }

      // Prepare data for submission
      const profileData = {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        nationality: formData.nationality,
        country_of_residence: formData.countryOfResidence,
        age_range: formData.ageRange,
        occupation: formData.occupation,
        languages: formData.languages,
        italian_language_level: formData.italianLanguageLevel,
        budget_range: formData.budgetRange,
        financing_type: formData.financingType,
        proof_of_funds: formData.proofOfFunds === 'Yes',
        pre_approved_mortgage: formData.preApprovedMortgage === 'Yes',
        investment_readiness: formData.investmentReadiness,
        property_types: formData.propertyTypes,
        preferred_locations: formData.preferredLocations,
        property_condition: formData.propertyCondition,
        minimum_bedrooms: formData.minimumBedrooms ? parseInt(formData.minimumBedrooms) : null,
        minimum_bathrooms: formData.minimumBathrooms ? parseInt(formData.minimumBathrooms) : null,
        minimum_land_sqm: formData.minimumLandSqm ? parseInt(formData.minimumLandSqm) : null,
        primary_purpose: formData.primaryPurpose,
        rental_income_required: formData.rentalIncomeRequired === 'yes',
        expected_annual_usage_days: formData.expectedPersonalUseDays ? parseInt(formData.expectedPersonalUseDays.split('-')[0]) : null,
        interested_in_grants: formData.interestedInGrants === 'yes',
        business_plan_ready: formData.businessPlanReady === 'Yes',
        italian_tax_number: formData.italianTaxNumber === 'Yes',
        italian_bank_account: formData.italianBankAccount === 'Yes',
        willing_to_renovate: formData.willingToRenovate === 'yes',
        remote_purchase_willing: formData.remotePurchaseWilling === 'yes',
        viewing_trip_planned: formData.viewingTripPlanned === 'Yes',
        viewing_trip_date: formData.viewingTripDate || null,
        purchase_timeline: formData.purchaseTimeline,
        previous_italy_experience: formData.previousItalyExperience,
        lead_source: 'buyer_profile_form',
        status: 'active',
        notes: formData.additionalNotes,
        motivation_level: calculateMotivationScore(),
        lead_quality_score: calculateLeadQualityScore()
      };

      // Insert into database
      const { data, error } = await supabase
        .from('buyer_profiles')
        .insert(profileData)
        .select()
        .single();

      if (error) throw error;

      // Store additional details in separate tables
      if (data) {
        // Save search criteria
        await supabase.from('search_criteria').insert({
          buyer_profile_id: data.id,
          max_distance_from_sea_km: parseDistanceValue(formData.maxDistanceFromSea),
          max_distance_from_airport_km: parseDistanceValue(formData.maxDistanceFromAirport),
          max_distance_from_town_km: parseDistanceValue(formData.maxDistanceFromTown),
          location_priorities: formData.preferredLocations.map((loc, idx) => ({
            location: loc,
            priority: idx + 1
          })),
          architectural_style_preferences: formData.architecturalPreferences,
          view_requirements: formData.viewPreferences,
          privacy_level: formData.neighborhoodType === 'isolated' ? 'high' : 'medium'
        });

        // Save communication preferences
        await supabase.from('communication_preferences').insert({
          buyer_profile_id: data.id,
          preferred_contact_method: formData.preferredContactMethod,
          best_time_to_contact: formData.bestTimeToContact,
          timezone: formData.timezone,
          communication_language: formData.communicationLanguage || 'english',
          instant_alerts_enabled: true,
          alert_frequency: 'weekly'
        });

        // Save activity log
        await supabase.from('buyer_activity_log').insert({
          buyer_profile_id: data.id,
          activity_type: 'profile_created',
          activity_details: {
            source: 'web_form',
            completion_percentage: calculateProgress()
          }
        });
      }

      // Success!
      alert('Thank you! Your comprehensive buyer profile has been submitted successfully. We will be in touch soon with matching properties.');
      window.location.href = '/'; // Redirect to homepage
      
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('There was an error saving your profile. Please try again or contact us for assistance.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper functions
  const calculateMotivationScore = () => {
    let score = 50; // Base score
    if (formData.purchaseTimeline === 'immediate') score += 30;
    else if (formData.purchaseTimeline === '1-3months') score += 20;
    else if (formData.purchaseTimeline === '3-6months') score += 10;
    
    if (formData.proofOfFunds === 'Yes') score += 10;
    if (formData.viewingTripPlanned === 'Yes') score += 10;
    
    return Math.min(score, 100);
  };

  const calculateLeadQualityScore = () => {
    let score = 0;
    
    // Budget score (higher budget = higher score)
    if (formData.budgetRange.includes('over')) score += 30;
    else if (formData.budgetRange.includes('1m')) score += 25;
    else if (formData.budgetRange.includes('800k')) score += 20;
    else if (formData.budgetRange.includes('600k')) score += 15;
    else if (formData.budgetRange.includes('400k')) score += 10;
    else score += 5;
    
    // Readiness indicators
    if (formData.financingType === 'cash') score += 20;
    if (formData.proofOfFunds === 'Yes') score += 15;
    if (formData.purchaseTimeline === 'immediate') score += 20;
    if (formData.viewingTripPlanned === 'Yes') score += 10;
    if (formData.previousItalyExperience === 'owned-property') score += 5;
    
    return Math.min(score, 100);
  };

  const parseDistanceValue = (value: string) => {
    if (!value) return null;
    if (value === 'walking') return 1;
    const match = value.match(/\d+/);
    return match ? parseInt(match[0]) : null;
  };

  // Copy all the render methods from your original component here
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

  // Include all other render methods from the original component...
  // (renderFinancialProfile, renderPropertyRequirements, etc.)
  // I'm showing a condensed version here for brevity

  const renderCurrentSection = () => {
    // Copy the entire switch statement from your original component
    switch (currentSection) {
      case 0:
        return renderPersonalInfo();
      // Add all other cases here...
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
          <p>Your information will be used to create detailed buyer reports for qualified real estate agents.</p>
          <p className="mt-2">Progress: {calculateProgress()}% complete</p>
        </div>
      </div>
    </div>
  );
}
