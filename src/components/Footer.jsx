import React from "react";
import { profile } from "../data";

export default function Footer(){
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4">
        <p> {profile.name} — Frontend Developer</p>
        <div className="mt-3 flex justify-center gap-6 text-[var(--muted)]">
          <a href={`mailto:${profile.email}`} className="hover:text-[var(--accent)]">{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
