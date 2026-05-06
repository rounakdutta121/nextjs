'use client'

import { ReactNode, useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle, Phone, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blogs', path: '/blogs' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    if (pathname !== '/') {
      window.location.href = '/#contact'
      return
    }
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      const contactForm = document.getElementById('contact-form')
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="https://res.cloudinary.com/dadofd9d2/image/upload/w_100,h_100,c_fill,f_auto,q_auto/v1775472387/Damnart_logo_dm5y88.png" 
              alt="DamnArt Logo" 
              width={100} 
              height={100} 
              loading="eager" 
              className="h-10 w-auto object-contain" 
            />
            <span className="text-2xl font-black tracking-tighter text-white">DIGI<span className="text-blue-500">MARKETINGART</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                href={item.path} 
                className={`text-sm font-bold transition-colors ${pathname === item.path ? 'text-blue-500' : 'text-white/70 hover:text-blue-400'}`}
              >
                {item.name}
              </Link>
            ))}
            <button onClick={scrollToContact} className="btn-primary">Work With Us!</button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-slate-950 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {NAV_ITEMS.map((item) => (
                <Link 
                  key={item.path} 
                  href={item.path} 
                  className={`text-2xl font-bold ${pathname === item.path ? 'text-blue-500' : 'text-white'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button onClick={() => { scrollToContact(); setIsMenuOpen(false) }} className="btn-primary justify-center w-full py-4 text-lg">Work With Us!</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export function Footer() {
  return (
    <footer className="py-24 section-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="https://res.cloudinary.com/dadofd9d2/image/upload/w_100,h_100,c_fill,f_auto,q_auto/v1775472387/Damnart_logo_dm5y88.png" 
                alt="DamnArt Logo" 
                width={100} 
                height={100} 
                loading="lazy" 
                className="h-10 w-auto object-contain" 
              />
              <span className="text-2xl font-black text-white tracking-tighter italic uppercase">DigiMarketingArt</span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Empowering brands with AI-driven strategies and creative excellence. Your partner in digital dominance.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, url: 'https://www.facebook.com/people/DigiMarketingArt-Digital-Marketing-Services/61562382662176/' },
                { Icon: Instagram, url: 'https://www.instagram.com/digimarketingartartservices/' },
                { Icon: Youtube, url: 'https://www.youtube.com/@DigiMarketingArt-g7k' },
                { Icon: Linkedin, url: 'https://www.linkedin.com/company/digimarketingartart/?viewAsMember=true' }
              ].map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.Icon.name}`}
                  whileHover={{ scale: 1.1, color: "#3b82f6" }}
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-white/10 transition-all"
                >
                  <social.Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Quick Links</h3>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 transition-colors">Our Services</Link></li>
              <li><Link href="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
              <li><Link href="/blogs" className="hover:text-blue-500 transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Services</h3>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/ppc" className="hover:text-blue-500 transition-colors">PPC Management</Link></li>
              <li><Link href="/smm" className="hover:text-blue-500 transition-colors">Social Media</Link></li>
              <li><Link href="/seo" className="hover:text-blue-500 transition-colors">SEO Services</Link></li>
              <li><Link href="/web-development" className="hover:text-blue-500 transition-colors">Web Development</Link></li>
              <li><Link href="/graphic-design" className="hover:text-blue-500 transition-colors">Graphic Design</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contact</h3>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a href="mailto:info@digimarketingartart.com" className="hover:text-blue-500 transition-colors">info@digimarketingartart.com</a>
              </li>
              <li>
                <a href="tel:+919056544487" className="hover:text-blue-500 transition-colors">+91-90565-44487</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-slate-500">
          <p>© 2026 DigiMarketingArt. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919056544487"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-colors"
      >
        <MessageCircle size={28} />
      </motion.a>
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:+919056544487"
        aria-label="Call us"
        className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-700 transition-colors"
      >
        <Phone size={28} />
      </motion.a>
    </div>
  )
}

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return children
}
