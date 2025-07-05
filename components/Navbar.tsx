'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img 
              src="/Logo_InvestiScope.png" 
              alt="InvestiScope Logo" 
              className="h-10 w-auto"
            />
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                InvestiScope
              </span>
              <span className="text-xs text-white/80 font-normal">™</span>
            </div>
          </a>
