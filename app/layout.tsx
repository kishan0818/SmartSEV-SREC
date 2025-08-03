import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import  DashboardHeader  from "@/components/dashboard-header"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SmartRide SREC Dashboard",
  description: "AI-powered electric shuttle system dashboard",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <DashboardHeader />
              <main className="flex-1 p-6 bg-gray-50">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
