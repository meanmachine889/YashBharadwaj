import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-[100%] border-b-[0.01rem] border-b-gray-800 z-50 flex fixed justify-center items-center">
      <div className="px-9 flex items-center justify-between w-[100%] py-3 bg-black z-50">
        <div className="flex">
          <p className="font-semibold text-gray-500 md:text-xl text-lg leading-snug">Yash Bharadwaj</p>
        </div>
        <div className="flex gap-5 items-center">
          <Link href={'/'} className="shadow-xl hover:opacity-80 animate transition-opacity opacity-50">
            <Image src={'/linkedin.svg'} alt="" width={30} height={40}></Image>
          </Link>
          <Link href={'/'} className="shadow-xl hover:opacity-80 animate transition-opacity opacity-50">
            <Mail className="h-10 text-gray-300 w-10" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
