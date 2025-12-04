import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, Variants } from 'framer-motion';
import { ArrowDown, Download, Eye } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax for background
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Mouse Parallax Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const xPct = clientX / innerWidth - 0.5;
    const yPct = clientY / innerHeight - 0.5;
    x.set(xPct * 20);
    y.set(yPct * 20);
  }

  // Animation Variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
    show: { 
        y: 0, 
        opacity: 1, 
        filter: "blur(0px)",
        transition: { type: "spring", stiffness: 50, damping: 20 } 
    }
  };

  const titleWordVariants: Variants = {
      hidden: { opacity: 0, y: 50, rotateX: -90 },
      show: { 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          transition: { type: "spring", stiffness: 80, damping: 20 } 
      }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        <motion.div 
          style={{ x: mouseX, y: mouseY }} 
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" 
        />
        <motion.div 
          style={{ x: useSpring(useTransform(x, v => v * -1)), y: useSpring(useTransform(y, v => v * -1)) }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" 
        />
        <motion.div 
          style={{ y: y1 }}
          className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="text-left"
        >
          <motion.div variants={item} className="inline-block px-3 py-1 mb-6 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm">
            <span className="text-primary font-medium text-xs md:text-sm tracking-widest uppercase">Available for freelance</span>
          </motion.div>
          
          <div className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-8 perspective-1000">
            <div className="overflow-hidden flex flex-wrap gap-x-4">
                {["Building", "digital"].map((word, i) => (
                    <motion.span key={i} variants={titleWordVariants} className="inline-block origin-bottom-left">
                        {word}
                    </motion.span>
                ))}
            </div>
            <div className="overflow-hidden flex flex-wrap gap-x-4">
                <motion.span 
                    variants={titleWordVariants} 
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-accent animate-gradient-x"
                >
                    experiences
                </motion.span>
            </div>
            <div className="overflow-hidden flex flex-wrap gap-x-4">
                {["that", "matter."].map((word, i) => (
                    <motion.span key={i} variants={titleWordVariants} className="inline-block origin-bottom-left">
                        {word}
                    </motion.span>
                ))}
            </div>
          </div>
          
          <motion.p variants={item} className="text-slate-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
            I'm a Full Stack Developer & UI Designer passionate about crafting accessible, pixel-perfect user interfaces that blend art and code.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="relative group px-8 py-4 bg-primary text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/40 flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
              <span className="relative z-20">View Work</span>
              <Eye size={18} className="relative z-20 group-hover:translate-x-1 transition-transform"/>
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium transition-all hover:bg-white/10 hover:border-white/30 hover:scale-105 flex items-center gap-2"
            >
              Download CV
              <Download size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateX: 10, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
          style={{ y: y2, x: useTransform(mouseX, value => value * -0.5) }}
          className="hidden md:block relative perspective-1000"
        >
          {/* Abstract Composition */}
          <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-900/50 backdrop-blur-sm">
             <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black opacity-90 z-0"></div>
             <img 
               src="https://picsum.photos/800/800?grayscale&blur=2" 
               alt="Abstract tech" 
               className="relative z-0 object-cover w-full h-full opacity-60 mix-blend-overlay group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
             />
             
             {/* Floating Badge */}
             <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-12 right-12 bg-white/5 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl z-20"
             >
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <span className="text-white font-mono text-xs tracking-wider">SYSTEM ONLINE</span>
                </div>
             </motion.div>

              {/* Code Snippet visual */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-12 left-12 right-12 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-6 font-mono text-sm text-slate-300 shadow-2xl z-20 hover:border-primary/50 transition-colors"
              >
                <div className="flex gap-1.5 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <p className="text-purple-400">const <span className="text-yellow-400">future</span> = <span className="text-blue-400">await</span> <span className="text-primary">build</span>();</p>
                <p className="pl-0 mt-1">if (<span className="text-yellow-400">future</span>.isAwesome) {'{'}</p>
                <p className="pl-4"><span className="text-blue-400">return</span> <span className="text-green-400">"Let's work together"</span>;</p>
                <p>{'}'}</p>
              </motion.div>
          </div>
          
          {/* Decorative Elements behind */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -z-10 -top-20 -right-20 w-[120%] h-[120%] border border-dashed border-white/5 rounded-full" 
          />
          <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full border border-primary/20 rounded-3xl" />
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2 cursor-pointer hover:text-primary transition-colors"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to explore</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;