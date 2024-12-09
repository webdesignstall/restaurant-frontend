'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Header() {
    const pathName = usePathname()
    return (
        <div>
            <div className='h-20 bg-white w-full flex justify-between items-center flex-row px-10'>
                <div>
                    <Link className='font-medium text-xl' href='/'>
                        Home
                    </Link>
                </div>
                <div>
                    <div>
                        <ul className='flex flex-row gap-x-4'>
                            {
                                items.map((item, index) => (
                                    <li key={index}>
                                        <Link className={`font-medium text-lg ${index === 2 ? 'border-2 px-6 py-2 border-primary hover:bg-primary/10 rounded-full' : 'px-6 py-2'} ${index === 3 ? 'bg-primary text-white hover:bg-primary/80 rounded-full' : ''}`} href={item.link}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))

                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


const items = [
    {
        title: 'Order',
        link: '/order'
    },
    {
        title: 'Location',
        link: '/location'
    },
    {
        title: 'Sing in',
        link: '/signin'
    },
    {
        title: 'Join Now',
        link: '/signup'
    },
]