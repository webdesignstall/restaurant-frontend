import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Truestory() {
  return (
    <div>
      <div className=''>
        <div className='relative h-[75vh] flex justify-center items-center flex-col'>
          <div className='absolute -z-10 w-full h-full'>
            <Image
              className='w-full h-full object-cover bg-cover'
              width={1000}
              height={1000}
              src='/truestory/Our-Story-Hero_1515x600.jpg'
              alt='baner'
              priority
            />
          </div>
          <div className='px-6'>
            <p className='text-center font-bebas text-7xl lg:text-[5rem] font-[900] text-white tracking-wider'>Take Comfort in Soy and Spice</p>
          </div>
        </div>

        <div className='max-w-5xl m-auto py-10'>
          <div className='py-4'>
            <p className='font-bebas text-6xl font-bold text-center'>Ingredients Obsessed. Chef Crafted.</p>
          </div>
          <div className='pb-6'>
            <p className='text-center font-roboto'>We believe in the power of whole, real food.
              We partner with each of our growers, ranchers and producers so that every ingredient meets our TRUE standards.
              That means better food for you, your family, and the planet.</p>
          </div>
          <div className='w-full h-full pb-8'>
            <iframe className='w-full object-cover bg-cover h-[50vh] lg:h-screen' src="https://www.youtube.com/embed/lOf6tDyk_iI?si=hJT5Y1pNmptO7qlc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div>
            <p className='font-bebas text-6xl font-bold text-center'>Delicious by chefs, nutritious by science.</p>
          </div>
          <div className='pb-6'>
            <p className='text-center font-roboto'>We believe in the power of whole, real food.
              We partner with each of our growers, ranchers and producers so that every ingredient meets our TRUE standards.
              That means better food for you, your family, and the planet.</p>
          </div>
        </div>
        <div>
          <div className='md:grid grid-cols-2 gap-10 flex flex-col'>
            {
              [1, 2, 3, 4].map((item, index) => (
                <div key={index} className='w-full flex flex-col justify-center items-center'>
                  <div className='bg-gray-200 w-full'>
                    <Image
                      className='w-full h-full bg-cover object-cover'
                      width={400}
                      height={400}
                      src='/truestory/OurStory_DrWeil_TopLeft.jpg'
                      alt='Benner'
                    />
                  </div>
                  <div className='p-3'>
                    <p className='text-center pb-3 text-5xl font-bebas font-bold lg:text-4xl'>Real Food For Real Life</p>
                    <p className='text-justify px-3 pb-3'>We believe in food that works for you, to nourish you as healthfully as possible…without sacrificing flavor. Based on the anti-inflammatory food pyramid, the brainchild of our founder Dr. Andrew Weil, renowned doctor of integrative medicine, every single ingredient on our menu is carefully selected and hand-crafted into signature dishes that make eating well effortless, energizing and most importantly, full of flavor.</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='bg-gray-200'>
          <div className='grid grid-cols-2 justify-between items-center max-w-7xl m-auto py-14'>
            <div>
              <Image
                className='w-full h-full object-cover bg-cover'
                width={600}
                height={600}
                src='/truestory/Cooking-Chef-25-wide_UP_R1-600x360-1.jpg'
                alt='Cooking Chef'
              />
            </div>
            <div className='flex flex-col justify-start items-center px-12 gap-6'>
              <div>
                <h3 className='text-center'>
                  INGREDIENT STANDARDS – SEED OILS
                </h3>
              </div>
              <div>
                <p className='text-center'>
                  We continuously evolve our culinary standards as we discover more about ingredients and their impacts on our bodies, planet, and more. Last year, we eliminated cooking with seed oils and are proud to exclusively use olive and avocado oil in all 45 restaurants nationwide. We were founded 15 years ago by Dr. Andrew Weil on the idea that great-tasting and nutritious food and thoughtfully crafted beverages can serve as a foundation for a life well lived and we are proud to stand by that today.
                </p>
              </div>
              <div>
                <Button className='rounded-full px-10 bg-primary'>
                  Review Full Statement
                </Button>
              </div>
            </div>
            <div className='border border-dashed border-gray-800 col-span-2 mt-6 p-8 rounded-xl'>
              <p>
                “We are on a mission to make it easier for more people to eat more real food. We are focused on using whole or minimally processed ingredients in everything that we make. When it comes to cooking oils, we’ve made the switch to cooking exclusively with olive and avocado oils. Cooking amazing food starts with using the best ingredients possible.”  – John Williams, True Food Kitchen CEO
              </p>
            </div>
          </div>
        </div>

        <div className='bg-white'>
          <div className='grid grid-cols-2 justify-between items-center max-w-7xl m-auto py-14'>
            <div className='flex flex-col justify-start items-center px-12 gap-6'>
              <div>
                <h3 className='text-center'>
                  sourcing with integrity
                </h3>
              </div>
              <div>
                <p className='text-center'>
                  We go to great lengths to source with integrity, partnering only with growers that are committed to the same values that we are. We’re proud to use organic Bianco DiNapoli tomatoes in our sauce. See how the partnership comes to life, right from the farm.
                </p>
              </div>
            </div>
            <div>
              <iframe className='w-full h-80' src="https://www.youtube.com/embed/zvi9_eEvLGI?si=uyRS9mfu5U5a6Tz1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
