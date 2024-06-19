import React, { useState } from "react";
import backgroundImage from "../../Images/ToggelBGimages/doctorsBgImage.jpg";
import RequestCallBack from "../Forms/RequestCallBack";
import { FaArrowCircleRight } from "react-icons/fa";

const SecondOpinion = () => {
  const [showMore, setShowMore] = useState(true);
  return (
    <div>
      <div
        className="h-screen bg-cover bg-center flex-col lg:flex-row flex justify-around items-center gap-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="flex leading-snug w-[90%] lg:w-[20%] text-4xl text-center font-bold ">
          Get a Second Opinion From anywhere anytime
        </h1>
        {/* call back request form  this is imported from ../components/forms */}
        <RequestCallBack />
      </div>
      <div className=" flex p-6 py-10 flex-col lg:flex-row  bg-slate-200 justify-center items-center">
        <h1 className=" text-4xl w-[40vw] text-center font-bold">
          About Second Opinion
        </h1>
        <div className=" flex h-[40vh] lg:h-[20vh] flex-col items-start px-6 w-[90vw] lg:w-[60vw] ">
          {showMore ? (
            <p>
              Prioritising your health means understanding all aspects of the
              condition and proposed treatment before making any decisions. If
              you're concerned about interpreting your medical reports
              accurately, we have got you covered...
            </p>
          ) : (
            <p>
              Prioritising your health means understanding all aspects of the
              condition and proposed treatment before making any decisions. If
              you're concerned about interpreting your medical reports
              accurately, we have got you covered. With our Second Opinion
              programme, India's top clinical experts will provide a thorough
              review and personalised guidance based on your reports. Access
              some of the best minds in healthcare through our verified opinions
              and ensure informed decision-making.
            </p>
          )}
          <button
            className=" group flex justify-center items-center gap-4 py-4 text-red-500"
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

export default SecondOpinion;
