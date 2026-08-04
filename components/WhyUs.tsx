const reasons = [
  {
    num: "01",
    title: "Built for Scale",
    body: "Performance-driven websites and applications that grow with your business — from MVP to full-scale platforms.",
  },
  {
    num: "02",
    title: "Seamless Payment Integrations",
    body: "Trusted payment gateways integrated with speed and security — smooth checkouts, subscriptions, and real-time transactions.",
  },
  {
    num: "03",
    title: "Security First",
    body: "Best practices for data protection, secure APIs, and compliant payment workflows to keep your users and revenue safe.",
  },
  {
    num: "04",
    title: "Startup-Focused Mindset",
    body: "We move fast, iterate smart, and communicate clearly — helping you launch quickly without sacrificing quality.",
  },
]

export default function WhyUs() {
  return (
    <section id="why" style={{
      padding: "5rem 2rem",
      maxWidth: "1100px",
      margin: "0 auto",
      borderTop: "0.5px solid rgba(0,201,255,0.12)",
    }}>
      <p style={{
        fontSize: "0.7rem", fontWeight: 500, letterSpacing: "2px",
        textTransform: "uppercase", color: "#00c9ff", marginBottom: "0.75rem",
      }}>
        Why choose us
      </p>
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
        fontWeight: 700, letterSpacing: "-1px",
        color: "#e8eeff", marginBottom: "0.5rem",
      }}>
        Why Choose Us
      </h2>
      <p style={{
        color: "#8892b0", fontSize: "1rem",
        maxWidth: "580px", marginBottom: "3rem",
        fontWeight: 300, lineHeight: 1.8,
      }}>
        We build fast, secure, and scalable web solutions with seamless payment integrations
        that help startups and businesses move money and grow without friction.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
        gap: "1.5rem",
      }}>
        {reasons.map(({ num, title, body }) => (
          <div key={num} style={{
            padding: "1.75rem",
            border: "0.5px solid rgba(0,201,255,0.12)",
            borderRadius: "12px",
            background: "#080d26",
          }}>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "2.5rem", fontWeight: 800,
              color: "rgba(0,201,255,0.1)",
              marginBottom: "0.5rem",
              lineHeight: 1,
            }}>
              {num}
            </div>
            <h3 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.95rem", fontWeight: 600,
              color: "#e8eeff", marginBottom: "0.5rem",
            }}>
              {title}
            </h3>
            <p style={{ fontSize: "0.875rem", color: "#8892b0", lineHeight: 1.75 }}>
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
