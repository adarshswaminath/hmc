import React from "react";
import image from "./Images/work.jpg";
import image1 from "./Images/history.jpg";
import {ImLocation2} from "react-icons/im"

function About() {
  return (
    <div>
      <div className="grid lg:flex">
        <div className="w-full lg:w-1/2 bg-[#1e2637]">
          <div className="text-white p-6">
            <h1 className="text-3xl font-semibold">ABOUT HMC</h1>
            <p className="mt-3">
              Et ex velit eu duis aute laborum tempor adipisicing tempor. Elit
              amet proident laboris labore voluptate proident voluptate dolor.
              Pariatur qui commodo sint nostrud fugiat labore labore ea proident
              nostrud. Ea nisi pariatur officia velit ea non enim dolor dolor
              adipisicing.Et ex velit eu duis aute laborum tempor adipisicing
              tempor. Elit amet proident laboris labore voluptate proident
              voluptate dolor. Pariatur qui commodo sint nostrud fugiat labore
              labore ea proident nostrud.
            </p>
            <p className="mt-3">
              Et ex velit eu duis aute laborum tempor adipisicing tempor. Elit
              amet proident laboris labore voluptate proident voluptate dolor.
              Pariatur qui commodo sint nostrud fugiat labore labore ea proident
              nostrud. Ea nisi pariatur officia velit ea non enim dolor dolor
              adipisicing.Et ex velit eu duis aute laborum tempor adipisicing
              tempor. Elit amet proident laboris labore voluptate proident
              voluptate dolor. Pariatur qui commodo sint nostrud fugiat labore
              labore ea proident nostrud.
            </p>
            <button className="mt-6 text-black bg-[#c1d52e] hover:bg-[#1d2637] hover:text-white hover:border-[#c1d52e] hover:border font-semibold px-6 py-2 transition duration-300 ease-in-out">
  LEARN MORE
</button>

          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={image} alt="Work" className="w-full h-auto" />
        </div>
      </div>
      {/* second box history */}
      <div className="grid lg:flex mt-2">
        <div className="w-full lg:w-1/2">
          <img src={image1} alt="Work" className="w-full h-auto" />
        </div>
        <div className="w-full lg:w-1/2 bg-[#1e2637]">
          <div className="text-white p-6">
            <h1 className="text-3xl font-semibold">HISTORY</h1>
            <p className="mt-3">
              Et ex velit eu duis aute laborum tempor adipisicing tempor. Elit
              amet proident laboris labore voluptate proident voluptate dolor.
              Pariatur qui commodo sint nostrud fugiat labore labore ea proident
              nostrud. Ea nisi pariatur officia velit ea non enim dolor dolor
              adipisicing.Et ex velit eu duis aute laborum tempor adipisicing
              tempor. Elit amet proident laboris labore voluptate proident
              voluptate dolor. Pariatur qui commodo sint nostrud fugiat labore
              labore ea proident nostrud.
            </p>
            <p className="mt-3">
              Et ex velit eu duis aute laborum tempor adipisicing tempor. Elit
              amet proident laboris labore voluptate proident voluptate dolor.
              Pariatur qui commodo sint nostrud fugiat labore labore ea proident
              nostrud. Ea nisi pariatur officia velit ea non enim dolor dolor
              adipisicing.Et ex velit eu duis aute laborum tempor adipisicing
              tempor. Elit amet proident laboris labore voluptate proident
              voluptate dolor. Pariatur qui commodo sint nostrud fugiat labore
              labore ea proident nostrud.
            </p>
            <button className="mt-6 text-black bg-[#c1d52e] hover:bg-[#1d2637] hover:text-white hover:border-[#c1d52e] hover:border font-semibold px-6 py-2 transition duration-300 ease-in-out">
  LEARN MORE
</button>

          </div>
        </div>
      </div>
      {/* third box */}
      <div>
      <div className="grid lg:flex mt-2">
        <div className="w-full lg:w-1/2">
          <div className="p-4">
            <h1 className="text-3xl text-white font-semibold uppercase">Locations</h1>
            <div>
              <div className="flex items-center text-white mt-3">
                <div className="border-2 text-2xl border-[#c1d52e] p-2 rounded-full">
                  <ImLocation2 />
                </div>
                <span className="ml-2">Bremen, Bismarckmastrbe  2893</span>
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
        <div className="w-full lg:w-1/2 bg-[#1e2637]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317719.587908343!2d-0.4312397505551248!3d51.528179772553436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1688052260564!5m2!1sen!2sin"
            className="w-full h-96"
            style={{
              border: '0',
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
