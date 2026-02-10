import React from 'react';
import Image from 'next/image';

const HeroSection2 = () => {
  return (
    <div className="herosection2 relative w-full h-[500px]">
      {/* Background Image */}
      <Image 
        src="/images/10006.jpg" 
        alt="image" 
        layout="fill" 
        objectFit="cover" 
        priority
        className="z-0"
      />

      {/* Card Body */}
      <div className=" color  absolute flex flex-col items-center justify-center inset-0 bg-black/20">
     <div className="cardbody absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 sm:-translate-x-1/2 md:-translate-x-1/6 md:-translate-y-1/2 md:-translate-x-1/12 md:-translate-y-1/2 flex flex-col items-start sm:items-center md:items-center lg:items-center justify-center text-white p-6 gap-2.5 w-[88%] md:w-[50%] lg:w-[50%]">

        <h1 className=" text-3xl  sm:text-[3vw] md:text-[2.7vw] lg:text-[2.2vw]  font-bold ">
          Explore Pakistan with us.
        </h1>
        <h2 className=" text-lg sm:text-[2.4vw] md:text-[1.7vw]  lg:text-[1.4vw] font-semibold ">
          Avail Discounted Tours <span className="text-yellow-400">Up to 30% off</span>
        </h2>
        <p className=" text-start sm:text-center md:text-center lg:text-center text-sm sm:text-[1.8vw] md:text-[1.4vw] lg:text-[1.1vw]  py-0.5 px-0.5 ">
          Let’s indulge in the amazing life experience of traveling to Pakistan. 
          Hassle-free fully managed tours with an option to customization as per 
          client needs, guided tours, safe and secure travel, best accommodations 
          and quality food. Search your favorite tourist destinations of Pakistan 
          below or check out our latest travel blogs.
        </p>
        <a 
          href="#" 
          className="bg-yellow-400 text-black py-2 px-6 rounded-lg text-xs sm:text-[1.6vw] md:text-[1.3vw] lg:text-[1vw]  hover:bg-yellow-500 transition duration-200"
        >
          See Promotional Tours
        </a>
      </div>
      </div>

      
    </div>
  );
};

export default HeroSection2;
    