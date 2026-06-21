import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experience = [
  {
    title: 'Software Engineer',
    company: 'CodingCops',
    period: 'Mar 2025 – Present',
    points: [
      'Building distributed microservices with FastAPI, enabling independent deployment and scaling across a SaaS platform.',
      'Designing event-driven workflows using Kafka and event buses for reliable async inter-service communication.',
      'Implementing subscription billing with Stripe — invoicing, plan management, and webhook-driven lifecycle events.',
      'Developing and deploying AWS Lambda functions for event-driven processing and automation.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    company: 'The Hexaa',
    period: 'Feb 2024 – Mar 2025',
    points: [
      'Built an AI-powered chat platform for creating custom agents with LangChain & LangGraph orchestration.',
      'Developed LLM-based pipelines for content tagging, classification, and moderation workflows.',
      'Created a Flask-based sales enablement platform with AI-generated contextual recommendations.',
      'Implemented CI/CD pipelines using GitHub Actions, Docker, and Nginx.',
    ],
  },
  {
    title: 'Python Developer Intern',
    company: 'MeisaSoft',
    period: 'Nov 2023 – Jan 2024',
    points: [
      'Built a full-stack eCommerce platform with Django/FastAPI, Stripe payments, and WebSocket real-time updates.',
      'Integrated Elasticsearch for search and Celery for background task processing.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-sm font-mono text-[#6e7dff] tracking-[0.15em] uppercase mb-3">Career</p>
        <h2 className="text-4xl md:text-5xl font-['Sora'] font-bold">
          Work <span className="glowing-text">Experience</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[16px] top-2 bottom-[-20px] w-px bg-gradient-to-b from-[#9d50bb]/60 to-[#6e7dff]/20" />

        <div className="space-y-12">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-14"
            >
              {/* Timeline dot */}
              <div className="absolute left-[7px] top-1.5 w-[18px] h-[18px] rounded-full bg-[#0a0a0b] border-2 border-[#9d50bb] shadow-[0_0_10px_rgba(157,80,187,0.5)] z-10 flex items-center justify-center">
                <Briefcase size={10} className="text-[#edb1ff]" />
              </div>

              <div className="glass-panel gradient-border p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                    <p className="text-[#edb1ff] text-sm font-medium">{job.company}</p>
                  </div>
                  <p className="text-xs font-mono text-gray-500 mt-1 sm:mt-0">{job.period}</p>
                </div>
                <ul className="space-y-3">
                  {job.points.map((point, j) => (
                    <li key={j} className="text-gray-400 text-[15px] leading-relaxed flex items-start">
                      <span className="text-[#6e7dff] shrink-0 mr-3 mt-[3px] text-xs">▶</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
