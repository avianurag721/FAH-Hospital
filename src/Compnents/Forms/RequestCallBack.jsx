import React from 'react'

const RequestCallBack = () => {
  return (
    <form
          style={{
            boxShadow:
              "10 4px 65px -5px rgba(107, 114, 128, 0.1), 0 2px 4px -1px rgba(107, 114, 128, 0.06)",
          }}
          className=" w-[90%] lg:w-[30%] bg-lightShade  flex flex-col gap-8 p-14 rounded-md"
        >
          <h1 className=" text-3xl font-bold text-center "> Request A Callback</h1>
          <label htmlFor="name" className=" flex flex-col gap-2">
            <span>
              Name <sup className="  text-red-600">*</sup>{" "}
            </span>
            <input
              className=" border-b bg-lightShade outline-none"
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
            />
          </label>
          <label htmlFor="contact" className=" flex flex-col gap-2">
            <span>
              Contact Number <sup className="  text-red-600">*</sup>{" "}
            </span>
            <input
              className=" border-b bg-lightShade outline-none"
              type="number"
              name="contact"
              id="contact"
              placeholder="Enter Your Contact Number"
            />
          </label>
          <label htmlFor="email" className=" flex flex-col gap-2">
            <span>
              Email <sup className="  text-red-600">*</sup>{" "}
            </span>
            <input
              className=" border-b bg-lightShade outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your E-mail"
            />
          </label>
          <label htmlFor="name" className=" flex flex-col gap-2">
            <span>
              Message <sup className="  text-red-600">*</sup>{" "}
            </span>
            <input
              className=" border-b bg-lightShade outline-none"
              type="text"
              name="message"
              id="message"
              placeholder="Enter Your message"
            />
          </label>
          <button  className=" transition-all duration-200 rounded-full p-4 hover:scale-105 text-lightShade hover:text-headingColor text-2xl bg-lightCustomColor">Submit</button>
        </form>
  )
}

export default RequestCallBack
