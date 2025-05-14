"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Loader2, Github, Linkedin, Eye, EyeOff } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [passwordError, setPasswordError] = useState("")



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/assets/login-image.jpg"
            alt="Login"
            fill
            className="object-cover opacity-90 transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        </div>
        
        <div className="relative z-20 flex items-center text-lg font-medium">
          <motion.img
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
            src="/images/logos/Logo/svg/logo.svg"
            alt="ID Picker Logo"
            className="h-14 w-auto drop-shadow-lg"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative z-20 mt-auto"
        >
          <blockquote className="space-y-2">
            <p className="text-lg font-light italic">
              &ldquo;Unlock your potential with ID Picker - Your gateway to seamless learning and development.&rdquo;
            </p>
          </blockquote>
          
          <div className="flex justify-center mt-6 space-x-4">
            <motion.a 
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="#" 
              className="text-white/70 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, rotate: -5 }}
              href="#" 
              className="text-white/70 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="lg:p-8 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]"
        />
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] relative">
          <motion.div 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              src="/images/logos/Logo/svg/logo-black.svg"
              alt="ID Picker Logo"
              className="h-16 w-auto mb-4 dark:invert"
            />
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-lg border-0 backdrop-blur-sm bg-white/80 dark:bg-gray-950/80">
              <CardHeader className="space-y-1">
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <CardTitle className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Welcome back</CardTitle>
                  <CardDescription className="text-center">
                    Sign in to your account
                  </CardDescription>
                </motion.div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <motion.div 
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <Input
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        className="transition-all duration-200 focus:ring-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
                      />
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="relative"
                    >
                      <Input
                        id="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value)
                        }}
                        placeholder="Enter your password"
                        type={showPassword ? "text" : "password"}
                        className={`transition-all duration-200 focus:ring-2 pr-10 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm ${
                          passwordError ? "border-red-500 focus:ring-red-500" : ""
                        }`}
                      />
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3  text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </motion.button>
                      {passwordError && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-xs text-red-500 mt-1"
                        >
                          {passwordError}
                        </motion.p>
                      )}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-1 grid grid-cols-2 gap-1 text-xs"
                      >
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="flex justify-end -mt-2">
                    <Link
                      href="/forgot-password"
                      className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 shadow-lg hover:shadow-blue-500/25 transition-all duration-300" 
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Signing in...
                          </>
                        ) : (
                          "Sign In"
                        )}
                      </Button>
                    </motion.div>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white/80 dark:bg-gray-950/80 px-2 text-muted-foreground backdrop-blur-sm">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    <motion.div 
                      className="grid grid-cols-2 gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button variant="outline" className="w-full hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-300 backdrop-blur-sm">
                          <svg className="mr-2 h-4 w-4" viewBox="0 0 48 48" fill="none">
                            <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" fill="#FFC107"/>
                          </svg>
                          Google
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button variant="outline" className="w-full hover:bg-gray-50 dark:hover:bg-gray-950/30 transition-all duration-300 backdrop-blur-sm">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>

                  <motion.div 
                    className="text-center text-sm pt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">
                      Sign up
                    </Link>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
