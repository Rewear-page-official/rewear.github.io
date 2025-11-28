"use client"

import { useState } from "react"
import Link from "next/link"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const products = [
    {
      id: 1,
      title: "Jean Azul Mom",
      price: 35,
      image: "/jean-azul-mujer-segunda-mano.jpg",
      condition: "Como nueva",
      location: "San Isidro",
      co2Saved: 2.5,
    },
    {
      id: 2,
      title: "Blusa Blanca Clásica",
      price: 25,
      image: "/blusa-blanca-elegante.jpg",
      condition: "Poco uso",
      location: "Miraflores",
      co2Saved: 1.8,
    },
    {
      id: 3,
      title: "Casaca de Cuero Negra",
      price: 65,
      image: "/casaca-cuero-negra.jpg",
      condition: "Usada",
      location: "La Molina",
      co2Saved: 3.2,
    },
    {
      id: 4,
      title: "Falda Negra Midi",
      price: 30,
      image: "/falda-negra-midi.jpg",
      condition: "Como nueva",
      location: "Barranco",
      co2Saved: 2.1,
    },
  ]

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#faf9f8" }}>
      {/* Header */}
      <header style={{ backgroundColor: "white", padding: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto" }}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2E7D32", margin: "0 0 0.5rem 0" }}>
            Rewear
          </h1>
          <p style={{ fontSize: "0.875rem", color: "#4A4A4A", margin: 0 }}>📍 Lima, San Isidro</p>
        </div>
      </header>

      {/* Banner */}
      <div
        style={{
          backgroundColor: "#2E7D32",
          color: "white",
          padding: "1.5rem",
          margin: "1rem",
          borderRadius: "0.75rem",
        }}
      >
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, margin: "0 0 0.5rem 0" }}>Ofertas de la Semana</h2>
        <p style={{ fontSize: "0.875rem", margin: 0 }}>Encuentra ropa de calidad a precios accesibles</p>
      </div>

      {/* Categories */}
      <div style={{ padding: "0 1rem", marginBottom: "1.5rem", overflowX: "auto" }}>
        <div style={{ display: "flex", gap: "0.5rem", minWidth: "min-content" }}>
          {["Mujer", "Hombre", "Niños", "Unisex"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "2rem",
                border: "none",
                backgroundColor: selectedCategory === cat ? "#2E7D32" : "#E8E8E8",
                color: selectedCategory === cat ? "white" : "#4A4A4A",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div style={{ padding: "0 1rem", marginBottom: "5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  transition: "transform 0.2s ease",
                  cursor: "pointer",
                }}
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    backgroundColor: "#f0f0f0",
                  }}
                />
                <div style={{ padding: "0.75rem" }}>
                  <h3 style={{ fontSize: "0.875rem", fontWeight: 600, margin: "0 0 0.25rem 0", color: "#4A4A4A" }}>
                    {product.title}
                  </h3>
                  <p style={{ fontSize: "1.125rem", fontWeight: 700, color: "#2E7D32", margin: "0.25rem 0" }}>
                    S/ {product.price}
                  </p>
                  <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        backgroundColor: "#F0F9F0",
                        color: "#2E7D32",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "0.25rem",
                      }}
                    >
                      {product.condition}
                    </span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        backgroundColor: "#fff7f0",
                        color: "#FF8C42",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "0.25rem",
                      }}
                    >
                      {product.location}
                    </span>
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#999", marginTop: "0.5rem" }}>
                    🌱 -{product.co2Saved} kg CO₂
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
