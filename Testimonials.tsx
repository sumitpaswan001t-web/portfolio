import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-surface border-y border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl font-display font-bold text-white">Client Stories</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
                <motion.div
                    key={t.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-background p-8 rounded-2xl relative"
                >
                    <Quote className="absolute top-8 right-8 text-primary/20" size={40} />
                    <p className="text-slate-300 mb-6 relative z-10 font-medium">"{t.quote}"</p>
                    <div className="flex items-center gap-4">
                        <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                            <h4 className="text-white font-bold text-sm">{t.name}</h4>
                            <p className="text-slate-500 text-xs">{t.role}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
