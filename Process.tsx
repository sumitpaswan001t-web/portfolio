import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
        >
            <h2 className="text-4xl font-display font-bold text-white mb-4">How I Work</h2>
            <p className="text-slate-400">From concept to deployment</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line (Center for desktop, Left for mobile) */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 md:translate-x-0" />
            
            <div className="space-y-12">
                {PROCESS.map((step, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className={`relative flex items-center md:justify-between ${isEven ? 'flex-row' : 'flex-row-reverse md:flex-row'}`}
                        >
                            {/* Empty space for opposite side on desktop */}
                            <div className="hidden md:block w-5/12" />

                            {/* Icon / Center Node */}
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-surface border-4 border-background z-10 shadow-xl shadow-primary/20">
                                <step.icon size={20} className="text-primary" />
                            </div>

                            {/* Content Card */}
                            <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${isEven ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                                <div className="p-6 bg-surface rounded-xl border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1">
                                    <span className="text-5xl font-display font-bold text-white/5 absolute -top-4 -right-4 md:right-auto md:left-4 select-none">0{step.id}</span>
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
