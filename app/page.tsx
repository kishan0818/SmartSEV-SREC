"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-10 text-center px-4">
      <Image src="/images/srec-logo.png" alt="SREC Logo" width={80} height={80} />

      <h1 className="text-4xl font-bold text-gray-900">Welcome to SmartRide SREC</h1>
      <p className="text-gray-600 max-w-xl">
        An AI-powered, solar-driven smart shuttle system designed for eco-friendly, efficient, and inclusive intra-campus travel.
      </p>

      {/* 🚐 Vehicle Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mt-6">
        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/vehicle-side.jpg"
            alt="SmartRide Side View"
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/vehicle-inside.png"
            alt="SmartRide Interior"
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </div>
      </div>

      <div className="space-x-4">
        <Button asChild>
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/scheduling">Request a Ride</Link>
        </Button>
      </div>
    </div>
  )
}
