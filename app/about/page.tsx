"use client"
import type { Metadata } from "next"

const values = [
  { num: "01", title: "Continuous Learning", body: "We stay on top of current web technologies and actively expand our expertise to create more dynamic, interactive, and modern web applications." },
  { num: "02", title: "Innovation", body: "We don't do cookie-cutter. Every project gets a tailored solution — designed to solve real-world problems with modern tools." },
  { num: "03", title: "Client-First Approach", body: "We listen before we build. Your goals drive every decision — from design to deployment and ongoing support." },
  { num: "04", title: "Quality Over Speed", body: "We move with urgency but never cut corners. Every line of code, every pixel, every integration is done right." },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "7rem 2rem 4rem", maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase", color: "#00c9ff", marginBottom: "1rem" }}>
          Who we are
        </p>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-2px", color: "#e8eeff", marginBottom: "1.5rem", maxWidth: "700px" }}>
          About <span style={{ color: "#00c9ff" }}>LakesideTech</span>
        </h1>
        <p style={{ fontSize: "1.05rem", color: "#8892b0", maxWidth: "560px", lineHeight: 1.85, fontWeight: 300, marginBottom: "2rem" }}>
          A creative and forward-thinking web development company committed to building clean, efficient, and user-friendly digital solutions.
        </p>
        <a href="#story" style={{ display: "inline-block", padding: "0.8rem 2rem", background: "#00c9ff", color: "#0a0f2e", borderRadius: "6px", fontSize: "0.9rem", fontWeight: 500, textDecoration: "none" }}>
          Our Story
        </a>
      </section>

      {/* Story */}
      <section id="story" style={{ padding: "4rem 2rem", maxWidth: "1100px", margin: "0 auto", borderTop: "0.5px solid rgba(0,201,255,0.12)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="about-grid">
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase", color: "#00c9ff", marginBottom: "0.75rem" }}>
              Our story
            </p>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, letterSpacing: "-1px", color: "#e8eeff", marginBottom: "1.5rem" }}>
              Built on Code,<br />Driven by Purpose
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "Welcome to LakesideTech — a creative and forward-thinking web development company committed to building clean, efficient, and user-friendly digital solutions. We specialize in full-stack development, transforming ideas into seamless online experiences.",
                "In addition to development, we offer high-quality graphic design services to help elevate your brand's visual identity — from logos to full brand guidelines.",
                "Our team is proficient in current web technologies and we're actively expanding our expertise to create more dynamic, interactive, and modern web applications.",
                "At LakesideTech, we value continuous learning, innovation, and a client-first approach — always striving to deliver tailored solutions that meet real-world needs. Whether you're a startup, small business, or growing brand, we're here to help you build something amazing — one line of code at a time.",
              ].map((para, i) => (
                <p key={i} style={{ fontSize: "0.95rem", color: "#8892b0", lineHeight: 1.85, fontWeight: 300 }}>{para}</p>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { num: "50+", label: "Projects Delivered" },
              { num: "100%", label: "Client Satisfaction" },
              { num: "5+", label: "Services Offered" },
              { num: "24/7", label: "Support Available" },
            ].map(({ num, label }) => (
              <div key={label}
                style={{ background: "#080d26", border: "0.5px solid rgba(0,201,255,0.15)", borderRadius: "12px", padding: "1.75rem", textAlign: "center", transition: "border-color 0.2s, background 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "#0d1333"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,201,255,0.35)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "#080d26"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,201,255,0.15)" }}
              >
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "2rem", fontWeight: 800, color: "#00c9ff", marginBottom: "0.4rem" }}>{num}</div>
                <div style={{ fontSize: "0.8rem", color: "#8892b0" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
        `}</style>
      </section>

      {/* Values */}
      <section style={{ padding: "4rem 2rem 6rem", maxWidth: "1100px", margin: "0 auto", borderTop: "0.5px solid rgba(0,201,255,0.12)" }}>
        <p style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase", color: "#00c9ff", marginBottom: "0.75rem" }}>
          What drives us
        </p>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, letterSpacing: "-1px", color: "#e8eeff", marginBottom: "3rem" }}>
          Our Values
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1.5rem" }}>
          {values.map(({ num, title, body }) => (
            <div key={num}
              style={{ background: "#080d26", border: "0.5px solid rgba(0,201,255,0.15)", borderRadius: "12px", padding: "2rem", transition: "border-color 0.2s, background 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "#0d1333"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,201,255,0.35)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "#080d26"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,201,255,0.15)" }}
            >
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.5rem", fontWeight: 800, color: "rgba(0,201,255,0.1)", marginBottom: "0.5rem", lineHeight: 1 }}>{num}</div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "#e8eeff", marginBottom: "0.5rem" }}>{title}</h3>
              <p style={{ fontSize: "0.875rem", color: "#8892b0", lineHeight: 1.75 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}