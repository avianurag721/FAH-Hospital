import React from "react";

const ToggleData = [
  {
    image: "",
    Data: "BooK Appointment",
  },
  {
    image: "",
    Data: "Second Opinion",
  },
  {
    image: "",
    Data: "Get Health Checkup",
  },
  {
    image: "",
    Data: "Book A Virtual Consultantion",
  },
  {
    image: "",
    Data: "Home Care",
  },
  {
    image: "",
    Data: "Book a Test",
  },
];

const ConsultToggle = () => {
  return (
    <div className=" my-4 border-2 lg:mx-16 rounded-md  border-red-500 flex flex-col lg:flex-row justify-around  items-center ">
      {ToggleData.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              index === 0 ?  "bg-red-600" : " bg-white"
            } cursor-pointer hover:bg-red-600  border-r p-2 lg:p-6 h-full text-center flex justify-center items-center w-full lg:w-[15rem]`}
          >
            <img src={item.image} alt="" />
            <p> {item.Data} </p>
          </div>
        );
      })}
    </div>
  );
};

export default ConsultToggle;
