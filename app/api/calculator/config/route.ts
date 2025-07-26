export const dynamic = 'force-static'

export async function GET() {
  return Response.json({
    calculatorVersion: '2.0',
    lastUpdated: '2024-07-15',
    maxGrant: 2250000,
    grantPercentages: {
      tourism: 0.75,
      restoration: 0.50,
      sustainability: 0.65
    },
    eligibleRegions: ['Puglia', 'Calabria', 'Sicily', 'Campania', 'Basilicata'],
    minimumInvestment: 150000,
    supportedPropertyTypes: [
      'Villa',
      'Palazzo',
      'Masseria',
      'Trullo',
      'Commercial Building',
      'Historic Property'
    ]
  })
}
