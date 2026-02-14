'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Linkedin, Github, Send } from 'lucide-react';
import ContactForm from './form';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-cyan-500 mb-4">Connection</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-8">
              Start a <span className="text-slate-500">Project.</span>
            </h3>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-lg">
              Currently accepting new projects and engineering roles. If you're looking to build something 
              extraordinary or need a senior hand on your team, let's talk.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass border border-white/5 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                  <Mail className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Email</p>
                  <p className="text-lg text-white font-medium"><a target="_blank" href="mailto:rishisrivastav4343@gmail.com">rishisrivastav4343@gmail.com</a></p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass border border-white/5 flex items-center justify-center group-hover:border-purple-500/50 transition-colors">
                  <Linkedin className="text-purple-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">LinkedIn</p>
                  <p className="text-lg text-white font-medium"><a target="_blank" href="https://www.linkedin.com/in/rishi-srivastav-13a017293/">https://www.linkedin.com/in/rishi-srivastav-13a017293/</a></p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass border border-white/5 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                  <Github className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">GitHub</p>
                  <p className="text-lg text-white font-medium"><a target="_blank" href="https://github.com/rishi-srivastav-zx">https://github.com/rishi-srivastav-zx</a></p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] border border-white/10"
          >
           <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;