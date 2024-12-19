'use client';
import React, { useEffect, useState } from 'react';
import OrderForm from './component/OrderForm';
import OrderCard from './component/OrderCard';
import MarkSection from './component/MarkSection';
import Food from './component/Food';
import Fusion from './component/Fusion';
import MainSlider from '@/components/MainSlider';

export default function Home() {
  return (
    <div>
      <div>
        <MainSlider slides={slides} />
        <OrderForm />
        <OrderCard />
        <MarkSection />
        <Food />
        <Fusion />
      </div>
    </div>
  );
}



const slides = [
  {
    background: 'sweet_potato_and_coconut_soup_eqjdnb',
    title: 'Our Pie. Your Place.',
    subtitle: 'Pre-order your whole squash pie!',
    buttonText: 'Order Now',
  },
  {
    background: 'vegetarian_pizza_mpyirr',
    title: 'Fresh Ingredients, Every Day.',
    subtitle: 'Experience the taste of freshness!',
    buttonText: 'Learn More',
  },
  {
    background: 'thai_satay_tofu_uwhc8k',
    title: 'Delicious Recipes Await.',
    subtitle: 'Join us for a culinary journey.',
    buttonText: 'Discover More',
  },
];