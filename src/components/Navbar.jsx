import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "#hero";
      const scrollY = window.scrollY + 100; // offset for navbar height

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          current = `#${section.getAttribute("id")}`;
        }
      });

      // ✅ Only set "Contact" when you're actually at the bottom
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
        current = "#contact";
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // smooth offset for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-[var(--bg)]/90 bg-opacity-80 backdrop-blur-md shadow-md flex items-center justify-between px-8 py-4"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Left: Logo */}
      <a
        href="#hero"
        className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        Mohsen
      </a>

      {/* Center: Links */}
      <ul className="hidden md:flex gap-8 text-[var(--text)] font-medium">
        {links.map((link) => (
          <li key={link.href} className="relative group">
            <a
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`transition-colors ${
                active === link.href
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              {link.label}
            </a>
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                active === link.href ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </li>
        ))}
      </ul>

      {/* Right: Social Icons */}
      <div className="flex items-center gap-4 text-xl text-[var(--text)]">
        <a
          href="https://github.com/Mohsen-1122836"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--primary)] transition-transform hover:scale-110"
        >
          <FaGithub className="text-3xl hover:text-gray-800 duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/mohsen-montaser-244361350/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--primary)] transition-transform hover:scale-110"
        >
          <FaLinkedin className="text-3xl hover:text-blue-500 duration-300" />
        </a>
        <a
          href="https://wa.me/201114910513"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--primary)] transition-transform hover:scale-110"
        >
          <FaWhatsapp className="text-3xl hover:text-green-500 duration-300" />
        </a>
      </div>
    </motion.nav>
  );
}
