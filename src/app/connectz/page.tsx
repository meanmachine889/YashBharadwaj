import { BellRing, File, FileStack, FileText, FolderOpen, GhostIcon, Handshake, Hourglass, Lock, MessageSquare, MessageSquareMore, MessagesSquare, PersonStandingIcon, Sparkle, UsersRound } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Hedvig_Letters_Sans } from 'next/font/google'
import Screens from './(components)/screens'

type Props = {}

const Clarity = (props: Props) => {
  return (
    <div className='flex flex-col min-w-screen min-h-screen max-w-screen justify-center items-center'>
        <div className='w-[100%] mt-[5rem] flex flex-col justify-center items-center'>
            <Link href={'https://connect-z.vercel.app'} className='bg-blue-500 curddor overflow-y-hidden w-[100%] max-h-fit lg:h-[60vh] justify-center items-center flex gap-9 pt-9 lg:px-9 px-2 pb-5 md:flex-row flex-col-reverse'>
                <Image quality={100} src={'/coon.svg'} alt='' width={200} height={400} className='md:max-w-[60%] md:-mb-[10%] -mb-[5rem]'/>
                <div className='flex flex-col text-gray-300 md:text-[4vw] text-[9vw] font-extrabold md:items-start items-center justify-center'>
                    <div className='flex lg:gap-5 gap-2 font-thin md:mt-0 mt-5 justify-center md:justify-start items-center'>
                        <p>Connect Z</p>
                    </div>
                    <p className='md:text-[2vw] text-[4vw] font-thin md:text-left text-center md:max-w-[100%] text-gray-200 mt-2'>real time chat application<br/> p.s. not tracked by meta</p>
                </div>
            </Link>
            <div className='flex flex-col min-w-[100%] gap-9 mt-9 justify-center items-center'>
                <p className='md:text-[3vw] text-[7vw] font-bold text-gray-300'>built on</p>
                <div className='flex justify-center gap-[5vw] flex-wrap w-[90%]'>
                    <div className='rounded-full flex bg-gray-300 p-5 items-center justify-center'>
                        <Image quality={100} src={'/nextjs.png'} alt='' width={50} height={200} className='max-w-[8vw]'/>
                    </div>
                    <div className='rounded-full flex bg-gray-300 p-5 items-center justify-center'>
                        <Image quality={100} src={'/tailwind.png'} alt='' width={50} height={200} className='max-w-[8vw]'/>
                    </div>
                    <div className='rounded-full flex bg-gray-300 p-5 items-center justify-center'>
                        <Image quality={100} src={'/ts.png'} alt='' width={50} height={200} className='max-w-[8vw]'/>
                    </div>
                    <div className='rounded-full flex bg-gray-300 p-5 items-center justify-center'>
                        <Image quality={100} src={'/google.svg'} alt='' width={50} height={200} className='max-w-[8vw]'/>
                    </div>
                    <div className='rounded-full flex bg-gray-300 p-5 items-center justify-center'>
                        <Image quality={100} src={'/prisma.svg'} alt='' width={50} height={200} className='max-w-[8vw]'/>
                    </div>
                    <div className='rounded-full flex bg-gray-300 p-5 items-center justify-center'>
                        <Image quality={100} src={'/pusher.svg'} alt='' width={50} height={200} className='max-w-[8vw]'/>
                    </div>
                    <div className='rounded-full flex bg-gray-300 p-5 items-center justify-center'>
                        <Image quality={100} src={'/upstash.png'} alt='' width={50} height={200} className='max-w-[8vw]'/>
                    </div>
                </div>
            </div>
            <Screens/>
            <div className='flex flex-col justify-center items-center py-5 my-7 mt-[4rem] border-2 border-gray-500 max-w-[85vw]'>
                <p className='md:text-[3vw] text-[7vw] text-gray-300 font-bold mt-9'>features</p>
                <div className='flex flex-col gap-9 mt-[4rem] w-[85%]'>
                    <div className='flex flex-col gap-2'>
                        <p className='md:text-[2vw] text-[4vw] font-semibold flex items-center gap-2 md:gap-5 text-gray-400'><Lock className='mt-1 text-indigo-500 md:h-6 md:w-6 h-4 w-4'/>google sign-in</p>
                        <p className='md:text-[1.5vw] text-[3vw] font-light md:text-gray-600 text-gray-500'>seamless and secure sign-in using your google account. no need to remember additional passwords, simply use your existing google credentials.</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='md:text-[2vw] text-[4vw] font-semibold flex items-center gap-2 md:gap-5 text-gray-400'><MessageSquareMore className='mt-1 text-indigo-500 md:h-6 md:w-6 h-4 w-4'/>realtime chat</p>
                        <p className='md:text-[1.5vw] text-[3vw] font-light md:text-gray-600 text-gray-500'>engage in live conversations with your friends. messages are delivered instantly, ensuring smooth and dynamic interactions.</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='md:text-[2vw] text-[4vw] font-semibold flex items-center gap-2 md:gap-5 text-gray-400'><BellRing className='mt-1 text-indigo-500 md:h-6 md:w-6 h-4 w-4'/>request notifications</p>
                        <p className='md:text-[1.5vw] text-[3vw] font-light md:text-gray-600 text-gray-500'>receive instant notifications for friend requests and other important updates. stay informed and respond promptly.</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='md:text-[2vw] text-[4vw] font-semibold flex items-center gap-2 md:gap-5 text-gray-400'><Handshake className='mt-1 text-indigo-500 md:h-6 md:w-6 h-4 w-4'/>find friends by email</p>
                        <p className='md:text-[1.5vw] text-[3vw] font-light md:text-gray-600 text-gray-500'>interact with your pdf documents through chat. our ai, powered by gemini, provides precise answers based solely on the content of your uploaded pdfs.</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='md:text-[2vw] text-[4vw] font-semibold flex items-center gap-2 md:gap-5 text-gray-400'><UsersRound className='mt-1 text-indigo-500 md:h-6 md:w-6 h-4 w-4'/>friend requests management</p>
                        <p className='md:text-[1.5vw] text-[3vw] font-light md:text-gray-600 text-gray-500'> manage your friend requests efficiently. accept or reject requests with a single click to maintain control over your connections.</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='md:text-[2vw] text-[4vw] font-semibold flex items-center gap-2 md:gap-5 text-gray-400'><Hourglass className='mt-1 text-indigo-500 md:h-6 md:w-6 h-4 w-4'/>pusher integration</p>
                        <p className='md:text-[1.5vw] text-[3vw] font-light md:text-gray-600 text-gray-500'>powered by pusher for reliable and real-time features. enjoy a responsive and interactive experience without any delays.</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='md:text-[2vw] text-[4vw] font-semibold flex items-center gap-2 md:gap-5 text-gray-400'><MessagesSquare className='mt-1 text-indigo-500 md:h-6 md:w-6 h-4 w-4'/>main page</p>
                        <p className='md:text-[1.5vw] text-[3vw] font-light md:text-gray-600 text-gray-500'> view all your friends and their latest chat messages on the main page. quickly access recent conversations and stay connected effortlessly.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clarity