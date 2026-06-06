import profile from "../assets/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Animation */}
      <div className="hero-bg absolute inset-0 z-0 pointer-events-none">
        <div className="grid-animation"></div>

        <div className="floating-icons">
          <span>React</span>
          <span>Node</span>
          <span>MongoDB</span>
          <span>Python</span>
          <span>AI</span>
          <span>Tailwind</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-blue-400 mb-3">Hi, I'm</p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Avishka <span className="text-blue-400">Jayakodi</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-6">
            Full Stack & AI Developer
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed">
            I build intelligent web applications using MERN stack, Python,
            Machine Learning, and modern UI technologies.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-blue-400 rounded-full hover:bg-blue-400/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full"></div>
            <img
              src={profile}
              alt="Avishka"
              className="relative w-80 h-80 object-cover rounded-full border-4 border-blue-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;