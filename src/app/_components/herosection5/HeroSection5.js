import React from 'react';
import Image from 'next/image';
import { CiImageOn } from "react-icons/ci";

const HeroSection5 = () => {
  return (
    <div className="herosection5 grid grid-cols-1 relative  h-[170px] sm:h-[200px]  md:h-[400px] lg:h-[500px] m-auto w-[100%] sm:w-[80%] md:w-[100%] lg:w-[90%]  my-1 cursor-pointer group">
      
   <div className="relative     ">
        <Image
          src="/images/10011.jpg"
          alt="Hero Image"
          fill
          priority
          className=''
         
        />
      </div>

      <div className="svg  absolute inset-0  w-full     m-auto bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
      <div className="logo absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[4rem]">
 <CiImageOn />
 </div>

   </div>
    </div>
  );
};

export default HeroSection5;
