"use client"

import { useRouter, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { cn } from "@/lib/utils"
import { navigation } from '@/config/navigation'
import { useLanguage } from '@/context/LanguageContext'
import { LanguageSwitcher } from '@/components/ui/language-switcher'

export function Navigation() {
  const router = useRouter()
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage()

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <nav className="w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4">
          {/* Logo Section */}
          <motion.div 
            className="flex shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" aria-label="Go to homepage">
              <Image
                src="/images/logos/Logo/svg/logo-black.svg"
                alt="idpicker logo"
                width={120}
                height={32}
                className="h-7 w-auto sm:h-9 md:h-10 lg:h-11"
                priority
              />
            </Link>
          </motion.div>

          {/* Navigation Links & CTA Button */}
          <div className="flex items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center ml-5 lg:ml-10">
              <div className="flex items-center space-x-4 sm:space-x-5 lg:space-x-7 xl:space-x-9">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-text-secondary hover:text-primary transition-colors relative group text-sm sm:text-base xl:text-lg font-medium whitespace-nowrap",
                      pathname === item.href ? "text-primary" : ""
                    )}
                  >
                    {t(`nav.${item.name.toLowerCase()}`)}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/30 group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Language Switcher */}
            <div className="ml-2 md:ml-4">
              <LanguageSwitcher />
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center justify-end ml-5 lg:ml-10">
              <motion.button 
                onClick={handleTryNow}
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-primary via-primary/90 to-accent text-white px-4 py-2 sm:px-5 lg:px-7 lg:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 lg:gap-3 text-sm sm:text-base font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 whitespace-nowrap"
              >
                {t('nav.tryNow')}
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-5">
              <button
                className="p-3 text-muted-foreground hover:text-foreground rounded-lg touch-manipulation"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden mt-2 py-2 px-1 border-t border-border overflow-hidden rounded-md shadow-md bg-background/90 dark:bg-background/80 backdrop-blur-md"
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
