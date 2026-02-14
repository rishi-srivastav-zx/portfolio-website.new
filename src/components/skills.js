'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Globe, Layers, Cpu } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Engineering",
      icon: <Layers className="text-cyan-400" />,
      items: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Three.js", "Framer Motion", "Redux Toolkit"]
    },
    {
      title: "Backend Development",
      icon: <Server className="text-purple-400" />,
      items: ["Node.js", "Express", "Python", "Golang", "RESTful APIs", "GraphQL", "Microservices"]
    },
    {
      title: "Database & Storage",
      icon: <Database className="text-amber-400" />,
      items: ["PostgreSQL", "MongoDB", "Redis", "ElasticSearch", "Prisma ORM", "Mongoose", "S3 Storage"]
    },
    {
      title: "Operations & DevOps",
      icon: <Cpu className="text-emerald-400" />,
      items: ["Docker", "Kubernetes", "AWS (EC2, S3, Lambda)", "CI/CD Pipelines", "Vercel", "Linux Admin"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] font-bold text-cyan-500 mb-4"
          >
            Capabilities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-black text-white"
          >
            My Technical Arsenal.
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {cat.icon}
              </div>
              <div className="mb-8">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mb-4">
                  {cat.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-white">{cat.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 border border-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Tooltips or icons could be added here for extra visual flair */}
      </div>
    </section>
  );
};

export default Skills;