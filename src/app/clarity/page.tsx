"use client"

import {
  File,
  FileStack,
  FileText,
  FolderOpen,
  GhostIcon,
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
      {loading ? <span className="loading loading-bars loading-lg"></span> : <div className="w-[100%] flex flex-col justify-center items-center">
        <Link
          href={"https://clarity-beige.vercel.app"}
          className="bg-orange-500 curdor overflow-y-hidden w-[100%] lg:h-[100vh] h-fit mt-[3rem] items-center flex gap-9 pt-9 lg:px-9 px-2 md:flex-row flex-col-reverse"
        >
          <Image
            quality={100}
            src={"p3 3.svg"}
            alt=""
            width={700}
            height={400}
            className="md:max-w-[60%] -mb-9 self-end"
          />
          <div className="flex flex-col  md:text-[4vw] text-[8vw] font-extrabold md:items-start items-center justify-center flex-1">
            <div className="flex lg:gap-5 gap-2 md:mt-0 mt-5 justify-start items-center">
              <p>clarity</p>
              <GhostIcon className="md:h-[4vw] md:w-[4vw] h-[8vw] w-[8vw]" />
            </div>
            <p className="md:text-[1.5vw] text-[3vw] font-semibold lg:pl-2 lg:mt-2 text-center">
              powered by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                Gemini
              </span>
            </p>
            <p className="md:text-[2vw] text-black text-[3vw] font-semibold md:text-left text-center md:max-w-[100%] max-w-[60%]  md:mt-9 mt-2">
              tired of reading your pdfs ? chat with them instead!
            </p>
          </div>
        </Link>
        <Stack/>
        <Screens/>
        <Features/>
      </div>}
    </div>
  );
};

export default Clarity;
