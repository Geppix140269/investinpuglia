// app/api/calculator/config/route.ts

import { NextResponse } from 'next/server'
import { CalculatorConfigService } from '@/lib/services/calculatorConfigService'

export async function GET(request: Request) {
  try {
    // Get date from query params if provided
    const { searchParams } = new URL(request.url)
    const dateParam = searchParams.get('date')
    
    let config
    if (dateParam) {
      // Get config valid for specific date
      const date = new Date(dateParam)
      config = await CalculatorConfigService.getConfigForDate(date)
    } else {
      // Get currently active config
      config = await CalculatorConfigService.getActiveConfig()
    }
    
    if (!config) {
      return NextResponse.json(
        { error: 'No active calculator configuration found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(config)
  } catch (error) {
    console.error('Error fetching calculator config:', error)
    return NextResponse.json(
      { error: 'Failed to fetch calculator configuration' },
      { status: 500 }
    )
  }
}

// app/api/calculator/calculate/route.ts

import { NextResponse } from 'next/server'
import { CalculatorConfigService } from '@/lib/services/calculatorConfigService'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { propertyValue, renovationBudget, fixturesPercent, grantRate, email } = body
    
    // Validate inputs
    if (!propertyValue || !renovationBudget || fixturesPercent === undefined || !grantRate) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      )
    }
    
    // Get active configuration
    const config = await CalculatorConfigService.getActiveConfig()
    if (!config) {
      return NextResponse.json(
        { error: 'No active calculator configuration' },
        { status: 404 }
      )
    }
    
    // Perform calculations using config parameters
    const fixturesAndFittings = renovationBudget * (fixturesPercent / 100)
    const innovationComponent = renovationBudget * (config.parameters.components.innovation.minPercent / 100)
    const sustainabilityComponent = renovationBudget * (
      (config.parameters.components.sustainability.minPercent + config.parameters.components.sustainability.maxPercent) / 2 / 100
    )
    const designAndPM = renovationBudget * (config.parameters.costs.designAndPM.percent / 100)
    
    const eligibleCostsBeforePreliminary = renovationBudget + fixturesAndFittings + 
                                          innovationComponent + sustainabilityComponent + 
                                          designAndPM
    
    const preliminaryStudies = eligibleCostsBeforePreliminary * (config.parameters.costs.preliminaryStudies.percent / 100)
    const eligibleCosts = eligibleCostsBeforePreliminary + preliminaryStudies
    
    const grantAmount = eligibleCosts * grantRate
    const totalProjectCost = propertyValue + renovationBudget + fixturesAndFittings
    const userInvestment = totalProjectCost - grantAmount
    
    const results = {
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
    
    // Save calculation to Sanity
    const sessionId = `api_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    const calculationId = await CalculatorConfigService.saveCalculation(
      sessionId,
      config,
      { propertyValue, renovationBudget, fixturesPercent, grantRate },
      results,
      email
    )
    
    return NextResponse.json({
      success: true,
      calculationId,
      config: {
        name: config.name,
        validFrom: config.validFrom,
        validUntil: config.validUntil
      },
      results
    })
  } catch (error) {
    console.error('Calculation error:', error)
    return NextResponse.json(
      { error: 'Failed to perform calculation' },
      { status: 500 }
    )
  }
}

// app/api/calculator/stats/route.ts

import { NextResponse } from 'next/server'
import { CalculatorConfigService } from '@/lib/services/calculatorConfigService'

export async function GET(request: Request) {
  try {
    // Get days from query params (default 30)
    const { searchParams } = new URL(request.url)
    const days = parseInt(searchParams.get('days') || '30')
    
    const stats = await CalculatorConfigService.getCalculationStats(days)
    
    return NextResponse.json({
      period: `Last ${days} days`,
      stats
    })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
      { status: 500 }
    )
  }
}
