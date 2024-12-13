"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


export default function AccountLayout(
    { children }: { children: React.ReactNode }
) {
    const pathName = usePathname()
    return (
        <section>
            <header className='h-72 flex flex-col justify-between items-center bg-white'>
                <div className='pt-16'>
                    <h2>
                        my true insider account
                    </h2>
                </div>
                <div>
                    <p>
                        Create a True Insider account and get exclusive access to health & wellness insights, limited-time offers, special culinary experiences, and exclusive True Food swag.
                    </p>
                </div>
                <div className='grid grid-cols-2 max-w-xl w-full'>
                    <Link href='/account/signin'>
                    <div className={`border-b-4 py-4 text-center text-2xl font-semibold w-full ${ pathName === '/account/signin' ? 'border-b-gray-500 text-gray-800' : 'border-b-white text-gray-500'}`}>
                        Sign In
                    </div>
                    </Link>
                    <Link href='/account/signup'>
                    <div className={`border-b-4 py-4 text-center text-2xl font-semibold w-full ${ pathName === '/account/signup' ? 'border-b-gray-500 text-gray-800' : 'border-b-white text-gray-500'}`}>
                        Create Account
                    </div>
                    </Link>
                </div>
            </header>
            <div >
                {children}
            </div>
        </section>
    )
}
