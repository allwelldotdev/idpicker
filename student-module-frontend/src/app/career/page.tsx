'use client'

import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Career() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-12">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Career Recommendations</h1>

          <Tabs defaultValue="careers" className="space-y-6">
            <TabsList>
              <TabsTrigger value="careers">Careers</TabsTrigger>
              <TabsTrigger value="universities">Universities</TabsTrigger>
              <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
            </TabsList>

            <TabsContent value="careers" className="grid gap-6 md:grid-cols-2">
              {/* Career cards would go here */}
            </TabsContent>

            <TabsContent value="universities">
              {/* University recommendations */}
            </TabsContent>

            <TabsContent value="roadmap">
              {/* Interactive career roadmap */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  )
}
