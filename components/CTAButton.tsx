'use client'

import React from 'react'
import Link from 'next/link'
import { trackCTAClick } from '@/lib/database'

interface CTAButtonProps {
  variant: 'calculator' | 'book-call' | 'whatsapp' | 'custom'
  location: string
  children?: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  metadata?: Record<string, any>
}

const CTAButton: React.FC<CTAButtonProps> = ({
  variant,
  location,
  children,
  href,
  onClick,
  className = '',
  metadata
}) => {
  // Default configurations for each variant
  const variantConfigs = {
    calculator: {
      text: 'Calculate My Grant',
      href: '/calculator',
      className: 'cta-button cta-primary'
    },
    'book-call': {
      text: 'Book Strategy Call',
      href: 'https://cal.com/giuseppefunaro/puglia-casa-consultation',
      className: 'cta-button cta-secondary',
      isExternal: true
    },
    whatsapp: {
      text: 'WhatsApp Support',
      href: 'https://wa.me/393472473466?text=Hi%2C%20I%27m%20interested%20in%20Puglia%20property%20investment%20and%20grants',
      className: 'cta-button cta-whatsapp',
      isExternal: true
    },
    custom: {
      text: children || 'Click Here',
      href: href || '#',
      className: 'cta-button'
    }
  }

  const config = variantConfigs[variant]
  const finalClassName = `${config.className} ${className}`.trim()

  const handleClick = async (e: React.MouseEvent) => {
    // Track the click
    try {
      await trackCTAClick(variant, location, {
        ...metadata,
        text: config.text,
        href: config.href
      })
    } catch (error) {
      console.error('Error tracking CTA click:', error)
    }

    // Call custom onClick if provided
    if (onClick) {
      onClick()
    }

    // If it's an internal link and no custom onClick, let Next.js handle navigation
    // If it's external, the browser will handle it naturally
  }

  // For external links
  if (config.isExternal) {
    return (
      <a
        href={config.href}
        target="_blank"
        rel="noopener noreferrer"
        className={finalClassName}
        onClick={handleClick}
      >
        {config.text}
      </a>
    )
  }

  // For internal links
  return (
    <Link
      href={config.href}
      className={finalClassName}
      onClick={handleClick}
    >
      {config.text}
    </Link>
  )
}

// Pre-configured CTA components for easy use
export const CalculatorCTA: React.FC<{ location: string; className?: string }> = ({ location, className }) => (
  <CTAButton variant="calculator" location={location} className={className} />
)

export const BookCallCTA: React.FC<{ location: string; className?: string }> = ({ location, className }) => (
  <CTAButton variant="book-call" location={location} className={className} />
)

export const WhatsAppCTA: React.FC<{ location: string; className?: string }> = ({ location, className }) => (
  <CTAButton variant="whatsapp" location={location} className={className} />
)

export default CTAButton
