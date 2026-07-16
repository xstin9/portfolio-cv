import { motion } from 'framer-motion';

const coursework = [
  'OOP',
  'Data Structures & Algorithms',
  'Software Engineering',
  'Database Systems',
  'Computer Networks',
  'Web Development',
  'Systems Analysis & Design',
];

function Education() {
  return (
    <section id="education" className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[24px] border border-black/[0.06] bg-[#F5F5F7] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.04)] md:flex-row md:items-center md:justify-between md:p-10 lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0071E3]">Education</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#1D1D1F] sm:text-3xl">
            North-West University
          </h2>
          <p className="mt-2 text-lg text-[#1D1D1F]/75">BSc Information Technology</p>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-[#1D1D1F]/60">
            Expected Graduation · 2027
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1D1D1F]/60">Relevant Coursework</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {coursework.map((course) => (
              <span key={course} className="rounded-full border border-black/[0.08] bg-white px-3 py-2 text-sm font-medium text-[#1D1D1F]/80">
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
