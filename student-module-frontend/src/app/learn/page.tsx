"use client"

import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import { Construction } from 'lucide-react'
import Link from 'next/link'

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <Construction className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl font-bold mb-6">Learning Center Coming Soon</h1>
          <p className="text-muted-foreground text-lg mb-8">
            We're building an amazing learning experience for you. Check back soon to explore our comprehensive learning resources!
          </p>
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
