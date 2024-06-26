import React from "react";
import img2 from "../../Images/FahBannerDummy.jpg";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

const DoctorProfile = () => {
  return (
    <div className=" w-full bg-white min-h-screen">
      <div className="flex justify-center items-center flex-col w-[98%] my-2 lg:my-10 lg:[90%]">
        <h1 className=" text-4xl font-serif my-4">Doctor's profile</h1>
        <div className="flex justify-center gap-5 ">
          {/* image of doctor   */}
          <img src={img2} className=" w-[60%] bg-red-500" alt="" />
          {/* info of doctor   */}
          <div className=" flex flex-col">
            <div>
              <p>
                <span className="  text-2xl font-serif">Name: </span> Nupoor
                Singh{" "}
              </p>
              <p>
                <span className="  text-2xl font-serif">Specialization:</span>{" "}
                MBBS, MS
              </p>
              <p>
                <span className="  text-2xl font-serif">Experience: </span> x
                Yrs.{" "}
              </p>
              <p>
                <span className="  text-2xl font-serif">Department: </span>{" "}
                Gynae
              </p>
              <p>
                <span className="  text-2xl font-serif">
                  Consultation fees:{" "}
                </span>{" "}
                123
              </p>
            </div>
            <Link
              to="/book-appointment"
              className=" mt-8 py-2 px-4 rounded-md bg-customColor hover:bg-lightCustomColor hover:text-white"
            >
              {" "}
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorProfile;
