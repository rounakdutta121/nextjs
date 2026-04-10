'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  ArrowRight, Phone, MessageCircle, Download, 
  ChevronDown, Zap, Award, Star, Mail, MapPin, X, Check
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn, FloatingText, PulseText } from '@/components/Animations'
import { Typewriter } from '@/components/Typewriter'
import { ASSETS, services, testimonials, faqs } from '@/data'
import { submitLeadForm, submitBrochureForm } from '@/utils/formSubmission'

const blogPosts = [
  {
    id: 28,
    slug: "funnel-stages",
    title: "If Your Funnel Still Has Stages, You're Already Behind",
    category: "Marketing",
    author: "DamnArt",
    date: "11 April 2025",
    readTime: "3 Min",
    image: "https://res.cloudinary.com/dadofd9d2/image/upload/w_600,f_auto,q_auto/v1774414178/Idhar-Udhar-ke-use-2025-04-11T101138.735-768x432_f7c6im.jpg",
    excerpt: "The Traditional Funnel Is Dead. Here's What Replaced It."
  },
  {
    id: 29,
    slug: "whisper-marketing",
    title: "How Brands Are Secretly 'Whispering' to You on Social Media",
    category: "Marketing",
    author: "DamnArt",
    date: "9 April 2025",
    readTime: "3 Min",
    image: "https://res.cloudinary.com/dadofd9d2/image/upload/w_600,f_auto,q_auto/v1774415128/unnamed-2025-04-09T143637.417-768x768_slsvrm.jpg",
    excerpt: "Ever scrolled through your Instagram feed and felt like a post was speaking directly to you?"
  },
  {
    id: 30,
    slug: "design-brain-triggers",
    title: "Design Isn't What It Looks Like. It's What It Triggers in the Brain",
    category: "Design",
    author: "DamnArt",
    date: "8 April 2025",
    readTime: "3 Min",
    image: "https://res.cloudinary.com/dadofd9d2/image/upload/w_600,f_auto,q_auto/v1774415549/Idhar-Udhar-ke-use-2025-04-08T101140.386_ud2lwi.jpg",
    excerpt: "When we hear the word 'design', most of us think about what we see—fonts, colors, images, and layout."
  },
  {
    id: 31,
    slug: "psychology-almost-buying",
    title: "The Psychology of 'Almost Buying': Why Do People Abandon Carts and Forms?",
    category: "Marketing",
    author: "DamnArt",
    date: "5 April 2025",
    readTime: "3 Min",
    image: "https://res.cloudinary.com/dadofd9d2/image/upload/w_600,f_auto,q_auto/v1774432374/unnamed-2025-04-05T100557.309_z1zdzn.jpg",
    excerpt: "You've done everything right. The product is in the cart, the user clicks 'Proceed to Checkout,' and then… crickets."
  },
]

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0)
  const [displayedBlogs, setDisplayedBlogs] = useState<typeof blogPosts>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [modalForm, setModalForm] = useState({ name: '', email: '', phone: '' })
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [contactSubmitting, setContactSubmitting] = useState(false)
  const [contactSuccess, setContactSuccess] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const shuffled = [...blogPosts].sort(() => Math.random() - 0.5)
    setDisplayedBlogs(shuffled.slice(0, 2))
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await submitBrochureForm(modalForm)
      setIsModalOpen(false)
      setModalForm({ name: '', email: '', phone: '' })
    } catch (error) {
      console.error('Failed to submit brochure form:', error)
    }
    setIsSubmitting(false)
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setContactSubmitting(true)
    try {
      await submitLeadForm(contactForm)
      setContactSuccess(true)
      setContactForm({ name: '', email: '', phone: '', service: '', message: '' })
      setTimeout(() => setContactSuccess(false), 3000)
    } catch (error) {
      console.error('Failed to submit contact form:', error)
    }
    setContactSubmitting(false)
  }

  return (
    <div className="min-h-screen font-sans bg-slate-950 text-slate-100">
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden py-20 md:py-0 section-dark">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-fill opacity-70"
          >
            <source src={ASSETS.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-950/30" />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="bubble bubble-blue b1" />
        <div className="bubble bubble-blue b2" />
        <div className="bubble bubble-blue b3" />
        <div className="bubble bubble-blue b4" />
        <div className="bubble bubble-blue b5" />
        <div className="bubble bubble-blue b6" />
        <div className="bubble bubble-blue b7" />
        <div className="bubble bubble-blue b8" />
        <div className="bubble bubble-blue b9" />
        <div className="bubble bubble-blue b10" />
        <div className="bubble bubble-blue b11" />
        <div className="bubble bubble-blue b12" />
        <div className="bubble bubble-blue b13" />
        <div className="bubble bubble-blue b14" />
        <div className="bubble bubble-blue b15" />
        <div className="bubble bubble-blue b16" />

        <div className="blue-glow -top-20 -left-20 w-[600px] h-[600px] opacity-20" />
        <div className="blue-glow -bottom-20 -right-20 w-[600px] h-[600px] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0">
          <div className="max-w-5xl">
            <div className="animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold mb-8 backdrop-blur-md">
                <Zap size={16} />
                <span>STRATEGIZE | OPTIMIZE | GROW</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10">
              <span>
                DAMNART DIGITAL:<br />
              </span>
              <span className="text-gradient-blue inline-block sm:whitespace-nowrap animate-fadeIn animation-delay-200">
                <Typewriter words={["GROWTH PARTNER!", "SUCCESS STORY!", "CREATIVE ALLY!", "FUTURE SCALE!"]} />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-3xl font-medium animate-fadeIn animation-delay-400">
              Elevate your Brand with Tailored Strategies in PPC, SMM, and Web Design. 
              Partner with us for measurable results and impactful growth in the digital world.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 animate-fadeIn animation-delay-500">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary px-12 py-5 text-xl justify-center"
              >
                Work With Us! <ArrowRight size={24} />
              </motion.button>
              <Link href="/services">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary px-12 py-5 text-xl justify-center w-full"
                >
                  View Services
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 section-dark">
        <div className="blue-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10" />
        <div className="bubble bubble-blue b1" />
        <div className="bubble bubble-blue b3" />
        <div className="bubble bubble-blue b5" />
        <div className="bubble bubble-blue b7" />
        <div className="bubble bubble-blue b9" />
        <div className="bubble bubble-blue b11" />
        <div className="bubble bubble-blue b13" />
        <div className="bubble bubble-blue b15" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <FadeIn>
              <p className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4">Our Expertise</p>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6">
                Our <FloatingText>Specialized</FloatingText> <span className="text-gradient-blue">Services</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-slate-400 max-w-3xl mx-auto text-xl font-medium">We provide a comprehensive suite of digital marketing solutions designed to scale your business.</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              (service.title === "PPC" || service.title === "SMM" || service.title === "Web Development" || service.title === "Content Writing" || service.title === "Graphic Designing" || service.title === "SEO" || service.title === "Digital Marketing Audit" || service.title === "Data Mining" || service.title === "Lead Generation" || service.title === "Pay Per Valid" || service.title === "Influencer Marketing") ? (
                <Link key={idx} href={
                  service.title === "PPC" ? "/ppc" : 
                  service.title === "SMM" ? "/smm" : 
                  service.title === "Web Development" ? "/web-development" :
                  service.title === "Content Writing" ? "/content-writing" :
                  service.title === "Graphic Designing" ? "/graphic-design" :
                  service.title === "SEO" ? "/seo" :
                  service.title === "Digital Marketing Audit" ? "/digital-marketing-audit" :
                  service.title === "Data Mining" ? "/data-mining" :
                  service.title === "Lead Generation" ? "/lead-generation" :
                  service.title === "Pay Per Valid" ? "/pay-per-valid-lead" :
                  "/influencer-marketing"
                } className="block">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="service-card group cursor-pointer h-full"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 text-blue-500">
                      <service.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-blue-500 font-bold group-hover:gap-4 transition-all">
                      Learn More <ArrowRight size={20} />
                    </div>
                  </motion.div>
                </Link>
              ) : (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="service-card group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 text-blue-500">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-blue-500 font-bold group-hover:gap-4 transition-all">
                    Learn More <ArrowRight size={20} />
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 section-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[3rem] overflow-hidden bg-blue-600">
            <div className="absolute inset-0 opacity-20">
              <img src={ASSETS.brochureCover} alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="eager" decoding="async" width={1200} height={800} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-transparent" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 p-12 md:p-24">
              <FadeIn>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                  Ready to Scale Your <span className="text-blue-200">Revenue?</span>
                </h2>
                <p className="text-xl text-blue-50 mb-12 max-w-lg font-medium">
                  Download our 2026 Growth Playbook and discover the AI-driven strategies we use to dominate markets.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold flex items-center gap-2 hover:bg-blue-50 transition-all shadow-xl"
                  >
                    <Download size={20} /> Download Playbook
                  </button>
                  <button 
                    onClick={scrollToContact}
                    className="px-8 py-4 bg-blue-500 text-white border border-blue-400 rounded-full font-bold flex items-center gap-2 hover:bg-blue-400 transition-all"
                  >
                    Talk to an Expert
                  </button>
                </div>
              </FadeIn>
                  <FadeIn direction="left">
                  <div className="hidden lg:block relative">
                    <img src={ASSETS.brochureCover} alt="Brochure" className="rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700" referrerPolicy="no-referrer" loading="eager" decoding="async" width={600} height={800} />
                    <div className="absolute -bottom-8 -left-8 p-8 bg-white rounded-3xl shadow-2xl">
                      <div className="text-4xl font-black text-blue-600 mb-1">500%</div>
                      <div className="text-slate-900 font-bold text-sm uppercase tracking-widest">Avg. ROI Increase</div>
                    </div>
                  </div>
                </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 section-dark border-y border-white/5 relative overflow-hidden">
        <div className="purple-glow top-0 right-0" />
        <div className="bubble bubble-purple b2" />
        <div className="bubble bubble-purple b4" />
        <div className="bubble bubble-purple b6" />
        <div className="bubble bubble-purple b8" />
        <div className="bubble bubble-purple b10" />
        <div className="bubble bubble-purple b12" />
        <div className="bubble bubble-purple b14" />
        <div className="bubble bubble-purple b16" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-purple-500 font-bold mb-2">
                <PulseText><Award size={20} /></PulseText>
                <PulseText><span>OUR TESTIMONIALS</span></PulseText>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white">
                What Our <FloatingText>Clients</FloatingText> <span className="text-gradient-purple">Say</span>
              </h2>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <img src={ASSETS.clutchBadge} alt="Clutch Award" className="h-20 w-auto" referrerPolicy="no-referrer" loading="lazy" width={80} height={80} />
              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold tracking-widest uppercase">
                <img src="https://clutch.co/favicon.ico" alt="Clutch" className="w-4 h-4 grayscale opacity-50" loading="lazy" width={16} height={16} />
                <span>Verified Reviews</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} distance={30}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 flex flex-col h-full transition-all hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-xl italic text-slate-300 mb-8 flex-grow">"{t.quote}"</p>
                  <div className="pt-6 border-t border-white/10">
                    <h3 className="font-bold text-white">{t.company}</h3>
                    <p className="text-sm text-slate-400">{t.industry} • {t.location}</p>
                    <div className="mt-4 p-4 bg-white/5 rounded-xl text-sm text-slate-300 border border-white/10">
                      <span className="font-bold text-purple-400">SUMMARY: </span>
                      {t.summary}
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 section-dark border-y border-white/5 overflow-hidden relative">
        <div className="cyan-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
        <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
          <FadeIn>
            <p className="text-center text-sm font-bold text-cyan-500 uppercase tracking-[0.3em]">
              <PulseText>TRUSTED BY GLOBAL BRANDS & TECHNOLOGY PLATFORMS</PulseText>
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={0.2} distance={0}>
          <div className="flex animate-scroll w-max py-8">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-4">
                {[...ASSETS.platforms, ...ASSETS.clients].map((item, idx) => (
                  <div 
                    key={`${item.name}-${idx}`} 
                    className="flex-shrink-0 px-8 py-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl flex items-center justify-center min-w-[180px] h-20 backdrop-blur-md"
                  >
                    <img 
                      src={item.url} 
                      alt={item.name} 
                      className="h-14 w-auto object-contain" 
                      referrerPolicy="no-referrer" 
                      loading="lazy"
                      decoding="async"
                      width={180}
                      height={56}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section id="blogs" className="py-32 section-dark border-y border-white/5 relative overflow-hidden">
        <div className="blue-glow top-0 left-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
            <div className="max-w-2xl mx-auto md:mx-0">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight uppercase italic">
                Latest <span className="text-gradient-blue">Insights</span>
              </h2>
              <p className="text-slate-400 text-lg">Stay ahead of the curve with our latest marketing strategies and AI breakthroughs.</p>
            </div>
            <Link href="/blogs">
              <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold flex items-center gap-2 hover:bg-blue-600 hover:border-blue-500 transition-all group mx-auto md:mx-0">
                View All Articles <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedBlogs.map((blog, idx) => (
              <FadeIn key={blog.id} delay={idx * 0.1}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  onClick={() => router.push(`/blog/${blog.slug}`)}
                  className="group bg-white/5 rounded-[2rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all h-full flex flex-col cursor-pointer"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" decoding="async" width={768} height={432} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                    <div className="absolute top-6 left-6 px-4 py-2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {blog.category}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-4 line-clamp-2 leading-tight group-hover:text-blue-400 transition-colors">{blog.title}</h3>
                    <p className="text-slate-400 text-sm mb-6 flex-grow">{blog.excerpt}</p>
                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                      <span className="text-slate-500 text-sm">{blog.readTime} read</span>
                      <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-blue-600 transition-all" aria-label="Read more">
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 section-dark relative overflow-hidden">
        <div className="rose-glow bottom-0 right-1/4" />
        <div className="bubble bubble-rose b1" />
        <div className="bubble bubble-rose b3" />
        <div className="bubble bubble-rose b5" />
        <div className="bubble bubble-rose b7" />
        <div className="bubble bubble-rose b9" />
        <div className="bubble bubble-rose b11" />
        <div className="bubble bubble-rose b13" />
        <div className="bubble bubble-rose b15" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 leading-tight uppercase italic">
                Need to <span className="text-gradient-rose">Know</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Common questions about our methodologies and how we drive results for our partners.</p>
            </FadeIn>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className={`rounded-3xl overflow-hidden border transition-all duration-500 ${activeFaq === idx ? 'border-rose-500/50 bg-rose-500/5' : 'border-white/5 bg-white/5 hover:bg-white/10'}`}>
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full p-8 flex justify-between items-center text-left transition-colors"
                  >
                    <span className={`font-bold text-xl md:text-2xl transition-colors ${activeFaq === idx ? 'text-rose-400' : 'text-white'}`}>{faq.q}</span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeFaq === idx ? 'bg-rose-600 text-white rotate-180' : 'bg-white/5 text-slate-400'}`}>
                      <ChevronDown size={24} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-8 pt-0 text-slate-400 text-lg leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 section-dark relative overflow-hidden">
        <div className="green-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="bubble bubble-green b2" />
        <div className="bubble bubble-green b4" />
        <div className="bubble bubble-green b6" />
        <div className="bubble bubble-green b8" />
        <div className="bubble bubble-green b10" />
        <div className="bubble bubble-green b12" />
        <div className="bubble bubble-green b14" />
        <div className="bubble bubble-green b16" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <FadeIn direction="right">
                <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-white mb-8 leading-tight uppercase italic">
                  Let's <span className="text-gradient-green">Dominate</span>
                </h2>
                <p className="text-2xl text-slate-400 mb-12 max-w-lg">
                  Ready to take your brand to the next level? Our experts are standing by.
                </p>
              </FadeIn>
              
              <div className="space-y-8">
                {[
                  { icon: Phone, label: "Call Us", value: "+91-90565-44487" },
                  { icon: Mail, label: "Email Us", value: "info@damnart.com" },
                  { icon: MapPin, label: "Visit Us", value: "Aero View Plaza, Punjab" }
                ].map((item, i) => (
                  <FadeIn key={i} direction="right" delay={0.2 + i * 0.1}>
                    <div className="flex items-center gap-6 group">
                      <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                        <div className="text-xl font-bold text-white">{item.value}</div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
            
            <FadeIn direction="left">
              <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-green-500/20 backdrop-blur-xl relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl rotate-12">
                  <Mail size={32} />
                </div>
                {contactSuccess && (
                  <div className="absolute inset-0 bg-green-500/10 rounded-[3rem] flex items-center justify-center z-10">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check size={40} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-2">Message Sent!</h3>
                      <p className="text-green-300">We'll get back to you soon.</p>
                    </div>
                  </div>
                )}
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-green-500 text-white transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-green-500 text-white transition-all" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+91..." 
                        required
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-green-500 text-white transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service-select" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Service</label>
                      <div className="relative">
                        <select 
                          id="service-select"
                          value={contactForm.service}
                          onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-green-500 text-white transition-all appearance-none"
                        >
                          <option value="">Select Service</option>
                          {services.map((s, i) => (
                            <option key={i} value={s.title} className="bg-slate-900 text-white">{s.title}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
                    <textarea 
                      placeholder="Tell us about your project..." 
                      rows={4} 
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-green-500 text-white transition-all resize-none"
                    ></textarea>
                  </div>
                  <motion.button 
                    type="submit"
                    disabled={contactSubmitting}
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-6 bg-green-500 text-white rounded-2xl font-black text-xl uppercase tracking-widest shadow-xl shadow-green-500/20 flex items-center justify-center gap-3 group disabled:opacity-50"
                  >
                    {contactSubmitting ? "Sending..." : "Send Message"} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-slate-900 border border-white/10 rounded-[2rem] p-8 md:p-12 max-w-md w-full shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={20} />
              </button>
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download size={32} className="text-blue-500" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Download Your Playbook</h3>
                <p className="text-slate-400">Enter your details and we'll send you the 2026 Growth Playbook</p>
              </div>

              <form onSubmit={handleModalSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    required
                    value={modalForm.name}
                    onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    required
                    value={modalForm.email}
                    onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91..." 
                    required
                    value={modalForm.phone}
                    onChange={(e) => setModalForm({ ...modalForm, phone: e.target.value })}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white transition-all" 
                  />
                </div>
                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg uppercase tracking-widest shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 group disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Get Playbook"} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
