import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-blue-400 mb-2">My Work</p>
        <h2 className="text-4xl font-bold mb-10">Featured Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className="text-sm text-cyan-400 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="text-sm text-gray-300 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
