import { createClient as createSupabaseClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.Supabase_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.Supabase_API || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables')
}

// Export the createClient function
export function createClient() {
  return createSupabaseClient(supabaseUrl, supabaseAnonKey)
}

// Export a singleton instance for convenience
export const supabase = createClient()

// Database helper functions
export async function trackCTAClick(
  variant: string,
  location: string,
  metadata?: Record<string, any>
) {
  try {
    const { error } = await supabase
      .from('cta_clicks')
      .insert([{
        variant,
        location,
        metadata,
        user_agent: typeof window !== 'undefined' ? window.navigator.userAgent : null
      }])
    
    if (error) throw error
  } catch (error) {
    console.error('Error tracking CTA click:', error)
  }
}

export async function trackPageView(
  page_path: string,
  metadata?: Record<string, any>
) {
  try {
    const { error } = await supabase
      .from('page_views')
      .insert([{
        page_path,
        referrer: typeof document !== 'undefined' ? document.referrer : null,
        user_agent: typeof window !== 'undefined' ? window.navigator.userAgent : null,
        metadata
      }])
    
    if (error) throw error
  } catch (error) {
    console.error('Error tracking page view:', error)
  }
}

/**
 * Uploads a PDF file to the 'contracts' bucket and returns the public URL.
 * @param file - The File object to upload
 * @param buyerName - Used to generate a unique filename
 * @returns Public URL string or null on failure
 */
export async function uploadContractPDF(file: File, buyerName: string): Promise<string | null> {
  const timestamp = Date.now();
  const sanitizedBuyer = buyerName.trim().replace(/\s+/g, '_').replace(/[^\w\-]/g, '');
  const fileName = `contract_${sanitizedBuyer}_${timestamp}.pdf`;

  const { error: uploadError } = await supabase.storage
    .from('contracts')
    .upload(fileName, file, {
      contentType: 'application/pdf',
      cacheControl: '3600',
      upsert: false,
    });

  if (uploadError) {
    console.error('❌ Upload error:', uploadError.message);
    return null;
  }

  const { data: urlData } = supabase.storage
    .from('contracts')
    .getPublicUrl(fileName);

  return urlData?.publicUrl || null;
}
