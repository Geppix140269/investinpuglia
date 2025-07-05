// app/layout.tsx - SEO-optimized metadata

import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://investiscope.net'),
  title: {
    default: 'Property Investment in Puglia - EU Grants up to €2.25M | InvestiScope',
    template: '%s | Property Investment Puglia - InvestiScope'
  },
  description: 'Expert property investment advisory in Puglia, Italy. Secure up to €2.25M in EU grants. Free grant calculator, property surveys, and professional guidance for foreign investors.',
  keywords: [
    'property investment puglia',
    'puglia real estate investment',
    'invest in puglia property',
    'puglia property grants',
    'EU grants puglia property',
    'foreign property investment italy',
    'puglia real estate advisor',
    'mini pia puglia',
    'property investment apulia',
    'buy property puglia grants',
    'puglia property market',
    'italian property investment grants',
    'investiscope',
    'giuseppe funaro property advisor'
  ],
  authors: [{ name: 'InvestiScope' }],
  creator: 'InvestiScope',
  publisher: 'InvestiScope',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Property Investment in Puglia - Secure €2.25M in EU Grants',
    description: 'Expert advisory for property investment in Puglia. Free grant calculator, professional surveys, and proven strategies for foreign investors.',
    url: 'https://investiscope.net',
    siteName: 'InvestiScope - Puglia Property Investment',
    images: [
      {
        url: '/images/puglia-property-investment.jpg',
        width: 1200,
        height: 630,
        alt: 'Property Investment Opportunities in Puglia, Italy',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Investment in Puglia - EU Grants Available',
    description: 'Secure up to €2.25M in grants for your Puglia property investment. Expert advisory services.',
    images: ['/images/puglia-property-investment.jpg'],
  },
  alternates: {
    canonical: 'https://investiscope.net',
    languages: {
      'en-US': 'https://investiscope.net',
      'it-IT': 'https://investiscope.net/it',
    },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://investiscope.net" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "InvestiScope - Property Investment Puglia",
              "description": "Expert property investment advisory in Puglia, Italy. Secure EU grants up to €2.25M.",
              "url": "https://investiscope.net",
              "logo": "https://investiscope.net/images/logo.png",
              "image": "https://investiscope.net/images/puglia-property-investment.jpg",
              "priceRange": "€€€",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Puglia",
                "addressCountry": "IT"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.7928",
                "longitude": "17.1011"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Puglia, Italy"
              },
              "serviceType": [
                "Property Investment Advisory",
                "EU Grant Consultation",
                "Real Estate Due Diligence",
                "Investment Property Analysis"
              ],
              "founder": {
                "@type": "Person",
                "name": "Giuseppe Funaro",
                "jobTitle": "Senior Property Investment Advisor"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "47"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfairDisplay.variable} ${inter.className}`}>
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
