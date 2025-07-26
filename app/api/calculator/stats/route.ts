export const dynamic = 'force-static'

export async function GET() {
  return Response.json({
    totalCalculations: 15000,
    averageGrantAmount: 875000,
    totalGrantsCalculated: 13125000000,
    topPropertyTypes: [
      { type: 'Masseria', percentage: 35 },
      { type: 'Villa', percentage: 28 },
      { type: 'Palazzo', percentage: 20 },
      { type: 'Trullo', percentage: 12 },
      { type: 'Other', percentage: 5 }
    ],
    lastUpdated: new Date().toISOString()
  })
}
