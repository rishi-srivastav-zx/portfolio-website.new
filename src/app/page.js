'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
} from 'lucide-react';
import Hero from '@/components/hero';
import About from '@/components/about';
import Profile from '@/components/profile';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Workflow from '@/components/workflow';
import Contact from '@/components/contact';
import Navbar from '@/components/navbar';
import Scene3D from '@/components/secen3d';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30">
      {/* Loading Screen */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950"
          >
            <div className="flex flex-col items-center">
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 border-t-2 border-r-2 border-cyan-500 rounded-full"
              />
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 font-display text-cyan-400 tracking-widest uppercase text-sm"
              >
                Initializing Engine...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent 3D Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Scene3D />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Profile />
        <Skills />
        <Projects />
        <Workflow />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-white/5 py-12 px-6 glass">
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-2">FULLSTACK.DEV</h3>
            <p className="text-slate-400 text-sm max-w-xs">Building scalable, resilient digital products with precision engineering and modern aesthetics.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors"><Github size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors"><Mail size={20} /></a>
          </div>
          <p className="text-slate-500 text-xs">© 2024 Engineering Excellence. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;