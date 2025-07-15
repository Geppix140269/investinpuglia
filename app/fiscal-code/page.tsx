'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Script from 'next/script'

export default function FiscalCodePage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showAlert, setShowAlert] = useState({ type: '', message: '' })

  // Comprehensive country list
  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 
    'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 
    'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 
    'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 
    'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 
    'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 
    'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 
    'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 
    'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 
    'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 
    'Kazakhstan', 'Kenya', 'Kiribati', 'North Korea', 'South Korea', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 
    'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 
    'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 
    'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 
    'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 
    'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 
    'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 
    'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 
    'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 
    'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 
    'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 
    'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 
    'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 
    'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 
    'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ].sort()

  // Italian provinces
  const provinces = [
    {code: 'AG', name: 'Agrigento'},
    {code: 'AL', name: 'Alessandria'},
    {code: 'AN', name: 'Ancona'},
    {code: 'AO', name: 'Aosta'},
    {code: 'AR', name: 'Arezzo'},
    {code: 'AP', name: 'Ascoli Piceno'},
    {code: 'AT', name: 'Asti'},
    {code: 'AV', name: 'Avellino'},
    {code: 'BA', name: 'Bari'},
    {code: 'BT', name: 'Barletta-Andria-Trani'},
    {code: 'BL', name: 'Belluno'},
    {code: 'BN', name: 'Benevento'},
    {code: 'BG', name: 'Bergamo'},
    {code: 'BI', name: 'Biella'},
    {code: 'BO', name: 'Bologna'},
    {code: 'BZ', name: 'Bolzano'},
    {code: 'BS', name: 'Brescia'},
    {code: 'BR', name: 'Brindisi'},
    {code: 'CA', name: 'Cagliari'},
    {code: 'CL', name: 'Caltanissetta'},
    {code: 'CB', name: 'Campobasso'},
    {code: 'CE', name: 'Caserta'},
    {code: 'CT', name: 'Catania'},
    {code: 'CZ', name: 'Catanzaro'},
    {code: 'CH', name: 'Chieti'},
    {code: 'CO', name: 'Como'},
    {code: 'CS', name: 'Cosenza'},
    {code: 'CR', name: 'Cremona'},
    {code: 'KR', name: 'Crotone'},
    {code: 'CN', name: 'Cuneo'},
    {code: 'EN', name: 'Enna'},
    {code: 'FM', name: 'Fermo'},
    {code: 'FE', name: 'Ferrara'},
    {code: 'FI', name: 'Firenze'},
    {code: 'FG', name: 'Foggia'},
    {code: 'FC', name: 'Forlì-Cesena'},
    {code: 'FR', name: 'Frosinone'},
    {code: 'GE', name: 'Genova'},
    {code: 'GO', name: 'Gorizia'},
    {code: 'GR', name: 'Grosseto'},
    {code: 'IM', name: 'Imperia'},
    {code: 'IS', name: 'Isernia'},
    {code: 'SP', name: 'La Spezia'},
    {code: 'AQ', name: "L'Aquila"},
    {code: 'LT', name: 'Latina'},
    {code: 'LE', name: 'Lecce'},
    {code: 'LC', name: 'Lecco'},
    {code: 'LI', name: 'Livorno'},
    {code: 'LO', name: 'Lodi'},
    {code: 'LU', name: 'Lucca'},
    {code: 'MC', name: 'Macerata'},
    {code: 'MN', name: 'Mantova'},
    {code: 'MS', name: 'Massa-Carrara'},
    {code: 'MT', name: 'Matera'},
    {code: 'ME', name: 'Messina'},
    {code: 'MI', name: 'Milano'},
    {code: 'MO', name: 'Modena'},
    {code: 'MB', name: 'Monza e della Brianza'},
    {code: 'NA', name: 'Napoli'},
    {code: 'NO', name: 'Novara'},
    {code: 'NU', name: 'Nuoro'},
    {code: 'OR', name: 'Oristano'},
    {code: 'PD', name: 'Padova'},
    {code: 'PA', name: 'Palermo'},
    {code: 'PR', name: 'Parma'},
    {code: 'PV', name: 'Pavia'},
    {code: 'PG', name: 'Perugia'},
    {code: 'PU', name: 'Pesaro e Urbino'},
    {code: 'PE', name: 'Pescara'},
    {code: 'PC', name: 'Piacenza'},
    {code: 'PI', name: 'Pisa'},
    {code: 'PT', name: 'Pistoia'},
    {code: 'PN', name: 'Pordenone'},
    {code: 'PZ', name: 'Potenza'},
    {code: 'PO', name: 'Prato'},
    {code: 'RG', name: 'Ragusa'},
    {code: 'RA', name: 'Ravenna'},
    {code: 'RC', name: 'Reggio Calabria'},
    {code: 'RE', name: 'Reggio Emilia'},
    {code: 'RI', name: 'Rieti'},
    {code: 'RN', name: 'Rimini'},
    {code: 'RM', name: 'Roma'},
    {code: 'RO', name: 'Rovigo'},
    {code: 'SA', name: 'Salerno'},
    {code: 'SS', name: 'Sassari'},
    {code: 'SV', name: 'Savona'},
    {code: 'SI', name: 'Siena'},
    {code: 'SR', name: 'Siracusa'},
    {code: 'SO', name: 'Sondrio'},
    {code: 'TA', name: 'Taranto'},
    {code: 'TE', name: 'Teramo'},
    {code: 'TR', name: 'Terni'},
    {code: 'TO', name: 'Torino'},
    {code: 'TP', name: 'Trapani'},
    {code: 'TN', name: 'Trento'},
    {code: 'TV', name: 'Treviso'},
    {code: 'TS', name: 'Trieste'},
    {code: 'UD', name: 'Udine'},
    {code: 'VA', name: 'Varese'},
    {code: 'VE', name: 'Venezia'},
    {code: 'VB', name: 'Verbano-Cusio-Ossola'},
    {code: 'VC', name: 'Vercelli'},
    {code: 'VR', name: 'Verona'},
    {code: 'VV', name: 'Vibo Valentia'},
    {code: 'VI', name: 'Vicenza'},
    {code: 'VT', name: 'Viterbo'}
  ]

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    nationality: '',
    passportNumber: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    birthCountry: '',
    birthCity: '',
    birthState: '',
    hasItalianAddress: 'no',
    italianAddress: '',
    italianCity: '',
    italianProvince: '',
    italianPostalCode: '',
    email: '',
    phone: '',
    whatsapp: '',
    homeAddress: '',
    homeCity: '',
    homeState: '',
    homePostalCode: '',
    homeCountry: '',
    reasonForRequest: '',
    urgency: 'standard',
    italianContact: '',
    additionalNotes: ''
  })

  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }))
    }
  }

  const validateField = (name: string, value: string): boolean => {
    switch (name) {
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      case 'phone':
      case 'whatsapp':
        return !value || value.length >= 10
      case 'birthYear':
        const year = parseInt(value)
        return year >= 1900 && year <= new Date().getFullYear()
      default:
        return !!value
    }
  }

  const validateForm = () => {
 const newErrors: Record<string, boolean> = {}
    const requiredFields = [
      'firstName', 'lastName', 'gender', 'nationality', 'passportNumber',
      'birthDay', 'birthMonth', 'birthYear', 'birthCountry', 'birthCity',
      'email', 'phone', 'homeAddress', 'homeCity', 'homePostalCode',
      'homeCountry', 'reasonForRequest'
    ]

 requiredFields.forEach(field => {
  if (!formData[field as keyof typeof formData] || !validateField(field, formData[field as keyof typeof formData])) {
    newErrors[field] = true
  }
})

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      setShowAlert({ type: 'error', message: 'Please fill in all required fields correctly.' })
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    setIsSubmitting(true)

    try {
      const hasItalianAddress = formData.hasItalianAddress === 'yes'
      
      // Map to your API format
      const data = {
        // Personal Information
        name: formData.firstName,
        surname: formData.lastName,
        sex: formData.gender,
        nationality: formData.nationality,
        passportNumber: formData.passportNumber,
        
        // Birth Information
        birthDate: `${formData.birthYear}-${String(formData.birthMonth).padStart(2, '0')}-${String(formData.birthDay).padStart(2, '0')}`,
        birthMunicipality: formData.birthCity,
        birthProvince: formData.birthCountry === 'Italy' ? formData.birthState : null,
        birthForeign: formData.birthCountry !== 'Italy',
        birthForeignCountry: formData.birthCountry !== 'Italy' ? formData.birthCountry : null,
        
        // Contact
        email: formData.email,
        phone: formData.phone,
        whatsapp: formData.whatsapp || formData.phone,
        
        // Current Address (always store home country address)
        foreignCountry: formData.homeCountry,
        foreignAddress: formData.homeAddress,
        foreignCity: formData.homeCity,
        foreignState: formData.homeState,
        foreignPostalCode: formData.homePostalCode,
        
        // Italian Address (if provided)
        residenceProvince: hasItalianAddress ? formData.italianProvince : null,
        residenceMunicipality: hasItalianAddress ? formData.italianCity : null,
        residenceAddress: hasItalianAddress ? formData.italianAddress : null,
        residenceCAP: hasItalianAddress ? formData.italianPostalCode : null,
        
        // Purpose
        reasonForRequest: formData.reasonForRequest,
        urgency: formData.urgency,
        additionalNotes: formData.additionalNotes,
        italianContact: formData.italianContact,
        
        // Meta
        applicationType: 'international',
        payment_status: 'test_mode'
      }

      const response = await fetch('/api/fiscal-code-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit application')
      }

      const result = await response.json()
      
      // Success!
      setShowAlert({ type: 'success', message: 'Application submitted successfully! You will receive a confirmation email with tracking details.' })
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        gender: '',
        nationality: '',
        passportNumber: '',
        birthDay: '',
        birthMonth: '',
        birthYear: '',
        birthCountry: '',
        birthCity: '',
        birthState: '',
        hasItalianAddress: 'no',
        italianAddress: '',
        italianCity: '',
        italianProvince: '',
        italianPostalCode: '',
        email: '',
        phone: '',
        whatsapp: '',
        homeAddress: '',
        homeCity: '',
        homeState: '',
        homePostalCode: '',
        homeCountry: '',
        reasonForRequest: '',
        urgency: 'standard',
        italianContact: '',
        additionalNotes: ''
      })
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
      
      // Redirect after 3 seconds
      setTimeout(() => {
        router.push('/fiscal-code/success?id=' + result.id)
      }, 3000)

    } catch (error) {
      console.error('Submission error:', error)
      setShowAlert({ type: 'error', message: error instanceof Error ? error.message : 'Failed to submit application. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const setQuickCountry = (field, country) => {
    setFormData(prev => ({ ...prev, [field]: country }))
  }

  // Alert auto-hide
  useEffect(() => {
    if (showAlert.message) {
      const timer = setTimeout(() => {
        setShowAlert({ type: '', message: '' })
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [showAlert])

  return (
    <>
      <style jsx>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background-color: #f5f5f5;
            color: #333;
            line-height: 1.6;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
        }

        .form-wrapper {
            background: white;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: 40px;
            margin-top: 20px;
        }

        h1 {
            color: #1a1a1a;
            margin-bottom: 10px;
            font-size: 2.5rem;
        }

        .subtitle {
            color: #666;
            margin-bottom: 30px;
            font-size: 1.1rem;
        }

        .info-banner {
            background: #e3f2fd;
            border-left: 4px solid #2196f3;
            padding: 15px;
            margin-bottom: 30px;
            border-radius: 4px;
        }

        .info-banner h3 {
            color: #1976d2;
            margin-bottom: 8px;
        }

        .section {
            margin-bottom: 35px;
            padding-bottom: 35px;
            border-bottom: 1px solid #e5e5e5;
        }

        .section:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .section-title {
            font-size: 1.4rem;
            color: #2c3e50;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .form-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #555;
            font-weight: 500;
            font-size: 0.95rem;
        }

        .required {
            color: #e74c3c;
        }

        input[type="text"],
        input[type="email"],
        input[type="tel"],
        input[type="number"],
        select,
        textarea {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        input:focus,
        select:focus,
        textarea:focus {
            outline: none;
            border-color: #4CAF50;
            box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
        }

        .error {
            border-color: #e74c3c !important;
        }

        .error-message {
            color: #e74c3c;
            font-size: 0.85rem;
            margin-top: 5px;
        }

        .date-inputs {
            display: grid;
            grid-template-columns: 1fr 2fr 1.5fr;
            gap: 10px;
        }

        .radio-group {
            display: flex;
            gap: 20px;
            margin-top: 10px;
        }

        .radio-label {
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        .radio-label input[type="radio"] {
            margin-right: 6px;
        }

        .submit-button {
            background-color: #4CAF50;
            color: white;
            padding: 15px 40px;
            font-size: 1.1rem;
            font-weight: 600;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
            margin-top: 20px;
        }

        .submit-button:hover {
            background-color: #45a049;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
        }

        .submit-button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
            transform: none;
        }

        .alert {
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 6px;
        }

        .alert-success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }

        .alert-error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }

        .loading {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid #4CAF50;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-right: 10px;
            vertical-align: middle;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .help-text {
            font-size: 0.85rem;
            color: #666;
            margin-top: 5px;
        }

        .country-flag {
            width: 24px;
            height: 16px;
            margin-right: 8px;
            vertical-align: middle;
        }

        .popular-countries {
            display: flex;
            gap: 10px;
            margin-top: 10px;
            flex-wrap: wrap;
        }

        .country-quick-select {
            padding: 6px 12px;
            background: #f0f0f0;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.9rem;
            transition: all 0.2s;
        }

        .country-quick-select:hover {
            background: #e0e0e0;
            border-color: #999;
        }

        @media (max-width: 768px) {
            .form-wrapper {
                padding: 25px;
            }

            h1 {
                font-size: 2rem;
            }

            .form-grid {
                grid-template-columns: 1fr;
            }
        }
      `}</style>

      <div className="container">
        <div className="form-wrapper">
          <h1>Italian Fiscal Code Application</h1>
          <p className="subtitle">International citizens applying for Italian fiscal code</p>

          <div className="info-banner">
            <h3>🌍 Service for International Citizens</h3>
            <p>This service is specifically designed for non-Italian citizens who need an Italian fiscal code for work, property purchase, banking, or other official purposes in Italy.</p>
          </div>

          {showAlert.type === 'success' && (
            <div className="alert alert-success">
              {showAlert.message}
            </div>
          )}

          {showAlert.type === 'error' && (
            <div className="alert alert-error">
              {showAlert.message}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* Personal Information */}
            <div className="section">
              <h2 className="section-title">
                <span>👤</span> Personal Information
              </h2>
              
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="firstName">First Name (as in passport) <span className="required">*</span></label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? 'error' : ''}
                    required 
                  />
                  {errors.firstName && <div className="error-message">First name is required</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name (as in passport) <span className="required">*</span></label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'error' : ''}
                    required 
                  />
                  {errors.lastName && <div className="error-message">Last name is required</div>}
                </div>
              </div>

              <div className="form-group">
                <label>Gender <span className="required">*</span></label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input 
                      type="radio" 
                      name="gender" 
                      value="M" 
                      checked={formData.gender === 'M'}
                      onChange={handleChange}
                      required 
                    />
                    Male
                  </label>
                  <label className="radio-label">
                    <input 
                      type="radio" 
                      name="gender" 
                      value="F" 
                      checked={formData.gender === 'F'}
                      onChange={handleChange}
                      required 
                    />
                    Female
                  </label>
                </div>
                {errors.gender && <div className="error-message">Please select gender</div>}
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="nationality">Nationality <span className="required">*</span></label>
                  <select 
                    id="nationality" 
                    name="nationality" 
                    value={formData.nationality}
                    onChange={handleChange}
                    className={errors.nationality ? 'error' : ''}
                    required
                  >
                    <option value="">Select your nationality</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  <div className="popular-countries">
                    <button type="button" className="country-quick-select" onClick={() => setQuickCountry('nationality', 'United States')}>🇺🇸 USA</button>
                    <button type="button" className="country-quick-select" onClick={() => setQuickCountry('nationality', 'United Kingdom')}>🇬🇧 UK</button>
                    <button type="button" className="country-quick-select" onClick={() => setQuickCountry('nationality', 'Germany')}>🇩🇪 Germany</button>
                    <button type="button" className="country-quick-select" onClick={() => setQuickCountry('nationality', 'France')}>🇫🇷 France</button>
                    <button type="button" className="country-quick-select" onClick={() => setQuickCountry('nationality', 'Canada')}>🇨🇦 Canada</button>
                    <button type="button" className="country-quick-select" onClick={() => setQuickCountry('nationality', 'Morocco')}>🇲🇦 Morocco</button>
                    <button type="button" className="country-quick-select" onClick={() => setQuickCountry('nationality', 'Egypt')}>🇪🇬 Egypt</button>
                    <button type="button" className="country-quick-select" onClick={() => setQuickCountry('nationality', 'Tunisia')}>🇹🇳 Tunisia</button>
                  </div>
                  {errors.nationality && <div className="error-message">Nationality is required</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="passportNumber">Passport Number <span className="required">*</span></label>
                  <input 
                    type="text" 
                    id="passportNumber" 
                    name="passportNumber" 
                    value={formData.passportNumber}
                    onChange={handleChange}
                    className={errors.passportNumber ? 'error' : ''}
                    required 
                  />
                  <div className="help-text">Your valid passport number</div>
                  {errors.passportNumber && <div className="error-message">Passport number is required</div>}
                </div>
              </div>
            </div>

            {/* Birth Information */}
            <div className="section">
              <h2 className="section-title">
                <span>📅</span> Birth Information
              </h2>

              <div className="form-group">
                <label>Date of Birth <span className="required">*</span></label>
                <div className="date-inputs">
                  <select 
                    id="birthDay" 
                    name="birthDay" 
                    value={formData.birthDay}
                    onChange={handleChange}
                    className={errors.birthDay ? 'error' : ''}
                    required
                  >
                    <option value="">Day</option>
                    {[...Array(31)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{String(i + 1).padStart(2, '0')}</option>
                    ))}
                  </select>
                  <select 
                    id="birthMonth" 
                    name="birthMonth" 
                    value={formData.birthMonth}
                    onChange={handleChange}
                    className={errors.birthMonth ? 'error' : ''}
                    required
                  >
                    <option value="">Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                  <input 
                    type="number" 
                    id="birthYear" 
                    name="birthYear" 
                    placeholder="Year" 
                    min="1900" 
                    max={new Date().getFullYear()} 
                    value={formData.birthYear}
                    onChange={handleChange}
                    className={errors.birthYear ? 'error' : ''}
                    required 
                  />
                </div>
                {(errors.birthDay || errors.birthMonth || errors.birthYear) && <div className="error-message">Complete date of birth is required</div>}
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="birthCountry">Birth Country <span className="required">*</span></label>
                  <select 
                    id="birthCountry" 
                    name="birthCountry" 
                    value={formData.birthCountry}
                    onChange={handleChange}
                    className={errors.birthCountry ? 'error' : ''}
                    required
                  >
                    <option value="">Select your birth country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  <div className="popular-countries">
                    <button type="button" className="country-quick-select" onClick={() => setQuickCountry('birthCountry', 'United States')}>🇺🇸 USA</button>
                    <button type="button" className="country-quick-select" onClick={() => setQuickCountry('birthCountry', 'United Kingdom')}>🇬🇧 UK</button>
                    <button type="button" className="country-quick-select" onClick={() => setQuickCountry('birthCountry', 'Brazil')}>🇧🇷 Brazil</button>
                    <button type="button" className="country-quick-select" onClick={() => setQuickCountry('birthCountry', 'Argentina')}>🇦🇷 Argentina</button>
                    <button type="button" className="country-quick-select" onClick={() => setQuickCountry('birthCountry', 'India')}>🇮🇳 India</button>
                    <button type="button" className="country-quick-select" onClick={() => setQuickCountry('birthCountry', 'Morocco')}>🇲🇦 Morocco</button>
                    <button type="button" className="country-quick-select" onClick={() => setQuickCountry('birthCountry', 'Egypt')}>🇪🇬 Egypt</button>
                    <button type="button" className="country-quick-select" onClick={() => setQuickCountry('birthCountry', 'China')}>🇨🇳 China</button>
                  </div>
                  {errors.birthCountry && <div className="error-message">Birth country is required</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="birthCity">Birth City <span className="required">*</span></label>
                  <input 
                    type="text" 
                    id="birthCity" 
                    name="birthCity" 
                    placeholder="City name as in passport" 
                    value={formData.birthCity}
                    onChange={handleChange}
                    className={errors.birthCity ? 'error' : ''}
                    required 
                  />
                  <div className="help-text">Enter the city name exactly as shown in your passport</div>
                  {errors.birthCity && <div className="error-message">Birth city is required</div>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="birthState">Birth State/Province/Region</label>
                <input 
                  type="text" 
                  id="birthState" 
                  name="birthState" 
                  placeholder="e.g., California, Ontario, Bavaria"
                  value={formData.birthState}
                  onChange={handleChange}
                />
                <div className="help-text">If applicable in your country</div>
              </div>
            </div>

            {/* Italian Residence/Contact */}
            <div className="section">
              <h2 className="section-title">
                <span>🇮🇹</span> Italian Address (if applicable)
              </h2>

              <div className="form-group">
                <label>Do you have an Italian address?</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input 
                      type="radio" 
                      name="hasItalianAddress" 
                      value="yes" 
                      checked={formData.hasItalianAddress === 'yes'}
                      onChange={handleChange}
                    />
                    Yes
                  </label>
                  <label className="radio-label">
                    <input 
                      type="radio" 
                      name="hasItalianAddress" 
                      value="no" 
                      checked={formData.hasItalianAddress === 'no'}
                      onChange={handleChange}
                    />
                    No (using home country address)
                  </label>
                </div>
              </div>

              {formData.hasItalianAddress === 'yes' && (
                <div>
                  <div className="form-group">
                    <label htmlFor="italianAddress">Italian Street Address</label>
                    <input 
                      type="text" 
                      id="italianAddress" 
                      name="italianAddress"
                      value={formData.italianAddress}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="italianCity">City</label>
                      <input 
                        type="text" 
                        id="italianCity" 
                        name="italianCity"
                        value={formData.italianCity}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="italianProvince">Province</label>
                      <select 
                        id="italianProvince" 
                        name="italianProvince"
                        value={formData.italianProvince}
                        onChange={handleChange}
                      >
                        <option value="">Select Province</option>
                        {provinces.map(province => (
                          <option key={province.code} value={province.code}>
                            {province.name} ({province.code})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="italianPostalCode">CAP (Postal Code)</label>
                      <input 
                        type="text" 
                        id="italianPostalCode" 
                        name="italianPostalCode" 
                        maxLength="5"
                        value={formData.italianPostalCode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="section">
              <h2 className="section-title">
                <span>📧</span> Contact Information
              </h2>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="required">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    required 
                  />
                  <div className="help-text">We'll send your fiscal code here</div>
                  {errors.email && <div className="error-message">Valid email is required</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="+1 234 567 8900" 
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                    required 
                  />
                  <div className="help-text">Include country code</div>
                  {errors.phone && <div className="error-message">Valid phone number is required</div>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="whatsapp">WhatsApp Number (if different)</label>
                <input 
                  type="tel" 
                  id="whatsapp" 
                  name="whatsapp" 
                  placeholder="+1 234 567 8900"
                  value={formData.whatsapp}
                  onChange={handleChange}
                />
                <div className="help-text">For urgent communications</div>
              </div>
            </div>

            {/* Home Country Address */}
            <div className="section">
              <h2 className="section-title">
                <span>🏠</span> Home Country Address
              </h2>

              <div className="form-group">
                <label htmlFor="homeAddress">Street Address <span className="required">*</span></label>
                <input 
                  type="text" 
                  id="homeAddress" 
                  name="homeAddress" 
                  value={formData.homeAddress}
                  onChange={handleChange}
                  className={errors.homeAddress ? 'error' : ''}
                  required 
                />
                {errors.homeAddress && <div className="error-message">Address is required</div>}
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="homeCity">City <span className="required">*</span></label>
                  <input 
                    type="text" 
                    id="homeCity" 
                    name="homeCity" 
                    value={formData.homeCity}
                    onChange={handleChange}
                    className={errors.homeCity ? 'error' : ''}
                    required 
                  />
                  {errors.homeCity && <div className="error-message">City is required</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="homeState">State/Province/Region</label>
                  <input 
                    type="text" 
                    id="homeState" 
                    name="homeState"
                    value={formData.homeState}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="homePostalCode">Postal/ZIP Code <span className="required">*</span></label>
                  <input 
                    type="text" 
                    id="homePostalCode" 
                    name="homePostalCode" 
                    value={formData.homePostalCode}
                    onChange={handleChange}
                    className={errors.homePostalCode ? 'error' : ''}
                    required 
                  />
                  {errors.homePostalCode && <div className="error-message">Postal code is required</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="homeCountry">Country <span className="required">*</span></label>
                  <select 
                    id="homeCountry" 
                    name="homeCountry" 
                    value={formData.homeCountry}
                    onChange={handleChange}
                    className={errors.homeCountry ? 'error' : ''}
                    required
                  >
                    <option value="">Select Country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  {errors.homeCountry && <div className="error-message">Country is required</div>}
                </div>
              </div>
            </div>

            {/* Purpose and Documentation */}
            <div className="section">
              <h2 className="section-title">
                <span>📋</span> Purpose and Documentation
              </h2>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="reasonForRequest">Purpose of Fiscal Code <span className="required">*</span></label>
                  <select 
                    id="reasonForRequest" 
                    name="reasonForRequest" 
                    value={formData.reasonForRequest}
                    onChange={handleChange}
                    className={errors.reasonForRequest ? 'error' : ''}
                    required
                  >
                    <option value="">Select primary purpose</option>
                    <option value="employment">Employment in Italy</option>
                    <option value="business">Starting a Business</option>
                    <option value="property">Property Purchase</option>
                    <option value="property_rental">Property Rental</option>
                    <option value="banking">Opening Bank Account</option>
                    <option value="investment">Investment Activities</option>
                    <option value="study">Education/Study</option>
                    <option value="healthcare">Healthcare Registration</option>
                    <option value="pension">Pension/Retirement</option>
                    <option value="inheritance">Inheritance Matters</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.reasonForRequest && <div className="error-message">Please select a reason</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="urgency">Processing Speed</label>
                  <select 
                    id="urgency" 
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                  >
                    <option value="standard">Standard (5-7 business days)</option>
                    <option value="urgent">Urgent (2-3 business days) - Additional fee</option>
                    <option value="express">Express (24 hours) - Premium fee</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="italianContact">Italian Contact/Employer (if applicable)</label>
                <input 
                  type="text" 
                  id="italianContact" 
                  name="italianContact" 
                  placeholder="Name of Italian employer, real estate agency, etc."
                  value={formData.italianContact}
                  onChange={handleChange}
                />
                <div className="help-text">This can help expedite your application</div>
              </div>

              <div className="form-group">
                <label htmlFor="additionalNotes">Additional Information</label>
                <textarea 
                  id="additionalNotes" 
                  name="additionalNotes" 
                  rows="4" 
                  placeholder="Any additional information that might be helpful for your application..."
                  value={formData.additionalNotes}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="loading"></span> Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </button>

            <p style={{ textAlign: 'center', marginTop: '20px', color: '#666', fontSize: '0.9rem' }}>
              By submitting this application, you authorize us to process your fiscal code application with Italian authorities.
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
