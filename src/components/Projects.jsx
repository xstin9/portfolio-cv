import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Athlete Performance Tracker',
    description:
      'A comprehensive athlete management platform to help athletes monitor performance, manage training and achieve long-term goals.',
    features: [
      'Secure email & Google authentication',
      'AI-powered training assistant',
      'Performance dashboard',
      'Personal best tracking',
    ],
    tech: ['React', 'JavaScript', 'Firebase', 'Git'],
    repo: 'https://github.com/xstin9',
    demo: '#',
  },
  {
    title: 'React Notes Application',
    description:
      'A secure cloud-based note management app for authenticated users to create, edit and organise notes.',
    features: ['Cloud note storage', 'Protected user access', 'Fast search and organise'],
    tech: ['React', 'Firebase', 'JavaScript'],
    repo: 'https://github.com/xstin9',
    demo: null,
  },
  {
    title: 'Tutors Application',
    description:
      'A tutoring platform connecting students with tutors for university modules.',
    features: ['Student-tutor matching', 'Module-focused support', 'Simple onboarding flow'],
    tech: ['C#', 'Object-Oriented Programming'],
    repo: 'https://github.com/xstin9',
    demo: null,
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-white px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0071E3]">Selected work</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[#1D1D1F] sm:text-4xl lg:text-5xl">
            Products shaped by real needs, thoughtful UX and reliable engineering.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="flex h-full flex-col rounded-[24px] border border-black/[0.06] bg-[#F5F5F7] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#1D1D1F]">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#1D1D1F]/75">{project.description}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} repository`}
                    className="rounded-full p-2 text-[#1D1D1F] transition hover:text-[#0071E3]"
                  >
                    <FaGithub size={18} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} demo`}
                      className="rounded-full p-2 text-[#1D1D1F] transition hover:text-[#0071E3]"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <ul className="mt-6 space-y-2 text-sm leading-7 text-[#1D1D1F]/70">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0071E3]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full border border-black/[0.08] bg-white px-3 py-1.5 text-sm font-medium text-[#1D1D1F]/80">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
