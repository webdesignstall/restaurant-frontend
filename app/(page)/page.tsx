'use client';
import React, { useEffect, useState } from 'react';
import MainSlider from './component/MainSlider';
import OrderForm from './component/OrderForm';
import OrderCard from './component/OrderCard';
import MarkSection from './component/MarkSection';
import Food from './component/Food';
import Fusion from './component/Fusion';

export default function Home() {
  return (
    <div>
      <div>
        <MainSlider />
        <OrderForm />
        <OrderCard />
        <MarkSection />
        <Food />
        <Fusion />
      </div>
    </div>
  );
}


