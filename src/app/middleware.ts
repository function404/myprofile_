import { NextResponse, type NextRequest } from 'next/server'
import { createServerClient, type CookieOptions} from '@supabase/ssr'
import { updateSession } from '^/app/supabase/MiddlewareSupabase'

export async function middleware(request: NextRequest) {
   // 1. Atualiza a sessão via cookies (ESSENCIAL)
   const response = await updateSession(request)

   // 2. Cria um cliente Supabase *dentro* do middleware para verificar o usuário
   const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
         cookies: {
         get(name: string) { return request.cookies.get(name)?.value },
         set(name: string, value: string, options: CookieOptions) { /* No middleware, apenas lemos */ },
         remove(name: string, options: CookieOptions) { /* No middleware, apenas lemos */ },
         },
      }
   )

   // 3. Pega o usuário
   const { data: { user } } = await supabase.auth.getUser()

   // 4. Lógica de Redirecionamento
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

   // 5. Retorna a resposta (com cookies atualizados, se houver)
   return response
}

export const config = {
  matcher: [
    /*
     * Corresponde a todas as rotas exceto aquelas que começam com:
     * - _next/static (arquivos estáticos)
     * - _next/image (otimização de imagem)
     * - favicon.ico (arquivo de ícone)
     * Sinta-se à vontade para adicionar mais padrões se necessário.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    '/admin/:path*', // Garante que as rotas admin sejam verificadas
  ],
}