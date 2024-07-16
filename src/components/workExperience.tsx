import React from "react";
import Image from "next/image";
import { ArrowUpRightFromSquare } from "lucide-react";

type Props = {};

const Workexperience = (props: Props) => {
  return (
    <div className="mt-9 grid w-[100%] h-[100%] grid-cols-3 grid-rows-2 md:px-5 lg:gap-[5rem] gap-1">
      <div className="flex min-h-[20rem] items-center justify-center min-w-fit col-span-1 row-span-1 bg-black border-2 border-white">
        <div className="flex flex-col border-2 border-white rounded-full items-center w-[70%] h-[90%] justify-center">
          <p className="text-[2vw] "><span className="text-[4vw]">120+</span></p>
          <p className="text-[1.7vw]">questions solved</p>
        </div>
      </div>
      <div className="flex items-center justify-center min-w-fit col-span-1 row-span-1 bg-black border-2 border-white">
        <Image src="/leetcode.png" alt="" width={100} height={120} />
      </div>
      <div className="flex items-center justify-center min-w-fit col-span-1 row-span-1 bg-black border-2 border-white">
        <div className="flex flex-col items-center w-[100%] h-[100%] justify-center">
          <p className="text-[3vw]">120+</p>
          <p className="text-[2vw]">questions solved</p>
        </div>
      </div>
      <div className="flex items-center justify-center min-w-fit col-span-1 row-span-1 bg-black border-2 border-white">
        <div className="flex flex-col items-center w-[100%] h-[100%] justify-center">
          <p className="text-[3vw]">120+</p>
          <p className="text-[2vw]">questions solved</p>
        </div>
      </div>
      <div className="flex items-center justify-center min-w-fit col-span-1 row-span-1 bg-black border-2 border-white">
        <div className="flex flex-col items-center w-[100%] h-[100%] justify-center">
          <p className="text-[3vw]">120+</p>
          <p className="text-[2vw]">questions solved</p>
        </div>
      </div>
      <div className="flex items-center justify-center min-w-fit col-span-1 row-span-1 bg-black border-2 border-white">
        <div className="flex flex-col items-center w-[100%] h-[100%] justify-center">
          <p className="text-[3vw]">120+</p>
          <p className="text-[2vw]">questions solved</p>
        </div>
      </div>
    </div>
  );
};

export default Workexperience;
