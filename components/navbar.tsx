"use client";

import { Jost } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const jost = Jost({ subsets: ["latin"], weight: ["400", "700"] });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/#home", label: "Home" },
    { href: "/#about-me", label: "About Me" },
    { href: "/#services", label: "Services" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact-me", label: "Contact Me" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full bg-white/70 backdrop-blur-xs filter drop-shadow-md z-20 border-b ${jost.className}`}
      >
        <div className="hidden md:flex flex-row gap-6 py-8 text-center justify-center px-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-sky-500 transition-colors text-sm lg:text-base"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden flex items-center justify-between px-4 py-4">
          <div className="text-lg font-bold">Portfolio</div>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:text-sky-500 transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t">
            <div className="flex flex-col gap-3 px-4 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-sky-500 transition-colors py-2 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
