import React from "react";

const vacanciesData = [
  {
    id: 1,
    title: "Registered Nurse",
    description:
      "We are looking for a dedicated and compassionate registered nurse to join our healthcare team.",
    location: "FAH Hospital, Amrapali Yojna, IIM Road, Lucknow",
    department: "Nursing",
  },
  {
    id: 2,
    title: "Medical Assistant",
    description:
      "Join our team as a medical assistant to provide support to our healthcare professionals.",
    location: "FAH Hospital, Amrapali Yojna, IIM Road, Lucknow",
    department: "Support Staff",
  },
  // Add more vacancies as needed
];

const Vacancies = () => {
  return (
    <div className=" my-4 mx-2 lg:p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-md">
        <h1 className="text-4xl flex gap-2 justify-center font-bold mb-6">
          <span className=" text-amber-800">We're</span>
          <span>Hiring</span>
        </h1>
        <div className="space-y-4">
          {vacanciesData.map((vacancy) => (
            <div
              key={vacancy.id}
              className="p-4 border border-gray-300 rounded-md bg-white"
            >
              <h2 className="text-xl font-semibold  text-amber-800">
                {vacancy.title}
              </h2>
              <p className="">{vacancy.description}</p>
              <div className="text-gray-600 mt-2">
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  {vacancy.location}
                </p>
                <p>
                  <span className="font-semibold">Department:</span>{" "}
                  {vacancy.department}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
