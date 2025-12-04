import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }: { project: any }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
    const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    // Spotlight Gradient calculation
    const spotlightX = useTransform(mouseX, (val) => val + (ref.current?.offsetWidth || 0) / 2);
    const spotlightY = useTransform(mouseY, (val) => val + (ref.current?.offsetHeight || 0) / 2);

    return (
        <motion.div
            layout
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative bg-surface rounded-2xl overflow-hidden border border-white/5 hover:shadow-2xl hover:shadow-primary/10 transition-all perspective-1000"
        >
            {/* Spotlight Overlay */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-30"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                        650px circle at ${spotlightX}px ${spotlightY}px,
                        rgba(99, 102, 241, 0.15),
                        transparent 80%
                        )
                    `,
                }}
            />
            
            {/* Image */}
            <div className="aspect-video overflow-hidden relative z-10">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-8 relative z-20 bg-surface/95 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                            {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag: string) => (
                                <span key={tag} className="text-xs font-bold tracking-wide text-slate-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full group-hover:border-white/10 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <a href={project.link} className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-white text-slate-400 transition-all hover:scale-110">
                        <ExternalLink size={18} />
                    </a>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                </p>
                <button className="text-sm font-bold text-white flex items-center gap-2 hover:gap-3 transition-all group/btn">
                    View Case Study 
                    <ArrowUpRight size={16} className="text-primary group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
            </div>
        </motion.div>
    )
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web', 'Mobile', 'UI/UX'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter || (filter === 'Web' && p.category === 'UI/UX'));

  return (
    <section id="projects" className="py-32 bg-background relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-2 mb-2">
                    <span className="h-[1px] w-8 bg-primary"></span>
                    <span className="text-primary font-medium text-sm tracking-widest uppercase">Portfolio</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Selected Works</h2>
            </motion.div>
            
            {/* Filters */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-2 mt-8 md:mt-0 p-1 bg-surface/50 border border-white/5 rounded-full backdrop-blur-md"
            >
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all relative ${
                            filter === cat 
                            ? 'text-white' 
                            : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        {filter === cat && (
                            <motion.div 
                                layoutId="activeTab"
                                className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/25"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{cat}</span>
                    </button>
                ))}
            </motion.div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <AnimatePresence mode='popLayout'>
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;