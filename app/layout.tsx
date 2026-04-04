import type { Metadata } from 'next'
import './globals.css'
import { Header, Footer, FloatingActions } from '../components/Layout'

export const metadata: Metadata = {
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
    siteName: 'DamnArt',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
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
