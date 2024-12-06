import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNavbar from './MobileNavbar'

export default function TopNavbar() {
    return (
        <div>
            <div>
                <div className='hidden md:flex'>
                    <nav className='flex justify-between items-center w-full px-4 relative'>
                        <div className='absolute top-0 z-30'>
                            <Image
                                width={100}
                                height={100}
                                src='/logofile.png'
                                alt='Logo'
                            />
                        </div>
                        <div></div>
                        <ul className='flex flex-row lg:ml-28'>
                            {
                                navItem.map((item, index) => (
                                    <li key={index}>
                                        <Link className='text-wrap w-fit lg:pr-7 md:pr-5 h-20 flex justify-center items-center' href='/'>{item.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='xl:flex space-x-4 hidden'>
                            <div className='bg-black rounded-full py-2 px-8 text-gray-200 font-[600] tracking-wide'>Reservation</div>
                            <div className='bg-[#ffa012] rounded-full py-2 px-8 text-black font-[600] tracking-wide'>Order Line</div>
                            <div className='bg-black rounded-full py-2 px-8 text-gray-200 font-[600] tracking-wide'>Catering</div>
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
        link: '/'
    },
    {
        id: 2,
        title: 'Locations',
        link: '/'
    },
    {
        id: 3,
        title: "What's New",
        link: '/'
    },
    {
        id: 4,
        title: "Our Story",
        link: '/'
    },
    {
        id: 5,
        title: "Group Dining",
        link: '/'
    },
    {
        id: 6,
        title: "Gift Cards",
        link: '/'
    },
    {
        id: 7,
        title: "Careers",
        link: '/'
    }
]