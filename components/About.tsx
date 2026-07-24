import { portfolioData } from "@/data";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div style={{paddingLeft: '3rem', paddingRight: '3rem'}}>
        <p className="font-mono text-[#6a9955] text-sm mb-2">// who am i?</p>
        <h2 className="font-mono text-2xl font-bold text-white mb-8">
          <span className="text-[#c586c0]">class</span>{" "}
          <span className="text-[#4ec9b0]">Developer</span>{" "}
          <span className="text-white">{"{"}</span>
        </h2>

        {/* Bio */}
        <p className="font-mono text-sm text-[#6a9955] mb-10">{`/* ${portfolioData.bio} */`}</p>

        {/* Experience */}
        <p className="font-mono text-[#569cd6] text-xs mb-4">// experience</p>
        <div className="space-y-8 mb-12">
          {portfolioData.experience.map((exp) => (
            <div key={exp.id} className="border-l-2 border-[#3c3c3c] pl-5">
              <h3 className="font-mono text-[#4ec9b0] font-bold">{exp.title}</h3>
              <p className="font-mono text-xs text-[#858585] mb-2">
                {exp.company} • {exp.location} | {exp.period}
              </p>
              <ul className="space-y-1">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="font-mono text-xs text-[#cccccc]">
                    <span className="text-[#6a9955] mr-2">→</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <p className="font-mono text-[#569cd6] text-xs mb-4">// education</p>
        <div className="space-y-4 mb-12">
          {portfolioData.education.map((edu) => (
            <div key={edu.id} className="border-l-2 border-[#3c3c3c] pl-5">
              <h3 className="font-mono text-[#4ec9b0] text-sm font-bold">{edu.degree}</h3>
              <p className="font-mono text-xs text-[#858585]">
                {edu.school}, {edu.location} • {edu.year}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <p className="font-mono text-[#569cd6] text-xs mb-4">// certifications</p>
        <div className="space-y-2">
          {portfolioData.certifications.map((cert, i) => (
            <p key={i} className="font-mono text-xs text-[#ce9178]">
              <span className="text-[#6a9955] mr-2">✓</span>
              {i === 0 ? (
                <a
                  href="https://www.credly.com/badges/e387628f-c114-4d6a-b44a-bdf61c508f70/linked_in_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline underline-offset-2 transition-colors"
                >
                  {cert}
                </a>
              ) : cert}
            </p>
          ))}
        </div>

        <p className="font-mono text-white mt-10">{"}"}</p>
      </div>
    </section>
  );
}
