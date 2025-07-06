import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InvestiScope - Italian Property Investment Calculator & Grants Guide',
  description: 'Free tools to calculate ROI and discover grants up to €540,000 for Italian property investment. Expert guides on Puglia real estate, Mini PIA grants, and market analysis.',
  keywords: 'italian property investment, puglia real estate, mini pia grants, italy property calculator, puglia property prices, italian real estate grants, ostuni property investment, italy investment calculator',
  authors: [{ name: 'Marie Trulli International' }],
  creator: 'InvestiScope',
  publisher: 'InvestiScope',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://investiscope.net'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'InvestiScope - Italian Property Investment Calculator & Grants Guide',
    description: 'Free tools to calculate ROI and discover grants up to €540,000 for Italian property investment.',
    url: 'https://investiscope.net',
    siteName: 'InvestiScope',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'InvestiScope - Italian Property Investment Tools',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InvestiScope - Italian Property Investment Calculator',
    description: 'Calculate ROI and discover grants up to €540k for Italian property investment',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {/* NAVBAR - APPEARS ON ALL PAGES */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <a href="/" className="text-2xl font-bold text-purple-600 hover:opacity-80 transition-opacity">
                InvestiScope
              </a>
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Home</a>
                <a href="/blog" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Blog</a>
                <a href="/calculator" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Calculator</a>
                <a href="/app.html" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Tools</a>
                <a href="mailto:info@marietrulli.com" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Contact</a>
              </div>
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-gray-700 hover:text-purple-600 focus:outline-none">
                  <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
