import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GhostIcon } from "lucide-react";

type Props = {};

const Screens = (props: Props) => {
  return (
    <div className="grid w-[95vw] lg:max-w-[95vw] max-w-[27rem] min-h-[90vh] gap-1 mt-[5rem] lg:grid-cols-3 lg:grid-rows-4 grid-cols-1 grid-rows-8">
      <div className="flex flex-col justify-center items-start col-span-2 gap-2 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex md:justify-start justify-center items-end bg-blue-200">
          <Image
            src={
              "/vibehome.svg"
            }
            quality={100}
            alt=""
            width={900}
            className="mt-5 min-w-[95%] md:rounded-tr-xl md:rounded-none rounded-t-lg max-w-[25vw]"
            height={120}
          />
        </div>
      </div>
      <div className="bg-black flex flex-col justify-center items-start lg:col-span-1 gap-2 col-span-2 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex justify-center items-end  bg-indigo-300">
          <div className="text-white px-5 overflow-hidden font-normal flex items-center gap-5 text-[5vw]">
            <Image
              src={"/purhist.svg"}
              alt=""
              width={500}
              className="mt-5 lg:-mb-9 min-w-[60%] md:rounded-t-xl rounded-t-lg max-w-[70vw] md:max-w-[30vw]"
              height={90}
            />
          </div>
        </div>
      </div>
      <div className="bg-black flex flex-col justify-center items-start lg:col-span-1 gap-2 col-span-2 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex justify-center items-end  bg-pink-300">
          <div className="text-white px-5 overflow-hidden font-normal flex items-center gap-5 text-[5vw]">
            <Image
              src={"/orghist.svg"}
              alt=""
              width={500}
              className="mt-5 lg:-mb-9 min-w-[60%] md:rounded-t-xl rounded-t-lg max-w-[70vw] md:max-w-[30vw]"
              height={90}
            />
          </div>
        </div>
      </div>
      <div className="bg-black flex flex-col justify-center items-start gap-2 col-span-2 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex md:justify-end justify-center items-end bg-orange-200">
          <Image
            src="/vibeorg.svg"
            alt=""
            quality={100}
            width={920}
            className="mt-5 min-w-[95%] md:rounded-tl-xl md:rounded-none rounded-t-lg max-w-[25vw]"
            height={120}
          />
        </div>
      </div>
      <div className="bg-black flex flex-col justify-center items-center gap-2 col-span-2 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex md:justify-start justify-center items-end bg-blue-200">
          <Image
            src="/events.svg"
            alt=""
            quality={100}
            width={920}
            className="mt-5 min-w-[95%] md:rounded-tr-xl md:rounded-none rounded-t-lg max-w-[25vw]"
            height={120}
          />
        </div>
      </div>
      <div className="bg-black flex flex-col justify-center items-start lg:col-span-1 gap-2 col-span-2 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex justify-center items-center  bg-orange-300">
          <div className="text-white px-5 overflow-hidden font-normal flex items-center gap-5 text-[5vw]">
            <Image
              src={"/host.svg"}
              alt=""
              width={500}
              className="mt-5 min-w-[60%] max-w-[70vw] md:max-w-[35vw]"
              height={90}
            />
          </div>
        </div>
      </div>
      <div className="bg-black flex flex-col justify-center items-start lg:col-span-1 gap-2 col-span-2 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex justify-center items-center  bg-red-300">
          <div className="text-white px-5 overflow-hidden font-normal flex items-center gap-5 text-[5vw]">
            <Image
              src={"/admin.svg"}
              alt=""
              width={500}
              className="mt-5 min-w-[60%] max-w-[70vw] border-2 border-white md:max-w-[35vw]"
              height={90}
            />
          </div>
        </div>
      </div>
      <div className="bg-black flex flex-col justify-center items-center gap-2 col-span-2 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex md:justify-end justify-center items-end bg-indigo-500">
          <Image
            src="/ruless.svg"
            alt=""
            quality={100}
            width={920}
            className="mt-5 min-w-[95%] md:rounded-tl-xl md:rounded-none rounded-t-lg max-w-[25vw]"
            height={120}
          />
        </div>
      </div>
    </div>
  );
};

export default Screens;
