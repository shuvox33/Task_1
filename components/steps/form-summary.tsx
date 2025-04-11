"use client"

import { useFormContext } from "react-hook-form"
import { Card, CardContent } from "@/components/ui/card"

export default function FormSummary() {
  const { getValues } = useFormContext()
  const values = getValues()

  const sections = [
    {
      title: "Personal Information",
      fields: [
        { label: "Full Name", value: values.fullName },
        { label: "Email", value: values.email },
        { label: "Phone Number", value: values.phoneNumber },
      ],
    },
    {
      title: "Address Details",
      fields: [
        { label: "Street Address", value: values.streetAddress },
        { label: "City", value: values.city },
        { label: "Zip Code", value: values.zipCode },
      ],
    },
    {
      title: "Account Setup",
      fields: [
        { label: "Username", value: values.username },
        { label: "Password", value: "••••••" },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <p className="text-lg font-medium text-center mb-4">Please review your information before submitting</p>

      {sections.map((section, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="bg-primary/10 px-4 py-2 font-medium">{section.title}</div>
          <CardContent className="p-4">
            <dl className="space-y-2">
              {section.fields.map((field, fieldIndex) => (
                <div key={fieldIndex} className="grid grid-cols-3 gap-4">
                  <dt className="font-medium text-muted-foreground">{field.label}:</dt>
                  <dd className="col-span-2">{field.value}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
