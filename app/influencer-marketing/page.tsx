'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, ArrowRight, CheckCircle2, Mail, Phone, MapPin, 
  ChevronDown, Search, MessageSquare, Megaphone, BarChart3, Check, Globe, Handshake
} from 'lucide-react';
import { FadeIn, FloatingText } from '@/components/Animations';
import { Typewriter } from '@/components/Typewriter';
import { ASSETS, services } from '@/data';
import { submitLeadForm } from '@/utils/formSubmission';

export default function InfluencerMarketing() {
  const influencerServices = [
    {
      id: "identification",
      name: "Influencer Identification & Shortlisting",
      icon: Search,
      image: ASSETS.influencerPlatforms.identification,
      desc: "We find influencers who match your niche, audience, and tone.",
      details: "We identify and shortlist the perfect influencers for your brand through rigorous vetting of engagement rates, audience quality, and brand fit.",
      features: [
        "We find influencers who match your niche, audience, and tone",
        "From micro to mega influencers—local or global, we've got you covered",
        "Vetting through engagement rates, audience quality, and brand fit"
      ],
      highlight: "Only real influencers with real reach",
      color: { bg: "bg-purple-500/10", text: "text-purple-500", hover: "group-hover:bg-purple-500 group-hover:text-white", gradient: "from-purple-600/20 to-transparent", glow: "#9333ea" }
    },
    {
      id: "outreach",
      name: "Outreach & Collaboration",
      icon: MessageSquare,
      image: ASSETS.influencerPlatforms.outreach,
      desc: "We handle influencer communication, negotiations, and briefing.",
      details: "We manage all influencer communications and negotiations to ensure smooth partnerships that align with your brand goals.",
      features: [
        "We handle influencer communication, negotiations, and briefing",
        "Align your brand goals with influencer creativity",
        "Clear deliverables, timelines, and expectations"
      ],
      highlight: "No confusion, just smooth partnerships",
      color: { bg: "bg-pink-500/10", text: "text-pink-500", hover: "group-hover:bg-pink-500 group-hover:text-white", gradient: "from-pink-600/20 to-transparent", glow: "#ec4899" }
    },
    {
      id: "strategy",
      name: "Campaign Strategy & Content Planning",
      icon: Megaphone,
      image: ASSETS.influencerPlatforms.strategy,
      desc: "Full-funnel influencer campaigns designed to convert.",
      details: "We create comprehensive influencer campaigns with unique content ideas tailored to each platform for maximum impact.",
      features: [
        "Full-funnel influencer campaigns designed to convert",
        "Unique content ideas tailored to each platform (Instagram, YouTube, LinkedIn, etc.)",
        "Integrate product launches, UGC, testimonials, reviews, giveaways, and more"
      ],
      highlight: "Engaging storytelling meets brand performance",
      color: { bg: "bg-orange-500/10", text: "text-orange-500", hover: "group-hover:bg-orange-500 group-hover:text-white", gradient: "from-orange-600/20 to-transparent", glow: "#f97316" }
    },
    {
      id: "execution",
      name: "Execution & Monitoring",
      icon: Users,
      image: ASSETS.influencerPlatforms.execution,
      desc: "We manage content approvals, posting schedules, and brand guidelines.",
      details: "Our team handles all campaign execution with real-time monitoring to ensure influencers meet their commitments.",
      features: [
        "We manage content approvals, posting schedules, and brand guidelines",
        "Real-time campaign monitoring across platforms",
        "Ensure influencers meet their commitments"
      ],
      highlight: "Hands-free management for your team",
      color: { bg: "bg-cyan-500/10", text: "text-cyan-500", hover: "group-hover:bg-cyan-500 group-hover:text-white", gradient: "from-cyan-600/20 to-transparent", glow: "#06b6d4" }
    },
    {
      id: "analytics",
      name: "Analytics & Reporting",
      icon: BarChart3,
      image: ASSETS.influencerPlatforms.analytics,
      desc: "Detailed performance reports: reach, engagement, traffic, and leads.",
      details: "We provide comprehensive analytics and ROI tracking to prove the value of each influencer partnership.",
      features: [
        "Detailed performance reports: reach, engagement, traffic, and leads",
        "ROI tracking on each influencer's contribution",
        "Recommendations for future campaigns"
      ],
      highlight: "We don't just post—we prove results",
      color: { bg: "bg-blue-500/10", text: "text-blue-500", hover: "group-hover:bg-blue-500 group-hover:text-white", gradient: "from-blue-600/20 to-transparent", glow: "#2563eb" }
    }
  ];

  const whyChooseUs = [
    { icon: Handshake, title: "Vetted Network of Trusted Influencers" },
    { icon: Search, title: "Targeted Campaigns That Reach the Right Audience" },
    { icon: BarChart3, title: "Performance-Driven, Not Just Pretty Posts" },
    { icon: Globe, title: "Cross-Platform Expertise (Instagram, YouTube, LinkedIn, Twitter, Blogs & More)" },
    { icon: Users, title: "End-to-End Campaign Management by Experts" }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', service: 'Influencer Marketing', message: '' });
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    try {
      await submitLeadForm(contactForm);
      setContactSuccess(true);
      setContactForm({ name: '', email: '', phone: '', service: 'Influencer Marketing', message: '' });
      setTimeout(() => setContactSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to submit contact form:', error);
    }
    setContactSubmitting(false);
  };

  return (
    <div className="min-h-screen font-sans bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-20 md:py-0 section-dark">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src={ASSETS.influencerVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-950/60" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="blue-glow -top-20 -left-20 w-[600px] h-[600px] opacity-20" />
        <div className="blue-glow -bottom-20 -right-20 w-[600px] h-[600px] opacity-20" />
        
        <div className="bubble bubble-purple b1" />
        <div className="bubble bubble-purple b2" />
        <div className="bubble bubble-purple b3" />
        <div className="bubble bubble-purple b4" />
        <div className="bubble bubble-pink b5" />
        <div className="bubble bubble-pink b6" />
        <div className="bubble bubble-pink b7" />
        <div className="bubble bubble-pink b8" />
        <div className="bubble bubble-orange b9" />
        <div className="bubble bubble-orange b10" />
        <div className="bubble bubble-orange b11" />
        <div className="bubble bubble-orange b12" />
        <div className="bubble bubble-cyan b13" />
        <div className="bubble bubble-cyan b14" />
        <div className="bubble bubble-cyan b15" />
        <div className="bubble bubble-cyan b16" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0">
          <div className="max-w-5xl">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold mb-8 backdrop-blur-md">
                <Users size={16} />
                <span>INFLUENCER MARKETING | VOICES THAT MATTER</span>
              </div>
            </FadeIn>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10">

              <FadeIn delay={0.4} distance={40}>
                GET SEEN.<br />
              </FadeIn>

              <FadeIn delay={0.6} distance={40}>
                <span className="text-gradient-blue inline-block sm:whitespace-nowrap">
                  <Typewriter words={["GET TRUSTED!", "GET SALES!", "GET NOTICED!", "GET RESULTS!"]} />
                </span>
              </FadeIn>
            </h1>
            
            <FadeIn delay={0.8}>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-3xl font-medium">
                Partner with Voices That Matter. We connect your brand with the right influencers to build trust, drive engagement, and boost sales.
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

      {/* services Overview */}
      <section className="py-24 section-dark border-y border-white/30 relative overflow-hidden">
        <div className="bubble bubble-purple b1" />
        <div className="bubble bubble-purple b2" />
        <div className="bubble bubble-purple b3" />
        <div className="bubble bubble-purple b4" />
        <div className="bubble bubble-pink b5" />
        <div className="bubble bubble-pink b6" />
        <div className="bubble bubble-pink b7" />
        <div className="bubble bubble-pink b8" />
        <div className="bubble bubble-orange b9" />
        <div className="bubble bubble-orange b10" />
        <div className="bubble bubble-orange b11" />
        <div className="bubble bubble-orange b12" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic mb-6">
                What We Do in <span className="text-gradient-blue">Influencer Marketing</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {influencerServices.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="service-card group h-full flex flex-col"
              >
                <div 
                  className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-all duration-500"
                  style={{ backgroundColor: `${service.color.glow}1a`, color: service.color.glow }}
                >
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-wider">{service.name}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  {service.desc}
                </p>
                <motion.a 
                  href={`#${service.id}`}
                  className="font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all"
                  style={{ color: service.color.glow }}
                >
                  LEARN MORE <ArrowRight size={14} />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {influencerServices.map((service, i) => (
        <section key={service.id} id={service.id} className={`py-32 section-dark relative overflow-hidden ${i % 2 === 0 ? 'bg-slate-900/30' : ''}`}>
          <div className="bubble bubble-purple b1" />
          <div className="bubble bubble-purple b3" />
          <div className="bubble bubble-purple b5" />
          <div className="bubble bubble-purple b7" />
          <div className="bubble bubble-pink b9" />
          <div className="bubble bubble-pink b11" />
          <div className="bubble bubble-pink b13" />
          <div className="bubble bubble-pink b15" />
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

              <FadeIn direction={i % 2 === 0 ? "right" : "left"}>
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase italic">
                    {service.name.split(' & ')[0]} <span style={{ color: service.color.glow }}>{service.name.split(' & ').slice(1).join(' & ')}</span>
                  </h2>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    {service.details}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-4 text-slate-300">
                        <CheckCircle2 className="flex-shrink-0" size={20} style={{ color: service.color.glow }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                    <Check className="text-green-500 flex-shrink-0" size={24} />
                    <span className="text-green-400 font-bold">{service.highlight}</span>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToContact}
                    className="px-10 py-4 text-lg font-bold text-white rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{ backgroundColor: service.color.glow, boxShadow: `0 10px 40px ${service.color.glow}40` }}
                  >
                    Get a Quote
                  </motion.button>
                </div>
              </FadeIn>
              

              <FadeIn direction={i % 2 === 0 ? "left" : "right"}>
                <div className="relative">
                  <div 
                    className="absolute -inset-4 blur-3xl rounded-full" 
                    style={{ backgroundColor: `${service.color.glow}33` }}
                  />
                  <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-slate-900 flex items-center justify-center">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      width="600"
                      height="600"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color.gradient} opacity-60`} />
                    <div className="absolute bottom-8 left-8 hidden md:block">
                      <div className="text-2xl font-black text-white uppercase tracking-widest">{service.name.split(' ')[0]}</div>
                      <div className="font-bold uppercase tracking-widest text-xs" style={{ color: service.color.glow }}>Influencer Marketing</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="py-32 section-dark border-y border-white/30 relative overflow-hidden">
        <div className="bubble bubble-blue b1" />
        <div className="bubble bubble-blue b3" />
        <div className="bubble bubble-blue b5" />
        <div className="bubble bubble-blue b7" />
        <div className="bubble bubble-blue b9" />
        <div className="bubble bubble-blue b11" />
        <div className="bubble bubble-purple b2" />
        <div className="bubble bubble-purple b4" />
        <div className="bubble bubble-purple b6" />
        <div className="bubble bubble-purple b8" />
        <div className="bubble bubble-purple b10" />
        <div className="bubble bubble-purple b12" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic mb-6">
                Why <span className="text-gradient-blue">DamnArt</span> for Influencer Marketing?
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {whyChooseUs.map((item, i) => (


              <FadeIn delay={i * 0.1}>
                <div className="service-card text-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="text-blue-500" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-16">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="btn-primary px-12 py-5 text-xl mx-auto"
            >
              Get a Quote <ArrowRight size={24} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-32 section-dark border-t border-white/30 relative overflow-hidden">
        <div className="bubble bubble-purple b1" />
        <div className="bubble bubble-purple b2" />
        <div className="bubble bubble-purple b3" />
        <div className="bubble bubble-purple b4" />
        <div className="bubble bubble-pink b5" />
        <div className="bubble bubble-pink b6" />
        <div className="bubble bubble-pink b7" />
        <div className="bubble bubble-pink b8" />
        <div className="bubble bubble-blue b9" />
        <div className="bubble bubble-blue b10" />
        <div className="bubble bubble-blue b11" />
        <div className="bubble bubble-blue b12" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <FadeIn>
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight uppercase italic">
                  Ready to <span className="text-gradient-blue">Partner?</span>
                </h2>
                <p className="text-xl text-slate-400 mb-12 max-w-lg">
                  Let's talk about your influencer marketing goals and how we can help you reach your target audience through trusted voices.
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
                  <div className="absolute inset-0 bg-green-500/90 rounded-[3rem] flex items-center justify-center z-10">
                    <div className="text-center">
                      <Check size={64} className="text-white mx-auto mb-4" />
                      <p className="text-2xl font-bold text-white">Message Sent!</p>
                      <p className="text-green-100">We'll get back to you soon.</p>
                    </div>
                  </div>
                )}
                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                      <input type="text" placeholder="John Doe" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                      <input type="email" placeholder="john@example.com" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white transition-all" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                      <input type="tel" placeholder="+91..." value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service-select" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Service</label>
                      <div className="relative">
                        <select id="service-select" value={contactForm.service} onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white transition-all appearance-none">
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
                    <textarea placeholder="Tell us about your project..." rows={4} value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white transition-all resize-none"></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    disabled={contactSubmitting}
                    className="w-full py-6 bg-blue-600 text-white rounded-2xl font-black text-xl uppercase tracking-widest shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
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
  );
};
