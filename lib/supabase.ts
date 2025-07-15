// lib/supabase.ts
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
