import React from "react";
import renal from "../../Images/DetailPageSpecialityImages/renal.png";
import Services from "../Common/Services";
import Footer from "../Common/Footer";
import ConsultToggle from "../Home/ConsultToggle";

const RenalCare = () => {
  return (
    <div className="  text-headingColor bg-center gap-16 items-center flex flex-col bg-lightShade ">
      <h1 className=" text-headingColor w-[90%] lg:w-[50vw] mt-6  text-4xl text-center font-bold ">
        Empowering Hope Through Personalized cardiac Care By best medical
        experts
      </h1>
      <div className=" font-serif w-[90vw] gap-2 flex  flex-col lg:flex-row justify-around items-center">
        <p className=" w-[90vw] lg:w-[40vw] text-center text-lg lg:text-2xl">
          At FAH Hospital, we are dedicated to providing the highest quality
          renal care through a patient-centered approach that prioritizes
          compassion and innovation. Our multidisciplinary team, consisting of
          nephrologists, urologists, radiologists, pathologists, dialysis
          technicians, and specialized nurses, collaborates to create
          personalized treatment plans tailored to each patient's unique needs.
          Nephrologists diagnose and manage kidney diseases, while urologists
          perform advanced surgical procedures. Radiologists provide detailed
          imaging of the kidneys and urinary tract, and pathologists analyze
          tissue samples for accurate diagnosis.
        </p>
        <div>
          <img className=" w-[90vw] lg:w-[25vw]" src={renal} alt="cardiac" />
        </div>
      </div>
      <ConsultToggle/>
      <Services />
      <Footer />
    </div>
  );
};

export default RenalCare;
