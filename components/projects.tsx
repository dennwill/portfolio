import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { FaGithub, FaShip, FaTasks } from "react-icons/fa";
import { Badge } from "./ui/badge";
import { TbPhotoQuestion } from "react-icons/tb";
import Link from "next/link";
import { Button } from "./ui/button";
import { LuExternalLink } from "react-icons/lu";
import { FaGlobe, FaHeart, FaStar, FaVuejs } from "react-icons/fa6";
import Image from "next/image";
import { RiNextjsFill, RiReactjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiVite } from "react-icons/si";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen py-30" id="projects">
        <span className="font-semibold text-4xl">My Projects</span>
        <div className="text-center flex-1 w-11/12 max-w-6xl md:text-lg text-sm leading-9 py-6">
          <span>Throughout my two years of higher-level study, these are some of the projects I have worked on:</span>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 py-8 justify-items-center">
            <Card className="md:w-full w-3/4 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <CardHeader className="justify-center">
                <Badge className="bg-red-500 text-white hover:bg-red-600 font-semibold">
                  <FaHeart /> Personal Favorite
                </Badge>
                <Image
                  src="/patungan.png"
                  alt="Patungan Screenshot"
                  width={350}
                  height={200}
                  className="rounded-xl shadow-lg"
                />
              </CardHeader>
              <CardContent>
                <span className="font-semibold">Patungan</span>
                <p className="text-center text-sm leading-8">
                  A stateless and modern split-billing web app that allows users to split the receipt with ease.
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap items-center w-full">
                <span className="text-left font-semibold mr-2 ">Tech Stack:</span>
                <div>
                  <Badge className="m-1">
                    <FaVuejs />
                    VueJS
                  </Badge>
                  <Badge className="m-1">Pinia</Badge>
                  <Badge className="m-1">
                    <SiVite />
                    Vite
                  </Badge>
                  <Badge className="m-1">
                    <RiTailwindCssFill />
                    TailwindCSS
                  </Badge>
                </div>
                <Button className="mt-10" variant="outline" size="sm">
                  <FaGithub />
                  <Link href="https://github.com/dennwill/wisp">Go to GitHub</Link>
                  <LuExternalLink />
                </Button>
              </CardFooter>
            </Card>

            <Card className="md:w-full w-3/4 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <CardHeader className="justify-center">
                <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 font-semibold">
                  <FaStar /> Commercial Project
                </Badge>
                <Image
                  src="/transporindo.png"
                  alt="Transporindo Home Page"
                  width={350}
                  height={200}
                  className="pt-2 rounded-xl shadow-lg"
                />
              </CardHeader>
              <CardContent>
                <span className="font-semibold">Transporindo</span>
                <p className="text-center text-sm leading-8">
                  A CMS-powered, bilingual, and smoothly-animated SPA (Single-page Application) logistics website that I
                  made for my freelancing work.
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap items-center w-full">
                <span className="text-left font-semibold mr-2">Tech Stack:</span>
                <div>
                  <Badge className="m-1">
                    <RiNextjsFill />
                    NextJS
                  </Badge>
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

            <Card className="md:w-full w-3/4 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <CardHeader className="justify-center pt-8">
                <Image
                  src="/suspicious-link-generator.png"
                  alt="Suspicious Link Generator Screenshot"
                  width={350}
                  height={200}
                  className="pt-2 rounded-xl shadow-lg"
                />
              </CardHeader>
              <CardContent>
                <span className="font-semibold">Suspicious Link Generator</span>
                <p className="text-center text-sm leading-8">
                  A website to generate sketchy-looking URLs quick. Made just for fun!
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap items-center w-full">
                <span className="text-left font-semibold mr-2">Tech Stack:</span>
                <div>
                  <Badge className="m-1">
                    <FaVuejs />
                    VueJS
                  </Badge>
                  <Badge className="m-1">CSS</Badge>
                </div>
                <Button className="mt-16" variant="outline" size="sm">
                  <FaGithub />
                  <Link href="https://github.com/dennwill/suspicious-link-generator">Go To GitHub</Link>
                  <LuExternalLink />
                </Button>
                {/* NextJS, React, Tailwind CSS, NodeJS, Supabase, */}
              </CardFooter>
            </Card>

            <Card className="md:w-full w-3/4 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <CardHeader className="justify-center pt-8">
                <Image
                  src="/wisp.png"
                  alt="Wisp Screenshot"
                  width={350}
                  height={200}
                  className="rounded-xl shadow-lg"
                />
              </CardHeader>
              <CardContent>
                <span className="font-semibold">Wisp</span>
                <p className="text-center text-sm leading-8">
                  A simple note-taking web app, built with VueJS, allows you to quickly draft and manage your ideas in
                  one place.
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap items-center w-full">
                <span className="text-left font-semibold mr-2 ">Tech Stack:</span>
                <div>
                  <Badge className="m-1">
                    <FaVuejs />
                    VueJS
                  </Badge>
                  <Badge className="m-1">
                    <RiSupabaseFill />
                    Supabase
                  </Badge>
                </div>
                <Button className="mt-10" variant="outline" size="sm">
                  <FaGithub />
                  <Link href="https://github.com/dennwill/wisp">Go to GitHub</Link>
                  <LuExternalLink />
                </Button>
              </CardFooter>
            </Card>

            <Card className="md:w-full w-3/4 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <CardHeader className="justify-center pt-8">
                <Image
                  src="/docking-tracker.png"
                  alt="Docking Tracker Web App"
                  width={350}
                  height={200}
                  className="rounded-xl shadow-lg"
                />
              </CardHeader>
              <CardContent>
                <span className="font-semibold">Docking Tracker</span>
                <p className="text-center text-sm leading-8">
                  A NextJS web application that tracks vessels which are currently docking.
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap items-center w-full">
                <span className="text-left font-semibold mr-2">Tech Stack:</span>
                <div>
                  {/* NextJS, React, Tailwind CSS, NodeJS, Supabase, */}
                  <Badge className="m-1">
                    <RiNextjsFill />
                    NextJS
                  </Badge>
                  <Badge className="m-1">
                    <RiReactjsFill />
                    React
                  </Badge>
                  <Badge className="m-1">
                    <BiLogoTypescript />
                    TypeScript
                  </Badge>
                  <Badge className="m-1">
                    <RiTailwindCssFill />
                    Tailwind CSS
                  </Badge>
                  <Badge className="m-1">
                    <RiSupabaseFill />
                    Supabase
                  </Badge>
                </div>
                <Button className="mt-4" variant="outline" size="sm">
                  <FaGithub />
                  <Link href="https://github.com/dennwill/docking-tracker">Go to GitHub</Link>
                  <LuExternalLink />
                </Button>
              </CardFooter>
            </Card>

            {/* <Card className="md:w-full w-3/4 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-50">
              <CardHeader className="justify-center pt-8">
                <Image
                  src="/missing-imgbatch-checker.png"
                  alt="Missing IMGBatch Checker Screenshot"
                  width={350}
                  height={200}
                  className="rounded-xl shadow-lg"
                />
              </CardHeader>
              <CardContent>
                <span className="font-semibold">IMGBatch Checker</span>
                <p className="text-center text-sm leading-8">
                  A personal project designed to help identify missing image files in a DCIM folder, typically used by
                  iOS devices.
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap items-center w-full">
                <span className="text-left font-semibold mr-2 ">Tech Stack:</span>
                <div>
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
            </Card> */}

            <Card className="md:w-full w-3/4 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-800">
              <CardHeader className="justify-center pt-8">
                <Image
                  src="/genomic-dashboard.png"
                  alt="Genomic Dashboard"
                  width={350}
                  height={200}
                  className="pt-2 rounded-xl shadow-lg"
                />
              </CardHeader>
              <CardContent>
                <span className="font-semibold">Genomic Visualization Dashboard</span>
                <p className="text-center text-sm leading-8">
                  A university project where my groupmates and I developed a genomic dashboard for feature extraction,
                  interactive genome browser, sequence composition and statistics
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap items-center w-full">
                <span className="text-left font-semibold mr-2">Tech Stack:</span>
                <div>
                  <Badge className="m-1">
                    <RiNextjsFill /> NextJS
                  </Badge>
                  <Badge className="m-1">Flask</Badge>
                </div>
                <Button className="mt-16" variant="outline" size="sm">
                  <FaGithub />
                  <Link href="https://github.com/bunleaps/genomic-visualization-dashboard">Go To GitHub</Link>
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
