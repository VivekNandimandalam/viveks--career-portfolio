import React, { useState } from 'react';
import { ExternalLink, Download, TrendingUp, BookOpen, User, Code2, Cloud, Zap, Briefcase, Lightbulb, MessageCircle, X, Send } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [message, setMessage] = useState('');
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
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500 shadow-2xl">
          <span className="text-emerald-400 font-mono text-xs mb-4 uppercase tracking-widest flex items-center gap-2">
            <span className="w-1 h-1 bg-emerald-400 rounded-full"></span> Executive Summary
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tighter">
            Associate AI & Automation Engineer | M.Sc. Cloud Computing @ NCI
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-4xl">
            I build intelligent systems that solve real-world problems. Entrepreneur at heart, engineer by trade. Always researching new technologies and architecting scalable solutions that drive impact.
          </p>
        </div>

        {/* Core Competencies - Horizontal Layout */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center gap-2 mb-6 text-slate-500">
            <Code2 size={16} />
            <span className="text-xs font-mono uppercase font-bold tracking-widest">Core Competencies</span>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { skill: 'Python', icon: '🐍' },
              { skill: 'Azure Cloud', icon: '☁️' },
              { skill: 'AI/ML', icon: '🤖' },
              { skill: 'Automation', icon: '⚙️' },
              { skill: 'AWS', icon: '🔶' },
              { skill: 'Monitoring & Observability', icon: '📊' }
            ].map(tech => (
              <div key={tech.skill} className="bg-white/[0.03] border border-emerald-500/20 rounded-lg p-4 group hover:border-emerald-500/50 hover:bg-emerald-500/[0.05] transition-all duration-300">
                <div className="text-2xl mb-2 group-hover:scale-125 transition-transform origin-left duration-300">{tech.icon}</div>
                <div className="text-xs font-bold text-white/90">{tech.skill}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience - Unified Dexian Block */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Briefcase size={18} className="text-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">Professional Experience</span>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
              <div>
                <a href="https://india.dexian.com/" target="_blank" rel="noopener noreferrer" className="text-3xl font-black text-white hover:text-emerald-400 transition-colors duration-300 inline-flex items-center gap-2">
                  Dexian Technologies
                  <ExternalLink size={20} />
                </a>
                <div className="text-emerald-400 text-base font-semibold mt-3">📍 Chennai, India</div>
                <div className="text-slate-300 text-sm mt-2">
                  <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mr-2 align-middle"></span>
                  <span className="font-mono">MARCH 2024 — DECEMBER 2025</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mt-4 max-w-3xl">Contract role as AI & Automation Engineer, contributing to enterprise-scale digital transformation projects for a Fortune 500 client. Responsibilities included data migration, automation engineering, quality assurance, and cloud DevOps initiatives.</p>
              </div>

              <div className="flex-shrink-0">
                <div className="bg-emerald-500/6 border border-emerald-500/20 rounded-lg p-4 text-emerald-300 text-sm">
                  <div className="font-bold text-emerald-400">Contract (Dexian)</div>
                  <div className="mt-2 text-xs">ExxonMobil — Migration & Automation</div>
                </div>
              </div>
            </div>

            <div className="my-6 border-t border-white/5"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {workExperience.map((job) => (
                <div key={job.id} className="bg-black/10 border border-white/5 rounded-lg p-6 hover:border-emerald-500/30 hover:bg-black/20 transition-all duration-300">
                  <h3 className="text-white font-bold text-sm mb-2">{job.title}</h3>
                  <p className="text-slate-400 text-xs mb-4">{job.description}</p>

                  <ul className="mb-4 space-y-2">
                    {job.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-[13px] text-slate-300 flex gap-3">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((tech) => (
                      <span key={tech} className="text-[8px] font-mono uppercase px-2 py-1 bg-emerald-500/5 border border-emerald-500/20 rounded text-emerald-300 hover:border-emerald-500/40 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Projects Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <Code2 size={16} className="text-emerald-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">Personal Projects</span>
        </div>

        {/* Dynamic Project Grid - Glow Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-emerald-500/30 hover:-translate-y-2 transition-all duration-300 group shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[9px] font-mono text-emerald-400 px-2 py-1 bg-emerald-500/10 rounded-md border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                  {project.status || 'ACTIVE'}
                </span>
                <div className="flex gap-2">
                  {project.award_url && (
                    <a href={project.award_url} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300" title="View Award Certificate">
                      <span className="text-lg">🏆</span>
                    </a>
                  )}
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300"><ExternalLink size={14} className="text-slate-600 group-hover:text-emerald-400" /></a>
                </div>
              </div>
              <h3 className="text-white font-bold text-sm mb-2 group-hover:text-emerald-400 transition-colors duration-300">{project.title}</h3>
              <p className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors duration-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-[8px] font-mono uppercase px-2 py-1 bg-emerald-500/5 border border-emerald-500/30 rounded text-emerald-400/80 group-hover:border-emerald-500/60 group-hover:text-emerald-300 transition-colors duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={16} className="text-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">Certifications</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex items-center gap-4">
                <img src="/src/microsoft_logo.jpg" alt="Microsoft" className="w-10 h-10 object-contain" loading="lazy" />
                <div>
                  <div className="text-sm font-bold text-white">Microsoft Certified: Azure Fundamentals</div>
                  <a href="https://learn.microsoft.com/en-us/users/viveknandimandalam-1700/credentials/d01cd2bd4a48807f?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer" className="text-emerald-400 text-xs">View Credential</a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex items-center gap-4">
                <img src="/src/datadog_logo.jpg" alt="Datadog" className="w-10 h-10 object-contain" loading="lazy" />
                <div>
                  <div className="text-sm font-bold text-white">DataDog Fundamentals</div>
                  <div className="text-xs text-slate-400">Issued: April 04, 2025 — Expires: April 04, 2028</div>
                  <a href="https://www.credly.com/badges/4b30b7db-5d07-45e7-8aaa-d6a5c2b399fa/linked_in_profile" target="_blank" rel="noopener noreferrer" className="text-emerald-400 text-xs">View Badge</a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex items-center gap-4">
                <img src="/src/redwood_software_logo.jpg" alt="REDWOOD" className="w-10 h-10 object-contain" loading="lazy" />
                <div>
                  <div className="text-sm font-bold text-white">RUNMYJOBS AUTOMATION DEVELOPER SPECIALIST</div>
                  <a href="https://drive.google.com/file/d/1ZxvusSMN-0cMJM4cA4GTRMP5KEZBX4AR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-emerald-400 text-xs">View Certificate</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Life Inspired By, Books, and Hobbies - 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-6 text-slate-500">
              <User size={16} />
              <span className="text-xs font-mono uppercase font-bold tracking-widest">Life Inspired By</span>
            </div>
            <div className="space-y-5">
            {[
              { name: 'Nikhil Kamath', trait: 'Financial Strategy', img: 'https://images.forbesindia.com/blog/wp-content/uploads/media/images/2023/Jun/img_209295_zerodhakamathbrothers-0037_bg.jpg?im=Resize,width=500,aspect=fit,type=normal' },
              { name: 'Friedrich Nietzsche', trait: 'Philosophy', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Nietzsche187c.jpg/330px-Nietzsche187c.jpg' },
              { name: 'Ram Gopal Varma', trait: 'Creative Realism', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/RamGopalVarma.jpg' }
            ].map(person => (
              <div key={person.name} className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                <div className="relative flex-shrink-0">
                  <img src={person.img} alt={person.name} className="w-14 h-14 rounded-full object-cover border border-white/10 group-hover:border-emerald-500 transition-colors duration-300" loading="lazy" />
                  <div className="absolute inset-0 rounded-full bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <div className="text-sm font-bold text-white/90 group-hover:text-white transition-colors duration-300">{person.name}</div>
                  <div className="text-[9px] text-emerald-500/70 font-mono uppercase tracking-tighter">{person.trait}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Library - Card Lift and Glow */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center gap-2 mb-6 text-slate-500">
            <BookOpen size={16} />
            <span className="text-xs font-mono uppercase font-bold tracking-widest">The Library</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'ZERO TO ONE', img: 'https://cdn2.penguin.com.au/covers/original/9780753555200.jpg' }, 
              { title: 'RICH DAD POOR DAD', img: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._SL1500_.jpg' }, 
              { title: 'ATOMIC HABITS', img: 'https://m.media-amazon.com/images/I/817HaeblezL._SY466_.jpg' }, 
              { title: 'PSYCHOLOGY OF MONEY', img: 'https://m.media-amazon.com/images/I/41WzOlwVd2L._SY445_SX342_ML2_.jpg' }
            ].map(book => (
              <div key={book.title} className="group cursor-pointer flex flex-col items-center hover:-translate-y-2 transition-all duration-300">
                <div className="w-24 h-32 overflow-hidden rounded-lg mb-3 bg-black/20 border border-white/5 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.2)] transition-all duration-300">
                  <img 
                    src={book.img} 
                    alt={book.title} 
                    className="w-full h-full object-contain p-1 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-300" 
                    loading="lazy"
                  />
                </div>
                <div className="text-[8px] font-bold text-slate-500 group-hover:text-emerald-400 transition-colors duration-300 uppercase text-center tracking-tighter">
                  {book.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
        </div>
        </div>
      </main>

      {/* Footer / Contact CTA */}
      <footer className="max-w-7xl mx-auto mt-20 border-t border-white/5 pt-8 pb-12">
        <div className="text-center">
          <p className="text-slate-400 text-sm mb-4">Ready to build something extraordinary together?</p>
          <button 
            onClick={() => setChatOpen(true)}
            className="inline-block bg-emerald-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-emerald-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            Get In Touch
          </button>
          <p className="text-slate-500 text-xs mt-8">© 2025 Vivek Nandimandalam. All rights reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Chat Modal */}
      {chatOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end md:items-center justify-end md:justify-center p-4 z-50"
          onClick={() => setChatOpen(false)}
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0b0e14] border border-white/10 rounded-2xl w-full md:w-96 shadow-2xl"
          >
            {/* Chat Header */}
            <div className="bg-emerald-500 p-4 rounded-t-2xl flex justify-between items-center">
              <div>
                <h3 className="text-black font-bold text-lg">Let's Chat</h3>
                <p className="text-black/70 text-xs">Send me a message on WhatsApp</p>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-black hover:bg-black/10 p-2 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-6 space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-slate-300 text-sm mb-3">Hi 👋 I'm Vivek! Tell me about your project or just say hello.</p>
              </div>

              <input
                type="text"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                placeholder="Your name (required)"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
              />

              <input
                type="email"
                value={visitorEmail}
                onChange={(e) => setVisitorEmail(e.target.value)}
                placeholder="Your email (optional)"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 resize-none h-24 transition-colors duration-300"
              />

              <button
                onClick={async () => {
                  if (!visitorName.trim() || !message.trim()) {
                    alert('Please enter your name and message.');
                    return;
                  }
                  try {
                    console.log('Sending message:', { visitorName, visitorEmail, message });
                    const apiBase =
                      import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';
                    const res = await fetch(`${apiBase}/api/send-whatsapp`, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ 
                        message, 
                        visitorName: visitorName.trim(), 
                        visitorEmail: visitorEmail.trim() 
                      }),
                    });
                    const data = await res.json();
                    console.log('Server response:', { status: res.status, data });
                    if (res.ok && data.ok) {
                      alert('✅ Message sent! I\'ll get back to you soon.');
                    } else {
                      console.error('Message failed:', data);
                      alert(`❌ Error: ${data.error || 'Unknown error'}\n\nDetails: ${data.details || data.error_message || 'Check console'}`);
                    }
                  } catch (err) {
                    console.error('Fetch error:', err);
                    alert(`❌ Error sending message:\n${err.message}\n\nIs the server running on localhost:4000?`);
                  }
                  setVisitorName('');
                  setVisitorEmail('');
                  setMessage('');
                  setChatOpen(false);
                }}
                className="w-full bg-emerald-500 text-black font-bold py-3 rounded-lg hover:bg-emerald-400 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <Send size={16} />
                Send via WhatsApp
              </button>

              <p className="text-slate-500 text-xs text-center">or email me at <a href="mailto:viveknandimandalam334@gmail.com" className="text-emerald-400 hover:underline">viveknandimandalam334@gmail.com</a></p>
            </div>
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