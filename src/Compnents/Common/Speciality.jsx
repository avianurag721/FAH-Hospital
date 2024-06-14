import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const alphabets = [
  {
    alphabet: "A",
    nav: "",
  },
  {
    alphabet: "B",
    nav: "",
  },
  {
    alphabet: "C",
    nav: "",
  },
  {
    alphabet: "D",
    nav: "",
  },
  {
    alphabet: "E",
    nav: "",
  },
  {
    alphabet: "F",
    nav: "",
  },
  {
    alphabet: "G",
    nav: "",
  },
  {
    alphabet: "H",
    nav: "",
  },
  {
    alphabet: "I",
    nav: "",
  },
  {
    alphabet: "J",
    nav: "",
  },
  {
    alphabet: "K",
    nav: "",
  },
  {
    alphabet: "L",
    nav: "",
  },
  {
    alphabet: "M",
    nav: "",
  },
  {
    alphabet: "N",
    nav: "",
  },
  {
    alphabet: "O",
    nav: "",
  },
  {
    alphabet: "P",
    nav: "",
  },
  {
    alphabet: "Q",
    nav: "",
  },
  {
    alphabet: "R",
    nav: "",
  },
  {
    alphabet: "S",
    nav: "",
  },
  {
    alphabet: "T",
    nav: "",
  },
  {
    alphabet: "U",
    nav: "",
  },
  {
    alphabet: "V",
    nav: "",
  },
  {
    alphabet: "W",
    nav: "",
  },
  {
    alphabet: "X",
    nav: "",
  },
  {
    alphabet: "Y",
    nav: "",
  },
  {
    alphabet: "Z",
    nav: "",
  },
];

const Speciality = () => {
  return (
    <div className=" transition-all duration-200 my-14 flex justify-center flex-col lg:flex-row w-full">
      <div className=" w-[25%]">
        <h3 className=" text-lg">Specialities</h3>
        <h2 className=" my-8 text-slate-600 text-4xl">
          An Ecosystem for Clinical Excellence
        </h2>
      </div>
      <div className=" w-[33%]">
        <div className=" flex justify-between py-4 border-b border-black w-full">
          <img src="" alt="imgg" />
          <div className="flex justify-between">
            <p>Cardiac Care</p>
            <p>Cardiac Care</p>
          </div>
        </div>
        <p className=" cursor-pointer group w-full lg:w-[40%]  flex py-4 gap-3 items-center">
          <p>View All Specialities</p>
          <p className=" group-hover:translate-x-4 transition-all duration-300 text-red-600 text-lg">
            <FaArrowCircleRight />
          </p>
        </p>
      </div>
      {/* alphabets search division/  */}
      <div className=" w-[30%]  border-l border-2 p-4">
        <h2>Search By</h2>
        <div className=" flex justify-between items-center">
          <div className=" cursor-pointer rounded-full border  hover:border-red-400 text-white hover:text-black bg-red-400 px-4 p-1">
            {" "}
            Ailments
          </div>
          <div className=" cursor-pointer rounded-full border border-black text-black hover:border-red-400   hover:text-white hover:bg-red-400 px-4 p-1">
            {" "}
            Treatments
          </div>
          <div className=" cursor-pointer rounded-full border border-black  text-black hover:border-red-400 hover:text-white hover:bg-red-400 px-4 p-1">
            {" "}
            Technologies
          </div>
        </div>
        <div className=" flex  my-5 gap-2 flex-wrap">
          {alphabets.map((item, index) => (
            <p className=" cursor-pointer flex justify-center  p-4 w-16 hover:bg-red-400 hover:text-white  rounded-full bg-white border">
              {" "}
              {item.alphabet}{" "}
            </p>
          ))}
        </div>
        <p className=" cursor-pointer group w-full lg:w-[60%]  flex py-4 gap-3 items-center">
          <p>View All Specialities</p>
          <p className=" group-hover:translate-x-4 transition-all duration-300 text-red-600 text-lg">
            <FaArrowCircleRight />
          </p>
        </p>
      </div>
    </div>
  );
};

export default Speciality;
