import { RiReactjsLine } from "react-icons/ri";
import { SiPython, SiJavascript, SiNodedotjs, SiSql, SiCplusplus } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Python", icon: <SiPython className="text-4xl text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-4xl text-yellow-500" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-4xl text-green-500" /> },
    { name: "React.js", icon: <RiReactjsLine className="text-4xl text-cyan-500" /> },
    { name: "SQL", icon: <SiSql className="text-4xl text-blue-700" /> },
    { name: "C++", icon: <SiCplusplus className="text-4xl text-purple-500" /> },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="text-4xl font-bold text-center mb-10">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 rounded-2xl border-4 border-neutral-800 bg-neutral-900 p-6 hover:shadow-md hover:shadow-cyan-500/50 transition duration-300 ease-in-out"
          >
            {skill.icon}
            <span className="text-lg font-semibold text-neutral-200">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
