'use client'

import { useState } from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

const tests = [
  { id: 'personality', name: 'Personality Test', duration: '15 min' },
  { id: 'interests', name: 'Interest Assessment', duration: '10 min' },
  { id: 'skills', name: 'Skills Evaluation', duration: '20 min' },
  { id: 'values', name: 'Work Values', duration: '10 min' },
]

export default function Analysis() {
  const [activeTest, setActiveTest] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-12">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Character Analysis</h1>
            <Button variant="outline">Connect Social Media</Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {tests.map((test) => (
              <Card key={test.id} className="p-6">
                <h3 className="text-xl font-semibold mb-2">{test.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Duration: {test.duration}
                </p>
                <Button 
                  onClick={() => setActiveTest(test.id)}
                  variant={activeTest === test.id ? 'secondary' : 'default'}
                >
                  Start Test
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
