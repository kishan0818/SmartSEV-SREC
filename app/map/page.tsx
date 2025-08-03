"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Navigation, Battery, Users, Clock } from "lucide-react"

export default function MapPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Live Map Tracking</h1>
        <div className="flex items-center space-x-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter Shuttles" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Shuttles</SelectItem>
              <SelectItem value="srec-01">SREC-01</SelectItem>
              <SelectItem value="srec-02">SREC-02</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Navigation className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Map Area */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Campus Map - Real-time Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center relative">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p>Interactive Map View</p>
                  <p className="text-sm">Real-time shuttle locations will appear here</p>
                </div>

                {/* Mock shuttle markers */}
                <div className="absolute top-20 left-32 bg-blue-600 text-white px-2 py-1 rounded-full text-xs flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                  SREC-01
                </div>

                <div className="absolute bottom-20 right-32 bg-green-600 text-white px-2 py-1 rounded-full text-xs flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                  SREC-02
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Shuttle Info Sidebar */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                SREC-01
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Status</span>
                <Badge className="bg-green-100 text-green-800">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Speed</span>
                <span className="font-medium">25 km/h</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Battery</span>
                <div className="flex items-center">
                  <Battery className="w-4 h-4 mr-1" />
                  <span className="font-medium">87%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Occupancy</span>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span className="font-medium">6/8</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Next Stop</span>
                <span className="font-medium">Library</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">ETA</span>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="font-medium">3 min</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                SREC-02
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Status</span>
                <Badge className="bg-yellow-100 text-yellow-800">Charging</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Speed</span>
                <span className="font-medium">0 km/h</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Battery</span>
                <div className="flex items-center">
                  <Battery className="w-4 h-4 mr-1" />
                  <span className="font-medium">45%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Occupancy</span>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span className="font-medium">0/12</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Location</span>
                <span className="font-medium">Parking Bay A</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Charge Time</span>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="font-medium">45 min</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Route Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label htmlFor="route-select">Select Route</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose route" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="route-1">Main Gate → Library</SelectItem>
                    <SelectItem value="route-2">Hostel → Academic Block</SelectItem>
                    <SelectItem value="route-3">Cafeteria → Sports Complex</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Update Route</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
