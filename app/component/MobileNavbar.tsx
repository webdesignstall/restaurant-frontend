'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { navItem } from '@/data/_nav'
import Link from 'next/link';
export default function MobileNavbar() {
    const [navber, setNavber] = useState(false);

    // Framer Motion Variants for animations
    const sidebarVariants = {
        hidden: { opacity: 0, duration: .3 },
        visible: { x: 0, opacity: 1, duration: .3 },
        exit: { opacity: 0, duration: .3 },
    };
    return (
        <div>
            <div className="flex justify-end items-center bg-gray-100">
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
                                <div className="mt-[80px] flex justify-end items-center">
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
                                        {
                                            navItem.map((item, index) => (
                                                <li>
                                                    <Link key={index} href="/" className="text-2xl font-semibold ">
                                                        {item.title}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
