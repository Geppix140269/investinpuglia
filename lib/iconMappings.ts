// lib/iconMappings.ts
import React from 'react'
import Image from 'next/image'

// Map Lucide icon names to your custom PNG files
export const iconMap: Record<string, string> = {
  // Common UI Icons
  'Menu': '/icon/Menu.png',
  'X': '/icon/X.png',
  'ChevronDown': '/icon/ChevronDown.png',
  'ChevronRight': '/icon/ChevronRight.png',
  'ArrowRight': '/icon/ArrowRight.png',
  'ArrowDown': '/icon/ArrowDown.png',
  'ExternalLink': '/icon/ExternalLink.png',
  
  // Form & Input Icons
  'Check': '/icon/check.png',
  'AlertCircle': '/icon/alert.png',
  'Info': '/icon/Info.png',
  'Search': '/icon/Search.png',
  
  // Communication Icons
  'Mail': '/icon/mail.png',
  'Phone': '/icon/smartphone.png',
  'MessageCircle': '/icon/whatsapp.png',
  'Calendar': '/icon/calendar.png',
  
  // Business & Finance Icons
  'Calculator': '/icon/Calculator.png',
  'DollarSign': '/icon/DollarSign.png',
  'Euro': '/icon/Euro.png',
  'TrendingUp': '/icon/TrendingUp.png',
  'BarChart3': '/icon/BarChart3.png',
  'PieChart': '/icon/PieChart.png',
  'Banknote': '/icon/Banknote.png',
  
  // Location & Property Icons
  'MapPin': '/icon/MapPin.png',
  'Home': '/icon/Home.png',
  'Building': '/icon/Building.png',
  'Building2': '/icon/Building2.png',
  
  // People & User Icons
  'User': '/icon/User.png',
  'Users': '/icon/Users.png',
  'UserCheck': '/icon/UserCheck.png',
  
  // Tools & Features Icons
  'Settings': '/icon/Settings.png',
  'Wrench': '/icon/Wrench.png',
  'FileText': '/icon/document.png',
  'Globe': '/icon/globe.png',
  'Shield': '/icon/Shield.png',
  'Award': '/icon/Award.png',
  'Trophy': '/icon/Trophy.png',
  'Target': '/icon/Target.png',
  'Sparkles': '/icon/Sparkles.png',
  'Star': '/icon/Star.png',
  'Heart': '/icon/Heart.png',
  'ThumbsUp': '/icon/ThumbsUp.png',
  'Gift': '/icon/Gift.png',
  'Bell': '/icon/Bell.png',
  'Clock': '/icon/Clock.png',
  'Eye': '/icon/Eye.png',
  'Download': '/icon/Download.png',
  'Upload': '/icon/Upload.png',
  'RefreshCw': '/icon/RefreshCw.png',
  'Zap': '/icon/Zap.png',
  'Lock': '/icon/Lock.png',
  'Unlock': '/icon/Unlock.png',
  'Key': '/icon/Key.png',
  'CreditCard': '/icon/CreditCard.png',
  'ShoppingCart': '/icon/ShoppingCart.png',
  'Package': '/icon/Package.png',
  'Truck': '/icon/Truck.png',
  'Compass': '/icon/Compass.png',
  'Flag': '/icon/Flag.png',
  'Bookmark': '/icon/Bookmark.png',
  'Tag': '/icon/Tag.png',
  'Hash': '/icon/Hash.png',
  'Link': '/icon/Link.png',
  'Paperclip': '/icon/Paperclip.png',
  'Filter': '/icon/Filter.png',
  'SortAsc': '/icon/SortAsc.png',
  'MoreVertical': '/icon/MoreVertical.png',
  'Plus': '/icon/Plus.png',
  'Minus': '/icon/Minus.png',
  'Loader': '/icon/Loader.png',
  'Send': '/icon/Send.png',
  'Inbox': '/icon/Inbox.png',
  'Archive': '/icon/Archive.png',
  'Trash': '/icon/Trash.png',
  'Edit': '/icon/Edit.png',
  'Copy': '/icon/Copy.png',
  'Share': '/icon/Share.png',
  'Save': '/icon/Save.png',
  'Folder': '/icon/Folder.png',
  'FolderOpen': '/icon/FolderOpen.png',
  'Grid': '/icon/Grid.png',
  'List': '/icon/List.png',
  'LayoutGrid': '/icon/LayoutGrid.png',
  'Layers': '/icon/Layers.png',
  'ZoomIn': '/icon/ZoomIn.png',
  'ZoomOut': '/icon/ZoomOut.png',
  'Maximize': '/icon/Maximize.png',
  'Minimize': '/icon/Minimize.png',
  'Move': '/icon/Move.png',
  'ChevronUp': '/icon/ChevronUp.png',
  'ChevronLeft': '/icon/ChevronLeft.png',
  'ChevronsUp': '/icon/ChevronsUp.png',
  'ChevronsDown': '/icon/ChevronsDown.png',
  'ChevronsLeft': '/icon/ChevronsLeft.png',
  'ChevronsRight': '/icon/ChevronsRight.png',
  'ArrowUp': '/icon/ArrowUp.png',
  'ArrowLeft': '/icon/ArrowLeft.png',
  'ArrowUpRight': '/icon/ArrowUpRight.png',
  'ArrowDownRight': '/icon/ArrowDownRight.png',
  'ArrowDownLeft': '/icon/ArrowDownLeft.png',
  'ArrowUpLeft': '/icon/ArrowUpLeft.png',
  'RotateCw': '/icon/RotateCw.png',
  'RotateCcw': '/icon/RotateCcw.png',
  'HelpCircle': '/icon/HelpCircle.png',
  'AlertTriangle': '/icon/AlertTriangle.png',
  'AlertOctagon': '/icon/AlertOctagon.png',
  'Handshake': '/icon/Handshake.png',
  'ClipboardList': '/icon/ClipboardList.png',
  'Briefcase': '/icon/Briefcase.png',
  'BookOpen': '/icon/BookOpen.png',
  'Lightbulb': '/icon/Lightbulb.png',
  'Brain': '/icon/Brain.png',
  'Cpu': '/icon/Cpu.png',
  'Database': '/icon/Database.png',
  'Server': '/icon/Server.png',
  'Wifi': '/icon/Wifi.png',
  'WifiOff': '/icon/WifiOff.png',
  'Cloud': '/icon/Cloud.png',
  'CloudOff': '/icon/CloudOff.png',
  'Sun': '/icon/Sun.png',
  'Moon': '/icon/Moon.png',
  'Sunrise': '/icon/Sunrise.png',
  'Sunset': '/icon/Sunset.png',
  'Wind': '/icon/Wind.png',
  'Droplets': '/icon/Droplets.png',
  'Thermometer': '/icon/Thermometer.png',
  'Umbrella': '/icon/Umbrella.png',
  'Mountain': '/icon/Mountain.png',
  'Trees': '/icon/Trees.png',
  'Waves': '/icon/Waves.png',
  'Anchor': '/icon/Anchor.png',
  'Plane': '/icon/Plane.png',
  'Car': '/icon/Car.png',
  'Bike': '/icon/Bike.png',
  'Train': '/icon/Train.png',
  'Ship': '/icon/Ship.png',
  'Navigation': '/icon/Navigation.png',
  'Milestone': '/icon/Milestone.png',
  'MapPinOff': '/icon/MapPinOff.png',
  'Route': '/icon/Route.png',
  'Signpost': '/icon/Signpost.png',
  'Camera': '/icon/Camera.png',
  'Image': '/icon/Image.png',
  'Images': '/icon/Images.png',
  'Film': '/icon/Film.png',
  'Video': '/icon/Video.png',
  'Tv': '/icon/Tv.png',
  'Monitor': '/icon/Monitor.png',
  'Smartphone': '/icon/Smartphone.png',
  'Tablet': '/icon/Tablet.png',
  'Laptop': '/icon/Laptop.png',
  'HardDrive': '/icon/HardDrive.png',
  'Usb': '/icon/Usb.png',
  'Battery': '/icon/Battery.png',
  'BatteryCharging': '/icon/BatteryCharging.png',
  'Plug': '/icon/Plug.png',
  'Headphones': '/icon/Headphones.png',
  'Speaker': '/icon/Speaker.png',
  'Volume': '/icon/Volume.png',
  'VolumeX': '/icon/VolumeX.png',
  'Mic': '/icon/Mic.png',
  'MicOff': '/icon/MicOff.png',
  'Palette': '/icon/Palette.png',
  'Brush': '/icon/Brush.png',
  'Pen': '/icon/Pen.png',
  'PenTool': '/icon/PenTool.png',
  'Eraser': '/icon/Eraser.png',
  'Ruler': '/icon/Ruler.png',
  'Scissors': '/icon/Scissors.png',
  'Printer': '/icon/Printer.png',
  'Coffee': '/icon/Coffee.png',
  'Pizza': '/icon/Pizza.png',
  'Apple': '/icon/Apple.png',
  'Cherry': '/icon/Cherry.png',
  'Cake': '/icon/Cake.png',
}

// Define props interface for the Icon component
interface IconProps {
  name: string
  size?: number
  className?: string
  alt?: string
}

// Custom Icon component to replace Lucide icons
const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = '',
  alt = ''
}) => {
  const iconPath = iconMap[name] || '/icon/default.png'
  
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

// Export Icon as named export
export { Icon }

// Helper function to get icon path
export const getIconPath = (name: string): string => {
  return iconMap[name] || '/icon/default.png'
}

// Export Icon as default
export default Icon
