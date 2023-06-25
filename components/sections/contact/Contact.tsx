import React from "react";
import TitleSection from "../TitleSection";
import { BiMailSend } from "react-icons/bi";

const labelStyle = "font-semibold text-xl mt-6 text-white";
const inputStyle =
  " border-2 focus:border-orange-400 rounded-md p-2 h-[2.5rem] outline-none font-semibold text-slate-800";
function Contact() {
  return (
    <div id="contact" className="pt-24 max-w-[600px] mx-auto">
      <TitleSection title="CONTACT" />
      <div className="bg-slate-800 shadow-md rounded-md py-8 px-6 ">
        <h3 className="text-center font-bold text-3xl text-white">
          Let&apos;s get in touch
        </h3>
        <form
          target="_blank"
          action="https://formsubmit.co/53abc2e882962b8070de951981ebfa46"
          method="POST"
          className="flex flex-col"
        >
          <label className={labelStyle} htmlFor="#name">
            Name
          </label>
          <input name="Name" id="name" type="text" className={inputStyle} />
          <label className={labelStyle} htmlFor="#email">
            Email
          </label>
          <input name="Email" id="email" type="email" className={inputStyle} />
          <label className={labelStyle} htmlFor="#message">
            Message
          </label>
          <textarea
            name="Message"
            id="message"
            className="border-2 focus:border-orange-400 rounded-md p-2 h-[6rem] outline-none font-medium text-slate-800"
          />
          <input type="hidden" name="_captcha" value="false" />
          <button
            className=" w-min py-2 px-4 rounded-md shadow-sm  hover:bg-orange-400 font-bold  text-xl mt-8 bg-orange-500 text-white flex items-center group"
            type="submit"
          >
            Send{" "}
            <BiMailSend className="transition-all duration-300 group-hover:translate-x-1 w-6 h-6 ml-1" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
