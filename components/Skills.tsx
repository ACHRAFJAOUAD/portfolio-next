import { portfolioData } from "@/data";

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-4 sm:px-8 md:px-12 lg:px-16 min-h-full">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-mono text-[#6a9955] text-sm mb-1">// my expertise</p>
          <h2 className="font-mono text-2xl font-bold text-white">
            <span className="text-[#569cd6]">const</span>{" "}
            <span className="text-[#4ec9b0]">skills</span>{" "}
            <span className="text-white">= {"{"}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((skill, i) => (
            <div
              key={skill.id}
              className="bg-[#252526] border border-[#3c3c3c] rounded-xl hover:border-[#569cd6] transition-colors shadow-lg shadow-black/40"
              style={{ padding: "2rem" }}
            >
              <p className="font-mono text-xs text-[#858585] mb-2">// {String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-mono text-[#4ec9b0] font-bold mb-4">{skill.title}:</h3>
              <div className="flex flex-wrap gap-2">
                {skill.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs px-3 py-1 bg-[#1e1e1e] text-[#ce9178] border border-[#3c3c3c] rounded-md"
                  >
                    &quot;{s}&quot;
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="font-mono text-white mt-6 text-center">{"}"}</p>
      </div>
    </section>
  );
}
