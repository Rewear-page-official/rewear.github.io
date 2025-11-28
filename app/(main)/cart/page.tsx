"use client"

import { useState } from "react"
import Link from "next/link"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Jean Azul Mom",
      price: 35,
      size: "M",
      condition: "Como nueva",
      seller: "Andrea M.",
      image: "/jean-azul.jpg",
    },
    {
      id: 2,
      title: "Blusa Blanca Clásica",
      price: 25,
      size: "S",
      condition: "Poco uso",
      seller: "Sofia L.",
      image: "/blusa-blanca.jpg",
    },
  ])

  const [deliveryMethod, setDeliveryMethod] = useState("delivery")
  const [paymentMethod, setPaymentMethod] = useState("yape")

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const shippingCost = deliveryMethod === "delivery" ? 8 : 0
  const total = subtotal + shippingCost

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#faf9f8" }}>
      {/* Header */}
      <header style={{ backgroundColor: "white", padding: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2E7D32", margin: 0 }}>Carrito</h1>
      </header>

      {/* Cart Items */}
      <div style={{ padding: "1rem", marginBottom: "1.5rem" }}>
        {cartItems.length === 0 ? (
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem 1rem",
              borderRadius: "0.5rem",
              textAlign: "center",
              color: "#999",
            }}
          >
            <p>Tu carrito está vacío</p>
            <Link
              href="/home"
              style={{
                color: "#2E7D32",
                textDecoration: "none",
                fontWeight: 600,
                marginTop: "1rem",
                display: "inline-block",
              }}
            >
              Seguir comprando
            </Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "1rem",
                backgroundColor: "white",
                padding: "1rem",
                borderRadius: "0.5rem",
                marginBottom: "0.75rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                  backgroundColor: "#f0f0f0",
                }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "0.875rem", fontWeight: 600, margin: "0 0 0.25rem 0", color: "#4A4A4A" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.75rem", color: "#999", margin: "0.25rem 0" }}>
                  Talla: {item.size} • {item.condition}
                </p>
                <p style={{ fontSize: "0.75rem", color: "#999", margin: "0.25rem 0 0.5rem 0" }}>
                  Vendedor: {item.seller}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <p style={{ fontSize: "1rem", fontWeight: 700, color: "#2E7D32", margin: 0 }}>S/ {item.price}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#FF6B6B",
                      cursor: "pointer",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <>
          {/* Delivery Method */}
          <div
            style={{
              padding: "1rem",
              backgroundColor: "white",
              marginBottom: "1rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#4A4A4A", marginBottom: "0.75rem" }}>
              Método de Entrega
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                <input
                  type="radio"
                  name="delivery"
                  value="delivery"
                  checked={deliveryMethod === "delivery"}
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                  style={{ cursor: "pointer" }}
                />
                <span style={{ fontSize: "0.875rem", color: "#4A4A4A" }}>Delivery (+S/ 8.00)</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                <input
                  type="radio"
                  name="delivery"
                  value="pickup"
                  checked={deliveryMethod === "pickup"}
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                  style={{ cursor: "pointer" }}
                />
                <span style={{ fontSize: "0.875rem", color: "#4A4A4A" }}>Punto de recojo (Gratis)</span>
              </label>
            </div>
          </div>

          {/* Summary */}
          <div
            style={{
              padding: "1rem",
              backgroundColor: "white",
              marginBottom: "1rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#4A4A4A", marginBottom: "0.75rem" }}>
              Resumen
            </h3>
            <div
              style={{
                fontSize: "0.875rem",
                color: "#666",
                marginBottom: "0.5rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Subtotal:</span>
              <span>S/ {subtotal.toFixed(2)}</span>
            </div>
            <div
              style={{
                fontSize: "0.875rem",
                color: "#666",
                marginBottom: "0.75rem",
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #E8E8E8",
                paddingBottom: "0.75rem",
              }}
            >
              <span>Envío:</span>
              <span>S/ {shippingCost.toFixed(2)}</span>
            </div>
            <div
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#2E7D32",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Total:</span>
              <span>S/ {total.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div
            style={{
              padding: "1rem",
              backgroundColor: "white",
              marginBottom: "1rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#4A4A4A", marginBottom: "0.75rem" }}>
              Método de Pago
            </h3>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {[
                { id: "yape", label: "Yape", icon: "📱" },
                { id: "plin", label: "Plin", icon: "📲" },
                { id: "card", label: "Tarjeta", icon: "💳" },
              ].map((method) => (
                <button
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  style={{
                    flex: 1,
                    padding: "0.75rem",
                    borderRadius: "0.5rem",
                    border: paymentMethod === method.id ? "2px solid #2E7D32" : "2px solid #E8E8E8",
                    backgroundColor: paymentMethod === method.id ? "#F0F9F0" : "white",
                    cursor: "pointer",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#4A4A4A",
                  }}
                >
                  {method.icon} {method.label}
                </button>
              ))}
            </div>
          </div>

          {/* Address */}
          <div
            style={{
              padding: "1rem",
              backgroundColor: "white",
              marginBottom: "5rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#4A4A4A", marginBottom: "0.75rem" }}>
              Dirección de Entrega
            </h3>
            <div
              style={{
                backgroundColor: "#F0F9F0",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                marginBottom: "0.75rem",
              }}
            >
              <p style={{ margin: 0, fontSize: "0.875rem", fontWeight: 500, color: "#4A4A4A" }}>
                📍 Av. Paseo de la República 3200, San Isidro
              </p>
            </div>
            <button
              style={{
                width: "100%",
                padding: "0.5rem",
                backgroundColor: "transparent",
                border: "2px solid #E8E8E8",
                borderRadius: "0.5rem",
                color: "#2E7D32",
                cursor: "pointer",
                fontSize: "0.875rem",
                fontWeight: 600,
              }}
            >
              Cambiar dirección
            </button>
          </div>

          {/* Confirm Button */}
          <div
            style={{
              position: "fixed",
              bottom: "5rem",
              left: 0,
              right: 0,
              padding: "1rem",
              backgroundColor: "white",
              boxShadow: "0 -2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <button
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                backgroundColor: "#2E7D32",
                color: "white",
                border: "none",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Confirmar compra
            </button>
          </div>
        </>
      )}
    </div>
  )
}
