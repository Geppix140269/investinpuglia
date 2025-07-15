// app/api/fiscal-code-applications/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import emailjs from '@emailjs/browser';

// Initialize Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize EmailJS
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.surname || !body.email) {
      return NextResponse.json(
        { error: 'Missing required fields: name, surname, and email' },
        { status: 400 }
      );
    }

    // Prepare data for database
    const applicationData = {
      request_type: 'attribution',
      name: body.name,
      surname: body.surname,
      sex: body.gender === 'male' ? 'M' : 'F',
      birth_date: body.birthDate || null,
      birth_municipality: body.birthCity || '',
      birth_province: body.birthProvince || '',
      birth_foreign: body.birthCountry && body.birthCountry !== 'Italy',
      birth_foreign_country: body.birthCountry !== 'Italy' ? body.birthCountry : '',
      
      residence_address: body.address || '',
      residence_number: body.streetNumber || '',
      residence_municipality: body.city || '',
      residence_province: body.province || '',
      residence_cap: body.postalCode || '',
      
      email: body.email,
      phone: body.phone || '',
      
      delegator_name: `${body.name} ${body.surname}`,
      delegator_email: body.email,
      delegator_phone: body.phone || '',
      
      status: 'pending',
      payment_status: 'test_mode',
      submitted_at: new Date().toISOString(),
      
      codice_fiscale: '',
      document_type: '',
      document_number: '',
      document_issue_date: null,
      document_expiry_date: null,
      document_issued_by: '',
      
      foreign_country: body.country !== 'Italy' ? body.country : '',
      foreign_address: body.country !== 'Italy' ? `${body.address} ${body.streetNumber}, ${body.city} ${body.postalCode}` : '',
      
      terms_accepted: true,
      privacy_accepted: true,
      
      notes: body.notes || '',
      purpose: body.purpose || 'property_investment',
      
      ip_address: request.headers.get('x-forwarded-for') || 'unknown',
      user_agent: request.headers.get('user-agent') || 'unknown'
    };

    // Insert into database
    const { data, error } = await supabase
      .from('fiscal_code_applications')
      .insert([applicationData])
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to save application', details: error.message },
        { status: 500 }
      );
    }

    const applicationId = data.id;

    // Send emails
    try {
      // Email to agency/admin
      const agencyEmailParams = {
        to_email: 'admin@investiscope.net',
        application_id: applicationId,
        applicant_name: `${body.name} ${body.surname}`,
        applicant_email: body.email,
        birth_date: body.birthDate || 'Not provided',
        birth_place: body.birthCity || 'Not provided',
        phone: body.phone || 'Not provided',
        purpose: body.purpose || 'property_investment',
        submitted_at: new Date().toLocaleString('it-IT', { timeZone: 'Europe/Rome' })
      };

      // Email to user
      const userEmailParams = {
        to_email: body.email,
        to_name: body.name,
        application_id: applicationId,
        full_name: `${body.name} ${body.surname}`,
        submission_date: new Date().toLocaleDateString('en-US')
      };

      // Send both emails
      await Promise.all([
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_FISCAL_AGENCY_TEMPLATE_ID!,
          agencyEmailParams
        ),
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_FISCAL_USER_TEMPLATE_ID!,
          userEmailParams
        )
      ]);

      console.log('Emails sent successfully');
    } catch (emailError) {
      console.error('Email error (non-blocking):', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      {
        success: true,
        applicationId: applicationId,
        message: 'Application submitted successfully'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { 
      status: 'Fiscal Code API is working',
      timestamp: new Date().toISOString(),
      mode: 'production'
    },
    { status: 200 }
  );
}
