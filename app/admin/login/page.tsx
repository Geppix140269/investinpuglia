'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabaseClient'

const supabase = createClient()

const ADMIN_EMAIL = 'your@email.com' // Replace with your actual admin email

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email !== ADMIN_EMAIL) {
      alert('Access denied')
      return
    }

    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)

    if (error) return alert(error.message)
    router.push('/admin')
  }

  return (
    <form onSubmit={handleLogin} className="p-4 max-w-sm mx-auto space-y-4">
      <h2 className="text-xl font-bold">Admin Login</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required className="w-full p-2 border rounded" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required className="w-full p-2 border rounded" />
      <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
        {loading ? 'Logging in…' : 'Login'}
      </button>
    </form>
  )
}
