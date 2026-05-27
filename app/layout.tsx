import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "./header"
import { Footer } from "./footer"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://vaishcodescape.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Aditya Vaish - Software Developer",
    template: "%s | Aditya Vaish",
  },
  description:
    "Software Developer specializing in full-stack development, AI integration, and scalable web applications. Implementing DevOps practices to build scalable and efficient applications.",
}

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans bg-neutral-950 text-zinc-300 antialiased`}>
        <div className="w-11/12 md:w-4/5 lg:w-3/4 xl:w-3/5 max-w-3xl mx-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
