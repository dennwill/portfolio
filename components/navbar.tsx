"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";

// const jost = Jost({ subsets: ["latin"], weight: ["400", "700"] });

export default function Navbar() {
  const links = [
    { href: "/#home", label: "Home" },
    { href: "/#about-me", label: "About Me" },
    { href: "/#services", label: "Services" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact-me", label: "Contact Me" },
  ];

  const [lineOpacity, setLineOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Fully visible once the user has scrolled half a viewport past the hero.
      const threshold = window.innerHeight * 0.5;
      setLineOpacity(Math.min(window.scrollY / threshold, 1));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-20 text-black dark:text-white transition-colors`}
      style={{
        boxShadow: `0 4px 6px -1px rgba(0, 0, 0, ${0.1 * lineOpacity}), 0 2px 4px -2px rgba(0, 0, 0, ${0.1 * lineOpacity})`,
      }}
    >
      <div
        className="absolute inset-0 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xs"
        style={{ opacity: lineOpacity }}
      />

      <div className="relative z-10 hidden md:flex flex-row py-8 text-center justify-center px-4 items-center">
        <div className="relative flex flex-row gap-6 items-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[500%] bg-[radial-gradient(ellipse_closest-side_at_center,_#ffffff_0%,_#ffffff_50%,_transparent_90%)] dark:bg-[radial-gradient(ellipse_closest-side_at_center,_#030712_0%,_#030712_50%,_transparent_90%)]"
            style={{ opacity: 1 - lineOpacity }}
          />
          <div className="relative z-10 flex flex-row gap-6 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors text-sm lg:text-base"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <MobileMenu links={links} />
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-px bg-gray-200 dark:bg-gray-800"
        style={{ opacity: lineOpacity }}
      />
    </nav>
  );
}
