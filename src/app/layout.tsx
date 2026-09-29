import type { Metadata, Viewport } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

export const viewport: Viewport = {
  themeColor: '#f4f4f4',
  initialScale: 1,
  maximumScale: 1,
  width: 'device-width',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://function404.netlify.app/'),
  title: 'Welcome | Functionss',
  description: 'Bem-vindo(a) ao meu portfólio! este é o espaço onde compartilho meus projetos. Fique à vontade para explorar e conhecer meu trabalho 😁!',
  creator: 'Functionss',
  authors: [{ name: 'Next.js Team', url: 'https://nextjs.org' }],
  generator: 'NextJS',
  keywords: ['Functionss', 'developer', 'portfolio', 'projetos', 'tecnologias', 'desenvolvimento', 'web', 'mobile', 'front-end', 'programação', 'programador', 'desenvolvedor', 'webdev', 'webdeveloper', 'webdesign'],
  twitter: {
    site: '@functionss',
    card: 'summary_large_image',
    images: '/meone.png',
  },
  openGraph: {
    title: 'Functionss - Portfolio',
    description: 'Bem-vindo(a) ao meu portfólio! este é o espaço onde compartilho meus projetos. Fique à vontade para explorar e conhecer meu trabalho 😁!',
    siteName: 'FUNCTIONSS',
    type: 'website',
    url: 'https://function404.netlify.app/',
    images: [{ url: '/meone.png' }],
    countryName: 'Brazil',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <body className={`${inter.className} ${orbitron.variable}`}>{children}</body>
    </html>
  )
}
