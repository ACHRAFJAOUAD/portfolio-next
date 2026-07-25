import { portfolioData } from "@/data";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 z-40 flex w-full shrink-0 items-center justify-between bg-[#007acc] px-4 py-2 font-mono text-xs text-white">
      <div className="flex items-center gap-3">
        <span>⎇ main</span>
        <span className="hidden sm:inline">✓ 0 errors</span>
      </div>
      <span className="hidden md:inline">© {new Date().getFullYear()} {portfolioData.name} — All rights reserved</span>
      <div className="flex items-center gap-3">
        <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
        <span className="hidden sm:inline">UTF-8</span>
      </div>
    </footer>
  );
}
