// app/blog/page.tsx
'use client'

import { useEffect } from 'react'

export default function BlogPage() {
  useEffect(() => {
    window.location.href = 'https://marietrulli.com/blog'
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-3xl font-bold mb-4">Redirecting to our blog...</h1>
        <p className="text-xl opacity-90">Taking you to marietrulli.com/blog</p>
      </div>
    </div>
  )
}
