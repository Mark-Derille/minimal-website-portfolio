import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
type ProjectCardType = {
  title: string;
  src: string;
  alt: string;
  description: string;
  tools: any;
};

function ProjectCard({ alt, description, src, title, tools }: ProjectCardType) {
  return (
    <div className="flex flex-col gap-y-4">
      <Link
        target="_blank"
        href={"https://hololive-website-redesign.vercel.app/"}
        className="font-bold text-xl flex group items-center hover:text-slate-100"
      >
        {title}
        <FiExternalLink className="transition-all duration-300 group-hover:-translate-y-1 ml-1 w-6 h6" />
      </Link>
      <a
        href="https://hololive-website-redesign.vercel.app/"
        target="_blank"
        className="relative w-full h-[10rem] max-w-[400px] shadow-md rounded-md"
      >
        <Image src={src} alt={alt} fill className="rounded-md object-cover" />
      </a>
      <p className="font-semibold text-slate-400">{description}</p>
      <div className="">{tools}</div>
    </div>
  );
}

export default ProjectCard;
