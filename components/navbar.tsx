import { Jost } from "next/font/google";
import Link from "next/link";
const jost = Jost({ subsets: ["latin"], weight: ["400", "700"] });

export default function Navbar() {
  return (
    <>
      <div
        className={`flex flex-row border-b gap-6 py-8 text-center justify-center flex fixed top-0 w-full bg-white/70 backdrop-blur-xs filter drop-shadow-md z-20 ${jost.className}`}
      >
        <Link href="/#home" className="hover:text-sky-500 transition-colors">
          Home
        </Link>
        <Link href="/#about-me" className="hover:text-sky-500 transition-colors">
          About Me
        </Link>
        <Link href="/#services" className="hover:text-sky-500 transition-colors">
          Services
        </Link>
        <Link href="/#projects" className="hover:text-sky-500 transition-colors">
          Projects
        </Link>
        <Link href="/#contact-me" className="hover:text-sky-500 transition-colors">
          Contact Me
        </Link>
      </div>
    </>
  );
}
