// app/api/fiscal-code-applications/route.ts
import { createClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const supabase = createClient()
    
    // Map form fields to your actual database columns
    const applicationData = {
      // Request type (new application, correction, etc.)
      request_type: body.requestType || 'new_application',
      
      // Personal Information
      name: body.firstName,
      surname: body.lastName,
      sex: body.gender?.charAt(0).toUpperCase() || 'M', // M/F
      birth_date: body.dateOfBirth,
      birth_municipality: body.placeOfBirth,
      birth_province: body.birthProvince || '', // 2-letter province code
      
      // Current Residence
      residence_type: body.residenceType || 'current',
      residence_address: body.currentAddress,
      residence_number: body.houseNumber || '',
      residence_municipality: body.currentCity,
      residence_province: body.currentProvince || '',
      residence_cap: body.currentPostalCode,
      residence_fraction: body.currentFraction || null,
      
      // Foreign Address (if not in Italy)
      foreign_country: body.currentCountry !== 'Italy' ? body.currentCountry : null,
      foreign_state: body.foreignState || null,
      foreign_address: body.foreignAddress || null,
      foreign_postal_code: body.foreignPostalCode || null,
      
      // Contact Information
      delegator_email: body.email,
      delegator_phone: body.phone,
      delegator_name: `${body.firstName} ${body.lastName}`,
      
      // Document/Application details
      notes: body.additionalNotes || body.purpose,
      
      // Legal checkboxes
      terms_accepted: true,
      privacy_accepted: true,
      delegation_accepted: body.isDelegating || false,
      
      // Status
      status: 'pending',
      payment_status: 'pending',
      submitted_at: new Date().toISOString()
    }
    
    // Insert into database
    const { data, error } = await supabase
      .from('fiscal_code_applications')
      .insert([applicationData])
      .select()
      .single()
    
    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to submit application: ' + error.message },
        { status: 400 }
      )
    }
    
    // Send email notifications
    try {
      // Admin notification
      await sendAdminNotification({
        applicationId: data.id,
        name: `${data.name} ${data.surname}`,
        email: data.delegator_email,
        phone: data.delegator_phone
      })
      
      // Customer confirmation
      await sendCustomerConfirmation({
        email: data.delegator_email,
        name: data.name,
        applicationId: data.id
      })
    } catch (emailError) {
      console.error('Email error:', emailError)
      // Don't fail the request if email fails
    }
    
    return NextResponse.json({ 
      success: true, 
      data: {
        id: data.id,
        status: data.status,
        payment_status: data.payment_status
      },
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

// Helper functions for email
async function sendAdminNotification(data: any) {
  // Implement EmailJS or your email service
  console.log('Sending admin notification:', data)
}

async function sendCustomerConfirmation(data: any) {
  // Implement EmailJS or your email service
  console.log('Sending customer confirmation:', data)
}
