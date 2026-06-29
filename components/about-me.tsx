import { FaCode } from "react-icons/fa6";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { IoSchoolSharp } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa";
import ParallaxImage from "./parallax-image";

export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen py-36" id="about-me">
        <span className="font-semibold text-4xl pb-6">About Me</span>

        <div className="flex flex-col md:flex-row justify-center items-center px-6 gap-8 ">
          {/*Image Div*/}
          <div>
            <ParallaxImage width={250} height={250} src="/optimized/me.webp" alt="A photo of me" />
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
              <Card className="w-full shadow-sm border border-gray-100 dark:border-gray-800 dark:bg-gray-900 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-95">
                <CardHeader className="text-center pb-2">
                  {/* Increased icon size slightly and colored it for visual interest */}
                  <div className="flex justify-center text-3xl text-green-800 dark:text-green-400">
                    <FaCode />
                  </div>
                </CardHeader>
                <CardContent className="text-center font-semibold text-lg">Languages</CardContent>
                <CardFooter className="justify-center pb-6">
                  <span className="text-sm text-slate-500 text-center">
                    HTML, CSS, JavaScript, TypeScript, React JS, Next JS, Vue JS, React Native, Python{" "}
                  </span>
                </CardFooter>
              </Card>

              {/* Card 2 */}
              <Card className="w-full shadow-sm border border-gray-100 dark:border-gray-800 dark:bg-gray-900 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-95">
                <CardHeader className="text-center pb-2">
                  <div className="flex justify-center text-3xl text-green-800 dark:text-green-400">
                    <IoSchoolSharp />
                  </div>
                </CardHeader>
                <CardContent className="text-center font-semibold text-lg">Education</CardContent>
                <CardFooter className="justify-center pb-6">
                  <span className="text-sm text-slate-500 text-center">
                    Binus International University <br></br> La Trobe University
                  </span>
                </CardFooter>
              </Card>

              {/* Card 3 */}
              <Card className="w-full shadow-sm border border-gray-100 dark:border-gray-800 dark:bg-gray-900 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-95">
                <CardHeader className="text-center pb-2">
                  <div className="flex justify-center text-3xl text-green-800 dark:text-green-400">
                    <FaSuitcase />
                  </div>
                </CardHeader>
                <CardContent className="text-center font-semibold text-lg">Projects</CardContent>
                <CardFooter className="justify-center pb-6">
                  <span className="text-sm text-slate-500 text-center">
                    Built <b>10+</b> projects
                  </span>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
