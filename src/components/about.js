'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Database, ShieldCheck } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Shipped', value: '20+' },
    { label: 'System Uptime', value: '99.9%' },
    { label: 'Lines of Code', value: '1M+' },
  ];

  const pillars = [
    { 
      icon: <Globe className="text-cyan-400" />, 
      title: "Frontend Mastery", 
      desc: "Creating cinematic, pixel-perfect interfaces that prioritize user experience and performance." 
    },
    { 
      icon: <Database className="text-purple-400" />, 
      title: "Scalable Backends", 
      desc: "Architecting robust API structures and database schemas that handle thousands of requests per second." 
    },
    { 
      icon: <ShieldCheck className="text-emerald-400" />, 
      title: "Enterprise Security", 
      desc: "Implementing role-based access control, JWT authentication, and advanced encryption standards." 
    },
    { 
      icon: <Cpu className="text-amber-400" />, 
      title: "DevOps & Cloud", 
      desc: "Streamlining deployment workflows with CI/CD, Docker, and cloud-native infrastructure." 
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-cyan-500 mb-4">The Engineer</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-8">
              Turning complex logic into <span className="text-slate-500">seamless experiences.</span>
            </h3>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                My approach to development is rooted in the philosophy that software should be as 
                resilient as it is beautiful. I don't just write code; I design systems.
              </p>
              <p>
                With a deep understanding of the full application lifecycle, I bridge the gap 
                between aesthetic frontend design and powerful backend architecture. My focus 
                is on solving business-critical problems through technical innovation.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/5 pt-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-display font-black text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 glass rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-3">{pillar.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;