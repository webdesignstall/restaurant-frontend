import React from 'react'

export default function Food() {
  return (
    <div>
        <div>
            <div className='grid grid-cols-5 bg-neutral-600'>
                {
                    [1,2,3,4,5].map(() =>(
                        <div className='w-full h-56 border-white border'>

                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
