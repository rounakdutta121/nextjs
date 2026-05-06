'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen, FileText, Search, ChevronDown, X } from 'lucide-react';
import { FadeIn } from '@/components/Animations';
import { ASSETS } from '@/data';

const blogPosts = [
  {
    id: 28,
    slug: "funnel-stages",
    title: "If Your Funnel Still Has Stages, You're Already Behind",
    category: "Marketing",
    author: "DigiMarketingArt",
    date: "11 April 2025",
    readTime: "3 Min",
    image: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774414178/Idhar-Udhar-ke-use-2025-04-11T101138.735-768x432_f7c6im.jpg",
    excerpt: "The Traditional Funnel Is Dead. Here's What Replaced It."
  },
  {
    id: 29,
    slug: "whisper-marketing",
    title: "How Brands Are Secretly 'Whispering' to You on Social Media",
    category: "Marketing",
    author: "DigiMarketingArt",
    date: "9 April 2025",
    readTime: "3 Min",
    image: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774415128/unnamed-2025-04-09T143637.417-768x768_slsvrm.jpg",
    excerpt: "Ever scrolled through your Instagram feed and felt like a post was speaking directly to you?"
  },
  {
    id: 30,
    slug: "design-brain-triggers",
    title: "Design Isn't What It Looks Like. It's What It Triggers in the Brain",
    category: "Design",
    author: "DigiMarketingArt",
    date: "8 April 2025",
    readTime: "3 Min",
    image: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774415549/Idhar-Udhar-ke-use-2025-04-08T101140.386_ud2lwi.jpg",
    excerpt: "When we hear the word 'design', most of us think about what we see—fonts, colors, images, and layout."
  },
  {
    id: 31,
    slug: "psychology-almost-buying",
    title: "The Psychology of 'Almost Buying': Why Do People Abandon Carts and Forms?",
    category: "Marketing",
    author: "DigiMarketingArt",
    date: "5 April 2025",
    readTime: "3 Min",
    image: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774432374/unnamed-2025-04-05T100557.309_z1zdzn.jpg",
    excerpt: "You've done everything right. The product is in the cart, the user clicks 'Proceed to Checkout,' and then… crickets."
  },
];

