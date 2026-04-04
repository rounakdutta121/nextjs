'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Zap, ArrowRight, CheckCircle2, Mail, Phone, MapPin, 
  ChevronDown, Target, BarChart3, Globe, MousePointerClick, 
  Search, Layout, Users, Check
} from 'lucide-react'
import { FadeIn, FloatingText } from '@/components/Animations'
import { Typewriter } from '@/components/Typewriter'
import { ASSETS, services } from '@/data'
import { submitLeadForm } from '@/utils/formSubmission'

export default function PPC() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', service: 'PPC', message: '' })
  const [contactSubmitting, setContactSubmitting] = useState(false)
  const [contactSuccess, setContactSuccess] = useState(false)

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setContactSubmitting(true)
    try {
      await submitLeadForm(contactForm)
      setContactSuccess(true)
      setContactForm({ name: '', email: '', phone: '', service: 'PPC', message: '' })
      setTimeout(() => setContactSuccess(false), 3000)
    } catch (error) {
      console.error('Failed to submit contact form:', error)
    }
    setContactSubmitting(false)
  }

  const platforms = [
    {
      id: "google",
      name: "Google Ads",
      image: ASSETS.ppcPlatforms.google,
      desc: "Reach a vast online audience through search and display advertising on various google platforms.",
      details: "Google Ads is the most popular PPC platform, allowing businesses to place ads on Google's search engine results pages (SERPs), YouTube, and partner websites.",
      features: [
        "Target Specific Keywords: Reach potential customers by bidding on keywords relevant to your business.",
        "Various Ad Formats: Reach potential customers by bidding on keywords relevant to your business.",
        "Advanced Targeting Options: Target users based on location, demographics, interests, and more.",
        "Performance Tracking: Measure the success of your campaigns with detailed analytics."
      ],
      color: { bg: "bg-blue-500/10", text: "text-blue-500", hover: "group-hover:bg-blue-500 group-hover:text-white", gradient: "from-blue-600/20 to-transparent", glow: "#2563eb" }
    },
    {
      id: "meta",
      name: "Meta Ads (FB & INSTA)",
      image: ASSETS.ppcPlatforms.meta,
      desc: "Target specific demographics and interests on the largest social media platform.",
      details: "Meta Ads offer robust advertising solutions on Facebook and Instagram, helping you connect with a wide audience through highly visual and engaging ad formats.",
      features: [
        "Precise Audience Targeting: Use demographics, interests, behaviors, and custom audiences to target your ideal customers.",
        "Diverse Ad Formats: Create image, video, carousel, and story ads that captivate users.",
        "Comprehensive Analytics: Monitor the performance of your campaigns with insights and reporting tools.",
        "Retargeting Capabilities: Re-engage users who have previously interacted with your brand."
      ],
      color: { bg: "bg-purple-500/10", text: "text-purple-500", hover: "group-hover:bg-purple-500 group-hover:text-white", gradient: "from-purple-600/20 to-transparent", glow: "#9333ea" }
    },
    {
      id: "linkedin",
      name: "LinkedIn Ads",
      image: ASSETS.ppcPlatforms.linkedin,
      desc: "Connect with professionals and B2B audiences",
      details: "LinkedIn Ads are perfect for B2B marketing, allowing you to reach professionals and decision-makers in various industries.",
      features: [
        "Professional Audience: Target ads to specific job titles, industries, and companies.",
        "Content-Based Advertising: Promote your content with sponsored content, message ads, and dynamic ads.",
        "Lead Generation: Utilize LinkedIn's lead generation forms to capture valuable leads directly from your ads.",
        "Insightful Analytics: Gain insights into campaign performance and audience engagement."
      ],
      color: { bg: "bg-blue-500/10", text: "text-blue-500", hover: "group-hover:bg-blue-500 group-hover:text-white", gradient: "from-blue-600/20 to-transparent", glow: "#0A66C2" }
    },
    {
      id: "taboola",
      name: "Taboola Ads",
      image: ASSETS.ppcPlatforms.taboola,
      desc: "Promote content across premium publisher sites to drive engagement and traffic.",
      details: "Taboola Ads help you reach potential customers through native advertising on premium publisher sites.",
      features: [
        "Native Ad Placement: Blend your ads seamlessly with editorial content on top websites.",
        "Content Discovery: Promote your content to users who are interested in related topics.",
        "Audience Targeting: Reach users based on their reading habits and interests.",
        "Engagement Metrics: Track how users interact with your ads and optimize for better performance."
      ],
      color: { bg: "bg-orange-500/10", text: "text-orange-500", hover: "group-hover:bg-orange-500 group-hover:text-white", gradient: "from-orange-600/20 to-transparent", glow: "#f97316" }
    },
    {
      id: "microsoft",
      name: "Microsoft Ads",
      image: ASSETS.ppcPlatforms.bing,
      desc: "Advertise on Microsoft's search engine network, including Bing and Yahoo.",
      details: "Microsoft Ads (formerly Bing Ads) provide an alternative PPC platform to reach users on Bing, Yahoo, and AOL.",
      features: [
        "Keyword Targeting: Bid on keywords to display your ads on search engine results pages.",
        "Ad Extensions: Enhance your ads with additional information like call buttons, location, and site links.",
        "Demographic Targeting: Target users based on age, gender, and device type.",
        "Cost-Effective Advertising: Often lower cost-per-click compared to other PPC platforms."
      ],
      color: { bg: "bg-cyan-500/10", text: "text-cyan-500", hover: "group-hover:bg-cyan-500 group-hover:text-white", gradient: "from-cyan-600/20 to-transparent", glow: "#06b6d4" }
    }
  ]

  const timeline = [
    {
      week: "Week 1",
      phases: [
        {
          title: "Client Acquisition & Onboarding",
          items: ["Initial Consultation", "Needs Assessment", "Proposal and Agreement"]
        },
        {
          title: "Research & Strategy Development",
          items: ["Market Research", "Audience Analysis", "Campaign Strategy"]
        }
      ]
    },
    {
      week: "Week 2",
      phases: [
        {
          title: "Campaign Setup",
          items: ["Keyword Research", "Ad Copy Creation", "Landing Page Optimization", "Account Setup", "Campaign Configuration"]
        }
      ]
    },
    {
      week: "Week 3",
      phases: [
        {
          title: "Campaign Launch & Monitoring",
          items: ["Launch Campaigns", "Initial Monitoring", "Optimization"]
        }
      ]
    },
    {
      week: "Week 4 & Onwards",
      phases: [
        {
          title: "Performance Analysis & Reporting",
          items: ["Weekly Reports", "Monthly Reviews", "Client Feedback"]
        },
        {
          title: "Continuous Optimization",
          items: ["A/B Testing", "Performance Tweaks", "Budget Adjustments"]
        }
      ]
    }
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
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
            <source src={ASSETS.ppcVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-950/60" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="blue-glow -top-20 -left-20 w-[600px] h-[600px] opacity-20" />
        <div className="blue-glow -bottom-20 -right-20 w-[600px] h-[600px] opacity-20" />
        
        <div className="bubble bubble-blue b1" />
        <div className="bubble bubble-blue b2" />
        <div className="bubble bubble-blue b3" />
        <div className="bubble bubble-blue b4" />
        <div className="bubble bubble-purple b5" />
        <div className="bubble bubble-purple b6" />
        <div className="bubble bubble-purple b7" />
        <div className="bubble bubble-purple b8" />
        <div className="bubble bubble-cyan b9" />
        <div className="bubble bubble-cyan b10" />
        <div className="bubble bubble-cyan b11" />
        <div className="bubble bubble-cyan b12" />
        <div className="bubble bubble-orange b13" />
        <div className="bubble bubble-orange b14" />
        <div className="bubble bubble-orange b15" />
        <div className="bubble bubble-orange b16" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0">
          <div className="max-w-5xl">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold mb-8 backdrop-blur-md">
                <Zap size={16} />
                <span>PPC | PAY-PER-CLICK</span>
              </div>
            </FadeIn>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10">

              <FadeIn delay={0.4} distance={40}>
                STOP WASTING<br />
              </FadeIn>

              <FadeIn delay={0.6} distance={40}>
                <span className="text-gradient-blue inline-block sm:whitespace-nowrap">
                  <Typewriter words={["BUDGET!", "TIME!", "RESOURCES!", "OPPORTUNITIES!"]} />
                </span>
              </FadeIn>
            </h1>
            
            <FadeIn delay={0.8}>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-3xl font-medium">
                Invest in High-Performance PPC Solutions. Maximize your business growth with Damnart's digital marketing expertise.
              </p>
            </FadeIn>

            <FadeIn delay={1}>
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="btn-primary px-12 py-5 text-xl justify-center"
                >
                  Get a Quote <ArrowRight size={24} />
                </motion.button>
                <motion.a 
                  href="https://calendly.com/damnart-contact/discovery-session-for-damnart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-12 py-5 text-xl justify-center"
                >
                  Book a Call
                </motion.a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 section-dark border-y border-white/30 relative overflow-hidden">
        <div className="bubble bubble-purple b1" />
        <div className="bubble bubble-purple b2" />
        <div className="bubble bubble-purple b3" />
        <div className="bubble bubble-purple b4" />
        <div className="bubble bubble-cyan b5" />
        <div className="bubble bubble-cyan b6" />
        <div className="bubble bubble-cyan b7" />
        <div className="bubble bubble-cyan b8" />
        <div className="bubble bubble-orange b9" />
        <div className="bubble bubble-orange b10" />
        <div className="bubble bubble-orange b11" />
        <div className="bubble bubble-orange b12" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic mb-6">
                PPC ADS <span className="text-gradient-blue">PLATFORMS</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {platforms.map((platform, i) => (


              <FadeIn delay={i * 0.1}>
                <div className="service-card group h-full flex flex-col">
                  <div 
                    className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-all duration-500"
                    style={{ backgroundColor: `${platform.color.glow}1a`, color: platform.color.glow }}
                  >
                    <Zap size={24} />
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 uppercase tracking-wider">{platform.name}</h3>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">
                    {platform.desc}
                  </p>
                  <motion.a 
                    href={`#${platform.id}`}
                    className="font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all"
                    style={{ color: platform.color.glow }}
                  >
                    LEARN MORE <ArrowRight size={14} />
                  </motion.a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {platforms.map((platform, i) => (
        <section key={platform.id} id={platform.id} className={`py-32 section-dark relative overflow-hidden ${i % 2 === 0 ? 'bg-slate-900/30' : ''}`}>
          <div className="bubble bubble-purple b1" />
          <div className="bubble bubble-purple b3" />
          <div className="bubble bubble-purple b5" />
          <div className="bubble bubble-purple b7" />
          <div className="bubble bubble-cyan b9" />
          <div className="bubble bubble-cyan b11" />
          <div className="bubble bubble-cyan b13" />
          <div className="bubble bubble-cyan b15" />
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

              <FadeIn direction={i % 2 === 0 ? "right" : "left"}>
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic">
                    {platform.name.split(' ')[0]} <span style={{ color: platform.color.glow }}>{platform.name.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    {platform.details}
                  </p>
                  <ul className="space-y-4">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-4 text-slate-300">
                        <CheckCircle2 className="flex-shrink-0" size={20} style={{ color: platform.color.glow }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToContact}
                    className="px-10 py-4 text-lg font-bold text-white rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{ backgroundColor: platform.color.glow, boxShadow: `0 10px 40px ${platform.color.glow}40` }}
                  >
                    Get a Quote
                  </motion.button>
                </div>
              </FadeIn>
              

              <FadeIn direction={i % 2 === 0 ? "left" : "right"}>
                <div className="relative">
                  <div 
                    className="absolute -inset-4 blur-3xl rounded-full" 
                    style={{ backgroundColor: `${platform.color.glow}33` }}
                  />
                  <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-slate-900 flex items-center justify-center">
                    {platform.image ? (
                      <img 
                        src={platform.image} 
                        alt={platform.name} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={800}
                        height={450}
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <Zap className="w-32 h-32" style={{ color: `${platform.color.glow}33` }} />
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-t ${platform.color.gradient} opacity-60`} />
                    <div className="absolute bottom-8 left-8 hidden md:block">
                      <div className="text-2xl font-black text-white uppercase tracking-widest">{platform.name}</div>
                      <div className="font-bold uppercase tracking-widest text-xs" style={{ color: platform.color.glow }}>Performance Marketing</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      <section className="py-32 section-dark relative overflow-hidden">
        <div className="blue-glow top-0 left-0 w-[600px] h-[600px] opacity-10" />
        <div className="bubble bubble-purple b1" />
        <div className="bubble bubble-purple b2" />
        <div className="bubble bubble-purple b3" />
        <div className="bubble bubble-purple b4" />
        <div className="bubble bubble-blue b5" />
        <div className="bubble bubble-blue b6" />
        <div className="bubble bubble-blue b7" />
        <div className="bubble bubble-blue b8" />
        <div className="bubble bubble-cyan b9" />
        <div className="bubble bubble-cyan b10" />
        <div className="bubble bubble-cyan b11" />
        <div className="bubble bubble-cyan b12" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic mb-6">
                PPC Process <span className="text-gradient-blue">Timeline</span>
              </h2>
            </FadeIn>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-6 left-0 w-full h-0.5 bg-white/10 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {timeline.map((week, i) => (
                <div key={i} className="relative">
                  <FadeIn delay={i * 0.2}>
                    <div className="text-center mb-8">
                      <div className="inline-block px-6 py-2 bg-blue-600 text-white font-black uppercase tracking-widest rounded-full text-sm mb-4">
                        {week.week}
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {week.phases.map((phase, idx) => (
                        <div key={idx} className="service-card p-6 border-blue-500/20 hover:border-blue-500 transition-all">
                          <p className="text-lg font-black text-white mb-4 uppercase tracking-wider">{phase.title}</p>
                          <ul className="space-y-2">
                            {phase.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="text-slate-400 text-sm flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-blue-500" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-32 section-dark border-t border-white/30 relative overflow-hidden">
        <div className="bubble bubble-green b1" />
        <div className="bubble bubble-green b2" />
        <div className="bubble bubble-green b3" />
        <div className="bubble bubble-green b4" />
        <div className="bubble bubble-cyan b5" />
        <div className="bubble bubble-cyan b6" />
        <div className="bubble bubble-cyan b7" />
        <div className="bubble bubble-cyan b8" />
        <div className="bubble bubble-blue b9" />
        <div className="bubble bubble-blue b10" />
        <div className="bubble bubble-blue b11" />
        <div className="bubble bubble-blue b12" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <FadeIn>
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight uppercase italic">
                  Ready to <span className="text-gradient-blue">Scale?</span>
                </h2>
                <p className="text-xl text-slate-400 mb-12 max-w-lg">
                  Let's talk about your PPC goals and how we can help you achieve them with high-performance campaigns.
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
                      <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
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
              <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 backdrop-blur-xl relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl rotate-12">
                  <Mail size={32} />
                </div>
                {contactSuccess && (
                  <div className="absolute inset-0 bg-blue-500/10 rounded-[3rem] flex items-center justify-center z-10">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check size={40} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-2">Message Sent!</h3>
                      <p className="text-blue-300">We'll get back to you soon.</p>
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
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white transition-all" 
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
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white transition-all" 
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
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service-select" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Service</label>
                      <div className="relative">
                        <select 
                          id="service-select"
                          value={contactForm.service}
                          onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white transition-all appearance-none"
                        >
                          <option value="" disabled>Select Service</option>
                          {services.map((s, i) => (
                            <option key={i} value={s.title} className="bg-slate-900 text-white">{s.title}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={20} aria-hidden="true" />
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
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white transition-all resize-none"
                    ></textarea>
                  </div>
                  <motion.button 
                    type="submit"
                    disabled={contactSubmitting}
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-6 bg-blue-600 text-white rounded-2xl font-black text-xl uppercase tracking-widest shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 group disabled:opacity-50"
                  >
                    {contactSubmitting ? "Sending..." : "Send Message"} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
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
