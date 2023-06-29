import React from 'react';
import ship1 from './Images/ship1.jpg';
import ship2 from './Images/ship2.jpg';

function Ship() {
  return (
    <div className="grid lg:flex">
      <div
        className="w-full lg:w-1/2 h-80 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${ship1})` }}
      >
        <h1 className="uppercase text-white text-2xl p-3 font-semibold">cruise lines</h1>
      </div>
      <div
        className="w-full lg:w-1/2 h-80 bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${ship2})` }}
      >
        <h1 className="uppercase text-white text-2xl p-3 font-semibold">commercial vessels</h1>
      </div>
    </div>
  );
}

export default Ship;
