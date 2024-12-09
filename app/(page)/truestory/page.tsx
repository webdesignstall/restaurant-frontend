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
            <p className='text-center font-bebas text-7xl lg:text-[5rem] font-[900] text-white tracking-wider'>Take Comfort in True Food</p>
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
      </div>
    </div>
  )
}
