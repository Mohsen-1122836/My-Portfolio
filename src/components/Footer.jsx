import React from "react";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-sm sm:text-base text-center">
          {" "}
          {profile.name} — Frontend Developer
        </p>
        <div className="mt-3 sm:mt-4 flex  justify-center items-center gap-3 sm:gap-6 text-[var(--muted)] text-sm sm:text-base">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-[var(--accent)] transition-colors break-all text-center"
          >
            {profile.email}
          </a>
          <span className="  text-gray-600">|</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
          >
            LinkedIn
          </a>
          <span className="  text-gray-600">|</span>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
