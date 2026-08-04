import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" style={{
      padding: "3rem 2rem 5rem",  // ← reduced top padding from 7rem
      maxWidth: "1100px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      gap: "4rem",
    }}>

      {/* Left — text */}
      <div>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          fontSize: "0.7rem", fontWeight: 500, letterSpacing: "1.5px",
          color: "#00c9ff", textTransform: "uppercase",
          border: "0.5px solid rgba(0,201,255,0.2)",
          padding: "6px 14px", borderRadius: "100px",
          marginBottom: "1.5rem",
        }}>
          <span style={{ width: 6, height: 6, background: "#00c9ff", borderRadius: "50%", display: "inline-block" }} />
          Web &amp; Payment Solutions
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
          fontWeight: 800, lineHeight: 1.05,
          letterSpacing: "-2px",
          marginBottom: "1.5rem",
          color: "#e8eeff",
        }}>
          We Build Fast, Secure<br />
          Web Solutions That{" "}
          <span style={{ color: "#00c9ff" }}>Scale</span>
        </h1>

        <p style={{
          fontSize: "1.05rem", color: "#8892b0",
          maxWidth: "480px", marginBottom: "2.5rem",
          fontWeight: 300, lineHeight: 1.8,
        }}>
          We design and develop high-performance websites and seamless payment
          integrations that help startups and businesses grow faster.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="/contact" style={{
            padding: "0.8rem 2rem",
            background: "#00c9ff",
            color: "#0a0f2e",
            borderRadius: "6px",
            fontSize: "0.9rem", fontWeight: 500,
            textDecoration: "none",
          }}>
            Get Started
          </a>
          <a href="https://wa.me/254737847921" target="_blank" rel="noopener noreferrer" style={{
            padding: "0.8rem 2rem",
            background: "transparent",
            color: "#e8eeff",
            border: "0.5px solid rgba(255,255,255,0.2)",
            borderRadius: "6px",
            fontSize: "0.9rem", fontWeight: 400,
            textDecoration: "none",
          }}>
            Talk to Us &rarr;
          </a>
        </div>
      </div>

      {/* Right — mockup */}
      <div className="hero-visual" style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
      }}>

        <div style={{
          width: "320px",
          height: "220px",
          background: "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)",
          borderRadius: "24px",
          position: "absolute",
          top: "20px",
          left: "20px",
          boxShadow: "0 0 40px rgba(56,189,248,0.5), 0 0 80px rgba(56,189,248,0.25), 0 20px 60px rgba(0,0,0,0.3)",
        }} />

        {/* Small card — dark with bright cyan glow */}
        <div style={{
          width: "200px",
          height: "150px",
          background: "#020617",
          border: "1px solid rgba(0,201,255,0.3)",
          borderRadius: "20px",
          position: "absolute",
          bottom: "10px",
          right: "10px",
          boxShadow: "0 0 30px rgba(0,201,255,0.35), 0 0 60px rgba(0,201,255,0.15), 0 20px 40px rgba(0,0,0,0.4)",
        }} />
        </div>

      <style>{`
        @media (max-width: 900px) {
          section#home {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-visual { margin-top: 2rem; }
        }
        @media (max-width: 640px) {
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  )
}