"use client"

import {
  ArrowDown,
  ArrowRight,
  File,
  FileStack,
  FileText,
  FolderOpen,
  GhostIcon,
  Github,
  Lock,
  MessageSquare,
  PersonStandingIcon,
  Sparkle,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Screens from "./(components)/screens";
import Features from "./(components)/features";
import Stack from "./(components)/stack";

type Props = {};

const Clarity = (props: Props) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

 
  return (
    <div className="flex flex-col min-w-screen min-h-screen  max-w-screen justify-center items-center">
      {<div className="w-[100%] flex flex-col justify-center items-center">
        <div
          className="bg-orange-400 overflow-y-hidden w-[100%] curdor h-[94vh] mt-[3rem] items-center flex gap-9 pt-9 lg:px-9 px-2 md:flex-row flex-col-reverse"
        >
          {/* <Image
            quality={100}
            src={"p3 3.svg"}
            alt=""
            width={700}
            height={400}
            className="md:max-w-[60%] -mb-9 self-end"
          /> */}
          <div className="flex flex-col  md:text-[8vw] text-[20vw] font-extrabold md:items-center items-center justify-center flex-1">
            <div className="flex text-white lg:gap-5 gap-2 md:mt-0 justify-start items-center">
              <p>clarity</p>
              <GhostIcon className="md:h-[8vw] md:w-[8vw] h-[20vw] w-[20vw]" />
            </div>
            <p className="md:text-[1.5vw] text-[6vw] font-semibold text-center">
              powered by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                Gemini
              </span>
            </p>
            <p className="md:text-[2vw] text-white text-[6vw] font-semibold md:text-left text-center md:max-w-[100%] max-w-[90%]  md:mt-9 mt-9">
              tired of reading your pdfs ? chat with them instead!
            </p>
            <div className="w-[45%] flex md:text-[1.5vw] text-[5vw] font-medium justify-center items-center px-[2vw] gap-[2vw] mt-9">
              <Link href={"https://clarity-beige.vercel.app"} className="rounded-[3rem] gap-5 flex items-center justify-center border-2 md:border-4 hover:bg-white hover:text-orange-500 border-white md:px-7 md:py-4 p-3">
                visit
                <ArrowRight/>
              </Link>
              <Link href={"https://clarity-beige.vercel.app"} className="gap-5 rounded-[3rem] flex items-center justify-center border-2 md:border-4 hover:text-white hover:bg-orange-500 bg-white text-orange-500 border-white md:px-7 md:py-4 p-3">
                github
                <ArrowRight/>
              </Link>
            </div>
          </div>
        </div>
        <Stack/>
        <Screens/>
        <Features/>
      </div>}
    </div>
  );
};

export default Clarity;
