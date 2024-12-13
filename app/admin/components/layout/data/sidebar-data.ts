"use client"

import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconBug,
  IconChecklist,
  IconError404,
  IconHelp,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  IconMessages,
  IconNotification,
  IconPackages,
  IconPalette,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUserOff,
  IconUsers,
} from '@tabler/icons-react'
import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react'
import { type SidebarData } from '../types'
import {HomeIcon} from "@radix-ui/react-icons";

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Shadcn Admin',
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Home',
          url: '/',
          icon: HomeIcon,
        },
        {
          title: 'Dashboard',
          url: '/admin/dashboard',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Users',
          url: '/admin/users',
          icon: IconUsers,
        },
      ],
    },
    
    {
      title: 'Food Management',
      items: [
        {
          title: 'Manage Category',
          // icon: IconLockAccess,
          items: [
            {
              title: "Add Category",
              url: "/admin/food-managemant/manage-category/add-category",
            },
            {
              title: "Category List",
              url: "/admin/food-managemant/manage-category/category-list",
            },
          ],
        },
        {
          title: 'Manage Food',
          // icon: IconBug,
          items: [
            {
              title: "Add Food",
              url: "/admin/food-managemant/manage-food/add-food",
            },
            {
              title: "Food List",
              url: "/admin/food-managemant/manage-food/food-list",
            },
          ],
        },
        {
          title: 'Manage Order',
          // icon: IconBug,
          items: [
            {
              title: "Order List",
              url: "/admin/food-managemant/manage-order/order-list",
            },
            {
              title: "Pending Order",
              url: "/admin/food-managemant/manage-order/pending-order",
            },
            {
              title: "Complete Order",
              url: "/admin/food-managemant/manage-order/complete-order",
            },
            {
              title: "Cancel Order",
              url: "/admin/food-managemant/manage-order/cancel-order",
            },
          ],
        },
        {
          title: 'Reservation',
          // icon: IconBug,
          items: [
            {
              title: "Order List",
              url: "/admin/food-managemant/reservation/reservation",
            },
            {
              title: "Add Booking",
              url: "/admin/food-managemant/reservation/tablebooking",
            },
            {
              title: "Unavailable Day",
              url: "/admin/food-managemant/reservation/unavailablelist",
            },
            {
              title: "Reservation Setting",
              url: "/admin/food-managemant/reservation/setting",
            },
          ],
        },
      ],
    },
    {
      title: 'Other',
      items: [
        {
          title: 'Settings',
          icon: IconSettings,
          items: [
            {
              title: 'Profile',
              url: '/admin/settings',
              icon: IconUserCog,
            },
          ],
        },
      ],
    },
  ],
}
