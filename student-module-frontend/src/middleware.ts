import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of supported locales
const locales = ['en', 'tr']
const defaultLocale = 'en'

function getLocale(request: NextRequest) {
  // Check for locale in cookie
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0])
      .find(lang => locales.includes(lang))
    if (preferredLocale) {
      return preferredLocale
    }
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const locale = getLocale(request)
  
  // Skip if pathname starts with /api, /_next, /static, etc.
  if (
    /^\/(?!api|_next|.*\..*)/.test(pathname)
  ) {
    const response = NextResponse.next()
    response.cookies.set('NEXT_LOCALE', locale)
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
