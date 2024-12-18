import { Button } from '@/components/ui/button'
import React from 'react'

export default function Contact() {
    return (
        <div>
            <div className='bg-[#ebebe5] px-6 md:px-0'>
                <div className='flex flex-col h-96 justify-center items-center gap-10 max-w-screen-md m-auto '>
                    <div>
                        <h2 className='text-center'>
                            want to chat?
                        </h2>
                    </div>
                    <div>
                        <p className='text-center'>
                            We’d love to hear from you. Drop us a line and tell us what’s on your mind.
                            Simply fill out our contact form and a team member will get back to you shortly.
                        </p>
                    </div>
                    <div>
                        <Button className='rounded-full px-10'>
                            Talk to True
                        </Button>
                    </div>
                </div>
            </div>
            <div className='bg-[#bcbbae]'>
                <div className='flex flex-col lg:h-96 h-fit justify-center items-center max-w-screen-xl m-auto py-16'>
                    <div>
                        <h3 className='text-center pb-6'>
                            looking for other ways to get in touch?
                        </h3>
                    </div>
                    <div className='lg:grid flex flex-col grid-cols-2 max-w-2xl m-auto gap-16'>
                        <div className='flex flex-col justify-start items-center gap-6'>
                            <div className='w-full'>
                                <Button className='w-full px-16'>True Food Kitchen Home Office</Button>
                            </div>
                            <div>
                                <p className='text-center'>
                                    123 Street, Pennsylvania, USA <br />
                                    +1 4122927071
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-start items-center gap-6'>
                            <div className='w-full'>
                                <Button className='w-full px-16'> True Food Kitchen Home Office</Button>
                            </div>
                            <div>
                                <p>
                                    Visit Our Careers Page
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
