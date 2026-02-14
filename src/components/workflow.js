'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, CheckCircle, Rocket } from 'lucide-react';

const Workflow = () => {
  const steps = [
    {
      icon: <Search className="text-cyan-400" />,
      title: "Discovery & Strategy",
      desc: "Deep diving into business goals, user personas, and technical requirements to map out the perfect solution."
    },
    {
      icon: <PenTool className="text-purple-400" />,
      title: "System Architecture",
      desc: "Designing scalable database schemas, microservices structures, and pixel-perfect high-fidelity prototypes."
    },
    {
      icon: <Code className="text-blue-400" />,
      title: "Full Stack Development",
      desc: "Writing clean, modular code with React for the frontend and robust Node.js/Go logic for the backend."
    },
    {
      icon: <CheckCircle className="text-emerald-400" />,
      title: "Testing & QA",
      desc: "Comprehensive unit, integration, and end-to-end testing to ensure a zero-bug production environment."
    },
    {
      icon: <Rocket className="text-amber-400" />,
      title: "Deployment & Scaling",
      desc: "Launching via automated CI/CD pipelines to cloud infrastructure with real-time monitoring enabled."
    }
  ];

  return (
    <section id="workflow" className="py-24 px-6 bg-slate-900/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] font-bold text-cyan-500 mb-4"
          >
            The Method
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-black text-white"
          >
            Design, Build, scale.
          </motion.h3>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className={`flex-1 text-center ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <h4 className="text-2xl font-display font-bold text-white mb-4">{step.title}</h4>
                  <p className="text-slate-400 max-w-md mx-auto lg:mx-0 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="relative z-10 w-16 h-16 rounded-full glass border border-white/10 flex items-center justify-center shrink-0 shadow-2xl">
                  <div className="absolute -inset-2 bg-cyan-500/5 blur-xl rounded-full" />
                  {step.icon}
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;