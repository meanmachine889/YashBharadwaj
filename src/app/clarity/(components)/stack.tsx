import React from 'react'
import Image from 'next/image'

type Props = {}

const Stack = (props: Props) => {
  return (
    <div className="flex flex-col rounded-xl min-w-[100%] gap-9 mt-9 justify-center items-center">
          <p className="md:text-[3vw] text-[7vw] font-bold text-gray-300">
            built on
          </p>
          <div className="flex justify-center gap-[5vw] flex-wrap w-[90%]">
            <div className="rounded-full flex bg-gray-300 p-5 items-center justify-center">
              <Image
                quality={100}
                src={"https://res.cloudinary.com/dnfv0h10u/image/upload/v1720799651/nextjs_jqbf1o.png"}
                alt=""
                width={50}
                height={200}
                className="max-w-[8vw]"
              />
            </div>
            <div className="rounded-full flex bg-gray-300 p-5 items-center justify-center">
              <Image
                quality={100}
                src={"https://res.cloudinary.com/dnfv0h10u/image/upload/v1720799676/tailwind_z41rzu.png"}
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
                alt="ts"
                width={50}
                height={200}
                className="max-w-[8vw]"
              />
            </div>
            <div className="rounded-full flex bg-gray-300 p-5 items-center justify-center">
              <Image
                quality={100}
                src={"https://res.cloudinary.com/dnfv0h10u/image/upload/v1720799638/gemini_jk50ez.svg"}
                alt=""
                width={50}
                height={200}
                className="max-w-[8vw]"
              />
            </div>
            <div className="rounded-full flex bg-gray-300 p-5 items-center justify-center">
              <Image
                quality={100}
                src={"https://res.cloudinary.com/dnfv0h10u/image/upload/v1720799632/aws_zfy4cr.svg"}
                alt=""
                width={50}
                height={200}
                className="max-w-[8vw]"
              />
            </div>
            <div className="rounded-full flex bg-gray-300 p-5 items-center justify-center">
              <Image
                quality={100}
                src={"https://res.cloudinary.com/dnfv0h10u/image/upload/v1720799661/pinecone_vfeezp.png"}
                alt=""
                width={50}
                height={200}
                className="max-w-[8vw]"
              />
            </div>
            <div className="rounded-full flex bg-gray-300 p-5 items-center justify-center">
              <Image
                quality={100}
                src={"https://res.cloudinary.com/dnfv0h10u/image/upload/v1720799672/prisma_sgqmjc.svg"}
                alt=""
                width={50}
                height={200}
                className="max-w-[8vw]"
              />
            </div>
          </div>
        </div>
  )
}

export default Stack