export default function Blogs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date-desc');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const router = useRouter();

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const parseDate = (dateStr: string) => {
    const months: { [key: string]: number } = {
      'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
      'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
    };
    const parts = dateStr.match(/(\d+)\s+(\w+),?\s*(\d+)/);
    if (parts) {
      const day = parseInt(parts[1]);
      const month = months[parts[2]] || 0;
      const year = parseInt(parts[3]);
      return new Date(year, month, day);
    }
    return new Date(0);
  };

  const parseReadTime = (readTimeStr: string) => {
    const match = readTimeStr.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    switch (sortBy) {
      case 'date-desc':
        filtered.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
        break;
      case 'date-asc':
        filtered.sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime());
        break;
      case 'readtime-asc':
        filtered.sort((a, b) => parseReadTime(a.readTime) - parseReadTime(b.readTime));
        break;
      case 'readtime-desc':
        filtered.sort((a, b) => parseReadTime(b.readTime) - parseReadTime(a.readTime));
        break;
    }

    return filtered;
  }, [searchQuery, sortBy, selectedCategory]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-20 md:py-0 section-dark">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src={ASSETS.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-950/60" />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="blue-glow -top-20 -left-20 w-[600px] h-[600px] opacity-20" />
        <div className="blue-glow -bottom-20 -right-20 w-[600px] h-[600px] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0">
          <div className="max-w-5xl">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold mb-8 backdrop-blur-md">
                <BookOpen size={16} />
                <span>DIGIMARKETINGART BLOGS | INSIGHTS & UPDATES</span>
              </div>
            </FadeIn>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10">

              <FadeIn delay={0.4} distance={40}>
                LATEST<br />
              </FadeIn>

              <FadeIn delay={0.6} distance={40}>
                <span className="text-gradient-blue">INSIGHTS</span>
              </FadeIn>
            </h1>

            <FadeIn delay={0.8}>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-3xl font-medium">
                Stay ahead with our curated collection of industry insights, expert opinions, and the latest trends in digital marketing, technology, and business strategy.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Blog Section */}
      <section className="py-20 section-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-12 uppercase italic">
              Featured <span className="text-gradient-blue">Articles</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((post, idx) => (
              <FadeIn key={post.id} delay={idx * 0.1}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  onClick={() => post.slug && router.push(`/blog/${post.slug}`)}
                  className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-500 cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      width="768"
                      height="432"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-blue-600/90 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                      <span className="flex items-center gap-2">
                        <Clock size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <BookOpen size={14} />
                        {post.readTime} Read
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">By {post.author}</span>
                      <div className="flex items-center gap-2 text-blue-500 font-bold group-hover:gap-4 transition-all">
                        Read More <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* All Blogs Section */}
      <section className="py-32 section-dark relative overflow-hidden">
        <div className="blue-glow bottom-0 right-0 w-[600px] h-[600px] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 uppercase italic">
              All <span className="text-gradient-blue">Articles</span>
            </h2>
          </FadeIn>

          {/* Search and Filter Bar */}
          <FadeIn delay={0.1}>
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search blogs by title, category, or author..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-12 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-all"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none px-6 py-4 pr-12 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-blue-500 transition-all cursor-pointer min-w-[200px]"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat} className="bg-slate-900 text-white">{cat}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                </div>

                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none px-6 py-4 pr-12 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-blue-500 transition-all cursor-pointer min-w-[200px]"
                  >
                    <option value="date-desc" className="bg-slate-900 text-white">Newest First</option>
                    <option value="date-asc" className="bg-slate-900 text-white">Oldest First</option>
                    <option value="readtime-asc" className="bg-slate-900 text-white">Shortest Read</option>
                    <option value="readtime-desc" className="bg-slate-900 text-white">Longest Read</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                </div>
              </div>

              {/* Results Count */}
              <div className="flex items-center justify-between">
                <p className="text-slate-400">
                  Showing <span className="text-white font-bold">{filteredAndSortedPosts.length}</span> of {blogPosts.length} articles
                  {searchQuery && <span> for "<span className="text-blue-400">{searchQuery}</span>"</span>}
                  {selectedCategory !== 'All' && <span> in <span className="text-blue-400">{selectedCategory}</span></span>}
                </p>
                {(searchQuery || selectedCategory !== 'All') && (
                  <button
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            </div>
          </FadeIn>

          {/* Blog Grid */}
          {filteredAndSortedPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedPosts.map((post, idx) => (
                <FadeIn key={post.id} delay={idx * 0.03}>
                  <motion.div 
                    whileHover={{ y: -10 }}
                    onClick={() => post.slug && router.push(`/blog/${post.slug}`)}
                    className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-500 cursor-pointer h-full flex flex-col"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        width="768"
                        height="432"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-600/90 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <BookOpen size={12} />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="text-xs text-slate-500">By {post.author}</span>
                        <div className="flex items-center gap-1 text-blue-500 text-sm font-bold group-hover:gap-2 transition-all">
                          Read <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={40} className="text-slate-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
              <p className="text-slate-400 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-32 section-dark relative overflow-hidden">
        <div className="blue-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-blue-600 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-20 text-center">
            <FadeIn>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <FileText size={40} className="text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Subscribe to Our <br /> <span className="text-blue-200">Newsletter</span>
              </h2>
              <p className="text-xl text-blue-50 mb-12 max-w-2xl mx-auto font-medium">
                Get the latest insights, trends, and expert opinions delivered directly to your inbox. Join our community of forward-thinkers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-white/20 border border-white/30 rounded-full text-white placeholder:text-white/60 focus:outline-none focus:bg-white/30 transition-all"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 rounded-full font-black uppercase tracking-widest shadow-xl hover:bg-blue-50 transition-all whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};
