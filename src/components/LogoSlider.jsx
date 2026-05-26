import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiPython,
  SiExpress,
  SiMongodb,
  SiNumpy,
} from "react-icons/si";

const logos = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiNumpy />, name: "NumPy" },
];

function LogoSlider() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      <div className="flex gap-16 animate-logo-slide whitespace-nowrap">
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-5xl text-blue-400 min-w-max"
          >
            {logo.icon}
            <span className="text-lg font-semibold">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoSlider;
