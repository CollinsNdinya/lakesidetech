import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "LakesideTech | Web & Payment Solutions",
  description:
    "We design and develop high-performance websites and seamless payment integrations that help startups and businesses grow faster.",
  keywords: ["web development", "payment integration", "M-Pesa", "SEO", "Kenya", "LakesideTech"],
  openGraph: {
    title: "LakesideTech",
    description: "Fast, secure web solutions that scale.",
    url: "https://lakesidetech.com",
    siteName: "LakesideTech",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
