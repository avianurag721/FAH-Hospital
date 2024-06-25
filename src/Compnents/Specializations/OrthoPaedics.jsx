import React from "react";
import ortho from "../../Images/DetailPageSpecialityImages/ortho.png";
import Services from "../Common/Services";
import Footer from "../Common/Footer";
import ConsultToggle from "../Home/ConsultToggle";

const OrthoPaedics = () => {
  return (
    <div className="  h-screen text-black bg-center gap-16 items-center flex flex-col bg-gradient-to-r from-customColor to-white ">
      <h1 className=" text-black w-[90%] lg:w-[50vw] mt-6  text-4xl text-center font-bold ">
        Empowering Hope Through Personalized cardiac Care By best medical
        experts
      </h1>
      <div className=" font-serif w-[90vw] gap-2 flex  flex-col lg:flex-row justify-around items-center">
        <p className=" w-[90vw] lg:w-[40vw] text-center text-3xl">
          At FAH Hospital, we are dedicated to providing the highest quality
          care in orthopaedics through a patient-centered approach that
          prioritizes compassion and innovation. Our multidisciplinary team,
          consisting of orthopaedic surgeons, radiologists, pathologists,
          physical therapists, and specialized nurses, collaborates to create
          personalized treatment plans tailored to each patient's unique needs.
          Orthopaedic surgeons diagnose and treat musculoskeletal conditions and
          perform advanced surgical procedures. Radiologists provide detailed
          imaging of bones and joints, and pathologists analyze tissue samples
          for accurate diagnosis.
        </p>
        <div>
          <img className=" w-[90vw] lg:w-[35vw]" src={ortho} alt="cardiac" />
        </div>
      </div>
      <ConsultToggle/>
      <Services />
      <Footer />
    </div>
  );
};

export default OrthoPaedics;
