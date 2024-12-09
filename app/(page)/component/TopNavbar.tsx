'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MobileNavbar from './MobileNavbar'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function TopNavbar() {
    const [scrollTop, setScrollTop] = useState(0);
    const pathName = usePathname()

    // Update scroll position
    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <div>
                <div className='hidden md:flex'>
                    <nav className='flex justify-between items-center w-full px-4 relative shadow-lg'>
                        <div className={`absolute top-0 z-30`}>
                            <Link href='/'>
                                <Image
                                    width={120}
                                    height={120}
                                    src='/logofile.png'
                                    alt='Logo'
                                />
                            </Link>
                        </div>
                        <div></div>
                        <ul className='flex flex-row lg:ml-28 h-20 justify-center items-center'>
                            {
                                navItem.map((item, index) => (
                                    <li className='pr-6' key={index}>
                                        <Link className={`text-wrap w-fit flex justify-center items-center border-b-2  ${pathName === item.link ? 'border-gray-800' : 'border-white'}`} href={item.link}>{item.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='xl:flex space-x-4 hidden'>
                            <Button className='rounded-3xl px-6'>
                                Reservation
                            </Button>
                            <Button className='rounded-3xl px-6'>
                                Order Line
                            </Button>
                            <Button className='rounded-3xl px-6'>
                                Catering
                            </Button>
                        </div>
                    </nav>
                </div>
                <div>
                    <MobileNavbar />
                </div>
            </div>
        </div>
    )
}


export const navItem = [
    {
        id: 1,
        title: 'Menu',
        link: '/menu'
    },
    {
        id: 2,
        title: "What's New",
        link: '/whats-new'
    },
    {
        id: 3,
        title: "Our Story",
        link: '/truestory'
    },
    {
        id: 4,
        title: "Group Dining",
        link: '/group-dining'
    },
]