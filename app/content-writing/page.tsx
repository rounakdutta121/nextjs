'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, ArrowRight, CheckCircle2, Mail, Phone, MapPin, 
  ChevronDown, FileText, Layout, Share2, Search, ShoppingBag, 
  Edit3, BookOpen, MessageSquare, Check
} from 'lucide-react';
import { FadeIn, FloatingText } from '@/components/Animations';
import { Typewriter } from '@/components/Typewriter';
import { ASSETS, services } from '@/data';
import { submitLeadForm } from '@/utils/formSubmission';

export default function ContentWriting() {
  const writingServices = [
    {
      id: "blog-writing",
      name: "Blog Writing",
      icon: Edit3,
      color: { bg: "bg-blue-500/10", text: "text-blue-500", hover: "group-hover:bg-blue-500 group-hover:text-white", gradient: "from-blue-600/20 to-transparent", glow: "#2563eb" },
      image: ASSETS.contentWritingPlatforms.blog,
      desc: "Blogs are a powerful tool for driving traffic to your website and establishing your expertise.",
      details: "Our blog writing services include topic research, SEO optimization, and engaging content creation to keep your audience coming back.",
      features: [
        "Topic Research: Identify relevant and trending topics that resonate with your audience.",
        "SEO Optimization: Integrate keywords seamlessly to improve search engine rankings.",
        "Engaging Content: Create informative and engaging blog posts that capture readers' interest.",
        "Consistent Posting: Develop a content calendar and ensure regular posting to keep your audience engaged."
      ]
    },
    {
      id: "website-content",
      name: "Website Content",
      icon: Layout,
      color: { bg: "bg-purple-500/10", text: "text-purple-500", hover: "group-hover:bg-purple-500 group-hover:text-white", gradient: "from-purple-600/20 to-transparent", glow: "#9333ea" },
      image: ASSETS.contentWritingPlatforms.website,
      desc: "Your website content is crucial for making a strong first impression and communicating your value.",
      details: "We craft compelling content for your home page, about us page, and service descriptions that clearly communicate your brand's mission.",
      features: [
        "Home Page Content: Craft compelling content that clearly communicates your value proposition.",
        "About Us Page: Tell your brand story and highlight your mission, vision, and values.",
        "Service/Product Descriptions: Write detailed and persuasive descriptions that showcase the benefits of your offerings.",
        "Landing Pages: Create focused landing pages designed to convert visitors into leads or customers."
      ]
    },
    {
      id: "social-media",
      name: "Social Media Content",
      icon: Share2,
      color: { bg: "bg-pink-500/10", text: "text-pink-500", hover: "group-hover:bg-pink-500 group-hover:text-white", gradient: "from-pink-600/20 to-transparent", glow: "#ec4899" },
      image: ASSETS.contentWritingPlatforms.social,
      desc: "Effective social media content can boost your online presence and engagement across all platforms.",
      details: "We develop tailored content for Facebook, Instagram, LinkedIn, and Twitter, including visual integration and community engagement.",
      features: [
        "Platform-Specific Content: Develop tailored content for various social media platforms like Facebook, Instagram, LinkedIn, and Twitter.",
        "Content Calendars: Plan and schedule posts to ensure consistent and timely updates.",
        "Visual Content Integration: Incorporate images, videos, and graphics to enhance your social media posts.",
        "Community Engagement: Create content that encourages interaction and engagement with your audience."
      ]
    },
    {
      id: "seo-content",
      name: "SEO Content",
      icon: Search,
      color: { bg: "bg-green-500/10", text: "text-green-500", hover: "group-hover:bg-green-500 group-hover:text-white", gradient: "from-green-600/20 to-transparent", glow: "#22c55e" },
      image: ASSETS.contentWritingPlatforms.seo,
      desc: "SEO content is designed to improve your search engine rankings and drive organic traffic.",
      details: "We perform keyword research and optimize on-page SEO to ensure your content provides value and attracts backlinks.",
      features: [
        "Keyword Research: Identify high-traffic and relevant keywords for your industry.",
        "On-Page SEO: Write content optimized for on-page SEO, including meta tags, headings, and internal linking.",
        "Content Optimization: Update existing content to improve its SEO performance.",
        "Long-Form Content: Create in-depth articles, guides, and whitepapers that provide value and attract backlinks."
      ]
    },
    {
      id: "product-descriptions",
      name: "Product Descriptions",
      icon: ShoppingBag,
      color: { bg: "bg-orange-500/10", text: "text-orange-500", hover: "group-hover:bg-orange-500 group-hover:text-white", gradient: "from-orange-600/20 to-transparent", glow: "#f97316" },
      image: ASSETS.contentWritingPlatforms.product,
      desc: "Compelling product descriptions can significantly impact your sales and customer trust.",
      details: "We emphasize key features and benefits with persuasive copy and SEO integration to improve product visibility.",
      features: [
        "Feature Highlighting: Emphasize key features and benefits of your products.",
        "Persuasive Copy: Write descriptions that persuade and encourage purchases.",
        "SEO Integration: Incorporate relevant keywords to improve product visibility in search results.",
        "Consistent Tone: Ensure a consistent tone and style that aligns with your brand."
      ]
    },
    {
      id: "newsletters",
      name: "Email Newsletters",
      icon: Mail,
      color: { bg: "bg-cyan-500/10", text: "text-cyan-500", hover: "group-hover:bg-cyan-500 group-hover:text-white", gradient: "from-cyan-600/20 to-transparent", glow: "#06b6d4" },
      image: ASSETS.contentWritingPlatforms.newsletter,
      desc: "Email newsletters are a great way to keep your audience informed and engaged with your brand.",
      details: "We develop content strategies, craft engaging subject lines, and include clear call-to-actions to drive conversions.",
      features: [
        "Content Planning: Develop a content strategy that aligns with your marketing goals.",
        "Engaging Subject Lines: Craft subject lines that increase open rates.",
        "Valuable Content: Create informative and engaging content that adds value to your subscribers.",
        "Call-to-Actions: Include clear and compelling call-to-actions to drive conversions."
      ]
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', service: 'Content Writing', message: '' });
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    try {
      await submitLeadForm(contactForm);
      setContactSuccess(true);
      setContactForm({ name: '', email: '', phone: '', service: 'Content Writing', message: '' });
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
            <source src={ASSETS.contentWritingVideo} type="video/mp4" />
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
        <div className="bubble bubble-cyan b5" />
        <div className="bubble bubble-cyan b6" />
        <div className="bubble bubble-cyan b7" />
        <div className="bubble bubble-cyan b8" />
        <div className="bubble bubble-pink b9" />
        <div className="bubble bubble-pink b10" />
        <div className="bubble bubble-pink b11" />
        <div className="bubble bubble-pink b12" />
        <div className="bubble bubble-orange b13" />
        <div className="bubble bubble-orange b14" />
        <div className="bubble bubble-orange b15" />
        <div className="bubble bubble-orange b16" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0">
          <div className="max-w-5xl">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold mb-8 backdrop-blur-md">
                <PenTool size={16} />
                <span>CONTENT WRITING | STRATEGIC ENGAGEMENT</span>
              </div>
            </FadeIn>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10">

              <FadeIn delay={0.4} distance={40}>
                WORDS THAT<br />
              </FadeIn>

              <FadeIn delay={0.6} distance={40}>
                <span className="text-gradient-blue inline-block sm:whitespace-nowrap">
                  <Typewriter words={["WIN!", "CONNECT!", "CONVERT!", "INSPIRE!"]} />
                </span>
              </FadeIn>
            </h1>
            
            <FadeIn delay={0.8}>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-3xl font-medium">
                Elevate Your Brand with Strategic Content Writing. We create compelling narratives that capture attention, build trust, and drive results.
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
                  href="https://calendly.com/digimarketingart-contact/discovery-session-for-digimarketingart"
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

      {/* Services Overview */}
      <section className="py-24 section-dark border-y border-white/30 relative overflow-hidden">
        <div className="bubble bubble-purple b1" />
        <div className="bubble bubble-purple b2" />
        <div className="bubble bubble-purple b3" />
        <div className="bubble bubble-purple b4" />
        <div className="bubble bubble-cyan b5" />
        <div className="bubble bubble-cyan b6" />
        <div className="bubble bubble-cyan b7" />
        <div className="bubble bubble-cyan b8" />
        <div className="bubble bubble-pink b9" />
        <div className="bubble bubble-pink b10" />
        <div className="bubble bubble-pink b11" />
        <div className="bubble bubble-pink b12" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic mb-6">
                Content Writing <span className="text-gradient-blue">Services We Provide</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {writingServices.map((service, i) => (
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
      {writingServices.map((service, i) => (
        <section key={service.id} id={service.id} className={`py-32 section-dark relative overflow-hidden ${i % 2 === 0 ? 'bg-slate-900/30' : ''}`}>
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
                    {service.name.split(' ')[0]} <span style={{ color: service.color.glow }}>{service.name.split(' ').slice(1).join(' ')}</span>
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
                      width={600}
                      height={600}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color.gradient} opacity-60`} />
                    <div className="absolute bottom-8 left-8 hidden md:block">
                      <div className="text-2xl font-black text-white uppercase tracking-widest">{service.name}</div>
                      <div className="font-bold uppercase tracking-widest text-xs" style={{ color: service.color.glow }}>Content Writing</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

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
                  Let's talk about your content strategy and how we can help you create compelling narratives that drive results.
                </p>
              </FadeIn>
              
              <div className="space-y-8">
                {[
                  { icon: Phone, label: "Call Us", value: "+91-90565-44487" },
                  { icon: Mail, label: "Email Us", value: "info@digimarketingart.com" },
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
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="text-green-500" size={40} />
                      </div>
                      <p className="text-white text-xl font-bold">Message Sent!</p>
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
                    whileHover={{ scale: contactSubmitting ? 1 : 1.02, boxShadow: contactSubmitting ? "none" : "0 20px 40px rgba(37, 99, 235, 0.3)" }}
                    whileTap={{ scale: contactSubmitting ? 1 : 0.98 }}
                    disabled={contactSubmitting}
                    className="w-full py-6 bg-blue-600 text-white rounded-2xl font-black text-xl uppercase tracking-widest shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {contactSubmitting ? 'Sending...' : 'Send Message'} {!contactSubmitting && <ArrowRight className="group-hover:translate-x-2 transition-transform" />}
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
