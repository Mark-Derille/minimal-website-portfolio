import React from "react";
import TitleSection from "../TitleSection";
import ProjectCard from "./ProjectCard";

const toolStyle = "rounded-full bg-slate-700 text-slate-300 py-2 px-4";

function Projects() {
  return (
    <div id="projects" className="pt-24 max-w-[600px] mx-auto">
      <TitleSection title="PROJECT" />
      <ProjectCard
        alt="Hololive"
        src="/images/holoWebsite.png"
        title="Hololive Production Website"
        description="A hololivepro.com Website Redesigned"
        tools={
          <div className="flex gap-x-2 font-bold">
            <a href="https://nextjs.org/" target="_blank" className={toolStyle}>
              Nextjs
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className={toolStyle}
            >
              Tailwind
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              className={toolStyle}
            >
              Typescript
            </a>
          </div>
        }
      />
    </div>
  );
}

export default Projects;
