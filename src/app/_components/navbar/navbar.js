"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CiSearch, CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 shadow-lg py-4 fixed left-0 top-0"
          : "fixed left-0 bg-black/60 top-8 md:top-9 py-2"
      }`}
    >
      <div className="md:w-[90%] w-[80%] mx-auto flex justify-between items-center gap-10">
        {/* Logo */}
        <div className="img">
          <Image
            src="/images/logo.webp"
            alt="Company Logo"
            width={220}
            height={60}
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:block">
          <ul className="text-white md:text-[15px] text-[16px] font-poppins font-medium flex gap-7 items-center">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Tour Packages</a>
            </li>
            <li>
              <a href="">Book a Transport</a>
            </li>
            <li>
              <a href="">Destinations</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <CiSearch className="text-[20px]" />
            </li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="block text-white text-2xl cursor-pointer lg:hidden"
          onClick={toggleNavbar}
        >
          <CiMenuFries />
        </div>
        <MobileNavbar menu={open} onclose={() => setOpen(false)} />
      </div>
    </motion.div>
  );
};

export default Navbar;
