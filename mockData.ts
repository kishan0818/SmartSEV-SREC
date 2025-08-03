export const dashboardMock = {
    shuttles: [
      {
        id: "SREC-01",
        location: "Main Gate → Library",
        battery: 87,
        occupancy: 6,
        capacity: 8,
        solarInput: 2.4,
        temperature: 32,
        health: {
          battery: "ok",
          motor: "ok",
          temperature: "high",
          iot: "ok"
        },
        status: "Active"
      },
      {
        id: "SREC-02",
        location: "Parking Bay A",
        battery: 45,
        occupancy: 0,
        capacity: 12,
        status: "Charging"
      }
    ],
    alerts: [
      { type: "Low Battery", shuttle: "SREC-02" },
      { type: "High Temp", shuttle: "SREC-01" },
      { type: "Maintenance", shuttle: "Due in 2 days" }
    ],
    stats: {
      todayRides: 24,
      energySaved: 15.2,
      distance: 142,
      users: 89
    }
  }
  