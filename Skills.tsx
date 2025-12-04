import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-surface relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
        >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Skills & Tools</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                My technical arsenal is constantly expanding. Here are the technologies I work with most frequently to bring ideas to life.
            </p>
        </motion.div>

        {/* Interactive Floating Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skill, index) => (
                <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)" }}
                    animate={{ 
                        y: [0, -5, 0],
                        transition: { 
                            duration: 3 + Math.random() * 2, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: Math.random() * 2
                        } 
                    }}
                    className="bg-background/40 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all group"
                >
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-all" />
                            <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{skill.name}</h4>
                        </div>
                        <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase border border-white/5 px-2 py-1 rounded bg-black/20">
                            {skill.category}
                        </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                            className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 bottom-0 w-full bg-white/20 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Marquee Effect */}
        <div className="mt-24 pt-12 border-t border-white/5 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10"></div>
            
            <motion.div 
                className="flex gap-16 whitespace-nowrap opacity-30 hover:opacity-100 transition-opacity duration-500"
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-16 items-center">
                        <span className="text-5xl font-display font-bold text-transparent bg-clip-text bg-white/20 stroke-white stroke-2">REACT</span>
                        <div className="w-3 h-3 rounded-full bg-primary/20" />
                        <span className="text-5xl font-display font-bold text-transparent bg-clip-text bg-white/20">NEXT.JS</span>
                        <div className="w-3 h-3 rounded-full bg-primary/20" />
                        <span className="text-5xl font-display font-bold text-transparent bg-clip-text bg-white/20">TYPESCRIPT</span>
                        <div className="w-3 h-3 rounded-full bg-primary/20" />
                        <span className="text-5xl font-display font-bold text-transparent bg-clip-text bg-white/20">DESIGN</span>
                        <div className="w-3 h-3 rounded-full bg-primary/20" />
                        <span className="text-5xl font-display font-bold text-transparent bg-clip-text bg-white/20">UI/UX</span>
                        <div className="w-3 h-3 rounded-full bg-primary/20" />
                    </div>
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;