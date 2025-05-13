export interface User {
  id: string
  name: string
  email: string
  profileComplete: number
  testsCompleted: string[]
}

export interface TestResult {
  id: string
  userId: string
  testType: string
  results: Record<string, number>
  completedAt: string
}

export interface CareerMatch {
  id: string
  title: string
  matchScore: number
  requirements: string[]
  salary: {
    min: number
    max: number
  }
  growth: string
}

export interface University {
  id: string
  name: string
  country: string
  programs: Program[]
  ranking: number
}

export interface Program {
  id: string
  name: string
  degree: string
  duration: string
  language: string
  tuition: number
}
