import { Button } from '@/components/ui/button'
import React from 'react'

export default function MarkSection() {
    return (
        <div>
            <div className='bg-stone-300 pt-20 pb-6'>
                <div className='max-w-4xl m-auto flex flex-col justify-center items-center text-neutral-800'>
                    <div className='pb-6'>
                        <p className='lg:text-5xl text-xl font-extrabold'>Ingredient Obsessed. Chef Crafted.</p>
                    </div>
                    <div className='pb-6'>
                        <p className='text-xl font-semibold text-center'>We believe in the power of whole, real food. We partner with each of our growers, ranchers and producers so that every ingredient meets our TRUE standards. That means better food for you, your family, and the planet.</p>
                    </div>
                    <div>
                        <Button className='rounded-3xl text-xl font-medium' size='lg'>
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
