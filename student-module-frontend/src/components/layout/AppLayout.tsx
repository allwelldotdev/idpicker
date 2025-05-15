"use client"

import { useState } from 'react'
import Sidebar from '@/components/layout/Sidebar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex-1">
        <main className="container mx-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
