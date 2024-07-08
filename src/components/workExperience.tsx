import React from "react";
import Image from "next/image";
import { ArrowUpRightFromSquare } from "lucide-react";

type Props = {};

const Workexperience = (props: Props) => {
  return (
    <div className="flex mt-9 md:flex-row flex-col md:px-5 justify-center lg:items-stretch items-center lg:gap-[5rem] gap-9">
      <div className="hover:bg-[#1b0720]/60 border-2 transition-colors border-zinc-900 bg-zinc-900 hover:border-purple-900/30 md:max-w-[48%] md:min-w-[48%] lg:min-w-[37%] xl:min-w-[25%] lg:max-w-[30%] max-w-[18rem] flex-col rounded-xl gap-5 p-4 flex justify-between items-stretch backdrop-blur-lg z-10">
        <div className="flex justify-center items p-3 min-h-[10rem] shadow-xl rounded-xl bg-gradient-to-r from-blue-300 to-indigo-300 backdrop-blur-lg">
          <Image
            quality={100}
            alt=""
            width={100}
            height={100}
            src="/horse's-3.png"
          />
        </div>
        <div className="flex flex-col min-w-[60%] justify-start items-start">
          <p className="font-extrabold md:text-3xl text-xl flex items-center gap-3 text-gray-300">
            horse&apos;s mouth{" "}
            <ArrowUpRightFromSquare className="h-5 w-5 mt-1 text-gray-500" />
          </p>
          <p className="text-gray-500 font-extrabold">
            software Developer{" "}
            <span className="font-bold text-gray-400">/ <br/>2024</span>{" "}
          </p>
          {/* <p className="mt-9 text-gray-600 font-extrabold">
            enhanced the official website by adding new features & fixing bugs,
            thus improving performance
          </p> */}
        </div>
      </div>

      <div className="hover:bg-[#03051C]/60 border-2 bg-zinc-900 transition-colors border-zinc-900 hover:border-blue-900/30 md:max-w-[50%] md:min-w-[48%] lg:max-w-[30%] xl:min-w-[30%] lg:min-w-[37%] max-w-[18rem] flex-col rounded-xl gap-5 p-4 flex justify-between items-stretch z-10">
        <div className=" flex justify-center p-3 min-h-[10rem] items-center hoho backdrop-blur-xl box-shadow-xl rounded-xl bg-gradient-to-r from-blue-200 to-cyan-200">
          <Image
            quality={100}
            alt=""
            width={80}
            height={100}
            src="/event.svg"
          />
        </div>
        <div className="flex flex-col min-w-fit justify-center items-strech">
          <p className="font-extrabold md:text-3xl text-xl flex items-center gap-3 text-gray-300">
            eventory{" "}
            <ArrowUpRightFromSquare className="h-5 w-5 mt-1 text-gray-500" />
          </p>
          <p className="text-gray-500 font-extrabold">
            fullstack developer{" "}
            <span className="font-bold text-gray-400">/ <br/>2024</span>
          </p>
          {/* <p className="mt-9 text-gray-600 font-extrabold">
            worked as a core developer, developed & debugged the entire
            functioning website from scratch
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Workexperience;
