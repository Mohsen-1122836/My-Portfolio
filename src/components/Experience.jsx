import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data";

export default function Experience(){
  return (
    <div>
      <motion.h2 className="section-title" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}}>Experience</motion.h2>
      <div className="section-accent" />
      <div className="mt-8 space-y-6">
        {experiences.map((e,i)=>(
          <motion.div key={i} className="card" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.15}}>
            <div className="flex justify-between items-start">
              <div>
                <div className="text-lg font-semibold" style={{color:"var(--text)"}}>{e.role}</div>
                <div className="text-sm text-[var(--muted)]">{e.org}</div>
              </div>
              <div className="text-sm text-[var(--muted)]">{e.period}</div>
            </div>
            <ul className="mt-3 text-[var(--muted)] list-disc ml-5">
              {e.bullets.map((b,idx)=>(<li key={idx}>{b}</li>))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
