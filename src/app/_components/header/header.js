// components/Header.jsx
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <div className="absolute top-0 w-full bg-black/60 z-50">
      <div className="md:w-[90%] w-[80%] mx-auto flex p-2 items-center justify-between text-white">
        <div className="flex gap-4 text-sm">
          <Link href="tel:+923214106223" className="flex items-center gap-3">
            <FaPhoneAlt />{" "}
            <p className="hidden sm:hidden md:block"> +92 321 410 6223</p>
          </Link>
          <Link
            href="mailto:info@pakistantravelplaces.com"
            className="flex items-center gap-3"
          >
            <IoMail />{" "}
            <p className="hidden sm:hidden md:block">
              {" "}
              info@pakistantravelplaces.com{" "}
            </p>
          </Link>
        </div>
        <div className="flex text-base gap-3">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagramSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
