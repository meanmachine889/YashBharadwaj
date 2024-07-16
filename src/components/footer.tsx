import React from "react";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-[100%] flex border-t-2 border-t-gray-800 justify-center items-center text-[4vw] p-7 font-extrabold h-[100%]">
      <div className="flex flex-col w-[80%]">
        <div className="w-[100%] text-3xl border-b-gray-500 border-b-2 flex justify-start">
            Contacts
        </div>
        <div className="w-[100%] text-xl flex justify-between">
            <div>
                mail
            </div>
            <div>
                ybharadwaj131@gmail.com
            </div>
        </div>
        <div className="w-[100%] text-xl flex justify-between">
            <div>
                mail
            </div>
            <div>
                ybharadwaj131@gmail.com
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
