"use client"
import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "Web Development", message: "" })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!response.ok) throw new Error("Failed to send")

      setSent(true)
      setForm({ name: "", email: "", service: "Web Development", message: "" })
      setTimeout(() => setSent(false), 4000)
    } catch (err) {
      console.error("Submission failed:", err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    background: "#0f1a3d",
    border: "0.5px solid rgba(0,201,255,0.15)",
    borderRadius: "8px",
    padding: "0.75rem 1rem",
    color: "#e8eeff",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    width: "100%",
  }

  const labelStyle: React.CSSProperties = {
    fontSize: "0.8rem",
    color: "#8892b0",
    marginBottom: "6px",
    display: "block",
  }

  return (
    <section id="contact" style={{
      padding: "5rem 2rem",
      maxWidth: "1100px",
      margin: "0 auto",
      borderTop: "0.5px solid rgba(0,201,255,0.12)",
    }}>
      <p style={{
        fontSize: "0.7rem", fontWeight: 500, letterSpacing: "2px",
        textTransform: "uppercase", color: "#00c9ff", marginBottom: "0.75rem",
      }}>
        Get in touch
      </p>
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
        fontWeight: 700, letterSpacing: "-1px",
        color: "#e8eeff", marginBottom: "3rem",
      }}>
        Let's Work Together
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "start",
      }} className="contact-grid">

        {/* Left info */}
        <div>
          <p style={{ color: "#8892b0", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "2rem", fontWeight: 300 }}>
            Ready to build something great? Whether you need a new website,
            payment integration, or a full digital presence - we're here to help.
          </p>

          {[
            { emoji: "💬", label: "WhatsApp", href: "https://wa.me/254737847921", text: "+254 737 847 921" },
            { emoji: "✉️", label: "Email", href: "mailto:lakesidetech25@gmail.com", text: "lakesidetech25@gmail.com" },
            { emoji: "🌐", label: "Website", href: "https://lakesidetech.co.ke", text: "lakesidetech.co.ke" },
          ].map(({ emoji, label, href, text }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", gap: "10px",
              color: "#00c9ff", textDecoration: "none",
              fontSize: "0.9rem", marginBottom: "1rem",
            }}>
              <span>{emoji}</span>
              {text}
            </a>
          ))}
        </div>

        {/* Right form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label style={labelStyle}>Your name</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Alice Atieno" required style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Email address</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="aliceatieno@example.com" required style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Service needed</label>
            <select name="service" value={form.service} onChange={handleChange} style={inputStyle}>
              {["Web Development", "SEO Optimization", "Payment Integration", "Graphic Design", "Maintenance & Support"].map(s => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project..." required rows={5} style={{ ...inputStyle, resize: "vertical" }} />
          </div>
          <button type="submit" disabled={loading} style={{
            alignSelf: "flex-start",
            padding: "0.8rem 2rem",
            background: sent ? "#2ecc71" : "#00c9ff",
            color: "#0a0f2e",
            border: "none", borderRadius: "6px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.9rem", fontWeight: 500,
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}>
            {loading ? "Sending..." : sent ? "Message Sent ✓" : "Send Message"}
          </button>
          {error && (
            <p style={{ color: "#ff6b6b", fontSize: "0.85rem" }}>
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}