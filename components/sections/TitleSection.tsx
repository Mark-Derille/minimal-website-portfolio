import React from "react";

type TitleSectionType = {
  title: string;
};

function TitleSection({ title }: TitleSectionType) {
  return (
    <div>
      <h2 className="font-bold text-3xl mb-6 text-orange-500">{title}</h2>
    </div>
  );
}

export default TitleSection;
