'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { ShoppingBag, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
    const pathName = usePathname();
    const [navbar, setNavbar] = useState(false);

    const menuVariants = {
        hidden: { opacity: 0, y: '-100%' },
        visible: { opacity: 1, y: 0 },
    };

    const items = [
        { title: 'Order', link: '/order' },
        { title: 'Location', link: '/location' },
        { title: 'Sign in', link: '/signin' },
        { title: 'Join Now', link: '/signup' },
    ];

    return (
        <div>
            {/* Desktop Navbar */}
            <div className='h-20 bg-white w-full lg:flex justify-between items-center flex-row px-10 hidden'>
                <div className='mt-10'>
                    <Link href='/'>
                        <Image width={120} height={120} src='/6258072417504072998.webp' alt='Logo' />
                    </Link>
                </div>
                <div className='hidden lg:flex'>
                    <ul className='flex flex-row'>
                        {items.map((item, index) => (
                            <li key={index}>
                                <Link
                                    className={`font-medium text-lg ${index === 2
                                        ? 'border-2 px-6 py-2 border-primary hover:bg-primary/10 rounded-full mr-6'
                                        : 'px-6 py-2'
                                        } ${index === 3
                                            ? 'bg-primary text-white hover:bg-primary/80 rounded-full mr-6'
                                            : ''
                                        }`}
                                    href={item.link}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href='/order'>
                                <ShoppingBag size={30} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className='lg:hidden'>
                <div className='flex flex-row justify-between items-center px-8 h-20 bg-primary'>
                    <div
                        className='cursor-pointer'
                        onClick={() => setNavbar(!navbar)}
                    >
                        <div className='flex flex-col justify-center items-center'>
                            <div className='border-b-2 w-8 pt-0 border-b-white'></div>
                            <div className='border-b-2 w-8 pt-2 border-b-white'></div>
                            <div className='border-b-2 w-8 pt-2 border-b-white'></div>
                        </div>
                    </div>
                    <div>
                        <Link href='/'>
                            <Image width={70} height={70} src='/6258072417504072998.webp' alt='Logo' />
                        </Link>
                    </div>
                    <div>
                        <Link href='/order'>
                            <ShoppingBag className='text-white' size={30} />
                        </Link>
                    </div>
                </div>

                {navbar && (
                    <motion.div
                        className='w-full h-screen z-40 fixed top-0 left-0 bg-white'
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        variants={menuVariants}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='relative'>
                            <div className='h-56 bg-primary flex flex-col justify-center items-center'>
                                <Link href='/'>
                                    <Image
                                        width={120}
                                        height={120}
                                        src='/6258072417504072998.webp'
                                        alt='Logo'
                                    />
                                </Link>
                            </div>
                            <button
                                className='absolute top-5 right-5'
                                onClick={() => setNavbar(false)}
                            >
                                <X className='text-white' size={30} />
                            </button>
                            <ul className='flex flex-col gap-6 mt-6 items-center'>
                                {items.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            className={`font-medium text-2xl ${index === 2
                                                ? 'border-2 px-12 py-2 border-primary hover:bg-primary/10 rounded-full'
                                                : 'px-12 py-2'
                                                } ${index === 3
                                                    ? 'bg-primary text-white hover:bg-primary/80 rounded-full'
                                                    : ''
                                                }`}
                                            href={item.link}
                                            onClick={() => setNavbar(false)}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}