// "use client"
// import Link from "next/link"

// const projects = [
//   {
//     title: "Lakeside Commerce",
//     description: "The commerce platform built for Kenyan businesses.",
//     href: "https://lakesidecommerce.vercel.app/",
//     status: "Live",
//     features: [
//         "Sell Online - Create products, manage variants, and give customers a complete shopping experience.",

//         "M-Pesa Payments - Accept payments directly through M-Pesa STK Push.",

//         "Inventory Management - Monitor stock levels, identify low-stock products, and adjust inventory.",

//         "Order Management - Track orders from checkout through fulfillment.",

//         "Business Reports - Monitor revenue, paid orders, average order value, best sellers, dead stock, and M-Pesa performance.",

//         "Customer & Admin Management - Manage customers, products, orders, and your store from one dashboard.",

//         "Delivery & Location -  Use maps and location information to support delivery workflows."
//     ],
//   },
// ]

// export default function ProductsPage() {
//   return (
//     <section style={{ padding: "7rem 2rem 5rem", maxWidth: "1100px", margin: "0 auto" }}>
//       <p style={{
//         fontSize: "0.7rem", fontWeight: 500, letterSpacing: "2px",
//         textTransform: "uppercase", color: "#00c9ff", marginBottom: "1rem",
//       }}>
//         Our Products
//       </p>
//       <h1 style={{
//         fontFamily: "'Syne', sans-serif",
//         fontSize: "clamp(2rem, 5vw, 3.5rem)",
//         fontWeight: 800, letterSpacing: "-2px",
//         color: "#e8eeff", marginBottom: "1rem",
//       }}>
//         Products
//       </h1>
//       <p style={{
//         color: "#8892b0", fontSize: "1rem", fontWeight: 300,
//         lineHeight: 1.8, maxWidth: "520px", marginBottom: "4rem",
//       }}>
//         Software we've built to solve real business problems.
//       </p>

//       <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
//         {projects.map((project) => (
//           <div
//             key={project.title}
//             style={{
//               background: "#080d26",
//               border: "0.5px solid rgba(0,201,255,0.15)",
//               borderRadius: "16px",
//               padding: "2.5rem",
//               transition: "border-color 0.2s",
//             }}
//             onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(0,201,255,0.4)")}
//             onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(0,201,255,0.15)")}
//           >
//             <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
//               <h2 style={{
//                 fontFamily: "'Syne', sans-serif",
//                 fontSize: "1.3rem", fontWeight: 700,
//                 color: "#e8eeff", letterSpacing: "-0.5px",
//               }}>
//                 {project.title}
//               </h2>
//               <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//                 <span style={{
//                   width: 8, height: 8, borderRadius: "50%",
//                   background: "#22c55e", display: "inline-block",
//                 }} />
//                 <span style={{ fontSize: "0.75rem", color: "#22c55e", fontWeight: 500 }}>
//                   {project.status}
//                 </span>
//               </div>
//             </div>

//             <p style={{
//               color: "#8892b0", fontSize: "0.95rem",
//               lineHeight: 1.8, marginBottom: "1.5rem", fontWeight: 300,
//             }}>
//               {project.description}
//             </p>

//             {/* Features */}
//             <ul style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
//               gap: "0.5rem",
//               paddingLeft: "1.1rem",
//               marginBottom: "1.75rem",
//             }}>
//               {project.features.map((f) => (
//                 <li key={f} style={{ fontSize: "0.875rem", color: "#8892b0", lineHeight: 1.8 }}>
//                   {f}
//                 </li>
//               ))}
//             </ul>



//             {/* CTA */}

//             <Link
            
//               href={project.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 display: "inline-block",
//                 padding: "0.65rem 1.5rem",
//                 background: "#00c9ff",
//                 color: "#0a0f2e",
//                 borderRadius: "6px",
//                 fontSize: "0.875rem", fontWeight: 500,
//                 textDecoration: "none",
//               }}
//               >
//               Explore Project
//             </Link>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }
"use client"

