import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Separator } from "./ui/separator";

export default function Footers() {
  return (
    <>
      <div className="w-full border-t bg-white">
        <div className="hidden md:flex h-24 justify-center items-center gap-8 px-4">
          <span className="text-sm lg:text-base">© 2025 Dennis William</span>
          <Separator orientation="vertical" />
          <span className="text-sm lg:text-base">denniswilliam1419@gmail.com</span>
          <Separator orientation="vertical" />
          <div className="flex flex-row gap-4">
            <Link href="https://github.com/dennwill" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="hover:text-sky-500 transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dennis-william-a89a8015b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={24} className="hover:text-sky-500 transition-colors" />
            </Link>
          </div>
          <Separator orientation="vertical" />
          <span className="text-xs lg:text-sm text-gray-600">Portfolio inspired by GreatStack</span>
        </div>

        <div className="md:hidden flex flex-col gap-4 px-4 py-6">
          <div className="text-center">
            <span className="text-xs sm:text-sm">© 2025 Dennis William</span>
          </div>

          <Separator />

          <div className="text-center">
            <a
              href="mailto:denniswilliam1419@gmail.com"
              className="text-xs sm:text-sm hover:text-sky-500 transition-colors break-all"
            >
              denniswilliam1419@gmail.com
            </a>
          </div>

          <Separator />

          <div className="flex justify-center gap-6">
            <Link href="https://github.com/dennwill" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} className="hover:text-sky-500 transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dennis-william-a89a8015b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={20} className="hover:text-sky-500 transition-colors" />
            </Link>
          </div>

          <Separator />

          <div className="text-center">
            <span className="text-xs text-gray-600">Portfolio inspired by GreatStack</span>
          </div>
        </div>
      </div>
    </>
  );
}
