import { NextResponse } from "next/server"
import { z } from "zod"
import { formSchema } from "@/lib/validation"

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()

    // Validate the data
    const validatedData = formSchema.parse(body)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
      data: {
        ...validatedData,
        password: "******", // Don't send back the actual password
        confirmPassword: "******",
      },
    })
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.errors,
        },
        { status: 400 },
      )
    }

    // Handle other errors
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your request",
      },
      { status: 500 },
    )
  }
}
