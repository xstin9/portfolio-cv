import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

function Hero() {
  return (
    <section id="home" className="min-h-screen bg-white px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#1D1D1F]/80">My cv paul</p>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-[#0071E3]">
            Software Engineer · National-Level Athlete
          </p>
          <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.03em] text-[#1D1D1F] sm:text-6xl lg:text-8xl">
            Paul Mwa Guma
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#1D1D1F]/75 sm:text-xl">
            Information Technology student building software while competing at the South African National Athletics Championships.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="flex justify-center lg:justify-start"
            >
              <a href="/cv.pdf" download aria-label="Download CV" className="block w-max">
                <lottie-player
                  src="https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json"
                  background="transparent"
                  speed="1"
                  style={{ width: '220px', height: '220px' }}
                  loop
                  autoplay
                ></lottie-player>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-[#0071E3] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#005bb5]"
              >
                View Projects
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-[#1D1D1F] transition hover:border-[#0071E3] hover:text-[#0071E3]"
              >
                Download CV
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mx-auto w-full max-w-[360px]"
          >
            <div className="profile-float overflow-hidden rounded-[32px] border border-black/10 bg-[#F8FAFC] p-3 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,23,42,0.16)]">
              <img
                src="/profile.jpg"
                alt="Profile photo of Paul Mwa Guma"
                className="h-full w-full rounded-[28px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex flex-col items-start"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-[#1D1D1F]/70">
            Scroll to explore
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaChevronDown />
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
