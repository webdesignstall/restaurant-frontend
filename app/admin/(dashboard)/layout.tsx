import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "../components/layout/app-sidebar"
import { SignedIn, UserButton } from '@clerk/nextjs'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex justify-between items-center h-16 shrink-0 pr-6 gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" />
                            {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
                        </div>
                        <div>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        <section>
                            {children}
                        </section>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </section>
    )
}
