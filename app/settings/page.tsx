"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Settings, MapPin, Globe, Smartphone, Car, Shield, Database } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Settings & Configuration</h1>
        <Button>
          <Settings className="w-4 h-4 mr-2" />
          Save All Settings
        </Button>
      </div>

      <Tabs defaultValue="geofence" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="geofence">Geofence</TabsTrigger>
          <TabsTrigger value="language">Language</TabsTrigger>
          <TabsTrigger value="api">API Config</TabsTrigger>
          <TabsTrigger value="shuttle">Shuttle Setup</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="geofence" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Geofence Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Campus Zones</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Main Campus</span>
                        <Switch defaultChecked />
                      </div>
                      <p className="text-sm text-gray-600">Primary campus area with all academic buildings</p>
                      <div className="mt-2 text-xs text-gray-500">Coordinates: 11.0168° N, 76.9558° E</div>
                    </div>

                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Hostel Zone</span>
                        <Switch defaultChecked />
                      </div>
                      <p className="text-sm text-gray-600">Student residential area</p>
                      <div className="mt-2 text-xs text-gray-500">Coordinates: 11.0175° N, 76.9545° E</div>
                    </div>

                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Sports Complex</span>
                        <Switch />
                      </div>
                      <p className="text-sm text-gray-600">Athletic facilities and grounds</p>
                      <div className="mt-2 text-xs text-gray-500">Coordinates: 11.0155° N, 76.9570° E</div>
                    </div>
                  </div>

                  <Button className="w-full">Add New Zone</Button>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Map Editor</h3>
                  <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-4" />
                      <p>Interactive Map Editor</p>
                      <p className="text-sm">Click and drag to define geofence boundaries</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div>
                      <Label htmlFor="zone-name">Zone Name</Label>
                      <Input id="zone-name" placeholder="Enter zone name" />
                    </div>
                    <div>
                      <Label htmlFor="zone-description">Description</Label>
                      <Textarea id="zone-description" placeholder="Enter zone description" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="zone-active">Active Zone</Label>
                      <Switch id="zone-active" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="language" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Language & Display Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">LED Display Languages</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="english">English</Label>
                      <Switch id="english" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="tamil">Tamil (தமிழ்)</Label>
                      <Switch id="tamil" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="hindi">Hindi (हिंदी)</Label>
                      <Switch id="hindi" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Label htmlFor="primary-language">Primary Language</Label>
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
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Voice Alert Languages</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="voice-english">English Voice</Label>
                      <Switch id="voice-english" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="voice-tamil">Tamil Voice</Label>
                      <Switch id="voice-tamil" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="voice-hindi">Hindi Voice</Label>
                      <Switch id="voice-hindi" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Label htmlFor="voice-volume">Voice Volume</Label>
                    <div className="mt-2">
                      <Slider defaultValue={[75]} max={100} step={5} />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>75%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Sample Messages</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>English:</strong> "Welcome to SmartRide SREC. Next stop: Library"
                  </div>
                  <div>
                    <strong>Tamil:</strong> "ஸ்மார்ட்ரைடு SREC க்கு வரவேற்கிறோம். அடுத்த நிறுத்தம்: நூலகம்"
                  </div>
                  <div>
                    <strong>Hindi:</strong> "स्मार्टराइड SREC में आपका स्वागत है। अगला स्टॉप: पुस्तकालय"
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Smartphone className="w-5 h-5 mr-2" />
                API Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Twilio SMS Integration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="twilio-account-sid">Account SID</Label>
                      <Input id="twilio-account-sid" placeholder="ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" type="password" />
                    </div>
                    <div>
                      <Label htmlFor="twilio-auth-token">Auth Token</Label>
                      <Input id="twilio-auth-token" placeholder="Enter auth token" type="password" />
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

                <div>
                  <h3 className="font-semibold mb-4">Google Maps API</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="maps-api-key">API Key</Label>
                      <Input id="maps-api-key" placeholder="AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" type="password" />
                    </div>
                    <div className="flex items-end">
                      <Button className="w-full">Validate Key</Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Weather API</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="weather-api-key">OpenWeather API Key</Label>
                      <Input id="weather-api-key" placeholder="Enter API key" type="password" />
                    </div>
                    <div className="flex items-end">
                      <Button className="w-full">Test API</Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Database Configuration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="db-host">Database Host</Label>
                      <Input id="db-host" placeholder="localhost" />
                    </div>
                    <div>
                      <Label htmlFor="db-port">Port</Label>
                      <Input id="db-port" placeholder="5432" />
                    </div>
                    <div>
                      <Label htmlFor="db-name">Database Name</Label>
                      <Input id="db-name" placeholder="smartride_db" />
                    </div>
                    <div className="flex items-end">
                      <Button className="w-full">Test Connection</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shuttle" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Car className="w-5 h-5 mr-2" />
                Shuttle Calibration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">SREC-01 Configuration</h3>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="srec01-max-speed">Maximum Speed (km/h)</Label>
                      <Input id="srec01-max-speed" type="number" defaultValue="40" />
                    </div>
                    <div>
                      <Label htmlFor="srec01-battery-capacity">Battery Capacity (kWh)</Label>
                      <Input id="srec01-battery-capacity" type="number" defaultValue="50" />
                    </div>
                    <div>
                      <Label htmlFor="srec01-passenger-capacity">Passenger Capacity</Label>
                      <Input id="srec01-passenger-capacity" type="number" defaultValue="8" />
                    </div>
                    <div>
                      <Label htmlFor="srec01-weight">Vehicle Weight (kg)</Label>
                      <Input id="srec01-weight" type="number" defaultValue="2500" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">SREC-02 Configuration</h3>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="srec02-max-speed">Maximum Speed (km/h)</Label>
                      <Input id="srec02-max-speed" type="number" defaultValue="40" />
                    </div>
                    <div>
                      <Label htmlFor="srec02-battery-capacity">Battery Capacity (kWh)</Label>
                      <Input id="srec02-battery-capacity" type="number" defaultValue="75" />
                    </div>
                    <div>
                      <Label htmlFor="srec02-passenger-capacity">Passenger Capacity</Label>
                      <Input id="srec02-passenger-capacity" type="number" defaultValue="12" />
                    </div>
                    <div>
                      <Label htmlFor="srec02-weight">Vehicle Weight (kg)</Label>
                      <Input id="srec02-weight" type="number" defaultValue="3200" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-4">Alert Thresholds</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="battery-low-threshold">Low Battery Alert (%)</Label>
                    <Input id="battery-low-threshold" type="number" defaultValue="20" />
                  </div>
                  <div>
                    <Label htmlFor="temp-high-threshold">High Temperature Alert (°C)</Label>
                    <Input id="temp-high-threshold" type="number" defaultValue="45" />
                  </div>
                  <div>
                    <Label htmlFor="overload-threshold">Overload Alert (%)</Label>
                    <Input id="overload-threshold" type="number" defaultValue="100" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                System Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Security Settings</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                        <p className="text-sm text-gray-600">Require 2FA for admin accounts</p>
                      </div>
                      <Switch id="two-factor" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="session-timeout">Auto Session Timeout</Label>
                        <p className="text-sm text-gray-600">Automatically log out inactive users</p>
                      </div>
                      <Switch id="session-timeout" defaultChecked />
                    </div>
                    <div>
                      <Label htmlFor="session-duration">Session Duration (minutes)</Label>
                      <Input id="session-duration" type="number" defaultValue="30" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Data Management</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="auto-backup">Automatic Backups</Label>
                        <p className="text-sm text-gray-600">Daily system data backup</p>
                      </div>
                      <Switch id="auto-backup" defaultChecked />
                    </div>
                    <div>
                      <Label htmlFor="backup-retention">Backup Retention (days)</Label>
                      <Input id="backup-retention" type="number" defaultValue="30" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="data-encryption">Data Encryption</Label>
                        <p className="text-sm text-gray-600">Encrypt sensitive data at rest</p>
                      </div>
                      <Switch id="data-encryption" defaultChecked />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">System Maintenance</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="auto-updates">Automatic Updates</Label>
                        <p className="text-sm text-gray-600">Install security updates automatically</p>
                      </div>
                      <Switch id="auto-updates" defaultChecked />
                    </div>
                    <div>
                      <Label htmlFor="maintenance-window">Maintenance Window</Label>
                      <Select defaultValue="02:00">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="01:00">01:00 AM</SelectItem>
                          <SelectItem value="02:00">02:00 AM</SelectItem>
                          <SelectItem value="03:00">03:00 AM</SelectItem>
                          <SelectItem value="04:00">04:00 AM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button>Save System Settings</Button>
                  <Button variant="outline">Reset to Defaults</Button>
                  <Button variant="outline">
                    <Database className="w-4 h-4 mr-2" />
                    Backup Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
