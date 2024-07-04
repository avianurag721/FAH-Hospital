import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../Images/operatontheatre.png";
import img2 from "../../Images/FahBannerDummy.jpg";
import img3 from "../../Images/FahBannerDummy.jpg";
import img4 from "../../Images/operatontheatre.png";
import img5 from "../../Images/FahBannerDummy.jpg";
import img6 from "../../Images/FahBannerDummy.jpg";
import Footer from "../Common/Footer";

const AllDoctors = () => {
  const Doctors = [
    {
      DoctorImage: img1,
      DoctorsName: "xyz",
      Qualification: "MBBS,MS(Pbs & Gynae)",
      Specialization: "",
      Fees: "",
      Experience: "0-years",
      id: 1,
    },
    {
      DoctorImage: img2,
      DoctorsName: "xyz",
      Qualification: "MBBS,MS(Pbs & Gynae)",
      Specialization: "",
      Fees: "",
      Experience: "0-years",
      id: 2,
    },
    {
      DoctorImage: img3,
      DoctorsName: "xyz",
      Qualification: "MBBS,MS(Pbs & Gynae)",
      Specialization: "",
      Fees: "",
      Experience: "0-years",
      id: 1,
    },
    {
      DoctorImage: img4,
      DoctorsName: "xyz",
      Qualification: "MBBS,MS(Pbs & Gynae)",
      Specialization: "",
      Fees: "",
      Experience: "0-years",
      id: 1,
    },
    {
      DoctorImage: img5,
      DoctorsName: "xyz",
      Qualification: "MBBS,MS(Pbs & Gynae)",
      Specialization: "",
      Fees: "",
      Experience: "0-years",
      id: 1,
    },
    {
      DoctorImage: img6,
      DoctorsName: "xyz",
      Qualification: "MBBS,MS(Pbs & Gynae)",
      Specialization: "Gynaecology",
      Fees: "",
      Experience: "0-years",
      id: 1,
    },
  ];

  const DoctorsCard = ({ doctor }) => {
    return (
      <div className=" flex flex-col justify-center items-center  shadow-blue-500/50  w-[95%] lg:w-[25%]  rounded-md doctor-card  bg-white p-4 ">
        <img
          className=" transition-all duration-200 hover:scale-105 rounded-md h-4/6"
          height={40}
          width={400}
          src={doctor.DoctorImage}
          alt={doctor.DoctorsName}
        />
        <div className=" flex flex-col w-[90%] ">
          <h3 className=" text-2xl font-bold ">{doctor.DoctorsName}</h3>
          <p className="  text-slate-500">{doctor.Qualification}</p>
          <p className="  text-slate-500">
            {" "}
            <span className=" text-headingColor">Department: </span>
            {doctor.Specialization ? doctor.Specialization : "NA"}
          </p>
        </div>
        <div className=" flex gap-2 lg:gap-0 flex-col lg:flex-row justify-around w-[90%] my-2 ">
          <Link
            to={`${doctor.id}`}
            className="bg-customColor text-center hover:text-headingColor  hover:bg-lightCustomColor text-white px-4 py-2 rounded-md"
          >
            View Profile
          </Link>
          <Link
            className="bg-customColor text-center hover:text-headingColor  hover:bg-lightCustomColor text-white px-4 py-2 rounded-md"
            to="/book-appointment"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div className=" flex h-fit flex-col justify-center bg-customColor from-customColor to-UltraLlightCustomColor ">
      <h1 className=" capitalize mx-auto  text-3xl font-bold font-sans  px-4 py-6">
        OUR DOCTORS
      </h1>
      <div className=" bg-gradient-to-b  pb-10 gap-5 w-full flex flex-wrap justify-center">
        {Doctors.map((doctor, index) => (
          <DoctorsCard key={index} doctor={doctor} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllDoctors;
