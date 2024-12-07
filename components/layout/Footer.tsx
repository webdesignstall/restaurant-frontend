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
            <div className='max-w-screen-2xl m-auto'>
                <div className='md:grid flex flex-col justify-center items-center md:items-start md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 md:px-10'>
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
                                                    <Link className='text-sm text-center lg:text-left flex flex-col justify-center items-center md:justify-start md:items-start pb-2 text-gray-300 hover:text-gray-100 duration-150' href={item.link}>{item.title}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>

                        ))
                    }
                    <div className='md:col-span-3 md:max-w-screen-md lg:col-span-2 m-auto  px-8 flex justify-center items-start lg:justify-start flex-col w-full mt-8 lg:mt-0'>
                        <div className='w-full'>
                            <h2 className='text-[2rem] font-semibold pb-6 tracking-wide text-white uppercase text-center lg:text-left font-bebas'>
                                true INSIDER
                            </h2>
                        </div>
                        <div className='w-full pb-4'>
                            <p className='text-gray-200 font-normal text-center lg:text-left'>Get the inside scoop - Join for news, special offers & more</p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-full'>
                            <div className='w-full'>
                                <label className='text-white pb-2 block text-center lg:text-left' htmlFor="">Email</label>
                                <input className='w-full p-3 text-center rounded-2xl lg:text-left' type="email" placeholder='Email' />
                            </div>
                            <div className='w-full mt-4'>
                                <Button className='' variant='secondary' disabled>Sign up</Button>
                            </div>
                        </div>
                        <div className='w-full mt-8'>
                            <p className='text-white pb-2 text-center lg:text-left'>Connect With Us</p>
                            <div className='flex flex-row justify-center items-center lg:justify-start text-white space-x-4 pb-4'>
                                <div><FaInstagram size={30} /> </div>
                                <div><FaLinkedin size={30} /> </div>
                                <div><FaTiktok size={30} /></div>
                                <div><FaFacebookF size={30} /> </div>
                            </div>
                            <div className='text-white text-center w-full lg:text-left'>
                                © True Food Kitchen | Terms & Privacy | Accessibility Statement
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
        title: 'My true food',
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
        ]
    },
]











