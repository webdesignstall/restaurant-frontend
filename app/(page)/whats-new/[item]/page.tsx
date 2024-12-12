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
                </div>

                <div className='bg-[#bcbbae80] pb-12 px-4 md:px-6 xl:px-0'>
                    <div className='max-w-4xl m-auto py-10'>
                        <iframe className='w-full h-[30rem]' src="https://www.youtube.com/embed/mDcyUL5WzAA?si=L1cGqZdhZ5u6swAm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className='py-4'>
                        <div className='lg:grid grid-cols-2 flex flex-col gap-16 max-w-7xl m-auto'>
                            <div>
                                <Image
                                    className='w-full h-full object-cover bg-cover'
                                    width={500}
                                    height={500}
                                    src='/new/24_FoN_LandingPage_660x440-3.jpg'
                                    alt='friend'
                                />
                            </div>
                            <div className='py-4 flex flex-col gap-6'>
                                <div>
                                    <h3 className='text-primary'>
                                        Welcome to Roam Ranch
                                    </h3>
                                </div>
                                <div>
                                    <p className='tracking-wide font-medium'>
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

                    <div className='py-4'>
                        <div className='lg:grid grid-cols-2 flex flex-col gap-16 max-w-7xl m-auto'>
                            <div className='pl-0 pr-10 py-4 flex flex-col gap-6'>
                                <div>
                                    <h3 className='text-primary'>
                                        Why Is This Important?
                                    </h3>
                                </div>
                                <div>
                                    <p className='tracking-wide font-medium'>
                                        Beyond loving their bison sausage, Force of Nature is a leader in regenerative agriculture – a holistic approach focused on the long-term health and sustainability of our planet. From pasture to plate, they are not just farming; they are co-creating with nature to restore the land to its full potential.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <Image
                                    className='w-full h-full object-cover bg-cover'
                                    width={500}
                                    height={500}
                                    src='/new/24_FoN_LandingPage_660x440-1.jpg'
                                    alt='friend'
                                />
                            </div>
                        </div>
                    </div>


                    <div className='py-4'>
                        <div className='lg:grid grid-cols-2 flex flex-col gap-16 max-w-7xl m-auto'>
                            <div>
                                <Image
                                    className='w-full h-full object-cover bg-cover'
                                    width={500}
                                    height={500}
                                    src='/new/Bison-Overhead.jpg'
                                    alt='friend'
                                />
                            </div>
                            <div className='py-4 flex flex-col gap-6'>
                                <div>
                                    <h3 className='text-primary'>
                                        What Does This Mean For You?
                                    </h3>
                                </div>
                                <div>
                                    <p className='tracking-wide font-medium'>
                                        With Force of Nature, you’re not only indulging in delicious, nutrient-dense food, but you’re also contributing to a movement that’s protecting our planet and honoring the animals that sustain us. It’s about creating a healthier, happier life for all.
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
        </div>
    )
}
