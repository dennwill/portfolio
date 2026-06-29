import { MdRocketLaunch } from "react-icons/md";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { HiOutlineSparkles } from "react-icons/hi2";
import { TbAutomation } from "react-icons/tb";

export default function Services() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen py-40" id="services">
        <span className="font-semibold text-4xl">My Services</span>
        <div className="text-center flex-1 w-11/12 max-w-6xl md:text-lg text-sm leading-9 py-6">
          <span>
            I offer a variety of services to help you achieve your goals. Here are some of the services I provide:
          </span>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 py-8 justify-items-center">
            <Card className="md:w-full w-3/4 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <CardHeader className="justify-center">
                <HiOutlineSparkles size={64} />
              </CardHeader>
              <CardContent className="font-semibold text-base">AI-Powered Web Applications</CardContent>
              <CardFooter>
                <p className="text-center text-sm leading-8">
                  I build full-stack web apps with intelligence built in — chatbots, semantic search, and generative
                  features powered by your own data.
                </p>
              </CardFooter>
            </Card>
            <Card className="md:w-full w-3/4 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <CardHeader className="justify-center">
                <MdRocketLaunch size={64} />
              </CardHeader>
              <CardContent className="font-semibold text-base">High-Converting Landing Pages</CardContent>
              <CardFooter>
                <p className="text-center text-sm leading-8">
                  I design blazing-fast, mobile-first landing pages and SaaS sites built to convert visitors and rank on
                  search.
                </p>
              </CardFooter>
            </Card>
            <Card className="md:w-full w-3/4 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <CardHeader className="justify-center">
                <TbAutomation size={64} />
              </CardHeader>
              <CardContent className="font-semibold text-base">Workflow Automation &amp; AI Integrations</CardContent>
              <CardFooter>
                <p className="text-center text-sm leading-8">
                  I connect your tools and wire AI into your existing workflows — automating repetitive work and giving
                  you your time back.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
