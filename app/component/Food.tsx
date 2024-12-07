import React from 'react'

export default function Food() {
  return (
    <div>
        <div>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 bg-neutral-600'>
                {
                    [1,2,3,4,5].map((_, index) =>(
                        <div key={index} className='w-full h-56 border-white border'>

                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
