function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0F172A]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">AK</h1>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#home" className="hover:text-blue-400">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#skills" className="hover:text-blue-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
