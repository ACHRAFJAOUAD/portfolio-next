"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "home.ts", href: "/" },
  { label: "about.ts", href: "/about" },
  { label: "skills.ts", href: "/skills" },
  { label: "contact.ts", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full shrink-0 border-b border-[#3c3c3c] bg-[#1e1e1e]">
      <div className="flex h-12 w-full items-center justify-between overflow-x-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-[#569cd6] font-mono text-sm font-bold whitespace-nowrap mr-4">
          &gt;_ jawad.achraf
        </Link>

        <div className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`px-4 py-1 font-mono text-xs border-t-2 transition-colors whitespace-nowrap ${
                pathname === l.href
                  ? "border-[#569cd6] bg-[#252526] text-white"
                  : "border-transparent text-[#858585] hover:text-[#cccccc] hover:bg-[#2a2d2e]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-[#858585] hover:text-white font-mono text-lg"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#252526] border-t border-[#3c3c3c]">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block w-full text-left px-6 py-3 font-mono text-sm text-[#cccccc] hover:bg-[#2a2d2e]"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
