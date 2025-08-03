"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Bell, MessageSquare, Settings, Send, Volume2, Smartphone } from "lucide-react"

const alerts = [
  {
    id: "ALT-001",
    type: "Battery Low",
    shuttle: "SREC-02",
    severity: "high",
    message: "Battery level below 20%",
    timestamp: "2024-01-15 14:30:25",
    status: "active",
  },
  {
    id: "ALT-002",
    type: "High Temperature",
    shuttle: "SREC-01",
    severity: "medium",
    message: "Motor temperature above normal range",
    timestamp: "2024-01-15 13:45:12",
    status: "acknowledged",
  },
  {
    id: "ALT-003",
    type: "Maintenance Due",
    shuttle: "SREC-01",
    severity: "low",
    message: "Scheduled maintenance in 2 days",
    timestamp: "2024-01-15 12:00:00",
    status: "resolved",
  },
  {
    id: "ALT-004",
    type: "Overload",
    shuttle: "SREC-01",
    severity: "high",
    message: "Passenger count exceeds capacity",
    timestamp: "2024-01-15 11:15:30",
    status: "active",
  },
]

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Alerts & Notifications</h1>
        <div className="flex items-center space-x-4">
          <Badge variant="destructive" className="px-3 py-1">
            3 Active Alerts
          </Badge>
          <Button>
            <Bell className="w-4 h-4 mr-2" />
            Mark All Read
          </Button>
        </div>
      </div>

      <Tabs defaultValue="alerts" className="space-y-6">
        <TabsList>
          <TabsTrigger value="alerts">Alert Log</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
          <TabsTrigger value="settings">Alert Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="alerts" className="space-y-6">
          <div className="flex items-center space-x-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="battery">Battery</SelectItem>
                <SelectItem value="temperature">Temperature</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="overload">Overload</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by shuttle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Shuttles</SelectItem>
                <SelectItem value="srec-01">SREC-01</SelectItem>
                <SelectItem value="srec-02">SREC-02</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severity</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Alert History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Alert ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Shuttle</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {alerts.map((alert) => (
                    <TableRow key={alert.id}>
                      <TableCell className="font-medium">{alert.id}</TableCell>
                      <TableCell>{alert.type}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{alert.shuttle}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            alert.severity === "high"
                              ? "destructive"
                              : alert.severity === "medium"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {alert.severity}
                        </Badge>
                      </TableCell>
                      <TableCell>{alert.message}</TableCell>
                      <TableCell className="text-sm text-gray-600">{alert.timestamp}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            alert.status === "active"
                              ? "destructive"
                              : alert.status === "acknowledged"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {alert.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          {alert.status === "active" && (
                            <Button size="sm" variant="outline">
                              Acknowledge
                            </Button>
                          )}
                          <Button size="sm" variant="outline">
                            Resolve
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communication" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Volume2 className="w-5 h-5 mr-2" />
                  Voice Alert System
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="shuttle-select">Select Shuttle</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose shuttle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="srec-01">SREC-01</SelectItem>
                      <SelectItem value="srec-02">SREC-02</SelectItem>
                      <SelectItem value="all">All Shuttles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="voice-message">Voice Message</Label>
                  <Textarea id="voice-message" placeholder="Enter message to be announced..." className="min-h-20" />
                </div>

                <div>
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="english">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="tamil">Tamil</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Voice Alert
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="w-5 h-5 mr-2" />
                  SMS Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="recipient-type">Recipient Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select recipients" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-users">All Users</SelectItem>
                      <SelectItem value="faculty">Faculty Only</SelectItem>
                      <SelectItem value="students">Students Only</SelectItem>
                      <SelectItem value="admin">Admin Staff</SelectItem>
                      <SelectItem value="custom">Custom List</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="sms-message">SMS Message</Label>
                  <Textarea id="sms-message" placeholder="Enter SMS message..." className="min-h-20" />
                </div>

                <div>
                  <Label htmlFor="phone-numbers">Phone Numbers (Optional)</Label>
                  <Textarea
                    id="phone-numbers"
                    placeholder="Enter phone numbers separated by commas..."
                    className="min-h-16"
                  />
                </div>

                <Button className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send SMS Alert
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                LED Display Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="led-shuttle">Target Shuttle</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select shuttle" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="srec-01">SREC-01</SelectItem>
                        <SelectItem value="srec-02">SREC-02</SelectItem>
                        <SelectItem value="all">All Shuttles</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="led-message">Display Message</Label>
                    <Input id="led-message" placeholder="Enter message for LED display..." maxLength={50} />
                    <p className="text-xs text-gray-500 mt-1">Maximum 50 characters</p>
                  </div>

                  <div>
                    <Label htmlFor="display-duration">Display Duration (seconds)</Label>
                    <Input id="display-duration" type="number" placeholder="30" min="5" max="300" />
                  </div>

                  <Button className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Update LED Display
                  </Button>
                </div>

                <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-center">
                  <div className="border border-green-400 p-4 rounded">
                    <p className="text-lg">WELCOME TO SMARTRIDE</p>
                    <p className="text-sm mt-2">NEXT STOP: LIBRARY</p>
                    <p className="text-xs mt-2 text-green-300">SREC-01 | 14:30</p>
                  </div>
                  <p className="text-xs mt-2 text-gray-400">LED Display Preview</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                Alert Thresholds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Battery Alerts</h3>
                  <div>
                    <Label htmlFor="battery-low">Low Battery Threshold (%)</Label>
                    <Input id="battery-low" type="number" defaultValue="20" min="5" max="50" />
                  </div>
                  <div>
                    <Label htmlFor="battery-critical">Critical Battery Threshold (%)</Label>
                    <Input id="battery-critical" type="number" defaultValue="10" min="1" max="20" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Temperature Alerts</h3>
                  <div>
                    <Label htmlFor="temp-high">High Temperature Threshold (°C)</Label>
                    <Input id="temp-high" type="number" defaultValue="45" min="30" max="60" />
                  </div>
                  <div>
                    <Label htmlFor="temp-critical">Critical Temperature Threshold (°C)</Label>
                    <Input id="temp-critical" type="number" defaultValue="55" min="40" max="70" />
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="font-semibold">Notification Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-alerts">Email Alerts</Label>
                    <Switch id="email-alerts" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sms-alerts">SMS Alerts</Label>
                    <Switch id="sms-alerts" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="voice-alerts">Voice Alerts</Label>
                    <Switch id="voice-alerts" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="led-alerts">LED Display Alerts</Label>
                    <Switch id="led-alerts" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-4">Twilio SMS Configuration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="twilio-sid">Account SID</Label>
                    <Input id="twilio-sid" placeholder="Enter Twilio Account SID" />
                  </div>
                  <div>
                    <Label htmlFor="twilio-token">Auth Token</Label>
                    <Input id="twilio-token" type="password" placeholder="Enter Twilio Auth Token" />
                  </div>
                  <div>
                    <Label htmlFor="twilio-phone">From Phone Number</Label>
                    <Input id="twilio-phone" placeholder="+1234567890" />
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full">Test Connection</Button>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button>Save Alert Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
