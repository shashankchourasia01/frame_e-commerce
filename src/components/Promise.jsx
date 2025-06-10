import React from 'react';
import { FiShield, FiShoppingBag, FiTag, FiGift } from 'react-icons/fi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const promises = [
  {
    icon: <FiShield size={30} />,
    title: '100% secure payment',
    text: 'All transactions are encrypted and protected for your complete peace of mind.',
  },
  {
    icon: <FiShoppingBag size={30} />,
    title: 'Quality guarantee',
    text: 'We ensure top-notch quality in every product with a satisfaction guarantee.',
  },
  {
    icon: <FiTag size={30} />,
    title: 'Guaranteed savings',
    text: 'Enjoy the best value with exclusive discounts and unbeatable deals.',
  },
  {
    icon: <FiGift size={30} />,
    title: 'Daily offers',
    text: 'Discover fresh deals every day and save more on your favorite items.',
  },
];

const Promise = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // below md
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#D4AF37] py-8 px-4">
      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
        {promises.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-black">
            <div className="mb-2">{item.icon}</div>
            <h4 className="font-semibold text-lg text-blue-800">{item.title}</h4>
            <p className="text-sm font-semibold">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden max-w-sm mx-auto">
        <Slider {...settings}>
          {promises.map((item, index) => (
            <div key={index} className="text-center text-black p-6">
              <div className="mb-2 flex justify-center">{item.icon}</div>
              <h4 className="font-semibold text-2xl text-blue-800">{item.title}</h4>
              <p className="text-sm font-semibold">{item.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Promise;
