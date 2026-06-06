import { useEffect, useState } from "react";

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  const images = project.images || [];

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300">
      <div className="relative h-48 w-full overflow-hidden bg-slate-900">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={project.title}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out ${
              currentImage === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          />
        ))}

        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-500 ${
                currentImage === index ? "w-5 bg-cyan-400" : "bg-white/40"
              }`}
            ></span>
          ))}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

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
            target="_blank"
            className="text-sm text-cyan-400 hover:underline"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            className="text-sm text-gray-300 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
