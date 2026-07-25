"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <>
      <nav className="relative z-50 w-full shrink-0 border-b border-[#3c3c3c] bg-[#1e1e1e]">
        <div className="flex h-12 w-full items-center justify-between px-4 sm:px-6">
          <Link href="/" className="text-[#569cd6] font-mono text-sm font-bold whitespace-nowrap">
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
            className="md:hidden text-[#858585] hover:text-white p-2"
            onClick={() => setOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Fullscreen overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-[#1e1e1e] flex flex-col transition-all duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex items-center justify-between px-4 h-12 border-b border-[#3c3c3c]">
          <Link href="/" className="text-[#569cd6] font-mono text-sm font-bold" onClick={() => setOpen(false)}>
            &gt;_ jawad.achraf
          </Link>
          <button className="text-[#858585] hover:text-white p-2" onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col flex-1 px-6 py-8 gap-2">
          {links.map((l, i) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              className={`font-mono text-lg py-4 border-b border-[#3c3c3c] transition-all duration-300 ${
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              } ${pathname === l.href ? "text-white" : "text-[#858585] hover:text-white"}`}
            >
              {pathname === l.href && <span className="text-[#569cd6] mr-2">→</span>}
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
