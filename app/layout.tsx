import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


export const metadata: Metadata = {
  metadataBase: new URL("https://lakesidetech.co.ke"),
  title: {
    default: "LakesideTech | Web & Payment Solutions",
    template: "%s | LakesideTech",
  },
  description:
    "We design and develop high-performance websites and seamless payment integrations that help startups and businesses grow faster.",
  keywords: ["web development", "payment integration", "M-Pesa", "SEO", "Kenya", "LakesideTech"],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://lakesidetech.co.ke",
  },
  openGraph: {
    title: "LakesideTech | Web & Payment Solutions",
    description: "Fast, secure web solutions that scale — websites, M-Pesa & card payment integration for Kenyan businesses.",
    url: "https://lakesidetech.co.ke",
    siteName: "LakesideTech",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/og-image.png", // add a real 1200x630 image in /public
        width: 1200,
        height: 630,
        alt: "LakesideTech - Web & Payment Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LakesideTech | Web & Payment Solutions",
    description: "Fast, secure web solutions that scale — websites, M-Pesa & card payment integration.",
    images: ["/og-image.png"],
    site: "@_lakesidetech",
  },
  icons: {
    icon: "/favicon.png",
  },
  verification: {
    google: "your-google-search-console-verification-code", // from GSC once you add the site
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