const features = [
  {
    title: "Sell Online",
    description: "Create products, manage variants and give customers a complete shopping experience.",
    color: "#3b82f6",
    bg: "#1e3a5f",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
  },
  {
    title: "Inventory Management",
    description: "Track stock levels, identify low-stock products and manage inventory easily.",
    color: "#8b5cf6",
    bg: "#2e1f5e",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
  {
    title: "M-Pesa Payments",
    description: "Accept payments directly through M-Pesa STK Push securely and instantly.",
    color: "#10b981",
    bg: "#064e3b",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/>
      </svg>
    ),
  },
  {
    title: "Order Management",
    description: "Track orders from checkout through fulfillment and keep customers informed.",
    color: "#f59e0b",
    bg: "#451a03",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/>
      </svg>
    ),
  },
  {
    title: "Business Reports",
    description: "Monitor revenue, orders, sales performance and M-Pesa activity in one place.",
    color: "#ec4899",
    bg: "#500724",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    title: "Delivery & Location",
    description: "Use maps and location information to support delivery workflows and coverage.",
    color: "#06b6d4",
    bg: "#164e63",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
]

export default function ProductsPage() {
  return (
    <section style={{ padding: "4rem 2rem 6rem", maxWidth: "1100px", margin: "0 auto" }}>
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

      {/* Outer card */}
      <div style={{
        background: "#080d26",
        border: "0.5px solid rgba(0,201,255,0.15)",
        borderRadius: "20px",
        padding: "3rem",
      }}>

        {/* Top header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800, letterSpacing: "-1px",
              color: "#e8eeff", marginBottom: "0.5rem",
            }}>
              <span style={{ color: '#004AFF' }} >Lakeside </span>Commerce
            </h1>
            <p style={{ fontSize: "0.95rem", color: "#8892b0", fontWeight: 300 }}>
              The commerce platform built for Kenyan businesses.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
            <span style={{ fontSize: "0.875rem", color: "#22c55e", fontWeight: 500 }}>Live</span>
          </div>
        </div>

        {/* Center tagline */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 700, color: "#e8eeff",
            marginBottom: "0.75rem",
          }}>
            Everything you need to{" "}
            <span style={{ color: "#00c9ff" }}>sell and grow</span>
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#8892b0", fontWeight: 300 }}>
            Powerful features to run your online store and manage your business.
          </p>
        </div>

        {/* Features grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          marginBottom: "2.5rem",
        }} className="features-grid">
          {features.map(({ title, description, color, bg, icon }) => (
            <div
              key={title}
              style={{
                background: "#0d1333",
                border: "0.5px solid rgba(255,255,255,0.06)",
                borderRadius: "14px",
                padding: "1.5rem",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${color}40`
                ;(e.currentTarget as HTMLDivElement).style.background = "#111a3d"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)"
                ;(e.currentTarget as HTMLDivElement).style.background = "#0d1333"
              }}
            >
              {/* Icon */}
              <div style={{
                width: "44px", height: "44px",
                background: bg,
                borderRadius: "10px",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: color,
                flexShrink: 0,
              }}>
                {icon}
              </div>

              {/* Text */}
              <div>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.95rem", fontWeight: 600,
                  color: "#e8eeff", marginBottom: "0.4rem",
                }}>
                  {title}
                </h3>
                <p style={{ fontSize: "0.825rem", color: "#8892b0", lineHeight: 1.7 }}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          
          <a  href="https://lakesidecommerce.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "0.9rem 2.5rem",
              background: "#00c9ff",
              color: "#0a0f2e",
              borderRadius: "8px",
              fontSize: "1rem", fontWeight: 600,
              textDecoration: "none",
              marginBottom: "0.75rem",
            }}
          >
            Explore Lakeside Commerce
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
          <p style={{ fontSize: "0.8rem", color: "#8892b0" }}>See the platform in action</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}