import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-black/[0.06] bg-white/80 backdrop-blur-xl'
          : 'bg-white/70'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a href="#home" className="text-base font-semibold tracking-[-0.02em] text-[#1D1D1F]">
          Paul Mwa Guma
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-[#1D1D1F]/80 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-[#0071E3]">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/xstin9"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full p-2 text-[#1D1D1F] transition hover:bg-[#F5F5F7] hover:text-[#0071E3]"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/paul-mwa-guma-602712318"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-2 text-[#1D1D1F] transition hover:bg-[#F5F5F7] hover:text-[#0071E3]"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
