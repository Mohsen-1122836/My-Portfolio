import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data";

export default function Projects() {
  return (
    <div className="px-4 sm:px-6">
      <motion.h2
        className="section-title text-3xl sm:text-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>
      <div className="section-accent" />
      <div className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card card flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
          >
            <img src={p.image} alt={p.title} className="project-img w-full" />
            <div className="mt-3 sm:mt-4 flex-1">
              <h3
                className="text-base sm:text-lg font-semibold"
                style={{ color: "var(--text)" }}
              >
                {p.title}
              </h3>
              <p className="text-sm sm:text-base text-[var(--muted)] mt-2 leading-relaxed">
                {p.description}
              </p>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="btn text-center  w-full sm:w-auto"
              >
                Live Demo
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="btn outline text-center w-full sm:w-auto"
              >
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
