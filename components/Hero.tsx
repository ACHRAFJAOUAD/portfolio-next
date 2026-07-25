"use client";
import { portfolioData } from "@/data";
import TypeWriter from "./TypeWriter";

const json = `{
  "name": "${portfolioData.name}",
  "role": "${portfolioData.role}",
  "status": "open_to_work",
  "location": "Casablanca, Morocco",
  "education": "EST — Web & Mobile Dev",
  "skills": [
    "React", "Next.js", "Express.js",
    "Flutter", "Supabase", "n8n"
  ],
  "available": true
}`;

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-[#1e1e1e] px-4 py-12 sm:px-8 md:px-12 lg:px-16">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="font-mono text-[#6a9955] text-sm mb-2">// Hello, World!</p>
          <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            <span className="text-[#569cd6]">const</span>{" "}
            <span className="text-[#4ec9b0]">developer</span>{" "}
            <span className="text-white">=</span>
          </h1>
          <h2 className="font-mono text-xl sm:text-2xl md:text-3xl text-[#ce9178] mb-4">
            &quot;{portfolioData.name}&quot;
          </h2>
          <p className="font-mono text-[#858585] text-sm mb-1">
            <span className="text-[#c586c0]">type</span>{" "}
            <span className="text-[#4ec9b0]">Role</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-[#ce9178]">&quot;{portfolioData.role}&quot;</span>
          </p>
          <p className="font-mono text-[#6a9955] text-sm mt-4 mb-6">
            {`/* ${portfolioData.bio} */`}
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="/contact" className="btn font-mono text-sm bg-[#0e639c] hover:bg-[#1177bb] text-white rounded transition-colors">
              getInTouch()
            </a>
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="btn font-mono text-sm border border-[#3c3c3c] hover:border-[#569cd6] text-[#cccccc] hover:text-white rounded transition-colors">
              viewGithub()
            </a>
          </div>
        </div>

        <div className="bg-[#252526] rounded-lg border border-[#3c3c3c] overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] border-b border-[#3c3c3c]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="font-mono text-xs text-[#858585] ml-2">profile.json</span>
          </div>
          <div className="p-5 font-mono text-xs sm:text-sm leading-7 overflow-x-auto">
            <TypeWriter text={json} speed={18} />
          </div>
        </div>
      </div>
    </section>
  );
}
