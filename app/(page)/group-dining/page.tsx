import Image from 'next/image'
import React from 'react'

export default function GroupDining() {
  return (
    <div>
      <div>
        <div className='w-full'>
          <div className='flex justify-center items-center w-full relative h-[30vh] lg:h-[75vh]'>
            <div className='absolute w-full -z-10 h-[30vh] lg:h-[75vh] top-0 left-0'>
              <Image
                className='w-full object-cover bg-cover h-full'
                width={1000}
                height={1000}
                src='/truestory/Our-Story-Hero_1515x600.jpg'
                alt='baner'
              />
            </div>
            <div>
              <p className='text-center font-bebas text-[4rem] font-[900] text-white tracking-wider'>let us host</p>
            </div>
          </div>
          <div className='py-6 px-4'>
            <div>
              <p className='text-center font-bebas text-[3rem] font-[900] text-primary tracking-wider'>THROW YOUR PARTY AT TRUE FOOD</p>
            </div>
            <div>
              <p className='text-center'>Planning your next event? Let us help make it unforgettable! Whether you’re looking to book a small, intimate gathering, a larger corporate event, or even a full restaurant buyout, we’re here to help you celebrate any occasion. With customizable menus and flexible seating arrangements, we ensure every detail is tailored to create a memorable experience for you and your guests.</p>
              <p className='text-center'>
                Ready to reserve your date? Simply fill out the form below, and our team will handle the rest—taking care of the details so you can focus on celebrating!
              </p>
            </div>
          </div>
          <div>
            <div className='md:grid grid-cols-3 gap-6 max-w-6xl m-auto flex flex-col px-4'>
              {
                [1, 2, 3].map((item, index) => (
                  <div key={index} className='w-full'>
                    <div className='w-full h-72 bg-gray-200'>
                      <Image
                        className='w-full object-cover bg-cover'
                        width={300}
                        height={300}
                        src='/group/Catering.jpg'
                        alt='Group food'
                      />
                    </div>
                    <div className='py-4'>
                      <p className='text-4xl font-bebas text-center'>Private Events</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='pb-12'>
            <div>
              <div className='pt-10'>
                <p className='font-bebas text-4xl font-bold text-center'>FILL OUT YOUR DETAILS</p>
              </div>
            </div>
            <div>
              {/* form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
