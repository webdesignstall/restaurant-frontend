import { Button } from '@/components/ui/button';
import React from 'react';

const items = [
  {
    title: 'Find A True Food Kitchen',
    desc: 'True Food Kitchen is rooted in scientific principles, ensuring that every irresistible dish and beverage contributes to enhancing the longevity of both people and the planet.',
    img: '/23_Homepage_ImageStrip_400x313-1.jpg',
    buttonText: 'Find Us',
  },
  {
    title: 'Savor Every Bite',
    desc: 'Our mission is to combine exceptional flavor with superior nutrition, making healthy living both tasty and enjoyable.',
    img: '/Home_Menu.jpg',
    buttonText: 'Learn More',
  },
  {
    title: 'Fresh Ingredients, Always',
    desc: 'We prioritize the freshest, most sustainable ingredients to craft dishes that inspire your taste buds and your health.',
    img: '/Catering-Marketing_400x313-1.jpg',
    buttonText: 'Explore Now',
  },
  {
    title: 'Join Our Community',
    desc: 'Be part of a movement that values real food, real connections, and real sustainability. Together, we thrive.',
    img: '/TucsonShirt_340x266-2.jpg',
    buttonText: 'Get Started',
  },
];

export default function Fusion() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header Section */}
        <div className="py-16">
          <p className="lg:text-6xl text-2xl font-extrabold text-center uppercase tracking-wide">
            Honest to Goodness Goodness
          </p>
        </div>

        {/* Items Section */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-56 bg-gray-300">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-2 flex flex-col justify-center items-center">
                {/* Title */}
                <div>
                  <p className="text-2xl font-semibold text-gray-800 py-4 text-center">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>

                {/* Button */}
                <div className="mt-4">
                  <div className="mt-6 w-full flex justify-center">
                    <Button className='rounded-3xl text-xl font-medium' size='lg'>
                      {item.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
