import React from 'react'

export default function Catering() {
  return (
    <div>
      <div className='h-screen flex flex-col justify-center items-center'>
        <div>
          <p className='text-6xl font-bebas font-bold'>
            A True get together
          </p>
        </div>
      </div>
      <div className='mb-12'>
        <div className='py-4'>
          <p className='text-4xl text-center font-semibold'>Order Now</p>
        </div>
        <div>
          <div className='grid grid-cols-3 gap-10 max-w-7xl m-auto'>
            {
              [1, 2, 3].map((_, index) => (
                <div key={index}>
                  <div className='w-full h-72 bg-gray-200'></div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
