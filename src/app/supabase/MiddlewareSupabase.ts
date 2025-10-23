import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { type NextRequest, NextResponse } from 'next/server'

export async function updateSession(request: NextRequest) {
   let response = NextResponse.next({
      request: {
         headers: request.headers,
      },
   })

   const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
         cookies: {
            get(name: string) {
               return request.cookies.get(name)?.value
            },
            set(name: string, value: string, options: CookieOptions) {
               request.cookies.set({ name, value, ...options })
               response = NextResponse.next({ request }) // isso atualiza a resposta com o cookie
            },
            remove(name: string, options: CookieOptions) {
               request.cookies.set({ name, value: '', ...options })
               response = NextResponse.next({ request }) // isso atualiza a resposta com o cookie removido
            },
         },
      }
   )

   await supabase.auth.getUser()

   return response
}