import { Facebook, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='bg-[#3b3d2f] pt-16 pb-36'>
            <div className='max-w-screen-2xl m-auto'>
                <div className='md:grid flex flex-col justify-center items-center md:items-start md:grid-cols-3 xl:grid-cols-4 md:px-10'>
                    {
                        items.map((item, index) => (
                            <div key={index}>
                                <h2 className='text-2xl text-center md:text-left font-semibold pb-6 text-white uppercase'>
                                    {item.title}
                                </h2>
                                <div>
                                    <ul className='font-normal'>
                                        {
                                            item.menu.map((item, index) => (
                                                <li key={index}>
                                                    <Link className='text-sm text-center flex flex-col justify-center items-center md:justify-start md:items-start pb-2 text-gray-300 hover:text-gray-100 duration-150' href={item.link}>{item.title}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>

                        ))
                    }
                    <div className='md:grid-cols-3 px-8 flex justify-center items-start flex-col w-full'>
                        <div className='w-full'>
                            <h2 className='text-3xl font-semibold pb-6 text-white uppercase text-center'>
                                true INSIDER
                            </h2>
                        </div>
                        <div className='w-full'>
                            <p className='text-gray-200 font-normal text-center'>Get the inside scoop - Join for news, special offers & more</p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-full'>
                            <div>
                                <label className='text-white pb-2' htmlFor="">Email</label>
                                <input className='w-full p-2 ' type="email" placeholder='Email' />
                            </div>
                            <div> <button className='text-white px-6 py-2 rounded-3xl text-left' type='submit'>Submit</button></div>
                        </div>
                        <div className='w-full'>
                            <p className='text-white pb-2 text-center'>Connect With Us</p>
                            <div className='flex flex-row justify-center items-center text-white space-x-4 pb-4'>
                                <div><FaInstagram size={30} /> </div>
                                <div><FaLinkedin size={30} /> </div>
                                <div><FaTiktok size={30} /></div>
                                <div><FaFacebookF size={30} /> </div>
                            </div>
                            <div className='text-white text-center w-full'>
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











