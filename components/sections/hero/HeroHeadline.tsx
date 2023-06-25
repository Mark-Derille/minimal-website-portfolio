import React from "react";
import AccountNav from "./AccountNav";
import Link from "next/link";
import { HiArrowSmRight, HiOutlineMail } from "react-icons/hi";
import Image from "next/image";

function HeroHeadline() {
  return (
    <div className="lg:w-[50%] pt-24 max-w-[600px] mx-auto ">
      <div className="lg:h-screen  lg:fixed">
        <div className="lg:h-full flex flex-col gap-y-2 mb-6 lg:pb-[12rem]">
          <p className="font-bold text-xl sm:text-2xl text-slate-400">
            Hi, 👋 Welcome
          </p>
          <h1 className="text-4xl  sm:text-5xl font-bold ">
            I&apos;m <span className="text-orange-500">Mark Derille</span>
          </h1>
          <h3 className="text-3xl sm:text-4xl  font-bold">
            <span className="text-orange-500">Website</span> Developer
          </h3>
          <p className=" text-slate-400  max-w-[25rem]">
            I&apos;m a{" "}
            <span className="text-slate-300">Frontend Web Developer</span> based
            in <span className="text-slate-300">New Zealand</span>. I specialize
            in creating visually stunning and user-friendly{" "}
            <span className="text-slate-300">Websites</span>.
          </p>

          <Link
            className="rounded-md border-2 border-orange-500 w-min whitespace-nowrap py-2 px-4 text-orange-500 font-bold  flex items-center mb-8 lg:mb-auto mt-4 text-xl group hover:text-orange-400 hover:border-orange-400"
            href={"#contact"}
          >
            Get in touch{" "}
            <HiOutlineMail className="transition-all duration-300 group-hover:translate-x-1  w-6 h-6 ml-1" />
          </Link>
          <div className="">
            <AccountNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroHeadline;
