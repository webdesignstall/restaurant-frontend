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

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Customer',
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/customer/dashboard',
          icon: IconLayoutDashboard,
        },
      ],
    },

    {
      title: 'Manage Order',
      items: [
        {
          title: 'Order List',
          url: '/customer/manage-order/order-list',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Pending Order',
          url: '/customer/manage-order/pending-order',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Complete Order',
          url: '/customer/manage-order/complete-order',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Counter Dashboard',
          url: '/customer/manage-order/counter-board',
          icon: IconLayoutDashboard,
        },
      ],
    }
  ],
}
