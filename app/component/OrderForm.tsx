import { Button } from '@/components/ui/button'
import React from 'react'

export default function OrderForm() {
    return (
        <div className='h-screen bg-[#595e48] p-10'>
            <div className='grid grid-cols-5 max-w-6xl m-auto h-full gap-10'>
                <div className='flex flex-col justify-center items-start col-span-2'>
                    <div className='pb-4'>
                        <p className='text-6xl font-extrabold text-white'>Join The Club</p>
                    </div>
                    <div>
                        <p className='text-white text-xl'>Become a True Insider – Join for news, special offers & more.</p>
                    </div>
                </div>
                <div className='col-span-3'>
                    <div className='grid grid-cols-2 gap-x-10 gap-y-6'>
                        <div>
                            <label className='text-white font-medium text-lg pb-2 block' htmlFor="">First name</label>
                            <input className='w-full rounded-xl p-3' type="text" />
                        </div>
                        <div>
                            <label className='text-white font-medium text-lg pb-2 block' htmlFor="">First name</label>
                            <input className='w-full rounded-xl p-3' type="text" />
                        </div>
                        <div>
                            <label className='text-white font-medium text-lg pb-2 block' htmlFor="">First name</label>
                            <input className='w-full rounded-xl p-3' type="text" />
                        </div>
                        <div>
                            <label className='text-white font-medium text-lg pb-2 block' htmlFor="">First name</label>
                            <input className='w-full rounded-xl p-3' type="text" />
                        </div>
                        <div>
                            <label className='text-white font-medium text-lg pb-2 block' htmlFor="">First name</label>
                            <input className='w-full rounded-xl p-3' type="text" />
                        </div>
                        <div>
                            <label className='text-white font-medium text-lg pb-2 block' htmlFor="">First name</label>
                            <input className='w-full rounded-xl p-3' type="text" />
                        </div>
                        <div className='col-span-2'>
                            <p className='text-white'> 
                            By submitting this form and signing up for email marketing and texts, you consent to receive marketing messages (e.g. promos, cart reminders) from True Food Kitchen at the number & email provided, including messages sent by autodialer. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP or clicking the unsubscribe link (where available). Privacy Policy & Terms.
                            </p>
                        </div>
                        <div className='col-span-2'>
                            <Button>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
