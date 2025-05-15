"use client"

import { useRouter, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { cn } from "@/lib/utils"
import { navigation } from '@/config/navigation'
import { useLanguage } from '@/lib/context/LanguageContext'
import { LanguageSwitcher } from '@/components/ui/language-switcher';

export function Navigation() {
  const router = useRouter()
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTryNow = () => {
    router.push('/login')
  }

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-background/85 backdrop-blur-xl shadow-lg border-b border-border/20" 
          : "bg-transparent"
      )}
    >
      <nav className="w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-6 sm:px-8 py-4">
          {/* Logo Section */}
          <div className="flex shrink-0">
            <Link href="/" aria-label="Go to homepage">
              <Image
                src="/images/logos/Logo/svg/logo-black.svg"
                alt="idpicker logo"
                width={200}
                height={42}
                className="h-7 w-auto sm:h-9 md:h-12 lg:h-11"
                priority
              />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300",
                    pathname === item.href 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {t(`nav.${item.name.toLowerCase()}`)}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <LanguageSwitcher />

              {/* CTA Button */}
              <button 
                onClick={handleTryNow}
                className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-6 py-2.5 rounded-full font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-colors duration-300"
              >
                {t('nav.tryNow')}
                <ArrowUpRight className="transition-transform" size={18} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-accent/10 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with updated styling */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-border/10 bg-background/95 backdrop-blur-lg"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col space-y-2 py-2"
              >
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "text-muted-foreground hover:text-foreground transition-colors px-4 py-3 rounded-lg hover:bg-accent/10 active:bg-accent/20 flex items-center",
                        pathname === item.href ? "text-primary" : ""
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="pt-2 px-2"
                >
                  <motion.button 
                    onClick={handleTryNow}
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                    className="group bg-gradient-to-r from-primary via-primary/90 to-accent text-white px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-base shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 w-full"
                  >
                    Try Now
                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
