import { NextResponse, type NextRequest } from 'next/server'
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { updateSession } from '^/app/supabase/MiddlewareSupabase'

export async function middleware(request: NextRequest) {
   const response = await updateSession(request)

   const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
         cookies: {
            getAll() {
               return request.cookies.getAll()
            },
            setAll(cookiesToSet) {}
         },
      }
   )

   const { data: { user } } = await supabase.auth.getUser()

   const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')
   const isLoginPage = request.nextUrl.pathname.startsWith('/admin/login')

   if (!user && isAdminRoute && !isLoginPage) {
      const url = request.nextUrl.clone()
      url.pathname = '/admin/login'
      return NextResponse.redirect(url)
   }

   if (user && isLoginPage) {
      const url = request.nextUrl.clone()
      url.pathname = '/admin/dashboard'
      return NextResponse.redirect(url)
   }

   return response
}

export const config = {
   matcher: [
      '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
      '/admin/:path*',
   ],
}