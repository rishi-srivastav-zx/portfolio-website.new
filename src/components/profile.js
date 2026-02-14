'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Shield, Terminal } from 'lucide-react';

const Profile = () => {
  return (
    <section id="profile" className="py-24 px-6 relative overflow-hidden bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Container */}
          <div className="lg:col-span-5 relative group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 aspect-[4/5] rounded-[2rem] overflow-hidden glass border border-white/10 shadow-2xl"
            >
              
              <img 
                src="/images/c50c5ac5-f7ba-428a-94e5-9ee7f2e07020.png" 
                alt="Full Stack Developer Portrait"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              
              {/* Scanning Line Animation */}
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20 pointer-events-none"
              />

              {/* HUD Elements Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">System Active: Core_V1</span>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex justify-between items-end border-t border-white/10 pt-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Current Coordinates</p>
                    <p className="text-xs font-mono text-slate-300">40.7128° N, 74.0060° W</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Status</p>
                    <p className="text-xs font-mono text-cyan-400">READY_FOR_BUILD</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Background Decorative Rings */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-cyan-500/10 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-purple-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          </div>

          {/* Bio / Manifesto Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-cyan-500 mb-4 flex items-center">
                <Shield size={16} className="mr-2" /> The Identity
              </h2>
              <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-8">
                The Architect <span className="text-slate-500">Behind The Stack.</span>
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-cyan-400">
                    <User size={20} />
                    <span className="font-bold tracking-wider">LEAD ENGINEER</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Passionate about the intersection of high-end aesthetics and robust performance. I specialize in taking raw concepts and translating them into production-ready digital empires.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-purple-400">
                    <MapPin size={20} />
                    <span className="font-bold tracking-wider">LOCATION</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Working remotely at the speed of light. Available for global collaboration and high-impact engineering roles that demand excellence.
                  </p>
                </div>
              </div>

              <div className="p-8 glass rounded-3xl border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <Terminal className="text-white/5" size={80} />
                </div>
                <p className="text-lg font-display italic text-slate-300 relative z-10">
                  "I don't just solve problems; I create systems that prevent them. My mission is to build digital products that are not only functional but feel inevitable."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-500">Manifesto v2.5</span>
                </div>
              </div>

              <div className="mt-12 flex gap-8">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Focus</span>
                  <span className="text-white font-bold">Resilience</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Priority</span>
                  <span className="text-white font-bold">Scalability</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Passion</span>
                  <span className="text-white font-bold">UX Mastery</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Profile;