import SectionArray from "@/data/SectionArray";
import Image from "next/image";
import React from "react";

const Section = () => {
  return (
    <div className="backg" style={{ backgroundColor: "#477DE7" }}>
      <div className="section m-auto   w-11/12 md:11/12  lg:w-10/12 grid grid-cols-1 sm:grid-cols-2   md:grid-cols-2  lg:grid-cols-4  gap-4 p-4 justify-items-start sm:justify-items-start md:justify-items-center lg:justify-items-center capitalize">
        {SectionArray.map((item, index) => (
          <div
            key={index}
            className="section1 flex items-center justify-center gap-4 cursor-pointer transition-transform duration-200 hover:scale-105"
            role="listitem"
            aria-label={item.title}
          >
            <div className="img">
              <Image src={item.img} alt={item.title} width={40} height={40} />
            </div>
            <div className="cardbody text-white font-bold text-center text-sm sm:text-sm md:text-base lg:text-[1.2vw] ">
              <h1>{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
