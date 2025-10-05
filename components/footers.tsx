import Link from "next/link";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa6";
import { Separator } from "./ui/separator";

export default function Footers() {
  return (
    <>
      <div className="w-full h-24 border-t flex justify-center items-center">
        <span>© 2025 Dennis William</span>
        <Separator orientation="vertical" className="mx-8" />
        <span>denniswilliam1419@gmail.com</span>
        <Separator orientation="vertical" className="mx-8" />
        <div className="flex flex-row">
          <Link href="https://github.com/dennwill">
            <FaGithub size={24} className="mx-2" />
          </Link>

          <Link href="https://www.linkedin.com/in/dennis-william-a89a8015b/">
            <FaLinkedinIn size={24} className="mx-2" />
          </Link>
        </div>
        <Separator orientation="vertical" className="mx-8" />
        <span className="ml-4 text-sm text-gray-600">Portfolio inspired by GreatStack</span>
      </div>
    </>
  );
}
