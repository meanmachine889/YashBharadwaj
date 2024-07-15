import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GhostIcon } from "lucide-react";

type Props = {};

const Screens = (props: Props) => {
  return (
    <div className="grid w-[95vw] lg:max-w-[95vw] max-w-[27rem] min-h-[100vh] gap-1 mt-[5rem] lg:grid-cols-3 lg:grid-rows-4 grid-cols-2 grid-rows-5">
      <div className="flex flex-col justify-center items-start col-span-2 gap-2 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex lg:justify-start justify-center items-end bg-pink-200">
          <Image
            src={"/clarityss2.svg"}
            alt=""
            width={900}
            className="mt-5 min-w-[98%] lg:rounded-tr-xl lg:rounded-none rounded-t-lg max-w-[25vw]"
            height={120}
          />
        </div>
      </div>
      <div className="bg-green-300 flex flex-col justify-center items-start lg:col-span-1 md:col-span-2 gap-2 col-span-1 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex justify-center items-end  bg-green-300">
          <div className="text-white overflow-hidden font-normal flex items-center gap-5 text-[5vw]">
            <Image
              src={"/clarityss3.svg"}
              alt=""
              width={300}
              className="mt-5 min-w-[50%] lg:rounded-t-xl rounded-t-lg max-w-[35vw]"
              height={90}
            />
          </div>
        </div>
      </div>
      <div className="bg-black flex flex-col justify-center items-start lg:col-span-1 md:col-span-2 gap-2 col-span-1 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex justify-center items-end  bg-indigo-300">
          <div className="text-white overflow-hidden font-normal flex items-center gap-5 text-[5vw]">
            <Image
              src={"/connectzss2.svg"}
              alt=""
              width={300}
              className="mt-5 min-w-[50%] lg:rounded-t-xl rounded-t-lg max-w-[35vw]"
              height={90}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start col-span-2 gap-2 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex lg:justify-end justify-center items-end bg-orange-200">
          <Image
            src={"/clarityss.svg"}
            alt=""
            width={900}
            className="mt-5 min-w-[98%] lg:rounded-tl-xl lg:rounded-none rounded-t-lg max-w-[25vw]"
            height={120}
          />
        </div>
      </div>
      <div className="bg-black flex flex-col justify-center items-start gap-2 col-span-2 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex lg:justify-start justify-center items-end bg-cyan-200">
          <Image
            src={"/claritychat.svg"}
            alt=""
            width={920}
            className="mt-5 min-w-[98%] lg:rounded-tr-xl lg:rounded-none rounded-none rounded-t-lg max-w-[25vw]"
            height={120}
          />
        </div>
      </div>
      <div className="bg-black flex flex-col justify-center items-start lg:col-span-1 col-span-2 gap-2 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex justify-center items-end bg-pink-200">
          <Image
            src="/connectzss4.svg"
            alt=""
            width={400}
            className="mt-5 min-w-[50%] lg:rounded-t-xl rounded-t-lg max-w-[26vw]"
            height={90}
          />
        </div>
      </div>
    </div>
  );
};

export default Screens;
