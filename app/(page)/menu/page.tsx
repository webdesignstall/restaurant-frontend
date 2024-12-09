import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <div>
      <div className='pb-20 pt-4'>
        <div className='flex flex-col justify-center items-center h-[28rem] max-w-screen-md m-auto'>
          <div className='flex justify-center items-center text-center pb-4'>
            <p className="font-bebas lg:text-[5.7em] text-6xl md:text-6xl text-center font-[900] text-[#3b3d2f] leading-none">Crafted by chefs, delicious by nature.</p>
          </div>
          <div className='pb-10'>
            <p className='text-xl text-center'>Menu pricing varies by location – to view location-specific menus, visit our locations page.</p>
          </div>
          <div>
            <p className='font-bebas lg:text-[3.7em] text-5xl text-center font-[900] text-[#3b3d2f] leading-none'>Select a Category:</p>
          </div>
        </div>
        <div>
          <div className='sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 max-w-screen-xl m-auto px-4 flex flex-col '>
            {
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 11, 1, 1, 1].map((item, index) => (
                <Link key={index} href='/menu/item'>
                  <Card className='rounded-2xl overflow-hidden bg-[#bcbbae80] hover:bg-[#595e4980] duration-300'>
                    <div className='py-10 px-4'>
                      <p className='text-center text-2xl text-wrap font-[500] text-zinc-700 font-roboto'>Starters & Shareables</p>
                    </div>
                    <div className='w-full h-56'>
                      <Image
                        className='w-full object-cover bg-cover'
                        width={300}
                        height={300}
                        src='/Image-Slider-Home1_400x357.jpg'
                        alt='Food Slider'
                      />
                    </div>
                  </Card>
                </Link>
              ))
            }
          </div>
        </div>
        <div className='py-20'>
          <div className='md:grid grid-cols-5 gap-x-10 max-w-7xl m-auto px-8 justify-center items-center flex flex-col'>
            <div className='col-span-3'>
              <Image
                className='w-full object-cover bg-cover'
                width={700}
                height={700}
                src='/menu/TampaWebsiteHero_1920x1080_1.jpg'
                alt='benner'
              />
            </div>
            <div className='col-span-2 flex flex-col justify-center items-center md:justify-start md:items-start'>
              <div className='pt-8 pb-4'>
                <p className='lg:text-6xl text-3xl text-center md:text-left font-bebas leading-none font-bold text-primary md:pb-4'>Where Culinary Expertise, Ingredient Obsession, And Nutritional Wisdom Merge</p>
              </div>
              <div className='pb-8 lg:pb-4'>
                <p className='text-lg text-center tracking-wide'>
                  We believe in the power of whole, real food. We partner with each of our growers, ranchers and producers so that every ingredient meets our TRUE standards. That means better food for you, your family, and the planet.
                </p>
              </div>
              <div>
                <Button className='rounded-3xl px-12 lg:px-10 py-6 lg:py-4 text-2xl lg:text-lg'>
                  Our Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
