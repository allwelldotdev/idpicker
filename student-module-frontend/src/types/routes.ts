export type PublicRoute = '/' | '/login' | '/register' | '/about' | '/pricing' | '/partners' | '/learn' | '/construction'
export type ProtectedRoute = '/dashboard'

export const publicRoutes: PublicRoute[] = [
  '/',
  '/login',
  '/register',
  '/about',
  '/pricing',
  '/partners',
  '/learn',
  '/construction',
]

export const protectedRoutes: ProtectedRoute[] = ['/dashboard']
