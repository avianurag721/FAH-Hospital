import React from "react";

import { FaArrowCircleRight } from "react-icons/fa";
import servicesData from "../../Data/ServiceData";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className=" transition-all duration-200 hover:-translate-y-1.5 shadow-blue-500/50  w-[90vw] lg:w-[22vw] min-h-[70vh] rounded-md service-card  bg-white p-4 ">
      <img className=" rounded-md" src={service.image} alt={service.heading} />
      <div className=" flex flex-col gap-2 w-[90%] my-10 ">
        <h3 className=" my-5 text-2xl font-bold ">{service.heading}</h3>
        <p className="  text-slate-500">{service.subheading}</p>
        <a
          href={`${service.nav.nav}`}
          className=" group w-full lg:w-[50%]  flex justify-between items-center"
        >
          <Link to={`${service.nav.navlink}`} className=" flex justify-center items-center gap-5  group-hover:text-red-400 ">
            {service.nav.navTitle}{" "}
            <FaArrowCircleRight className=" group-hover:translate-x-5 group-hover:text-red-400 transition-all duration-200 " />
          </Link>
          
        </a>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="  w-full flex bg-slate-200 gap-3 flex-col justify-center items-center py-10">
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
