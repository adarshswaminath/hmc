import React from "react";
import image from "./Images/stock1.jpg";
import image1 from "./Images/stock2.jpg";

function Contact() {
  return (
    <div className="mt-3">
      <div className="grid lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="form p-4">
            <h2 className="text-3xl text-white font-semibold">CONTACT US</h2>
            <input
              type="text"
              placeholder=" Enter Name"
              className="mt-3 w-full text-left rounded-lg py-3 bg-[#1d2637]"
            />
            <input
              type="text"
              placeholder=" Enter Company/Ship"
              className="mt-3 w-full text-left rounded-lg py-3 bg-[#1d2637]"
            />
            <input
              type="text"
              placeholder=" To"
              className="mt-3 w-full text-left rounded-md py-3 bg-[#1d2637]"
            />
            <textarea
              className="w-full mt-3 h-72 rounded-lg bg-[#1d2637]"
              placeholder=" Message"
            ></textarea>
            <button className="mt-6 text-black bg-[#c1d52e] hover:bg-[#1d2637] hover:text-white hover:border-[#c1d52e] hover:border font-semibold px-6 py-2 transition duration-300 ease-in-out">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 ">
            <div className="p-4">
              <h1 className="text-3xl text-white font-semibold">SALES</h1>
              <img
                src={image}
                className="w-full h-56 rounded-lg opacity-70"
                alt=""
              />
            </div>
            <div className="p-4">
              <h1 className="text-3xl text-white font-semibold">
                SUPPORT & SERVICE
              </h1>
              <img
                src={image1}
                className="w-full h-52 rounded-lg opacity-70"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
