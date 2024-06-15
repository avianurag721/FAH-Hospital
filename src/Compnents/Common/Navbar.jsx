import React from "react";
import logo from "../../Images/cropped-fah-1.webp";
import { BiMessageAltEdit } from "react-icons/bi";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";

const navData = [
  {
    Item: "Location",
    nav: "/",
    subdata: {
      Item: "",
      nav:""
    }
  },
  {
    Item: "Speciality",
    nav: "/",
  },
  {
    Item: "Health Library",
    nav: "/",
  },
  {
    Item: "Services",
    nav: "/",
  },
  {
    Item: "International Patients",
    nav: "/",
  },
  {
    Item: "Careers",
    nav: "/",
  },
  {
    Item: "Contact Us",
    nav: "/",
  },
];
console.log(navData);

const Navbar = () => {
  return (
    <div className=" hidden box-border lg:flex justify-around py-4  items-center">
      <img src={logo} className="" alt="FAH Super Speciality Hospital " />
      {/* navbar   links */}
      <div className=" gap-6 flex text-black">
        {" "}
        {navData.map((item) => (
          <a
            className=" flex justify-center items-center gap-1 group py-2"
            href={item.nav}
          >
            {" "}
            {item.Item}{" "}
            <p className=" group-hover:rotate-180 transition-all duration-600">
              {item.Item !== "Careers" ? <IoMdArrowDropdown /> : ""}{" "}
            </p>
          </a>
        ))}{" "}
      </div>

      {/* right part CTA Buttons  */}

      <div className=" flex gap-4  justify-center items-center">
        <a
          href="/contact"
          className=" text-2xl border border-red-400  rounded-md p-4"
        >
          {" "}
          <BiMessageAltEdit />{" "}
        </a>
        <button className=" hover:scale-105 transition-all duration-200 bg-red-200 flex justify-center items-center gap-2 p-3 rounded-md border border-red-400">
          {" "}
          <HiOutlinePhoneMissedCall className=" text-lg" /> Request Call Back
        </button>
      </div>
    </div>
  );
};

export default Navbar;
