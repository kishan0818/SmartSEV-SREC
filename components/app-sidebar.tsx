"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  Map,
  Calendar,
  BarChart3,
  Bell,
  Users,
  Settings,
  Car,
  Menu
} from "lucide-react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Live Map", url: "/map", icon: Map },
  { title: "Ride Scheduling", url: "/scheduling", icon: Calendar },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Alerts", url: "/alerts", icon: Bell },
  { title: "User Management", url: "/users", icon: Users },
  { title: "Settings", url: "/settings", icon: Settings },
]

export function AppSidebar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Sidebar className={`border-r transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>
      
      {/* Sidebar Header with toggle */}
      <SidebarHeader className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 overflow-hidden">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
            <Car className="w-6 h-6 text-white" />
          </div>
          {isOpen && (
            <div>
              <h2 className="font-bold text-lg leading-none">SmartRide</h2>
              <p className="text-sm text-gray-600">SREC</p>
            </div>
          )}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md text-gray-500 hover:text-gray-900"
        >
          <Menu className="w-5 h-5" />
        </button>
      </SidebarHeader>

      {/* Sidebar Navigation */}
      <SidebarContent>
        <SidebarGroup>
          {isOpen && <SidebarGroupLabel className="pl-4">Navigation</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Link href={item.url} passHref>
                    <SidebarMenuButton as="a">
                      <item.icon className="w-4 h-4" />
                      {isOpen && <span>{item.title}</span>}
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-4">
        {isOpen ? (
          <div className="text-xs text-gray-500 text-center">Powered by SREC</div>
        ) : (
          <div className="text-xs text-gray-500 text-center">©</div>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}
