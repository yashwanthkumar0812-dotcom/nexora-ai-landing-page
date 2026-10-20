import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nexora AI — The operating system for modern teams",
  description: "Turn complex work into clear momentum with Nexora AI.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
