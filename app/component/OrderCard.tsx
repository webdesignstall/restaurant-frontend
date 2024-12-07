import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

export default function OrderCard() {
    return (
        <div className="px-4 py-16">
            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg overflow-hidden flex flex-col"
                    >
                        {/* Image Section */}
                        <div className="relative w-full h-64">
                            <Image
                                className="object-cover"
                                layout="fill"
                                src={item.img}
                                alt="Card Image"
                                priority={true}
                            />
                        </div>
                        {/* Content Section */}
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
                                <p className="mt-4 text-gray-600 text-sm sm:text-base">{item.desc}</p>
                            </div>
                            <div className="mt-6 w-full flex justify-center">
                                <Button className='rounded-3xl text-xl font-medium' size='lg'>
                                    {item.active}
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const items = [
    {
        title: 'Buy $100, get $20!',
        desc: 'Celebrate the season with a bonus! For every $100 gift card, get $20 for you!',
        img: '/1124_Website_Home_Holiday-Gift-Card_628x398.jpg',
        active: 'Buy Now',
    },
    {
        title: 'Our Pie. Your Place.',
        desc: 'The wait is over – our signature Squash Pie is here! Order today and be the hero at the holiday table!',
        img: '/1124_Website_Home_Pie_628x398-1.jpg',
        active: 'Order Now',
    },
    {
        title: 'Holidays Made True',
        desc: 'Let us handle the cooking so you can enjoy an unforgettable event!',
        img: '/Holiday_Homepage_628x398.jpg',
        active: 'Reserve Now',
    },
];
