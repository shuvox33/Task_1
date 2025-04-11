# Multi-Step Form with Validation

This project demonstrates a multi-step form implementation using Next.js App Router with React Hook Form and Zod validation.

## Features

- Three-step form with validation
- Form state management with React Hook Form
- Schema validation with Zod
- Dark mode support with Tailwind CSS
- Responsive design
- Form summary before submission
- Mock API endpoint for form submission

## Tech Stack

- Next.js (App Router)
- React Hook Form
- Zod for validation
- TailwindCSS for styling
- shadcn/ui components

## Getting Started

First, install the dependencies:


npm install
# or
yarn install
# or
pnpm install


Then, run the development server:


npm run dev
# or
yarn dev
# or
pnpm dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Form Structure

1. **Personal Information**
   - Full Name (required)
   - Email (required, valid format)
   - Phone Number (required, must be at least 10 digits)

2. **Address Details**
   - Street Address (required)
   - City (required)
   - Zip Code (required, only numbers, min 5 digits)

3. **Account Setup**
   - Username (required, min 4 characters)
   - Password (required, min 6 characters)
   - Confirm Password (must match password)

## Implementation Details

- Form validation is handled by Zod with custom validation rules
- Error messages are displayed under each field when validation fails
- Navigation between steps is controlled by validation status
- Form data is collected and displayed in a summary before submission
- Dark mode is implemented using Tailwind CSS and next-themes
