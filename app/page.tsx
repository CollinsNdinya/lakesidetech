import Hero from "@/components/Hero"
import Services from "@/components/Services"
import WhyUs from "@/components/WhyUs"
import Contact from "@/components/Contact"



export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "LakesideTech",
            url: "https://lakesidetech.co.ke",
            logo: "https://lakesidetech.co.ke/logo.png",
            sameAs: [
              "https://twitter.com/_lakesidetech",
              "https://www.instagram.com/lakeside.tech",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+254737847921",
              contactType: "customer service",
            },
          }),
        }}
      />
      <Hero />
      <Services />
      <WhyUs />
      <Contact />

    </>
  )
}