import React from "react";
import Image from "next/image";
import { GhostIcon } from "lucide-react";
import Link from "next/link";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="grid w-[95vw] lg:max-w-[95vw] max-w-[27rem] min-h-[100vh] md:gap-y-[2rem] md:gap-x-4 gap-y-9 mt-[3rem] lg:grid-cols-3 lg:grid-rows-4 grid-cols-1 grid-rows-5">
      <Link href='/' className="flex flex-col justify-center items-start col-span-1 lg:row-span-2">
        <div className="w-[100%] h-[95%] flex justify-center items-center hover:bg-cyan-300 transition-colors bg-cyan-200">
          <Image
            src={"/event.svg"}
            alt=""
            width={100}
            className="mt-5 max-w-[20vw]"
            height={120}
          />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-gray-300 text-2xl font-extrabold">eventory</p>
          <p className="text-gray-500 font-bold">internship</p>
        </div>
      </Link>
      <Link href={'/clarity'} className="border-none outline-none transition-colors p-0 mb-9 col-span-1 lg:row-span-3">
        <div className="w-full h-full bg-gradient-to-b from-orange-500 to-black group  flex flex-col justify-between items-center">
          <p className="text-white font-extrabold flex items-center gap-5 mt-2 text-[8vw] lg:text-[5vw]">
            clarity
          </p>
          <p>
            <GhostIcon className="h-[5vw] w-[5vw]"/>
          </p>
          <div className="w-full p-0 overflow-hidden h-full flex justify-center items-end">
            <Image
              src={"/Vector1.svg"}
              alt=""
              width={450}
              height={200}
              quality={100}
              className="max-w-[98%] max-h-[97%] border-none outline-none rounded-xl m-0"
            />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-gray-300 text-2xl font-extrabold">clarity</p>
          <p className="text-gray-500 font-bold">ai project</p>
        </div>
      </Link>
      <Link href={'/'} className="bg-black flex flex-col justify-center items-start col-span-1 lg:row-span-2">
        <div className="w-[100%] h-[95%] flex justify-center items-center hover:bg-indigo-300 bg-indigo-200">
          <p className="text-white font-normal flex items-center gap-5 text-[5vw]">
            <Image
              src={"/connectz.svg"}
              alt=""
              width={100}
              className="mt-5"
              height={120}
            />
          </p>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-gray-300 text-2xl font-extrabold">connect z</p>
          <p className="text-gray-500 font-bold">chat application</p>
        </div>
      </Link>
      <Link href={'/'} className="bg-black flex flex-col justify-center items-start col-span-1 lg:row-span-2">
        <div className="w-[100%] h-[95%] flex justify-center items-center hover:bg-pink-300 bg-pink-200">
          <Image src="/horse's-3.png" alt="" width={150} height={200} />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-gray-300 text-2xl font-extrabold">
            horse&apos;s mouth
          </p>
          <p className="text-gray-500 font-bold">internship</p>
        </div>
      </Link>
      <Link href={'/'} className="bg-black flex flex-col justify-center items-start col-span-1 lg:row-span-2">
        <div className="w-[100%] h-[95%] flex justify-center items-center hover:bg-blue-800 bg-blue-700">
          <p className="text-white font-light flex items-center gap-5 text-[8vw] lg:text-[5vw]">
            Vibe Z
          </p>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-gray-300 text-2xl font-extrabold">vibe z</p>
          <p className="text-gray-500 font-bold">event management website</p>
        </div>
      </Link>
    </div>
  );
};

export default Projects;
