"use client"
import Link from "next/link"

const projects = [
  {
    title: "eShop - Full Stack E-Commerce Platform",
    description: "A full-stack e-commerce platform built for the Kenyan market. Features M-Pesa STK Push payments, product variants, cart management, order tracking, and a full admin panel.",
    href: "https://your-eshop-url.vercel.app",
    status: "Live",
    features: [
      "M-Pesa STK Push integration",
      "Product variants & inventory",
      "Cart & checkout flow",
      "Admin product management",
      "Order management",
      "JWT Authentication",
    ],
  },
]

export default function ProjectsPage() {
  return (
    <section style={{ padding: "7rem 2rem 5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p style={{
        fontSize: "0.7rem", fontWeight: 500, letterSpacing: "2px",
        textTransform: "uppercase", color: "#00c9ff", marginBottom: "1rem",
      }}>
        Our work
      </p>
      <h1 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(2rem, 5vw, 3.5rem)",
        fontWeight: 800, letterSpacing: "-2px",
        color: "#e8eeff", marginBottom: "1rem",
      }}>
        Projects
      </h1>
      <p style={{
        color: "#8892b0", fontSize: "1rem", fontWeight: 300,
        lineHeight: 1.8, maxWidth: "520px", marginBottom: "4rem",
      }}>
        Real-world solutions we've built - from e-commerce platforms to payment integrations.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {projects.map((project) => (
          <div
            key={project.title}
            style={{
              background: "#080d26",
              border: "0.5px solid rgba(0,201,255,0.15)",
              borderRadius: "16px",
              padding: "2.5rem",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(0,201,255,0.4)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(0,201,255,0.15)")}
          >
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
              <h2 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.3rem", fontWeight: 700,
                color: "#e8eeff", letterSpacing: "-0.5px",
              }}>
                {project.title}
              </h2>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "#22c55e", display: "inline-block",
                }} />
                <span style={{ fontSize: "0.75rem", color: "#22c55e", fontWeight: 500 }}>
                  {project.status}
                </span>
              </div>
            </div>

            <p style={{
              color: "#8892b0", fontSize: "0.95rem",
              lineHeight: 1.8, marginBottom: "1.5rem", fontWeight: 300,
            }}>
              {project.description}
            </p>

            {/* Features */}
            <ul style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "0.5rem",
              paddingLeft: "1.1rem",
              marginBottom: "1.75rem",
            }}>
              {project.features.map((f) => (
                <li key={f} style={{ fontSize: "0.875rem", color: "#8892b0", lineHeight: 1.8 }}>
                  {f}
                </li>
              ))}
            </ul>



            {/* CTA */}

            <Link
            
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "0.65rem 1.5rem",
                background: "#00c9ff",
                color: "#0a0f2e",
                borderRadius: "6px",
                fontSize: "0.875rem", fontWeight: 500,
                textDecoration: "none",
              }}
              >
              View Project
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
