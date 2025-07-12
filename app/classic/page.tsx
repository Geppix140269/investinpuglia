// app/classic/page.tsx

'use client'

import { useState, useEffect } from 'react'
import { CalculatorConfigService, type CalculatorConfig } from '@/lib/services/calculatorConfigService'
import emailjs from '@emailjs/browser'

interface CalculationResults {
  totalProjectCost: number
  eligibleCosts: number
  grantAmount: number
  userInvestment: number
  breakdown: {
    propertyPurchase: number
    renovationCosts: number
    fixturesAndFittings: number
    innovationComponent: number
    sustainabilityComponent: number
    designAndPM: number
    preliminaryStudies: number
  }
}

export default function ClassicCalculatorPage() {
  // Configuration state
  const [config, setConfig] = useState<CalculatorConfig | null>(null)
  const [loading, setLoading] = useState(true)
  const [configError, setConfigError] = useState<string | null>(null)

  // Form state
  const [propertyValue, setPropertyValue] = useState(300000)
  const [renovationBudget, setRenovationBudget] = useState(200000)
  const [fixturesPercent, setFixturesPercent] = useState(20)
  const [grantRate, setGrantRate] = useState(0.4)
  const [email, setEmail] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<CalculationResults | null>(null)
  const [sending, setSending] = useState(false)
  const [calculationId, setCalculationId] = useState<string | null>(null)

  // Load configuration on mount
  useEffect(() => {
    loadConfiguration()
  }, [])

  const loadConfiguration = async () => {
    try {
      setLoading(true)
      const activeConfig = await CalculatorConfigService.getActiveConfig()
      
      if (activeConfig) {
        setConfig(activeConfig)
        // Set default values from config
        setPropertyValue(activeConfig.parameters.propertyValue.min)
        setRenovationBudget(activeConfig.parameters.renovationBudget.min)
        if (activeConfig.parameters.grantRates.length > 0) {
          setGrantRate(activeConfig.parameters.grantRates[0].value)
        }
      } else {
        setConfigError('No active calculator configuration found')
      }
    } catch (error) {
      console.error('Error loading configuration:', error)
      setConfigError('Failed to load calculator configuration')
    } finally {
      setLoading(false)
    }
  }

  const calculateGrant = async () => {
    if (!config) return

    // Calculate fixtures and fittings
    const fixturesAndFittings = renovationBudget * (fixturesPercent / 100)
    
    // Calculate additional components using config values
    const innovationComponent = renovationBudget * (config.parameters.components.innovation.minPercent / 100)
    const sustainabilityComponent = renovationBudget * (
      (config.parameters.components.sustainability.minPercent + config.parameters.components.sustainability.maxPercent) / 2 / 100
    )
    
    // Calculate professional costs using config values
    const designAndPM = renovationBudget * (config.parameters.costs.designAndPM.percent / 100)
    
    // Calculate total project cost
    const totalProjectCost = propertyValue + renovationBudget + fixturesAndFittings
    
    // Calculate eligible costs (everything except property purchase)
    const eligibleCostsBeforePreliminary = renovationBudget + fixturesAndFittings + 
                                          innovationComponent + sustainabilityComponent + 
                                          designAndPM
    
    // Add preliminary studies based on total eligible costs
    const preliminaryStudies = eligibleCostsBeforePreliminary * (config.parameters.costs.preliminaryStudies.percent / 100)
    const eligibleCosts = eligibleCostsBeforePreliminary + preliminaryStudies
    
    // Calculate grant amount
    const grantAmount = eligibleCosts * grantRate
    const userInvestment = totalProjectCost - grantAmount

    const calculationResults: CalculationResults = {
      totalProjectCost,
      eligibleCosts,
      grantAmount,
      userInvestment,
      breakdown: {
        propertyPurchase: propertyValue,
        renovationCosts: renovationBudget,
        fixturesAndFittings,
        innovationComponent,
        sustainabilityComponent,
        designAndPM,
        preliminaryStudies
      }
    }

    setResults(calculationResults)
    setShowResults(true)

    // Save calculation to Sanity
    try {
      const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      const savedId = await CalculatorConfigService.saveCalculation(
        sessionId,
        config,
        {
          propertyValue,
          renovationBudget,
          fixturesPercent,
          grantRate
        },
        calculationResults,
        email || undefined
      )
      setCalculationId(savedId)
    } catch (error) {
      console.error('Error saving calculation:', error)
    }
  }

  const sendEmail = async () => {
    if (!results || !email || !config) return

    setSending(true)
    
    const templateParams = {
      to_email: email,
      calculator_name: config.name,
      property_value: propertyValue.toLocaleString('it-IT'),
      renovation_budget: renovationBudget.toLocaleString('it-IT'),
      grant_amount: results.grantAmount.toLocaleString('it-IT'),
      user_investment: results.userInvestment.toLocaleString('it-IT'),
      grant_rate: (grantRate * 100).toFixed(0),
      eligible_costs: results.eligibleCosts.toLocaleString('it-IT'),
      calculation_date: new Date().toLocaleDateString('it-IT')
    }

    try {
      await emailjs.send(
        'service_w6tghqr',
        'template_vztws4q',
        templateParams,
        'wKn1_xMCtZssdZzpb'
      )
      
      // Mark report as downloaded
      if (calculationId) {
        await CalculatorConfigService.markReportDownloaded(calculationId)
      }
      
      alert('Report sent successfully to your email!')
    } catch (error) {
      console.error('Email error:', error)
      alert('Failed to send email. Please try again.')
    } finally {
      setSending(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading calculator configuration...</div>
      </div>
    )
  }

  if (configError || !config) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">{configError || 'Configuration error'}</div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{config.name}</h1>
      <p className="text-gray-600 mb-8">Dynamic configuration loaded from Sanity CMS</p>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-6">
          {/* Property Value */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Property Purchase Value (€)
              {config.helpTexts?.propertyValue && (
                <span className="text-gray-500 text-xs block">{config.helpTexts.propertyValue}</span>
              )}
            </label>
            <input
              type="range"
              min={config.parameters.propertyValue.min}
              max={config.parameters.propertyValue.max}
              step={config.parameters.propertyValue.step}
              value={propertyValue}
              onChange={(e) => setPropertyValue(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-center mt-2 font-semibold">
              €{propertyValue.toLocaleString('it-IT')}
            </div>
          </div>

          {/* Renovation Budget */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Renovation Budget (€)
              {config.helpTexts?.renovationBudget && (
                <span className="text-gray-500 text-xs block">{config.helpTexts.renovationBudget}</span>
              )}
            </label>
            <input
              type="range"
              min={config.parameters.renovationBudget.min}
              max={config.parameters.renovationBudget.max}
              step={config.parameters.renovationBudget.step}
              value={renovationBudget}
              onChange={(e) => setRenovationBudget(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-center mt-2 font-semibold">
              €{renovationBudget.toLocaleString('it-IT')}
            </div>
          </div>

          {/* Fixtures Percentage */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Fixtures & Fittings (% of renovation)
              {config.helpTexts?.fixturesPercent && (
                <span className="text-gray-500 text-xs block">{config.helpTexts.fixturesPercent}</span>
              )}
            </label>
            <input
              type="range"
              min="10"
              max="40"
              step="5"
              value={fixturesPercent}
              onChange={(e) => setFixturesPercent(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-center mt-2 font-semibold">{fixturesPercent}%</div>
          </div>

          {/* Grant Rate */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Grant Rate
              {config.helpTexts?.grantRate && (
                <span className="text-gray-500 text-xs block">{config.helpTexts.grantRate}</span>
              )}
            </label>
            <select
              value={grantRate}
              onChange={(e) => setGrantRate(Number(e.target.value))}
              className="w-full p-2 border rounded"
            >
              {config.parameters.grantRates.map((rate) => (
                <option key={rate.value} value={rate.value}>
                  {rate.label} - {rate.description}
                </option>
              ))}
            </select>
            {config.parameters.grantRates.find(r => r.value === grantRate)?.conditions && (
              <div className="mt-2 text-sm text-gray-600">
                <strong>Conditions:</strong>
                <ul className="list-disc list-inside">
                  {config.parameters.grantRates.find(r => r.value === grantRate)?.conditions?.map((condition, idx) => (
                    <li key={idx}>{condition}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email (optional - to receive detailed report)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateGrant}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Calculate Grant
          </button>
        </div>

        {/* Results */}
        {showResults && results && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Calculation Results</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Total Project Cost</p>
                  <p className="text-xl font-semibold">€{results.totalProjectCost.toLocaleString('it-IT')}</p>
                </div>
                <div>
                  <p className="text-gray-600">Eligible Costs</p>
                  <p className="text-xl font-semibold">€{results.eligibleCosts.toLocaleString('it-IT')}</p>
                </div>
                <div>
                  <p className="text-gray-600">Grant Amount</p>
                  <p className="text-2xl font-bold text-green-600">€{results.grantAmount.toLocaleString('it-IT')}</p>
                </div>
                <div>
                  <p className="text-gray-600">Your Investment</p>
                  <p className="text-xl font-semibold">€{results.userInvestment.toLocaleString('it-IT')}</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">Cost Breakdown</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Property Purchase</span>
                    <span>€{results.breakdown.propertyPurchase.toLocaleString('it-IT')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Renovation Costs</span>
                    <span>€{results.breakdown.renovationCosts.toLocaleString('it-IT')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fixtures & Fittings</span>
                    <span>€{results.breakdown.fixturesAndFittings.toLocaleString('it-IT')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Innovation ({config.parameters.components.innovation.minPercent}%)</span>
                    <span>€{results.breakdown.innovationComponent.toLocaleString('it-IT')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sustainability ({config.parameters.components.sustainability.minPercent}-{config.parameters.components.sustainability.maxPercent}%)</span>
                    <span>€{results.breakdown.sustainabilityComponent.toLocaleString('it-IT')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Design & PM ({config.parameters.costs.designAndPM.percent}%)</span>
                    <span>€{results.breakdown.designAndPM.toLocaleString('it-IT')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Preliminary Studies ({config.parameters.costs.preliminaryStudies.percent}%)</span>
                    <span>€{results.breakdown.preliminaryStudies.toLocaleString('it-IT')}</span>
                  </div>
                </div>
              </div>

              {email && (
                <button
                  onClick={sendEmail}
                  disabled={sending}
                  className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {sending ? 'Sending...' : 'Send Detailed Report to Email'}
                </button>
              )}
            </div>

            {/* Disclaimers */}
            {config.disclaimers && config.disclaimers.length > 0 && (
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-sm font-semibold text-yellow-800 mb-2">Important Notes:</p>
                <ul className="text-sm text-yellow-700 space-y-1">
                  {config.disclaimers.map((disclaimer, idx) => (
                    <li key={idx}>• {disclaimer}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
