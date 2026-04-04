'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen, Volume2, VolumeX, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/Animations';

const blogPosts: { [key: string]: any } = {
  'innovations-in-energy-infrastructure': {
    id: 1,
    title: "Innovations in Energy Infrastructure",
    category: "Design Testing",
    author: "Dr.Volt",
    authorInitials: "DV",
    authorColor: "from-blue-500 to-cyan-500",
    date: "19 November 2025",
    readTime: "5 Min",
    image: "https://cdni.iconscout.com/illustration/premium/thumb/group-architects-create-and-engineering-project-of-city-illustration-svg-download-png-1850571.png",
    accentColor: "blue",
    excerpt: "The Urgency of Automating Our Substations: A Leap Towards a Resilient Future",
    sections: [
      { title: "Welcome", content: "Welcome to an exploration of innovation and resilience in the world of industrial design and manufacturing. Join Dr. Volt as we delve into critical advancements shaping the future of testing services and robust energy infrastructure.", icon: "zap" },
      { title: "The Challenge", content: "It's remarkable, isn't it, how quickly technology evolves? What felt cutting-edge just a decade ago can now seem almost… quaint. The truth is, while some might feel a pang of nostalgia for older systems, the sheer speed of technological advancement means that waiting even a few years can leave us critically behind.", icon: "target" },
      { title: "The Solution", content: "Automating these substations isn't merely about adopting new gadgets; it's about embedding intelligence and resilience directly into the very fabric of our national power supply. It means faster fault detection, quicker recovery, and a significantly more stable grid for every home and industry.", icon: "trending" },
      { title: "Modern Technologies", content: "What excites me most is the ingenious integration of cutting-edge technologies. We're talking about smart sensors that monitor conditions with incredible precision, advanced communication protocols ensuring seamless data flow, and intelligent automation systems that can predict and prevent issues before they even arise.", icon: "users" },
      { title: "Security Concerns", content: "In our increasingly interconnected world, the security of our critical infrastructure, especially our power systems, has taken on a profound new meaning. We cannot afford to ignore the silent, yet potentially devastating, danger of intentional destructive electromagnetic attacks.", icon: "shield" }
    ],
    keyPoints: ["Faster Fault Detection", "Intelligent Automation", "Enhanced Grid Stability", "Proactive Security"],
    conclusion: "It requires collaboration between scientists, engineers, policymakers, and a vigilant public. This isn't a battle we can afford to lose, and our collective will to safeguard these vital lifelines defines our resilience as a nation.",
    relatedSlugs: ["healthy-living-nurturing-our-golden-years"]
  },
  'healthy-living-nurturing-our-golden-years': {
    id: 2,
    title: "Healthy Living: Proactive Steps for Healthy Aging",
    category: "Healthy Living",
    author: "Dr. Clara Wren",
    authorInitials: "CW",
    authorColor: "from-green-500 to-emerald-500",
    date: "19 November 2025",
    readTime: "4 Min",
    image: "https://img.freepik.com/free-vector/pharmacy-store-interior-with-buyer-pharmacist_107791-30927.jpg?semt=ais_hybrid&w=740&q=80",
    accentColor: "green",
    excerpt: "Nurturing Our Golden Years: Proactive Steps for Healthy Aging and Flu Protection",
    sections: [
      { title: "Good Morning!", content: "As the seasons shift, our thoughts often turn to staying well. Let's explore how we can proactively nurture our health and protect our loved ones.", icon: "sun" },
      { title: "Healthy Aging", content: "I often reflect on the wisdom our older generations hold and the vibrant lives many continue to lead. It's a beautiful testament to resilience, and yet, we know that as we age, our bodies need a little extra care and attention.", icon: "heart" },
      { title: "The Power of Prevention", content: "Regular physical activity, a balanced diet, and simply staying connected with loved ones are as crucial as our annual vaccinations. It's about building a robust shield, not just for ourselves, but for the entire community.", icon: "shield" },
      { title: "Your Local Pharmacy", content: "Our local pharmacies have always been a cornerstone of our communities, but now, they're becoming even more indispensable. Pharmacists are stepping up to offer a range of services, alleviating pressure on our busy doctors and providing immediate, trusted support.", icon: "users" },
      { title: "Mental Wellbeing", content: "In the heart of every community lies a profound need for connection, especially when navigating the complexities of our mental health. Sometimes, the most potent medicine comes from human connection, from knowing that someone cares and understands.", icon: "heart" }
    ],
    keyPoints: ["Annual Vaccinations", "Regular Exercise", "Balanced Diet", "Community Connection"],
    conclusion: "These initiatives are quietly weaving a stronger fabric of support throughout our neighbourhoods, bringing essential care closer to home, right where we need it most.",
    relatedSlugs: ["innovations-in-energy-infrastructure"]
  },
  'funnel-stages': {
    id: 3,
    title: "If Your Funnel Still Has Stages, You're Already Behind",
    category: "Marketing",
    author: "DamnArt",
    authorInitials: "DA",
    authorColor: "from-purple-500 to-pink-500",
    date: "11 April 2025",
    readTime: "3 Min",
    image: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774414178/Idhar-Udhar-ke-use-2025-04-11T101138.735-768x432_f7c6im.jpg",
    accentColor: "purple",
    excerpt: "The Traditional Funnel Is Dead. Here's What Replaced It.",
    sections: [
      { title: "The Old Way", content: "Remember the good old marketing funnel? Awareness at the top. Consideration in the middle. Conversion at the bottom. Neat. Linear. Predictable. Now? That funnel's cracked—and if you're still building your marketing strategy around it, you're bleeding leads, relevance, and revenue.", icon: "funnel" },
      { title: "The New Reality", content: "In 2025, the customer journey isn't a funnel. It's a fluid, real-time ecosystem. And brands stuck on stages are losing to those building adaptive, stage-less systems.", icon: "zap" },
      { title: "What's Wrong with Stages?", content: "Funnel thinking assumes linear behavior. But users today zigzag across platforms, binge content, ghost your emails, and buy based on emotion, experience, and urgency. Ask yourself: Are you optimizing for the stage… or for the moment?", icon: "question" },
      { title: "Flywheel vs Funnel", content: "Traditional funnels were built for control. Today's growth systems are built for speed, feedback, and emotional velocity. Instead of pushing people down a predefined path, brands now attract, engage, and serve dynamically.", icon: "trending" },
      { title: "The Technology", content: "You need Behavioral Triggers for personalization, 360-Degree Profiles across devices, and Emotional Targeting for micro-moments. If your CRM only sends nurture emails on day 3, day 5, and day 7—you're already too late.", icon: "target" }
    ],
    keyPoints: ["Real-Time Behavior Tracking", "360° Customer Profiles", "Emotional Targeting", "Dynamic Engagement"],
    conclusion: "The future of marketing belongs to brands that listen before they speak, adapt before they push, and act in moments—not stages. The funnel isn't just outdated. It's slowing you down.",
    relatedSlugs: ["whisper-marketing", "psychology-almost-buying"]
  },
  'whisper-marketing': {
    id: 4,
    title: "How Brands Are Secretly 'Whispering' to You",
    category: "Marketing",
    author: "DamnArt",
    authorInitials: "DA",
    authorColor: "from-orange-500 to-red-500",
    date: "9 April 2025",
    readTime: "3 Min",
    image: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774415128/unnamed-2025-04-09T143637.417-768x768_slsvrm.jpg",
    accentColor: "orange",
    excerpt: "Ever scrolled through your Instagram feed and felt like a post was speaking directly to you?",
    sections: [
      { title: "The Whisper Revolution", content: "Ever scrolled through your Instagram feed and felt like a post was speaking directly to you? You're not imagining it. Brands today aren't shouting anymore—they're whispering. This subtle, emotional, highly-targeted communication is what makes you stop mid-scroll, nod in agreement, and sometimes even click 'buy.'", icon: "message" },
      { title: "What Is Whisper Marketing?", content: "Whisper marketing is the art of subtle persuasion. Instead of loud, direct ads, brands now slide into your feed like a friend—offering value, empathy, and familiarity. It's not about 'Buy now!' anymore—it's about, 'We get you.'", icon: "lightbulb" },
      { title: "Why It Works", content: "Because you don't see it coming. Whisper marketing feels like content—not an ad. And that's what makes it so powerful. Old-school ads use loud CTAs like 'Buy Now!' while whisper tactics use subtle hooks like 'Ever felt this way?'", icon: "target" },
      { title: "The Psychology", content: "Emotion drives relatability and empathy-driven messaging. Timing leverages trending topics and cultural moments. Trust comes from micro-influencers and authentic voices. Subtlety means minimal branding that lets emotion do the heavy lifting.", icon: "brain" },
      { title: "Real Examples", content: "Dove posts body-positive quotes that look like inspiration. Apple uses user-shot content to 'show' rather than tell. Nike drops reels that focus on mindset, not shoes. Netflix uses memes to promote shows with zero hard sell. You double-tap without realizing you're part of a campaign.", icon: "users" }
    ],
    keyPoints: ["Emotional Connection", "Social Listening", "Micro-Influencers", "Native Content"],
    conclusion: "In a digital world full of noise, quiet influence wins. The brands that whisper are the ones that stick—because they don't feel like strangers. They feel like friends.",
    relatedSlugs: ["funnel-stages", "design-brain-triggers"]
  },
  'design-brain-triggers': {
    id: 5,
    title: "Design Isn't What It Looks Like. It's What It Triggers",
    category: "Design",
    author: "DamnArt",
    authorInitials: "DA",
    authorColor: "from-cyan-500 to-blue-500",
    date: "8 April 2025",
    readTime: "3 Min",
    image: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774415549/Idhar-Udhar-ke-use-2025-04-08T101140.386_ud2lwi.jpg",
    accentColor: "cyan",
    excerpt: "When we hear the word 'design', most of us think about what we see—fonts, colors, images, and layout.",
    sections: [
      { title: "Beyond the Surface", content: "When we hear the word 'design', most of us think about what we see—fonts, colors, images, and layout. But let's dig a little deeper: What if great design is less about what we see and more about what we feel, think, and do?", icon: "brain" },
      { title: "Design is Neuroscience", content: "Design, at its core, is neuroscience in action. It's about how users interpret what they see and how it triggers reactions in their brain. The human brain processes visuals 60,000 times faster than text. In fact, 90% of the information transmitted to the brain is visual.", icon: "zap" },
      { title: "Color Psychology", content: "Color triggers emotion and memory association. Red means urgency and excitement. Blue creates trust and calmness. Yellow brings happiness and optimism. Black represents luxury and sophistication. Green evokes nature and growth.", icon: "lightbulb" },
      { title: "Cognitive Load", content: "A visually overloaded design sends the brain into panic mode. It triggers confusion and anxiety. A clean, well-structured design increases time spent on page, improves conversion rates, and encourages trust.", icon: "target" },
      { title: "Interactive Design", content: "Every time a user successfully interacts with your design—clicks a satisfying button, completes a task, or sees an engaging animation—dopamine is released. This feel-good chemical encourages repeat interaction. Want more user retention? Make your design rewarding.", icon: "trending" }
    ],
    keyPoints: ["60K Faster Processing", "Emotional Triggers", "Cognitive Ease", "Dopamine Design"],
    conclusion: "Design is no longer just a visual discipline. It's a psychological one. The best designers are not only artists—they are also behavioral scientists, emotion architects, and neural storytellers.",
    relatedSlugs: ["whisper-marketing", "psychology-almost-buying"]
  },
  'psychology-almost-buying': {
    id: 6,
    title: "The Psychology of 'Almost Buying'",
    category: "Marketing",
    author: "DamnArt",
    authorInitials: "DA",
    authorColor: "from-rose-500 to-pink-500",
    date: "5 April 2025",
    readTime: "3 Min",
    image: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774432374/unnamed-2025-04-05T100557.309_z1zdzn.jpg",
    accentColor: "rose",
    excerpt: "You've done everything right. The product is in the cart, the user clicks 'Proceed to Checkout,' and then… crickets.",
    sections: [
      { title: "The Abandonment Mystery", content: "Imagine this—you've done everything right. Your website looks clean, the product is in the cart, the user clicks 'Proceed to Checkout,' and then… crickets. No purchase. No form submission. Just another abandoned cart or incomplete form.", icon: "question" },
      { title: "The Statistics", content: "You're not alone. According to Baymard Institute, the average cart abandonment rate is around 70%. And for forms, it's even worse—more than 80% of users don't complete multi-step forms. This 'almost buying' behavior haunts e-commerce sites and lead-gen forms alike.", icon: "chart" },
      { title: "Psychological Triggers", content: "Fear of making wrong decisions, unexpected costs appearing at checkout, lack of trust signals, and decision fatigue from too many choices all contribute to abandonment. Understanding these triggers is the first step to fixing them.", icon: "brain" },
      { title: "Tactical Solutions", content: "Reveal total costs early—no one likes surprise fees. Use exit-intent popups to catch users before they bounce. Simplify forms with autofill and progress indicators. Add trust badges and reviews. Retarget abandoners with tailored email sequences.", icon: "target" },
      { title: "Test & Learn", content: "A/B test long vs. short forms. Compare 'Buy Now' vs. 'Add to Cart' CTAs. Experiment with trust badge placements. Trial 1-step vs. 3-step checkout flows. The key is continuous optimization based on real user data.", icon: "trending" }
    ],
    keyPoints: ["70% Cart Abandonment", "Transparent Pricing", "Trust Signals", "Smart Retargeting"],
    conclusion: "Whether you're struggling with cart drop-offs or form fatigue, crafting personalized solutions that turn browsers into buyers requires understanding the psychology behind every hesitation.",
    relatedSlugs: ["funnel-stages", "design-brain-triggers"]
  },
};

