import { motion } from 'framer-motion';

const skills = [
  { category: 'Backend', items: ['FastAPI', 'Django', 'Flask', 'Python'] },
  { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript'] },
  { category: 'AI / LLM', items: ['LangChain', 'LangGraph', 'OpenAI', 'RAG'] },
  { category: 'Infrastructure', items: ['AWS', 'Docker', 'Kafka', 'GitHub Actions'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL'] },
];

export default function About() {
  return (
    <section id="about" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-mono text-[#6e7dff] tracking-[0.15em] uppercase mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-['Sora'] font-bold mb-6 leading-tight">
            Engineer who <span className="glowing-text">builds & ships</span>
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
            <p>
              I'm a Software Engineer from Lahore, Pakistan with a Computer Engineering degree from <strong className="text-white font-medium">NUST</strong>. I specialize in building full-stack applications, distributed backend systems, and AI-powered products.
            </p>
            <p>
              At my current role, I work across a distributed microservices platform — designing event-driven architectures with Kafka, building full-stack features with FastAPI & React, and integrating Stripe billing workflows.
            </p>
            <p>
              Previously, I built an <strong className="text-white font-medium">AI-powered chat platform</strong> using LangChain & LangGraph where users could create custom agents with multi-step reasoning and tool orchestration.
            </p>
          </div>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-5"
        >
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-panel gradient-border p-5"
            >
              <h3 className="text-xs font-mono text-[#edb1ff] tracking-[0.15em] uppercase mb-3">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/5 hover:border-[#9d50bb]/30 hover:text-white transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
