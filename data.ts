import { 
  Users, Globe, PenTool, Layout, BarChart3, 
  Database, Zap, Mail, Search, Award
} from 'lucide-react'

export const ASSETS = {
  logo: "https://res.cloudinary.com/dadofd9d2/image/upload/w_100,h_100,c_fill,f_auto,q_auto/v1772011438/Damn-Art-Logo-Final-Only-Logo-r6dasn0nfh4nzs4a4fd97txlvs2437uw1zu2i0825k_qe24gm.png",
  heroVideo: "https://res.cloudinary.com/dadofd9d2/video/upload/v1775707798/dark-cinematic-office-person-sitting-in-front-of-l_nmckai.mp4",
  servicesVideo: "https://res.cloudinary.com/dadofd9d2/video/upload/v1772086250/grok-video-a1b193e4-f078-451d-ab44-90803bd60335_m8lt1p.mp4",
  aboutVideo: "https://res.cloudinary.com/dadofd9d2/video/upload/v1772090766/grok-video-5e165ea8-7dba-46ea-8229-820090e8900b_ofdtqw.mp4",
  contactVideo: "https://res.cloudinary.com/dadofd9d2/video/upload/v1772427822/grok-video-7812e8ee-9c9a-4ab2-a72d-85732680452b_hm45hn.mp4",
  ppcVideo: "https://res.cloudinary.com/dadofd9d2/video/upload/v1772427822/grok-video-59e7290a-41bc-413b-b074-5467ff75d15a_jt75ml.mp4",
  smmVideo: "https://res.cloudinary.com/dadofd9d2/video/upload/v1772427822/grok-video-50f1898c-a59c-45a0-bf67-47fae3472933_yhxppr.mp4",
  webDevVideo: "https://res.cloudinary.com/dadofd9d2/video/upload/v1772427822/grok-video-d319be8b-cfd8-4387-9380-8db92fb62533_u5ri8n.mp4",
  contentWritingVideo: "https://res.cloudinary.com/dadofd9d2/video/upload/v1772427822/grok-video-291887a7-604f-4b67-a8bc-b7452a1fbfc0_whbriv.mp4",
  graphicDesignVideo: "https://res.cloudinary.com/dadofd9d2/video/upload/v1772427822/grok-video-a65798d4-0399-405b-bace-d6784ca7ca4f_vckoxr.mp4",
  seoVideo: "https://res.cloudinary.com/dadofd9d2/video/upload/v1772427822/grok-video-b8abe594-3e95-457c-b1ff-7131bdd67972_eo4w7c.mp4",
  auditVideo: "https://res.cloudinary.com/dadofd9d2/video/upload/v1772427822/grok-video-b8abe594-3e95-457c-b1ff-7131bdd67972_eo4w7c.mp4",
  auditPlatforms: {
    googleAds: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774335528/google-ads_smwahu.jpg",
    socialMedia: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774335558/soical-png-768x512_pwf2wp.png",
    website: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774335591/web-site-auit-768x512_hqa1jq.png",
    content: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774335631/write-400x400_zgygcd.png"
  },
  dataMiningVideo: "https://res.cloudinary.com/dadofd9d2/video/upload/v1772427822/grok-video-dfc9a603-e557-4564-9c46-ed76afaecec0_dpcyvk.mp4",
  dataMiningPlatforms: {
    business: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774336271/Asset-3-8-400x400_rwtlds.png",
    financial: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774336306/Asset-4-8-400x400_izwlp6.png",
    healthcare: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774336369/Asset-5-8-400x400_ggzzg7.png",
    retail: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774336403/Asset-6-8-400x400_qsxqav.png",
    linkedinEmail: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774336466/Asset-2-8-400x400_os4gzn.png"
  },
  leadGenVideo: "https://res.cloudinary.com/dadofd9d2/video/upload/v1772427822/grok-video-a942238c-1719-4dec-a234-0c14ea978999_fqew7d.mp4",
  leadGenPlatforms: {
    googlePpc: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774336924/Asset-3-8-2_mk3snj.png",
    socialMedia: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774336944/Asset-4-8-1-400x368_miuuua.png",
    linkedinEmail: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774336967/Asset-5-8-1_mb4wzm.png",
    seoContent: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774336996/Asset-6-8-1_pami89.png",
    coldCalling: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774337049/Asset-7-8_adtusx.png"
  },
  payPerValidVideo: "https://res.cloudinary.com/dadofd9d2/video/upload/v1772427822/grok-video-a942238c-1719-4dec-a234-0c14ea978999_fqew7d.mp4",
  payPerValidPlatforms: {
    googlePpc: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774337425/Asset-1-8-400x400_pbdoix.png",
    socialMedia: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774337466/Asset-1-8-1_royzwv.png",
    linkedinEmail: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774337495/Asset-1-8-2-2048x1890_ahqelp.png",
    seoContent: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774337553/Asset-6-8-400x400_qm3sb1.png",
    coldCalling: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774337590/Asset-2-8-1_vqqtrd.png"
  },
  influencerVideo: "https://res.cloudinary.com/dadofd9d2/video/upload/v1772427822/grok-video-d319be8b-cfd8-4387-9380-8db92fb62533_u5ri8n.mp4",
  influencerPlatforms: {
    identification: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774340807/Asset-1-8-5-400x400_wdtikw.png",
    outreach: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774340846/illustration83-2048x2048_bby80e.jpg",
    strategy: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774340883/Asset-2-8-2-2048x1789_rugxto.png",
    execution: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774340918/Asset-6-8-400x400_w4fmfv.png",
    analytics: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774330230/9443_pvdczu.png"
  },
  clutchBadge: "https://shareables-prod-static.clutch.co/badges/top_clutch.co_wordpress_seo_company_canada_2026.svg",
  platforms: [
    { name: "Google Ads", url: "https://res.cloudinary.com/dadofd9d2/image/upload/v1771835684/11_pxyd0i.png" },
    { name: "SEMrush", url: "https://res.cloudinary.com/dadofd9d2/image/upload/v1771835715/22_ta4up3.png" },
    { name: "UberSuggest", url: "https://res.cloudinary.com/dadofd9d2/image/upload/v1771835799/33_ubhwg6.png" },
    { name: "Facebook Ads", url: "https://res.cloudinary.com/dadofd9d2/image/upload/v1771835841/44_benav5.png" },
    { name: "Google Analytics", url: "https://res.cloudinary.com/dadofd9d2/image/upload/v1771836013/55_m8e4gd.png" },
    { name: "Google Tag Manager", url: "https://res.cloudinary.com/dadofd9d2/image/upload/v1771836051/66_pxacyf.png" },
    { name: "Clarity", url: "https://res.cloudinary.com/dadofd9d2/image/upload/v1771836089/77_zvkijm.png" },
    { name: "Pabbly Connect", url: "https://res.cloudinary.com/dadofd9d2/image/upload/v1771836169/88_awco23.png" },
  ],
  clients: [
    { name: "Granata", url: "https://res.cloudinary.com/dadofd9d2/image/upload/w_100,h_100,c_fill,f_auto,q_auto/v1772011847/download-r8u9244d5sey0vsilnhsk9yc99lsbfacjuwj2kdi8k_ge3qxe.png" },
    { name: "Himalayan", url: "https://res.cloudinary.com/dadofd9d2/image/upload/w_100,h_100,c_fill,f_auto,q_auto/v1772011860/Himalayan-Infinite-Possibility-Final-Logo-r6dasn0nsmrlh6keg3mlunl46zbloqtltj7mcfd85w_sljqey.png" },
    { name: "ITC", url: "https://res.cloudinary.com/dadofd9d2/image/upload/w_100,h_100,c_fill,f_auto,q_auto/v1772011873/itc-logo-r6dasn0nsmrlh6keg3mlunl46zbloqtltj7mcfd85w_e7eq5a.png" },
    { name: "RR", url: "https://res.cloudinary.com/dadofd9d2/image/upload/w_100,h_100,c_fill,f_auto,q_auto/v1772011895/RR-logo-r6dasn0nsmrlh6keg3mlunl46zbloqtltj7mcfd85w_gvpizu.png" },
    { name: "SF Training", url: "https://res.cloudinary.com/dadofd9d2/image/upload/w_100,h_100,c_fill,f_auto,q_auto/v1772011936/SF-Training-Final-Logo-1080-r6dasn0nsmrlh6keg3mlunl46zbloqtltj7mcfd85w_u19o47.png" },
    { name: "Med", url: "https://res.cloudinary.com/dadofd9d2/image/upload/w_100,h_100,c_fill,f_auto,q_auto/v1772011955/med.logol_-r6dasn0nsmrlh6keg3mlunl46zbloqtltj7mcfd85w_kgw1m1.png" },
    { name: "Euro", url: "https://res.cloudinary.com/dadofd9d2/image/upload/w_100,h_100,c_fill,f_auto,q_auto/v1772011979/euro.1-r6dasn0nsmrlh6keg3mlunl46zbloqtltj7mcfd85w_qqciz2.png" },
    { name: "EuroTech Canada", url: "https://res.cloudinary.com/dadofd9d2/image/upload/w_100,h_100,c_fill,f_auto,q_auto/v1772012214/eurotech-canda.1-r6daspu6d4vgg0gazmuhk4vhz4xpbu4stx62s991n8_ugsvud.png" },
  ],
  brochureCover: "https://res.cloudinary.com/dadofd9d2/image/upload/w_1200,h_800,c_fill,f_auto,q_auto/v1774244095/generate-an-image-for-a-digital-marketing-agency_tstznd.jpg",
  ppcPlatforms: {
    google: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774324686/77_fqrvin.jpg",
    meta: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774324732/2-1_zqn9ol.jpg",
    linkedin: "https://www.damnart.com/wp-content/uploads/2024/07/link.jpg",
    taboola: "https://www.damnart.com/wp-content/uploads/2024/07/5.jpg",
    bing: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774324811/4_az4nor.jpg"
  },
  smmPlatforms: {
    facebook: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774325598/2_fv0dte.png",
    instagram: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774325651/3-400x400_xabpxz.png",
    linkedin: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774325732/4_mrmmw2.png"
  },
  webDevPlatforms: {
    custom: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774330055/web-2-400x400_byfxjv.png",
    ecommerce: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774330117/333-400x400_alnywv.png",
    cms: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774330151/444_afas7z.png",
    webapp: "https://www.damnart.com/wp-content/uploads/2024/08/55-400x400.png",
    maintenance: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774330230/9443_pvdczu.png",
    seo: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774330299/999-400x400_rdjrag.png"
  },
  contentWritingPlatforms: {
    blog: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774331016/Blog-Post-400x400_vnp8pn.png",
    website: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774331049/33-400x400_snubbn.png",
    social: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774331089/11-400x400_mlyq2x.png",
    seo: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774331143/555-400x400_imfkpp.png",
    product: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774331179/66-400x400_dqytag.png",
    newsletter: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774331216/77-400x400_bretev.png"
  },
  graphicDesignPlatforms: {
    logo: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774332340/2222-400x400_djjvmn.png",
    marketing: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774332363/33-1-400x400_pmjhbr.png",
    digital: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774332463/444-2_i6te2d.png",
    infographic: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774332497/55-1-400x400_ukj0yc.png",
    presentation: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774332531/lllllllll-400x400_a6m6rw.png"
  },
  seoPlatforms: {
    keyword: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774332978/222-400x400_svabzj.png",
    onpage: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774333052/33-2-400x400_zltopn.png",
    technical: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774333097/222-768x512_fmbvzm.png",
    offpage: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774333274/5149654-400x400_agxjr6.jpg",
    local: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774333235/222-768x512_oucssh.png",
    analytics: "https://res.cloudinary.com/dadofd9d2/image/upload/v1774333274/5149654-400x400_agxjr6.jpg"
  },
  social: {
    facebook: "https://www.facebook.com/people/DamnArt-Digital-Marketing-Services/61562382662176/",
    instagram: "https://www.instagram.com/damnartservices/",
    youtube: "https://www.youtube.com/@DamnArt-g7k",
    linkedin: "https://www.linkedin.com/company/damnart/?viewAsMember=true",
    pinterest: "https://in.pinterest.com/pankajy0401/"
  }
}

