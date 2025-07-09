// app/api/lead-capture/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Log the lead for now (you can add database logic later)
    console.log('New lead captured:', {
      name: body.name,
      email: body.email,
      source: body.source,
      timestamp: new Date().toISOString()
    })
    
    // TODO: Add your database save logic here
    // Example: await saveToDatabase(body)
    // Or send to Google Sheets, Airtable, etc.
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Lead capture error:', error)
    return NextResponse.json(
      { error: 'Failed to save lead' }, 
      { status: 500 }
    )
  }
}