import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import Footers from "@/components/footers";
import Headers from "@/components/headers";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Services from "@/components/services";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Portfolio() {
  return (
    <>
      <div className={plusJakartaSans.className}>
        <Navbar />
        <Headers />
        <AboutMe />
        <Services />
        <Projects />
        <Contact />
        <Footers />
      </div>
    </>
  );
}
