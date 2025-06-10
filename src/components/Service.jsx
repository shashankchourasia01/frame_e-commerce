import React from 'react';
import { FaCameraRetro } from 'react-icons/fa';
import { GiPaintBrush } from 'react-icons/gi';
import { LuPictureInPicture } from 'react-icons/lu';

const Service = () => {
  return (
    <div className="bg-[#D6C078] px-4 sm:px-8 md:px-16 py-10">
      <h2 className="text-3xl font-semibold mb-10 text-center sm:text-left">Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {/* 1. Photographer Booking */}
        <div className="bg-[#f9f1dc] p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <div className="text-5xl mb-4 mx-auto text-black">
            <FaCameraRetro />
          </div>
          <h3 className="text-lg font-semibold mb-2">Book a Photographer<br />to Capture Your Moment’s</h3>
          <p className="text-sm text-gray-700">
            We are a photography team capturing diverse moments, from portraits and events to commercial.
          </p>
        </div>

        {/* 2. Convert Photo to Digital & Oil Painting */}
        <div className="bg-[#f9f1dc] p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <div className="text-5xl mb-4 mx-auto text-black">
            <GiPaintBrush />
          </div>
          <h3 className="text-lg font-semibold mb-2">Convert Your Photo<br />to Digital & Oil Painting</h3>
          <p className="text-sm text-gray-700">
            We are a photography team capturing diverse moments, from portraits and events to commercial.
          </p>
        </div>

        {/* 3. Frame Your Photo */}
        <div className="bg-[#f9f1dc] p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <div className="text-5xl mb-4 mx-auto text-black">
            <LuPictureInPicture />
          </div>
          <h3 className="text-lg font-semibold mb-2">Frame Your Photo<br />to Keep a Memory on Your Desk</h3>
          <p className="text-sm text-gray-700">
            We are a photography team capturing diverse moments, from portraits and events to commercial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
