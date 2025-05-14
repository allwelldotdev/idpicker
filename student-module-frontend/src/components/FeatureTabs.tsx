"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ChevronRight, ArrowRight, Users } from 'lucide-react'

export default function FeatureTabs() {
  const [activeFeature, setActiveFeature] = React.useState(0)
  
  const features = [
    {
      title: "Take the assessment",
      description: "Answer questions about how you prefer to learn and process information"
    },
    {
      title: "Get your personalized profile",
      description: "Receive a detailed breakdown of your learning style across multiple dimensions"
    },
    {
      title: "Access custom resources",
      description: "Explore learning materials specifically matched to your unique learning style"
    },
    {
      title: "Track your progress",
      description: "Monitor how your learning effectiveness improves over time"
    }
  ]

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-[80px]" 
        />
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full filter blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Your existing feature tabs content */}
        </div>
      </div>
    </section>
  )
}