"use client";

import {
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Screens from "./(components)/screens";
import Stack from "../connectz/(components)/stack";
import Features from "./(components)/features";

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
      <div className="w-[100%] flex flex-col justify-center items-center">
        <div className="text-indigo-500 bg-grid-small-purple-400/[0.3] curddor overflow-y-hidden w-[100%] h-[100vh] justify-center items-center flex gap-9 pt-9 lg:px-9 px-2 pb-5 md:flex-row flex-col-reverse">
          <div className="flex flex-col mt-[3rem] md:text-[8vw] text-[18vw] font-extrabold items-center justify-center">
            <div className="flex mx-auto lg:gap-5 font-bold md:mt-0 mt-5 justify-center items-center">
              <p>Vibe Z</p>
            </div>
            <p className="md:text-[2vw] text-[6vw] font-normal text-white text-center md:max-w-[100%] mt-2">
              an event management platform
            </p>
            <div className="w-[45%] flex md:text-[1.5vw] text-[5vw] font-medium justify-center items-center px-[2vw] gap-[2vw] mt-9">
              <Link
                href={"https://connect-z.vercel.app"}
                className="gap-2 rounded-[3rem] flex items-center justify-center border-2 md:border-4 text-white hover:gap-5 transition-all border-white md:px-7 md:py-4 p-3"
              >
                github
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>

        <Stack />
        <Screens />
        <Features />
      </div>
    </div>
  );
};

export default Clarity;
