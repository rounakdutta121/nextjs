'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, MessageSquare, 
  Calendar, ArrowRight, Globe, ChevronDown, Check
} from 'lucide-react'
import { InlineWidget } from 'react-calendly'
import { FadeIn } from '@/components/Animations'
import { Typewriter } from '@/components/Typewriter'
import { ASSETS, services } from '@/data'
import { submitLeadForm } from '@/utils/formSubmission'

export default function Contact() {
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
    } catch (error) {
      console.error('Failed to submit contact form:', error)
    }
    setContactSubmitting(false)
  }

  return (
    <div className="min-h-screen font-sans bg-slate-950 text-slate-100">
      <section className="relative min-h-screen flex items-center overflow-hidden py-20 md:py-0 section-dark">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src={ASSETS.contactVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-950/60" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="blue-glow -top-20 -left-20 w-[600px] h-[600px] opacity-20" />
        <div className="blue-glow -bottom-20 -right-20 w-[600px] h-[600px] opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0">
          <div className="max-w-5xl">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold mb-8 backdrop-blur-md uppercase tracking-widest">
                <MessageSquare size={16} />
                <span>GET IN TOUCH | LET'S CONNECT</span>
              </div>
            </FadeIn>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10">
              <FadeIn delay={0.4} distance={40}>
                LET'S TALK<br />
              </FadeIn>
              <FadeIn delay={0.6} distance={40}>
                <span className="text-gradient-blue inline-block sm:whitespace-nowrap">
                  <Typewriter words={["DIGITAL MARKETING!", "YOUR GROWTH!", "STRATEGY!", "SUCCESS!"]} />
                </span>
              </FadeIn>
            </h1>
            
            <FadeIn delay={0.8}>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-3xl font-medium">
                Share Your Details and We'll Be in Touch Soon. 
                Why leave it to Chance, when you can leave it to Experts?
              </p>
            </FadeIn>

            <FadeIn delay={1}>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#booking" className="btn-primary px-12 py-5 text-xl justify-center">
                  <Calendar size={24} /> Book Your Call Now
                </a>
                <a href="https://wa.me/919056544487" target="_blank" rel="noreferrer" className="btn-secondary px-12 py-5 text-xl justify-center bg-green-600/10 border-green-600/20 text-green-400 hover:bg-green-600/20">
                  <MessageSquare size={24} /> Connect on WhatsApp
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 section-dark relative overflow-hidden">
        <div className="green-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
        <div className="bubble bubble-green b1" />
        <div className="bubble bubble-green b3" />
        <div className="bubble bubble-green b5" />
        <div className="bubble bubble-green b7" />
        <div className="bubble bubble-green b9" />
        <div className="bubble bubble-green b11" />
        <div className="bubble bubble-green b13" />
        <div className="bubble bubble-green b15" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <FadeIn>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase italic">
                  Book Your <span className="text-white">Schedule </span><span className="text-green-500">Now</span>
                </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
                Select a time that works for you.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl min-h-[600px]">
              <InlineWidget 
                url="https://calendly.com/damnart-contact/discovery-session-for-damnart" 
                styles={{ height: '600px' }}
                prefill={{
                  name: "",
                  email: "",
                  customAnswers: {
                    a1: "Discovery Session for DamnArt"
                  }
                }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="contact" className="pt-24 pb-0 section-dark border-y border-white/5 relative overflow-hidden">
        <div className="green-glow top-0 left-0" />
        <div className="bubble bubble-green b2" />
        <div className="bubble bubble-green b4" />
        <div className="bubble bubble-green b6" />
        <div className="bubble bubble-green b8" />
        <div className="bubble bubble-green b10" />
        <div className="bubble bubble-green b12" />
        <div className="bubble bubble-green b14" />
        <div className="bubble bubble-green b16" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic">
                  Ready to <span className="text-green-500">Talk?</span>
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed font-medium">
                  Maximize your business growth with Damnart's digital marketing expertise. 
                  Connect with our specialists to craft your success plan.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all">
                    <Phone className="text-green-500 mb-4" size={32} />
                    <p className="text-white font-bold mb-1">Call Us</p>
                    <p className="text-slate-400">+91-90565-44487</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all">
                    <Mail className="text-green-500 mb-4" size={32} />
                    <p className="text-white font-bold mb-1">Email Us</p>
                    <p className="text-slate-400">info@damnart.com</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-white font-bold uppercase tracking-widest text-xs">Our Global Hubs</p>
                  <div className="flex flex-wrap gap-3">
                    {['India', 'Canada', 'Dubai', 'UK', 'USA'].map((loc) => (
                      <span key={loc} className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-bold">
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-green-500/20 backdrop-blur-xl relative">
                {contactSuccess && (
                  <div className="absolute inset-0 bg-green-500/10 rounded-[3rem] flex items-center justify-center z-10">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check size={40} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-slate-300">We'll get back to you shortly.</p>
                    </div>
                  </div>
                )}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl rotate-12">
                  <Mail size={32} />
                </div>
                <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-widest">Send a <span className="text-gradient-green">Message</span></h3>
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
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Service</label>
                      <div className="relative">
                        <select 
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
                    whileHover={{ scale: contactSubmitting ? 1 : 1.02, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
                    whileTap={{ scale: contactSubmitting ? 1 : 0.98 }}
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

      <section className="pt-16 pb-24 section-dark relative overflow-hidden">
        <div className="green-glow bottom-0 right-0 w-[600px] h-[600px] opacity-5" />
        <div className="bubble bubble-green b1" />
        <div className="bubble bubble-green b3" />
        <div className="bubble bubble-green b5" />
        <div className="bubble bubble-green b7" />
        <div className="bubble bubble-green b9" />
        <div className="bubble bubble-green b11" />
        <div className="bubble bubble-green b13" />
        <div className="bubble bubble-green b15" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase italic">
                Our Global <span className="text-green-500">Presence</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { city: "India", address: "SCO No. 09-Ground Floor, Aero View Plaza, Airport Road, Dyalpura, Punjab - 140603" },
              { city: "Canada", address: "8449, 116 A Street, Delta - V4C7N7, Greater Vancouver" },
              { city: "Dubai", address: "Suite No 2902 and 2903, The Prism Tower, Business Bay, Dubai, UAE" }
            ].map((loc, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="service-card group border border-green-500/10 hover:border-green-500/30 transition-all">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                    <Globe size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{loc.city}</h3>
                  <p className="text-slate-400 leading-relaxed">{loc.address}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
