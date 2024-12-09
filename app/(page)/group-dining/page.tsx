import Image from 'next/image'
import React from 'react'

export default function GroupDining() {
  return (
    <div>
      <div>
        <div className='w-full'>
          <div className='flex justify-center items-center w-full relative h-screen'>
            <div className='absolute w-full h-full -z-10'>
              <Image
                className='w-full object-cover bg-cover'
                width={1000}
                height={1000}
                src='/truestory/Our-Story-Hero_1515x600.jpg'
                alt='baner'
                property='/truestory/Our-Story-Hero_1515x600.jpg'
              />
            </div>
            <div>
              <p className='text-center font-bebas text-[5rem] font-[900] text-white tracking-wider'>THROW YOUR PARTY AT TRUE FOOD</p>
            </div>
          </div>
          <div>
            <div>
              <p className='text-center font-bebas text-[4rem] font-[900] text-primary tracking-wider'>THROW YOUR PARTY AT TRUE FOOD</p>
            </div>
            <div>
              <p>Planning your next event? Let us help make it unforgettable! Whether you’re looking to book a small, intimate gathering, a larger corporate event, or even a full restaurant buyout, we’re here to help you celebrate any occasion. With customizable menus and flexible seating arrangements, we ensure every detail is tailored to create a memorable experience for you and your guests.</p>
              <p>
                Ready to reserve your date? Simply fill out the form below, and our team will handle the rest—taking care of the details so you can focus on celebrating!
              </p>
            </div>
          </div>
          <div>
            <div className='grid grid-cols-3 gap-6 max-w-6xl m-auto'>
              {
                [1,2,3].map((item, index) =>(
                  <div key={index} className='w-full'>
                    <div className='w-full h-72 bg-gray-200'></div>
                    <div>
                      <p className='text-3xl font-bebas'>Private Events</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div>
            <div>
              <div className='pt-10'>
                <p className='font-bebas text-4xl font-bold text-center'>FILL OUT YOUR DETAILS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