export const services = [
  { title: "PPC", description: "Drive targeted traffic to your website and increase conversions with PPC ads.", icon: Zap },
  { title: "SMM", description: "Grow your brand awareness and engagement on social media platforms.", icon: Users },
  { title: "Web Development", description: "Craft a user-friendly, high-performing website to achieve your business goals.", icon: Layout },
  { title: "Content Writing", description: "Create compelling content that engages your audience and boosts conversions.", icon: PenTool },
  { title: "Graphic Designing", description: "Design eye-catching visuals that effectively communicate your brand message.", icon: PenTool },
  { title: "SEO", description: "Improve your search ranking and attract qualified leads organically.", icon: Search },
  { title: "Training Courses", description: "We offers a wide range of training courses in Digital Marketing and AI Tools", icon: Award },
  { title: "Digital Marketing Audit", description: "Maximize ROI with a Data-Driven Digital Marketing Performance Audit", icon: BarChart3 },
  { title: "Data Mining", description: "Extract Actionable Insights with Advanced Data Mining Solutions!", icon: Database },
  { title: "Lead Generation", description: "Generate High-Quality Leads & Boost Conversions Effortlessly", icon: Zap },
  { title: "Newsletter Automation", description: "Newsletter Automation with AI to scale your reach.", icon: Mail },
  { title: "Influencer Marketing", description: "Extract Actionable Insights with Advanced Data Mining Solutions", icon: Globe },
]

