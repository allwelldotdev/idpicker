import { publicRoutes, type PublicRoute } from './types/routes'

export const siteConfig = {
  publicRoutes: ['/', '/login', '/register', '/about', '/pricing', '/partners', '/learn', '/construction'],
  protectedRoutes: ['/dashboard'],
  defaultLocale: 'en',
  locales: ['en', 'tr']
} as const

export function getLocalizedPath(path: PublicRoute | string, locale: string) {
  // Don't add locale prefix for public routes
  if (publicRoutes.includes(path as PublicRoute)) {
    return path
  }
  return `/${locale}${path}`
}
