"use client"

import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"

export default function AccountSetupStep() {
  const { control } = useFormContext()

  return (
    <div className="space-y-6">
      <FormField
        control={control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <Label htmlFor="username">Username</Label>
            <FormControl>
              <Input id="username" placeholder="johndoe" {...field} className="mt-1" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <Label htmlFor="password">Password</Label>
            <FormControl>
              <Input id="password" type="password" placeholder="••••••" {...field} className="mt-1" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <FormControl>
              <Input id="confirmPassword" type="password" placeholder="••••••" {...field} className="mt-1" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
