'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, ArrowRight, CheckCircle2, Mail, Phone, MapPin, 
  ChevronDown, BarChart3, TrendingUp, Building2, DollarSign,
  Heart, ShoppingCart, Linkedin, MessageSquare, Shield, Users, Briefcase, Check
} from 'lucide-react';
import { FadeIn, FloatingText } from '@/components/Animations';
import { Typewriter } from '@/components/Typewriter';
import { ASSETS, services } from '@/data';
import { submitLeadForm } from '@/utils/formSubmission';

export default function DataMining() {
  const dataMiningServices = [
    {
      id: "business-data",
      name: "Business Data Mining",
      icon: Building2,
      image: ASSETS.dataMiningPlatforms.business,
      desc: "Data is the key to making informed business decisions.",
      details: "We help you unlock the power of your business data with advanced mining techniques that reveal valuable insights for strategic decision-making.",
      features: [
        "Market Analysis: Extract valuable insights to understand industry trends and customer behavior.",
        "Competitor Analysis: Gather and analyze competitor data to identify market opportunities.",
        "Customer Segmentation: Use data-driven segmentation to tailor marketing strategies for different audience groups.",
        "Trend Prediction: Leverage predictive analytics to anticipate future market movements."
      ],
      color: { bg: "bg-cyan-500/10", text: "text-cyan-500", hover: "group-hover:bg-cyan-500 group-hover:text-white", gradient: "from-cyan-600/20 to-transparent", glow: "#06b6d4" }
    },
    {
      id: "financial-data",
      name: "Financial Data Mining",
      icon: DollarSign,
      image: ASSETS.dataMiningPlatforms.financial,
      desc: "Make smarter financial decisions with our advanced data mining techniques.",
      details: "Transform your financial data into actionable insights with our comprehensive data mining solutions designed for the financial sector.",
      features: [
        "Fraud Detection: Identify anomalies and prevent fraudulent transactions.",
        "Risk Analysis: Assess financial risks and make data-driven investment decisions.",
        "Stock Market Prediction: Use historical data to analyze stock trends and forecast market changes.",
        "Expense Optimization: Identify cost-saving opportunities based on spending patterns."
      ],
      color: { bg: "bg-green-500/10", text: "text-green-500", hover: "group-hover:bg-green-500 group-hover:text-white", gradient: "from-green-600/20 to-transparent", glow: "#22c55e" }
    },
    {
      id: "healthcare-data",
      name: "Healthcare Data Mining",
      icon: Heart,
      image: ASSETS.dataMiningPlatforms.healthcare,
      desc: "Transform healthcare operations with data-driven insights.",
      details: "We help healthcare organizations leverage data mining to improve patient outcomes, optimize operations, and advance medical research.",
      features: [
        "Patient Trend Analysis: Identify health patterns and improve patient care.",
        "Medical Research Support: Extract relevant medical data for research and development.",
        "Predictive Analytics: Forecast disease outbreaks and healthcare demands.",
        "Healthcare Fraud Detection: Identify billing errors and fraudulent claims."
      ],
      color: { bg: "bg-red-500/10", text: "text-red-500", hover: "group-hover:bg-red-500 group-hover:text-white", gradient: "from-red-600/20 to-transparent", glow: "#ef4444" }
    },
    {
      id: "retail-data",
      name: "Retail & E-Commerce Data Mining",
      icon: ShoppingCart,
      image: ASSETS.dataMiningPlatforms.retail,
      desc: "Boost your retail and e-commerce performance with actionable insights.",
      details: "Unlock the full potential of your retail data to understand customers, optimize inventory, and drive sales growth.",
      features: [
        "Consumer Purchase Analysis: Understand buying habits and optimize marketing strategies.",
        "Inventory Optimization: Predict demand and streamline inventory management.",
        "Pricing Strategy Optimization: Adjust pricing based on market trends and competitor analysis.",
        "Customer Retention Analysis: Identify patterns to improve customer loyalty and repeat purchases."
      ],
      color: { bg: "bg-orange-500/10", text: "text-orange-500", hover: "group-hover:bg-orange-500 group-hover:text-white", gradient: "from-orange-600/20 to-transparent", glow: "#f97316" }
    },
    {
      id: "linkedin-email-data",
      name: "LinkedIn & Email Data Mining",
      icon: Linkedin,
      image: ASSETS.dataMiningPlatforms.linkedinEmail,
      desc: "Extract valuable insights from LinkedIn and email data.",
      details: "Maximize your business potential by extracting valuable insights from LinkedIn and email data to identify leads, analyze market trends, and enhance customer outreach.",
      features: [
        "LinkedIn Data Mining: Extract targeted business leads and identify decision-makers for personalized outreach.",
        "Email Data Mining: Segmentation of potential customers based on engagement and high-value prospects.",
        "Competitor Analysis: Analyze competitor networks and industry connections on LinkedIn.",
        "Lead Generation: Automated data extraction for streamlined B2B lead generation."
      ],
      color: { bg: "bg-blue-500/10", text: "text-blue-500", hover: "group-hover:bg-blue-500 group-hover:text-white", gradient: "from-blue-600/20 to-transparent", glow: "#2563eb" }
    }
  ];

  const whyChooseUs = [
    { icon: Database, title: "Accurate & Reliable Insights", desc: "We use advanced techniques to ensure data accuracy." },
    { icon: Briefcase, title: "Custom Solutions", desc: "Tailored data mining strategies based on your business needs." },
    { icon: Shield, title: "Data Security", desc: "Your data is protected with industry-leading security protocols." },
    { icon: Users, title: "Expert Analysts", desc: "A team of skilled data scientists and analysts at your service." }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', service: 'Data Mining', message: '' });
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    try {
      await submitLeadForm(contactForm);
      setContactSuccess(true);
      setContactForm({ name: '', email: '', phone: '', service: 'Data Mining', message: '' });
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
            <source src={ASSETS.dataMiningVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-950/60" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="blue-glow -top-20 -left-20 w-[600px] h-[600px] opacity-20" />
        <div className="blue-glow -bottom-20 -right-20 w-[600px] h-[600px] opacity-20" />
        
        <div className="bubble bubble-cyan b1" />
        <div className="bubble bubble-cyan b2" />
        <div className="bubble bubble-cyan b3" />
        <div className="bubble bubble-cyan b4" />
        <div className="bubble bubble-blue b5" />
        <div className="bubble bubble-blue b6" />
        <div className="bubble bubble-blue b7" />
        <div className="bubble bubble-blue b8" />
        <div className="bubble bubble-green b9" />
        <div className="bubble bubble-green b10" />
        <div className="bubble bubble-green b11" />
        <div className="bubble bubble-green b12" />
        <div className="bubble bubble-orange b13" />
        <div className="bubble bubble-orange b14" />
        <div className="bubble bubble-orange b15" />
        <div className="bubble bubble-orange b16" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0">
          <div className="max-w-5xl">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold mb-8 backdrop-blur-md">
                <Database size={16} />
                <span>DATA MINING | AI-POWERED INSIGHTS</span>
              </div>
            </FadeIn>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10">

              <FadeIn delay={0.4} distance={40}>
                UNLOCK HIDDEN<br />
              </FadeIn>

              <FadeIn delay={0.6} distance={40}>
                <span className="text-gradient-blue inline-block sm:whitespace-nowrap">
                  <Typewriter words={["INSIGHTS!", "DATA!", "OPPORTUNITIES!", "GROWTH!"]} />
                </span>
              </FadeIn>
            </h1>
            
            <FadeIn delay={0.8}>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-3xl font-medium">
                Transform Your Data into Actionable Insights with AI-Driven Data Mining Solutions. We help you uncover patterns, predict trends, and make smarter decisions.
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
        <div className="bubble bubble-cyan b1" />
        <div className="bubble bubble-cyan b2" />
        <div className="bubble bubble-cyan b3" />
        <div className="bubble bubble-cyan b4" />
        <div className="bubble bubble-green b5" />
        <div className="bubble bubble-green b6" />
        <div className="bubble bubble-green b7" />
        <div className="bubble bubble-green b8" />
        <div className="bubble bubble-orange b9" />
        <div className="bubble bubble-orange b10" />
        <div className="bubble bubble-orange b11" />
        <div className="bubble bubble-orange b12" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic mb-6">
                Data Mining <span className="text-gradient-blue">Services We Provide</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataMiningServices.map((service, i) => (
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
      {dataMiningServices.map((service, i) => (
        <section key={service.id} id={service.id} className={`py-32 section-dark relative overflow-hidden ${i % 2 === 0 ? 'bg-slate-900/30' : ''}`}>
          <div className="bubble bubble-cyan b1" />
          <div className="bubble bubble-cyan b3" />
          <div className="bubble bubble-cyan b5" />
          <div className="bubble bubble-cyan b7" />
          <div className="bubble bubble-green b9" />
          <div className="bubble bubble-green b11" />
          <div className="bubble bubble-green b13" />
          <div className="bubble bubble-green b15" />
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

              <FadeIn direction={i % 2 === 0 ? "right" : "left"}>
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase italic">
                    {service.name.split(' ').slice(0, 2).join(' ')} <span style={{ color: service.color.glow }}>{service.name.split(' ').slice(2).join(' ')}</span>
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
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      width={600}
                      height={600}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color.gradient} opacity-60`} />
                    <div className="absolute bottom-8 left-8 hidden md:block">
                      <div className="text-2xl font-black text-white uppercase tracking-widest">{service.name.split(' ')[0]}</div>
                      <div className="font-bold uppercase tracking-widest text-xs" style={{ color: service.color.glow }}>Data Solutions</div>
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
                Why Choose Our <span className="text-gradient-blue">Data Mining Services?</span>
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
                  Ready to <span className="text-gradient-blue">Discover?</span>
                </h2>
                <p className="text-xl text-slate-400 mb-12 max-w-lg">
                  Let's talk about your data mining needs and how we can help you unlock hidden insights for business growth.
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
                  <div className="absolute inset-0 bg-green-500/90 rounded-[3rem] flex items-center justify-center z-10 animate-in fade-in duration-300">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="text-green-500" size={40} />
                      </div>
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
