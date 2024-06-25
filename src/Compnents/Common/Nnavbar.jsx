import React, { useState } from "react";
import logo from "../../Images/cropped-fah-1.webp";
import { BiMessageAltEdit } from "react-icons/bi";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { navData } from "../../Data/NavBarData";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";


//  ****************************this is rough navbar this is  no implemented in the website ************************************************

const Nnavbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubMenu = (index) => {
    if (openSubMenuIndex === index) {
      setOpenSubMenuIndex(null);
    } else {
      setOpenSubMenuIndex(index);
    }
  };

  return (
    <div className="bg-white shadow-md z-50 w-full fixed top-0">
      <div className="flex justify-between items-center px-4 lg:px-8 py-4">
        <Link to="/">
          <img src={logo} className="h-10 lg:h-16" alt="FAH Super Speciality Hospital" />
        </Link>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <div className="hidden lg:flex gap-6 text-black items-center">
          {navData.map((item, index) => (
            <div key={index} className="relative">
              {item.Item === "Careers" || item.Item === "Contact Us" ? (
                <Link to={item.nav} className="flex justify-center items-center gap-1 py-2">
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
                  <div className="hidden top-10 left-1 w-[12rem] bg-white rounded-md text-slate-600 group-hover:block absolute">
                    {item?.subdata &&
                      item?.subdata.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className="flex justify-left gap-2 items-center hover:bg-customColor rounded-md hover:text-white px-4 py-2 border-b"
                        >
                          <img src={subItem.image} width={20} alt="" />
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
        <div className="hidden lg:flex gap-4 justify-center items-center">
          <Link to="/contact-us" className="text-2xl border border-customColor rounded-md p-4">
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
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-white py-4">
          {navData.map((item, index) => (
            <div key={index} className="w-full">
              {item.Item === "Careers" || item.Item === "Contact Us" ? (
                <Link
                  to={item.nav}
                  className="block w-full text-center py-2 border-b border-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.Item}
                </Link>
              ) : (
                <div className="relative group w-full">
                  <button
                    className="block w-full text-left py-2 px-4 border-b border-gray-200 focus:outline-none"
                    onClick={() => toggleSubMenu(index)}
                  >
                    {item.Item}
                    {item.Item !== "Careers" && item.Item !== "Contact Us" && (
                      <IoMdArrowDropdown className="inline ml-1" />
                    )}
                  </button>
                  {openSubMenuIndex === index && (
                    <div className="bg-white w-full z-10">
                      {item?.subdata &&
                        item?.subdata.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.nav}
                            className="block w-full text-left py-2 px-4 border-b border-gray-200 hover:bg-customColor hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.Item}
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          <div className="w-full flex justify-center gap-4 mt-4">
            <Link to="/contact-us" className="text-2xl border border-customColor rounded-md p-4">
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
      )}
    </div>
  );
};

export default Nnavbar;
