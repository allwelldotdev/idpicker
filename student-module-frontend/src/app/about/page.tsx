"use client"

import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import { Brain, Users, Target, Award } from 'lucide-react'
import { useTranslation } from 'react-i18next' // Changed import

export default function AboutPage() {
  const { t } = useTranslation('about'); // Changed namespace

  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: t('features.aiAnalysis.title'),
      description: t('features.aiAnalysis.description')
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t('features.expertTeam.title'),
      description: t('features.expertTeam.description')
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: t('features.personalizedLearning.title'),
      description: t('features.personalizedLearning.description')
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: t('features.provenResults.title'),
      description: t('features.provenResults.description')
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
          <h1 className="text-4xl font-bold mb-6">{t('pageTitle')}</h1>
          <p className="text-muted-foreground text-lg">
            {t('pageSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-6">{t('missionTitle')}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t('missionText')}
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
