import React from "react";
import { ImLocation2 } from "react-icons/im";
import image from "./Images/footer.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div
        className="bg-cover bg-center py-12 opacity-60"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="container mx-auto h-96">
          <div className="w-full lg:w-1/2">
            <div className="p-4">
              <h1 className="text-3xl text-white font-semibold uppercase">
                HMC
              </h1>
              <div className="mt-3 opacity-80">
                <div className="flex items-center text-white">
                  <div className="border-2 text-2xl border-[#c1d52e] p-2 rounded-full">
                    <ImLocation2 />
                  </div>
                  <span className="ml-2">Bremen, Bismarckmastrbe 2893</span>
                </div>
                <div className="flex items-center mt-3 text-white">
                  <div className="border-2 text-2xl border-[#c1d52e] p-2 rounded-full">
                    <ImLocation2 />
                  </div>
                  <span className="ml-2">Hamburg, Kirchanelle 46, 2099</span>
                </div>
                <div className="flex items-center mt-3 text-white">
                  <div className="border-2 text-2xl border-[#c1d52e] p-2 rounded-full">
                    <ImLocation2 />
                  </div>
                  <span className="ml-2">Oldenburg, Seterg Street 2199</span>
                </div>
                <button className="mt-6 text-black bg-[#c1d52e] hover:bg-[#1d2637] hover:text-white hover:border-[#c1d52e] hover:border font-semibold px-6 py-2 transition duration-300 ease-in-out">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
