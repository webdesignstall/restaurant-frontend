import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

export default function Truestory() {
  return (
    <div>
      <div>
        {/* Hero Section */}
        <div className='relative h-[75vh] flex justify-center items-center flex-col'>
          <div className='absolute -z-10 w-full h-full'>
            <Image
              className='w-full h-full object-cover'
              width={1920}
              height={1080}
              src='/truestory/Our-Story-Hero_1515x600.jpg'
              alt='banner'
              priority
            />
          </div>
          <div className='px-6'>
            <p className='text-center font-bebas text-4xl md:text-6xl lg:text-[5rem] font-extrabold text-white tracking-wider'>
              Take Comfort in Soy and Spice
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className='bg-[#bcbbae80] pb-12 px-4 md:px-6 xl:px-0'>
          <div className='max-w-screen-lg m-auto py-10'>
            <div className='mt-4'>
              <h2 className='text-center text-primary text-xl md:text-2xl font-bold'>
                Ingredients Obsessed. Chef Crafted.
              </h2>
            </div>
            <div className='py-12'>
              <p className='text-center text-base md:text-lg tracking-wide font-roboto'>
                We believe in the power of whole, real food. We partner with each of our growers,
                ranchers and producers so that every ingredient meets our TRUE standards. That means
                better food for you, your family, and the planet.
              </p>
            </div>
            <div className='w-full pb-8'>
              <iframe
                className='w-full h-[20rem] md:h-[28rem] lg:h-[34rem] object-cover'
                src="https://www.youtube.com/embed/lOf6tDyk_iI?si=hJT5Y1pNmptO7qlc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className='max-w-screen-xl m-auto mb-6'>
            <div className='mt-3 pb-4'>
              <h2 className='text-center text-primary text-xl md:text-2xl font-bold'>
                Delicious by chefs, nutritious by science.
              </h2>
            </div>
            <div className='pb-6'>
              <p className='text-center text-base md:text-lg font-medium tracking-wide font-roboto'>
                We believe in the power of whole, real food. We partner with each of our growers,
                ranchers and producers so that every ingredient meets our TRUE standards. That means
                better food for you, your family, and the planet.
              </p>
            </div>
          </div>

          {/* Image Grid Section */}
          <div className='md:grid grid-cols-2 gap-16 flex flex-col 2xl:max-w-screen-xl xl:max-w-screen-xl m-auto'>
            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className='w-full flex flex-col justify-center items-center'
              >
                <div className='bg-gray-200 w-full overflow-hidden'>
                  <Image
                    className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
                    width={800}
                    height={600}
                    src='/truestory/OurStory_DrWeil_TopLeft.jpg'
                    alt='Banner'
                  />
                </div>
                <div className='p-3'>
                  <p className='text-center pb-4 text-xl md:text-4xl font-bebas font-bold'>
                    Real Food For Real Life
                  </p>
                  <p className='text-center  text-lg font-medium tracking-wide'>
                    We believe in food that works for you, to nourish you as healthfully as
                    possible…without sacrificing flavor. Based on the anti-inflammatory food
                    pyramid, the brainchild of our founder Dr. Andrew Weil, renowned doctor of
                    integrative medicine, every single ingredient on our menu is carefully selected
                    and hand-crafted into signature dishes that make eating well effortless,
                    energizing and most importantly, full of flavor.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Sections */}
          <div className='bg-[#bcbbae80]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl m-auto py-14 gap-8'>
              <div>
                <Image
                  className='w-full h-full object-cover'
                  width={600}
                  height={400}
                  src='/truestory/Cooking-Chef-25-wide_UP_R1-600x360-1.jpg'
                  alt='Cooking Chef'
                />
              </div>
              <div className='flex flex-col justify-start items-center px-6 md:px-12 gap-6'>
                <h3 className='text-center text-xl md:text-2xl font-bold'>
                  INGREDIENT STANDARDS – SEED OILS
                </h3>
                <p className='text-center text-sm md:text-base'>
                  We continuously evolve our culinary standards as we discover more about
                  ingredients and their impacts on our bodies, planet, and more. Last year, we
                  eliminated cooking with seed oils and are proud to exclusively use olive and
                  avocado oil in all 45 restaurants nationwide. We were founded 15 years ago by Dr.
                  Andrew Weil on the idea that great-tasting and nutritious food and thoughtfully
                  crafted beverages can serve as a foundation for a life well lived and we are proud
                  to stand by that today.
                </p>
                <Button className='rounded-full px-8 md:px-10 bg-primary'>
                  Review Full Statement
                </Button>
              </div>
            </div>
          </div>

          <div className=''>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl m-auto py-14 gap-8'>
              <div className='flex flex-col justify-start items-center px-6 md:px-12 gap-6'>
                <h3 className='text-center text-xl md:text-2xl font-bold'>
                  Sourcing with Integrity
                </h3>
                <p className='text-center text-sm md:text-base'>
                  We go to great lengths to source with integrity, partnering only with growers that
                  are committed to the same values that we are. We’re proud to use organic Bianco
                  DiNapoli tomatoes in our sauce. See how the partnership comes to life, right from
                  the farm.
                </p>
              </div>
              <div>
                <iframe
                  className='w-full h-[20rem] md:h-[28rem] object-cover'
                  src="https://www.youtube.com/embed/zvi9_eEvLGI?si=uyRS9mfu5U5a6Tz1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}