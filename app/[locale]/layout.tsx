// app/[locale]/layout.tsx
import { Inter } from 'next/font/google'
import '../globals.css'
import { i18n, type Locale, languages } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: Locale }
}

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale)
  
  return {
    title: {
      default: 'InvestinPuglia - Real Estate Investment in Puglia',
      template: '%s | InvestinPuglia'
    },
    description: dict.hero.subtitle,
    keywords: 'Puglia, real estate, investment, Italy, property, PIA Turismo',
    authors: [{ name: 'InvestinPuglia' }],
    openGraph: {
      type: 'website',
      locale: params.locale,
      alternateLocale: i18n.locales.filter(l => l !== params.locale),
      url: `https://investinpuglia.eu/${params.locale}`,
      siteName: 'InvestinPuglia',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
        }
      ],
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const locale = params.locale
  const direction = languages[locale].dir

  return (
    <html lang={locale} dir={direction}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