export const testimonials = [
  {
    company: "ITC INDIA",
    location: "India",
    industry: "Product Testing Laboratory",
    quote: "The team was very helpful and provided a very good service.",
    summary: "DamnArt has successfully generated over 70 high-quality leads for the client, optimized their LinkedIn profile, and increased their revenue."
  },
  {
    company: "Sustainable Futures Trainings",
    location: "Canada",
    industry: "ISO and QMS Training Providers",
    quote: "Weekly reports were provided, and everything was done through collaboration.",
    summary: "Thanks to DamnArt's efforts, more than 100 leads were generated from the campaigns they developed."
  },
  {
    company: "EuroTech",
    location: "India",
    industry: "Assessment and Certification Service Providers",
    quote: "The team collaborated with us at every step.",
    summary: "With DamnArt's help, 50 quality leads were generated at a high-cost value, which helped grow the business."
  }
]

export const blogs = [
  { title: "The Most Dangerous Marketing Hack That Actually Works", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" },
  { title: "What If You Had Only 10 Words to Sell Your Product?", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=600&auto=format&fit=crop" },
  { title: "The Role of Blockchain in Digital Marketing", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop" }
]

export const faqs = [
  { q: "Why is digital marketing important for my business?", a: "Digital marketing helps you reach a larger audience, engage with customers, improve brand visibility, and drive sales. It is cost-effective and allows for precise targeting and measurement of results." },
  { q: "How does SEO help my business?", a: "SEO improves your search ranking and attracts qualified leads organically, increasing your long-term visibility without recurring ad costs." },
  { q: "What is PPC and how does it work?", a: "PPC (Pay-Per-Click) is an advertising model where you pay each time a user clicks on your ad. It's a way of buying visits to your site rather than attempting to 'earn' those visits organically." },
  { q: "How can social media marketing benefit my brand?", a: "Social media marketing enhances brand awareness, engages with your audience, drives website traffic, and can lead to increased sales. It also provides valuable insights into customer behavior." }
]
