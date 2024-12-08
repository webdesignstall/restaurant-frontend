import Image from 'next/image';
import React from 'react';

export default function Food() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-5">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`overflow-hidden transform ${index === 4 ? 'col-span-3 lg:col-span-1' : 'col-span-2 lg:col-span-1'} ${index === 3 ? 'col-span-3 lg:col-span-1' : 'col-span-2 lg:col-span-1'}`}
                    >
                        <Image
                            className="object-cover w-full"
                            width={300}
                            height={300}
                            src={item.img}
                            alt={item.title}
                            priority={index === 0} // Optimize the first image load
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

const items = [
    {
        title: 'Food',
        img: '/Image-Slider-Home1_400x357.jpg',
    },
    {
        title: 'Food',
        img: '/Image-Slider-Home2_400x357.jpg',
    },
    {
        title: 'Food',
        img: '/Image-Slider-Home3_400x357.jpg',
    },
    {
        title: 'Food',
        img: '/Image-Slider-Home5_400x357.jpg',
    },
    {
        title: 'Food',
        img: '/Image-Slider-Home4_400x357.jpg',
    },
];
