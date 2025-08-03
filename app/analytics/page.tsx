"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Download, TrendingUp, Zap, MapPin, Wrench } from "lucide-react"

const energyData = [
  { day: "Mon", consumption: 45, solar: 38 },
  { day: "Tue", consumption: 52, solar: 42 },
  { day: "Wed", consumption: 48, solar: 35 },
  { day: "Thu", consumption: 61, solar: 48 },
  { day: "Fri", consumption: 55, solar: 45 },
  { day: "Sat", consumption: 35, solar: 28 },
  { day: "Sun", consumption: 28, solar: 22 },
]

const usageData = [
  { location: "Main Gate", rides: 45 },
  { location: "Library", rides: 38 },
  { location: "Cafeteria", rides: 32 },
  { location: "Academic Block", rides: 28 },
  { location: "Sports Complex", rides: 22 },
  { location: "Hostel", rides: 18 },
]

const routeData = [
  { name: "Route A", value: 35, color: "#3b82f6" },
  { name: "Route B", value: 28, color: "#10b981" },
  { name: "Route C", value: 22, color: "#f59e0b" },
  { name: "Route D", value: 15, color: "#ef4444" },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Analytics & Reports</h1>
        <div className="flex items-center space-x-4">
          <Select defaultValue="week">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Energy Saved</p>
                <p className="text-2xl font-bold text-green-600">342.5 kWh</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12% from last week
                </p>
              </div>
              <Zap className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Rides</p>
                <p className="text-2xl font-bold text-blue-600">1,247</p>
                <p className="text-xs text-blue-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +8% from last week
                </p>
              </div>
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Efficiency</p>
                <p className="text-2xl font-bold text-purple-600">87.3%</p>
                <p className="text-xs text-purple-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +3% from last week
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Maintenance Score</p>
                <p className="text-2xl font-bold text-orange-600">92/100</p>
                <p className="text-xs text-orange-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Excellent condition
                </p>
              </div>
              <Wrench className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Energy Consumption vs Solar Input</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="consumption" fill="#ef4444" name="Consumption (kWh)" />
                <Bar dataKey="solar" fill="#10b981" name="Solar Input (kWh)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Locations</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={usageData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="location" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="rides" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Route Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={routeData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {routeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Route Optimization Suggestions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800">Route A Optimization</h4>
              <p className="text-sm text-green-700 mt-1">
                Reduce travel time by 8 minutes by avoiding peak traffic areas
              </p>
              <div className="mt-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Efficiency Gain</span>
                  <span>+15%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800">Route B Enhancement</h4>
              <p className="text-sm text-blue-700 mt-1">
                Add intermediate stop to increase passenger capacity utilization
              </p>
              <div className="mt-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Capacity Improvement</span>
                  <span>+22%</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800">Energy Optimization</h4>
              <p className="text-sm text-yellow-700 mt-1">Implement regenerative braking on downhill sections</p>
              <div className="mt-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Energy Savings</span>
                  <span>+18%</span>
                </div>
                <Progress value={68} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Maintenance Prediction */}
      <Card>
        <CardHeader>
          <CardTitle>Predictive Maintenance Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle cx="64" cy="64" r="56" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#10b981"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${92 * 3.51} 351.86`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">92</span>
                </div>
              </div>
              <h3 className="font-semibold">SREC-01 Health</h3>
              <p className="text-sm text-gray-600">Excellent Condition</p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle cx="64" cy="64" r="56" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#f59e0b"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${78 * 3.51} 351.86`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-yellow-600">78</span>
                </div>
              </div>
              <h3 className="font-semibold">SREC-02 Health</h3>
              <p className="text-sm text-gray-600">Good Condition</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Upcoming Maintenance</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm">Battery Check</span>
                  <span className="text-sm text-gray-600">2 days</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm">Tire Rotation</span>
                  <span className="text-sm text-gray-600">1 week</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm">System Update</span>
                  <span className="text-sm text-gray-600">2 weeks</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
