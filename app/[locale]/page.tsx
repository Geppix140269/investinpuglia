// app/[locale]/page.tsx
import Link from 'next/link'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { type Locale } from '@/lib/i18n/config'
import { ArrowRightIcon, CalculatorIcon } from 'lucide-react'

interface PageProps {
  params: { locale: Locale }
}

export default async function HomePage({ params }: PageProps) {
  const dict = await getDictionary(params.locale)
  
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-900">InvestinPuglia</span>
            </div>
            <div className="flex space-x-8">
              <Link href={`/${params.locale}`} className="text-gray-700 hover:text-blue-600">
                {dict.nav.home}
              </Link>
              <Link href={`/${params.locale}/calculator`} className="text-gray-700 hover:text-blue-600">
                {dict.nav.calculator}
              </Link>
              <Link href={`/${params.locale}/blog`} className="text-gray-700 hover:text-blue-600">
                {dict.nav.blog}
              </Link>
              <Link href={`/${params.locale}/contact`} className="text-gray-700 hover:text-blue-600">
                {dict.nav.contact}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            {dict.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
            {dict.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${params.locale}/calculator`}
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <CalculatorIcon className="w-5 h-5" />
              {dict.hero.cta}
            </Link>
            <Link 
              href={`/${params.locale}/properties`}
              className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all"
            >
              {dict.hero.ctaSecondary}
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tax Benefits</h3>
              <p className="text-gray-600">Up to 50% tax credit through PIA Turismo program for qualifying properties.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Prime Locations</h3>
              <p className="text-gray-600">Access to exclusive properties in Ostuni, Polignano a Mare, and more.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-600">Full assistance with legal, tax, and renovation processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">{dict.footer.company.title}</h3>
              <p className="text-gray-400">{dict.footer.company.description}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{dict.footer.quickLinks}</h4>
              <ul className="space-y-2">
                <li><Link href={`/${params.locale}`} className="text-gray-400 hover:text-white">{dict.nav.home}</Link></li>
                <li><Link href={`/${params.locale}/calculator`} className="text-gray-400 hover:text-white">{dict.nav.calculator}</Link></li>
                <li><Link href={`/${params.locale}/blog`} className="text-gray-400 hover:text-white">{dict.nav.blog}</Link></li>
                <li><Link href={`/${params.locale}/contact`} className="text-gray-400 hover:text-white">{dict.nav.contact}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{dict.footer.followUs}</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 InvestinPuglia. {dict.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
