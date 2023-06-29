import React from "react";
import {
  MdSecurity,
  MdEmojiEvents,
  MdCelebration,
} from "react-icons/md";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { TbAugmentedReality2 } from "react-icons/tb";
import { GiSatelliteCommunication } from "react-icons/gi";

const Card = ({ logo, title, caption }) => {
  return (
    <div className="bg-[#28334a] rounded-md flex items-center justify-center p-4 lg:p-8 hover:text-[#c1d52e] transition-colors transform hover:scale-105 hover:animate-pulse">
      <div className="text-center">
        <div className="text-5xl text-gray-300 mb-2">
          {logo}
        </div>
        <h3 className="text-xl font-semibold text-gray-300 uppercase mb-2">
          {title}
        </h3>
        <p className="text-gray-300">{caption}</p>
      </div>
    </div>
  );
};

function Cards() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card
          logo={<BsFillPhoneVibrateFill />}
          title="Telephone"
          caption="DECT & IP"
        />
        <Card
          logo={<MdEmojiEvents />}
          title="Events"
          caption="Cinemas & Party"
        />
        <Card
          logo={<MdSecurity />}
          title="Security"
          caption="Camera & Sensors"
        />
        <Card
          logo={<TbAugmentedReality2 />}
          title="AV Rooms"
          caption="Core Of Our System"
        />
        <Card
          logo={<MdCelebration />}
          title="Entertainment"
          caption="Video & Audio"
        />
        <Card
          logo={<GiSatelliteCommunication />}
          title="Communication"
          caption="Camera & Sensors"
        />
      </div>
    </div>
  );
}

export default Cards;
