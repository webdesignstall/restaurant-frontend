import React from 'react'

export default function Menu() {
  return (
    <div>
      <div className='pb-20 pt-4'>
        <div className='flex flex-col justify-center items-center h-[28rem] max-w-screen-md m-auto'>
          <div className='flex justify-center items-center text-center pb-4'>
            <p className="font-bebas lg:text-[5.7em] text-4xl md:text-6xl text-center font-[900] text-[#3b3d2f] leading-none">Crafted by chefs, delicious by nature.</p>
          </div>
          <div className='pb-10'>
            <p className='text-sm'>Menu pricing varies by location – to view location-specific menus, visit our locations page.</p>
          </div>
          <div>
            <p className='font-bebas lg:text-[3.7em] text-2xl text-center font-[900] text-[#3b3d2f] leading-none'>Select a Category:</p>
          </div>
        </div>
        <div>
          <div className='sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-screen-xl m-auto px-4 flex flex-col '>
            {
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 11,1,1,1].map((item, index) => (
                <div key={index} className='rounded-2xl overflow-hidden'>
                  <div className='bg-[#ddddd6]'>
                    <p className='text-center text-2xl text-wrap font-[500] py-6 px-12 text-zinc-700 font-roboto'>Starters & Shareables</p>
                  </div>
                  <div className='w-full h-56 bg-gray-400'></div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
