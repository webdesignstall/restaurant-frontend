import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from '@/lib/utils'
import OrderPackup from './component/OrderPackup'
import OrderDelivery from './component/OrderDelivery'
import Image from 'next/image'

export default function Order() {
  return (
    <div>
      <div className='lg:grid grid-cols-5'>
        <div className='hidden lg:flex col-span-3'>
          <Image
            className='w-full object-cover bg-cover'
            width={700}
            height={700}
            src='/order/new-fall-menu-2024.jpg'
            alt='Order benner'
          />
        </div>
        <div className='col-span-2 bg-primary/10'>
          <div className='py-4'>
            <div>
              <div className='pb-3'>
                <h1 className='font-bebas text-5xl font-bold text-center text-primary'>
                  Start Your Order
                </h1>
              </div>
              <div className=''>
                <h4 className="scroll-m-20 text-xl font-medium tracking-tight text-center">
                  Select your order mode and find your nearest True.
                </h4>
              </div>
            </div>
            <div className='px-12 mt-8'>
              <Tabs defaultValue="orderpackup" className="w-full">
                <TabsList className={cn('grid grid-cols-2 h-fit rounded-full overflow-hidden bg-primary/20')}>
                  <TabsTrigger className={cn('data-[state=active]:bg-primary data-[state=active]:text-white text-xl py-3 rounded-full text-primary font-semibold')} value="orderpackup">Packup</TabsTrigger>
                  <TabsTrigger className={cn('data-[state=active]:bg-primary data-[state=active]:text-white text-xl py-3 rounded-full text-primary font-semibold')} value="delivery">Delivery</TabsTrigger>
                </TabsList>
                <TabsContent value="orderpackup">
                  <div>
                    <OrderPackup />
                  </div>
                </TabsContent>
                <TabsContent value="delivery">
                  <div>
                    <OrderDelivery />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
