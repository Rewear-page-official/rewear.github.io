"use client"

import Link from "next/link"

export default function MessagesPage() {
  const conversations = [
    {
      id: 1,
      name: "María García",
      lastMessage: "¿Aún disponible el jean?",
      unread: true,
      product: "Jean Azul Mom",
      productImage: "/jean-azul-mujer-segunda-mano.jpg",
      timestamp: "hace 5 min",
    },
    {
      id: 2,
      name: "Carlos López",
      lastMessage: "Perfecto, me interesa. ¿Dónde quedamos?",
      unread: false,
      product: "Blusa Blanca",
      productImage: "/blusa-blanca-elegante.jpg",
      timestamp: "ayer",
    },
    {
      id: 3,
      name: "Sofia Mendez",
      lastMessage: "¿Aceptas tarjeta?",
      unread: true,
      product: "Casaca de Cuero",
      productImage: "/casaca-cuero-negra.jpg",
      timestamp: "hace 2 días",
    },
  ]

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#faf9f8", paddingBottom: "5rem" }}>
      {/* Header */}
      <header style={{ backgroundColor: "white", padding: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2E7D32", margin: 0 }}>Mensajes</h1>
      </header>

      {/* Conversations */}
      <div style={{ padding: "1rem" }}>
        {conversations.map((conv) => (
          <Link
            key={conv.id}
            href={`/messages/${conv.id}`}
            style={{ textDecoration: "none", display: "block", marginBottom: "0.75rem" }}
          >
            <div
              style={{
                display: "flex",
                gap: "1rem",
                padding: "1rem",
                backgroundColor: "white",
                borderRadius: "0.5rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                borderLeft: conv.unread ? "4px solid #2E7D32" : "4px solid transparent",
              }}
            >
              <img
                src={conv.productImage || "/placeholder.svg"}
                alt={conv.product}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "0.5rem",
                  objectFit: "cover",
                  backgroundColor: "#f0f0f0",
                }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#4A4A4A", margin: "0 0 0.25rem 0" }}>
                  {conv.name}
                </h3>
                <p style={{ fontSize: "0.75rem", color: "#999", margin: 0 }}>Re: {conv.product}</p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: conv.unread ? "#2E7D32" : "#666",
                    margin: "0.25rem 0 0 0",
                    fontWeight: conv.unread ? 600 : 400,
                  }}
                >
                  {conv.lastMessage}
                </p>
              </div>
              <span style={{ fontSize: "0.75rem", color: "#999", whiteSpace: "nowrap" }}>{conv.timestamp}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
