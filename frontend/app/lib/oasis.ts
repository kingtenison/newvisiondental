interface OasisAppointment {
  patientName: string
  patientPhone: string
  patientEmail?: string
  service: string
  location: string
  appointmentDate: string
  appointmentTime: string
  notes?: string
  source: "website"
}

export async function sendToOasis(appointment: OasisAppointment): Promise<boolean> {
  const oasisUrl = process.env.OASIS_API_URL
  const apiKey = process.env.OASIS_API_KEY

  if (!oasisUrl || !apiKey) {
    console.warn("Oasis API not configured - skipping external booking sync")
    return false
  }

  try {
    const response = await fetch(`${oasisUrl}/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify(appointment)
    })

    if (!response.ok) {
      console.error("Oasis API error:", await response.text())
      return false
    }

    return true
  } catch (error) {
    console.error("Failed to sync to Oasis:", error)
    return false
  }
}