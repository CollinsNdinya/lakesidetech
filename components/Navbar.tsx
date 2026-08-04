"use client"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Navbar() {
   const pathname = usePathname()

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "1rem 2rem",
      background: "rgba(10,15,46,0.93)",
      backdropFilter: "blur(14px)",
      borderBottom: "0.5px solid rgba(0,201,255,0.12)",
    }}>
      {/* Logo */}
      <Link href="/" style={{ textDecoration: "none" }}>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "1.25rem", fontWeight: 800,
          color: "#e8eeff", letterSpacing: "-0.5px",
        }}>
          Lakeside<span style={{ color: "#00c9ff" }}>TECH</span>
        </span>
      </Link>

      {/* Desktop links */}
      <ul style={{
        display: "flex", gap: "2rem", listStyle: "none",
        margin: 0, padding: 0,
      }} className="desktop-nav">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href} style={{
              fontSize: "0.875rem", color: "#8892b0",
              textDecoration: "none", transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#00c9ff")}
            onMouseLeave={e => (e.currentTarget.style.color = "#8892b0")}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#contact" style={{
        padding: "0.5rem 1.25rem",
        background: "transparent",
        border: "0.5px solid #00c9ff",
        color: "#00c9ff",
        borderRadius: "6px",
        fontSize: "0.875rem",
        textDecoration: "none",
        transition: "background 0.2s, color 0.2s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "#00c9ff"
        e.currentTarget.style.color = "#0a0f2e"
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "transparent"
        e.currentTarget.style.color = "#00c9ff"
      }}
      >
        Get Started
      </a>

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
