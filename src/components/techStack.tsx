import React from 'react'
import Image from 'next/image'

type Props = {}

const TechStack = (props: Props) => {
  return (
    <div className='flex justify-center md:mt-9 mt-9 md:items-start items-center'>
        <div className='grid xl:grid-cols-4 md:grid-cols-3 lg:grid-rows-2 gap-2 gap-y-3 md:grid-rows-3 grid-cols-1 grid-rows-4'>
            <div className='flex flex-col items-center row-span-1 justify-center max-w-fit'>
              <div className='col-span-1 my-5 min-h-[13rem] max-h-[13rem] flex flex-col justify-center items-center bg-zinc-900 rounded-xl lg:m-7 md:m-3 m-1 p-3 '>
                <div className=' flex justify-center items-center hoho min-h-[100%] bg-gradient-to-r from-violet-200 to-pink-200 rounded-xl p-3 px-9'>
                  <Image src="/nextjs.png" width={100} height={200} alt='Next.js' />
                </div>
              </div>
              <p className='font-extrabold text-xl -mt-4 text-gray-600'>Next.js</p>
            </div>
            <div className='flex flex-col items-center row-span-1 justify-center max-w-fit'>
              <div className='col-span-1 my-5 min-h-[13rem] max-h-[13rem] flex flex-col justify-center items-center bg-zinc-900 rounded-xl lg:m-7 md:m-3 m-1 p-3 '>
                <div className=' flex justify-center items-center hoho min-h-[100%] bg-gradient-to-r from-blue-200 to-cyan-200 rounded-xl p-3 px-9'>
                  <Image src="/tailwind.png" width={100} height={200} alt='Tailwind' />
                </div>
              </div>
              <p className='font-extrabold text-xl -mt-4 text-gray-600'>Tailwind</p>
            </div>
            <div className='flex flex-col items-center row-span-1 justify-center max-w-fit'>
              <div className='col-span-1 my-5 min-h-[13rem] max-h-[13rem] flex flex-col justify-center items-center bg-zinc-900 rounded-xl lg:m-7 md:m-3 m-1 p-3 '>
                <div className=' flex justify-center items-center hoho min-h-[100%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-3 px-9'>
                  <Image src="/react.png" width={100} height={200} alt='React JS' />
                </div>
              </div>
              <p className='font-extrabold text-xl -mt-4 text-gray-600'>React JS</p>
            </div>
            <div className='flex flex-col items-center row-span-1 justify-center max-w-fit'>
              <div className='col-span-1 my-5 min-h-[13rem] max-h-[13rem] flex flex-col justify-center items-center bg-zinc-900 rounded-xl lg:m-7 md:m-3 m-1 p-3 '>
                <div className=' flex justify-center items-center hoho min-h-[100%] bg-gradient-to-r from-lime-400 to-lime-500 rounded-xl p-3 px-9'>
                  <Image src="/nodejs.png" width={100} height={200} alt='Node JS' />
                </div>
              </div>
              <p className='font-extrabold text-xl -mt-4 text-gray-600'>Node JS</p>
            </div>
            <div className='flex in-w-[13rem] flex-col items-center row-span-1 justify-center max-w-fit'>
              <div className='col-span-1 my-5 min-h-[13rem] max-h-[13rem] flex lg:min-w-[13rem] flex-col justify-center items-center bg-zinc-900 rounded-xl lg:m-7 md:m-3 m-1 p-3 '>
                <div className=' flex justify-center items-center hoho min-h-[100%] min-w-full bg-gradient-to-r from-teal-200 to-yellow-200 rounded-xl p-3 px-9'>
                  <Image src="/mongo.png" width={80} height={200} alt='Mongo DB' />
                </div>
              </div>
              <p className='font-extrabold text-xl -mt-4 text-gray-600'>Mongo DB</p>
            </div>
            <div className='flex flex-col items-center row-span-1 justify-center max-w-fit'>
              <div className='col-span-1 my-5 min-h-[13rem] max-h-[13rem] flex flex-col justify-center items-center bg-zinc-900 rounded-xl lg:m-7 md:m-3 m-1 p-3 '>
                <div className=' flex justify-center items-center hoho min-h-[100%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-3 px-9'>
                  <Image src="/postgres.png" width={100} height={200} alt='Postgres' />
                </div>
              </div>
              <p className='font-extrabold text-xl -mt-4 text-gray-600'>Postgres</p>
            </div>
            <div className='flex flex-col items-center row-span-1 justify-center max-w-fit'>
              <div className='col-span-1 my-5 min-h-[13rem] max-h-[13rem] flex flex-col justify-center items-center bg-zinc-900 rounded-xl lg:m-7 md:m-3 m-1 p-3 '>
                <div className=' flex justify-center items-center hoho min-h-[100%] bg-gradient-to-r from-indigo-300 to-blue-300 rounded-xl p-3 px-9'>
                  <Image src="/ts.png" width={100} height={200} alt='TypeScript' />
                </div>
              </div>
              <p className='font-extrabold text-xl -mt-4 text-gray-600'>TypeScript</p>
            </div>
            <div className='flex flex-col items-center row-span-1 justify-center max-w-fit'>
              <div className='col-span-1 my-5 min-h-[13rem] max-h-[13rem] flex flex-col justify-center items-center bg-zinc-900 rounded-xl lg:m-7 md:m-3 m-1 p-3 '>
                <div className=' flex justify-center items-center hoho min-h-[100%] bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl p-3 px-9'>
                  <Image src="/git.png" width={100} height={200} alt='GitHub' />
                </div>
              </div>
              <p className='font-extrabold text-xl -mt-4 text-gray-600'>GitHub</p>
            </div>
        </div>
    </div>
  )
}

export default TechStack
