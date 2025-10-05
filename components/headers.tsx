import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";
import { Jost } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const jost = Jost({ subsets: ["latin"], weight: ["400", "700"] });

export default function Headers() {
  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center min-h-screen py-2 overflow-hidden bg-white"
        id="home"
      >
        <div aria-hidden="true" className="absolute inset-0 z-0">
          {/*A soft blue circle */}
          <div className="absolute top-64 left-24 w-96 h-96 bg-blue-100 rounded-full opacity-70 blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <Image
            src="/me2.jpg"
            alt="Dennis William"
            width={200}
            height={200}
            style={{ borderRadius: "50%", objectFit: "cover" }}
            className="shadow-lg"
          />
          <h1 className="font-semibold text-2xl mt-4">Hi, I&apos;m Dennis William</h1>
          <h3 className={`text-2xl md:text-4xl mt-4 ${jost.className}`}>
            Aspiring Software Engineering Undergraduate <br />
            based in Indonesia.
          </h3>
          <span className="text-slate-600 mt-4 md:text-sm text-xs max-w-lg">
            I am a computer science student and a software engineer enthusiast with a year of experience in web
            development.
          </span>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button variant="default" size="lg">
              <Link href="/#contact-me">Contact me ↗</Link>
            </Button>
            <Button variant="outline" size="lg">
              <a href="/CV.pdf" download="Dennis William - CV" className="flex items-center justify-center gap-3">
                Download my CV <FaDownload />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
