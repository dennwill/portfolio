import { FaCode } from "react-icons/fa6";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { IoSchoolSharp } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa";
import Image from "next/image";

export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen py-36" id="about-me">
        <span className="font-semibold text-4xl pb-6">About Me</span>

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
          <div className="flex-1 text-center lg:text-left w-3/4 max-w-4xl md:text-lg text-sm leading-9">
            <span>
              My name is <b>Dennis William.</b> I am currently pursuing Bachelors of Computer Science in BINUS
              International University as well as Software Engineering Degree in La Trobe University, with hands-on
              experience in administration, software development projects and organizational support. Personally, I
              would describe myself as a determined person always looking for opportunities to grow.
            </span>

            {/* Cards */}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 py-8 px-4 justify-items-center">
              {/* Card 1 */}
              <Card className="w-full shadow-sm border border-gray-100 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-50 active:scale-95">
                <CardHeader className="text-center pb-2">
                  {/* Increased icon size slightly and colored it for visual interest */}
                  <div className="flex justify-center text-3xl text-blue-600">
                    <FaCode />
                  </div>
                </CardHeader>
                <CardContent className="text-center font-semibold text-lg">Languages</CardContent>
                <CardFooter className="justify-center pb-6">
                  <span className="text-sm text-gray-600 text-center">HTML, CSS, JavaScript, React JS, Next JS</span>
                </CardFooter>
              </Card>

              {/* Card 2 */}
              <Card className="w-full shadow-sm border border-gray-100 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-50 active:scale-95">
                <CardHeader className="text-center pb-2">
                  <div className="flex justify-center text-3xl text-blue-600">
                    <IoSchoolSharp />
                  </div>
                </CardHeader>
                <CardContent className="text-center font-semibold text-lg">Education</CardContent>
                <CardFooter className="justify-center pb-6">
                  <span className="text-sm text-gray-600 text-center">Binus International University</span>
                </CardFooter>
              </Card>

              {/* Card 3 */}
              <Card className="w-full shadow-sm border border-gray-100 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-50 active:scale-95">
                <CardHeader className="text-center pb-2">
                  <div className="flex justify-center text-3xl text-blue-600">
                    <FaSuitcase />
                  </div>
                </CardHeader>
                <CardContent className="text-center font-semibold text-lg">Projects</CardContent>
                <CardFooter className="justify-center pb-6">
                  <span className="text-sm text-gray-600 text-center">Built more than 5 projects</span>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
