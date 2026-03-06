import { Jost } from "next/font/google";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";

const jost = Jost({ subsets: ["latin"], weight: ["400", "700"] });

export default function Navbar() {
  const links = [
    { href: "/#home", label: "Home" },
    { href: "/#about-me", label: "About Me" },
    { href: "/#services", label: "Services" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact-me", label: "Contact Me" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full bg-white/70 dark:bg-gray-950/70 backdrop-blur-xs filter drop-shadow-md z-20 border-b dark:border-gray-800 text-black dark:text-white transition-colors ${jost.className}`}
    >
      <div className="hidden md:flex flex-row gap-6 py-8 text-center justify-center px-4 items-center">
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

      <MobileMenu links={links} />
    </nav>
  );
}
