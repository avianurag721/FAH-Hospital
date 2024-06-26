import React from "react";
import logo from "../../Images/cropped-fah-1.webp";
import { BiMessageAltEdit } from "react-icons/bi";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { navData } from "../../Data/NavBarData";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative hidden box-border lg:flex justify-around py-4 items-center">
      <Link to="/">
        <img src={logo} className="" alt="FAH Super Speciality Hospital " />
      </Link>
      {/* Navbar Links */}
      <div className="gap-6 flex text-black">
        {navData.map((item, index) => (
          <div key={index} className="relative">
            {item.Item === "Careers" || item.Item === "Contact Us"|| item.Item === "Doctors" ? (
              <Link
                to={item.nav}
                className="flex justify-center items-center gap-1 py-2"
              >
                {item.Item}
              </Link>
            ) : (
              <div className="group flex justify-center items-center gap-1 py-2">
                {item.Item}
                <p className="group-hover:rotate-180 transition-all duration-600">
                  {item.Item !== "Careers" && item.Item !== "Contact Us" ? (
                    <IoMdArrowDropdown />
                  ) : (
                    ""
                  )}
                </p>
                <div className="hidden top-10 left-1 w-[12rem] bg-customColor rounded-md text-black group-hover:block absolute">
                  {item?.subdata &&
                    item?.subdata.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="flex justify-left gap-2 items-center bg-customColor rounded-md hover:text-white px-4 py-2 border-b"
                      >
                        <img src={subItem.image} className=" " width={35} alt="" />
                        <a className=" " href={subItem.nav}>
                          {subItem.Item}
                        </a>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Right part CTA Buttons */}
      <div className="flex gap-4 justify-center items-center">
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

export default Navbar;
