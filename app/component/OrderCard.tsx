import React from 'react'

export default function OrderCard() {
    return (
        <div>
            <div className='px-2 py-24'>
                <div className='grid grid-cols-3 gap-8'>
                    {
                        [1, 1, 1].map((item, index) => (
                            <div key={index} className=''>
                                <div className='bg-gray-200 w-full h-56'></div>
                                <div className='flex flex-col justify-center items-center p-8'>
                                    <div className='pb-6'>
                                        <p className='text-4xl font-semibold'>Buy $100, get $30!</p>
                                    </div>
                                    <div className='pb-8'>
                                        <p className='text-lg font-medium'>Celebrate the season with a bonus! For every $100 gift card, get $30 for you!</p>
                                    </div>
                                    <div>
                                        <button className='text-white bg-gray-800 py-2 px-14 text-lg rounded-3xl'>Buy now</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
