// lib/iconMappings.ts
import Image from 'next/image'
import React from 'react'

// Map Lucide icon names to your PNG files
const iconMappings = {
  // Common icons
  MapPin: '/icon/MapPin.png',
  Bell: '/icon/Bell.png',
  Euro: '/icon/Euro.png',
  User: '/icon/User.png',
  Shield: '/icon/Shield.png',
  Check: '/icon/crown.png', // Using crown as check alternative
  Search: '/icon/MagnifyingGlass.png',
  Home: '/icon/HouseArrowUP.png',
  Calculator: '/icon/calculator.png',
  Settings: '/icon/Gear.png',
  
  // Form icons
  Calendar: '/icon/calendar.png',
  Mail: '/icon/mail.png',
  Phone: '/icon/smartphone.png',
  FileText: '/icon/document.png',
  Globe: '/icon/globe.png',
  AlertCircle: '/icon/alert.png',
  Send: '/icon/UpwardArrow.png',
  
  // Navigation
  ChevronRight: '/icon/UpwardArrow.png',
  ChevronLeft: '/icon/UpwardArrow.png',
  ArrowRight: '/icon/UpwardArrow.png',
  
  // Status/Actions
  CheckCircle: '/icon/check.png',
  Download: '/icon/UpwardArrow.png',
  X: '/icon/alert.png',
  Clock: '/icon/Speedometer.png',
  
  // Communication
  WhatsApp: '/icon/whatsapp.png',
  
  // Business specific
  Building: '/icon/Villa.png',
  Key: '/icon/LockKeyhole.png',
  TrendingUp: '/icon/triangularFlag.png',
  DollarSign: '/icon/Euro.png',
  BarChart: '/icon/chart.png',
}

interface IconProps {
  name: keyof typeof iconMappings
  size?: number
  className?: string
  alt?: string
}

// Custom Icon component to replace Lucide icons
export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  className = '', 
  alt = '' 
}) => {
  const iconPath = iconMappings[name] || '/icon/Bell.png' // Fallback icon
  
  return (
    <Image
      src={iconPath}
      alt={alt || name}
      width={size}
      height={size}
      className={className}
    />
  )
}

// Helper function to convert Lucide icon props to Image props
export const getIconProps = (name: keyof typeof iconMappings, size: number = 24) => ({
  src: iconMappings[name] || '/icon/Bell.png',
  width: size,
  height: size,
})

export default Icon
