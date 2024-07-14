import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GhostIcon } from "lucide-react";

type Props = {};

const Screens = (props: Props) => {
  return (
    <div className="grid w-[95vw] lg:max-w-[95vw] max-w-[27rem] min-h-[100vh] md:gap-y-[2rem] md:gap-x-4 gap-y-9 mt-[4rem] lg:grid-cols-3 lg:grid-rows-4 grid-cols-1 grid-rows-4">
      <div className="flex flex-col justify-center items-start col-span-2 gap-2 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex justify-center items-end bg-orange-200">
          <Image
            src={"/clarityss.svg"}
            alt=""
            width={900}
            className="mt-5 min-w-[95%] md:rounded-t-xl rounded-t-lg max-w-[25vw]"
            height={120}
          />
        </div>
        {/* <div className="flex flex-col lg:items-start items-center w-[100%]">
          <p className="text-gray-500 md:text-[2vw] text-[5vw] font-medium">upload pdfs by selecting or dragging</p>
        </div> */}
      </div>
      <div className="bg-black flex flex-col justify-center items-start lg:col-span-1 gap-2 col-span-2 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex justify-center items-end  bg-indigo-300">
          <div className="text-white overflow-hidden font-normal flex items-center gap-5 text-[5vw]">
            <Image
              src={"/connectzss2.svg"}
              alt=""
              width={300}
              className="mt-5 lg:-mb-9 min-w-[50%] md:rounded-t-xl rounded-t-lg max-w-[35vw]"
              height={90}
            />
          </div>
        </div>
        {/* <div className="flex flex-col lg:items-start items-center w-[100%]">
          <p className="text-gray-500 md:text-[2vw] text-[5vw] font-medium">your chats & pdfs at one place</p>
        </div> */}
      </div>
      <div className="bg-black flex flex-col justify-center items-start col-span-1 gap-2 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex justify-center items-end bg-pink-200">
          <Image
            src="/connectzss4.svg"
            alt=""
            width={300}
            className="mt-5 min-w-[50%] md:rounded-t-xl rounded-t-lg max-w-[25vw]"
            height={90}
          />
        </div>
        {/* <div className="flex flex-col lg:items-start items-center w-[100%]">
          <p className="text-gray-500 md:text-[2vw] text-[5vw] font-medium">fullscreen pdf display</p>
        </div> */}
      </div>
      <div className="bg-black flex flex-col justify-center items-start gap-2 col-span-2 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex justify-center items-end bg-cyan-200">
          <Image
            src={"/connectzss3.svg"}
            alt=""
            width={920}
            className="mt-5 min-w-[95%] md:rounded-t-xl rounded-t-lg max-w-[25vw]"
            height={120}
          />
        </div>
        {/* <div className="flex flex-col lg:items-start items-center w-[100%]">
          <p className="text-gray-500 md:text-[2vw] text-[5vw] font-medium">ask all your doubts from pdf</p>
        </div> */}
      </div>
    </div>
  );
};

export default Screens;
