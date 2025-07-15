// app/api/fiscal-code-applications/route.ts
import { createClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const supabase = createClient()
    
    // Insert application into database
    const { data, error } = await supabase
      .from('fiscal_code_applications')
      .insert([{
        // Personal Information
        first_name: body.firstName,
        last_name: body.lastName,
        date_of_birth: body.dateOfBirth,
        place_of_birth: body.placeOfBirth,
        country_of_birth: body.countryOfBirth,
        gender: body.gender,
        
        // Contact Information
        email: body.email,
        phone: body.phone,
        
        // Current Address
        current_address: body.currentAddress,
        current_city: body.currentCity,
        current_country: body.currentCountry,
        current_postal_code: body.currentPostalCode,
        
        // Italian Address (if applicable)
        italian_address: body.italianAddress,
        italian_city: body.italianCity,
        italian_province: body.italianProvince,
        italian_postal_code: body.italianPostalCode,
        
        // Document Information
        passport_number: body.passportNumber,
        passport_country: body.passportCountry,
        
        // Application Details
        purpose: body.purpose,
        urgency: body.urgency,
        additional_notes: body.additionalNotes,
        
        // Meta
        status: 'pending',
        payment_status: 'pending',
        created_at: new Date().toISOString()
      }])
      .select()
      .single()
    
    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 400 }
      )
    }
    
    // Send email notification
    try {
      // EmailJS implementation
      const emailData = {
        to_email: 'info@investiscope.net',
        from_email: body.email,
        from_name: `${body.firstName} ${body.lastName}`,
        subject: 'New Fiscal Code Application',
        message: `
          New fiscal code application received:
          
          Name: ${body.firstName} ${body.lastName}
          Email: ${body.email}
          Phone: ${body.phone}
          Purpose: ${body.purpose}
          Urgency: ${body.urgency}
          
          Application ID: ${data.id}
        `
      }
      
      // Send confirmation email to applicant
      const confirmationEmail = {
        to_email: body.email,
        subject: 'Fiscal Code Application Received',
        message: `
          Dear ${body.firstName},
          
          We have received your fiscal code application. 
          
          Application ID: ${data.id}
          
          Next steps:
          1. Complete payment of €99
          2. We will process your application within 2-3 business days
          3. You will receive your fiscal code via email
          
          If you have any questions, please contact us at info@investiscope.net
          
          Best regards,
          InvestiScope Team
        `
      }
      
      // Add your EmailJS implementation here
      
    } catch (emailError) {
      console.error('Email error:', emailError)
      // Don't fail the request if email fails
    }
    
    return NextResponse.json({ 
      success: true, 
      data,
      message: 'Application submitted successfully'
    })
    
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  // Optional: Add admin endpoint to retrieve applications
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 })
}
