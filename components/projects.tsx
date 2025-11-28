import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { FaGithub, FaShip, FaTasks } from "react-icons/fa";
import { Badge } from "./ui/badge";
import { TbPhotoQuestion } from "react-icons/tb";
import Link from "next/link";
import { Button } from "./ui/button";
import { LuExternalLink } from "react-icons/lu";
import { FaGlobe } from "react-icons/fa6";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen py-30" id="projects">
        <span className="font-semibold text-4xl">My Projects</span>
        <div className="text-center flex-1 w-11/12 max-w-6xl md:text-lg text-sm leading-9 py-6">
          <span>Throughout my two years of higher-level study, these are some of the projects I have worked on:</span>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 py-8 justify-items-center">
            <Card className="md:w-full w-3/4 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-50">
              <CardHeader className="justify-center">
                <Image src="/transporindo.png" alt="Transporindo Home Page" width={350} height={200} />
              </CardHeader>
              <CardContent>
                <span className="font-semibold">Transporindo</span>
                <p className="text-justify text-sm leading-8">
                  A CMS-powered, bilingual, and smoothly-animated SPA (Single-page Application) logistics website that I
                  made for my freelancing work.
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap items-center w-full">
                <span className="text-left font-semibold mr-2">Tech Stack:</span>
                <div>
                  <Badge className="m-1">NextJS</Badge>
                  <Badge className="m-1">TypeScript</Badge>
                  <Badge className="m-1">Sanity</Badge>
                  <Badge className="m-1">TailwindCSS</Badge>
                  <Badge className="m-1">Framer Motion</Badge>
                </div>
                <Button className="mt-16" variant="outline" size="sm">
                  <FaGlobe />
                  <Link href="https://www.transporindo.id">Visit Website</Link>
                  <LuExternalLink />
                </Button>
                {/* NextJS, React, Tailwind CSS, NodeJS, Supabase, */}
              </CardFooter>
            </Card>

            <Card className="md:w-full w-3/4 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-50">
              <CardHeader className="justify-center">
                <Image src="/docking-tracker.png" alt="Transporindo Home Page" width={350} height={200} />
              </CardHeader>
              <CardContent>
                <span className="font-semibold">Docking Tracker</span>
                <p className="text-justify text-sm leading-8">
                  A NextJS web application that tracks vessels which are currently docking.
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap items-center w-full">
                <span className="text-left font-semibold mr-2">Tech Stack:</span>
                <div>
                  {/* NextJS, React, Tailwind CSS, NodeJS, Supabase, */}
                  <Badge className="m-1">NextJS</Badge>
                  <Badge className="m-1">TypeScript</Badge>
                  <Badge className="m-1">React</Badge>
                  <Badge className="m-1">Tailwind CSS</Badge>
                  <Badge className="m-1">Supabase</Badge>
                </div>
                <Button className="mt-4" variant="outline" size="sm">
                  <FaGithub />
                  <Link href="https://github.com/dennwill/docking-tracker">Go to GitHub</Link>
                  <LuExternalLink />
                </Button>
              </CardFooter>
            </Card>

            <Card className="md:w-full w-3/4 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-50">
              <CardHeader className="justify-center">
                <Image src="/missing-imgbatch-checker.png" alt="Transporindo Home Page" width={350} height={200} />
              </CardHeader>
              <CardContent>
                <span className="font-semibold">IMGBatch Checker</span>
                <p className="text-justify text-sm leading-8">
                  A personal project designed to help identify missing image files in a DCIM folder, typically used by
                  iOS devices.
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap items-center w-full">
                <span className="text-left font-semibold mr-2 ">Tech Stack:</span>
                <div>
                  {/* NextJS, React, Tailwind CSS, NodeJS, Supabase, */}
                  <Badge className="m-1">HTML</Badge>
                  <Badge className="m-1">CSS</Badge>
                  <Badge className="m-1">JavaScript</Badge>
                </div>
                <Button className="mt-10" variant="outline" size="sm">
                  <FaGithub />
                  <Link href="https://github.com/dennwill/missing-imgbatch-checker">Go to GitHub</Link>
                  <LuExternalLink />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
