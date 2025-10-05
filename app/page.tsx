import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import Footers from "@/components/footers";
import Headers from "@/components/headers";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Services from "@/components/services";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Portfolio() {
  return (
    <>
      <div className={openSans.className}>
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
