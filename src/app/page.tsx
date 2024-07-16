"use client";

import { useEffect, useState } from "react";
import Projects from "@/components/projects";
import TechStack from "@/components/techStack";
import Workexperience from "@/components/workExperience";
import { Download, GithubIcon, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dot-white/[0.2] min-w-screen flex flex-col items-center bg-black">
      <div className="flex flex-col items-center max-w-[1200px]">
        <div
          className={`text-gray-300 w-[100%] lg:px-0 md:px-3 leading-relaxed items-start justify-center flex flex-col font-extrabold md:text-5xl text-3xl min-h-[100vh] xl:min-w-[65vw] transition-all duration-300 ${
            scrollY > 110 ? "opacity-0" : "opacity-100"
          }`}
          style={{ transition: "opacity 0.5s ease-in-out" }}
        >
          <p className="leading-snug">
            i&apos;m yash 🖐🏽
            <br />a fullstack web developer
            <br /> crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
              experiences
            </span>{" "}
            through code
          </p>
          <div className="w-[100%] flex md:gap-9 gap-3 mt-9 items-center justify-start">
            <button className="border-2 border-white text-whit md:text-[1.5rem] text-[1rem] font-semibold md:px-5 px-2 py-2 md:py-3 flex items-center justify-center gap-9 hover:text-white transition-all rounded-full mt-5">
              contact
            </button>
            <button className="border-2 border-white text-whit md:text-[1.5rem] text-[1rem] font-semibold md:px-5 px-2 py-2 md:py-3 flex items-center justify-center md:gap-9 gap-3 hover:text-white transition-all rounded-full mt-5">
              download cv <Download />
            </button>
          </div>
        </div>
        <div
          className={`flex flex-col justify-start md:items-center transition-transform duration-300 ${
            scrollY > 50 ? "-translate-y-[calc(70vh-20rem)]" : "translate-y-0"
          }`}
        >
          <div className="flex px-2 max-w-[2000px] justify-center">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}
