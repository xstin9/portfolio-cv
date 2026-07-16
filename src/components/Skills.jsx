import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'JavaScript', 'C#', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks',
    items: ['React', 'Firebase Auth', 'Google Auth', 'REST APIs'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Cisco Packet Tracer'],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-[#F5F5F7] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0071E3]">Toolkit</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-[#1D1D1F] sm:text-4xl lg:text-5xl">
            Building with modern tools and a practical, product-minded approach.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              className="rounded-[24px] border border-black/[0.06] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
            >
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#1D1D1F]">{group.title}</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-black/[0.08] bg-[#F5F5F7] px-3 py-2 text-sm font-medium text-[#1D1D1F]/80">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
