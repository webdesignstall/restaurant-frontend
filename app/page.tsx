'use client';

import { motion, AnimatePresence } from 'framer-motion';
'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import MainSlider from './component/MainSlider';
import TopNavbar from './component/TopNavbar';
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


