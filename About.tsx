import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">About Me<span className="text-primary">.</span></h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
            >
                <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl group">
                    <img 
                        src="https://picsum.photos/600/800?random=person" 
                        alt="Portrait" 
                        className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
                </div>
                {/* Decorative border outline that appears on hover */}
                <motion.div 
                    className="absolute inset-0 border-2 border-primary rounded-2xl z-0"
                    initial={{ x: 0, y: 0 }}
                    whileHover={{ x: 20, y: 20 }}
                ></motion.div>
            </motion.div>

            {/* Text */}
            <div className="space-y-6">
                <motion.h3 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-white"
                >
                    I design & build products that solve problems.
                </motion.h3>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-slate-400 text-lg leading-relaxed"
                >
                    With over 5 years of experience in the tech industry, I've had the privilege of working with startups and large corporations alike. My journey started with a curiosity for how things work on the web, which quickly turned into a passion for creating seamless user experiences.
                </motion.p>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-400 text-lg leading-relaxed"
                >
                    I specialize in the React ecosystem, but I'm a pragmatist at heart—I use the best tool for the job. When I'm not coding, you can find me hiking, taking photos, or experimenting with new recipes.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 gap-4 pt-4"
                >
                    <div>
                        <h4 className="text-4xl font-bold text-white font-display">5+</h4>
                        <p className="text-sm text-slate-500 uppercase tracking-wide">Years Experience</p>
                    </div>
                    <div>
                        <h4 className="text-4xl font-bold text-white font-display">50+</h4>
                        <p className="text-sm text-slate-500 uppercase tracking-wide">Projects Completed</p>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
