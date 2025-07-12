// sanity-studio/plugins/calculator-dashboard/index.tsx

import React, { useEffect, useState } from 'react'
import { Card, Text, Stack, Spinner, Button } from '@sanity/ui'
import { DashboardWidget } from '@sanity/dashboard'
import { sanityClient } from 'sanity'

interface CalculatorStats {
  total: number
  withEmail: number
  reportsDownloaded: number
  avgGrantAmount: number
  conversionRate: number
}

export function CalculatorDashboardWidget() {
  const [stats, setStats] = useState<CalculatorStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeframe, setTimeframe] = useState(30)

  useEffect(() => {
    fetchStats()
  }, [timeframe])

  const fetchStats = async () => {
    setLoading(true)
    try {
      const startDate = new Date()
      startDate.setDate(startDate.getDate() - timeframe)

      const query = `{
        "total": count(*[_type == "calculationResult" && calculatedAt >= $startDate]),
        "withEmail": count(*[_type == "calculationResult" && calculatedAt >= $startDate && defined(userEmail)]),
        "reportsDownloaded": count(*[_type == "calculationResult" && calculatedAt >= $startDate && reportDownloaded == true]),
        "avgGrantAmount": math::avg(*[_type == "calculationResult" && calculatedAt >= $startDate].results.grantAmount)
      }`

      const result = await sanityClient.fetch(query, { startDate: startDate.toISOString() })
      
      setStats({
        ...result,
        conversionRate: result.total > 0 ? (result.withEmail / result.total) * 100 : 0
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <DashboardWidget header="Calculator Analytics">
        <Card padding={4}>
          <Spinner />
        </Card>
      </DashboardWidget>
    )
  }

  return (
    <DashboardWidget header="Calculator Analytics">
      <Card padding={4}>
        <Stack space={4}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            <Button
              mode={timeframe === 7 ? 'default' : 'ghost'}
              onClick={() => setTimeframe(7)}
              text="7 days"
              fontSize={1}
            />
            <Button
              mode={timeframe === 30 ? 'default' : 'ghost'}
              onClick={() => setTimeframe(30)}
              text="30 days"
              fontSize={1}
            />
            <Button
              mode={timeframe === 90 ? 'default' : 'ghost'}
              onClick={() => setTimeframe(90)}
              text="90 days"
              fontSize={1}
            />
          </div>

          <Card padding={3} radius={2} shadow={1}>
            <Text size={1} muted>Total Calculations</Text>
            <Text size={4} weight="bold">{stats?.total || 0}</Text>
          </Card>

          <Card padding={3} radius={2} shadow={1}>
            <Text size={1} muted>Email Conversion Rate</Text>
            <Text size={4} weight="bold">{stats?.conversionRate.toFixed(1)}%</Text>
            <Text size={1} muted>{stats?.withEmail || 0} with email</Text>
          </Card>

          <Card padding={3} radius={2} shadow={1}>
            <Text size={1} muted>Reports Downloaded</Text>
            <Text size={4} weight="bold">{stats?.reportsDownloaded || 0}</Text>
          </Card>

          <Card padding={3} radius={2} shadow={1}>
            <Text size={1} muted>Average Grant Amount</Text>
            <Text size={4} weight="bold">
              €{stats?.avgGrantAmount ? stats.avgGrantAmount.toLocaleString('it-IT', { maximumFractionDigits: 0 }) : '0'}
            </Text>
          </Card>
        </Stack>
      </Card>
    </DashboardWidget>
  )
}

// sanity-studio/dashboardConfig.ts

import { DashboardConfig } from '@sanity/dashboard'
import { CalculatorDashboardWidget } from './plugins/calculator-dashboard'

export const dashboardConfig: DashboardConfig = {
  widgets: [
    {
      name: 'calculator-analytics',
      component: CalculatorDashboardWidget,
      layout: { width: 'medium', height: 'auto' }
    },
    // Add more widgets as needed
  ]
}

// sanity-studio/sanity.config.ts - Update to include dashboard

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { dashboardTool } from '@sanity/dashboard'
import { schemaTypes } from './schemaTypes'
import { dashboardConfig } from './dashboardConfig'

export default defineConfig({
  name: 'default',
  title: 'InvestiScope',
  projectId: 'trdbxmjo',
  dataset: 'production',
  plugins: [
    structureTool(),
    visionTool(),
    dashboardTool(dashboardConfig)
  ],
  schema: {
    types: schemaTypes,
  },
})