const getAccentClasses = (color: string) => {
  const colors: { [key: string]: { bg: string; text: string; bgLight: string; border: string } } = {
    blue: { bg: 'from-blue-500 to-blue-600', text: 'text-blue-500', bgLight: 'bg-blue-50', border: 'border-blue-200' },
    green: { bg: 'from-green-500 to-green-600', text: 'text-green-500', bgLight: 'bg-green-50', border: 'border-green-200' },
    purple: { bg: 'from-purple-500 to-purple-600', text: 'text-purple-500', bgLight: 'bg-purple-50', border: 'border-purple-200' },
    orange: { bg: 'from-orange-500 to-orange-600', text: 'text-orange-500', bgLight: 'bg-orange-50', border: 'border-orange-200' },
    cyan: { bg: 'from-cyan-500 to-cyan-600', text: 'text-cyan-500', bgLight: 'bg-cyan-50', border: 'border-cyan-200' },
    rose: { bg: 'from-rose-500 to-rose-600', text: 'text-rose-500', bgLight: 'bg-rose-50', border: 'border-rose-200' },
  };
  return colors[color] || colors.blue;
};

export default function BlogContent() {
  const { slug } = useParams();
  const router = useRouter();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const blog = slug ? blogPosts[slug as string] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        speechSynthesis.cancel();
      }
    };
  }, [slug]);

  const toggleSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const synth = window.speechSynthesis;
    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
    } else {
      if (blog?.sections) {
        const text = blog.sections.map((s: any) => `${s.title}. ${s.content}`).join(' ') + ' ' + blog.conclusion;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        synth.speak(utterance);
        setIsSpeaking(true);
      }
    }
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
          <button onClick={() => router.push('/blogs')} className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors">
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  const accent = getAccentClasses(blog.accentColor);
  const relatedBlogs = blog.relatedSlugs?.map((s: string) => blogPosts[s]).filter(Boolean) || [];

  return (
    <div className="min-h-screen font-sans bg-slate-950 text-slate-100 section-dark">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src={blog.image} type="image/jpg" />
          </video>
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="blue-glow -top-20 -left-20 w-[600px] h-[600px] opacity-30" />
        
        <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-8 z-20">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.push('/blogs')}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 font-medium bg-slate-950/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
          >
            <ArrowLeft size={20} />
            <span>Back to Blogs</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className={`px-4 py-1.5 bg-gradient-to-r ${accent.bg} text-white text-sm font-bold rounded-full uppercase tracking-wide`}>
              {blog.category}
            </span>
            <span className="flex items-center gap-1.5 text-slate-400 text-sm">
              <Clock size={14} />
              {blog.date}
            </span>
            <span className="flex items-center gap-1.5 text-slate-400 text-sm">
              <BookOpen size={14} />
              {blog.readTime} read
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-8"
          >
            {blog.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${blog.authorColor} flex items-center justify-center text-white font-black text-lg shadow-lg`}>
              {blog.authorInitials}
            </div>
            <div>
              <p className="font-bold text-white">{blog.author}</p>
              <p className="text-slate-400 text-sm">{blog.category} Expert</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 -mt-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full aspect-[21/9] object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-8">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={toggleSpeech}
          className={`w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-white shadow-lg transition-all ${
            isSpeaking 
              ? 'bg-green-500 hover:bg-green-600 shadow-green-500/20' 
              : `bg-gradient-to-r ${accent.bg} hover:shadow-xl`
          }`}
        >
          {isSpeaking ? <VolumeX size={24} /> : <Volume2 size={24} />}
          <span>{isSpeaking ? 'Stop Listening' : 'Listen to Article'}</span>
        </motion.button>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className={`rounded-3xl p-8 bg-gradient-to-r ${accent.bg} text-white shadow-xl`}>
          <h3 className="text-lg font-bold mb-4 opacity-90">Key Takeaways</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {blog.keyPoints.map((point: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-2"
              >
                <CheckCircle size={20} className="flex-shrink-0" />
                <span className="font-medium text-sm">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="space-y-8">
          {blog.sections.map((section: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-3xl p-8 bg-white/5 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${accent.bg} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                  <Lightbulb size={24} />
                </div>
                <div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${accent.text}`}>Section {idx + 1}</span>
                  <h2 className="text-2xl md:text-3xl font-black text-white mt-1">{section.title}</h2>
                </div>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {relatedBlogs.length > 0 && (
        <section className="py-20 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-white mb-12 text-center"
            >
              Related <span className={`bg-gradient-to-r ${accent.bg} bg-clip-text text-transparent`}>Articles</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedBlogs.map((relatedBlog: any, idx: number) => (
                <motion.div
                  key={relatedBlog.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => router.push(`/blog/${blog.relatedSlugs[idx]}`)}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className={`inline-block px-3 py-1 bg-gradient-to-r ${getAccentClasses(relatedBlog.accentColor).bg} text-white text-xs font-bold rounded-full mb-2`}>
                        {relatedBlog.category}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-slate-200 transition-colors">
                        {relatedBlog.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${relatedBlog.authorColor} flex items-center justify-center text-white font-bold text-sm`}>
                      {relatedBlog.authorInitials}
                    </div>
                    <div>
                      <p className="font-medium text-white text-sm">{relatedBlog.author}</p>
                      <p className="text-slate-400 text-xs">{relatedBlog.date} · {relatedBlog.readTime}</p>
                    </div>
                    <div className="ml-auto">
                      <ArrowRight size={20} className={`${getAccentClasses(relatedBlog.accentColor).text} group-hover:translate-x-1 transition-transform`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative py-20 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${accent.bg} opacity-10`} />
        <div className="blue-glow bottom-0 right-0 w-[600px] h-[600px] opacity-20" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${accent.bg} text-white text-sm font-bold mb-8`}
          >
            <Lightbulb size={16} />
            <span>Final Thoughts</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
            {blog.conclusion.split('.')[0]}.
          </h2>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            {blog.conclusion.split('.').slice(1).join('.').trim()}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/contact')}
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r ${accent.bg} shadow-lg hover:shadow-xl transition-all`}
            >
              <span>Get in Touch</span>
              <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/blogs')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
            >
              <span>Read More Articles</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`rounded-3xl p-8 bg-white/5 border border-white/10`}>
            <div className="flex items-center gap-6">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${blog.authorColor} flex items-center justify-center text-white font-black text-2xl shadow-lg`}>
                {blog.authorInitials}
              </div>
              <div>
                <p className="text-xl font-bold text-white mb-1">Written by {blog.author}</p>
                <p className={`font-medium ${accent.text} mb-2`}>{blog.category} Expert</p>
                <p className="text-slate-400">
                  Expert in {blog.category.toLowerCase()} with years of experience helping businesses achieve their goals through strategic insights and practical solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
