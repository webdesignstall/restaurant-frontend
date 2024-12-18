import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (

        <div>
            <div>
                <div className="text-center w-full text-gray-900 font-medium tracking-wide text-[15px] py-2.5 bg-[#FFA014]">
                    <p>Book your holiday party and catering today | <Link className='text-gray-50 font-medium' href='/events'>Book Now</Link></p>
                </div>
                <div className='sticky -top-2  bg-white z-40'><Header /> </div>
                <div>{children} </div>
                <div><Footer /> </div>
            </div>
        </div>

    )
}
