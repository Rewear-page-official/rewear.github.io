"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const mockProducts: Record<
  string,
  {
    id: string
    title: string
    price: number
    condition: string
    size: string
    brand: string
    district: string
    seller: string
    sellerRating: number
    sellerSales: number
    description: string
    material: string
    color: string
    savedCO2: number
    savedWater: number
    reviews: Array<{
      author: string
      rating: number
      comment: string
    }>
  }
> = {
  "1": {
    id: "1",
    title: "Jean Mom Azul - Poco Uso",
    price: 45,
    condition: "Poco uso",
    size: "M",
    brand: "Levi's",
    district: "San Juan de Miraflores",
    seller: "Andrea M.",
    sellerRating: 4.8,
    sellerSales: 23,
    description: "Jean perfecto para el día. Usado solo 3 veces, sin manchas ni defectos. Muy cómodo y versátil.",
    material: "Algodón 100%",
    color: "Azul oscuro",
    savedCO2: 2.5,
    savedWater: 1850,
    reviews: [
      {
        author: "María G.",
        rating: 5,
        comment: "Excelente calidad, tal como se veía en las fotos. Muy recomendado.",
      },
      {
        author: "Carlos R.",
        rating: 5,
        comment: "Llegó en perfectas condiciones. El vendedor muy amable.",
      },
    ],
  },
  "2": {
    id: "2",
    title: "Blusa Blanca Clásica",
    price: 28,
    condition: "Como nueva",
    size: "S",
    brand: "Zara",
    district: "Miraflores",
    seller: "Sofia L.",
    sellerRating: 4.9,
    sellerSales: 45,
    description: "Blusa de lino blanco, elegante y fresca. Perfecta para cualquier ocasión.",
    material: "Lino 100%",
    color: "Blanco",
    savedCO2: 1.8,
    savedWater: 1200,
    reviews: [
      {
        author: "Juana P.",
        rating: 5,
        comment: "Precioso, llegó perfecto y con envío rápido.",
      },
    ],
  },
  "3": {
    id: "3",
    title: "Casaca Cuero Negra",
    price: 120,
    condition: "Usado",
    size: "L",
    brand: "Zara",
    district: "Surco",
    seller: "Jorge M.",
    sellerRating: 4.7,
    sellerSales: 18,
    description: "Casaca de cuero genuino en excelente estado. Con pequeños usos normales. Muy cómoda y elegante.",
    material: "Cuero genuino",
    color: "Negro",
    savedCO2: 5.2,
    savedWater: 4500,
    reviews: [
      {
        author: "Roberto H.",
        rating: 5,
        comment: "Casaca de buena calidad. Vendedor confiable.",
      },
    ],
  },
  "4": {
    id: "4",
    title: "Falda Negra Midi",
    price: 35,
    condition: "Como nueva",
    size: "M",
    brand: "H&M",
    district: "Lima Centro",
    seller: "Daniela V.",
    sellerRating: 4.9,
    sellerSales: 31,
    description: "Falda midi negra con cintura elástica. Nunca usada, con etiqueta. Perfecta para ocasiones formales.",
    material: "Poliéster",
    color: "Negro",
    savedCO2: 1.5,
    savedWater: 1000,
    reviews: [
      {
        author: "Patricia C.",
        rating: 5,
        comment: "Nueva con etiqueta. Impecable, muy recomendado.",
      },
    ],
  },
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const product = mockProducts[params.id]
  const [isFavorite, setIsFavorite] = useState(false)

  if (!product) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFF7F0",
        }}
      >
        <p style={{ color: "#666" }}>Producto no encontrado</p>
        <Link href="/home" style={{ color: "#2E7D32", marginTop: "16px" }}>
          Volver al inicio
        </Link>
      </div>
    )
  }

  const conditionColors: Record<string, string> = {
    "Como nueva": "#E8F5E9",
    "Poco uso": "#FFF9C4",
    Usado: "#FFCCBC",
  }

  return (
    <div style={{ backgroundColor: "#FFF7F0", minHeight: "100vh", paddingBottom: "140px" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 16px 12px",
          backgroundColor: "white",
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        <button
          onClick={() => router.back()}
          style={{
            background: "none",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            color: "#2E7D32",
          }}
        >
          ←
        </button>
        <h2 style={{ margin: 0, fontSize: "16px", fontWeight: "600", color: "#1a1a1a" }}>Detalles</h2>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          style={{
            background: "none",
            border: "none",
            fontSize: "22px",
            cursor: "pointer",
            color: isFavorite ? "#FF6B6B" : "#CCC",
          }}
        >
          ♥
        </button>
      </div>

      {/* Imagen del producto */}
      <div
        style={{
          width: "100%",
          height: "300px",
          backgroundColor: "#E0E0E0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={`/.jpg?key=hb04b&height=300&width=400&query=${product.title}`}
          alt={product.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Información principal */}
      <div style={{ padding: "20px 16px", backgroundColor: "white", marginBottom: "12px" }}>
        <div style={{ marginBottom: "12px" }}>
          <h1 style={{ margin: "0 0 8px", fontSize: "22px", fontWeight: "600", color: "#1a1a1a" }}>{product.title}</h1>
          <p style={{ margin: 0, color: "#666", fontSize: "13px" }}>
            {product.brand} • Talla {product.size}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "12px",
          }}
        >
          <div>
            <p style={{ margin: "0 0 4px", color: "#999", fontSize: "12px" }}>Precio</p>
            <p
              style={{
                margin: 0,
                fontSize: "28px",
                fontWeight: "700",
                color: "#2E7D32",
              }}
            >
              S/ {product.price}
            </p>
          </div>
          <div
            style={{
              backgroundColor: conditionColors[product.condition],
              padding: "6px 12px",
              borderRadius: "6px",
              textAlign: "center",
            }}
          >
            <p style={{ margin: 0, fontSize: "12px", fontWeight: "500", color: "#333" }}>{product.condition}</p>
          </div>
        </div>

        <p style={{ margin: 0, color: "#999", fontSize: "12px" }}>📍 {product.district}</p>
      </div>

      {/* Descripción */}
      <div style={{ padding: "16px", backgroundColor: "white", marginBottom: "12px" }}>
        <h3 style={{ margin: "0 0 8px", fontSize: "14px", fontWeight: "600", color: "#1a1a1a" }}>Descripción</h3>
        <p style={{ margin: 0, color: "#666", fontSize: "13px", lineHeight: "1.5" }}>{product.description}</p>
      </div>

      {/* Detalles */}
      <div style={{ padding: "16px", backgroundColor: "white", marginBottom: "12px" }}>
        <h3 style={{ margin: "0 0 12px", fontSize: "14px", fontWeight: "600", color: "#1a1a1a" }}>Detalles</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <div>
            <p style={{ margin: "0 0 4px", fontSize: "12px", color: "#999" }}>Material</p>
            <p style={{ margin: 0, fontSize: "13px", fontWeight: "500", color: "#333" }}>{product.material}</p>
          </div>
          <div>
            <p style={{ margin: "0 0 4px", fontSize: "12px", color: "#999" }}>Color</p>
            <p style={{ margin: 0, fontSize: "13px", fontWeight: "500", color: "#333" }}>{product.color}</p>
          </div>
        </div>
      </div>

      {/* Impacto ambiental */}
      <div
        style={{
          padding: "16px",
          backgroundColor: "#F0F9F0",
          marginBottom: "12px",
          borderRadius: "8px",
          margin: "12px 16px",
        }}
      >
        <h3 style={{ margin: "0 0 12px", fontSize: "14px", fontWeight: "600", color: "#2E7D32" }}>
          Impacto Ambiental 🌱
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #E0E0E0",
            }}
          >
            <p style={{ margin: 0, fontSize: "12px", color: "#999" }}>CO₂ Ahorrado</p>
            <p style={{ margin: "4px 0 0", fontSize: "16px", fontWeight: "600", color: "#2E7D32" }}>
              {product.savedCO2} kg
            </p>
          </div>
          <div
            style={{
              backgroundColor: "white",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #E0E0E0",
            }}
          >
            <p style={{ margin: 0, fontSize: "12px", color: "#999" }}>Agua Ahorrada</p>
            <p style={{ margin: "4px 0 0", fontSize: "16px", fontWeight: "600", color: "#2E7D32" }}>
              {product.savedWater} L
            </p>
          </div>
        </div>
      </div>

      {/* Vendedor */}
      <div
        style={{
          padding: "16px",
          backgroundColor: "white",
          marginBottom: "12px",
          borderTop: "1px solid #E0E0E0",
        }}
      >
        <h3 style={{ margin: "0 0 12px", fontSize: "14px", fontWeight: "600", color: "#1a1a1a" }}>Vendedor</h3>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ margin: 0, fontSize: "14px", fontWeight: "500", color: "#1a1a1a" }}>{product.seller}</p>
            <div style={{ display: "flex", gap: "8px", marginTop: "4px", alignItems: "center" }}>
              <span style={{ fontSize: "12px", color: "#FFB74D" }}>★★★★★</span>
              <span style={{ fontSize: "12px", color: "#666" }}>
                {product.sellerRating} • {product.sellerSales} ventas
              </span>
            </div>
          </div>
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#F5F5F5",
              border: "1px solid #E0E0E0",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "500",
              color: "#666",
            }}
          >
            Ver perfil
          </button>
        </div>
      </div>

      {/* Reseñas */}
      <div style={{ padding: "16px", backgroundColor: "white", marginBottom: "12px" }}>
        <h3 style={{ margin: "0 0 12px", fontSize: "14px", fontWeight: "600", color: "#1a1a1a" }}>Reseñas</h3>
        {product.reviews.map((review, idx) => (
          <div
            key={idx}
            style={{
              paddingBottom: "12px",
              borderBottom: idx < product.reviews.length - 1 ? "1px solid #E0E0E0" : "none",
              marginBottom: idx < product.reviews.length - 1 ? "12px" : 0,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <p style={{ margin: 0, fontSize: "13px", fontWeight: "500", color: "#1a1a1a" }}>{review.author}</p>
              <span style={{ fontSize: "12px", color: "#FFB74D" }}>{"★".repeat(review.rating)}</span>
            </div>
            <p style={{ margin: "6px 0 0", fontSize: "12px", color: "#666" }}>{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Botones de acción - Fixed Bottom */}
      <div
        style={{
          position: "fixed",
          bottom: "80px",
          left: 0,
          right: 0,
          backgroundColor: "white",
          padding: "12px 16px",
          display: "flex",
          gap: "12px",
          borderTop: "1px solid #E0E0E0",
          boxShadow: "0 -2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <button
          style={{
            flex: 1,
            padding: "12px 16px",
            backgroundColor: "white",
            border: "2px solid #2E7D32",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "600",
            color: "#2E7D32",
            cursor: "pointer",
          }}
        >
          💬 Contactar
        </button>
        <button
          style={{
            flex: 2,
            padding: "12px 16px",
            backgroundColor: "#2E7D32",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          🛍️ Comprar ahora
        </button>
      </div>
    </div>
  )
}
