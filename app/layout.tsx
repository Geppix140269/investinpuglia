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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
