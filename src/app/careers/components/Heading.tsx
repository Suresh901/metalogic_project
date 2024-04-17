"use client"
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


//defining data types
interface PropsData {
  title1: string;
  title: string;
  desc?: string;
  className?: string;
}

const Heading: React.FC<PropsData> = ({ title1, title, desc, className }) => {
   useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex flex-col items-center gap-5 pt-40 pb-10" data-aos="fade-up"
     data-aos-duration="2000">
      <h1 className={`text-[#e53b3a] font-bold text-2xl ${className}`}>{title1}</h1>
      <h1 className="text-2xl lg:text-4xl font-bold text-[#334767]">{title}</h1>
      <div className="text-center">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Heading;
