import React from "react";
import {
    BarChartHorizontal,
    Calendar,
  File,
  FileStack,
  FileText,
  FlameKindling,
  FolderOpen,
  GhostIcon,
  Lock,
  MessageSquare,
  PersonStandingIcon,
  ShoppingCart,
  Sparkle,
  TicketCheck,
  VenetianMask,
} from "lucide-react";
type Props = {};

const Features = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center py-5 my-7 mt-[4rem] border-2 border-gray-500 w-[90%]">
      <p className="md:text-[3vw] text-[7vw] text-gray-300 font-bold mt-9">
        features
      </p>
      <div className="flex flex-col gap-9 mt-[4rem] w-[85%]">
        <div className="flex flex-col gap-2">
          <p className="md:text-[2vw] text-[4vw] font-semibold flex items-center gap-2 md:gap-5 text-gray-400">
            <Lock className="mt-1 text-blue-500 md:h-6 md:w-6 h-4 w-4" />{" "}
            secure user sign-In
          </p>
          <p className="md:text-[1.5vw] text-[3vw] font-light md:text-gray-600 text-gray-500">
            ensure the security of your account with username and password
            authentication. sign in confidently knowing your information is
            protected.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="md:text-[2vw] text-[4vw] font-semibold flex items-center gap-2 md:gap-5 text-gray-400">
            <TicketCheck className="mt-1 text-blue-500 md:h-6 md:w-6 h-4 w-4" />
            event ticket purchase
          </p>
          <p className="md:text-[1.5vw] text-[3vw] font-light md:text-gray-600 text-gray-500">
            {" "}
            browse and buy tickets for a wide range of events. easily find
            events by date and location, and view all the essential details
            including the number of tickets remaining, event date, and location.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="md:text-[2vw] text-[4vw] font-semibold flex items-center gap-2 md:gap-5 text-gray-400">
            <Calendar className="mt-1 text-blue-500 md:h-6 md:w-6 h-4 w-4" />
            event listings
          </p>
          <p className="md:text-[1.5vw] text-[3vw] font-light md:text-gray-600 text-gray-500">
            {" "}
            stay informed with our comprehensive events section. access all the
            necessary information about upcoming events, including the number of
            tickets left, dates, and locations, making it easy to plan your next
            outing.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="md:text-[2vw] text-[4vw] font-semibold flex items-center gap-2 md:gap-5 text-gray-400">
            <ShoppingCart className="mt-1 text-blue-500 md:h-6 md:w-6 h-4 w-4" />
            purchase history
          </p>
          <p className="md:text-[1.5vw] text-[3vw] font-light md:text-gray-600 text-gray-500">
            keep track of your ticket purchases with our detailed purchase
            history feature. view records including the day, date, time, amount
            spent, number of tickets purchased, and event details for complete
            transparency.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="md:text-[2vw] text-[4vw] font-semibold flex items-center gap-2 md:gap-5 text-gray-400">
            <FlameKindling className="mt-1 text-blue-500 md:h-6 md:w-6 h-4 w-4" />
            host your event
          </p>
          <p className="md:text-[1.5vw] text-[3vw] font-light md:text-gray-600 text-gray-500">
            are you an event organizer? host your event on our platform. easily
            manage your event listings and reach a wide audience.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="md:text-[2vw] text-[4vw] font-semibold flex items-center gap-2 md:gap-5 text-gray-400">
            <BarChartHorizontal className="mt-1 text-blue-500 md:h-6 md:w-6 h-4 w-4" />
            organizing stats
          </p>
          <p className="md:text-[1.5vw] text-[3vw] font-light md:text-gray-600 text-gray-500">
            gain insights into your event&apos;s performance with our organizing
            stats. track key metrics such as event name, tickets sold, and
            detailed day and date information to measure your event&apos;s success.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="md:text-[2vw] text-[4vw] font-semibold flex items-center gap-2 md:gap-5 text-gray-400">
            <VenetianMask className="mt-1 text-blue-500 md:h-6 md:w-6 h-4 w-4" />
            admin portal
          </p>
          <p className="md:text-[1.5vw] text-[3vw] font-light md:text-gray-600 text-gray-500">
            efficiently manage event organization requests with our admin
            portal. accept or reject organizing requests seamlessly to maintain
            the quality and relevance of the events hosted on our platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
