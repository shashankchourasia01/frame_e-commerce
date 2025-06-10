import React from 'react';

const compliments = [
  {
    name: 'Amit Sharma',
    review: 'Absolutely loved the custom frame I received! Perfect quality and fast delivery.',
    img: '/images/rev1.avif',
  },
  {
    name: 'Sneha Verma',
    review: 'The calendar was exactly as I imagined. Great gift idea!',
    img: '/images/rev3.avif',
  },
  {
    name: 'Rahul Mehta',
    review: 'Awesome mug design! The print quality is fantastic. Highly recommend!',
    img: '/images/rev2n.jpg',
  },
  {
    name: 'Priya Singh',
    review: 'Ordered a gift box for my friend. It was beautifully wrapped and delivered on time.',
    img: '/images/rev4.avif',
  },
];

const Compliment = () => {
  return (
    <div className="bg-[#D6C078] px-4 sm:px-6 lg:px-20 py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">WE LOVE GOOD COMPLIMENT</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {compliments.map((c, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow text-center">
            <img
              src={c.img}
              alt={c.name}
              className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg text-blue-900 font-semibold mb-2">{c.name}</h3>
            <p className="text-sm font-bold text-gray-700">{c.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compliment;
