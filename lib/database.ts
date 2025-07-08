import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types
export interface Lead {
  id?: string
  email: string
  name?: string
  phone?: string
  investment_range?: string
  property_type?: string
  timeline?: string
  message?: string
  source: string
  created_at?: string
  session_id?: string
}

export interface Analysis {
  id?: string
  lead_id?: string
  property_price: number
  renovation_cost: number
  grant_amount: number
  grant_percentage: number
  total_investment: number
  net_investment: number
  created_at?: string
}

export interface PageView {
  id?: string
  page_path: string
  page_title: string
  referrer?: string
  session_id: string
  created_at?: string
}

export interface CTAClick {
  id?: string
  button_type: string
  button_text: string
  page_path: string
  session_id: string
  created_at?: string
}

// Session management
export const getSessionId = (): string => {
  if (typeof window === 'undefined') return ''
  
  let sessionId = sessionStorage.getItem('investiscope_session')
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    sessionStorage.setItem('investiscope_session', sessionId)
  }
  return sessionId
}

// Lead management functions
export const createLead = async (leadData: Omit<Lead, 'id' | 'created_at' | 'session_id'>): Promise<Lead | null> => {
  try {
    const session_id = getSessionId()
    const { data, error } = await supabase
      .from('leads')
      .insert([{ ...leadData, session_id }])
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error creating lead:', error)
    return null
  }
}

export const updateLead = async (id: string, updates: Partial<Lead>): Promise<Lead | null> => {
  try {
    const { data, error } = await supabase
      .from('leads')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error updating lead:', error)
    return null
  }
}

// Analysis functions
export const saveAnalysis = async (analysisData: Omit<Analysis, 'id' | 'created_at'>): Promise<Analysis | null> => {
  try {
    const { data, error } = await supabase
      .from('analyses')
      .insert([analysisData])
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error saving analysis:', error)
    return null
  }
}

// Analytics functions
export const trackPageView = async (pagePath: string, pageTitle: string): Promise<void> => {
  try {
    const session_id = getSessionId()
    const referrer = document.referrer || null

    await supabase
      .from('page_views')
      .insert([{
        page_path: pagePath,
        page_title: pageTitle,
        referrer,
        session_id
      }])
  } catch (error) {
    console.error('Error tracking page view:', error)
  }
}

export const trackClick = async (
  buttonType: string,
  buttonText: string,
  pagePath: string = window.location.pathname
): Promise<void> => {
  try {
    const session_id = getSessionId()

    await supabase
      .from('cta_clicks')
      .insert([{
        button_type: buttonType,
        button_text: buttonText,
        page_path: pagePath,
        session_id
      }])
  } catch (error) {
    console.error('Error tracking click:', error)
  }
}

// Utility function to check if user has already submitted a form
export const hasUserSubmittedForm = async (email: string): Promise<boolean> => {
  try {
    const { data, error } = await supabase
      .from('leads')
      .select('id')
      .eq('email', email)
      .single()

    return !!data && !error
  } catch {
    return false
  }
}
