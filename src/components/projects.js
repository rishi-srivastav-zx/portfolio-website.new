'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, X, Layout, Server, ShieldCheck, Zap } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
 {
  id: 1,
  title: "Task Management System",
  category: "Aviation Operations & Workforce Management",
  image: "/images/project-1.jpeg",
  description: "A role-based task management dashboard built for airline operational teams where Admin and Managers assign tasks to employees with real-time status tracking.",
  tags: ["Next.js", "React", "LocalStorage Auth", "Role-Based Access"],
  features: [
    "Role-based login (Admin, Manager, Employee)",
    "Task assignment and status management",
    "Real-time dashboard statistics (New, Accepted, Completed, Failed)",
    "Modern responsive UI with gradient analytics cards",
    "Frontend authentication using LocalStorage"
  ],
  workflow: "Admin/Manager assigns tasks → Employee accepts task → Marks as Completed or Failed → Dashboard updates dynamically.",
  backend: "Frontend-based authentication system using LocalStorage for session management (No external backend).",
  performance: "Optimized UI rendering with React state management and reusable components."
},
 {
  id: 2,
  title: "Devfolio Interactive Portfolio Book",
  category: "Frontend Engineering & Creative UI",
  image: "/images/project-2.jpeg",
  description: "An interactive and fully animated digital portfolio book built entirely with Vanilla JavaScript, showcasing projects through immersive page-flip effects and smooth micro-interactions.",
  tags: ["JavaScript", "HTML5", "CSS3", "Vanilla JS", "Creative UI"],
  features: [
    "Realistic page-flip book animation",
    "Smooth section transitions",
    "Custom navigation logic without frameworks",
    "Dynamic content rendering using pure JavaScript",
    "Fully responsive and optimized layout"
  ],
  frontend: "Built completely with Vanilla JavaScript for full control over DOM manipulation and animation sequencing.",
  animation: "Custom page transition system using JavaScript timing functions and CSS transforms for realistic book effects.",
  performance: "Lightweight architecture with optimized repaint/reflow handling for ultra-smooth animation performance."
},
    {
      id: 3,
      title: "OmniFlow CMS",
      category: "Content Management",
      image: "https://picsum.photos/800/600?random=3",
      description: "Custom blog CMS featuring an advanced approval workflow and multi-role access controls.",
      tags: ["React", "Go", "ElasticSearch", "AWS"],
      features: ["Drafting & Approval queues", "Rich text editor custom plugins", "Search by ElasticSearch"],
      backend: "Golang backend for lightning-fast content delivery and processing.",
      performance: "Optimized for Core Web Vitals with automatic image transformation (AVIF/WebP)."
    },
    {
      id: 4,
      title: "Guardian Auth Suite",
      category: "Security & Infrastructure",
      image: "https://picsum.photos/800/600?random=4",
      description: "Unified authentication service providing RBAC, MFA, and OAuth2 for large-scale application suites.",
      tags: ["Node.js", "OAuth2", "PostgreSQL", "Docker"],
      features: ["Multi-factor authentication", "Single sign-on (SSO)", "Session management"],
      backend: "Highly secure architecture utilizing encrypted session storage and brute-force protection.",
      performance: "Ultra-low latency authentication responses (<50ms globally)."
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-cyan-500 mb-4">Case Studies</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-white">
              Selected Works.
            </h3>
          </div>
          <p className="text-slate-400 max-w-md text-sm md:text-right">
            Diving deep into production-ready software engineering. 
            Each project represents a unique challenge in scalability and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              <div className="aspect-video rounded-3xl overflow-hidden glass border border-white/5 mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ChevronRight size={32} />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">{project.category}</span>
                  <h4 className="text-2xl font-display font-bold text-white mt-1 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                </div>
                <div className="flex gap-2">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-1 border border-white/10 rounded-md text-slate-500">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] glass rounded-3xl border border-white/10 overflow-y-auto"
            >
              <button 
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="grid lg:grid-cols-2">
                <div className="h-full min-h-[300px]">
                  <img 
                    src={activeProject.image} 
                    alt={activeProject.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <span className="text-sm font-bold text-cyan-500 uppercase tracking-widest">{activeProject.category}</span>
                  <h3 className="text-3xl font-display font-black text-white mt-2 mb-6">{activeProject.title}</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    {activeProject.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="flex items-center text-white font-bold mb-3">
                        <Zap size={18} className="text-cyan-400 mr-2" /> Key Features
                      </h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {activeProject.features.map(f => (
                          <li key={f} className="text-sm text-slate-400 flex items-center">
                            <div className="w-1 h-1 bg-cyan-500 rounded-full mr-3" /> {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                        <h4 className="flex items-center text-white font-bold text-xs uppercase tracking-widest mb-2">
                          <Server size={14} className="text-purple-400 mr-2" /> Backend
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-tight">{activeProject.backend}</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                        <h4 className="flex items-center text-white font-bold text-xs uppercase tracking-widest mb-2">
                          <Layout size={14} className="text-emerald-400 mr-2" /> Performance
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-tight">{activeProject.performance}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex gap-4">
                    <button className="flex-1 px-6 py-3 bg-cyan-500 text-slate-950 font-bold rounded-xl flex items-center justify-center hover:bg-cyan-400 transition-colors">
                      Live Preview <ExternalLink size={18} className="ml-2" />
                    </button>
                    <button className="px-6 py-3 glass border border-white/10 text-white font-bold rounded-xl flex items-center justify-center hover:bg-white/5 transition-colors">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;