import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">
      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 relative group"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-[#9d50bb] to-[#6e7dff] rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700" />
        <img
          src="/avatar.png"
          alt="Shirjeel Afzal"
          className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-white/10 object-cover z-10 shadow-2xl"
        />
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-sm font-mono text-[#edb1ff] tracking-[0.2em] uppercase mb-4">Software Engineer & AI Builder</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-['Sora'] font-bold tracking-tight leading-[1.05]">
          Shirjeel <span className="glowing-text">Afzal</span>
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-6 text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed"
      >
        Building scalable distributed systems and shipping AI&#8209;powered products — from resilient microservices to production LLM pipelines.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-10 flex gap-4"
      >
        <a
          href="#projects"
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#9d50bb] to-[#6e7dff] text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(157,80,187,0.5)] transition-shadow duration-400"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-8 py-3.5 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/20 transition-all duration-300"
        >
          Get in Touch
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} className="text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
