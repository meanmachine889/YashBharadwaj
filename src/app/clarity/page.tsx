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
import React from "react";
import Link from "next/link";

type Props = {};

const Clarity = (props: Props) => {
  return (
    <div className="flex flex-col min-w-screen min-h-screen  max-w-screen justify-center items-center">
      <div className="md:max-w-[80vw] max-w-[90vw] mt-[5rem] flex flex-col justify-center items-center">
        <div className="bg-zinc-900 overflow-y-hidden lg:w-[80vw] w-[93vw] max-h-fit rounded-2xl items-center flex gap-9 pt-9 lg:px-9 px-2 md:flex-row flex-col-reverse">
          <Image
            quality={100}
            src={"/p3 3.svg"}
            alt=""
            width={700}
            height={400}
            className="md:max-w-[60%] -mb-9"
          />
          <div className="flex flex-col text-gray-300 md:text-[4vw] text-[8vw] font-extrabold md:items-start items-center justify-center flex-1">
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
            <p className="md:text-[2vw] text-[3vw] font-semibold md:text-left text-center md:max-w-[100%] max-w-[60%] text-gray-500 md:mt-9 mt-2">
              tired of reading your pdfs ? chat with them instead!
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-xl min-w-[100%] gap-9 mt-9 justify-center items-center">
          <p className="md:text-[3vw] text-[7vw] font-bold text-gray-300">
            built on
          </p>
          <div className="flex justify-center gap-[5vw] flex-wrap w-[90%]">
            <div className="rounded-full flex bg-gray-300 p-5 items-center justify-center">
              <Image
                quality={100}
                src={"/nextjs.png"}
                alt=""
                width={50}
                height={200}
                className="max-w-[8vw]"
              />
            </div>
            <div className="rounded-full flex bg-gray-300 p-5 items-center justify-center">
              <Image
                quality={100}
                src={"/tailwind.png"}
                alt=""
                width={50}
                height={200}
                className="max-w-[8vw]"
              />
            </div>
            <div className="rounded-full flex bg-gray-300 p-5 items-center justify-center">
              <Image
                quality={100}
                src={"/ts.png"}
                alt=""
                width={50}
                height={200}
                className="max-w-[8vw]"
              />
            </div>
            <div className="rounded-full flex bg-gray-300 p-5 items-center justify-center">
              <Image
                quality={100}
                src={"/gemini.svg"}
                alt=""
                width={50}
                height={200}
                className="max-w-[8vw]"
              />
            </div>
            <div className="rounded-full flex bg-gray-300 p-5 items-center justify-center">
              <Image
                quality={100}
                src={"/aws.svg"}
                alt=""
                width={50}
                height={200}
                className="max-w-[8vw]"
              />
            </div>
            <div className="rounded-full flex bg-gray-300 p-5 items-center justify-center">
              <Image
                quality={100}
                src={"/pinecone.png"}
                alt=""
                width={50}
                height={200}
                className="max-w-[8vw]"
              />
            </div>
            <div className="rounded-full flex bg-gray-300 p-5 items-center justify-center">
              <Image
                quality={100}
                src={"/prisma.svg"}
                alt=""
                width={50}
                height={200}
                className="max-w-[8vw]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[100%] max-w-[1800px] md:mt-[5rem] mt-9 justify-center items-center p-0">
          <div className="grid bg-[#0F0F0F] border-2 border-gray-500 py-7 rounded-xl lg:max-w-[95vw] max-w-[27rem] h-[100%] gap-x-9 lg:px-[5rem] mt-[3rem] lg:grid-cols-3 lg:grid-rows-2 grid-cols-1">
            <Image
              quality={100}
              src={"/dashLaptop.png"}
              alt=""
              width={800}
              height={120}
              className="mt-5 lg:col-span-2 max-w-[90%] mx-auto rounded-xl row-span-1"
            />
            <Image
              quality={100}
              src={"/dashMobile1.png"}
              alt=""
              width={1000}
              height={120}
              className="mt-5 lg:max-w-[20vw] max-w-[90%] mx-auto col-span-1 rounded-xl row-span-2"
            />
            <div className="mt-3 lg:col-span-2 flex flex-col max-w-[90%] mx-auto mb-5 justify-start gap-[5vh] rounded-xl row-span-1">
              <p className="text-left md:text-[3vw] text-[8vw] text-gray-300 font-extrabold">
                files & chats in one place
              </p>
              <p className="md:text-[1.2vw] text-[4vw] text-gray-400">
                effortlessly manage your documents and conversations with our
                user dashboard. here, you can easily access all your uploaded
                files alongside their corresponding chat histories. this
                intuitive interface ensures you stay organized, allowing you to
                seamlessly switch between documents and their associated
                interactions, making information retrieval and management a
                breeze.
              </p>
            </div>
          </div>
          <div className="grid bg-[#0F0F0F] border-2 border-gray-500 py-7 rounded-xl lg:max-w-[95vw] max-w-[27rem] h-[100%] lg:px-[5rem] mt-[3rem] lg:grid-cols-3 lg:grid-rows-2 grid-cols-1">
            <Image
              quality={100}
              src={"/chatMobile1.png"}
              alt=""
              width={1000}
              height={120}
              className="mt-5 lg:max-w-[20vw] max-w-[90%] col-span-1 mx-auto rounded-xl row-span-2"
            />
            <Image
              quality={100}
              src={"/chatLaptop.png"}
              alt=""
              width={800}
              height={120}
              className="mt-5 lg:col-span-2 rounded-xl mx-auto max-w-[90%] row-span-1"
            />
            <div className="mt-3 lg:col-span-2 flex flex-col max-w-[90%] mx-auto mb-5 justify-start gap-[5vh] rounded-xl row-span-1">
              <p className="text-left md:text-[3vw] text-[8vw] text-gray-300 font-extrabold">
                gemini in action
              </p>
              <p className="md:text-[1.2vw] text-[4vw] text-gray-400">
                experience seamless interaction with your PDFs by effortlessly
                uploading and chatting with them in real-time. powered by the
                advanced Gemini bot, our platform ensures all the knowledge from
                your PDFs is at your fingertips. visualize your PDF side by side
                with the chat interface, featuring functionalities like page
                navigation, zoom, fullscreen mode, and rotation for a smooth,
                integrated experience.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center py-5 my-7 mt-[4rem] border-2 border-gray-500 w-[100%]">
          <p className="md:text-[3vw] text-[7vw] text-gray-300 font-bold mt-9">
            features
          </p>
          <div className="flex flex-col gap-9 mt-[4rem] w-[85%]">
            <div className="flex flex-col gap-2">
              <p className="md:text-[2vw] text-[4vw] font-semibold flex items-center gap-2 md:gap-5 text-gray-400">
                <Lock className="mt-1 text-orange-500 md:h-6 md:w-6 h-4 w-4" />{" "}
                user authentication
              </p>
              <p className="md:text-[1.5vw] text-[3vw] font-light md:text-gray-600 text-gray-500">
                secure user sign-in with email verification. users receive an
                otp (one-time password) sent to their registered email, ensuring
                only authorized access to their accounts.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="md:text-[2vw] text-[4vw] font-semibold flex items-center gap-2 md:gap-5 text-gray-400">
                <File className="mt-1 text-orange-500 md:h-6 md:w-6 h-4 w-4" />
                pdf upload and management
              </p>
              <p className="md:text-[1.5vw] text-[3vw] font-light md:text-gray-600 text-gray-500">
                {" "}
                easily upload pdf files to your personal dashboard. each
                uploaded pdf is stored securely and can be accessed anytime.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="md:text-[2vw] text-[4vw] font-semibold flex items-center gap-2 md:gap-5 text-gray-400">
                <FileText className="mt-1 text-orange-500 md:h-6 md:w-6 h-4 w-4" />
                pdf viewer
              </p>
              <p className="md:text-[1.5vw] text-[3vw] font-light md:text-gray-600 text-gray-500">
                {" "}
                render and display pdf documents with advanced features
                including zoom, rotate, and full-screen view. enjoy a seamless
                reading experience with intuitive controls.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="md:text-[2vw] text-[4vw] font-semibold flex items-center gap-2 md:gap-5 text-gray-400">
                <MessageSquare className="mt-1 text-orange-500 md:h-6 md:w-6 h-4 w-4" />
                chat with pdf
              </p>
              <p className="md:text-[1.5vw] text-[3vw] font-light md:text-gray-600 text-gray-500">
                interact with your pdf documents through chat. our ai, powered
                by gemini, provides precise answers based solely on the content
                of your uploaded pdfs.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="md:text-[2vw] text-[4vw] font-semibold flex items-center gap-2 md:gap-5 text-gray-400">
                <FolderOpen className="mt-1 text-orange-500 md:h-6 md:w-6 h-4 w-4" />
                pdf vectorization and storage
              </p>
              <p className="md:text-[1.5vw] text-[3vw] font-light md:text-gray-600 text-gray-500">
                each uploaded pdf is vectorized for efficient storage and quick
                retrieval. this process ensures that the pdf content is indexed
                and searchable, enabling accurate responses from the ai.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="md:text-[2vw] text-[4vw] font-semibold flex items-center gap-2 md:gap-5 text-gray-400">
                <FileStack className="mt-1 text-orange-500 md:h-6 md:w-6 h-4 w-4" />
                all your pdfs and chats in one place
              </p>
              <p className="md:text-[1.5vw] text-[3vw] font-light md:text-gray-600 text-gray-500">
                the user dashboard provides an organized view of all uploaded
                documents and their corresponding chat histories, making it easy
                to track your interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clarity;
