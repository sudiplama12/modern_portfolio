import type React from "react"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })

export const metadata: Metadata = {
  title: "Sudip Lama Tamang - Creative Technologist",
  description: "Inventing tomorrow's web, one line of code at a time.",
  keywords: ["developer", "portfolio", "full-stack", "creative technologist","Trader"],
  authors: [{ name: "Sudip Lama Tamang" }],
  openGraph: {
    title: "Sudip Lama Tamang - Creative Technologist",
    description: "Inventing tomorrow's web, one line of code at a time.",
    type: "website",
  },
    generator: '.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
