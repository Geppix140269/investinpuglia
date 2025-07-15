// app/api/fiscal-code-applications/route.ts
import { NextRequest, NextResponse } from 'next/server';

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

    // For now, let's skip the database and just return success
    // This will help us identify if the issue is with Supabase
    const applicationId = `APP-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    console.log('Application processed successfully:', applicationId);

    // Return success
    return NextResponse.json(
      {
        success: true,
        applicationId: applicationId,
        message: 'Application submitted successfully'
      },
      { status: 200 }
    );

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
