"use client"


import { dashboardMock } from "@/mockData"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

import {
  Car, Battery, Users, AlertTriangle, MapPin,
  Zap, Thermometer, Wrench
} from "lucide-react"
import Image from "next/image"

export default function Dashboard() {
  const [s1, s2] = dashboardMock.shuttles
  const { alerts, stats } = dashboardMock

  return (
    <div className="space-y-6">

      {/* Header with logos */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between">
          <Image src="/images/snr-logo.png" width={60} height={60} alt="College Logo" className="object-contain" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">SMART RIDE SREC</h1>
            <p className="text-lg text-gray-600">Powered by Sri Ramakrishna Engineering College</p>
          </div>
          <Image src="/images/srec-logo.png" width={60} height={60} alt="Trust Logo" className="object-contain" />
        </div>
      </div>

      {/* Live Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        
        {/* Shuttle Location */}
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-800">
              <MapPin className="w-5 h-5 mr-2" /> Shuttle Location
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[s1, s2].map((shuttle, i) => (
              <div key={i} className="bg-white p-3 rounded-lg">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{shuttle.id}</span>
                  <Badge variant="secondary" className={
                    shuttle.status === "Charging"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }>
                    {shuttle.status}
                  </Badge>
                </div>
                <p className="text-xs text-gray-600 mt-1">{shuttle.location}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Battery & Solar */}
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center text-green-800">
              <Battery className="w-5 h-5 mr-2" /> Battery & Solar
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[s1, s2].map((shuttle) => (
              <div key={shuttle.id}>
                <div className="flex justify-between text-sm mb-2">
                  <span>{shuttle.id} Battery</span>
                  <span className="font-medium">{shuttle.battery}%</span>
                </div>
                <Progress value={shuttle.battery} className="h-2" />
              </div>
            ))}
            <div className="flex justify-between items-center bg-white p-2 rounded">
              <Zap className="w-4 h-4 text-yellow-600" />
              <span className="text-sm">Solar Input: {s1.solarInput} kWh</span>
            </div>
          </CardContent>
        </Card>

        {/* Occupancy */}
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center text-purple-800">
              <Users className="w-5 h-5 mr-2" /> Occupancy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[s1, s2].map((shuttle) => {
              const pct = Math.round((shuttle.occupancy / shuttle.capacity) * 100) || 0
              return (
                <div key={shuttle.id} className="text-center">
                  <div className="text-3xl font-bold text-purple-800">
                    {shuttle.occupancy}/{shuttle.capacity}
                  </div>
                  <p className="text-sm text-purple-600">{shuttle.id}</p>
                  <Badge className={
                    pct === 0
                      ? "bg-green-100 text-green-800"
                      : pct < 75
                        ? "bg-orange-100 text-orange-800"
                        : "bg-red-100 text-red-800"
                  }>
                    {pct === 0 ? "Available" : `${pct}% Full`}
                  </Badge>
                </div>
              )
            })}
          </CardContent>
        </Card>

        {/* System Health */}
        <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
          <CardHeader>
            <CardTitle className="flex items-center text-indigo-800">
              <Wrench className="w-5 h-5 mr-2" /> System Health
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {Object.entries(s1.health).map(([k, v]) => (
              <div key={k} className="flex justify-between">
                <span className="text-sm capitalize">{k} Status</span>
                <div className={`w-3 h-3 rounded-full ${v === "ok" ? "bg-green-500" : "bg-yellow-500"}`}></div>
              </div>
            ))}
            <div className="bg-white p-2 rounded flex items-center">
              <Thermometer className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm">{s1.temperature}°C</span>
            </div>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center text-red-800">
              <AlertTriangle className="w-5 h-5 mr-2" /> Active Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-800">{alerts.length}</div>
              <p className="text-sm text-red-600">Total Alerts</p>
            </div>
            {alerts.map((alert, i) => (
              <div key={i} className="bg-white p-2 rounded">
                <Badge className={
                  alert.type.includes("Battery")
                    ? "bg-red-100 text-red-800"
                    : alert.type.includes("Temp")
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800"
                }>
                  {alert.type}
                </Badge>
                <p className="text-xs text-gray-600 mt-1">{alert.shuttle}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard label="Today's Rides" value={stats.todayRides} icon={<Car className="w-8 h-8 text-blue-600" />} />
        <StatCard label="Energy Saved" value={`${stats.energySaved} kWh`} icon={<Zap className="w-8 h-8 text-green-600" />} />
        <StatCard label="Total Distance" value={`${stats.distance} km`} icon={<MapPin className="w-8 h-8 text-purple-600" />} />
        <StatCard label="Active Users" value={stats.users} icon={<Users className="w-8 h-8 text-indigo-600" />} />
      </div>
    </div>
  )
}

function StatCard({ label, value, icon }: { label: string; value: any; icon: JSX.Element }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">{label}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
          {icon}
        </div>
      </CardContent>
    </Card>
  )
}
