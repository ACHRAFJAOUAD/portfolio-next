import { portfolioData } from "@/data";

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[#6a9955] text-sm mb-1">// recent work</p>
        <h2 className="font-mono text-2xl font-bold text-white mb-10">
          <span className="text-[#569cd6]">function</span>{" "}
          <span className="text-[#dcdcaa]">getProjects</span>
          <span className="text-white">() {"{"}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioData.projects.map((project, i) => (
            <div
              key={project.id}
              className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-5 hover:border-[#569cd6] transition-colors"
            >
              <p className="font-mono text-xs text-[#858585] mb-1">
                project_{String(i + 1).padStart(2, "0")}.ts
              </p>
              <h3 className="font-mono text-[#4ec9b0] font-bold mb-2">{project.title}</h3>
              <p className="font-mono text-xs text-[#6a9955] mb-4">{`// ${project.description}`}</p>
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
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#ce9178] hover:text-white transition-colors"
                >
                  → viewOnGithub()
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="font-mono text-white mt-8">{"}"}</p>
      </div>
    </section>
  );
}
