// middleware.ts (at root level, not in app folder)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'it', 'ar', 'zh', 'de', 'fr']
const defaultLocale = 'en'

// Country to language mapping
const countryToLocale: Record<string, string> = {
  // Middle East - Arabic
  'SA': 'ar', // Saudi Arabia
  'AE': 'ar', // UAE
  'QA': 'ar', // Qatar
  'KW': 'ar', // Kuwait
  'BH': 'ar', // Bahrain
  'OM': 'ar', // Oman
  'JO': 'ar', // Jordan
  'LB': 'ar', // Lebanon
  'EG': 'ar', // Egypt
  'MA': 'ar', // Morocco
  'TN': 'ar', // Tunisia
  'DZ': 'ar', // Algeria
  'IQ': 'ar', // Iraq
  'SY': 'ar', // Syria
  'YE': 'ar', // Yemen
  'LY': 'ar', // Libya
  
  // China and Chinese-speaking regions
  'CN': 'zh', // China
  'HK': 'zh', // Hong Kong
  'MO': 'zh', // Macau
  'TW': 'zh', // Taiwan
  'SG': 'zh', // Singapore (has large Chinese population)
  
  // Europe
  'IT': 'it', // Italy
  'DE': 'de', // Germany
  'AT': 'de', // Austria
  'CH': 'de', // Switzerland (German part)
  'FR': 'fr', // France
  'BE': 'fr', // Belgium (French part)
  
  // Default to English for all others
}

function getLocale(request: NextRequest): string {
  // Check if user has a saved preference in cookie
  const cookieLocale = request.cookies.get('locale')?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  // Get country from Cloudflare/Vercel headers
  const country = request.geo?.country || request.headers.get('x-vercel-ip-country') || ''
  
  // Map country to language
  const mappedLocale = countryToLocale[country.toUpperCase()]
  if (mappedLocale) {
    return mappedLocale
  }

  // Fallback to Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || ''
  for (const locale of locales) {
    if (acceptLanguage.toLowerCase().includes(locale)) {
      return locale
    }
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip middleware for static files, api routes, etc.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') // has file extension
  ) {
    return NextResponse.next()
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (!pathnameHasLocale) {
    // Detect user's locale
    const locale = getLocale(request)
    
    // Redirect to localized path
    const newUrl = new URL(`/${locale}${pathname}`, request.url)
    
    // Preserve query parameters
    newUrl.search = request.nextUrl.search
    
    const response = NextResponse.redirect(newUrl)
    
    // Save locale preference in cookie
    response.cookies.set('locale', locale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production'
    })
    
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files and api
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api).*)',
  ],
}
