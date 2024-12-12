import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function WhatsNew() {
  return (
    <div>
      <div>
        <div className='pb-20'>
          <div className='py-12 px-6'>
            <h1 className='text-center text-primary'>What’s new at True Food</h1>
          </div>
          <div>
            <div className='md:grid grid-cols-2 flex flex-col px-4 max-w-screen-xl m-auto gap-16'>
              {
                [1, 2, 3, 2, , 22, , 32, 32, 3, 23, 2, 32, 3, 2].map((item, index) => (
                  <Link key={index} href='/whats-new/item'>
                    <div className='flex flex-col justify-center items-center' >
                      <div className='w-full'>
                        <Image
                          className='w-full bg-cover object-cover'
                          width={400}
                          height={400}
                          src='/menu/Whats-New_Fall-Menu_628x398-1.jpg'
                          alt='' />
                      </div>
                      <div className='px-8'>
                        <div className='pt-8 pb-2'>
                          <h3 className='text-center'>Fall Flavors, True Moments</h3>
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
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
