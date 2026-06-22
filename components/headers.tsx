import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";
import { Jost } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import InteractiveDotGrid from "@/components/interactive-dot-grid";
import "animate.css";

const jost = Jost({ subsets: ["latin"], weight: ["400", "700"] });

export default function Headers() {
  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center min-h-screen pt-20 pb-2 overflow-hidden bg-white dark:bg-gray-950"
        id="home"
      >
        <div aria-hidden="true" className="absolute inset-0 z-0">
          {/*A soft blue circle */}
          <div className="absolute top-64 left-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          {/* Cursor-reactive dot grid */}
          <InteractiveDotGrid />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <div className="p-[3px] rounded-full dark:bg-white drop-shadow-xl animate__animated animate__fadeInDown transition-transform duration-300 ease-out hover:scale-110">
            <Image
              src="/me2.jpg"
              alt="Dennis William"
              width={200}
              height={200}
              className="rounded-full object-cover border-none"
              style={{ display: "block" }}
            />
          </div>
          <div className="mt-4 flex flex-col items-center px-10 py-10 bg-[radial-gradient(ellipse_closest-side_at_center,_#ffffff_0%,_#ffffff_50%,_transparent_90%)] dark:bg-[radial-gradient(ellipse_closest-side_at_center,_#030712_0%,_#030712_50%,_transparent_90%)]">
            <h1 className="font-bold text-2xl animate__animated animate__fadeInDown animate__delay-1s">
              Hi, I&apos;m Dennis William
            </h1>
            <h3
              className={`font-light text-2xl md:text-4xl mt-4 ${"jost.className"} animate__animated animate__fadeInDown animate__delay-2s`}
            >
              Aspiring Software Engineering Undergraduate <br />
              based in Indonesia.
            </h3>
            <span className="text-slate-500 mt-4 md:text-sm text-xs max-w-lg animate__animated animate__fadeInDown animate__delay-3s">
              I am a computer science student and a software engineer enthusiast with a year of experience in web
              development.
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate__animated animate__fadeIn animate__delay-4s">
            <Button
              variant="default"
              size="lg"
              className="cursor-pointer transition-transform duration-300 ease-out hover:scale-110 hover:bg-primary"
            >
              <Link href="/#contact-me">Contact me ↗</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="cursor-pointer transition-transform duration-300 ease-out hover:scale-110 bg-white dark:bg-gray-950 hover:bg-white dark:hover:bg-gray-950"
            >
              <a
                href="/Dennis William - CV.pdf"
                download="Dennis William - CV"
                className="flex items-center justify-center gap-3"
              >
                Download my CV <FaDownload />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
