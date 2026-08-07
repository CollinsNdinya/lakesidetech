"use client"
import Link from "next/link"

const projects = [
  {
    title: "Lakeside Commerce",
    description: "The commerce platform built for Kenyan businesses.",
    href: "https://lakesidecommerce.vercel.app/",
    status: "Live",
    features: [
        "Sell Online - Create products, manage variants, and give customers a complete shopping experience.",

        "M-Pesa Payments - Accept payments directly through M-Pesa STK Push.",

        "Inventory Management - Monitor stock levels, identify low-stock products, and adjust inventory.",

        "Order Management - Track orders from checkout through fulfillment.",

        "Business Reports - Monitor revenue, paid orders, average order value, best sellers, dead stock, and M-Pesa performance.",

        "Customer & Admin Management - Manage customers, products, orders, and your store from one dashboard.",

        "Delivery & Location -  Use maps and location information to support delivery workflows."
    ],
  },
]

export default function ProductsPage() {
  return (
    <section style={{ padding: "7rem 2rem 5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p style={{
        fontSize: "0.7rem", fontWeight: 500, letterSpacing: "2px",
        textTransform: "uppercase", color: "#00c9ff", marginBottom: "1rem",
      }}>
        Our Products
      </p>
      <h1 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(2rem, 5vw, 3.5rem)",
        fontWeight: 800, letterSpacing: "-2px",
        color: "#e8eeff", marginBottom: "1rem",
      }}>
        Products
      </h1>
      <p style={{
        color: "#8892b0", fontSize: "1rem", fontWeight: 300,
        lineHeight: 1.8, maxWidth: "520px", marginBottom: "4rem",
      }}>
        Software we've built to solve real business problems.
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
              Explore Project
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
