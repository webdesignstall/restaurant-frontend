'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navItem } from '@/data/_nav';
import Link from 'next/link';
import Image from 'next/image';

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
                    <Image
                        width={100}
                        height={100}
                        src="/logofile.png"
                        alt="Logo"
                    />
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
                                <div className="text-center">
                                    <ul className="space-y-6">
                                        {navItem.map((item, index) => (
                                            <li key={index}>
                                                <Link href="/" className="text-2xl font-semibold font-bebas">
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
                <div className='bg-black text-wrap rounded-full py-2 px-8 text-gray-200 font-[600] tracking-wide'>Reservation</div>
                <div className='bg-[#ffa012] text-wrap rounded-full py-2 px-8 text-black font-[600] tracking-wide'>Order Line</div>
                <div className='bg-black text-wrap rounded-full py-2 px-8 text-gray-200 font-[600] tracking-wide'>Catering</div>
            </div>
        </div>
    );
}
