import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'

export default function OrderLayout(
    { children }: { children: React.ReactNode }
) {
    return (
        <section>
            <div className='sticky top-0 z-40'>
                <Header />
            </div>
            <div className='bg-gray-100'>
                {children}
            </div>
            <div>
                <Footer />
            </div>
        </section>
    )
}
