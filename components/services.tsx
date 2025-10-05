import { MdOutlineWeb } from "react-icons/md";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { IoIosApps } from "react-icons/io";
import { FaPython } from "react-icons/fa6";

export default function Services() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen py-30" id="services">
        <span className="font-semibold text-4xl">My Services</span>
        <div className="text-center flex-1 w-11/12 max-w-6xl md:text-lg text-sm leading-9 py-6">
          <span>
            I offer a variety of services to help you achieve your goals. Here are some of the services I provide:
          </span>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 py-8 justify-items-center">
            <Card className="md:w-full w-3/4">
              <CardHeader className="justify-center">
                <IoIosApps size={64} />
              </CardHeader>
              <CardContent className="font-semibold">Full-Stack CRUD Web Application </CardContent>
              <CardFooter>
                <p className="text-justify text-sm leading-8">
                  I can develop a complete web application with Create, Read, Update, and Delete (CRUD) functionality.
                </p>
              </CardFooter>
            </Card>
            <Card className="md:w-full w-3/4">
              <CardHeader className="justify-center">
                <MdOutlineWeb size={64} />
              </CardHeader>
              <CardContent className="font-semibold">Landing Page Development</CardContent>
              <CardFooter>
                <p className="text-justify text-sm leading-8">
                  I can create a visually appealing and responsive landing page to showcase your product, service, or
                  event.
                </p>
              </CardFooter>
            </Card>
            <Card className="md:w-full w-3/4">
              <CardHeader className="justify-center">
                <FaPython size={64} />
              </CardHeader>
              <CardContent className="font-semibold">Custom Scripting and Automation</CardContent>
              <CardFooter>
                <p className="text-justify text-sm leading-8">
                  I can write custom scripts to automate repetitive tasks, streamline workflows, and improve efficiency.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
