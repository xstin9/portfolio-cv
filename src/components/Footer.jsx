function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-white px-6 py-6 text-sm text-[#1D1D1F]/60 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Paul Mwa Guma</p>
        <div className="flex gap-4">
          <a href="https://github.com/xstin9" target="_blank" rel="noreferrer" className="transition hover:text-[#0071E3]">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/paul-mwa-guma-602712318" target="_blank" rel="noreferrer" className="transition hover:text-[#0071E3]">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
