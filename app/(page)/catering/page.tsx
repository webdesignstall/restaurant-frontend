import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Catering() {
  return (
    <div className=''>
      <div className='h-[80vh] flex flex-col justify-center items-center relative'>
        <div className='absolute top-0 left-0 w-full h-full -z-10 flex justify-center items-center flex-col'>
          <Image
            className='object-cover bg-cover w-full h-full'
            width={1000}
            height={1000}
            src='/catering/OLO-Catering-Hero_1900x800.jpg'
            alt='Bnner'
            priority
          />

        </div>
        <div className='flex flex-col justify-center items-center gap-4 px-6'>
          <div>
            <h1 className='text-white text-center'>A TRUE Get Together</h1>
          </div>

          <div className='text-wrap text-white text-center'>
            <p>Whether you're planning a party, office lunch, or getting ahead of a holiday, True Food Catering has you covered.</p>
          </div>
          <div className='flex justify-center'>
            <Button className='px-12 font-medium rounded-full bg-secondary hover:bg-secondary/90 text-primary'>
              Order Now
            </Button>
          </div>
        </div>
      </div>


      <div className='bg-primary/10 px-6'>
        <div className=''>
          <div className='py-10'>
            <h2 className='text-center font-semibold'>Order Now</h2>
          </div>
          <div className=''>
            <div className='lg:grid grid-cols-3 flex flex-col gap-10 max-w-7xl m-auto'>
              {
                items.map((item, index) => (
                  <div className='w-full h-full' key={index}>
                    <Image
                      className='object-cover bg-cover w-full'
                      width={300}
                      height={300}
                      src={item.img}
                      alt='TItle'
                    />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='max-w-7xl m-auto'>
          <div className='py-8'>
            <h3 className='text-center'>Seasonal Catering Menu</h3>
          </div>
          <div className='pb-6'>
            <p className='text-center'>
              At True Food Kitchen, we believe eating well is more than delicious and good-for-you food, it’s sharing it with good company. Whether you’re ordering for the office, everyday entertaining or planning a special event, our catering menu lets you carefully craft the ideal offering for your group gathering. Choose from a selection of healthy and delicious packages and a la carte offerings including starters, salads, sandwiches, bowls, desserts and refreshing beverages, featuring the best and freshest ingredients.
            </p>
          </div>
          <div className='w-full'>
            <Image
              className='w-full object-cover bg-cover'
              width={1000}
              height={1000}
              src='/catering/download.png'
              alt='png'
            />
          </div>
          <div className='py-8'>
            <h3 className='text-center'>
              Important Information About Our Catering Menu
            </h3>
          </div>
          <div className='pb-6'>
            <p className='text-center'>
              Please be aware that our restaurants use gluten and ingredients that contain all the major FDA allergens (peanuts, tree nuts, eggs, fish, shellfish, milk, soy and wheat).
            </p>
            <p className='text-center'>
              Our restaurants have shared cooking and preparation areas and the possibility exists for food items to come into contact with other food products. Due to these circumstances, we are unable to guarantee that any menu item can be completely free of allergens. In addition, while effort is made to keep our product information current and as complete as possible, it is possible that ingredient changes and substitutions may occur due to differences in regional suppliers, recipe revisions, preparation techniques, and/or the season of the year.
            </p>
            <p className='text-center'>
              Before placing your order, please inform your server if someone in your party has a food allergy or a special dietary need and we will do our best to make accommodations.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full h-72 overflow-hidden flex justify-center items-center flex-col relative'>
        <div className='absolute top-0 left-0 w-full -z-10 h-full'>
          <Image
            className='object-cover bg-cover w-full h-full'
            width={1000}
            height={1000}
            src='/catering/OLO-Catering-Hero_1900x800.jpg'
            alt='Bnner'
            priority
          />
        </div>
        <div className='flex justify-center'>
          <Button className='px-12 font-medium rounded-full bg-secondary hover:bg-secondary/90 text-primary'>
            Order Now
          </Button>
        </div>
      </div>
    </div>
  )
}


const items = [
  {
    title: '',
    img: '/catering/Catering-400x400_3_Resized.jpg'
  },
  {
    title: '',
    img: '/catering/Catering-Image-400x400_2.jpg'
  },
  {
    title: '',
    img: '/catering/Catering-400x400_2_Resized.jpg'
  },
]