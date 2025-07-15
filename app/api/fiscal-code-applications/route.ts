// app/api/fiscal-code-applications/route.ts
import { createClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  console.log('=== FISCAL CODE API CALLED ===')
  
  try {
    // Parse the request body
    const body = await request.json()
    console.log('Received data:', JSON.stringify(body, null, 2))
    
    // Create Supabase client
    const supabase = createClient()
    console.log('Supabase client created')
    
    // Build the data object for the database
    const applicationData = {
      // Required fields - map from your form to database columns
      request_type: 'attribution',
      name: body.name || body.firstName || '',
      surname: body.surname || body.lastName || '',
      sex: body.sex || (body.gender === 'female' ? 'F' : 'M') || 'M',
      birth_date: body.birthDate || body.dateOfBirth || body.birth_date,
      birth_municipality: body.birthPlace || body.birthCity || body.birth_municipality || '',
      birth_province: body.birthProvince || body.birth_province || '',
      
      // Address fields
      residence_address: body.address || body.residence_address || '',
      residence_number: body.streetNumber || body.residence_number || '',
      residence_municipality: body.city || body.residence_municipality || '',
      residence_province: body.province || body.residence_province || '',
      residence_cap: body.postalCode || body.residence_cap || '',
      
      // Foreign address (if not Italy)
      foreign_country: body.country !== 'Italy' ? body.country : null,
      
      // Contact info
      delegator_email: body.email || body.delegator_email || '',
      delegator_phone: body.phone || body.delegator_phone || '',
      delegator_name: body.delegatorName || `${body.name || ''} ${body.surname || ''}`,
      
      // Other fields
      notes: body.notes || body.purpose || 'Fiscal code application',
      terms_accepted: true,
      privacy_accepted: true,
      status: 'pending',
      payment_status: 'test_mode',
      submitted_at: new Date().toISOString()
    }
    
    console.log('Data to insert:', JSON.stringify(applicationData, null, 2))
    
    // Insert into database
    const { data: savedApplication, error: dbError } = await supabase
      .from('fiscal_code_applications')
      .insert([applicationData])
      .select()
      .single()
    
    if (dbError) {
      console.error('DATABASE ERROR:', dbError)
      return NextResponse.json(
        { 
          error: 'Database error', 
          details: dbError.message,
          code: dbError.code,
          hint: dbError.hint 
        },
        { status: 400 }
      )
    }
    
    console.log('Application saved successfully:', savedApplication.id)
    
    // Return success
    return NextResponse.json({ 
      success: true,
      data: {
        id: savedApplication.id,
        email: savedApplication.delegator_email,
        message: 'Application submitted successfully!'
      }
    })
    
  } catch (error) {
    console.error('UNEXPECTED ERROR:', error)
    return NextResponse.json(
      { 
        error: 'Server error', 
        details: (error as Error).message,
        stack: (error as Error).stack
      },
      { status: 500 }
    )
  }
}

// Test endpoint
export async function GET() {
  console.log('GET request to fiscal code API')
  return NextResponse.json({ 
    status: 'API is working',
    timestamp: new Date().toISOString()
  })
}
