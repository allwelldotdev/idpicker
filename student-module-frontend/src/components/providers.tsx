"use client"

import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { LanguageProvider } from "@/lib/context/LanguageContext"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="light"
      enableSystem={false}
      forcedTheme="light"
      disableTransitionOnChange
    >
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </NextThemesProvider>
  )
}
