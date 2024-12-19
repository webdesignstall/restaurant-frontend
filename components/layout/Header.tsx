'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import MobileNavbar from './MobileNavbar';
import { SignedIn, SignedOut, SignInButton, useUser, UserButton } from '@clerk/nextjs';

export default function TopNavbar() {
    const [scrollTop, setScrollTop] = useState(0);
    const pathName = usePathname();
    const router = useRouter();
    const { user } = useUser();
    // @ts-ignore
    const role = user?.publicMetadata?.role;
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
                        <div className={`absolute top-0 left-10 z-30`}>
                            <Link href='/'>
                                <Image
                                    width={120}
                                    height={120}
                                    src='/6258072417504072998.webp'
                                    alt='Logo'
                                />
                            </Link>
                        </div>
                        <div></div>
                        <div className='flex flex-row justify-center items-center pr-4'>
                            <ul className='flex flex-row lg:ml-28 h-20 justify-center items-center'>
                                {navItem.map((item, index) => (
                                    <li className='pr-6 xl:pr-10' key={index}>
                                        <Link
                                            className={`text-wrap w-fit flex justify-center items-center border-b-2 ${
                                                pathName === item.link ? 'border-gray-800' : 'border-white'
                                            }`}
                                            href={item.link}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className='xl:flex space-x-4 hidden'>
                                <Link href='/reservation'>
                                    <Button className='rounded-3xl px-8 text-gray-200 font-semibold'>
                                        Reservation
                                    </Button>
                                </Link>
                                <Link href='/order'>
                                    <Button className='rounded-3xl px-8  font-semibold bg-secondary text-primary hover:bg-secondary/80'>
                                        Order Online
                                    </Button>
                                </Link>
                                <Link href='/catering'>
                                    <Button className='rounded-3xl px-8 text-gray-200 font-semibold'>
                                        Catering
                                    </Button>
                                </Link>

                                <SignedOut>
                                    <div className="flex justify-center items-center">
                                        <SignInButton>
                                            <button className="text-orange-600">Sign In</button>
                                        </SignInButton>
                                    </div>
                                </SignedOut>
                                <div className='p-0 flex justify-center items-center space-x-3'>
                                    {
                                        user &&  <Link href={role === 'admin' ? '/admin': '/customer'}>Dashboard</Link>
                                    }

                                    <SignedIn>
                                        <UserButton />
                                    </SignedIn>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div>
                    <MobileNavbar />
                </div>
            </div>
        </div>
    );
}

export const navItem = [
    {
        id: 1,
        title: 'Menu',
        link: '/menu',
    },
    {
        id: 2,
        title: 'Locations',
        link: '/locations',
    },
    {
        id: 3,
        title: "What's New",
        link: '/whats-new',
    },
    {
        id: 4,
        title: 'Our Story',
        link: '/truestory',
    },
    {
        id: 5,
        title: 'Group Dining',
        link: '/group-dining',
    },
    {
        id: 6,
        title: 'Happy Hour',
        link: '/menu/happy-hour',
    },
    {
        id: 7,
        title: 'References',
        link: '/references',
    },
];
