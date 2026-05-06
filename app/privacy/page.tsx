'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FadeIn } from '@/components/Animations';

export default function Privacy() {
  const sections = [
    {
      title: "1. Introduction",
      content: "Welcome to Digimarketing (\"we,\" \"our,\" \"us\"). We are committed to protecting your personal information and ensuring transparency around how we collect, use, and safeguard your data. This Privacy Policy explains how we handle your information when you visit our website, interact with our services, or otherwise engage with our platform. By using our website and services, you consent to the practices described in this Privacy Policy."
    },
    {
      title: "2. Information We Collect",
      items: [
        { label: "Personal Information:", desc: "Name, email address, phone number, address, and any other information you voluntarily provide when contacting us or using our services." },
        { label: "Usage Data:", desc: "IP address, browser type, device identifiers, pages viewed, time spent on pages, referring URLs, and analytical information regarding site performance and interaction." },
        { label: "Cookies and Tracking Technologies:", desc: "Cookies, pixels, analytics tools, and similar technologies to personalize content, analyze traffic, and improve user experience. You can disable cookies through browser settings." }
      ]
    },
    {
      title: "3. How We Use Your Information",
      items: [
        "Provide, operate, and improve our services",
        "Respond to inquiries, support requests, and service needs",
        "Personalize website experience and content",
        "Analyze traffic patterns to enhance functionality and performance",
        "Send transactional or marketing communications (only with consent)",
        "Prevent fraud and ensure platform security",
        "Comply with legal, regulatory, or contractual obligations"
      ]
    },
    {
      title: "4. Sharing Your Information",
      content: "We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this Privacy Policy. We may share your information with:",
      items: [
        "Trusted service providers that assist in business operations (hosting, analytics, marketing tools, payment processors)",
        "Legal authorities when required by law or to protect rights, safety, or property",
        "Business transfers, such as mergers, acquisitions, or asset sales (with notice)"
      ]
    },
    {
      title: "5. Data Security",
      content: "We implement appropriate physical, technical, and administrative safeguards to protect your information. However, no security system is completely impenetrable, and we cannot guarantee absolute security."
    },
    {
      title: "6. Your Rights",
      items: [
        "Access your personal information",
        "Request correction or update",
        "Request deletion of your data",
        "Object or restrict processing",
        "Withdraw consent at any time",
        "Request data portability"
      ]
    },
    {
      title: "7. Cookies",
      content: "We use cookies to:",
      items: [
        "Understand and save your preferences for future visits",
        "Compile aggregate data about site traffic and site interactions"
      ],
      footer: "You can choose to disable cookies through your browser settings, but this may affect your ability to use certain features of our website."
    },
    {
      title: "8. Third-Party Links",
      content: "Our website may contain external links. We are not responsible for the privacy practices or content of third-party websites."
    },
    {
      title: "9. Changes to This Privacy Policy",
      content: "We may update this policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review it regularly."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 section-dark relative overflow-hidden">
      <div className="blue-glow top-0 right-0 w-[600px] h-[600px] opacity-10" />
      <div className="bubble bubble-blue b1" />
      <div className="bubble bubble-blue b3" />
      <div className="bubble bubble-blue b5" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="mb-12">
            <p className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Privacy <span className="text-gradient-blue">Policy</span>
            </h1>
            <p className="text-slate-400">Last Updated & Effective Date: 21 November 2025</p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {sections.map((section, idx) => (
            // @ts-ignore
            <FadeIn delay={idx * 0.05}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all"
              >
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{section.title}</h2>
                
                {section.content && (
                  <p className="text-slate-400 leading-relaxed mb-4">{section.content}</p>
                )}

                {section.items && section.items.length > 0 && (
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-400">
                        {typeof item === 'string' ? (
                          <>
                            <span className="text-blue-500 mt-1.5">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>{item}</span>
                          </>
                        ) : (
                          <>
                            <span className="text-blue-500 font-semibold mt-0.5">{item.label}</span>
                            <span>{item.desc}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {section.footer && (
                  <p className="text-slate-500 italic mt-4 text-sm">{section.footer}</p>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-16 p-8 bg-blue-500/10 rounded-2xl border border-blue-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <p className="text-slate-400 mb-6">
              If you have any questions about this Privacy Policy, please don't hesitate to contact us.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:info@digimarketingart.com" 
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-colors"
              >
                Email Us
              </a>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-12">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors font-bold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
