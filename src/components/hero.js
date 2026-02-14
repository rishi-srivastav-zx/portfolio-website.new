'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Zap, Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="max-w-8xl mx-auto w-full grid md:grid-cols-2 items-center gap-12">
        <div className="relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6 uppercase">
              <Zap size={14} className="mr-2" /> Engineered for scale
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-black leading-tight text-white mb-6">
              Full Stack Developer <br />
              <span className="gradient-text">Architecting Digital</span> <br />
              Future Systems.
            </h1>
            <p className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed">
              I build production-level ecosystems with high-performance frontends, 
              distributed backends, and bulletproof infrastructure. From airline portals 
              to global CMS platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}  
                href="/cv/rishi_resume.pdf" download
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg flex items-center justify-center transition-all group"
              >
                Download CV <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-lg flex items-center justify-center hover:bg-white/5 transition-all"
              >
                Let's Collaborate
              </motion.a>
            </div>
          </motion.div>

          <div className="mt-16 flex items-center gap-8 grayscale opacity-50">
            {/* Tech Logos Placeholder - Simple Icons/Text */}
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-white-700 mb-2">Expertise in</span>
              <div className="flex gap-6 items-center">
                <span className="font-display font-bold text-xl">React</span>
                <span className="font-display font-bold text-xl">Node.js</span>
                <span className="font-display font-bold text-xl">Next.js</span>
                <span className="font-display font-bold text-xl">MongoDB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative 3D UI Elements could go here on desktop */}
        <div className="hidden lg:block relative h-full">
           <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 glass rounded-2xl border border-white/10 rotate-6 p-8 flex flex-col justify-between shadow-2xl"
           >
              <div className="flex justify-between items-start">
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                   <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                </div>
                <Code2 className="text-cyan-500/50" />
              </div>
              <div className="space-y-4 font-mono text-sm text-slate-500">
                <p><span className="text-cyan-400">const</span> engine = <span className="text-amber-400">new</span> CoreSystem();</p>
                <p>engine.<span className="text-purple-400">initialize</span>({`{`}</p>
                <p className="pl-4">scale: <span className="text-orange-400">'infinite'</span>,</p>
                <p className="pl-4">security: <span className="text-orange-400">'military'</span>,</p>
                <p className="pl-4">uptime: <span className="text-orange-400">'99.9%'</span></p>
                <p>{`}`});</p>
              </div>
              <div className="flex justify-end">
                <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-md text-xs font-bold text-cyan-400">DEPLOYED</div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;