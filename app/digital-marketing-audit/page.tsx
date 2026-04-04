'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, ArrowRight, CheckCircle2, Mail, Phone, MapPin, 
  ChevronDown, BarChart3, Megaphone, Globe, FileSearch,
  Share2, Monitor, FileText, Check, Star, Shield, Clock, Users
} from 'lucide-react';
import { FadeIn, FloatingText } from '@/components/Animations';
import { Typewriter } from '@/components/Typewriter';
import { ASSETS, services } from '@/data';
import { submitLeadForm } from '@/utils/formSubmission';

export default function DigitalMarketingAudit() {
  const auditServices = [
    {
      id: "google-fb-ads-audit",
      name: "Google & FB Ads Performance Audit",
      icon: Megaphone,
      image: ASSETS.auditPlatforms.googleAds,
      desc: "Are your campaigns delivering the best ROI? Our Audit evaluates your Google & FB Ads to identify areas for improvement and maximize performance.",
      features: [
        "Ad copy and creative performance",
        "Keyword targeting and bidding strategies",
        "Campaign structure and budget allocation"
      ],
      deliverables: [
        "A detailed audit of your Google Ads campaigns",
        "Actionable suggestions to optimize your campaigns for better performance and ROI"
      ],
      color: { bg: "bg-orange-500/10", text: "text-orange-500", hover: "group-hover:bg-orange-500 group-hover:text-white", gradient: "from-orange-600/20 to-transparent", glow: "#f97316" }
    },
    {
      id: "social-media-audit",
      name: "Social Media Performance Audit",
      icon: Share2,
      image: ASSETS.auditPlatforms.socialMedia,
      desc: "Social media platforms like Facebook, Instagram, and LinkedIn are vital for brand growth. Our Social Media Performance Audit evaluates your campaigns and content strategies.",
      features: [
        "Content quality and engagement rates",
        "Audience targeting and Segmentation",
        "Posting frequency and consistency"
      ],
      deliverables: [
        "A thorough analysis of your social media efforts",
        "Suggestions for improving engagement, reach, and overall social media strategy"
      ],
      color: { bg: "bg-pink-500/10", text: "text-pink-500", hover: "group-hover:bg-pink-500 group-hover:text-white", gradient: "from-pink-600/20 to-transparent", glow: "#ec4899" }
    },
    {
      id: "website-audit",
      name: "Website Audit",
      icon: Monitor,
      image: ASSETS.auditPlatforms.website,
      desc: "Your website is your first impression. Our Website Audit identifies performance issues, enhances user experience, boosts SEO, and improves conversion rates.",
      features: [
        "Site speed and mobile responsiveness",
        "On-page SEO (meta tags, keywords, headings)",
        "User experience (UX) and design"
      ],
      deliverables: [
        "A comprehensive audit of your website's performance",
        "Actionable recommendations to improve speed, SEO, and user experience"
      ],
      color: { bg: "bg-blue-500/10", text: "text-blue-500", hover: "group-hover:bg-blue-500 group-hover:text-white", gradient: "from-blue-600/20 to-transparent", glow: "#2563eb" }
    },
    {
      id: "content-audit",
      name: "Content Audit",
      icon: FileText,
      image: ASSETS.auditPlatforms.content,
      desc: "Content is the backbone of Digital Marketing. We evaluate your blogs, website copy, and social media posts to ensure they are optimized for SEO and resonate with your audience.",
      features: [
        "Content quality, readability, and relevance",
        "SEO optimization (keywords, structure, search intent)",
        "Engagement and performance metrics (shares, comments, views)"
      ],
      deliverables: [
        "A thorough review of your existing content",
        "Suggestions for optimizing content for SEO and audience engagement"
      ],
      color: { bg: "bg-green-500/10", text: "text-green-500", hover: "group-hover:bg-green-500 group-hover:text-white", gradient: "from-green-600/20 to-transparent", glow: "#22c55e" }
    }
  ];

  const howItWorks = [
    { step: "01", title: "Select Your Service", desc: "Select from Google Ads, social media, website, or content audits." },
    { step: "02", title: "Provide Access", desc: "Share account or website details for analysis." },
    { step: "03", title: "Get Your Audit Report", desc: "Get a detailed report with insights and recommendations." },
    { step: "04", title: "Implement Recommendations", desc: "Use our suggestions to optimize and enhance your marketing performance." }
  ];

  const whyChooseUs = [
    { icon: Shield, title: "Affordable Pricing", desc: "Get expert analysis at a budget-friendly price." },
    { icon: Star, title: "Expert Analysis", desc: "Our team provides a detailed review of your strategies to enhance performance." },
    { icon: FileSearch, title: "Comprehensive Report", desc: "Receive an actionable audit report with clear recommendations." },
    { icon: Check, title: "Practical Solutions", desc: "We don't just highlight problems; we offer solutions to improve your campaigns." }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection && contactSection.scrollIntoView) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', service: 'Digital Marketing Audit', message: '' });
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    try {
      await submitLeadForm(contactForm);
      setContactSuccess(true);
      setContactForm({ name: '', email: '', phone: '', service: 'Digital Marketing Audit', message: '' });
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
            <source src={ASSETS.auditVideo} type="video/mp4" />
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
        <div className="bubble bubble-cyan b5" />
        <div className="bubble bubble-cyan b6" />
        <div className="bubble bubble-cyan b7" />
        <div className="bubble bubble-cyan b8" />
        <div className="bubble bubble-orange b9" />
        <div className="bubble bubble-orange b10" />
        <div className="bubble bubble-orange b11" />
        <div className="bubble bubble-orange b12" />
        <div className="bubble bubble-green b13" />
        <div className="bubble bubble-green b14" />
        <div className="bubble bubble-green b15" />
        <div className="bubble bubble-green b16" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0">
          <div className="max-w-5xl">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold mb-8 backdrop-blur-md">
                <BarChart3 size={16} />
                <span>DIGITAL MARKETING AUDIT | OPTIMIZE YOUR EFFORTS</span>
              </div>
            </FadeIn>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10">

              <FadeIn delay={0.4} distance={40}>
                OPTIMIZE YOUR<br />
              </FadeIn>

              <FadeIn delay={0.6} distance={40}>
                <span className="text-gradient-blue inline-block sm:whitespace-nowrap">
                  <Typewriter words={["MARKETING!", "ROI!", "RESULTS!", "SUCCESS!"]} />
                </span>
              </FadeIn>
            </h1>
            
            <FadeIn delay={0.8}>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-6 max-w-3xl font-medium">
                DAMNART specializes in auditing your digital presence to save time, money, and effort.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-3xl">
                From Google Ads and Social Media Audits to Website Performance Analysis, we'll identify areas for improvement and provide actionable insights to boost your marketing efforts.
              </p>
            </FadeIn>

            <FadeIn delay={0.9}>
              <div className="mb-10">
                <span className="text-slate-400 line-through text-2xl mr-4">₹4,999</span>
                <span className="text-5xl font-black text-white">₹2,999</span>
              </div>
            </FadeIn>

            <FadeIn delay={1}>
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="btn-primary px-12 py-5 text-xl justify-center"
                >
                  I Need Audit <ArrowRight size={24} />
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

      {/* Why Audit Section */}
      <section className="py-24 section-dark border-y border-white/30 relative overflow-hidden">
        <div className="bubble bubble-cyan b1" />
        <div className="bubble bubble-cyan b3" />
        <div className="bubble bubble-cyan b5" />
        <div className="bubble bubble-cyan b7" />
        <div className="bubble bubble-cyan b9" />
        <div className="bubble bubble-cyan b11" />
        <div className="bubble bubble-orange b2" />
        <div className="bubble bubble-orange b4" />
        <div className="bubble bubble-orange b6" />
        <div className="bubble bubble-orange b8" />
        <div className="bubble bubble-orange b10" />
        <div className="bubble bubble-orange b12" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase italic mb-8">
                  Why is an <span className="text-gradient-blue">Audit Important?</span>
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                  Digital Marketing evolves quickly, making it crucial to evaluate your strategies. An Audit identifies gaps, inefficiencies, and opportunities for optimization, helping you make smarter decisions and achieve better results.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  Our Audit Services ensure you maximize your marketing budget—be it for Paid Ads, Social Media, or Website Performance—by offering expert guidance to keep you on the right track.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="btn-primary px-10 py-4 text-lg"
                >
                  I Need Audit <ArrowRight size={20} />
                </motion.button>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Globe, label: "Google Ads", count: "50+" },
                  { icon: Share2, label: "Social Media", count: "100+" },
                  { icon: Monitor, label: "Websites", count: "75+" },
                  { icon: FileText, label: "Content", count: "200+" }
                ].map((stat, i) => (
                  <div key={i} className="service-card p-6 text-center">
                    <stat.icon className="text-blue-500 w-10 h-10 mx-auto mb-4" />
                    <div className="text-3xl font-black text-white mb-1">{stat.count}</div>
                    <div className="text-sm text-slate-400 uppercase tracking-widest">{stat.label} Audited</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 section-dark relative overflow-hidden">
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
                How Our <span className="text-gradient-blue">Audit Works</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, i) => (


              <FadeIn delay={i * 0.1}>
                <div className="relative">
                  <div className="text-7xl font-black text-blue-500/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 section-dark border-y border-white/30 relative overflow-hidden">
        <div className="bubble bubble-green b1" />
        <div className="bubble bubble-green b2" />
        <div className="bubble bubble-green b3" />
        <div className="bubble bubble-green b4" />
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
                Our <span className="text-gradient-blue">Audit Services</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Choose one of the following audits, and we'll provide a detailed report with recommendations to optimize and improve your digital marketing performance.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {auditServices.map((service, i) => (
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
      {auditServices.map((service, i) => (
        <section key={service.id} id={service.id} className={`py-32 section-dark relative overflow-hidden ${i % 2 === 0 ? 'bg-slate-900/30' : ''}`}>
          <div className="bubble bubble-blue b1" />
          <div className="bubble bubble-blue b3" />
          <div className="bubble bubble-blue b5" />
          <div className="bubble bubble-blue b7" />
          <div className="bubble bubble-purple b9" />
          <div className="bubble bubble-purple b11" />
          <div className="bubble bubble-purple b13" />
          <div className="bubble bubble-purple b15" />
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

              <FadeIn direction={i % 2 === 0 ? "right" : "left"}>
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase italic">
                    {service.name.split(' ').slice(0, 2).join(' ')} <span style={{ color: service.color.glow }}>{service.name.split(' ').slice(2).join(' ')}</span>
                  </h2>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-lg font-bold text-white mb-4 uppercase tracking-wider">What We Check:</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex gap-4 text-slate-300">
                            <CheckCircle2 className="flex-shrink-0" size={20} style={{ color: service.color.glow }} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-lg font-bold text-white mb-4 uppercase tracking-wider">What You Get:</p>
                      <ul className="space-y-3">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex gap-4 text-slate-300">
                            <Check className="text-green-500 flex-shrink-0" size={20} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToContact}
                    className="px-10 py-4 text-lg font-bold text-white rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{ backgroundColor: service.color.glow, boxShadow: `0 10px 40px ${service.color.glow}40` }}
                  >
                    I Need Audit <ArrowRight size={20} />
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
                      width={600}
                      height={600}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color.gradient} opacity-60`} />
                    <div className="absolute bottom-8 left-8 hidden md:block">
                      <div className="text-2xl font-black text-white uppercase tracking-widest">{service.name.split(' ')[0]}</div>
                      <div className="font-bold uppercase tracking-widest text-xs" style={{ color: service.color.glow }}>Audit Service</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* Complete Audit Package */}
      <section className="py-32 section-dark border-y border-white/30 relative overflow-hidden">
        <div className="blue-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="bubble bubble-green b1" />
        <div className="bubble bubble-green b3" />
        <div className="bubble bubble-green b5" />
        <div className="bubble bubble-green b7" />
        <div className="bubble bubble-green b9" />
        <div className="bubble bubble-green b11" />
        <div className="bubble bubble-cyan b2" />
        <div className="bubble bubble-cyan b4" />
        <div className="bubble bubble-cyan b6" />
        <div className="bubble bubble-cyan b8" />
        <div className="bubble bubble-cyan b10" />
        <div className="bubble bubble-cyan b12" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-12 md:p-16 text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                Get All The Services Audited
              </h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
              <div className="space-y-4">
                {[
                  "Google Ads Performance: Identify opportunities to improve keyword targeting, ad copy, bidding strategies, and ROI tracking.",
                  "Social Media Performance (LinkedIn & Meta): Evaluate campaign effectiveness, audience targeting, and engagement on LinkedIn, Facebook, and Instagram."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 text-white">
                    <CheckCircle2 className="flex-shrink-0" size={24} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "Website Performance: Analyze speed, mobile-friendliness, SEO, and user experience to ensure your site performs at its best.",
                  "Content Writing Evaluation: Examine blogs, web copy, and social posts for SEO alignment, audience relevance, and engagement."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 text-white">
                    <CheckCircle2 className="flex-shrink-0" size={24} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <FadeIn delay={0.2}>
              <div className="mb-8">
                <div className="text-slate-200 mb-2">What We Check:</div>
                <p className="text-white text-lg">A full, in-depth audit across all areas of your digital marketing strategy with clear, actionable recommendations.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-white text-blue-600 rounded-full font-black text-base sm:text-lg md:text-xl uppercase tracking-wider sm:tracking-widest shadow-2xl hover:bg-blue-50 transition-all whitespace-nowrap"
              >
                I Need Audit <ArrowRight size={20} className="sm:w-6 sm:h-6" />
              </motion.button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 section-dark relative overflow-hidden">
        <div className="bubble bubble-blue b1" />
        <div className="bubble bubble-blue b3" />
        <div className="bubble bubble-blue b5" />
        <div className="bubble bubble-blue b7" />
        <div className="bubble bubble-blue b9" />
        <div className="bubble bubble-blue b11" />
        <div className="bubble bubble-rose b2" />
        <div className="bubble bubble-rose b4" />
        <div className="bubble bubble-rose b6" />
        <div className="bubble bubble-rose b8" />
        <div className="bubble bubble-rose b10" />
        <div className="bubble bubble-rose b12" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic mb-6">
                Why Choose <span className="text-gradient-blue">Damnart?</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (


              <FadeIn delay={i * 0.1}>
                <div className="service-card text-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="text-blue-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 section-dark border-t border-white/30 relative overflow-hidden">
        <div className="bubble bubble-orange b1" />
        <div className="bubble bubble-orange b3" />
        <div className="bubble bubble-orange b5" />
        <div className="bubble bubble-orange b7" />
        <div className="bubble bubble-orange b9" />
        <div className="bubble bubble-orange b11" />
        <div className="bubble bubble-purple b2" />
        <div className="bubble bubble-purple b4" />
        <div className="bubble bubble-purple b6" />
        <div className="bubble bubble-purple b8" />
        <div className="bubble bubble-purple b10" />
        <div className="bubble bubble-purple b12" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight uppercase italic">
              Ready to <span className="text-gradient-blue">Optimize?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Don't leave your marketing performance to chance. For just <span className="text-white font-bold">₹999</span>, choose your audit service, and let us help you identify opportunities for improvement.
            </p>
          </FadeIn>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="btn-primary px-12 py-5 text-xl mx-auto"
          >
            I Need Audit <ArrowRight size={24} />
          </motion.button>
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
                  Get Your <span className="text-gradient-blue">Audit</span>
                </h2>
                <p className="text-xl text-slate-400 mb-12 max-w-lg">
                  Ready to optimize your marketing? Let us help you identify opportunities for improvement and enhance your ROI.
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
                      <Check className="w-20 h-20 text-white mx-auto mb-4" />
                      <p className="text-white text-2xl font-bold">Submitted Successfully!</p>
                    </div>
                  </div>
                )}
                <form onSubmit={handleContactSubmit} className="space-y-6">
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

      {/* Disclaimer */}
      <section className="py-12 section-dark border-t border-white/30 relative overflow-hidden">
        <div className="bubble bubble-rose b1" />
        <div className="bubble bubble-rose b3" />
        <div className="bubble bubble-rose b5" />
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-slate-500 text-sm text-center leading-relaxed">
            <span className="font-bold text-slate-400">Disclaimer:</span> The Digital Marketing Audit Services offered by Damnart is intended to evaluate various aspects of your digital marketing efforts as per your request. The insights provided in the audit report will be based on current performance data and best practices. While we strive to offer actionable recommendations, results may vary based on your specific marketing goals and business context. For further consultations or more comprehensive services, please contact our team directly.
          </p>
        </div>
      </section>
    </div>
  );
};
