"use client"

import { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PersonalInfoStep from "./steps/personal-info-step"
import AddressDetailsStep from "./steps/address-details-step"
import AccountSetupStep from "./steps/account-setup-step"
import FormSummary from "./steps/form-summary"
import { formSchema } from "@/lib/validation"
import ThemeToggle from "./theme-toggle"

type FormData = z.infer<typeof formSchema>

export default function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [showSummary, setShowSummary] = useState(false)

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      streetAddress: "",
      city: "",
      zipCode: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  })

  const { handleSubmit, trigger, formState } = methods

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data)
    // Here you would typically send the data to an API
    alert("Form submitted successfully! Check console for details.")
  }

  const handleNext = async () => {
    let fieldsToValidate: string[] = []

    switch (step) {
      case 1:
        fieldsToValidate = ["fullName", "email", "phoneNumber"]
        break
      case 2:
        fieldsToValidate = ["streetAddress", "city", "zipCode"]
        break
      case 3:
        fieldsToValidate = ["username", "password", "confirmPassword"]
        break
    }

    const isValid = await trigger(fieldsToValidate as any)

    if (isValid) {
      if (step === 3) {
        setShowSummary(true)
      } else {
        setStep(step + 1)
      }
    }
  }

  const handlePrevious = () => {
    if (showSummary) {
      setShowSummary(false)
    } else {
      setStep(step - 1)
    }
  }

  const stepTitles = ["Personal Information", "Address Details", "Account Setup", "Review & Submit"]

  return (
    <FormProvider {...methods}>
      <Card className="shadow-lg">
        <CardHeader className="border-b">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold">{stepTitles[showSummary ? 3 : step - 1]}</CardTitle>
            <ThemeToggle />
          </div>
          <div className="flex justify-between mt-4">
            {[1, 2, 3].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`flex-1 h-2 rounded-full mx-1 ${
                  stepNumber <= step ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"
                }`}
              />
            ))}
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <form id="multi-step-form" onSubmit={handleSubmit(onSubmit)}>
            {!showSummary ? (
              <>
                {step === 1 && <PersonalInfoStep />}
                {step === 2 && <AddressDetailsStep />}
                {step === 3 && <AccountSetupStep />}
              </>
            ) : (
              <FormSummary />
            )}
          </form>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <Button type="button" variant="outline" onClick={handlePrevious} disabled={step === 1 && !showSummary}>
            {showSummary ? "Edit Information" : "Previous"}
          </Button>

          {!showSummary ? (
            <Button type="button" onClick={handleNext}>
              {step === 3 ? "Review" : "Next"}
            </Button>
          ) : (
            <Button type="submit" form="multi-step-form" className="bg-green-600 hover:bg-green-700">
              Submit
            </Button>
          )}
        </CardFooter>
      </Card>
    </FormProvider>
  )
}
