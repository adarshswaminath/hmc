import React from 'react';
import image from './Images/hero1.png';


function Hero() {
  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div>
      <div className="max-w-screen h-screen flex items-center justify-center lg:justify-end p-16" style={divStyle}>
        <div className="justify-end">
          <h1 className="font-semibold text-7xl lg:text-9xl font-mono text-white">YACHTS</h1>
          <p className="uppercase font-bold text-white">We design, engineer, fabricate, install</p>
          <p className="uppercase font-bold text-white">program, and maintain networks</p>
          <button className="mt-6 text-black bg-[#c1d52e] hover:bg-[#1d2637] hover:text-white hover:border-[#c1d52e] hover:border font-semibold px-6 py-2 transition duration-300 ease-in-out">
  LEARN MORE
</button>

        </div>
      </div>

    </div>
  );
}

export default Hero;
