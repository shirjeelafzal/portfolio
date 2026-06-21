import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-mono text-[#6e7dff] tracking-[0.15em] uppercase mb-3">Get in Touch</p>
        <h2 className="text-4xl md:text-5xl font-['Sora'] font-bold mb-6">
          Let's <span className="glowing-text">Connect</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-lg mx-auto text-lg leading-relaxed">
          Always open to discussing new opportunities, AI experiments, or just talking tech.
        </p>

        <div className="flex justify-center gap-5 mb-8">
          <a href="https://github.com/shirjeelafzal" target="_blank" rel="noreferrer"
            className="p-4 glass-panel gradient-border hover:border-[#edb1ff]/40 hover:text-[#edb1ff] hover:shadow-[0_0_20px_rgba(237,177,255,0.15)] transition-all duration-300">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/shirjeelafzal" target="_blank" rel="noreferrer"
            className="p-4 glass-panel gradient-border hover:border-[#edb1ff]/40 hover:text-[#edb1ff] hover:shadow-[0_0_20px_rgba(237,177,255,0.15)] transition-all duration-300">
            <Linkedin size={24} />
          </a>
          <a href="mailto:shirjeelafzals@gmail.com"
            className="p-4 glass-panel gradient-border hover:border-[#edb1ff]/40 hover:text-[#edb1ff] hover:shadow-[0_0_20px_rgba(237,177,255,0.15)] transition-all duration-300">
            <Mail size={24} />
          </a>
        </div>

        <a href="mailto:shirjeelafzals@gmail.com"
          className="inline-block px-8 py-3.5 rounded-full bg-gradient-to-r from-[#9d50bb] to-[#6e7dff] text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(157,80,187,0.5)] transition-shadow duration-300">
          Say Hello →
        </a>
      </motion.div>

      <div className="mt-24 pt-8 border-t border-white/5 text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Shirjeel Afzal — Built with React, Three.js & Tailwind CSS</p>
      </div>
    </section>
  );
}
