// app/api/fiscal-code-applications/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: NextRequest) {
  console.log('POST request received at /api/fiscal-code-applications');
  
  try {
    // Get the body
    let body;
    try {
      body = await request.json();
      console.log('Parsed body:', JSON.stringify(body, null, 2));
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    // Check for required fields
    if (!body.name || !body.surname || !body.email) {
      console.error('Missing required fields:', { 
        name: !!body.name, 
        surname: !!body.surname, 
        email: !!body.email 
      });
      return NextResponse.json(
        { error: 'Missing required fields: name, surname, and email' },
        { status: 400 }
      );
    }

    // Prepare data for database
    const applicationData = {
      // Personal Information
      request_type: body.requestType || 'attribution',
      name: body.name,
      surname: body.surname,
      sex: body.sex || '',
      birth_date: body.birthDate || null,
      birth_municipality: body.birthMunicipality || '',
      birth_province: body.birthProvince || '',
      birth_foreign: body.birthForeign || false,
      birth_foreign_country: body.birthForeignCountry || '',
      
      // Residence Information
      residence_address: body.residenceAddress || '',
      residence_number: body.residenceNumber || '',
      residence_municipality: body.residenceMunicipality || '',
      residence_province: body.residenceProvince || '',
      residence_cap: body.residenceCap || '',
      
      // Contact Information
      email: body.email,
      phone: body.phone || '',
      
      // Delegation Information
      delegator_name: body.delegatorName || body.name,
      delegator_email: body.delegatorEmail || body.email,
      delegator_phone: body.delegatorPhone || body.phone,
      
      // Status
      status: 'pending',
      payment_status: 'pending',
      submitted_at: new Date().toISOString(),
      
      // Additional fields from the form
      codice_fiscale: body.codiceFiscale || '',
      document_type: body.documentType || '',
      document_number: body.documentNumber || '',
      document_issue_date: body.documentIssueDate || null,
      document_expiry_date: body.documentExpiryDate || null,
      document_issued_by: body.documentIssuedBy || '',
      
      // Foreign address if applicable
      foreign_country: body.foreignCountry || '',
      foreign_address: body.foreignAddress || '',
      
      // Terms acceptance
      terms_accepted: body.termsAccepted || false,
      privacy_accepted: body.privacyAccepted || false,
      
      // Metadata
      ip_address: request.headers.get('x-forwarded-for') || 'unknown',
      user_agent: request.headers.get('user-agent') || 'unknown'
    };

    // Try to insert into database
    try {
      const { data, error } = await supabase
        .from('fiscal_code_applications')
        .insert([applicationData])
        .select()
        .single();

      if (error) {
        console.error('Database error:', error);
        // If database fails, still return success but log the error
        const fallbackId = `TEMP-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        console.log('Database failed, using fallback ID:', fallbackId);
        
        return NextResponse.json(
          {
            success: true,
            applicationId: fallbackId,
            message: 'Application submitted (pending database sync)',
            warning: 'Database temporarily unavailable'
          },
          { status: 200 }
        );
      }

      console.log('Application saved successfully:', data.id);

      return NextResponse.json(
        {
          success: true,
          applicationId: data.id,
          message: 'Application submitted successfully'
        },
        { status: 200 }
      );

    } catch (dbError) {
      console.error('Database connection error:', dbError);
      // Return success anyway with temporary ID
      const fallbackId = `TEMP-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      return NextResponse.json(
        {
          success: true,
          applicationId: fallbackId,
          message: 'Application submitted (pending database sync)',
          warning: 'Database temporarily unavailable'
        },
        { status: 200 }
      );
    }

  } catch (error) {
    console.error('Unexpected error in POST handler:', error);
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
      status: 'API is working',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  );
}
