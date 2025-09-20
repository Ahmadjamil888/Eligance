import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect old e-commerce routes to service routes
  if (pathname === '/collections') {
    return NextResponse.redirect(new URL('/services', request.url));
  }
  
  if (pathname === '/new-arrivals') {
    return NextResponse.redirect(new URL('/portfolio', request.url));
  }
  
  if (pathname === '/products' || pathname.startsWith('/products/')) {
    return NextResponse.redirect(new URL('/portfolio', request.url));
  }

  // Redirect specific service paths
  if (pathname === '/collections/dresses') {
    return NextResponse.redirect(new URL('/services', request.url));
  }
  
  if (pathname === '/collections/tops') {
    return NextResponse.redirect(new URL('/services', request.url));
  }
  
  if (pathname === '/collections/bottoms') {
    return NextResponse.redirect(new URL('/services', request.url));
  }
  
  if (pathname === '/collections/outerwear') {
    return NextResponse.redirect(new URL('/services', request.url));
  }
  
  if (pathname === '/collections/accessories') {
    return NextResponse.redirect(new URL('/services', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/collections/:path*',
    '/new-arrivals',
    '/products/:path*'
  ]
};