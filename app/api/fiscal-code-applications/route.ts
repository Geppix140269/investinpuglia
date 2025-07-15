// app/api/fiscal-code-applications/route.js
// Simple API route that uses EXISTING Supabase table and EmailJS templates

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase with type assertions
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Check if environment variables are defined
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(request) {
  try {
    // Get the form data
    const body = await request.json();
    
    // Simple validation - just check if fields exist
    const requiredFields = [
      'name', 'surname', 'birth_date', 'birth_place', 
      'birth_country', 'gender', 'email', 'phone', 
      'passport_number', 'purpose'
    ];
    
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Insert into YOUR EXISTING fiscal_code_applications table
    const { data, error } = await supabase
      .from('fiscal_code_applications')
      .insert([{
        name: body.name,
        surname: body.surname,
        birth_date: body.birth_date,
        birth_place: body.birth_place,
        birth_country: body.birth_country,
        gender: body.gender,
        email: body.email,
        phone: body.phone,
        passport_number: body.passport_number,
        current_address: body.current_address || '',
        purpose: body.purpose,
        urgency: body.urgency || 'standard',
        status: 'pending',
        created_at: new Date().toISOString()
      }])
      .select()
      .single();
    
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Database error' },
        { status: 500 }
      );
    }
    
    // Generate simple reference number
    const reference = `FC${String(data.id).padStart(6, '0')}`;
    
    // Return success with reference
    return NextResponse.json({
      success: true,
      id: data.id,
      reference: reference
    });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to check application status
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email required' },
        { status: 400 }
      );
    }
    
    const { data, error } = await supabase
      .from('fiscal_code_applications')
      .select('*')
      .eq('email', email)
      .order('created_at', { ascending: false });
    
    if (error) {
      return NextResponse.json(
        { error: 'Database error' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      success: true,
      applications: data || []
    });
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
