// app/api/fiscal-code-applications/route.ts

import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Validate required fields
    const requiredFields = [
      'requestType',
      'surname',
      'name',
      'sex',
      'birthDate',
      'birthMunicipality',
      'foreignCountry',
      'foreignAddress',
      'delegatorEmail',
      'delegatorPhone'
    ]
    
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }
    
    // Save to database
    const { data: application, error } = await supabase
      .from('fiscal_code_applications')
      .insert([{
        request_type: data.requestType,
        death_date: data.deathDate,
        fiscal_code: data.fiscalCode,
        surname: data.surname,
        name: data.name,
        sex: data.sex,
        birth_date: data.birthDate,
        birth_municipality: data.birthMunicipality,
        birth_province: data.birthProvince,
        residence_type: data.residenceType,
        residence_address: data.residenceAddress,
        residence_number: data.residenceNumber,
        residence_municipality: data.residenceMunicipality,
        residence_province: data.residenceProvince,
        residence_cap: data.residenceCAP,
        residence_fraction: data.residenceFraction,
        foreign_country: data.foreignCountry,
        foreign_state: data.foreignState,
        foreign_address: data.foreignAddress,
        foreign_postal_code: data.foreignPostalCode,
        other_fiscal_code_1: data.otherFiscalCode1,
        other_fiscal_code_2: data.otherFiscalCode2,
        delegator_name: data.delegatorName,
        delegator_birth_place: data.delegatorBirthPlace,
        delegator_birth_date: data.delegatorBirthDate,
        delegator_email: data.delegatorEmail,
        delegator_phone: data.delegatorPhone,
        terms_accepted: data.termsAccepted,
        privacy_accepted: data.privacyAccepted,
        delegation_accepted: data.delegationAccepted,
        status: 'pending',
        submitted_at: data.submittedAt
      }])
      .select()
      .single()
    
    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to save application' },
        { status: 500 }
      )
    }
    
    // Send notification email using EmailJS
    if (typeof window !== 'undefined' && window.emailjs) {
      try {
        await window.emailjs.send(
          'service_w6tghqr',
          'template_fiscal_code', // You'll need to create this template
          {
            to_email: 'info@investiscope.net',
            applicant_name: `${data.name} ${data.surname}`,
            applicant_email: data.delegatorEmail,
            applicant_phone: data.delegatorPhone,
            request_type: data.requestType,
            birth_date: data.birthDate,
            country: data.foreignCountry,
            application_id: application.id
          }
        )
      } catch (emailError) {
        console.error('Email notification failed:', emailError)
        // Don't fail the request if email fails
      }
    }
    
    // Return success with application ID for payment processing
    return NextResponse.json({
      success: true,
      applicationId: application.id,
      paymentUrl: `https://paypal.me/marietrulliint/99EUR?country.x=ES&locale.x=en_US`
    })
    
  } catch (error) {
    console.error('Application submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    // Get application status by ID
    const { searchParams } = new URL(request.url)
    const applicationId = searchParams.get('id')
    
    if (!applicationId) {
      return NextResponse.json(
        { error: 'Application ID required' },
        { status: 400 }
      )
    }
    
    const { data, error } = await supabase
      .from('fiscal_code_applications')
      .select('*')
      .eq('id', applicationId)
      .single()
    
    if (error) {
      return NextResponse.json(
        { error: 'Application not found' },
        { status: 404 }
      )
    }
    
    // Return sanitized data
    return NextResponse.json({
      id: data.id,
      status: data.status,
      submittedAt: data.submitted_at,
      processedAt: data.processed_at,
      fiscalCode: data.fiscal_code
    })
    
  } catch (error) {
    console.error('Error fetching application:', error)
    return NextResponse.json(
      { error: 'Failed to fetch application' },
      { status: 500 }
    )
  }
}
