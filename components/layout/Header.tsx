"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import Sidebar from "./Sidebar";

type CustomLinkType = {
  href: string;
  label: string;
};

const CustomLink = ({ label, href }: CustomLinkType) => {
  return (
    <Link href={href} className="group hover:text-slate-100">
      {label}
      <div className="transition-[width] duration-300 h-[1px] w-0 bg-orange-400 group-hover:w-full"></div>
    </Link>
  );
};

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <header className="z-[100] fixed w-full h-14 lg:h-16    px-4 sm:px-10 bg-slate-900 shadow-md ">
      <div className="flex items-center w-full h-full max-w-[1215px] mx-auto">
        <Link
          href={"/"}
          className="border-2 shadow-sm border-orange-400 rounded-full relative w-[45px] lg:w-[50px] h-[80%]"
        >
          <Image
            src={"/images/profile.jpg"}
            alt="profile"
            fill
            className="rounded-full"
            sizes="100"
          />
        </Link>
        <nav className="relative left-24  gap-x-6 hidden lg:flex mx-auto text-xl">
          <CustomLink href="#about" label="About" />
          <CustomLink href="#projects" label="Project" />
          <CustomLink href="#contact" label="Contract" />
        </nav>
        <button
          onClick={() => {
            if (showSidebar) {
              setShowSidebar(false);
            } else {
              setShowSidebar(true);
            }
          }}
          className=" ml-auto lg:hidden"
        >
          {showSidebar ? (
            <IoCloseOutline className="w-9 h-9 text-orange-500" />
          ) : (
            <IoMenuOutline className="w-9 h-9 text-orange-500" />
          )}
        </button>

        <Sidebar
          setShowSidebarFalse={setShowSidebar}
          showSidebar={showSidebar}
        />
      </div>
    </header>
  );
}

export default Header;
