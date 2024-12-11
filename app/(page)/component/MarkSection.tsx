import { Button } from '@/components/ui/button'
import React from 'react'

export default function MarkSection() {
    return (
        <div>
            <div className='bg-stone-300 pt-20 pb-6'>
                <div className='max-w-5xl m-auto flex flex-col justify-center items-center text-neutral-800'>
                    <div className='pb-6'>
                        <h1 className='text-center text-primary'>Ingredient Obsessed. Chef Crafted.</h1>
                    </div>
                    <div className='pb-6 px-6'>
                        <p className='text-xl font-medium text-center'>We believe in the power of whole, real food. We partner with each of our growers, ranchers and producers so that every ingredient meets our TRUE standards. That means better food for you, your family, and the planet.</p>
                    </div>
                    <div>
                        <Button className='rounded-3xl text-xl font-medium bg-[#3b3d2f]' size='lg'>
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
