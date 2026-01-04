import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Detects if the request is from a mobile device based on User-Agent header
 * @param userAgent - The User-Agent string from the request
 * @returns true if the device is mobile, false otherwise
 */
function isMobileDevice(userAgent: string | null): boolean {
  if (!userAgent) {
    return false;
  }

  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i;
  return mobileRegex.test(userAgent);
}

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent');
  const pathname = request.nextUrl.pathname;

  // Allow access to the mobile-not-supported page itself
  if (pathname === '/mobile-not-supported') {
    return NextResponse.next();
  }

  // Check if the request is from a mobile device
  if (isMobileDevice(userAgent)) {
    // Redirect to mobile-not-supported page
    const url = request.nextUrl.clone();
    url.pathname = '/mobile-not-supported';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
};

