const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Python",
  "Flask",
  "Machine Learning",
  "Git",
  "GitHub",
];

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-blue-400 mb-2">My Skills</p>
        <h2 className="text-4xl font-bold mb-10">Technologies I Work With</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;