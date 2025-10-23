import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiBootstrap,
} from "react-icons/si";
import LogoLoop from "./LogoLoop";
import { motion } from "framer-motion";

export default function Skills() {
  const techLogos = [
    { node: <FaHtml5 className="text-orange-500" />, title: "HTML" },
    { node: <FaCss3Alt className="text-blue-500" />, title: "CSS" },
    { node: <FaJs className="text-yellow-400" />, title: "JavaScript" },
    { node: <FaReact className="text-cyan-400" />, title: "React" },
    { node: <SiNextdotjs className="text-white" />, title: "Next.js" },
    { node: <SiTypescript className="text-blue-400" />, title: "TypeScript" },
    { node: <SiTailwindcss className="text-sky-400" />, title: "Tailwind" },
    { node: <SiBootstrap className="text-purple-500" />, title: "Bootstrap" },
    {
      node: <img src="/images/Vite.js.svg" alt="Vite" className="w-10 h-10" />,
      title: "Vite",
    },
    {
      node: (
        <img
          src="/images/framer-motion.svg"
          alt="Framer Motion"
          className="w-5 h-5"
        />
      ),
      title: "Framer Motion",
    },
    {
      node: <img src="/images/Redux.svg" alt="Redux" className="w-10 h-10" />,
      title: "Redux",
    },
  ];

  return (
    <section
      id="skills"
      className=" py-12 sm:py-16 md:py-20 text-center text-[var(--text)] px-4 sm:px-6 overflow-hidden"
    >
      <motion.h2
        className="section-title text-3xl sm:text-4xl font-bold mt-6 sm:mb-8 text-[var(--primary)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Skills
      </motion.h2>
      <div className="section-accent" />

      <div className="py-12 sm:py-16">
        <LogoLoop
          logos={techLogos}
          speed={100} // adjust animation speed
          direction="left" // scroll direction
          logoHeight={60} // icon size
          gap={60} // space between icons
          pauseOnHover // optional pause on hover
          fadeOut={false} // remove fade borders
          scaleOnHover // add hover scale effect
        />
      </div>
    </section>
  );
}
