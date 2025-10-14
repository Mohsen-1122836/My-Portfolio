import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data";

export default function Projects(){
  return (
    <div>
      <motion.h2 className="section-title" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}}>Projects</motion.h2>
      <div className="section-accent" />
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {projects.map((p,i)=>(
          <motion.div key={i} className="project-card card flex flex-col" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.12}}>
            <img src={p.image} alt={p.title} className="project-img" />
            <div className="mt-4 flex-1">
              <h3 className="text-lg font-semibold" style={{color:"var(--text)"}}>{p.title}</h3>
              <p className="text-[var(--muted)] mt-2">{p.description}</p>
            </div>
            <div className="mt-4 flex gap-3">
              <a href={p.demo} target="_blank" rel="noreferrer" className="btn">Live Demo</a>
              <a href={p.github} target="_blank" rel="noreferrer" className="btn outline">View Code</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
