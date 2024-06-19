import React from "react";
import { Link } from "react-router-dom";

const ToggleData = [
  {
    image: "",
    Data: "BooK Appointment",
    nav: "/book-appointment",
  },
  {
    image: "",
    Data: "Second Opinion",
    nav: "/second-opinion",
  },
  {
    image: "",
    Data: "Get Health Checkup",
    nav: "/health-check",
  },
  {
    image: "",
    Data: "Book A Virtual Consultantion",
    nav: "/book-appointment",
  },
  {
    image: "",
    Data: "Home Care",
    nav: "/home-care",
  },
  {
    image: "",
    Data: "Book a Test",
    nav: "/book-appointment",
  },
];

const ConsultToggle = () => {
  return (
    <div className=" my-4 border-2 lg:mx-16 rounded-md bg-white  border-red-500 flex flex-col lg:flex-row justify-between  items-center ">
      {ToggleData.map((item, index) => {
        return (
          <Link to={item.nav}
            key={index}
            className={`${
              index === 0 ? "bg-red-600" : " bg-white"
            } cursor-pointer hover:bg-red-600 border-r  py-6 lg:py-6 h-full text-center flex justify-center items-center w-full lg:w-[15rem]`}
          >
            <img src={item.image} alt="" />
            <p> {item.Data} </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ConsultToggle;
