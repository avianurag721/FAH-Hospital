import React from "react";
import neuro from "../../Images/DetailPageSpecialityImages/neuro.png";
import Services from "../Common/Services";
import Footer from "../Common/Footer";
import ConsultToggle from "../Home/ConsultToggle";

const NeuroSciences = () => {
  return (
    <div className=" text-headingColor bg-center gap-2 lg:gap-12 items-center flex flex-col bg-lightShade ">
      <h1 className=" text-headingColor w-[90%] lg:w-[50vw] mt-6 text-xl  lg:text-4xl text-center font-bold ">
        Empowering Hope Through Personalized cardiac Care By best medical
        experts
      </h1>
      <div className=" font-serif w-[90vw] gap-2 flex  flex-col lg:flex-row justify-around items-center">
        <p className=" w-[96vw] lg:w-[40vw] text-justify text-lg lg:text-2xl">
          At FAH Hospital, we are dedicated to providing the highest quality
          care in neurosciences through a patient-centered approach that
          prioritizes compassion and innovation. Our multidisciplinary team,
          consisting of neurologists, neurosurgeons, radiologists, pathologists,
          and specialized nurses, collaborates to create personalized treatment
          plans tailored to each patient's unique needs. Neurologists diagnose
          and manage neurological conditions, while neurosurgeons perform
          advanced surgical procedures. Radiologists provide detailed imaging of
          the nervous system, and pathologists analyze tissue samples for
          accurate diagnosis.
        </p>
        <div>
          <img className=" w-[80vw] lg:w-[25vw]" src={neuro} alt="cardiac" />
        </div>
      </div>
      <ConsultToggle/>
      <Services />
      <Footer />
    </div>
  );
};

export default NeuroSciences;
