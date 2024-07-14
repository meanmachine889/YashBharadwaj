import React from "react";
import Image from "next/image";
import { Settings } from "lucide-react";

type Props = {};

const Eventory = (props: Props) => {
  return (
    <div className="w-[100%] min-h-[100vh] flex flex-col justify-start items-center">
      <div className="flex flex-col w-[100%] items-center justify-center">
      <div className="flex py-9 w-[100%] md:h-screen items-center justify-center bg-cyan-200 pt-[6rem]">
          <div className=" flex justify-center items-center shadow-xl rounded-xl">
            <Image
              src={"/eventoryss.svg"}
              alt=""
              quality={100}
              width={800}
              className="md:min-w-[80vw] md:rounded-xl rounded-md max-w-[90vw]"
              height={120}
            />
          </div>
        </div>
        <div className="w-[90%] rounded-xl flex lg:flex-row flex-col items-start justify-center gap-[15%] pb-5">
          <div className="flex flex-col justify-start items-start">
            <p className="font-extrabold md:text-[8vw] text-[9vw] lg:text-[4vw] text-white">
              Eventory
            </p>
            <div className="font-semibold flex flex-col text-gray-300 lg:text-[1.2vw] gap-3 md:text-[3vw] text-[5vw]">
              <p>may 2024 - present</p>
            </div>
          </div>
          <div className="mt-5 flex md:flex-row flex-col gap-7 justify-around flex-1">
            <p className="font-semibold text-gray-300 md:text-[1.5vw] text-[5vw]">
              role : <br/> web developer
            </p>
            <p className="font-semibold text-gray-300 md:text-[1.5vw] text-[5vw]">
              duration : <br/> currently working
            </p>
          </div>
        </div>
        {/* <div className="flex py-9 w-[100%] items-center justify-center bg-cyan-200">
          <div className=" flex justify-center items-center shadow-xl rounded-xl">
            <Image
              src={"/eventoryss.svg"}
              alt=""
              quality={100}
              width={800}
              className="md:min-w-[80vw] md:rounded-xl rounded-md max-w-[90vw]"
              height={120}
            />
          </div>
        </div>
        <div className="md:w-[80%] rounded-xl flex flex-col items-start mt-[3vw] justify-center pb-5">
          <p className="font-extrabold text-gray-300 lg:text-[1.6vw] md:text-[3vw] text-[4vw]">
            <span className="lg:text-[2vw] md:text-[5vw] text-[6vw] text-cyan-200">
              Background :{" "}
            </span>
            <br />
            Eventory is a one-stop hub for all event-related services. Find and
            book top vendors, caterers, and more for your next event, or sign up
            to offer your services.
          </p>
        </div>
        <div className="md:w-[80%] rounded-xl flex flex-col items-start mt-[3vw] justify-center pb-5">
          <p className="font-extrabold text-gray-300 lg:text-[1.6vw] md:text-[3vw] text-[4vw]">
            <span className="lg:text-[2vw] md:text-[5vw] text-[6vw] text-cyan-200">
              Stack :{" "}
            </span>{" "}
            <br />
            Using NextJs 14, along with UI components like Aceternity, ShadCN
            for making an appealing and user frontend.
          </p>
        </div>
        <div className="rounded-xl border-base-300 max-w-[81vw] border bg-zinc-800">
          <div className="border-base-300 flex justify-center border-t">
            <Image
              src={"/eventoryss2.svg"}
              alt=""
              quality={100}
              width={800}
              className="min-w-[100%] md:rounded-xl rounded-md max-w-[80vw]"
              height={120}
            />
          </div>
        </div>
        <div className="md:w-[80%] rounded-xl flex flex-col items-start mt-[3vw] justify-center pb-5">
          <p className="font-extrabold text-gray-300 lg:text-[1.6vw] md:text-[3vw] text-[4vw]">
            with AWS, Node.js, Express & Services like AWS SNS and S3 for
            managing notifications and storage.
          </p>
        </div>
        <div className="rounded-xl border-base-300 max-w-[81vw] border bg-zinc-800">
          <div className="border-base-300 flex justify-center border-t">
            <Image
              src={"/eventoryss4.svg"}
              alt=""
              quality={100}
              width={800}
              className="min-w-[100%] md:rounded-xl rounded-md max-w-[80vw]"
              height={120}
            />
          </div>
        </div>
        <div className="w-[80%] rounded-xl flex flex-col items-start mt-[3vw] justify-center pb-5">
          <p className="font-extrabold text-gray-300 lg:text-[1.6vw] md:text-[3vw] text-[4vw]">
            along with Google Auth & AWS SNS for user authentication.
          </p>
        </div>
        <div className="rounded-xl border-base-300 max-w-[81vw] border bg-zinc-800">
          <div className="border-base-300 flex justify-center border-t">
            <Image
              src={"/eventoryss3.svg"}
              alt=""
              quality={100}
              width={800}
              className="min-w-[100%] md:rounded-xl rounded-md max-w-[80vw]"
              height={120}
            />
          </div>
        </div>
        <div className="mt-9 mb-9">
          <p className="font-extrabold lg:text-[2.4vw] text-[6vw] md:text-[4vw] flex items-center gap-9">
            Site still in progress...
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Eventory;
