import React from "react";

import { FaArrowCircleRight } from "react-icons/fa";
import checkup from "../../Images/services/checkup.png";
import air from "../../Images/services/airAmbulance.png";
import healthCare from "../../Images/services/healthCare.png";
import homeCare from "../../Images/services/homeCare.png";

const servicesData = [
  {
    image: healthCare,
    heading: "Health Care",
    subheading:
      "Confirm Diagnosis and take  informed decision about your treatment plan with some of india top experts.",
    nav: {
      navlink: "",
      navTitle: "Know More",
    },
    icon: "",
  },
  {
    image: homeCare,
    heading: "Home Services",
    subheading:
      "We Continue to give you the best care possible, Even after you reach home",
    nav: {
      navlink: "",
      navTitle: "Know More",
    },
    icon: "",
  },

  {
    image: checkup,
    heading: "Health Check",
    subheading:
      "Take Charge of your well-Being with a health experience customized for you",
    nav: {
      navlink: "",
      navTitle: "Know More",
    },
    icon: "",
  },

  {
    image: air,
    heading: "Air Ambulance ",
    subheading:
      "We are equipped to treat and transport the critically ill patients across the country",
    nav: {
      navlink: "",
      navTitle: "Know More",
    },
    icon: "",
  },
];

const ServiceCard = ({ service }) => {
  return (
    <div className=" transition-all duration-200 hover:shadow shadow-blue-500/50  w-[90vw] lg:w-[22vw] min-h-[70vh] rounded-md service-card  bg-white p-4 ">
      <img className=" rounded-md" src={service.image} alt={service.heading} />
      <div className=" flex flex-col gap-2 w-[90%] my-10 ">
        <h3 className=" my-5 text-2xl font-bold ">{service.heading}</h3>
        <p className="  text-slate-500">{service.subheading}</p>
        <a
          href={`${service.nav.nav}`}
          className=" group w-full lg:w-[50%]  flex justify-between items-center"
        >
          <p className=" flex justify-center items-center gap-5  group-hover:text-red-400 ">
            {service.nav.navTitle}{" "}
            <FaArrowCircleRight className=" group-hover:translate-x-5 group-hover:text-red-400 transition-all duration-200 " />
          </p>
        </a>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className=" flex bg-slate-200 gap-3 flex-col justify-center items-center py-10">
      <h1 className=" font-bold text-2xl "> Services</h1>
      <div className="  flex flex-col lg:flex-row gap-3 justify-around items-center">
        {servicesData.map((item, index) => (
          <ServiceCard key={index} service={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
