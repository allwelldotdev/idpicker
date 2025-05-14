import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { publicRoutes, type PublicRoute } from './types/routes'

const locales = ['en', 'tr']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  // Get accept-language header
  const acceptLanguage = request.headers.get('accept-language') ?? defaultLocale
  const languages = acceptLanguage.split(',').map((lang) => lang.split(';')[0].trim())

  const savedLocale = request.cookies.get('NEXT_LOCALE')?.value

  // First check saved locale
  if (savedLocale && locales.includes(savedLocale)) {
    return savedLocale
  }

  // Then check if any of the browser's preferred languages match our locales
  for (const language of languages) {
    const locale = language.split('-')[0] // Handle cases like 'en-US'
    if (locales.includes(locale)) {
      return locale
    }
  }

  return defaultLocale
}

function isPublicRoute(path: string): path is PublicRoute {
  return publicRoutes.includes(path as PublicRoute)
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip middleware for static files and api routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Check if pathname starts with a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // For public routes, don't add locale prefix
    if (isPublicRoute(pathname)) {
      return NextResponse.next()
    }

    // Redirect to locale prefixed path
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, images)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
