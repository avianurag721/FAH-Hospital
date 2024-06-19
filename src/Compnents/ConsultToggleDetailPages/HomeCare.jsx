import React, { useState } from "react";
import backgroundImage from "../../Images/ToggelBGimages/HomeCare.jpg";
import RequestCallBack from "../Forms/RequestCallBack";
import { FaArrowCircleRight } from "react-icons/fa";

const HomeCare = () => {
  const [showMore, setShowMore] = useState(true);
  return (
    <div>
      <div
        className="h-screen bg-cover bg-center flex flex-col lg:flex-row justify-around items-center gap-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className=" leading-relaxed w-[90%] lg:w-[20%] text-4xl text-center font-bold ">
          Home Care
        </h1>
        {/* call back request form  this is imported from ../components/forms */}
        <RequestCallBack />
      </div>
      <div className=" flex p-6 py-10 flex-col lg:flex-row bg-slate-200 justify-center items-center">
        <h1 className=" text-4xl w-[35vw] text-center font-bold">
          About FAH's Home Care
        </h1>
        <div className=" flex h-[40vh] lg:h-[31vh] flex-col items-start px-6 w-[90vw] lg:w-[60vw] ">
          {showMore ? (
            <p>
              FAH Hospital Homecare is a trusted partner in promoting well-being,
              ensuring that quality healthcare is always within reach. Our care
              doesn’t end at the hospital exit. We continue to give you the best
              care possible even when you are at home. FAH Hospital Homecare offers
              comprehensive and compassionate healthcare solutions in the
              comfort of the patient’s home....
            </p>
          ) : (
            <p>
              FAH Hospital Homecare is a trusted partner in promoting well-being,
              ensuring that quality healthcare is always within reach. Our care
              doesn’t end at the hospital exit. We continue to give you the best
              care possible even when you are at home. FAH Hospital Homecare offers
              comprehensive and compassionate healthcare solutions in the
              comfort of the patient’s home. With a commitment to care, we offer
              a range of services, including expert clinical procedures, patient
              attendant services, and in-home doctor consultations. FAH Hospital
              Homecare specialises in physiotherapy and rehabilitation by
              bringing tailored recovery programs to the patient’s doorstep.
              FAH Hospital’s ICU@Home services ensure advanced care with
              round-the-clock monitoring, while home sample collection and
              medication management offer convenience for the patients and peace
              of mind for the caregivers.
            </p>
          )}
          <button
            className=" group flex justify-center items-center gap-4 py-2 text-red-500"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show More" : "Show less"}
            <FaArrowCircleRight className="  transition-all duration-200  group-hover:translate-x-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCare;
