import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Common/Footer";
import { apiConnector } from "../../Services/connector";
import { endpoints } from "../../Services/apis";
const { GET_ALL_DOCTORS } = endpoints;

const AllDoctors = () => {
  const [doctors, setDoctors] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getAllDoctors() {
    try {
      console.log("getting all doctors");
      const response = await apiConnector("POST", GET_ALL_DOCTORS);
      console.log("SENDOTP API RESPONSE...1.........", response?.data?.data);
      setDoctors(response?.data?.data);
      console.log(doctors)
    } catch (error) {
      console.log("SENDOTP API ERROR....2........",error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllDoctors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const DoctorsCard = ({ doctor }) => {
    return (
      <div className="flex flex-col justify-center items-center w-[95%] lg:w-[25%] rounded-md doctor-card bg-white p-4">
        <img
          className="transition-all duration-200 hover:scale-105 rounded-md h-4/6"
          height={40}
          width={400}
          src={doctor.image}
          alt={doctor.DoctorsName}
        />
        <div className="flex flex-col w-[90%]">
          <h3 className="text-2xl font-bold">{doctor.name}</h3>
          <p className="text-slate-500">Consultant {doctor.specialization}</p>
          <p className="text-slate-500">
            <span className="text-headingColor">Department: </span>
            {doctor.department ? doctor.department : "NA"}
          </p>
        </div>
        <div className="flex gap-2 lg:gap-0 flex-col lg:flex-row justify-around w-[90%] my-2">
          <Link
            to={`${doctor._id}`}
            className="bg-customColor text-center hover:text-headingColor hover:bg-lightCustomColor text-white px-4 py-2 rounded-md"
          >
            View Profile
          </Link>
          <Link
            className="bg-customColor text-center hover:text-headingColor hover:bg-lightCustomColor text-white px-4 py-2 rounded-md"
            to="/book-appointment"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-fit flex-col font-garamond justify-center bg-lightCustomColor">
      <h1 className="capitalize mx-auto text-white text-3xl font-bold px-4 py-6">
        OUR DOCTORS
      </h1>
      <div className="pb-10 gap-5 w-full flex flex-wrap justify-center">
        {loading ? (
          <p className="text-white">Loading doctors...</p>
        ) : (
          doctors?.map((doctor, index) => (
            <DoctorsCard key={index} doctor={doctor} />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AllDoctors;
