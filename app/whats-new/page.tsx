import { Button } from '@/components/ui/button'
import React from 'react'

export default function WhatsNew() {
  return (
    <div>
      <div>
        <div className='pb-20'>
          <div className='py-8'>
            <p className='text-[5.5em] font-bebas font-extrabold text-center text-[#3b3d2f]'>What’s new at True Food</p>
          </div>
          <div>
            <div className='md:grid grid-cols-2 flex flex-col px-4 max-w-screen-xl m-auto gap-12'>
              {
                [1, 2, 3, 2, , 22, , 32, 32, 3, 23, 2, 32, 3, 2].map((item, index) => (
                  <div className='flex flex-col justify-center items-center' key={index}>
                    <div className='w-full h-72 bg-gray-300'></div>
                    <div className='px-16'>
                      <div>
                        <p className='text-center py-5 font-bebas font-bold text-[2.5rem] text-[#3b3d2f]'>Fall Flavors, True Moments</p>
                      </div>
                      <div>
                        <p className='text-center py-2 font-roboto text-lg tracking-wide  font-medium'>Your seasonal favorites are back, along with new dishes crafted with a True twist. See Menu!</p>
                      </div>
                      <div className="mt-6 w-full flex justify-center">
                        <Button className='rounded-3xl text-xl font-medium bg-[#3b3d2f]' size='lg'>
                          Learn more
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
