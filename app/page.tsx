import MultiStepForm from "@/components/multi-step-form"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <div className="w-full max-w-2xl">
          <MultiStepForm />
        </div>
      </ThemeProvider>
    </main>
  )
}
