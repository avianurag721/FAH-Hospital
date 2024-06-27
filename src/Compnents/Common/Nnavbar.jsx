import React, { useState } from "react";
import logo from "../../Images/cropped-fah-1.webp";
import { BiMessageAltEdit } from "react-icons/bi";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { navData } from "../../Data/NavBarData";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Nnavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="relative flex flex-col lg:flex-row justify-between p-4 items-center box-border">
      {/* Logo and Menu Button */}
      <div className="flex justify-between w-full lg:w-auto px-4 lg:px-0">
        <Link to="/">
          <img
            src={logo}
            className="h-12"
            alt="FAH Super Speciality Hospital"
          />
        </Link>
        <button
          className="lg:hidden text-2xl"
          onClick={() => {
            setIsOpen(!isOpen);
            setOpenDropdown(null); // Close all dropdowns when the menu button is toggled
          }}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navbar Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row gap-6 text-black w-full lg:w-auto px-4 lg:px-0 mt-4 lg:mt-0`}
      >
        {navData.map((item, index) => (
          <div key={index} className="relative group">
            <div
              className="flex justify-center items-center gap-1 py-2 cursor-pointer lg:cursor-default"
              onClick={() => toggleDropdown(index)}
            >
              <Link
                to={item.nav}
                className="flex justify-center items-center gap-1 py-2"
              >
                {item.Item}
              </Link>
              {item.subdata && (
                <IoMdArrowDropdown
                  className={`transition-transform duration-600 ${
                    openDropdown === index ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>
            <div
              className={`${
                openDropdown === index ? "block" : "hidden"
              } lg:hidden bg-white rounded-md text-black`}
            >
              {item?.subdata &&
                item?.subdata.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex justify-left gap-2 items-center bg-white rounded-md hover:text-white px-4 py-2 border-b"
                  >
                    <img src={subItem.image} className=" " width={35} alt="" />
                    <a className=" " href={subItem.nav}>
                      {subItem.Item}
                    </a>
                  </div>
                ))}
            </div>
            <div className="hidden lg:group-hover:block absolute top-10 left-1 w-[13rem] bg-white rounded-md text-black">
              {item?.subdata &&
                item?.subdata.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex justify-left gap-2 items-center bg-white hover:bg-slate-300 rounded-md hover:text-white px-4 py-2 border-b"
                  >
                    <img src={subItem.image} className=" " width={35} alt="" />
                    <a className=" " href={subItem.nav}>
                      {subItem.Item}
                    </a>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right part CTA Buttons */}
      <div className="flex gap-4 justify-center items-center mt-4 lg:mt-0">
        <Link
          to="/contact-us"
          className="text-2xl border border-customColor rounded-md p-4"
        >
          <BiMessageAltEdit />
        </Link>
        <a
          href="tel:+8433377712"
          className="hover:scale-105 transition-all duration-200 text-white bg-customColor flex justify-center items-center gap-2 p-3 rounded-md border border-customColor"
        >
          <HiOutlinePhoneMissedCall className="text-lg" /> Request Call Back
        </a>
      </div>
    </div>
  );
};

export default Nnavbar;
