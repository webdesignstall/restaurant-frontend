import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Item() {
    return (
        <div>
            <div>
                <div className='w-full h-80 flex flex-col justify-center items-center'>
                    <div className='py-6'>
                        <p className='text-5xl font-bebas text-primary text-center font-extrabold'>Desserts</p>
                    </div>
                    <div className='pb-10'>
                        <Link href='/menu'>
                            <Button className='rounded-3xl px-6' size='sm'>Back to menu</Button>
                        </Link>
                    </div>
                    <div className='py-6'>
                        <p className='text-4xl font-bebas text-primary text-center font-extrabold'>
                            Featured Menu Items
                        </p>
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-3 max-w-7xl m-auto gap-10'>
                        {
                            items.map((item, index) => (
                                <div key={index}>
                                    <div className='w-full'>
                                        <Image
                                            className='w-full object-cover bg-cover'
                                            width={300}
                                            height={300}
                                            src={item.image}
                                            alt='Food' />
                                    </div>
                                    <div className='p-4 flex flex-col justify-center items-center'>
                                        <div className='pb-4'>
                                            <p className='font-bebas text-3xl font-bold text-center'>
                                                {item.title}
                                            </p>
                                        </div>
                                        <div className='text-center'>
                                            <p>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='py-12'>
                    <div>
                        <p className='text-center text-5xl text-primary font-bold font-bebas tracking-wide'>Additional Menu Items</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


const items = [
    {
        title: 'Chocolate Peanut Butter Tart',
        desc: 'almond & coconut crust, TCHO chocolate ganache, peanut butter filling V GF',
        image: '/menu/OLO_Chocolate-Peanut-Butter-Tart_2532x1896.jpg'
    },
    {
        title: 'Chocolate Peanut Butter Tart',
        desc: 'almond & coconut crust, TCHO chocolate ganache, peanut butter filling V GF',
        image: '/menu/OLO_Chocolate-Peanut-Butter-Tart_2532x1896.jpg'
    },
    {
        title: 'Chocolate Peanut Butter Tart',
        desc: 'almond & coconut crust, TCHO chocolate ganache, peanut butter filling V GF',
        image: '/menu/OLO_Chocolate-Peanut-Butter-Tart_2532x1896.jpg'
    }
]