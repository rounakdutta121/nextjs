'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Layout, ArrowRight, CheckCircle2, Mail, Phone, MapPin, 
  ChevronDown, Code, ShoppingCart, Globe, Settings, Search, 
  Cpu, Database, Zap, Monitor, Smartphone, Globe2, Check
} from 'lucide-react';
import { FadeIn, FloatingText } from '@/components/Animations';
import { Typewriter } from '@/components/Typewriter';
import { ASSETS, services } from '@/data';
import { submitLeadForm } from '@/utils/formSubmission';

export default function WebDevelopment() {
  const webServices = [
    {
      id: "custom-web",
      name: "Web Development",
      icon: Code,
      image: ASSETS.webDevPlatforms.custom,
      desc: "Our custom website development services ensure your website is tailored to your unique business needs and objectives.",
      details: "We offer bespoke design, scalable solutions, and responsive design to ensure your website is fully optimized for all devices.",
      features: [
        "Bespoke Design: Create a unique and visually appealing design that aligns with your brand identity.",
        "Scalable Solutions: Develop websites that can grow with your business, accommodating future expansion and functionality.",
        "Responsive Design: Ensure your website is fully responsive, providing an optimal viewing experience across all devices."
      ],
      color: { bg: "bg-blue-500/10", text: "text-blue-500", hover: "group-hover:bg-blue-500 group-hover:text-white", gradient: "from-blue-600/20 to-transparent", glow: "#2563eb" }
    },
    {
      id: "ecommerce",
      name: "E-Commerce Development",
      icon: ShoppingCart,
      image: ASSETS.webDevPlatforms.ecommerce,
      desc: "For businesses looking to sell products or services online, our e-commerce development services are designed to drive sales.",
      details: "We help you choose the best platform and integrate secure payment gateways to facilitate smooth transactions.",
      features: [
        "Platform Selection: Choose the best e-commerce platform for your needs (Shopify, WooCommerce, Magento, etc.).",
        "Custom Shopping Cart: Develop a user-friendly and secure shopping cart that enhances the purchasing experience.",
        "Payment Gateway Integration: Integrate secure payment gateways to facilitate smooth transactions.",
        "Product Management: Implement robust product management systems to easily manage your inventory.",
        "Order Tracking: Enable order tracking functionality to keep customers informed about their purchases."
      ],
      color: { bg: "bg-green-500/10", text: "text-green-500", hover: "group-hover:bg-green-500 group-hover:text-white", gradient: "from-green-600/20 to-transparent", glow: "#22c55e" }
    },
    {
      id: "cms",
      name: "CMS Development",
      icon: Settings,
      image: ASSETS.webDevPlatforms.cms,
      desc: "A Content Management System (CMS) allows you to easily manage and update your website content without technical expertise.",
      details: "We develop websites on popular CMS platforms like WordPress, Joomla, and Drupal with custom templates.",
      features: [
        "Platform Expertise: Develop websites on popular CMS platforms like WordPress, Joomla, and Drupal.",
        "Custom Templates: Create custom templates and themes that match your brand's aesthetic.",
        "User-Friendly Interface: Design an intuitive backend interface for easy content management.",
        "Plugin Integration: Integrate essential plugins and extensions to enhance functionality."
      ],
      color: { bg: "bg-purple-500/10", text: "text-purple-500", hover: "group-hover:bg-purple-500 group-hover:text-white", gradient: "from-purple-600/20 to-transparent", glow: "#9333ea" }
    },
    {
      id: "web-apps",
      name: "Web Application Development",
      icon: Cpu,
      image: ASSETS.webDevPlatforms.webapp,
      desc: "For businesses requiring more complex solutions, our web application development services address specific workflows.",
      details: "We create tailored web applications, SaaS solutions, and integrate APIs for seamless interaction between systems.",
      features: [
        "Custom Web Apps: Develop tailored web applications that address specific business needs and workflows.",
        "SaaS Solutions: Create Software as a Service (SaaS) applications accessible over the internet.",
        "API Development: Develop and integrate APIs to ensure seamless interaction between different software systems.",
        "Cloud Integration: Utilize cloud services to enhance scalability and accessibility."
      ],
      color: { bg: "bg-orange-500/10", text: "text-orange-500", hover: "group-hover:bg-orange-500 group-hover:text-white", gradient: "from-orange-600/20 to-transparent", glow: "#f97316" }
    },
    {
      id: "maintenance",
      name: "Website Maintenance and Support",
      icon: Database,
      image: ASSETS.webDevPlatforms.maintenance,
      desc: "Maintaining your website is crucial for ensuring its performance, security, and up-to-date content.",
      details: "Our maintenance services include regular updates, security monitoring, and performance optimization.",
      features: [
        "Regular Updates: Keep your website's software, plugins, and themes updated to the latest versions.",
        "Security Monitoring: Implement and monitor security measures to protect your website from threats.",
        "Performance Optimization: Optimize your website's performance to ensure fast load times.",
        "Content Updates: Assist with regular content updates to keep your website fresh and relevant.",
        "Backup and Recovery: Perform regular backups and establish recovery protocols to safeguard your data."
      ],
      color: { bg: "bg-red-500/10", text: "text-red-500", hover: "group-hover:bg-red-500 group-hover:text-white", gradient: "from-red-600/20 to-transparent", glow: "#ef4444" }
    },
    {
      id: "seo-friendly",
      name: "SEO-Friendly Development",
      icon: Search,
      image: ASSETS.webDevPlatforms.seo,
      desc: "Developing your website with SEO best practices in mind ensures better visibility on search engines.",
      details: "We write clean code, optimize meta tags, and implement schema markup to improve search engine rankings.",
      features: [
        "Clean Code: Write clean, efficient code that enhances site speed and search engine crawlability.",
        "Meta Tags and Descriptions: Optimize meta tags, titles, and descriptions to improve search engine rankings.",
        "URL Structure: Create SEO-friendly URLs that are easy to read and include relevant keywords.",
        "Mobile Optimization: Ensure your website is mobile-friendly, as search engines prioritize mobile-first indexing.",
        "Schema Markup: Implement structured data to provide search engines with detailed information about your content."
      ],
      color: { bg: "bg-cyan-500/10", text: "text-cyan-500", hover: "group-hover:bg-cyan-500 group-hover:text-white", gradient: "from-cyan-600/20 to-transparent", glow: "#06b6d4" }
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', service: 'Web Development', message: '' });
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    try {
      await submitLeadForm(contactForm);
      setContactSuccess(true);
      setContactForm({ name: '', email: '', phone: '', service: 'Web Development', message: '' });
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
            <source src={ASSETS.webDevVideo} type="video/mp4" />
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
        <div className="bubble bubble-purple b9" />
        <div className="bubble bubble-purple b10" />
        <div className="bubble bubble-purple b11" />
        <div className="bubble bubble-purple b12" />
        <div className="bubble bubble-green b13" />
        <div className="bubble bubble-green b14" />
        <div className="bubble bubble-green b15" />
        <div className="bubble bubble-green b16" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0">
          <div className="max-w-5xl">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold mb-8 backdrop-blur-md">
                <Layout size={16} />
                <span>WEB DEVELOPMENT | CUSTOM SOLUTIONS</span>
              </div>
            </FadeIn>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10">

              <FadeIn delay={0.4} distance={40}>
                CODE THAT SCALES,<br />
              </FadeIn>

              <FadeIn delay={0.6} distance={40}>
                <span className="text-gradient-blue inline-block sm:whitespace-nowrap">
                  <Typewriter words={["DESIGN THAT SELLS!", "BUILT FOR GROWTH!", "USER FOCUSED!", "FUTURE READY!"]} />
                </span>
              </FadeIn>
            </h1>
            
            <FadeIn delay={0.8}>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-3xl font-medium">
                Elevate Your Brand with Strategic Web Development. We build high-performing, secure, and scalable websites tailored to your business goals.
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

      {/* Services Overview */}
      <section className="py-24 section-dark border-y border-white/30 relative overflow-hidden">
        <div className="bubble bubble-cyan b1" />
        <div className="bubble bubble-cyan b2" />
        <div className="bubble bubble-cyan b3" />
        <div className="bubble bubble-cyan b4" />
        <div className="bubble bubble-purple b5" />
        <div className="bubble bubble-purple b6" />
        <div className="bubble bubble-purple b7" />
        <div className="bubble bubble-purple b8" />
        <div className="bubble bubble-green b9" />
        <div className="bubble bubble-green b10" />
        <div className="bubble bubble-green b11" />
        <div className="bubble bubble-green b12" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase italic mb-6">
                Web Development <span className="text-gradient-blue">Services We Provide</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webServices.map((service, i) => (


              <FadeIn delay={i * 0.1}>
                <div className="service-card group h-full flex flex-col">
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
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {webServices.map((service, i) => (
        <section key={service.id} id={service.id} className={`py-32 section-dark relative overflow-hidden ${i % 2 === 0 ? 'bg-slate-900/30' : ''}`}>
          <div className="bubble bubble-cyan b1" />
          <div className="bubble bubble-cyan b3" />
          <div className="bubble bubble-cyan b5" />
          <div className="bubble bubble-cyan b7" />
          <div className="bubble bubble-purple b9" />
          <div className="bubble bubble-purple b11" />
          <div className="bubble bubble-purple b13" />
          <div className="bubble bubble-purple b15" />
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
                      width={800}
                      height={800}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color.gradient} opacity-60`} />
                    <div className="absolute bottom-8 left-8 hidden md:block">
                      <div className="text-2xl font-black text-white uppercase tracking-widest">{service.name}</div>
                      <div className="font-bold uppercase tracking-widest text-xs" style={{ color: service.color.glow }}>Web Solutions</div>
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
                  Ready to <span className="text-gradient-blue">Build?</span>
                </h2>
                <p className="text-xl text-slate-400 mb-12 max-w-lg">
                  Let's talk about your web development goals and how we can help you build a high-performing website that drives results.
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
                  <div className="absolute inset-0 bg-green-500/20 backdrop-blur-xl rounded-[3rem] flex items-center justify-center z-10">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                        <Check size={40} className="text-white" />
                      </div>
                      <p className="text-2xl font-black text-white uppercase">Message Sent!</p>
                    </div>
                  </div>
                )}
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                      <input type="text" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} placeholder="John Doe" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                      <input type="email" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} placeholder="john@example.com" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white transition-all" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                      <input type="tel" value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} placeholder="+91..." className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white transition-all" />
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
                    <textarea value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} placeholder="Tell us about your project..." rows={4} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 text-white transition-all resize-none"></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    disabled={contactSubmitting}
                    className="w-full py-6 bg-blue-600 text-white rounded-2xl font-black text-xl uppercase tracking-widest shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
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
