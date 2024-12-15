"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { TeamSwitcher } from "./team-switcher"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "./nav-user"
import {SignedIn, UserButton} from "@clerk/nextjs";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Admin Dashboard",
      logo: GalleryVerticalEnd,
      plan: "Admin",
    }
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: SquareTerminal
    },
    {
      title: "Food Management",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Add Category",
          url: "/admin/food-managemant/manage-category/add-category",
        },
        {
          title: "Category List",
          url: "/admin/food-managemant/manage-category/category-list",
        },
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
      title: "Reservation",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Reservation",
          url: "#",
        },
        {
          title: "Add Booking",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/*<TeamSwitcher teams={data.teams} />*/}
        <div className='flex justify-end'>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
