import React from 'react'
import MainSlider from '../component/MainSlider'
import { ReservationForm } from './component/reservationForm'

export default function Reservation() {
  return (
    <div>
      <div>
        <div>
          <MainSlider />
        </div>
        <div>
          <div className='py-6'>
            <h3 className='text-center'>
              make a reservation
            </h3>
          </div>
          <div>
            <ReservationForm />
          </div>
          <div className='px-4 py-8'>
            <div className='pb-2'>
              <h3 className='text-center'>REAL FOOD FOR REAL LIFE</h3>
            </div>
            <div>
              <p className='text-center font-medium'>
                At our table, we believe you should eat with passion. We believe the choices you make should sustain your appetite, your wellness and our planet. Each True Food Kitchen has its own chef-led culinary team who take fresh, in-season ingredients, globally-sourced spices and one-of-a-kind flavor combinations to deliciously bold new heights. Our menu is carefully selected and hand-crafted into signature dishes and drinks that make eating well effortless, energizing and most importantly, full of flavor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
