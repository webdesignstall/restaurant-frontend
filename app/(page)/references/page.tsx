import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Reference() {
    return (
        <div className=''>
            <div>
                <div className='relative h-80 w-full overflow-hidden flex flex-col justify-center items-center'>
                    <div className='absolute top-0 left-0 w-full h-full -z-10'>
                        <Image
                            className='object-cover w-full bg-cover'
                            width={1000}
                            height={1000}
                            src='/Crispd-Group-Shots_TFK012_DAY06_DSC03333-Enhanced-NR_v02-scaled.jpg'
                            alt='Banner'
                        />
                    </div>
                </div>
                <div className='pt-16 pb-32 bg-gray-100'>
                    <div className='py-6'>
                        <p className='font-roboto text-center text-3xl font-bold tracking-wide'>
                            Reference
                        </p>
                    </div>
                    <div className='lg:grid grid-cols-3 gap-6 max-w-7xl m-auto flex flex-col px-6'>
                        {
                            [1, 2, 3].map((item, index) => (
                                <Link key={index} href='https://greenhomeinitiatives.com/files/sc.pdf'>
                                    <Card className='border-none cursor-pointer shadow-sm bg-white'>
                                        <CardHeader>
                                            <CardTitle className='text-primary'>
                                                Workers Cited
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className='text-green-600 font-medium hover:text-green-700 hover:underline'>
                                            All sources of information used to create the website, including images
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
