'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, ArrowRight, CheckCircle2, Mail, Phone, MapPin, 
  ChevronDown, Target, BarChart3, Globe, MousePointerClick, 
  Search, Layout, Zap, Facebook, Instagram, Linkedin, Rocket, Check
} from 'lucide-react';
import { FadeIn, FloatingText } from '@/components/Animations';
import { Typewriter } from '@/components/Typewriter';
import { ASSETS, services } from '@/data';
import { submitLeadForm } from '@/utils/formSubmission';

export default function SMM() {
  const platforms = [
    {
      id: "facebook",
      name: "Facebook Management",
      image: ASSETS.smmPlatforms.facebook,
      desc: "Versatile social platform for engaging with a broad audience through posts, ads, and community building.",
      details: "Facebook remains one of the most powerful platforms for reaching a diverse audience. Our Facebook management services help you build a strong community and drive results.",
      features: [
        "Content Creation and Curation: Craft engaging posts, images, and videos that resonate with your audience.",
        "Page Optimization: Optimize your Facebook page to ensure it reflects your brand and attracts followers.",
        "Community Management: Engage with your audience through comments, messages, and community posts.",
        "Ad Campaign Management: Create and manage targeted ad campaigns to reach your specific audience.",
        "Analytics and Reporting: Monitor and analyze your page's performance to inform future strategies."
      ],
      color: { bg: "bg-blue-500/10", text: "text-blue-500", hover: "group-hover:bg-blue-500 group-hover:text-white", gradient: "from-blue-600/20 to-transparent", glow: "#1877f2" }
    },
    {
      id: "instagram",
      name: "Instagram Management",
      image: ASSETS.smmPlatforms.instagram,
      desc: "Visual-centric platform perfect for creative storytelling, brand visuals, and engaging a younger audience.",
      details: "Instagram is a visually-driven platform perfect for showcasing your brand's personality and products. We help you create a stunning visual identity.",
      features: [
        "Visual Content Creation: Develop high-quality images, videos, and stories that capture attention.",
        "Hashtag Strategy: Implement effective hashtag strategies to increase your post visibility.",
        "Engagement: Foster community engagement through likes, comments, and direct messages.",
        "Influencer Collaboration: Partner with relevant influencers to amplify your brand reach.",
        "Performance Tracking: Analyze key metrics to measure success and refine your strategy."
      ],
      color: { bg: "bg-pink-500/10", text: "text-pink-500", hover: "group-hover:bg-pink-500 group-hover:text-white", gradient: "from-pink-600/20 to-transparent", glow: "#e1306c" }
    },
    {
      id: "linkedin",
      name: "LinkedIn Management",
      image: ASSETS.smmPlatforms.linkedin,
      desc: "Professional networking platform ideal for B2B marketing, industry insights, and corporate branding.",
      details: "LinkedIn is the premier platform for B2B marketing, offering opportunities to connect with professionals and industry leaders.",
      features: [
        "Profile Optimization: Enhance your LinkedIn profile to showcase your brand's expertise and attract connections.",
        "Content Strategy: Create and share valuable content that positions your brand as a thought leader.",
        "Network Building: Grow your professional network by connecting with potential clients, partners, and influencers.",
        "LinkedIn Ads: Develop and manage targeted ad campaigns to reach decision-makers in your industry.",
        "Analytics and Insights: Monitor your LinkedIn activity to gain insights and improve your strategy."
      ],
      color: { bg: "bg-blue-500/10", text: "text-blue-500", hover: "group-hover:bg-blue-500 group-hover:text-white", gradient: "from-blue-600/20 to-transparent", glow: "#0A66C2" }
    }
  ];

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
          items: ["Market Research", "Audience Analysis", "Platform Selection", "Content Strategy Development"]
        }
      ]
    },
    {
      week: "Week 2",
      phases: [
        {
          title: "Setup & Content Planning",
          items: ["Profile Optimization", "Content Calendar Creation", "Content Creation (Graphics, Videos, Copywriting)", "Account Setup (if needed)"]
        },
        {
          title: "Approval & Scheduling",
          items: ["Content Approval from Client", "Schedule Posts", "Set Up Social Media Tools"]
        }
      ]
    },
    {
      week: "Week 3",
      phases: [
        {
          title: "Campaign Launch & Management",
          items: ["Launch Social Media Campaigns", "Initial Monitoring", "Engagement Management", "Addressing Initial Feedback"]
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
          items: ["Adjust Strategy Based on Performance", "Update Content Strategy", "A/B Testing for Ads/Posts"]
        }
      ]
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', service: 'SMM', message: '' });
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    try {
      await submitLeadForm(contactForm);
      setContactSuccess(true);
      setContactForm({ name: '', email: '', phone: '', service: 'SMM', message: '' });
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
            <source src={ASSETS.smmVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-950/60" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="blue-glow -top-20 -left-20 w-[600px] h-[600px] opacity-20" />
        <div className="blue-glow -bottom-20 -right-20 w-[600px] h-[600px] opacity-20" />
        
        <div className="bubble bubble-pink b1" />
        <div className="bubble bubble-pink b2" />
        <div className="bubble bubble-pink b3" />
        <div className="bubble bubble-pink b4" />
        <div className="bubble bubble-purple b5" />
        <div className="bubble bubble-purple b6" />
        <div className="bubble bubble-purple b7" />
        <div className="bubble bubble-purple b8" />
        <div className="bubble bubble-blue b9" />
        <div className="bubble bubble-blue b10" />
        <div className="bubble bubble-blue b11" />
        <div className="bubble bubble-blue b12" />
        <div className="bubble bubble-cyan b13" />
        <div className="bubble bubble-cyan b14" />
        <div className="bubble bubble-cyan b15" />
        <div className="bubble bubble-cyan b16" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0">
          <div className="max-w-5xl">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold mb-8 backdrop-blur-md">
                <Users size={16} />
                <span>SMM | SOCIAL MEDIA MANAGEMENT</span>
              </div>
            </FadeIn>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10">

              <FadeIn delay={0.4} distance={40}>
                DON'T JUST POST,<br />
              </FadeIn>

              <FadeIn delay={0.6} distance={40}>
                <span className="text-gradient-blue inline-block sm:whitespace-nowrap">
                  <Typewriter words={["ENGAGE!", "CONNECT!", "GROW!", "CONVERT!"]} />
                </span>
              </FadeIn>
            </h1>
            
            <FadeIn delay={0.8}>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-3xl font-medium">
                Elevate Your Brand with Strategic Social Media Management. We don't just manage accounts; we build communities.
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

      {/* Platforms Overview */}
      <section className="py-24 section-dark border-y border-white/30 relative overflow-hidden">
        <div className="bubble bubble-pink b1" />
        <div className="bubble bubble-pink b2" />
        <div className="bubble bubble-pink b3" />
        <div className="bubble bubble-pink b4" />
        <div className="bubble bubble-purple b5" />
        <div className="bubble bubble-purple b6" />
        <div className="bubble bubble-purple b7" />
        <div className="bubble bubble-purple b8" />
        <div className="bubble bubble-cyan b9" />
        <div className="bubble bubble-cyan b10" />
        <div className="bubble bubble-cyan b11" />
        <div className="bubble bubble-cyan b12" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic mb-6">
                Social Media <span className="text-gradient-blue">PLATFORMS</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, i) => (


              <FadeIn delay={i * 0.1}>
                <div className="service-card group h-full flex flex-col">
                  <div 
                    className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-all duration-500"
                    style={{ backgroundColor: `${platform.color.glow}1a`, color: platform.color.glow }}
                  >
                    <Users size={24} />
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

      {/* Detailed Platforms */}
      {platforms.map((platform, i) => (
        <section key={platform.id} id={platform.id} className={`py-32 section-dark relative overflow-hidden ${i % 2 === 0 ? 'bg-slate-900/30' : ''}`}>
          <div className="bubble bubble-pink b1" />
          <div className="bubble bubble-pink b3" />
          <div className="bubble bubble-pink b5" />
          <div className="bubble bubble-pink b7" />
          <div className="bubble bubble-purple b9" />
          <div className="bubble bubble-purple b11" />
          <div className="bubble bubble-purple b13" />
          <div className="bubble bubble-purple b15" />
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
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        width={800}
                        height={450}
                      />
                    ) : (
                      <Users className="w-32 h-32" style={{ color: `${platform.color.glow}33` }} />
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-t ${platform.color.gradient} opacity-60`} />
                    <div className="absolute bottom-8 left-8 hidden md:block">
                      <div className="text-2xl font-black text-white uppercase tracking-widest">{platform.name}</div>
                      <div className="font-bold uppercase tracking-widest text-xs" style={{ color: platform.color.glow }}>Social Management</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* Timeline Section */}
      <section className="py-32 section-dark relative overflow-hidden">
        <div className="blue-glow top-0 left-0 w-[600px] h-[600px] opacity-10" />
        <div className="bubble bubble-purple b1" />
        <div className="bubble bubble-purple b2" />
        <div className="bubble bubble-purple b3" />
        <div className="bubble bubble-purple b4" />
        <div className="bubble bubble-pink b5" />
        <div className="bubble bubble-pink b6" />
        <div className="bubble bubble-pink b7" />
        <div className="bubble bubble-pink b8" />
        <div className="bubble bubble-cyan b9" />
        <div className="bubble bubble-cyan b10" />
        <div className="bubble bubble-cyan b11" />
        <div className="bubble bubble-cyan b12" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic mb-6">
                SMM Process <span className="text-gradient-blue">Timeline</span>
              </h2>
            </FadeIn>
          </div>

          <div className="relative">
            {/* Horizontal Line for Desktop - Aligned with badges */}
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

      {/* Contact Section */}
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
                  Ready to <span className="text-gradient-blue">Engage?</span>
                </h2>
                <p className="text-xl text-slate-400 mb-12 max-w-lg">
                  Let's talk about your SMM goals and how we can help you build a thriving community around your brand.
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
                  <div className="absolute inset-0 bg-green-500/90 rounded-[3rem] flex items-center justify-center z-20">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="text-green-500" size={40} />
                      </div>
                      <h3 className="text-2xl font-black text-white uppercase">Message Sent!</h3>
                      <p className="text-white/80 mt-2">We'll get back to you soon.</p>
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
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white transition-all resize-none"
                    ></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: contactSubmitting ? 1 : 1.02, boxShadow: contactSubmitting ? "none" : "0 20px 40px rgba(37, 99, 235, 0.3)" }}
                    whileTap={{ scale: contactSubmitting ? 1 : 0.98 }}
                    disabled={contactSubmitting}
                    className="w-full py-6 bg-blue-600 text-white rounded-2xl font-black text-xl uppercase tracking-widest shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {contactSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>Send Message <ArrowRight className="group-hover:translate-x-2 transition-transform" /></>
                    )}
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
