import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  db: {
    schema: 'public'
  }
})

// Types for our database tables
export interface Lead {
  id?: string
  email: string
  name?: string
  phone?: string
  source?: string
  created_at?: string
  updated_at?: string
  metadata?: Record<string, any>
}

export interface Analysis {
  id?: string
  lead_id: string
  analysis_type: string
  property_value?: number
  renovation_budget?: number
  grant_amount?: number
  total_investment?: number
  roi_percentage?: number
  analysis_data?: Record<string, any>
  created_at?: string
}

export interface CTAClick {
  id?: string
  session_id: string
  cta_type: string
  cta_location: string
  page_url: string
  timestamp?: string
  user_agent?: string
  metadata?: Record<string, any>
}

export interface PageView {
  id?: string
  session_id: string
  page_url: string
  referrer?: string
  timestamp?: string
  time_on_page?: number
  user_agent?: string
}

// Helper to get or create session ID
export function getSessionId(): string {
  if (typeof window === 'undefined') return ''
  
  let sessionId = localStorage.getItem('investiscope_session_id')
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    localStorage.setItem('investiscope_session_id', sessionId)
  }
  return sessionId
}
