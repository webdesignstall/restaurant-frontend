import Image from 'next/image'
import React from 'react'

export default function Events() {
    return (
        <div>
            <div>
                <div className='relative flex justify-center items-center lg:h-screen h-[30vh]'>
                    <div className='absolute top-0 left-0 w-full h-full -z-10'>
                        <Image
                            className='w-full object-cover bg-cover h-full'
                            width={1000}
                            height={1000}
                            src='/events/Banner.jpg'
                            alt='Events Banner'
                            priority
                        />
                    </div>
                    <div>
                        <p className='font-bebas text-7xl font-extrabold text-white'>LET US HOST</p>
                    </div>
                </div>
                <div className='bg-gray-200'>
                    <div className='py-6'>
                        <p className='font-bebas text-6xl text-center font-extrabold text-primary'>
                            THROW YOUR PARTY AT TRUE FOOD
                        </p>
                    </div>
                    <div className='mx-6'>
                        <p className='text-center'>Planning your next event? Let us help make it unforgettable! Whether you’re looking to book a small, intimate gathering, a larger corporate event, or even a full restaurant buyout, we’re here to help you celebrate any occasion. With customizable menus and flexible seating arrangements, we ensure every detail is tailored to create a memorable experience for you and your guests.</p>
                        <p className='text-center'>
                            Ready to reserve your date? Simply fill out the form below, and our team will handle the rest—taking care of the details so you can focus on celebrating!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
