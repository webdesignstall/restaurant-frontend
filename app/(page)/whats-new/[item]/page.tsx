import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Item() {
    return (
        <div>
            <div>
                <div>
                    <div className='relative h-[75vh] flex justify-center items-center flex-col'>
                        <div className='absolute -z-10 w-full h-full'>
                            <Image
                                className='w-full h-full object-cover bg-cover'
                                width={1000}
                                height={1000}
                                src='/new/24_FoN_LandingPage_1441x495-4.jpg'
                                alt='baner'
                                priority
                            />
                        </div>
                        <div className='px-6'>
                            <h1 className='text-white text-center'>
                                Meet Force of Nature
                            </h1>
                        </div>
                    </div>
                    <div className='max-w-4xl m-auto py-10'>
                        <iframe className='w-full h-[80vh]' src="https://www.youtube.com/embed/mDcyUL5WzAA?si=L1cGqZdhZ5u6swAm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <div className='py-10'>
                    <div className='grid grid-cols-2 max-w-7xl m-auto'>
                        <div>
                            <Image
                                className='w-full h-full object-cover bg-cover'
                                width={500}
                                height={500}
                                src='/new/24_FoN_LandingPage_660x440-3.jpg'
                                alt='friend'
                            />
                        </div>
                        <div className='px-10 py-4 flex flex-col gap-6'>
                            <div>
                                <h3>
                                    Welcome to Roam Ranch
                                </h3>
                            </div>
                            <div>
                                <p>
                                    Meet Robby Samson and Taylor Collins, the dynamic duo behind the bison ranch and food movement, Force of Nature.
                                </p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Button className='rounded-full px-10' size='lg'>
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='py-10'>
                    <div className='grid grid-cols-2 max-w-7xl m-auto'>
                        <div className='px-10 py-4 flex flex-col gap-6'>
                            <div>
                                <h3>
                                    Welcome to Roam Ranch
                                </h3>
                            </div>
                            <div>
                                <p>
                                    Meet Robby Samson and Taylor Collins, the dynamic duo behind the bison ranch and food movement, Force of Nature.
                                </p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Button className='rounded-full px-10' size='lg'>
                                    Learn More
                                </Button>
                            </div>
                        </div>
                        <div>
                            <Image
                                className='w-full h-full object-cover bg-cover'
                                width={500}
                                height={500}
                                src='/new/24_FoN_LandingPage_660x440-3.jpg'
                                alt='friend'
                            />
                        </div>
                    </div>
                </div>


                <div className='py-10'>
                    <div className='grid grid-cols-2 max-w-7xl m-auto'>
                        <div>
                            <Image
                                className='w-full h-full object-cover bg-cover'
                                width={500}
                                height={500}
                                src='/new/24_FoN_LandingPage_660x440-3.jpg'
                                alt='friend'
                            />
                        </div>
                        <div className='px-10 py-4 flex flex-col gap-6'>
                            <div>
                                <h3>
                                    Welcome to Roam Ranch
                                </h3>
                            </div>
                            <div>
                                <p>
                                    Meet Robby Samson and Taylor Collins, the dynamic duo behind the bison ranch and food movement, Force of Nature.
                                </p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Button className='rounded-full px-10' size='lg'>
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}
