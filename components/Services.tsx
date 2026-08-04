"use client"

const services = [
  {
    title: "Web Development",
    description: "Fast, responsive websites built to convert. From landing pages to full-stack apps - accessible, SEO-friendly, and mobile-first.",
    bullets: ["Responsive website design", "Clean, modern UI", "SEO-ready structure", "Fast loading & mobile-friendly", "Custom features and integrations"],
  },
  {
    title: "SEO Optimization",
    description: "Boost your website's visibility and make it easier for customers to find you on search engines.",
    bullets: ["On-page SEO", "Keyword setup", "Performance optimization", "Search structure improvements", "Mobile-first optimization"],
  },
  {
    title: "Website Maintenance and Support",
    description: "Keeping your website secure, updated, and running smoothly - so you can focus on your business while everything stays stable in the background.",
    bullets: ["Monthly updates", "Performance optimization", "Security checks", "Backup & monitoring"],
  },
  {
    title: "Graphic Design",
    description: "Branding and visuals that tell your story - logos, social templates, print assets, and marketing creatives that convert.",
    bullets: ["Logo design", "Color palettes", "Brand guidelines", "Brand voice", "Social media branding kits"],
  },
  {
    title: "Payment Integration",
    description: "Secure, business-ready payment flows - mobile money, cards (Stripe/PayPal), or e-commerce platform setups.",
    bullets: ["M-Pesa STK Push integration", "Card payments (Visa/Mastercard)", "PayPal integration", "WooCommerce/Shopify payment setup", "Secure checkout pages", "API setup & testing"],
  },
]

export default function Services() {
  return (
    <section id="services" style={{
      padding: "5rem 2rem",
      maxWidth: "1100px",
      margin: "0 auto",
    }}>
        <p style={{
          fontSize: "0.7rem", fontWeight: 500, letterSpacing: "2px",
          textTransform: "uppercase", color: "#00c9ff", marginBottom: "0.75rem",
        }}>
          What we do
        </p>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 700, letterSpacing: "-1px",
          color: "#e8eeff", marginBottom: "0.5rem",
        }}>
          Our Services
        </h2>
        <p style={{
          color: "#8892b0", fontSize: "1rem",
          maxWidth: "540px", marginBottom: "3rem",
          fontWeight: 300, lineHeight: 1.8,
        }}>
          Complete digital solutions - from visual branding to production-ready websites with payments.
        </p>

      {/* Top row — 3 cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1.5rem",
        marginBottom: "1.5rem",
      }} className="services-top">
        {services.slice(0, 3).map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>

      {/* Bottom row — 2 cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
        maxWidth: "740px",
        margin: "0 auto",
      }} className="services-bottom">
        {services.slice(3).map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-top { grid-template-columns: 1fr !important; }
          .services-bottom { grid-template-columns: 1fr !important; max-width: 100% !important; }
        }
      `}</style>
    </section>
  )
}

function ServiceCard({ title, description, bullets }: {
  title: string
  description: string
  bullets: string[]
}) {
  return (
    <div
      style={{
        background: "#080d26",       // ← same as footer, deep navy
        border: "0.5px solid rgba(0,201,255,0.15)",
        borderRadius: "12px",
        padding: "2rem",
        transition: "border-color 0.2s, background 0.2s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.background = "#0d1333"
        ;(e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,201,255,0.35)"
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.background = "#080d26"
        ;(e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,201,255,0.15)"
      }}
    >
      <h3 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "1.05rem", fontWeight: 600,
        color: "#00c9ff", marginBottom: "0.85rem",
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: "0.9rem", color: "#c8d0e8",
        lineHeight: 1.75, marginBottom: "1.25rem",
      }}>
        {description}
      </p>
      <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
        {bullets.map((b) => (
          <li key={b} style={{ fontSize: "0.875rem", color: "#8892b0", lineHeight: 1.8 }}>
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}