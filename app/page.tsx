import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import HeroHeadline from "@/components/sections/hero/HeroHeadline";
import Projects from "@/components/sections/projects/Projects";

export default function Home() {
  return (
    <main className="lg:flex min-w-[320px]  max-w-[1300px] mx-auto px-6 sm:px-12 ">
      <HeroHeadline />
      <div className="lg:w-[50%]">
        <About />

        <Projects />
        <Contact />
        <div className="mt-24 py-6 px-6  text-center flex items-center font-semibold text-slate-400">
          <p className="">
            Developed using{" "}
            <a
              className="text-slate-300"
              target="_blank"
              href="https://nextjs.org/"
            >
              Next.js
            </a>
            ,{" "}
            <a
              target="_blank"
              href="https://www.typescriptlang.org/"
              className="text-slate-300"
            >
              Typescript
            </a>
            , and{" "}
            <a
              target="_blank"
              href="https://tailwindcss.com/"
              className="text-slate-300"
            >
              Tailwind CSS
            </a>
            , and hosted on{" "}
            <a
              target="_blank"
              href="https://vercel.com/"
              className="text-slate-300"
            >
              Vercel
            </a>
            . The entire content employs the Inter font for consistent
            typography.
          </p>
        </div>
      </div>
    </main>
  );
}
