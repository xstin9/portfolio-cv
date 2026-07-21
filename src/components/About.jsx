import { motion } from 'framer-motion';

const stats = [
  { value: 'National Championships', label: 'Qualified & Competed' },
  { value: '3 Events', label: '110m Hurdles, 400m Hurdles, Triple Jump' },
  { value: '2027', label: 'Expected Graduation, North-West University' },
];

function About() {
  return (
    <section id="about" className="bg-[#F5F5F7] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#1D1D1F] sm:text-4xl lg:text-5xl">
            Motivated Information Technology student with practical experience designing and developing modern web applications using React, JavaScript, Firebase, C#, Java, SQL, HTML and CSS.
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#1D1D1F]/75">
            Passionate about building software that solves real-world problems through clean, scalable solutions.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              className="rounded-[24px] border border-black/[0.06] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              <p className="text-3xl font-semibold tracking-[-0.02em] text-[#1D1D1F] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-[#1D1D1F]/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
