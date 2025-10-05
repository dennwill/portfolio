import { FaCode } from "react-icons/fa6";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { IoSchoolSharp } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa";
import Image from "next/image";
export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen py-36" id="about-me">
        <span className="font-semibold text-4xl">About Me</span>

        <div className="flex flex-col md:flex-row justify-center items-center px-6 gap-8">
          {/*Image Div*/}
          <div>
            <Image
              width={250}
              height={250}
              src="/me.JPG"
              alt="A photo of me"
              className="rounded-xl filter drop-shadow-lg"
            />
          </div>
          <div className="flex-1 text-justify w-3/4 max-w-4xl md:text-lg text-sm leading-9">
            <span>
              My name is Dennis William. I am currently pursuing Bachelors of Computer Science in BINUS International
              University as well as Software Engineering Degree in La Trobe University, with hands-on experience in
              administration, software development projects and organizational support. Personally, I would describe
              myself as a determined person always looking for opportunities to grow.
            </span>

            {/* Cards */}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 py-4 justify-items-center">
              <Card className="w-full">
                <CardHeader className="text-center">
                  <FaCode />
                </CardHeader>
                <CardContent className="font-semibold md:text-lg text-xl">Languages </CardContent>
                <CardFooter>
                  <span className="text-sm">HTML, CSS, JavaScript, React JS, Next JS</span>
                </CardFooter>
              </Card>
              <Card className="w-full">
                <CardHeader className="text-center">
                  <IoSchoolSharp />
                </CardHeader>
                <CardContent className="font-semibold md:text-lg text-xl">Education</CardContent>
                <CardFooter>
                  <span className="text-sm">Binus International University</span>
                </CardFooter>
              </Card>
              <Card className="w-full">
                <CardHeader className="text-center">
                  <FaSuitcase />
                </CardHeader>
                <CardContent className="font-semibold md:text-lg text-xl">Projects</CardContent>
                <CardFooter>
                  <span className="text-sm">Built more than 3 projects</span>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
