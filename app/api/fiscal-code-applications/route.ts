// app/api/fiscal-code-applications/route.ts

import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function POST(request: Request) {
  try {
    // Handle both FormData (with PDF) and JSON requests
    const contentType = request.headers.get('content-type')
    let data: any
    let pdfFile: File | null = null
    
    if (contentType?.includes('multipart/form-data')) {
      const formData = await request.formData()
      pdfFile = formData.get('pdf') as File
      
      // Extract all other fields from FormData
      data = {}
      formData.forEach((value, key) => {
        if (key !== 'pdf') {
          data[key] = value
        }
      })
    } else {
      // Regular JSON request (backward compatibility)
      data = await request.json()
    }
    
    // Validate required fields
    const requiredFields = [
      'tipoRichiesta',
      'cognome',
      'nome',
      'sesso',
      'dataNascita',
      'comuneNascita',
      'statoEstero',
      'indirizzoEstero',
      'sottoscrittoEmail',
      'sottoscrittoTelefono'
    ]
    
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }
    
    // Map frontend field names to database column names
    const dbData = {
      // Request info
      request_type: data.tipoRichiesta,
      applicant_type: data.tipologiaRichiedente || 'D',
      
      // Personal data
      surname: data.cognome,
      name: data.nome,
      sex: data.sesso,
      birth_date: data.dataNascita,
      birth_municipality: data.comuneNascita,
      birth_province: data.provinciaNascita || null,
      
      // Italian residence (optional)
      residence_type: data.tipologiaVia || null,
      residence_address: data.indirizzo || null,
      residence_number: data.numeroCivico || null,
      residence_municipality: data.comune || null,
      residence_province: data.provincia || null,
      residence_cap: data.cap || null,
      residence_fraction: data.frazione || null,
      
      // Foreign residence
      foreign_country: data.statoEstero,
      foreign_state: data.statoFederato || null,
      foreign_city: data.localitaResidenza || null,
      foreign_address: data.indirizzoEstero,
      foreign_postal_code: data.codicePostale || null,
      
      // Other fiscal codes
      other_fiscal_code_1: data.altroCodiceFiscale1 || null,
      other_fiscal_code_2: data.altroCodiceFiscale2 || null,
      
      // Contact info
      delegator_name: data.sottoscrittoNome,
      delegator_email: data.sottoscrittoEmail,
      delegator_phone: data.sottoscrittoTelefono,
      
      // Meta
      status: 'pending',
      submitted_at: new Date().toISOString(),
      has_signature: !!data.firmaDigitale,
      pdf_uploaded: !!pdfFile
    }
    
    // Save to database
    const { data: application, error } = await supabase
      .from('fiscal_code_applications')
      .insert([dbData])
      .select()
      .single()
    
    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to save application' },
        { status: 500 }
      )
    }
    
    // Upload PDF if provided
    let pdfUrl = null
    if (pdfFile && application.id) {
      const fileName = `fiscal-code-applications/${application.id}/form-aa4-8.pdf`
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('documents')
        .upload(fileName, pdfFile, {
          contentType: 'application/pdf',
          upsert: true
        })
      
      if (uploadError) {
        console.error('PDF upload error:', uploadError)
      } else {
        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('documents')
          .getPublicUrl(fileName)
        
        pdfUrl = publicUrl
        
        // Update record with PDF URL
        await supabase
          .from('fiscal_code_applications')
          .update({ pdf_url: pdfUrl })
          .eq('id', application.id)
      }
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Application submitted successfully',
        id: application.id,
        pdfUrl: pdfUrl
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
