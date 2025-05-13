"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Loader2, Github, Linkedin, Image as ImageIcon, Star, Award, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function LoginPage() {
  const [loading, setLoading] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0"
    >
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "24px 24px" 
        }}></div>
        
        {/* Logo and header */}
        {/* <div className="relative z-20 flex items-center text-lg font-medium">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-zinc-900 rounded-full p-1 mr-2"
          >
            <ImageIcon className="h-6 w-6" />
          </motion.div>
          <span className="text-xl font-bold tracking-tight">ID Picker</span>
        </div> */}
        
        {/* Middle section with features */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative z-20 mt-12 flex flex-col items-center"
        >
          <div className="rounded-full bg-zinc-800/50 p-4 mb-8 backdrop-blur-sm">
            <Image src="/images/logos/Logo/svg/logo-black.svg" alt="ID Picker Illustration" width={120} height={120} className="invert" />
          </div>
          
          <h2 className="text-2xl font-bold mb-6 text-center">Find your perfect career path</h2>
          
          <div className="grid gap-4 mt-4">
            <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
              <Star className="h-5 w-5 text-yellow-300" />
              <p className="text-sm">Personalized career recommendations</p>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
              <Award className="h-5 w-5 text-blue-300" />
              <p className="text-sm">Expert insights from industry professionals</p>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
              <Lightbulb className="h-5 w-5 text-green-300" />
              <p className="text-sm">Discover your strengths and potentials</p>
            </div>
          </div>
        </motion.div>
        
        {/* Testimonial */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative z-20 mt-auto"
        >
          <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm">
            <blockquote className="space-y-2">
              <p className="text-lg leading-relaxed">
                "ID Picker helped me discover my true calling in life. The career insights were invaluable."
              </p>
              <footer className="text-sm flex items-center mt-2">
                <div className="h-8 w-8 rounded-full bg-zinc-700 mr-2 flex items-center justify-center">SD</div>
                <div>
                  <p className="font-medium">Sofia Davis</p>
                  <p className="text-xs text-zinc-300">Software Engineer</p>
                </div>
              </footer>
            </blockquote>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center mt-6 space-x-4">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="lg:p-">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex justify-center">
            <img
              src="/images/logos/Logo/svg/logo-black.svg"
              alt="ID Picker Logo"
              className="h-16 w-auto mb-4"
            />
          </div>
          <Card className="shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
              <CardDescription className="text-center">
                Sign in to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="w-full" onClick={() => {}}>
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 48 48" fill="none">
                      <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                        s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                        s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" fill="#FFC107"/>
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => {}}>
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    className="transition-all duration-200 focus:ring-2"
                  />
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                    className="transition-all duration-200 focus:ring-2"
                  />
                </div>
                <Button className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/register" className="text-primary hover:underline">
                    Sign up
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  )
}
