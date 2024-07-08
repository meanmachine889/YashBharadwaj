"use client";

import { useEffect, useState } from "react";
import Projects from "@/components/projects";
import TechStack from "@/components/techStack";
import Workexperience from "@/components/workExperience";
import { Download, GithubIcon, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
      <div className="flex flex-col w-[85%] max-w-[1200px]">
        <div
          className={`text-gray-300 lg:px-0 md:px-3 leading-relaxed items-start justify-center flex flex-col font-extrabold md:text-5xl text-3xl min-h-[90vh] xl:min-w-[65vw] transition-all duration-300 ${
            scrollY > 110 ? "opacity-0" : "opacity-100"
          }`}
          style={{ transition: "opacity 0.5s ease-in-out" }}
        >
          <p className="leading-snug">
            i'm yash 🖐🏽
            <br />a fullstack web developer
            <br /> crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
              experiences
            </span>{" "}
            through code
          </p>
          <div className="w-[100%] flex md:gap-9 gap-3 mt-9 items-center justify-start">
            <button className="bg-zinc-800 text-gray-500 hover:text-gray-300 md:text-[1.5rem] text-[1rem] font-semibold md:px-5 px-2 py-2 md:py-3 flex items-center justify-center gap-9 hover:bg-zinc-900 rounded-xl mt-5">
              contact
            </button>
            <button className="bg-zinc-800 text-gray-500 hover:text-gray-300 md:text-[1.5rem] text-[1rem] font-semibold md:px-5 px-2 py-2 md:py-3 flex items-center justify-center md:gap-9 gap-3 hover:bg-zinc-900 rounded-xl mt-5">
              download cv <Download />
            </button>
          </div>
        </div>
        <div
          className={`flex flex-col justify-start md:items-center transition-transform duration-300 ${
            scrollY > 50 ? "-translate-y-[calc(70vh-20rem)]" : "translate-y-0"
          }`}
        >
          <div className="flex max-w-[2000px] justify-center">
            <Projects />
          </div>
        </div>
        <div className="flex flex-col lg:mt-[2rem] justify-center items-center md:items-center gap-5 bg-gradient-to-b from-zinc-900/60 to-black/60 md:p-7 p-3 border-2 border-zinc-800">
          <div className="flex gap-5 text-gray-500 md:text-5xl text-3xl font-extrabold self-center lg:px-0 px-4">
            <p>stack</p>
          </div>
          <div className="flex justify-center">
            <TechStack />
          </div>
        </div>
        {/* <div className="max-w-[99vw] hehe rounded-xl border-2 border-zinc-800 md:p-7 p-3 flex justify-center md:items-start items-center flex-col gap-9 mt-[6rem]">
          <p className="text-gray-500 flex items-center px-4 gap-5 font-extrabold leading-snug self-center text-3xl md:text-5xl">
            experience
          </p>
          <Workexperience />
        </div> */}
      </div>
      <div className="min-w-full md:mt-[6rem] mt-9 flex justify-center items-center max-w-full min-h-[30vh] ">
          <div className="flex flex-col justify-center items-center">
            <p className="text-gray-300 md:text-5xl text-3xl font-extrabold self-center">
              let&apos;s connect ?
            </p>
            <div className="bg-zinc-900 shadow-xl rounded-xl max-w-[100%] p-9 items-center mt-5 min-w-[100%] justify-between min-h-[50%] flex">
              <Link href={'/'} className="">
              <Image src='/github.svg' alt="" width={80} height={200}/>
              </Link>
              <Link href={'/'} className="">
              <Image src='/linkedin.svg' alt="" width={40} height={200}/>
              </Link>
              <Link href={'/'} className="">
              <Mail className="h-[4vw] text-zinc-900 fill-white w-[4vw]" />
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
}
