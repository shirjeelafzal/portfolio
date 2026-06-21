import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const projects = [
  {
    title: 'Fikar',
    subtitle: 'Organizational Memory AI',
    description: 'Fikar captures critical decisions, risks, and action items from everyday conversations, ensuring teams never lose track of what matters. Engineered as an advanced AI platform, it transforms unstructured meeting transcripts and communications into a fully searchable, dynamic knowledge graph.',
    tech: ['FastAPI', 'LangChain', 'React', 'Docker', 'PostgreSQL'],
    status: 'Live',
    statusColor: '#4ade80',
    link: 'https://www.fikar.ai/'
  },
  {
    title: 'IQPrompt',
    subtitle: 'SaaS Application',
    description: 'A comprehensive full-stack SaaS platform designed for AI engineers to manage, test, and deploy complex LLM prompts. Features include A/B testing, version control, analytics dashboards, and integrated Stripe billing for scalable subscription management.',
    tech: ['FastAPI', 'React', 'Stripe', 'OpenAI', 'PostgreSQL'],
    status: 'Live',
    statusColor: '#4ade80',
    link: 'https://iqprompt.ai/'
  },
  {
    title: 'AI Chat Platform',
    subtitle: 'Agent Framework',
    description: 'A highly extensible framework for deploying custom autonomous AI agents. Built around sophisticated slash-command workflows, multi-step reasoning capabilities, and dynamic tool orchestration to handle complex, specialized enterprise tasks in real-time.',
    tech: ['Django', 'LangChain', 'LangGraph', 'WebSockets', 'Redis'],
    status: 'Completed',
    statusColor: '#edb1ff',
    link: '#'
  },
  {
    title: 'AI Call Center',
    subtitle: 'Voice AI Infrastructure',
    description: 'An automated, intelligent call center infrastructure powered by Voice AI. It handles inbound customer interactions, performs real-time sentiment analysis, routes complex queries to human agents, and summarizes conversations for quality assurance.',
    tech: ['FastAPI', 'OpenAI API', 'Python', 'Twilio'],
    status: 'Completed',
    statusColor: '#edb1ff',
    link: '#'
  },
  {
    title: 'Sales Enablement',
    subtitle: 'Internal Tooling',
    description: 'A contextual recommendation engine providing AI-generated insights for sales representatives. It analyzes historical deal data and real-time client communications to proactively suggest talking points, relevant case studies, and optimal follow-up strategies.',
    tech: ['Flask', 'React', 'OpenAI', 'Pinecone'],
    status: 'Completed',
    statusColor: '#edb1ff',
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 overflow-hidden w-full relative">
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-[#6e7dff] tracking-[0.15em] uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-['Sora'] font-bold mb-4">
            Featured <span className="glowing-text">Work</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">Things I've built with full-stack engineering and AI.</p>
        </motion.div>
      </div>

      <div className="w-full relative pb-16 px-4">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={1}
          mousewheel={{ forceToAxis: true }}
          keyboard={{ enabled: true }}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[EffectCoverflow, Pagination, Mousewheel, Keyboard]}
          className="w-full !pt-10 !pb-20"
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i} className="!w-[85vw] sm:!w-[500px] md:!w-[550px]">
              <div className="glass-panel gradient-border p-8 md:p-10 group hover:border-[#9d50bb]/50 transition-all duration-500 flex flex-col relative overflow-hidden h-[400px]">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#9d50bb]/0 to-[#6e7dff]/0 group-hover:from-[#9d50bb]/10 group-hover:to-[#6e7dff]/10 transition-all duration-700 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-['Sora'] font-bold text-white group-hover:text-[#edb1ff] transition-colors duration-300">{project.title}</h3>
                      <p className="text-sm text-[#6e7dff] mt-1">{project.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono px-3 py-1.5 rounded-full border" style={{ color: project.statusColor, borderColor: project.statusColor + '40', backgroundColor: project.statusColor + '15' }}>
                        {project.status}
                      </span>
                      {project.link && project.link !== '#' && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                          <ExternalLink size={18} className="text-gray-400 group-hover:text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-[15px] leading-relaxed mb-8 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="text-[13px] font-mono px-3.5 py-1.5 rounded-full bg-[#0a0a0b]/50 border border-white/10 text-gray-300 group-hover:border-[#9d50bb]/30 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination override styles */}
      <style>{`
        .swiper-pagination-bullet {
          background-color: #6e7dff;
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          background-color: #edb1ff;
          opacity: 1;
          box-shadow: 0 0 10px rgba(237, 177, 255, 0.5);
        }
      `}</style>
    </section>
  );
}
