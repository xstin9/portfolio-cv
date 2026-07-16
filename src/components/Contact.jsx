import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="bg-[#1D1D1F] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0071E3]">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            Let’s build something.
          </h2>
          <a href="mailto:paulmwa44@gmail.com" className="mt-8 inline-flex items-center gap-3 text-lg font-medium text-white/90 transition hover:text-[#0071E3]">
            <FaEnvelope />
            paulmwa44@gmail.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
          className="flex flex-wrap gap-3"
        >
          <a
            href="https://github.com/xstin9"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#0071E3] hover:text-[#0071E3]"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/paul-mwa-guma-602712318"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#0071E3] hover:text-[#0071E3]"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center rounded-full bg-[#0071E3] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#005bb5]"
          >
            Download Full CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
