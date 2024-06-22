import React, { useState } from "react";
import Footer from "../Common/Footer";
import contactUsbackground from "../../Images/FahBannerDummy.jpg";
import { BiSolidMessageDetail } from "react-icons/bi";
import { MdAddIcCall } from "react-icons/md";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${contactUsbackground})` }}
        className="  box-border bg-cover gap-10 flex flex-col lg:flex-row justify-around items-center min-h-screen bg-gray-100"
      >
        <div className=" h-[65vh] flex flex-col rounded-lg px-4 bg-white border-2 shadow-lg">
          <h1 className=" text-center text-3xl font-bold font-serif my-6">
            Get in touch With us
          </h1>
          <div className=" flex flex-col ">
            <p className=" text-red-900 font-bold text-xl">Address:</p>
            <p className=" py-2">
              FAH Super Speciality Hospital, IIM Road, Amrapali Yojna
              <br /> Dubagga, Lucknow.
            </p>
          </div>
          <div className="flex flex-col my-6 ">
            <h1 className=" text-red-900 font-bold text-xl">Contact Info:</h1>
            <div className=" flex items-center gap-2 font-bold">
              <MdAddIcCall /> <a href="tel:+918433377712"> +91-8433377712 </a>{" "}
            </div>
            <div className=" flex items-center gap-2 font-bold">
              <BiSolidMessageDetail /> <a href="tel:+918433377712"> E-mail</a>{" "}
            </div>
          </div>
        </div>
        <form
          className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className=" bg-customColor w-[90%] mx-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
