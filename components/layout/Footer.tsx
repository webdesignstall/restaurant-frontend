import { Facebook, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Button } from '../ui/button';

export default function Footer() {
    return (
        <div className='bg-[#3b3d2f] pt-16 pb-36'>
            <div className='max-w-screen-2xl 2xl:max-w-screen-2xl m-auto'>
                <div className='md:grid flex flex-col justify-center items-center md:items-start md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 md:px-10 lg:px-0'>
                    {
                        items.map((item, index) => (
                            <div className='md:pl-10' key={index}>
                                <h2 className='text-[2rem] text-center md:text-left font-semibold pb-6 font-bebas tracking-wide text-white uppercase'>
                                    {item.title}
                                </h2>
                                <div>
                                    <ul className='font-normal'>
                                        {
                                            item.menu.map((item, index) => (
                                                <li key={index}>
                                                    {
                                                        item?.link ?  <Link className='text-sm text-center lg:text-left flex flex-col justify-center items-center md:justify-start md:items-start pb-2 text-gray-300 hover:text-gray-100 duration-150' href={item.link}>{item.title}</Link>
                                                            :
                                                            <div className='text-sm text-center lg:text-left flex flex-col justify-center items-center md:justify-start md:items-start pb-2 text-gray-300 hover:text-gray-100 duration-150'>{item.title}</div>
                                                    }

                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>

                        ))
                    }
                    <div className='md:col-span-4 md:max-w-screen-sm lg:col-span-4 2xl:col-span-2 m-auto  px-8 flex justify-center items-start lg:justify-start flex-col w-full mt-8 lg:mt-0'>
                        <div className='w-full'>
                            <h2 className='text-[2rem] font-semibold pb-6 tracking-wide text-white uppercase text-center lg:text-left font-bebas'>
                                true INSIDER
                            </h2>
                        </div>
                        <div className='w-full pb-4'>
                            <p className='text-gray-200 font-normal text-center lg:text-left'>Get the inside scoop - Join for news, special offers & more</p>
                        </div>
                        <div className='flex flex-row justify-center items-center w-full'>
                            <div className='w-full'>
                                <input className='w-full p-3 text-center lg:text-left focus-visible:ring-0 bg-white' type="email" placeholder='Email' />
                            </div>
                            <div className=''>
                                <Button className='rounded-none py-6 font-semibold' variant='secondary'>Sign up</Button>
                            </div>
                        </div>
                        <div className='w-full mt-8'>
                            <p className='text-white pb-2 text-center lg:text-left'>Connect With Us</p>
                            <div className="flex justify-center items-center pb-4 lg:justify-start space-x-4 text-white">
                                <FaInstagram size={30} className="cursor-pointer hover:opacity-75" />
                                <FaLinkedin size={30} className="cursor-pointer hover:opacity-75" />
                                <FaTiktok size={30} className="cursor-pointer hover:opacity-75" />
                                <FaFacebookF size={30} className="cursor-pointer hover:opacity-75" />
                            </div>
                            <div className='text-white text-center w-full lg:text-left'>
                                <Link href={'/'}> © Soy and Spice </Link> | <Link href={'/terms'}>Terms of Use</Link>  | <Link href={'/accessibility-statement'}>Accessibility Statement</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const items = [
    {
        title: 'Address',
        menu: [
            {
                title: '123 Street, Pennsylvania, USA',
                link: '/locations'
            },
            {
                title: '+1 4122927071',
                link: '/catering'
            },
            {
                title: <>
                    <p>Team code</p>
                    <p>2043-901</p>
                </>
            },
            {
                title: <div className='mt-4'>
                    <p>Nehanth Individual Code</p>
                    <p>2043-023</p>
                </div>
            },
            {
                title: <div>
                    <p>Sarwani Individual Code</p>
                    <p>2043-087</p>
                </div>
            },
        ]
    },
    {
        title: 'Food',
        menu: [
            {
                title: 'Menu',
                link: '/menu'
            },
            {
                title: 'Catering',
                link: '/catering'
            },
            {
                title: 'Nutritionals and Allergens',
                link: '/nutritionalguide'
            },
        ]
    },
    {
        title: 'About',
        menu: [
            {
                title: 'Locations',
                link: '/locations'
            },
            {
                title: 'Our Story',
                link: '/catering'
            },
            {
                title: 'Contact',
                link: '/contact'
            },
            {
                title: 'Careers',
                link: '/careers'
            },
        ]
    },
    {
        title: 'Soy and Spice',
        menu: [
            {
                title: 'True Insider',
                link: '/true-insider'
            },
            {
                title: 'Our Story',
                link: '/truestory'
            },
            {
                title: 'Gift Cards',
                link: '/contact'
            },
            {
                title: 'Talk to True',
                link: '/careers'
            },
            {
                title: 'Feedback',
                link: 'https://docs.google.com/forms/d/e/1FAIpQLSdPevm8liSS5FU7fKlkl0u2AEPc1QJXPkSYYpq_z9oFxEtiFQ/viewform?usp=dialog'
            },
        ]
    },
]











