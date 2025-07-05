// app/layout.tsx - Complete file with professional metadata

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
 title: 'InvestiScope - Italian Property Investment & EU Grant Advisory',
 description: 'Secure up to €2.25M in EU grants for your Italian property investment. Professional advisory services, grant calculators, and property due diligence.',
 keywords: 'Italian property investment, EU grants, Mini PIA, property survey, investment calculator, Puglia property',
 openGraph: {
   title: 'InvestiScope - Maximize Your Italian Property Investment',
   description: 'Professional tools and advisory services to secure up to €2.25M in EU grants for Italian property investments.',
   url: 'https://investiscope.net',
   siteName: 'InvestiScope',
   images: [
     {
       url: '/images/investiscope-og.jpg', // You'll need to add this image
       width: 1200,
       height: 630,
       alt: 'InvestiScope - Italian Property Investment Advisory',
     }
   ],
   locale: 'en_US',
   type: 'website',
 },
 twitter: {
   card: 'summary_large_image',
   title: 'InvestiScope - Italian Property Investment & EU Grants',
   description: 'Secure up to €2.25M in EU grants for your Italian property investment.',
   images: ['/images/investiscope-og.jpg'],
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
 icons: {
   icon: '/favicon.ico',
   shortcut: '/favicon-16x16.png',
   apple: '/apple-touch-icon.png',
 },
}

export default function RootLayout({
 children,
}: {
 children: React.ReactNode
}) {
 return (
   <html lang="en">
     <body className={inter.className}>
       <Navbar />
       <main className="pt-16 min-h-screen">
         {children}
       </main>
       <Footer />
     </body>
   </html>
 )
}
