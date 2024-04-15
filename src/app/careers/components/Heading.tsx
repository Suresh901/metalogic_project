import React from "react";

interface PropsData {
  title1: string;
  title: string;
  desc?: string;
}

const Heading: React.FC<PropsData> = ({ title1, title, desc }) => {
  return (
    <div className="flex flex-col items-center gap-5 pt-40 pb-10">
      <h1 className="text-[#e53b3a] font-bold text-2xl">{title1}</h1>
      <h1 className="text-2xl lg:text-4xl font-bold text-[#334767]">{title}</h1>
      <div className="text-center">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Heading;
