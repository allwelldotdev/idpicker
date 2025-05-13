"use client"

import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import { Brain, Users, Target, Award } from 'lucide-react'

export default function AboutPage() {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Analysis",
      description: "Using advanced algorithms to understand your unique learning patterns"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Built by education specialists and AI researchers"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Personalized Learning",
      description: "Tailored recommendations based on your learning style"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Proven Results",
      description: "Helping thousands of students achieve their goals"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl font-bold mb-6">About ID Picker</h1>
          <p className="text-muted-foreground text-lg">
            Empowering learners through personalized AI-driven education
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At ID Picker, we believe every student has a unique way of learning. 
              Our mission is to revolutionize education by providing personalized 
              learning experiences through advanced AI technology. We analyze your 
              learning style and create tailored pathways to help you achieve your 
              educational goals efficiently and effectively.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl border bg-card hover:bg-accent/5 transition-colors"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
