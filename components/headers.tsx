import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";
import { Jost } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const jost = Jost({ subsets: ["latin"], weight: ["400", "700"] });
export default function Headers() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2" id="home">
        <Image
          src="/me2.jpg"
          alt="Description of image"
          width={200} // Adjust as needed
          height={200} // Adjust as needed
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
        <h1 className="font-semibold text-2xl mt-4">Hi, I'm Dennis William</h1>
        <h3 className={`text-2xl md:text-4xl text-center mt-4 ${jost.className}`}>
          Aspiring Software Engineering Undergraduate <br />
          based in Indonesia.
        </h3>
        <span className="text-slate-600 mt-4 text-center md:text-sm text-xs">
          I am a computer science student and a software engineer enthusiast with a year of experience in web
          development.
        </span>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <Button variant="default" size="lg">
            <Link href="/#contact-me">Contact me ↗</Link>
          </Button>
          <Button variant="outline" className="w-48">
            <Link href="/CV.pdf" download="Dennis William - CV">
              <div className="flex flex-row">
                <span className="mr-4">Download my CV</span> <FaDownload />{" "}
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
