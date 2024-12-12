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
    background: '/Website_Banner_1551x600.jpg',
    title: 'Our Pie. Your Place.',
    subtitle: 'Pre-order your whole squash pie!',
    buttonText: 'Order Now',
  },
  {
    background: '/Reservations-Slider_1551x600.jpg',
    title: 'Fresh Ingredients, Every Day.',
    subtitle: 'Experience the taste of freshness!',
    buttonText: 'Learn More',
  },
  {
    background: '/Crispd-Group-Shots_TFK012_DAY06_DSC03333-Enhanced-NR_v02-scaled.jpg',
    title: 'Delicious Recipes Await.',
    subtitle: 'Join us for a culinary journey.',
    buttonText: 'Discover More',
  },
];