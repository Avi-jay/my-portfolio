import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiNumpy,
  SiPandas,
  SiFlask,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "Express.js", icon: <SiExpress size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "Java", icon: <FaJava size={40} /> },
  { name: "Python", icon: <FaPython size={40} /> },
  { name: "Numpy", icon: <SiNumpy size={40} /> },
  { name: "Pandas", icon: <SiPandas size={40} /> },
  { name: "Flask", icon: <SiFlask size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "GitHub", icon: <FaGithub size={40} /> },
];

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-blue-400 mb-2">My Skills</p>

        <h2 className="text-4xl font-bold mb-10">Technologies I Work With</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6
  flex flex-col items-center justify-center
  hover:border-blue-400 hover:-translate-y-2
  hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
  transition duration-300"
            >
              <div className="text-blue-400 mb-4">{skill.icon}</div>

              <p className="text-center font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
