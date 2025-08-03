"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, CheckCircle, XCircle, RotateCcw } from "lucide-react"

const rideRequests = [
  {
    id: "REQ-001",
    user: "Dr. Rajesh Kumar",
    type: "HOD",
    from: "Main Gate",
    to: "Academic Block",
    time: "09:30 AM",
    date: "2024-01-15",
    status: "pending",
    priority: "high",
  },
  {
    id: "REQ-002",
    user: "Ms. Priya Sharma",
    type: "Faculty",
    from: "Library",
    to: "Cafeteria",
    time: "12:15 PM",
    date: "2024-01-15",
    status: "approved",
    priority: "medium",
  },
  {
    id: "REQ-003",
    user: "Recruiter - TCS",
    type: "Recruiter",
    from: "Main Gate",
    to: "Placement Cell",
    time: "02:00 PM",
    date: "2024-01-15",
    status: "pending",
    priority: "high",
  },
  {
    id: "REQ-004",
    user: "Student - Arjun",
    type: "Student",
    from: "Hostel",
    to: "Sports Complex",
    time: "04:30 PM",
    date: "2024-01-15",
    status: "rejected",
    priority: "low",
  },
]

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30",
]

const statuses = ["available", "scheduled", "unavailable"]

export default function SchedulingPage() {
  const handleAction = (type: string, id: string) => {
    console.log(`${type} action on request ${id}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Ride Scheduling</h1>
        <Button>
          <Calendar className="w-4 h-4 mr-2" />
          New Request
        </Button>
      </div>

      <Tabs defaultValue="requests" className="space-y-6">
        <TabsList>
          <TabsTrigger value="requests">Ride Requests</TabsTrigger>
          <TabsTrigger value="schedule">Time Schedule</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>

        {/* Ride Request Table */}
        <TabsContent value="requests" className="space-y-6">
          <div className="flex items-center space-x-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Users</SelectItem>
                <SelectItem value="hod">HODs</SelectItem>
                <SelectItem value="faculty">Faculty</SelectItem>
                <SelectItem value="recruiter">Recruiters</SelectItem>
                <SelectItem value="student">Students</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Ride Requests Management</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Request ID</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Route</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rideRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">{request.id}</TableCell>
                      <TableCell>{request.user}</TableCell>
                      <TableCell>
                        <Badge variant={["HOD", "Recruiter"].includes(request.type) ? "default" : "secondary"}>
                          {request.type}
                        </Badge>
                      </TableCell>
                      <TableCell>{request.from} → {request.to}</TableCell>
                      <TableCell>{request.time}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            request.priority === "high"
                              ? "destructive"
                              : request.priority === "medium"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {request.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            request.status === "approved"
                              ? "default"
                              : request.status === "pending"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {request.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          {request.status === "pending" && (
                            <>
                              <Button size="sm" variant="outline" onClick={() => handleAction("Approve", request.id)}>
                                <CheckCircle className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => handleAction("Reject", request.id)}>
                                <XCircle className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => handleAction("Reschedule", request.id)}>
                                <RotateCcw className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Schedule View */}
        <TabsContent value="schedule" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Time Slot Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["SREC-01", "SREC-02"].map((shuttle) => (
                  <div key={shuttle}>
                    <h3 className="font-semibold mb-4">{shuttle} Schedule</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((slot, index) => {
                        const status = statuses[index % statuses.length]
                        const colorMap = {
                          available: "bg-green-100 border-green-300",
                          scheduled: "bg-yellow-100 border-yellow-300",
                          unavailable: "bg-red-100 border-red-300",
                        }
                        return (
                          <div
                            key={slot}
                            className={`p-2 text-center text-sm rounded border ${colorMap[status]}`}
                          >
                            {slot}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center space-x-6">
                <Legend color="green-300" label="Available" />
                <Legend color="yellow-300" label="Scheduled" />
                <Legend color="red-300" label="Unavailable" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Calendar View Placeholder */}
        <TabsContent value="calendar" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Calendar View</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600">Calendar integration will be implemented here</p>
                <p className="text-sm text-gray-500 mt-2">
                  Monthly/weekly view of all scheduled rides and availability
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center">
      <div className={`w-4 h-4 bg-${color} border border-${color} rounded mr-2`} />
      <span className="text-sm">{label}</span>
    </div>
  )
}
