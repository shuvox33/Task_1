"use client"

import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"

export default function AddressDetailsStep() {
  const { control } = useFormContext()

  return (
    <div className="space-y-6">
      <FormField
        control={control}
        name="streetAddress"
        render={({ field }) => (
          <FormItem>
            <Label htmlFor="streetAddress">Street Address</Label>
            <FormControl>
              <Input id="streetAddress" placeholder="123 Main St" {...field} className="mt-1" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="city"
        render={({ field }) => (
          <FormItem>
            <Label htmlFor="city">City</Label>
            <FormControl>
              <Input id="city" placeholder="New York" {...field} className="mt-1" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="zipCode"
        render={({ field }) => (
          <FormItem>
            <Label htmlFor="zipCode">Zip Code</Label>
            <FormControl>
              <Input id="zipCode" placeholder="10001" {...field} className="mt-1" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
