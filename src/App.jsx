import React, { useState } from 'react';
import { ExternalLink, Download, TrendingUp, BookOpen, User, Code2, Cloud, Zap, Briefcase, Lightbulb, MessageCircle, X, Send } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation presets for professional portfolio
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Self-improvement quotes that rotate
  const quotes = [
    // Ayn Rand - Self-Reliance & Personal Power
    { text: "The question isn't who is going to let me; it's who is going to stop me", author: "Ayn Rand" },
    { text: "Your value is determined by your ability to produce value for others", author: "Ayn Rand" },
    { text: "The achievement of your happiness is the only moral purpose of your life", author: "Ayn Rand" },
    
    // Friedrich Nietzsche - Self-Mastery & Growth
    { text: "What doesn't kill me makes me stronger", author: "Friedrich Nietzsche" },
    { text: "Become who you are", author: "Friedrich Nietzsche" },
    { text: "He who has a why to live can bear almost any how", author: "Friedrich Nietzsche" },
    
    // Robert Kiyosaki - Rich Dad Poor Dad
    { text: "Invest in yourself first. You are your best asset", author: "Robert Kiyosaki" },
    
    // Self-Improvement & Mastery
    { text: "Master yourself first, then master your craft", author: "Unknown" },
    
    // Personal Philosophy - Individual Power & Non-Conformity
    { text: "The masses follow the map; the exceptional ones draw their own", author: "Unknown" },
    { text: "Your comfort is the enemy of your evolution—choose discomfort and become unstoppable", author: "Unknown" },
    { text: "Don't seek permission from the world to build yourself; the world only respects what's already built", author: "Unknown" },
    { text: "Mediocrity is a choice disguised as circumstance—master yourself before blaming anything else", author: "Unknown" },
    { text: "The crowd will never understand your vision because they're still looking at yesterday. Move forward anyway", author: "Unknown" }
  ];

  // Auto-rotate quotes every 6 seconds
  React.useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isPaused, quotes.length]);
  const projects = [
    {
      id: 1,
      title: 'SEC Filing RAG System',
      description: 'Hackathon project (Dexian Codeaithon 2024) - Advanced RAG-based system for parsing and querying SEC filings using LLMs. Implemented document chunking, semantic search, and intelligent response generation.',
      status: 'AWARDED',
      github_url: 'https://github.com/VivekNandimandalam/SEC-Filing-RAG',
      award_url: 'https://drive.google.com/file/d/1JBpA6g-_6PoJ5yz6qBXpOv9hgKHrr6yI/view?usp=sharing',
      tech: ['Python', 'RAG', 'LLM', 'NLP']
    },
    {
      id: 2,
      title: 'Gmail Automation Workflow',
      description: 'n8n-based automation solution for intelligent Gmail management. Implements automated email cleanup, filtering, and organization using n8n workflow orchestration.',
      status: 'ACTIVE',
      github_url: 'https://github.com/VivekNandimandalam/n8n-gmail-cleanup-workflow',
      tech: ['n8n', 'Gmail API', 'Automation']
    },
    {
      id: 3,
      title: 'LinkedIn-Telegram Content Bot',
      description: 'Intelligent content distribution system that aggregates LinkedIn posts and broadcasts to Telegram. Features real-time monitoring, content filtering, and cross-platform integration.',
      status: 'ACTIVE',
      github_url: 'https://github.com/VivekNandimandalam/n8n-linkedin-content-telegram-bot',
      tech: ['n8n', 'LinkedIn API', 'Telegram Bot', 'Automation']
    }
  ];

  const workExperience = [
    {
      id: 1,
      title: 'UC4 to REDWOOD Job Migration Pipeline',
      company: 'Dexian Technologies',
      companyUrl: 'https://india.dexian.com/',
      period: 'Mar 2024 - Dec 2025',
      location: 'Chennai, India',
      description: 'Led enterprise-scale migration converting 13,000+ job schedules from Broadcom UC4 Automic to REDWOOD Run MY Jobs platform.',
      bullets: [
        'Engineered Python-based ETL pipeline converting 13,000+ job schedules from JSON→XML format',
        'Implemented regex pattern parsing for extracting job schedule metadata and configurations',
        'Designed SQL Server database schema with 60+ tables for data integration and validation',
        'Optimized processing performance from 3 hours to under 3 minutes using parallel processing and concurrency',
        'Implemented data validation checks ensuring accuracy across all migrated job schedules'
      ],
      tech: ['Python', 'ETL', 'Parallel Processing', 'SQL Server', 'Regex', 'Data Optimization']
    },
    {
      id: 2,
      title: 'Enterprise QA & Testing',
      company: 'Dexian Technologies',
      companyUrl: 'https://india.dexian.com/',
      period: 'Mar 2024 - Dec 2025',
      location: 'Chennai, India',
      description: 'Comprehensive manual quality assurance and automated testing for large-scale job migration project.',
      bullets: [
        'Conducted system validation and regression testing across the UC4 to REDWOOD migration',
        'Performed meticulous manual testing of 13,000+ migrated job schedules for data integrity',
        'Used QTest platform for issue tracking, flagging, and resolution management',
        'Verified critical business logic and scheduling parameters across all migrated jobs',
        'Ensured 100% data accuracy validation with detailed audit trail documentation'
      ],
      tech: ['QTest', 'Manual Testing', 'QA', 'Data Validation', 'Regression Testing']
    },
    {
      id: 3,
      title: 'Cloud Automation & DevOps',
      company: 'Dexian Technologies',
      companyUrl: 'https://india.dexian.com/',
      period: 'Mar 2024 - Dec 2025',
      location: 'Chennai, India',
      description: 'Developed scalable automation frameworks for enterprise cloud infrastructure management.',
      bullets: [
        'Built Python-based automation frameworks for enterprise workflow orchestration',
        'Integrated Azure DevOps pipelines for continuous deployment and infrastructure management',
        'Implemented cloud infrastructure optimization and automation best practices',
        'Developed CI/CD solutions for automated testing and deployment workflows',
        'Contributed to overall project efficiency improvements and cost optimization initiatives'
      ],
      tech: ['Python', 'Azure', 'DevOps', 'Cloud', 'Automation', 'Infrastructure']
    }
  ];

  // sendMessage handler centralizes sending logic and prevents duplicate sends
  const sendMessage = async () => {
    if (isSending) return;
    if (!visitorName.trim() || !message.trim()) {
      alert('Please enter your name and message.');
      return;
    }

    setIsSending(true);
    try {
      const res = await fetch('/api/send-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          visitorName: visitorName.trim(),
          visitorEmail: visitorEmail.trim(),
        }),
      });

      const data = await res.json().catch(() => ({}));
      console.log('Server response:', { status: res.status, data });

      if (res.ok && data.ok) {
        alert(`✅ Message sent successfully via ${data.method === 'whatsapp' ? 'WhatsApp' : 'Email'}!\n\nI'll get back to you soon.`);
        setVisitorName('');
        setVisitorEmail('');
        setMessage('');
        setChatOpen(false);
      } else {
        console.error('Message failed:', data);
        const errorMsg = data.details || data.error || 'Unknown error occurred';
        alert(`❌ Failed to send message\n\n${errorMsg}\n\n📧 Alternatively, email me at: viveknandimandalam334@gmail.com`);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      alert(`❌ Error sending message:\n${err.message}\n\n📧 As an alternative, please email me directly at:\nviveknandimandalam334@gmail.com`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-300 p-4 md:p-8 font-sans selection:bg-emerald-500/30">
      {/* Navigation Ticker */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center mb-12 border-b border-white/5 pb-6">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse group-hover:scale-150 transition-transform"></div>
          <span className="font-mono text-sm tracking-tighter text-white font-bold group-hover:text-emerald-400 transition-colors">Vivek Nandimandalam</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-widest font-bold">
          <a href="https://drive.google.com/file/d/1Dd_30IwfQQ2vmUjmb-XKcqu5n77IxgZF/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors duration-300">Resume</a>
          <a href="https://linkedin.com/in/vivek-nandimandalam1205/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors duration-300">LinkedIn</a>
          <a href="https://github.com/VivekNandimandalam" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors duration-300">GitHub</a>
          <a href="https://x.com/Viveknandimanda" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors duration-300">X.com</a>
          <a href="https://www.reddit.com/user/ivvek1205/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors duration-300">Reddit</a>
          <a href="https://www.instagram.com/ivvek._/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors duration-300">Instagram</a>
          <a href="mailto:viveknandimandalam334@gmail.com" className="bg-white/5 px-3 py-1 rounded-full hover:bg-emerald-500 hover:text-black transition-all duration-300">Email</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto space-y-8">

        {/* Profile / Summary Card - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500 shadow-2xl"
        >
          <span className="text-emerald-400 font-mono text-xs mb-4 uppercase tracking-widest flex items-center gap-2">
            <span className="w-1 h-1 bg-emerald-400 rounded-full"></span> Executive Summary
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tighter">
            Associate AI & Automation Engineer | M.Sc. Cloud Computing @ NCI
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-4xl">
            I build intelligent systems that solve real-world problems. Entrepreneur at heart, engineer by trade. Always researching new technologies and architecting scalable solutions that drive impact.
          </p>
        </motion.div>

        {/* Core Competencies - Horizontal Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 mb-6 text-slate-500">
            <Code2 size={16} />
            <span className="text-xs font-mono uppercase font-bold tracking-widest">Core Competencies</span>
          </div>
          <motion.div
            className="grid grid-cols-3 md:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { skill: 'Python', icon: '🐍' },
              { skill: 'Azure Cloud', icon: '☁️' },
              { skill: 'AI/ML', icon: '🤖' },
              { skill: 'Automation', icon: '⚙️' },
              { skill: 'AWS', icon: '🔶' },
              { skill: 'Monitoring & Observability', icon: '📊' }
            ].map((tech, idx) => (
              <motion.div
                key={tech.skill}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white/[0.03] border border-emerald-500/20 rounded-lg p-4 group hover:border-emerald-500/50 hover:bg-emerald-500/[0.05] transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  className="text-2xl mb-2"
                  whileHover={{ rotate: 12, scale: 1.3 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {tech.icon}
                </motion.div>
                <div className="text-xs font-bold text-white/90">{tech.skill}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Work Experience - Unified Dexian Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <Briefcase size={18} className="text-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">Professional Experience</span>
          </motion.div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
              <div>
                <motion.a
                  href="https://india.dexian.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, color: '#10b981' }}
                  className="text-3xl font-black text-white transition-colors duration-300 inline-flex items-center gap-2"
                >
                  Dexian Technologies
                  <ExternalLink size={20} />
                </motion.a>
                <div className="text-emerald-400 text-base font-semibold mt-3">📍 Chennai, India</div>
                <div className="text-slate-300 text-sm mt-2">
                  <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mr-2 align-middle animate-pulse"></span>
                  <span className="font-mono">MARCH 2024 — DECEMBER 2025</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mt-4 max-w-3xl">Contract role as AI & Automation Engineer, contributing to enterprise-scale digital transformation projects for a Fortune 500 client. Responsibilities included data migration, automation engineering, quality assurance, and cloud DevOps initiatives.</p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex-shrink-0"
              >
                <div className="bg-emerald-500/6 border border-emerald-500/20 rounded-lg p-4 text-emerald-300 text-sm hover:border-emerald-500/40 transition-colors duration-300">
                  <div className="font-bold text-emerald-400">Contract (Dexian)</div>
                  <div className="mt-2 text-xs">ExxonMobil — Migration & Automation</div>
                </div>
              </motion.div>
            </div>

            <div className="my-6 border-t border-white/5"></div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {workExperience.map((job) => (
                <motion.div
                  key={job.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, borderColor: 'rgba(16, 185, 129, 0.5)' }}
                  className="bg-black/10 border border-white/5 rounded-lg p-6 transition-all duration-300 hover:bg-black/20"
                >
                  <h3 className="text-white font-bold text-sm mb-2">{job.title}</h3>
                  <p className="text-slate-400 text-xs mb-4">{job.description}</p>

                  <ul className="mb-4 space-y-2">
                    {job.bullets.map((bullet, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="text-[13px] text-slate-300 flex gap-3"
                      >
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span className="leading-snug">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="text-[8px] font-mono uppercase px-2 py-1 bg-emerald-500/5 border border-emerald-500/20 rounded text-emerald-300 hover:border-emerald-500/40 transition-colors duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Personal Projects Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6"
        >
          <Code2 size={16} className="text-emerald-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">Personal Projects</span>
        </motion.div>

        {/* Dynamic Project Grid - Glow Effects */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 group shadow-lg hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]"
            >
              <div className="flex justify-between items-start mb-4">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="text-[9px] font-mono text-emerald-400 px-2 py-1 bg-emerald-500/10 rounded-md border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300"
                >
                  {project.status || 'ACTIVE'}
                </motion.span>
                <div className="flex gap-2">
                  {project.award_url && (
                    <motion.a
                      href={project.award_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.3, rotate: 8 }}
                      whileTap={{ scale: 0.9 }}
                      className="cursor-pointer"
                      title="View Award Certificate"
                    >
                      <span className="text-lg">🏆</span>
                    </motion.a>
                  )}
                  <motion.a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, rotate: -8 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={14} className="text-slate-600 group-hover:text-emerald-400 transition-colors duration-300" />
                  </motion.a>
                </div>
              </div>
              <h3 className="text-white font-bold text-sm mb-2 group-hover:text-emerald-400 transition-colors duration-300">{project.title}</h3>
              <p className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors duration-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1 }}
                    className="text-[8px] font-mono uppercase px-2 py-1 bg-emerald-500/5 border border-emerald-500/30 rounded text-emerald-400/80 group-hover:border-emerald-500/60 group-hover:text-emerald-300 transition-colors duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <BookOpen size={16} className="text-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">Certifications</span>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { logo: '/microsoft_logo.jpg', title: 'Microsoft Certified: Azure Fundamentals', link: 'https://learn.microsoft.com/en-us/users/viveknandimandalam-1700/credentials/d01cd2bd4a48807f?ref=https%3A%2F%2Fwww.linkedin.com%2F' },
              { logo: '/datadog_logo.jpg', title: 'DataDog Fundamentals', date: 'Issued: April 04, 2025 — Expires: April 04, 2028', link: 'https://www.credly.com/badges/4b30b7db-5d07-45e7-8aaa-d6a5c2b399fa/linked_in_profile' },
              { logo: '/redwood_software_logo.jpg', title: 'RUNMYJOBS AUTOMATION DEVELOPER SPECIALIST', link: 'https://drive.google.com/file/d/1ZxvusSMN-0cMJM4cA4GTRMP5KEZBX4AR/view?usp=sharing' }
            ].map((cert, idx) => (
              <motion.div
                key={cert.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 hover:bg-white/[0.08] transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <motion.img
                    src={cert.logo}
                    alt={cert.title}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="w-10 h-10 object-contain group-hover:filter group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.3)] transition-all duration-300"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">{cert.title}</div>
                    {cert.date && <div className="text-xs text-slate-400 mt-1">{cert.date}</div>}
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="text-emerald-400 text-xs inline-block mt-2 hover:text-emerald-300"
                    >
                      View {cert.logo.includes('datadog') ? 'Badge' : 'Credential'} →
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Life Inspired By, Books, and Hobbies - 3 Column Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={itemVariants}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-6 text-slate-500">
              <User size={16} />
              <span className="text-xs font-mono uppercase font-bold tracking-widest">Life Inspired By</span>
            </div>
            <div className="space-y-5">
            {[
              { name: 'Nikhil Kamath', trait: 'Financial Strategy', img: 'https://images.forbesindia.com/blog/wp-content/uploads/media/images/2023/Jun/img_209295_zerodhakamathbrothers-0037_bg.jpg?im=Resize,width=500,aspect=fit,type=normal' },
              { name: 'Friedrich Nietzsche', trait: 'Philosophy', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Nietzsche187c.jpg/330px-Nietzsche187c.jpg' },
              { name: 'Ram Gopal Varma', trait: 'Creative Realism', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/RamGopalVarma.jpg' }
            ].map((person, idx) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <motion.div
                  className="relative flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-14 h-14 rounded-full object-cover border border-white/10 group-hover:border-emerald-500 transition-colors duration-300"
                    loading="lazy"
                  />
                  <motion.div
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 rounded-full bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></motion.div>
                </motion.div>
                <div>
                  <div className="text-sm font-bold text-white/90 group-hover:text-white transition-colors duration-300">{person.name}</div>
                  <div className="text-[9px] text-emerald-500/70 font-mono uppercase tracking-tighter">{person.trait}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Library - Card Lift and Glow */}
        <motion.div
          variants={itemVariants}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-6 text-slate-500">
            <BookOpen size={16} />
            <span className="text-xs font-mono uppercase font-bold tracking-widest">The Library</span>
          </div>
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { title: 'ZERO TO ONE', img: 'https://cdn2.penguin.com.au/covers/original/9780753555200.jpg' }, 
              { title: 'RICH DAD POOR DAD', img: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._SL1500_.jpg' }, 
              { title: 'ATOMIC HABITS', img: 'https://m.media-amazon.com/images/I/817HaeblezL._SY466_.jpg' }, 
              { title: 'PSYCHOLOGY OF MONEY', img: 'https://m.media-amazon.com/images/I/41WzOlwVd2L._SY445_SX342_ML2_.jpg' }
            ].map((book, idx) => (
              <motion.div
                key={book.title}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.05 }}
                className="group cursor-pointer flex flex-col items-center"
              >
                <motion.div
                  className="w-24 h-32 overflow-hidden rounded-lg mb-3 bg-black/20 border border-white/5 group-hover:border-emerald-500/50 transition-all duration-300"
                  whileHover={{ shadow: '0_0_20px_-5px_rgba(16,185,129,0.3)' }}
                >
                  <motion.img 
                    src={book.img} 
                    alt={book.title}
                    whileHover={{ scale: 1.15 }}
                    className="w-full h-full object-contain p-1 opacity-80 group-hover:opacity-100 transition duration-300"
                    loading="lazy"
                  />
                </motion.div>
                <div className="text-[8px] font-bold text-slate-500 group-hover:text-emerald-400 transition-colors duration-300 uppercase text-center tracking-tighter">
                  {book.title}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hobbies */}
        <motion.div
          variants={itemVariants}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-6 text-slate-500">
            <Lightbulb size={16} />
            <span className="text-xs font-mono uppercase font-bold tracking-widest">Hobbies</span>
          </div>
          <div className="space-y-4">
            {[
              { hobby: 'Building Creative Solutions', emoji: '🚀' },
              { hobby: 'Investing & Stockmarket', emoji: '📈' },
              { hobby: 'Reading Books', emoji: '📚' },
              { hobby: 'Travelling', emoji: '✈️' },
              { hobby: 'Movies', emoji: '🎬' },
              { hobby: 'Music', emoji: '🎵' }
            ].map((item, index) => (
              <motion.div
                key={item.hobby}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <motion.span
                      className="text-xl"
                      whileHover={{ rotate: 20, scale: 1.3 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {item.emoji}
                    </motion.span>
                    <div className="text-xs font-semibold text-white/80 group-hover:text-emerald-400 transition-colors duration-300">
                      {item.hobby}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </motion.div>

        {/* Rotating Inspirational Quotes - Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 backdrop-blur-xl hover:border-emerald-500/50 transition-all duration-300 cursor-pointer group"
        >
          <div className="flex items-start gap-4">
            <motion.div
              className="text-4xl"
              animate={{ rotate: isPaused ? 0 : 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              ✨
            </motion.div>
            <div className="flex-1">
              <motion.div
                key={currentQuoteIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <p className="text-lg md:text-xl font-semibold text-white italic leading-relaxed">
                  "{quotes[currentQuoteIndex].text}"
                </p>
                <p className="text-sm text-emerald-400 font-mono uppercase tracking-wider">
                  — {quotes[currentQuoteIndex].author}
                </p>
              </motion.div>
              <div className="flex gap-2 mt-6">
                {quotes.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => {
                      setCurrentQuoteIndex(idx);
                      setIsPaused(true);
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentQuoteIndex ? 'bg-emerald-400 w-6' : 'bg-emerald-500/30 hover:bg-emerald-500/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="text-xs text-slate-500 mt-4 group-hover:text-emerald-400/70 transition-colors">
            Hover to pause • Click dots to navigate
          </div>
        </motion.div>
      </main>

      {/* Footer / Contact CTA */}
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto mt-20 border-t border-white/5 pt-8 pb-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="text-center"
        >
          <p className="text-slate-400 text-sm mb-4">Ready to build something extraordinary together?</p>
          <motion.button
            onClick={() => setChatOpen(true)}
            whileHover={{ scale: 1.08, boxShadow: '0_0_30px_rgba(16,185,129,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-emerald-500 text-black font-bold px-8 py-4 rounded-lg hover:bg-emerald-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            Get In Touch
          </motion.button>
          <p className="text-slate-500 text-xs mt-8">© 2025 Vivek Nandimandalam. All rights reserved.</p>
        </motion.div>
      </motion.footer>

      {/* WhatsApp Chat Modal */}
      {chatOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end md:items-center justify-end md:justify-center p-4 z-50"
          onClick={() => setChatOpen(false)}
        >
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0b0e14] border border-white/10 rounded-2xl w-full md:w-96 shadow-2xl backdrop-blur-xl"
          >
            {/* Chat Header */}
            <motion.div
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 rounded-t-2xl flex justify-between items-center"
              layoutId="chatHeader"
            >
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                <h3 className="text-black font-bold text-lg">Let's Chat</h3>
                <p className="text-black/70 text-xs">Send me a message</p>
              </motion.div>
              <motion.button
                onClick={() => setChatOpen(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                className="text-black hover:bg-black/10 p-2 rounded-lg transition-colors"
              >
                <X size={20} />
              </motion.button>
            </motion.div>

            {/* Chat Body */}
            <motion.div
              className="p-6 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/[0.08] transition-colors duration-300"
              >
                <p className="text-slate-300 text-sm mb-3">Hi 👋 I'm Vivek! Tell me about your project or just say hello.</p>
              </motion.div>

              <motion.input
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                type="text"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                placeholder="Your name (required)"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-white/[0.08] transition-all duration-300"
              />

              <motion.input
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                type="email"
                value={visitorEmail}
                onChange={(e) => setVisitorEmail(e.target.value)}
                placeholder="Your email (optional)"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-white/[0.08] transition-all duration-300"
              />

              <motion.textarea
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-white/[0.08] resize-none h-24 transition-all duration-300"
              />

              <motion.button
                onClick={sendMessage}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSending}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className={`w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSending
                    ? 'opacity-60 cursor-not-allowed'
                    : 'hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                }`}
              >
                {isSending ? (
                  <motion.svg
                    className="h-4 w-4 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </motion.svg>
                ) : (
                  <Send size={16} />
                )}
                {isSending ? 'Sending...' : 'Send Message'}
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-slate-500 text-xs text-center"
              >
                or email me at{' '}
                <a href="mailto:viveknandimandalam334@gmail.com" className="text-emerald-400 hover:text-emerald-300 hover:underline transition-colors">
                  viveknandimandalam334@gmail.com
                </a>
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Floating Chat Button */}
      {!chatOpen && (
        <motion.button
          onClick={() => setChatOpen(true)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-emerald-500 text-black p-4 rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 z-40"
        >
          <MessageCircle size={24} />
        </motion.button>
      )}
    </div>
  );
}

export default App;