'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { 
  Zap, Users, Layout, PenTool, Search, Award, 
  BarChart3, Database, Globe, Mail, ArrowRight,
  Phone, MapPin, ChevronDown, Check
} from 'lucide-react'
import { FadeIn, FloatingText, PulseText } from '@/components/Animations'
import { Typewriter } from '@/components/Typewriter'
import { ASSETS, services } from '@/data'
import { submitLeadForm } from '@/utils/formSubmission'

const allServices = [
  { title: "PPC", description: "Drive targeted traffic to your website and increase conversions with PPC ads.", icon: Zap },
  { title: "SMM", description: "Grow your brand awareness and engagement on social media platforms.", icon: Users },
  { title: "Web Development", description: "Craft a user-friendly, high-performing website to achieve your business goals.", icon: Layout },
  { title: "Content Writing", description: "Create compelling content that engages your audience and boosts conversions.", icon: PenTool },
  { title: "Graphic Designing", description: "Design eye-catching visuals that effectively communicate your brand message.", icon: PenTool },
  { title: "SEO", description: "Improve your search ranking and attract qualified leads organically.", icon: Search },
  { title: "Training Courses", description: "We offers a wide range of training courses in Digital Marketing and AI Tools", icon: Award },
  { title: "Digital Marketing Audit", description: "Maximize ROI with a Data-Driven Digital Marketing Performance Audit", icon: BarChart3 },
  { title: "Data Mining", description: "Extract Actionable Insights with Advanced Data Mining Solutions", icon: Database },
  { title: "Lead Generation", description: "Generate High-Quality Leads & Boost Conversions Effortlessly", icon: Zap },
  { title: "Pay Per Valid", description: "Maximize ROI with a Data-Driven Digital Marketing Performance Audit", icon: BarChart3 },
  { title: "Influencer Marketing", description: "Extract Actionable Insights with Advanced Data Mining Solutions", icon: Globe },
]

