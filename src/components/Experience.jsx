import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "../data";

const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-8">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-start pt-6 md:pt-10 md:gap-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 self-start max-w-xs lg:max-w-sm md:w-full">
              <motion.div
                className="h-8 absolute left-[-8px] w-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--card-bg)" }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="h-3 w-3 rounded-full border-2"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent), var(--accent-2))",
                    borderColor: "var(--accent)",
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 var(--accent)",
                      "0 0 0 4px transparent",
                      "0 0 0 0 var(--accent)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
              </motion.div>
              <h3
                className="hidden md:block text-base md:pl-20 md:text-xl lg:text-2xl font-semibold"
                style={{ color: "var(--muted)" }}
              >
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 pr-4 md:pl-4 w-full">
              <h3
                className="md:hidden block text-lg mb-3 text-left font-semibold"
                style={{ color: "var(--muted)" }}
              >
                {item.title}
              </h3>
              {item.content}
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-1.5 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <div
            className="absolute inset-x-0 top-0 w-[2px] opacity-20"
            style={{ backgroundColor: "var(--muted)" }}
          />
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              background:
                "linear-gradient(to bottom, var(--accent), var(--accent-2))",
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default function Experience() {
  // Transform experiences data into Timeline format
  const timelineData = experiences.map((e) => ({
    title: e.period,
    content: (
      <motion.div
        className="card relative overflow-hidden group cursor-pointer"
        whileHover={{
          scale: 1.02,
          boxShadow: "0 0 20px rgba(0, 168, 214, 0.3)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, var(--accent), var(--accent-2))",
            opacity: 0.05,
          }}
        />

        <div className="relative z-10">
          <div
            className="text-base sm:text-lg font-semibold mb-1"
            style={{ color: "var(--text)" }}
          >
            {e.role}
          </div>
          <div className="text-sm mb-3" style={{ color: "var(--muted)" }}>
            {e.org}
          </div>
          <ul
            className="text-sm list-disc ml-4 space-y-1.5"
            style={{ color: "var(--muted)" }}
          >
            {e.bullets.map((b, idx) => (
              <motion.li
                key={idx}
                className="leading-relaxed"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {b}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    ),
  }));

  return (
    <div className="px-4 sm:px-6">
      <motion.h2
        className="section-title text-3xl sm:text-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Experience
      </motion.h2>
      <div className="section-accent" />
      <div className="mt-6 sm:mt-8">
        <Timeline data={timelineData} />
      </div>
    </div>
  );
}
