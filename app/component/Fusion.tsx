import React from 'react'

export default function Fusion() {
    return (
        <div>
            <div>
                <div className='py-20 px-2'>
                    <div className='max-w-screen-2xl m-auto'>
                        <div className='py-16'>
                            <p className='text-6xl font-extrabold text-center uppercase'>Honest to goodness goodness</p>
                        </div>
                        <div>
                            <div className='grid grid-cols-4 gap-5'>
                                {
                                    [1, 2, 2, 4].map((_, index) => (
                                        <div key={index}>
                                            <div className='w-full h-56 bg-gray-300'></div>
                                            <div>
                                                <p>Find A True Food Kitchen</p>
                                            </div>
                                            <div>
                                                <p>
                                                    True Food Kitchen is rooted in scientific principles, ensuring that every irresistible dish and beverage contribute to enhancing the longevity of both people and the planet.
                                                </p>
                                            </div>
                                            <div>
                                                <button className='bg-black text-wrap rounded-full py-2 px-8 text-gray-200 font-[600] tracking-wide'>Learn More</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
