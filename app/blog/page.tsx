'use client'

import { useEffect } from 'react'

export default function BlogPage() {
  useEffect(() => {
    window.location.href = 'https://marietrulli.com/blog'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to blog...</p>
    </div>
  )
}
