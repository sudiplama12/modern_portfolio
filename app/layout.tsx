import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Sudip Lama Tamang - Creative Technologist",
    template: "%s | Sudip Lama Tamang",
  },
  description:
    "Full Stack Developer & Creative Technologist building modern, interactive web experiences with Next.js, Three.js, and AI.",
  keywords: [
    "Sudip Lama Tamang",
    "developer",
    "portfolio",
    "full stack developer",
    "creative technologist",
    "next.js developer",
    "react developer",
    "three.js",
    "ai developer",
  ],
  authors: [{ name: "Sudip Lama Tamang" }],
  creator: "Sudip Lama Tamang",
  metadataBase: new URL("https://your-domain.com"),

  openGraph: {
    title: "Sudip Lama Tamang - Creative Technologist",
    description:
      "Building futuristic web experiences with modern technologies.",
    url: "https://your-domain.com",
    siteName: "Sudip Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sudip Lama Tamang - Creative Technologist",
    description:
      "Building futuristic web experiences with modern technologies.",
  },

  icons: {
    icon: "/favicon.ico",
  },

  generator: "Next.js",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}