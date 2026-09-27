"use client";

import { portfolioData } from "@/data";
import { useState, useRef, useEffect } from "react";

const categories = ["Web Apps", "Mobile Apps", "Websites", "Automation & AI"];

type Project = (typeof portfolioData.projects)[number];

function ProjectLinks({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const p = project as Project & {
    links?: { label: string; url: string }[];
    link?: string;
  };

  if (p.github) {
    return (
      <a href={p.github} target="_blank" rel="noopener noreferrer"
        className="font-mono text-xs text-[#ce9178] hover:text-white transition-colors">
        → viewOnGithub()
      </a>
    );
  }

  if (p.links && p.links.length > 0) {
    return (
      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-xs text-[#ce9178] hover:text-white transition-colors flex items-center gap-1"
        >
          → viewLiveSite() {open ? "▲" : "▼"}
        </button>
        {open && (
          <div className="absolute bottom-full mb-1 left-0 bg-[#1e1e1e] border border-[#3c3c3c] rounded shadow-lg z-10 min-w-max">
            {p.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-mono text-xs px-3 py-2 text-[#858585] hover:text-white hover:bg-[#252526] transition-colors border-b border-[#3c3c3c] last:border-0"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (p.link) {
    return (
      <a href={p.link} target="_blank" rel="noopener noreferrer"
        className="font-mono text-xs text-[#ce9178] hover:text-white transition-colors">
        → viewLiveSite()
      </a>
    );
  }

  return null;
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = selectedCategory
    ? portfolioData.projects.filter((p) => p.category === selectedCategory)
    : [];

  return (
    <section id="projects" className="py-12 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[#6a9955] text-sm mb-1">// recent work</p>
        <h2 className="font-mono text-2xl font-bold text-white mb-10">
          <span className="text-[#569cd6]">function</span>{" "}
          <span className="text-[#dcdcaa]">getProjects</span>
          <span className="text-white">() {"{"}</span>
        </h2>

        {!selectedCategory ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((category) => (
              <div
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-8 cursor-pointer hover:border-[#569cd6] transition-colors flex flex-col items-center justify-center text-center group"
              >
                <div className="font-mono text-[#4ec9b0] text-xl font-bold mb-2 group-hover:text-[#569cd6] transition-colors">
                  {category}
                </div>
                <p className="font-mono text-xs text-[#6a9955]">
                  {`// view ${category.toLowerCase()} projects`}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="font-mono text-sm text-[#ce9178] hover:text-white transition-colors mb-6 flex items-center"
            >
              ← return toCategories()
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProjects.map((project, i) => (
                <div
                  key={project.id}
                  className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-5 hover:border-[#569cd6] transition-colors flex flex-col"
                >
                  <p className="font-mono text-xs text-[#858585] mb-1">
                    project_{String(i + 1).padStart(2, "0")}.ts
                  </p>
                  <h3 className="font-mono text-[#4ec9b0] font-bold mb-2">{project.title}</h3>
                  <p className="font-mono text-xs text-[#6a9955] mb-4 flex-1">{`// ${project.description}`}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2 py-0.5 bg-[#1e1e1e] text-[#569cd6] border border-[#3c3c3c] rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <ProjectLinks project={project} />
                </div>
              ))}
              {filteredProjects.length === 0 && (
                <p className="font-mono text-[#858585] text-sm">
                  // No projects found in this category.
                </p>
              )}
            </div>
          </div>
        )}

        <p className="font-mono text-white mt-8">{"}"}</p>
      </div>
    </section>
  );
}
