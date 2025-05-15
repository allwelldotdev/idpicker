"use client"
import React from 'react';
import { useRouter } from 'next/navigation'
import { Footer } from '@/components/layout/Footer'
import { Navigation } from '@/components/layout/Navigation'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '@/lib/context/LanguageContext'
import { 
  Brain, 
  Target, 
  Blocks, 
  ChevronRight, 
  Play,
  ArrowRight,  
  Bot,
  PenTool,
  Lightbulb,
  TrendingUp
} from 'lucide-react'
import { BackgroundLines } from '@/components/ui/background-lines'
import { CookieConsent } from '@/components/ui/cookie-consent'
import dynamic from 'next/dynamic'

// Dynamic import for React Three Fiber components to avoid SSR issues
const Scene = dynamic(() => import('@/components/3d/Scene'), { 
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
  )
})

const Home = () => {
  const router = useRouter()
  const { t } = useLanguage()
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <div className="flex flex-col bg-background text-foreground min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* 3D Background Effect */}
        <div className="absolute inset-0 -z-10">
          <Scene />
        </div>

        {/* Rest of your existing hero section code */}
        <BackgroundLines className="min-h-screen" svgOptions={{ duration: 25 }}> 
          <section className="relative pt-32 pb-20 md:pb-32">
            {/* Enhanced Gradient Effects */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background to-background opacity-80" />
              <motion.div 
                style={{ opacity }}
                className="absolute inset-0"
              >
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-2 w-2 bg-primary/30 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </motion.div>
            </div>

            <div className="container mx-auto relative z-10">
              <motion.div 
                className="flex flex-col items-center max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >


                {/* Enhanced Hero Title with Professional Styling */}
                <motion.div className="flex flex-col items-center space-y-6">
                  <motion.span
                    // className="text-sm md:text-base font-medium px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary/80 backdrop-blur-sm"
                    // initial={{ opacity: 0, y: -20 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.5 }}
                  >
                  </motion.span>

                  <motion.h1 
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-center tracking-tight leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.span 
                      className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-purple-500"
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {t('hero.title1')}
                    </motion.span>
                    <br />
                    <motion.span 
                      className="relative inline-block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-purple-500"
                    >
                      {t('hero.title2')}
                    </motion.span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl lg:text-2xl text-center text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium"
                  >
                    {t('hero.subtitle')}
                  </motion.p>
                </motion.div>

                {/* Enhanced CTA Buttons */}
                <motion.div 
                  className="flex flex-wrap justify-center gap-6 mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.button
                    onClick={() => router.push('/login')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 rounded-xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-purple-500 opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center gap-2 text-white font-medium">
                      {t('hero.getStarted')}
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                  <motion.button
                    onClick={() => router.push('/construction')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 rounded-xl border hover:bg-white/5 transition-all flex items-center gap-2 font-medium"
                  >
                    {t('hero.howItWorks')}
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-3 w-3 text-white ml-0.5" />
                    </div>
                  </motion.button>
                </motion.div>

                {/* Feature Grid */}
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {[
                    { icon: <PenTool className="h-5 w-5" />, text: 'features.personalLearning' },
                    { icon: <Bot className="h-5 w-5" />, text: 'features.aiDriven' },
                    { icon: <Lightbulb className="h-5 w-5" />, text: 'features.smartRecommendations' },
                    { icon: <TrendingUp className="h-5 w-5" />, text: 'features.progressTracking' },
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary">
                        {feature.icon}
                      </div>
                      <span className="text-sm font-medium">{t(feature.text)}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>
        </BackgroundLines>
      </div>

      {/* Interactive Feature Section */}
      <section id="features" className="py-24 relative bg-gradient-to-b from-background via-background/95 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-black/20 border border-primary/20 backdrop-blur-sm shadow-lg shadow-primary/10">
              <div className="relative">
                <Bot size={18} className="text-primary z-10 relative" />
                <motion.div 
                  className="absolute inset-0 bg-primary/30 blur-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('interactiveFeatures.badge')}
              </span>
            </div>
            
            <h2 className="text-4xl font-bold mt-8 mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
                {t('interactiveFeatures.title')}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('interactiveFeatures.subtitle')}
            </p>
          </motion.div>
          
          {/* AI Neural Network Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 relative">
            {/* Neural Network Background */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 backdrop-blur-3xl">
                <div className="absolute inset-0">
                  <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-70" />
                  
                  {/* Synaptic Connections */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-px"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${i % 2 ? 'var(--primary)' : 'var(--accent)'}, transparent)`,
                        top: `${10 + i * 8}%`,
                        left: '-20%',
                        right: '-20%',
                        opacity: 0.3,
                        transform: `rotate(${(i % 2 ? 1 : -1) * (Math.random() * 5)}deg)`
                      }}
                      animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scaleY: [1, 1.5, 1]
                      }}
                      transition={{
                        duration: 2 + Math.random() * 3,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  ))}

                  {/* Neural Nodes */}
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={`node-${i}`}
                      className="absolute rounded-full bg-gradient-to-r from-primary to-accent"
                      style={{
                        height: 2 + Math.random() * 4,
                        width: 2 + Math.random() * 4,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                  ))}

                  {/* Data Flow Particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute h-1 w-1 rounded-full bg-primary"
                      initial={{ x: '-100%', y: Math.random() * 100 + '%' }}
                      animate={{ 
                        x: '200%',
                        y: [
                          Math.random() * 100 + '%',
                          Math.random() * 100 + '%',
                          Math.random() * 100 + '%'
                        ]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: i * 1,
                        ease: "linear"
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            {[
              {
                icon: <Brain className="h-6 w-6" />,
                title: "features.learningStyle.title",
                description: "features.learningStyle.description",
                accentColor: "from-primary/60 to-blue-500/60",
                particles: "data-particles",
                chart: (
                  <div className="h-20 mt-4 grid grid-cols-5 gap-1 items-end opacity-90">
                    {[0.4, 0.7, 0.5, 0.9, 0.6].map((height, i) => (
                      <motion.div
                        key={i}
                        className="bg-gradient-to-t from-primary/50 to-accent/50 rounded-t"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i, duration: 0.5 }}
                      />
                    ))}
                  </div>
                )
              },
              {
                icon: <Target className="h-6 w-6" />,
                title: "features.personalizedPathways.title",
                description: "features.personalizedPathways.description",
                accentColor: "from-accent/60 to-purple-500/60",
                particles: "data-flow",
                chart: (
                  <div className="h-20 mt-4 relative">
                    <svg className="w-full h-full" viewBox="0 0 100 40">
                      <motion.path
                        d="M0,20 C20,40 30,0 50,20 C70,40 80,0 100,20"
                        fill="none"
                        stroke="url(#gradient1)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                      />
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="var(--primary)" />
                          <stop offset="100%" stopColor="var(--accent)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )
              },
              {
                icon: <Blocks className="h-6 w-6" />,
                title: "features.resourceMatching.title",
                description: "features.resourceMatching.description",
                accentColor: "from-blue-500/60 to-primary/60",
                particles: "neural-nodes",
                chart: (
                  <div className="h-20 mt-4 flex items-center justify-between">
                    <motion.div 
                      className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                    >
                      <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    </motion.div>
                    {[...Array(3)].map((_, i) => (
                      <motion.div 
                        key={i}
                        className="h-px bg-gradient-to-r from-primary via-accent to-blue-500 flex-grow mx-1"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 0.7 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 * i, duration: 0.4 }}
                      />
                    ))}
                    <motion.div 
                      className="h-12 w-12 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center border border-accent/20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    </motion.div>
                  </div>
                )
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -5 }}
                className="group relative bg-background/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/10 overflow-hidden"
              >
                {/* AI Data Processing Animation */}
                <div className="absolute inset-0 -z-10 opacity-20 overflow-hidden">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={`p-${i}`}
                      className={`absolute h-px w-${1 + (i % 4)} bg-primary rounded-full`}
                      initial={{ 
                        top: `${Math.random() * 100}%`, 
                        left: '-10%',
                        opacity: 0.1 + Math.random() * 0.3
                      }}
                      animate={{ 
                        left: '110%',
                      }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 2 + Math.random() * 8,
                        delay: Math.random() * 2,
                        ease: "linear"
                      }}
                    />
                  ))}
                </div>
                
                {/* Accent Glow */}
                <div className={`absolute top-0 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${feature.accentColor} blur-3xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity`} />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-background via-primary/10 to-accent/10 text-primary border border-primary/20 shadow-inner">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                    {t(feature.title)}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-5 text-sm">
                  {t(feature.description)}
                </p>
                
                {/* Data Visualization Element - Unique per feature */}
                <div className="border-t border-white/10 pt-4">
                  {feature.chart}
                </div>
                
                {/* Interactive Hover State */}
                <motion.div 
                  className="mt-6 flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>{t('interactiveFeatures.learnMore')}</span>
                  <ChevronRight size={16} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Interactive Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* AI Analysis Process Visualization */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Brain className="h-8 w-8" />,
                title: t('features.personality.title'),
                description: t('features.personality.description'),
                color: "from-blue-500 to-primary"
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: t('features.career.title'),
                description: t('features.career.description'),
                color: "from-primary to-accent"
              },
              {
                icon: <Blocks className="h-8 w-8" />,
                title: t('features.roadmap.title'),
                description: t('features.roadmap.description'),
                color: "from-accent to-purple-500"
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="relative group p-8 rounded-2xl overflow-hidden"
              >
                {/* Interactive Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Interactive Demo Section */}
          <motion.div 
            className="mt-24 relative rounded-3xl overflow-hidden border bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">{t('demo.title')}</h4>
                  <p className="text-muted-foreground">{t('demo.subtitle')}</p>
                </div>
              </div>

              {/* Interactive Character Analysis Demo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {/* Quiz Preview */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h5 className="font-medium mb-4">{t('demo.quiz.title')}</h5>
                    {[1, 2, 3].map((q) => (
                      <div key={q} className="flex items-center gap-3 mb-3">
                        <div className="h-4 w-4 rounded-full border border-primary/50" />
                        <div className="h-2 bg-white/10 rounded-full flex-1" />
                      </div>
                    ))}
                  </div>

                  {/* Video Analysis Preview */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h5 className="font-medium mb-4">{t('demo.video.title')}</h5>
                    <div className="aspect-video rounded-lg bg-black/40 flex items-center justify-center">
                      <Play className="h-8 w-8 text-primary/50" />
                    </div>
                  </div>
                </div>

                {/* Results Preview */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h5 className="font-medium mb-4">{t('demo.results.title')}</h5>
                  <div className="space-y-4">
                    {[1, 2, 3].map((r) => (
                      <motion.div 
                        key={r}
                        className="h-8 bg-primary/10 rounded-lg"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: r * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-24 relative bg-gradient-to-b from-background/80 via-background/40 to-background">
        {/* Holographic Grid Background */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute w-full h-full">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`grid-${i}`}
                className="absolute h-40 w-40 border-2 border-transparent"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  background: `
                    linear-gradient(to right, transparent, transparent) padding-box,
                    linear-gradient(120deg, rgba(var(--primary-rgb), 0.2), rgba(var(--accent-rgb), 0.2)) border-box
                  `,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                  rotate: [`${Math.random() * 360}deg`, `${Math.random() * 360 + 180}deg`],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
          
          {/* Ambient Light Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-conic from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl opacity-30 animate-spin-slow" />
            <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-conic from-accent/30 via-primary/20 to-transparent rounded-full blur-3xl opacity-30 animate-spin-slow-reverse" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Enhanced Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-black/20 border border-primary/20 backdrop-blur-sm shadow-lg shadow-primary/10">
              <div className="relative">
                <Blocks size={18} className="text-primary z-10 relative" />
                <motion.div 
                  className="absolute inset-0 bg-primary/30 blur-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="text-sm font-medium bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                {t('dashboard.nextGen')}
              </span>
            </div>
            
            <h2 className="text-5xl font-bold mt-8 mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
                {t('dashboard.journey')}
              </span>
              <br />
              <span className="bg-gradient-to-r from-foreground/90 to-foreground/40 bg-clip-text text-transparent">
                {t('dashboard.realtime')}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('dashboard.experience')}
            </p>

            {/* Feature Pills */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {[
                t('dashboard.features.analytics'),
                t('dashboard.features.aiInsights'),
                t('dashboard.features.tracking'),
                t('dashboard.features.adaptive')
              ].map((feature, idx) => (
                <div 
                  key={idx}
                  className="px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-sm text-primary/80 backdrop-blur-sm"
                >
                  {feature}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // className="relative rounded-3xl overflow-hidden border bg-card/50 backdrop-blur-sm"
          >



            </motion.div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`float-${i}`}
            className="absolute"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <div 
              className={`h-${8 + i * 4} w-${8 + i * 4} rounded-${i % 2 ? 'full' : 'xl'} bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-xl border border-white/10`} 
            />
          </motion.div>
        ))}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '10M+', label: t('metrics.activeLearners') },
              { value: '99.9%', label: t('metrics.accuracyRate') },
              { value: '150+', label: t('metrics.countriesReached') },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative p-8 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative bg-gradient-to-b from-background via-background/95 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('testimonials.title')}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-white/10">
                    <div className="h-10 w-10 rounded-full bg-background/80" />
                  </div>
                  <div>
                    <h4 className="font-medium">{t(`testimonials.person${idx}.name`)}</h4>
                    <p className="text-sm text-muted-foreground">{t(`testimonials.person${idx}.role`)}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{t(`testimonials.person${idx}.quote`)}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-purple-500/10" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`cta-particle-${i}`}
              className="absolute h-2 w-2 rounded-full bg-primary/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              {t('cta.title')} <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('cta.highlight')}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <motion.button
              onClick={() => router.push('/login')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary via-accent to-purple-500 text-white px-8 py-4 rounded-xl flex items-center gap-2 font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 mx-auto"
            >
              {t('cta.getStarted')}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
      <CookieConsent />
    </div>
  )
}

export default Home