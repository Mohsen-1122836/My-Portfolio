import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data";

export default function About(){
  return (
    <div>
      <motion.h2 className="section-title" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:.6}}>
        About
      </motion.h2>
      <div className="section-accent" />
      <motion.p className="mt-6 text-[var(--muted)] leading-relaxed max-w-3xl mx-auto" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.2}}>
        Passionate Frontend Developer with hands-on experience in building responsive, user-friendly web applications using HTML, CSS, JavaScript, and React. Skilled at translating design mockups into fully functional websites while following modern best practices.
      </motion.p>
    </div>
  );
}
