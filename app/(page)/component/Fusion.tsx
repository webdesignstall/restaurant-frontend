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
    desc: 'At True Food Kitchen, our menu is carefully crafted so that every bite and every refreshing sip serve up big flavor, an abundance of fresh ingredients and a taste of the unexpected.',
    img: '/Home_Menu.jpg',
    buttonText: 'Learn More',
  },
  {
    title: 'Fresh Ingredients, Always',
    desc: 'We believe the best meals are shared with good company. Whether you’re ordering for the office, everyday entertaining or a special event, our catering menu lets you craft the ideal offering for your group.',
    img: '/Catering-Marketing_400x313-1.jpg',
    buttonText: 'Explore Now',
  },
  {
    title: 'Join Our Community',
    desc: 'Find your true purpose. With a variety of opportunities awaiting you at each of our renowned restaurants spanning the nation, explore roles that align with your true passion.',
    img: '/TucsonShirt_340x266-2.jpg',
    buttonText: 'Get Started',
  },
];

export default function Fusion() {
  return (
    <div className="pb-20 pt-6 px-4">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header Section */}
        <div className="py-10">
          <p className="lg:text-6xl text-6xl tracking-wide font-[900] text-[#3b3d2f] text-center font-bebas">
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
              <div className="p-2 flex flex-col justify-between items-center h-fit">
                {/* Title */}
                <div>
                  <p className="text-5xl md:text-3xl font-bebas font-semibold text-gray-800 py-4 text-center">
                    {item.title}
                  </p>
                  <p className="text-lg text-center text-gray-600">{item.desc}</p>
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
