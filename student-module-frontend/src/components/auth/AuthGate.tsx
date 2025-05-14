"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const DEVELOPER_KEYWORD = 'idpicker' // You can change this to any keyword you want

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [keyword, setKeyword] = useState('')
  const isLocalEnv = process.env.NODE_ENV === 'development'

  useEffect(() => {
    // Prevent locale redirect for auth page
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname
      if (currentPath === '/') {
        setIsAuthenticated(isLocalEnv)
        return
      }
    }

    if (isLocalEnv) {
      setIsAuthenticated(true)
      return
    }
    const authStatus = sessionStorage.getItem('dev-auth')
    if (authStatus === 'authenticated') {
      setIsAuthenticated(true)
    }
  }, [isLocalEnv])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (keyword.toLowerCase() === DEVELOPER_KEYWORD) {
      sessionStorage.setItem('dev-auth', 'authenticated')
      setIsAuthenticated(true)
    } else {
      alert('Invalid developer keyword')
      setKeyword('')
    }
  }

  if (!isAuthenticated && !isLocalEnv) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6 p-6 bg-card rounded-lg border shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Developer Access</h2>
            <p className="mt-2 text-muted-foreground">Enter the developer keyword to continue</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              required
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-background focus:ring-2 focus:ring-primary"
              placeholder="Enter developer keyword"
              autoComplete="off"
            />
            <button
              type="submit"
              className="w-full bg-primary text-white rounded-lg px-4 py-2 hover:bg-primary/90 transition-colors"
            >
              Enter Site
            </button>
          </form>
        </div>
      </div>
    )
  }

  return children
}
