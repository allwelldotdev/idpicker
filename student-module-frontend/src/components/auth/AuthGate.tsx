"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [code, setCode] = useState('')
  const router = useRouter()

  useEffect(() => {
    const authStatus = sessionStorage.getItem('auth-status')
    if (authStatus === 'authenticated') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (code === process.env.NEXT_PUBLIC_ACCESS_CODE) {
      sessionStorage.setItem('auth-status', 'authenticated')
      setIsAuthenticated(true)
    } else {
      alert('Invalid access code')
      // setIsAuthenticated(true) //need to remove this line to prevent access
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 p-8 bg-card rounded-lg border shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Protected Access</h2>
            <p className="mt-2 text-muted-foreground">Enter the access code to continue</p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <input
                type="password"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-background focus:ring-2 focus:ring-primary"
                placeholder="Enter access code"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white rounded-lg px-4 py-2 hover:bg-primary/90 transition-colors"
            >
              Access Site
            </button>
          </form>
        </div>
      </div>
    )
  }

  return children
}
