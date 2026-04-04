import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { Header, Footer, FloatingActions } from '../components/Layout'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://damnartusa.vercel.app'),
  verification: {
    google: '3D4xD7u47Lj6Xpt-360dQQnBNsZyc_iEMe8DPQg6l2o',
  },
  title: {
    template: '%s | DamnArt - Digital Marketing Agency',
    default: 'DamnArt - Digital Marketing Agency',
  },
  description: 'Empowering brands with AI-driven strategies and creative excellence. Your partner in digital dominance.',
  authors: [{ name: 'DamnArt' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://damnartusa.vercel.app',
    siteName: 'DamnArt',
    title: 'DamnArt - Digital Marketing Agency',
    description: 'Empowering brands with AI-driven strategies and creative excellence. Your partner in digital dominance.',
    images: [
      {
        url: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1772011438/Damn-Art-Logo-Final-Only-Logo-r6dasn0nfh4nzs4a4fd97txlvs2437uw1zu2i0825k_qe24gm.png',
        width: 100,
        height: 100,
        alt: 'DamnArt Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DamnArt - Digital Marketing Agency',
    description: 'Empowering brands with AI-driven strategies and creative excellence. Your partner in digital dominance.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://damnartusa.vercel.app',
  },
  icons: {
    icon: [
      { url: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1772011438/Damn-Art-Logo-Final-Only-Logo-r6dasn0nfh4nzs4a4fd97txlvs2437uw1zu2i0825k_qe24gm.png', type: 'image/png' },
    ],
    apple: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1772011438/Damn-Art-Logo-Final-Only-Logo-r6dasn0nfh4nzs4a4fd97txlvs2437uw1zu2i0825k_qe24gm.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <FloatingActions />
        <Footer />
      </body>
    </html>
  )
}
