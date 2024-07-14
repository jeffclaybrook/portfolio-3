import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jeff Claybrook",
  description: "Generated by create next app"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <GoogleAnalytics gaId="G-SJSXDE92X3" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}