import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TopNavbar() {
    return (
        <div>
            <div>
                <div>
                    <nav className='flex justify-between items-center w-full px-4 relative'>
                        <div className='absolute top-0 z-30'>
                            <Image
                                width={100}
                                height={100}
                                src='/logofile.png'
                                alt='Logo'
                            />
                        </div>
                        <ul className='flex flex-row ml-36'>
                            {
                                navItem.map((item, index) => (
                                    <li key={index}>
                                        <Link className='text-wrap w-fit pr-8 h-20 flex justify-center items-center' href='/'>{item.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='flex space-x-4'>
                            <div className='bg-black text-wrap rounded-full py-2 px-8 text-gray-200 font-[600] tracking-wide'>Reservation</div>
                            <div className='bg-[#ffa012] text-wrap rounded-full py-2 px-8 text-black font-[600] tracking-wide'>Order Line</div>
                            <div className='bg-black text-wrap rounded-full py-2 px-8 text-gray-200 font-[600] tracking-wide'>Catering</div>
                        </div>
                    </nav>
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