import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GhostIcon } from "lucide-react";

type Props = {};

const Screens = (props: Props) => {
  return (
    <div className="grid w-[95vw] lg:max-w-[95vw] max-w-[27rem] min-h-[100vh] md:gap-y-[2rem] md:gap-x-4 gap-y-9 mt-[5rem] lg:grid-cols-3 lg:grid-rows-4 grid-cols-1 grid-rows-4">
      <div className="flex flex-col justify-center items-start col-span-2 gap-2 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex justify-center items-end bg-orange-200">
          <Image
            src={
              "https://res.cloudinary.com/dnfv0h10u/image/upload/c_crop,w_1919,h_906/v1720793524/Screenshot_2024-07-12_192901_juftjk.png"
            }
            quality={100}
            alt=""
            width={900}
            className="mt-5 min-w-[95%] md:rounded-t-xl rounded-t-lg max-w-[25vw]"
            height={120}
          />
        </div>
        {/* <div className="flex flex-col lg:items-start items-center w-[100%]">
          <p className="text-gray-500 md:text-[2vw] text-[5vw] font-bold">
            see all your friends & recent chats
          </p>
        </div> */}
      </div>
      <div className="bg-black flex flex-col justify-center items-start lg:col-span-1 gap-2 col-span-2 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex justify-center items-end  bg-indigo-300">
          <div className="text-white overflow-hidden font-normal flex items-center gap-5 text-[5vw]">
            <Image
              src={"/hehe3.svg"}
              alt=""
              width={300}
              className="mt-5 lg:-mb-9 min-w-[50%] md:rounded-t-xl rounded-t-lg max-w-[35vw]"
              height={90}
            />
          </div>
        </div>
        {/* <div className="flex flex-col lg:items-start items-center w-[100%]">
          <p className="text-gray-500 md:text-[2vw] text-[5vw] font-bold">
            add friends using their email ids
          </p>
        </div> */}
      </div>
      <div className="bg-black flex flex-col justify-center items-start col-span-1 gap-2 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex justify-center items-end bg-pink-200">
          <Image
            src="/haha.svg"
            alt=""
            width={300}
            className="mt-5 min-w-[50%] md:rounded-t-xl rounded-t-lg max-w-[25vw]"
            height={90}
          />
        </div>
        {/* <div className="flex flex-col lg:items-start items-center w-[100%]">
          <p className="text-gray-500 md:text-[2vw] text-[5vw] font-bold">
            responsive design
          </p>
        </div> */}
      </div>
      <div className="bg-black flex flex-col justify-center items-start gap-2 col-span-2 lg:row-span-2">
        <div className="w-[100%] h-[100%] flex justify-center items-end bg-cyan-200">
          <Image
            src="https://res.cloudinary.com/dnfv0h10u/image/upload/v1720793241/Screenshot_2024-07-12_193423_obpefl.png"
            alt=""
            quality={100}
            width={920}
            className="mt-5 min-w-[95%] md:rounded-t-xl rounded-t-lg max-w-[25vw]"
            height={120}
          />
        </div>
        {/* <div className="flex flex-col lg:items-start items-center w-[100%]">
          <p className="text-gray-500 md:text-[2vw] text-[5vw] font-bold">
            accept or reject all pending requests
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Screens;
