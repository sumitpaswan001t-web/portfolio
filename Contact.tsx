import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Github, Linkedin, Twitter, Mail, CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setFormState('loading');
      // Simulate network request
      setTimeout(() => {
          setFormState('success');
          // Reset after 3 seconds
          setTimeout(() => setFormState('idle'), 3000);
      }, 1500);
  }

  return (
    <footer id="contact" className="bg-background pt-32 pb-12 relative overflow-hidden">
        {/* Background gradient splash */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[500px] bg-gradient-to-b from-surface to-background opacity-100 -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
            {/* Left Info */}
            <div className="relative">
                 {/* Decorative blob behind text */}
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Get in touch</span>
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                        Let's build something <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">extraordinary.</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-md leading-relaxed">
                        Whether you have a project in mind or just want to say hi, I'm always open to discussing new ideas and opportunities.
                    </p>
                </motion.div>
                
                <div className="flex gap-4">
                    {[
                        { icon: Github, href: "#" },
                        { icon: Linkedin, href: "#" },
                        { icon: Twitter, href: "#" },
                        { icon: Mail, href: "mailto:hello@example.com" }
                    ].map((item, i) => (
                        <motion.a 
                            key={i} 
                            href={item.href}
                            whileHover={{ y: -5, scale: 1.1 }}
                            className="w-14 h-14 flex items-center justify-center rounded-2xl bg-surface border border-white/10 text-slate-400 hover:text-white hover:bg-primary hover:border-primary hover:shadow-lg hover:shadow-primary/25 transition-all"
                        >
                            <item.icon size={24} />
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Right Form */}
            <motion.form 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 bg-surface/30 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl"
                onSubmit={handleSubmit}
            >
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group">
                        <input 
                            required
                            type="text" 
                            id="name"
                            className="peer w-full bg-background/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder-transparent"
                            placeholder="Name"
                        />
                        <label 
                            htmlFor="name" 
                            className="absolute left-4 top-4 text-slate-500 text-sm transition-all peer-focus:-top-3 peer-focus:left-2 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background peer-focus:px-2 peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:left-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-background peer-not-placeholder-shown:px-2 pointer-events-none"
                        >
                            Name
                        </label>
                    </div>
                    <div className="relative group">
                        <input 
                            required
                            type="email" 
                            id="email"
                            className="peer w-full bg-background/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder-transparent"
                            placeholder="Email"
                        />
                        <label 
                            htmlFor="email" 
                            className="absolute left-4 top-4 text-slate-500 text-sm transition-all peer-focus:-top-3 peer-focus:left-2 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background peer-focus:px-2 peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:left-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-background peer-not-placeholder-shown:px-2 pointer-events-none"
                        >
                            Email
                        </label>
                    </div>
                </div>
                <div className="relative group">
                    <textarea 
                        required
                        id="message" 
                        rows={4}
                        className="peer w-full bg-background/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none placeholder-transparent"
                        placeholder="Message"
                    ></textarea>
                    <label 
                        htmlFor="message" 
                        className="absolute left-4 top-4 text-slate-500 text-sm transition-all peer-focus:-top-3 peer-focus:left-2 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background peer-focus:px-2 peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:left-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-background peer-not-placeholder-shown:px-2 pointer-events-none"
                    >
                        Message
                    </label>
                </div>
                
                <button 
                    disabled={formState !== 'idle'}
                    type="submit"
                    className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group relative overflow-hidden ${
                        formState === 'success' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25'
                    }`}
                >
                    <AnimatePresence mode='wait'>
                        {formState === 'idle' && (
                            <motion.span 
                                key="idle"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                className="flex items-center gap-2"
                            >
                                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </motion.span>
                        )}
                        {formState === 'loading' && (
                            <motion.span 
                                key="loading"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                            >
                                <Loader2 size={20} className="animate-spin" />
                            </motion.span>
                        )}
                        {formState === 'success' && (
                            <motion.span 
                                key="success"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="flex items-center gap-2"
                            >
                                Message Sent! <CheckCircle size={20} />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </button>
            </motion.form>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
            <p>&copy; 2025 Folio.dev. All rights reserved.</p>
            <div className="flex gap-8">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;