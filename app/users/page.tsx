"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, UserPlus, Edit, Trash2, Shield, Activity, Eye } from "lucide-react"

const users = [
  {
    id: "USR-001",
    name: "Dr. Rajesh Kumar",
    email: "rajesh.kumar@srec.ac.in",
    role: "admin",
    department: "Computer Science",
    status: "active",
    lastLogin: "2024-01-15 09:30:00",
    ridesCount: 45,
  },
  {
    id: "USR-002",
    name: "Ms. Priya Sharma",
    email: "priya.sharma@srec.ac.in",
    role: "driver",
    department: "Transport",
    status: "active",
    lastLogin: "2024-01-15 08:15:00",
    ridesCount: 120,
  },
  {
    id: "USR-003",
    name: "Mr. Arjun Patel",
    email: "arjun.patel@srec.ac.in",
    role: "receptionist",
    department: "Administration",
    status: "active",
    lastLogin: "2024-01-15 10:45:00",
    ridesCount: 28,
  },
  {
    id: "USR-004",
    name: "Ms. Kavya Reddy",
    email: "kavya.reddy@srec.ac.in",
    role: "faculty",
    department: "Mechanical",
    status: "inactive",
    lastLogin: "2024-01-12 16:20:00",
    ridesCount: 12,
  },
]

const loginLogs = [
  {
    id: "LOG-001",
    user: "Dr. Rajesh Kumar",
    timestamp: "2024-01-15 09:30:25",
    ip: "192.168.1.45",
    device: "Chrome/Windows",
    status: "success",
  },
  {
    id: "LOG-002",
    user: "Ms. Priya Sharma",
    timestamp: "2024-01-15 08:15:12",
    ip: "192.168.1.67",
    device: "Mobile/Android",
    status: "success",
  },
  {
    id: "LOG-003",
    user: "Unknown User",
    timestamp: "2024-01-15 07:45:30",
    ip: "203.45.67.89",
    device: "Chrome/Linux",
    status: "failed",
  },
]

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">User & Access Management</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <UserPlus className="w-4 h-4 mr-2" />
              Add New User
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="new-name">Full Name</Label>
                <Input id="new-name" placeholder="Enter full name" />
              </div>
              <div>
                <Label htmlFor="new-email">Email</Label>
                <Input id="new-email" type="email" placeholder="Enter email address" />
              </div>
              <div>
                <Label htmlFor="new-role">Role</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="driver">Driver</SelectItem>
                    <SelectItem value="receptionist">Receptionist</SelectItem>
                    <SelectItem value="faculty">Faculty</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="new-department">Department</Label>
                <Input id="new-department" placeholder="Enter department" />
              </div>
              <Button className="w-full">Create User</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="users" className="space-y-6">
        <TabsList>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="logs">Login Logs</TabsTrigger>
          <TabsTrigger value="permissions">Role Permissions</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-6">
          <div className="flex items-center space-x-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="driver">Driver</SelectItem>
                <SelectItem value="receptionist">Receptionist</SelectItem>
                <SelectItem value="faculty">Faculty</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>

            <Input placeholder="Search users..." className="max-w-sm" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>User Directory</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>Rides</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant={user.role === "admin" ? "default" : "secondary"}>{user.role}</Badge>
                      </TableCell>
                      <TableCell>{user.department}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Switch checked={user.status === "active"} size="sm" />
                          <Badge variant={user.status === "active" ? "default" : "secondary"}>{user.status}</Badge>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">{user.lastLogin}</TableCell>
                      <TableCell>{user.ridesCount}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="w-4 h-4" />
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

        <TabsContent value="logs" className="space-y-6">
          <div className="flex items-center space-x-4">
            <Input placeholder="Search by user or IP..." className="max-w-sm" />
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Activity className="w-4 h-4 mr-2" />
              Export Logs
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Login Activity Log</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Log ID</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>IP Address</TableHead>
                    <TableHead>Device/Browser</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loginLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="font-medium">{log.id}</TableCell>
                      <TableCell>{log.user}</TableCell>
                      <TableCell className="text-sm text-gray-600">{log.timestamp}</TableCell>
                      <TableCell>{log.ip}</TableCell>
                      <TableCell>{log.device}</TableCell>
                      <TableCell>
                        <Badge variant={log.status === "success" ? "default" : "destructive"}>{log.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="permissions" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Admin
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Dashboard Access</span>
                  <Switch checked disabled />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">User Management</span>
                  <Switch checked disabled />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">System Settings</span>
                  <Switch checked disabled />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Analytics</span>
                  <Switch checked disabled />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Alert Management</span>
                  <Switch checked disabled />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Driver
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Dashboard Access</span>
                  <Switch checked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Map View</span>
                  <Switch checked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Route Updates</span>
                  <Switch checked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Emergency Alerts</span>
                  <Switch checked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">User Management</span>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Receptionist
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Dashboard Access</span>
                  <Switch checked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Ride Scheduling</span>
                  <Switch checked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">User Requests</span>
                  <Switch checked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Basic Analytics</span>
                  <Switch checked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">System Settings</span>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Faculty
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Dashboard View</span>
                  <Switch checked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Ride Requests</span>
                  <Switch checked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Schedule View</span>
                  <Switch checked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Profile Management</span>
                  <Switch checked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Admin Functions</span>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Permission Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Configure role-based access permissions for different user types. Changes will take effect immediately
                  for all users with the respective roles.
                </p>
                <Button>Save Permission Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
