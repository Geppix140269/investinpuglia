'use client'

import React from 'react'
import Link from 'next/link'
import { trackCTAClick } from '@/lib/database'

interface CTAButtonProps {
  variant: 'calculator' | 'bookCall' | 'whatsapp' | 'custom'
  href?: string
  text?: string
  icon?: React.ReactNode
  onClick?: () => void
  className?: string
  showIcon?: boolean
  location?: string
  metadata?: Record<string, any>
}

const CTAButton: React.FC<CTAButtonProps> = ({
  variant,
  href,
  text,
  icon,
  onClick,
  className = '',
  showIcon = false,
  location = 'unknown',
  metadata
}) => {
  // Default configurations for each variant
  const variantConfigs = {
    calculator: {
      text: 'Calculate My Grant',
      href: '/calculator',
      className: 'inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300',
      isExternal: false
    },
    bookCall: {
      text: 'Book Strategy Call',
      href: 'https://calendly.com/investiscope_pro/30min',
      className: 'inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300',
      isExternal: true
    },
    whatsapp: {
      text: 'WhatsApp Support',
      href: 'https://wa.me/393514001402?text=Hi%2C%20I%27m%20interested%20in%20Puglia%20property%20investment%20and%20grants',
      className: 'inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300',
      isExternal: true
    },
    custom: {
      text: text || 'Click Here',
      href: href || '#',
      className: 'inline-flex items-center gap-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300',
      isExternal: false
    }
  }

  const config = variantConfigs[variant]
  const finalHref = href || config.href
  const finalText = text || config.text
  const finalClassName = `${config.className} ${className}`.trim()
  const isExternal = href ? href.startsWith('http') : config.isExternal

  const handleClick = async (e: React.MouseEvent) => {
    // Track the click
    try {
      await trackCTAClick(variant, location, {
        ...metadata,
        text: finalText,
        href: finalHref
      })
    } catch (error) {
      console.error('Error tracking CTA click:', error)
    }

    // Call custom onClick if provided
    if (onClick) {
      onClick()
    }
  }

  // Render icon if provided or showIcon is true
  const renderIcon = () => {
    if (icon) return icon
    if (showIcon) {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )
    }
    return null
  }

  // For external links
  if (isExternal) {
    return (
      <a
        href={finalHref}
        target="_blank"
        rel="noopener noreferrer"
        className={finalClassName}
        onClick={handleClick}
      >
        {finalText}
        {renderIcon()}
      </a>
    )
  }

  // For internal links
  return (
    <Link
      href={finalHref}
      className={finalClassName}
      onClick={handleClick}
    >
      {finalText}
      {renderIcon()}
    </Link>
  )
}

export default CTAButton
