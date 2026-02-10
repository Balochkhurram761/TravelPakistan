import React from "react";
import { CiPhone } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import Header from "../header/header";

const Banner = () => {
  return (
    <div className="banner relative  overflow-hidden">
      <div
        className="w-full h-[60vh]"
        style={{
          backgroundImage: "url('/images/10007.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "",
        }}
      ></div>
      {/* <div className="absolute inset-0 bg-black/40">
        <Header />
        <Navbar />
      </div> */}

      <div className="body w-full absolute flex flex-col gap-7 text-white top-[40px] left-[-45%] sm:top-[70px] md:top-[50px] lg:top-[-20px]  transform translate-x-1/2 translate-y-1/2 ">
        <h1 className=" px-2 text-base/10">
          <span className=" text-2xl uppercase font-normal">
            open your eyes to{" "}
          </span>
          <br />{" "}
          <span className=" text-4xl sm:text-5xl md:text-5xl lg:text-5xl  uppercase font-semibold">
            Shangri La
          </span>{" "}
          <br />{" "}
          <span className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl capitalize font-extrabold">
            The hidden World
          </span>
        </h1>
        <div className="btn flex flex-wrap  gap-9">
          <Link
            href="tel:+92 3214106223"
            target="_blank"
            className="bg-[#81D742] flex flex-row gap-1 items-center px-5 py-3 border-0  rounded-full"
          >
            <CiPhone className="text-whte text-2xl" />
            Call now
          </Link>
          <Link
            href="https://wa.me/923214106223"
            target="_blank"
            className="bg-[#DD9833] flex flex-row gap-1  items-center px-5 py-3 border-0 rounded-full"
          >
            <FaWhatsapp />
            Whatsapp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
