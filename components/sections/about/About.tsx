import React from "react";
import SectionTitle from "../TitleSection";

type AboutCardType = {
  text: string;
};
const AboutCard = ({ text }: AboutCardType) => {
  return (
    <p className="border-2 rounded-md mb-6 font-semibold border-orange-500 p-4 shadow-md">
      {text}
    </p>
  );
};

function About() {
  return (
    <div id="about" className="pt-24 max-w-[600px] mx-auto">
      <SectionTitle title="ABOUT" />
      <AboutCard
        text="   I'm a Frontend Web Developer who enjoys anime, VTubers, and video
        games while crafting impactful front-end solutions for websites and web
        applications, driving the overall product's success."
      />
      <AboutCard
        text="  I'm actively seeking job opportunities where I can contribute,
        learn, and grow. If you have a fitting opportunity that aligns with my
        skills and experience, feel free to reach out to me without hesitation."
      />
    </div>
  );
}

export default About;
