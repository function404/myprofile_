import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: '#f4f4f4',
  initialScale: 1,
  maximumScale: 1,
  width: 'device-width',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://function404.netlify.app/'),
  title: 'Welcome | Function404',
  description: 'Bem-vindo(a) ao meu portfólio! este é o espaço onde compartilho meus projetos. Fique à vontade para explorar e conhecer meu trabalho 😁!',
  creator: 'Function404',
  authors: [{ name: 'Next.js Team', url: 'https://nextjs.org' }],
  generator: 'NextJS',
  keywords: ['Function404', 'developer', 'portfolio', 'projetos', 'tecnologias', 'desenvolvimento', 'web', 'mobile', 'front-end', 'programação', 'programador', 'desenvolvedor', 'webdev', 'webdeveloper', 'webdesign'],
  twitter: {
    site: '@function404',
    card: 'summary_large_image',
    images: '/meone.png',
  },
  openGraph: {
    title: 'Function404 - Portfolio',
    description: 'Bem-vindo(a) ao meu portfólio! este é o espaço onde compartilho meus projetos. Fique à vontade para explorar e conhecer meu trabalho 😁!',
    siteName: 'FUNCTION404',
    type: 'website',
    url: 'https://function404.netlify.app/',
    images: [{ url: '/meone.png' }],
    countryName: 'Brazil',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
