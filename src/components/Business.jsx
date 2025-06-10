import React from 'react';

const bestSelling = [
  {
    title: 'Gift Box',
    price: 'Rs. 99',
    img: '/images/slide1.avif',
  },
  {
    title: 'Photo Frame',
    price: 'Rs. 199',
    img: '/images/slide 2.avif',
  },
  {
    title: 'Custom Calendar',
    price: 'Rs. 149',
    img: '/images/slide 3.jpg',
  },
  {
    title: 'Custom Coffee Mug',
    price: 'Rs. 129',
    img: '/images/slide 4.avif',
  },
];

const newArrivals = [
  {
    title: 'Love Album',
    price: 'Rs. 249',
    img: '/images/slide1.avif',
  },
  {
    title: 'Wooden Frame',
    price: 'Rs. 299',
    img: '/images/slide 2.avif',
  },
  {
    title: 'Magic Mug',
    price: 'Rs. 199',
    img: '/images/slide 3.jpg',
  },
  {
    title: 'LED Collage Frame',
    price: 'Rs. 499',
    img: '/images/slide 4.avif',
  },
];

const Business = () => {
  return (
    <div className="bg-[#D6C078] px-4 sm:px-6 lg:px-20 py-10">
      {/* Best Selling */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Best Selling</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {bestSelling.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-3 text-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="text-sm text-gray-800">{item.price}</p>
          </div>
        ))}
      </div>

      {/* New Arrivals */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {newArrivals.map((item, idx) => (
          <div
            key={`new-${idx}`}
            className="bg-white rounded-xl shadow-md p-3 text-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="text-sm text-gray-800">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Business;
