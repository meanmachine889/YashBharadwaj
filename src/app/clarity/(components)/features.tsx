import React from 'react'
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
type Props = {}

const Features = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center py-5 my-7 mt-[4rem] border-2 border-gray-500 w-[90%]">
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

  )
}

export default Features