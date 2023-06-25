import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import { MdContactMail } from "react-icons/md";

type SidebarType = {
  showSidebar: boolean;
  setShowSidebarFalse: any;
};

type CustomLink = {
  href: string;
  label: string;
  icon: any;
  handler: any;
};
const CustomLink = ({ href, label, icon, handler }: CustomLink) => {
  return (
    <a
      onClick={() => handler(false)}
      href={href}
      className="border-2 border-slate-700 hover:border-orange-400 rounded-md  px-4 py-2 bg-slate-900 flex items-center gap-x-3 justify-center text-orange-400"
    >
      {icon}
      {label}
    </a>
  );
};

function Sidebar({ showSidebar, setShowSidebarFalse }: SidebarType) {
  return (
    <div
      className={`transition-all duration-300 ${
        showSidebar ? "left-0" : ""
      } -z-10 lg:hidden fixed right-0 bottom-0 top-0`}
    >
      <div
        className={`relative   ml-auto transition-all duration-300 mt-[56px]  h-screen bg-slate-800 ${
          showSidebar ? "w-full sm:w-[320px]" : "w-0 left-8"
        }`}
      >
        <nav className="pt-10 font-semibold text-2xl flex flex-col mx-auto  gap-y-4 w-full px-8">
          <CustomLink
            handler={setShowSidebarFalse}
            icon={<BsInfoCircle />}
            href="#about"
            label="About"
          />
          <CustomLink
            handler={setShowSidebarFalse}
            icon={<GoProjectSymlink />}
            href="#projects"
            label="Project"
          />
          <CustomLink
            handler={setShowSidebarFalse}
            icon={<MdContactMail />}
            href="#contact"
            label="Contact"
          />
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
