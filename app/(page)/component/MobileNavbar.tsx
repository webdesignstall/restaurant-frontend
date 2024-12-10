'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function MobileNavbar() {
    const [navber, setNavber] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

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

    // Framer Motion Variants for animations
    const sidebarVariants = {
        hidden: { opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <div>
            <div className={`flex justify-between items-center md:hidden bg-gray-100 ${scrollTop > 0 ? 'fixed top-0 left-0 w-full' : 'relative'}`}>
                {/* Dynamic Logo Position */}
                <div
                    className={`absolute z-30 left-6 transition-all duration-300 ${scrollTop > 0 ? 'top-0 w-16 duration-150' : '-top-8'
                        }`}
                >
                    <Link href='/'>
                        <Image
                            width={100}
                            height={100}
                            src="/logofile.png"
                            alt="Logo"
                        /></Link>
                </div>
                <div></div>

                {/* Hamburger Icon and Navbar */}
                <div>
                    {/* Hamburger Icon */}
                    <div
                        onClick={() => setNavber(true)}
                        className="p-4 cursor-pointer z-50"
                    >
                        <div className="flex flex-col justify-center items-center">
                            <div className="border-b-2 w-8 pt-0 border-black"></div>
                            <div className="border-b-2 w-8 pt-2 border-black"></div>
                            <div className="border-b-2 w-8 pt-2 border-black"></div>
                        </div>
                    </div>

                    {/* Sidebar (Navbar Menu) */}
                    <AnimatePresence>
                        {navber && (
                            <motion.div
                                className="fixed top-0 left-0 w-full h-full z-30 bg-white"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={sidebarVariants}
                                transition={{ type: 'spring', stiffness: 70, damping: 15 }}
                            >
                                {/* Close Icon */}
                                <div className={` flex justify-end items-center ${scrollTop > 0 ? '' : 'mt-[80px]'}`}>
                                    <div
                                        onClick={() => setNavber(false)}
                                        className="px-4 py-2 cursor-pointer"
                                    >
                                        <div className="relative w-8 h-8">
                                            <div className="absolute w-8 border-b-2 border-black transform rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                            <div className="absolute w-8 border-b-2 border-black transform -rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Links or Menu Items */}
                                <div className="text-center w-full">
                                    <ul className="space-y-7 w-full">
                                        {navItem.map((item, index) => (
                                            <li className='w-full' key={index}>
                                                <Link onClick={() => setNavber(false)} href={item.link} className="text-3xl font-semibold font-bebas border-b-4 border-b-white active:border-b-gray-800 hover:border-b-gray-800  w-full block py-2">
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <div className='fixed bottom-0 left-0 h-16 bg-white w-full items-center flex justify-center space-x-3 xl:hidden z-[999] shadow-inner'>
               <Link href='/order'>
               
                <Button className='rounded-3xl px-8 text-gray-200 font-semibold'>
                    Reservation
                </Button>
               </Link>
                <Link href='/order'>
                
                <Button className='rounded-3xl px-8 bg-secondary hover:bg-secondary/80 text-primary font-semibold'>
                    Order Line
                </Button>
                </Link>
                <Link href='/order'>
                
                <Button className='rounded-3xl px-8 text-gray-200 font-semibold'>
                    Catering
                </Button>
                </Link>
            </div>
        </div>
    );
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
    {
        id: 6,
        title: "Gift Cards",
        link: '/'
    },
    {
        id: 7,
        title: "Careers",
        link: '/'
    },
    {
        id: 8,
        title: "Close menu",
        link: '/'
    },
]