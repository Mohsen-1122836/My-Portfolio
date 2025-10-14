import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-b overflow-hidden"
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Name with subtle gradient */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-3 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
          Mohsen Montaser
        </h1>

        {/* Role + info */}
        <p className="text-gray-400 text-lg md:text-xl max-w-xl">
          Frontend Developer <span className="text-gray-600">|</span> React.js
          <br />
          Based in Cairo, Egypt —{" "}
          <a
            href="mailto:mohsenmontaser33@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            mohsenmontaser33@gmail.com
          </a>
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all shadow-[0_0_15px_-5px_rgba(34,211,238,0.4)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold transition-all"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      
    </section>
  );
}
