import React from "react";
import { IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const MobileNavbar = ({ menu, onclose }) => {
  return (
    <div
      className={`lg:hidden fixed  top-0 left-0 w-[90%] sm:w-[400px] h-[100vh] bg-black/100 z-50 transition-transform duration-300 ${
        menu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={onclose}
          className="text-white text-3xl cursor-pointer"
        >
          <IoMdClose />
        </button>
      </div>

      {/* Menu Items */}
      <ul className="text-white flex flex-col gap-6 text-lg font-poppins font-medium">
        <li>
          <a
            href=""
            className="block w-full px-6 py-1 hover:bg-white/10 transition"
          >
            Home
          </a>
        </li>
        <hr />
        <li>
          <a
            href=""
            className="block w-full px-6 py-1 hover:bg-white/10 transition"
          >
            Tour Packages
          </a>
        </li>
        <hr />
        <li>
          <a
            href=""
            className="block w-full px-6 py-1 hover:bg-white/10 transition"
          >
            Book a Transport
          </a>
        </li>
        <hr />
        <li>
          <a
            href=""
            className="block w-full px-6 py-1 hover:bg-white/10 transition"
          >
            Destinations
          </a>
        </li>
        <hr />
        <li>
          <a
            href=""
            className="block w-full px-6 py-1 hover:bg-white/10 transition"
          >
            Blog
          </a>
        </li>
        <hr />
        <li>
          <a
            href=""
            className="block w-full px-6 py-1 hover:bg-white/10 transition"
          >
            About Us
          </a>
        </li>
        <hr />
        <li>
          <a
            href=""
            className="block w-full px-6 py-1 hover:bg-white/10 transition"
          >
            Contact
          </a>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default MobileNavbar;