export default function Services() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [contactSubmitting, setContactSubmitting] = useState(false)
  const [contactSuccess, setContactSuccess] = useState(false)

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
    <div>
      <section className="relative min-h-screen flex items-center overflow-hidden py-20 md:py-0 section-dark">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src={ASSETS.servicesVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-950/60" />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="blue-glow -top-20 -left-20 w-[600px] h-[600px] opacity-20" />
        <div className="blue-glow -bottom-20 -right-20 w-[600px] h-[600px] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0">
          <div className="max-w-5xl">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold mb-8 backdrop-blur-md">
                <Zap size={16} />
                <span>DAMNART SERVICES | SCALE YOUR BRAND</span>
              </div>
            </FadeIn>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10">
              <FadeIn delay={0.4} distance={40}>
                WE ARE YOUR<br />
              </FadeIn>
              <FadeIn delay={0.6} distance={40}>
                <span className="text-gradient-blue inline-block sm:whitespace-nowrap">
                  <Typewriter words={["GROWTH ENGINE!", "CREATIVE HUB!", "DATA ALLY!", "STRATEGIC PARTNER!"]} />
                </span>
              </FadeIn>
            </h1>

            <FadeIn delay={0.8}>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-3xl font-medium">
                DamnArt is a performance-driven digital marketing agency dedicated to scaling brands through 
                AI-powered strategies and creative excellence. We don't just provide services; we build success stories.
              </p>
            </FadeIn>

            <FadeIn delay={1}>
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary px-12 py-5 text-xl justify-center"
                >
                  Get Started <ArrowRight size={24} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('services-list')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary px-12 py-5 text-xl justify-center"
                >
                  View All Services
                </motion.button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="services-list" className="pt-24 pb-0 -mb-16 section-dark relative overflow-hidden">
        <div className="orange-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
        <div className="bubble bubble-orange b1" />
        <div className="bubble bubble-orange b3" />
        <div className="bubble bubble-orange b5" />
        <div className="bubble bubble-orange b7" />
        <div className="bubble bubble-orange b9" />
        <div className="bubble bubble-orange b11" />
        <div className="bubble bubble-orange b13" />
        <div className="bubble bubble-orange b15" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 leading-tight uppercase italic">
                What We're <span className="text-gradient-blue">Great At</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, idx) => (
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
                } className="block h-full">
                  <FadeIn delay={idx * 0.05}>
                    <motion.div 
                      whileHover={{ y: -10 }}
                      className="service-card group h-full cursor-pointer"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 text-orange-500">
                        <service.icon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-slate-400 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-8 flex items-center gap-2 text-orange-500 font-bold group-hover:gap-4 transition-all">
                        Learn More <ArrowRight size={20} />
                      </div>
                    </motion.div>
                  </FadeIn>
                </Link>
              ) : (
  
                <FadeIn delay={idx * 0.05}>
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="service-card group h-full"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 text-orange-500">
                      <service.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                </FadeIn>
              )
            ))}
          </div>
        </div>
      </section>

      <section className="-mt-96 py-4 md:py-6 section-dark relative overflow-hidden">
        <div className="orange-glow bottom-0 right-0 w-[600px] h-[600px] opacity-10" />
        <div className="bubble bubble-orange b2" />
        <div className="bubble bubble-orange b4" />
        <div className="bubble bubble-orange b6" />
        <div className="bubble bubble-orange b8" />
        <div className="bubble bubble-orange b10" />
        <div className="bubble bubble-orange b12" />
        <div className="bubble bubble-orange b14" />
        <div className="bubble bubble-orange b16" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 text-center">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Discover What We Can <br /> <span className="text-orange-200">Achieve Together:</span>
              </h2>
              <p className="text-base sm:text-lg text-orange-50 mb-8 max-w-3xl mx-auto font-medium">
                Share Your Details and We'll Do the Rest! Let's have a conversation. We'd love to provide some honest guidance.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-6 sm:px-12 py-4 sm:py-5 bg-white text-orange-600 rounded-full font-black text-lg sm:text-xl uppercase tracking-widest shadow-2xl hover:bg-orange-50 transition-all"
              >
                FREE CONSULTATION CALL
              </motion.button>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 section-dark relative overflow-hidden">
        <div className="cyan-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="bubble bubble-cyan b1" />
        <div className="bubble bubble-cyan b3" />
        <div className="bubble bubble-cyan b5" />
        <div className="bubble bubble-cyan b7" />
        <div className="bubble bubble-cyan b9" />
        <div className="bubble bubble-cyan b11" />
        <div className="bubble bubble-cyan b13" />
        <div className="bubble bubble-cyan b15" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <FadeIn direction="right">
                <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-white mb-8 leading-tight uppercase italic">
                  Contact <span className="text-gradient-cyan">Us</span>
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
    
                  <FadeIn direction="right" delay={0.2 + i * 0.1}>
                    <div className="flex items-center gap-6 group">
                      <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-500 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500">
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
              <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-cyan-500/20 backdrop-blur-xl relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500 rounded-full flex items-center justify-center text-white shadow-2xl rotate-12">
                  <Mail size={32} />
                </div>
                {contactSuccess && (
                  <div className="absolute inset-0 bg-green-500/90 rounded-[3rem] flex items-center justify-center z-10">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check size={40} className="text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                      <p className="text-green-100">We'll get back to you soon.</p>
                    </div>
                  </div>
                )}
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                      <input type="text" placeholder="John Doe" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500 text-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                      <input type="email" placeholder="john@example.com" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500 text-white transition-all" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                      <input type="tel" placeholder="+91..." value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500 text-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service-select" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Service</label>
                      <div className="relative">
                        <select id="service-select" value={contactForm.service} onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500 text-white transition-all appearance-none">
                          <option value="" disabled>Select Service</option>
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
                    <textarea placeholder="Tell us about your project..." rows={4} value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500 text-white transition-all resize-none"></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    disabled={contactSubmitting}
                    className="w-full py-6 bg-cyan-500 text-white rounded-2xl font-black text-xl uppercase tracking-widest shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {contactSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
