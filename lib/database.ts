import { supabase, getSessionId, type Lead, type Analysis, type CTAClick, type PageView } from './supabase'

// Lead Management
export async function createLead(leadData: Omit<Lead, 'id' | 'created_at' | 'updated_at'>): Promise<Lead | null> {
  try {
    // Check if lead already exists
    const { data: existingLead } = await supabase
      .from('leads')
      .select('*')
      .eq('email', leadData.email)
      .single()

    if (existingLead) {
      // Update existing lead
      const { data, error } = await supabase
        .from('leads')
        .update({
          ...leadData,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingLead.id)
        .select()
        .single()

      if (error) throw error
      return data
    }

    // Create new lead
    const { data, error } = await supabase
      .from('leads')
      .insert([leadData])
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error creating/updating lead:', error)
    return null
  }
}

export async function getLeadByEmail(email: string): Promise<Lead | null> {
  try {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .eq('email', email)
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching lead:', error)
    return null
  }
}

// Analysis Management
export async function saveAnalysis(analysisData: Omit<Analysis, 'id' | 'created_at'>): Promise<Analysis | null> {
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

// CTA Click Tracking
export async function trackCTAClick(
  ctaType: string,
  ctaLocation: string,
  metadata?: Record<string, any>
): Promise<void> {
  try {
    const sessionId = getSessionId()
    const clickData: Omit<CTAClick, 'id' | 'timestamp'> = {
      session_id: sessionId,
      cta_type: ctaType,
      cta_location: ctaLocation,
      page_url: window.location.href,
      user_agent: navigator.userAgent,
      metadata: metadata || {}
    }

    const { error } = await supabase
      .from('cta_clicks')
      .insert([clickData])

    if (error) throw error

    // Also track with Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        cta_type: ctaType,
        cta_location: ctaLocation,
        page_location: window.location.href
      })
    }
  } catch (error) {
    console.error('Error tracking CTA click:', error)
    // Don't throw - we don't want tracking errors to break the user experience
  }
}

// Page View Tracking
export async function trackPageView(
  pageUrl?: string,
  referrer?: string
): Promise<void> {
  try {
    const sessionId = getSessionId()
    const viewData: Omit<PageView, 'id' | 'timestamp'> = {
      session_id: sessionId,
      page_url: pageUrl || window.location.href,
      referrer: referrer || document.referrer,
      user_agent: navigator.userAgent
    }

    const { error } = await supabase
      .from('page_views')
      .insert([viewData])

    if (error) throw error

    // Also track with Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_location: pageUrl || window.location.href,
        page_referrer: referrer || document.referrer
      })
    }
  } catch (error) {
    console.error('Error tracking page view:', error)
    // Don't throw - we don't want tracking errors to break the user experience
  }
}

// Update time on page when user leaves
export async function updateTimeOnPage(pageUrl: string, timeOnPage: number): Promise<void> {
  try {
    const sessionId = getSessionId()
    
    const { error } = await supabase
      .from('page_views')
      .update({ time_on_page: timeOnPage })
      .eq('session_id', sessionId)
      .eq('page_url', pageUrl)
      .order('timestamp', { ascending: false })
      .limit(1)

    if (error) throw error
  } catch (error) {
    console.error('Error updating time on page:', error)
  }
}

// Helper function to check if Supabase is properly configured
export function isSupabaseConfigured(): boolean {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
}
