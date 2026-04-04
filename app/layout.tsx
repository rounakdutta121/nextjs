import type { Metadata } from 'next'
import './globals.css'
import { Header, Footer, FloatingActions } from '../components/Layout'

export const metadata: Metadata = {
  metadataBase: new URL('https://damnartusa.vercel.app'),
  title: {
    template: '%s | DamnArt - Digital Marketing Agency',
    default: 'DamnArt - Digital Marketing Agency',
  },
  description: 'Empowering brands with AI-driven strategies and creative excellence. Your partner in digital dominance.',
  keywords: ['digital marketing', 'PPC', 'SEO', 'social media marketing', 'web development', 'graphic design'],
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
  icons: {
    icon: [
      { url: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1772011438/Damn-Art-Logo-Final-Only-Logo-r6dasn0nfh4nzs4a4fd97txlvs2437uw1zu2i0825k_qe24gm.png', type: 'image/png' },
    ],
    apple: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1772011438/Damn-Art-Logo-Final-Only-Logo-r6dasn0nfh4nzs4a4fd97txlvs2437uw1zu2i0825k_qe24gm.png',
  },
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <FloatingActions />
        <Footer />
      </body>
    </html>
  )
}
