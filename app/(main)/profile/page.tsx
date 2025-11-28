"use client"

import { useState } from "react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("compras")

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#faf9f8" }}>
      {/* Header */}
      <header style={{ backgroundColor: "white", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              backgroundColor: "#2E7D32",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "2rem",
              fontWeight: 600,
            }}
          >
            JD
          </div>
          <div>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#4A4A4A", margin: "0 0 0.5rem 0" }}>
              Juan Díaz
            </h1>
            <p style={{ fontSize: "0.875rem", color: "#999", margin: 0 }}>Lima, San Isidro</p>
            <div style={{ fontSize: "0.875rem", color: "#2E7D32", fontWeight: 600, marginTop: "0.5rem" }}>
              ⭐ 4.8 (42 compras)
            </div>
          </div>
        </div>

        {/* Impact */}
        <div
          style={{
            backgroundColor: "#F0F9F0",
            borderRadius: "0.5rem",
            padding: "1rem",
            marginTop: "1rem",
          }}
        >
          <p style={{ fontSize: "0.875rem", color: "#2E7D32", fontWeight: 600, margin: "0 0 0.5rem 0" }}>
            🌍 Tu Impacto Ambiental
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div>
              <p style={{ fontSize: "1.25rem", fontWeight: 700, color: "#2E7D32", margin: 0 }}>50</p>
              <p style={{ fontSize: "0.75rem", color: "#999", margin: 0 }}>kg CO₂ ahorrados</p>
            </div>
            <div>
              <p style={{ fontSize: "1.25rem", fontWeight: 700, color: "#2E7D32", margin: 0 }}>10k</p>
              <p style={{ fontSize: "0.75rem", color: "#999", margin: 0 }}>L agua conservados</p>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #E8E8E8",
          backgroundColor: "white",
          padding: "0 1rem",
        }}
      >
        {["compras", "ventas", "favoritos", "impacto"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1,
              padding: "1rem",
              border: "none",
              backgroundColor: "transparent",
              color: activeTab === tab ? "#2E7D32" : "#999",
              fontWeight: activeTab === tab ? 600 : 400,
              borderBottom: activeTab === tab ? "3px solid #2E7D32" : "none",
              cursor: "pointer",
              textTransform: "capitalize",
              fontSize: "0.875rem",
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "1rem", marginBottom: "5rem" }}>
        {activeTab === "compras" && (
          <div>
            <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#4A4A4A", marginBottom: "1rem" }}>
              Tus compras
            </h3>
            <div
              style={{
                backgroundColor: "white",
                padding: "1.5rem",
                borderRadius: "0.5rem",
                textAlign: "center",
                color: "#999",
              }}
            >
              No hay compras aún
            </div>
          </div>
        )}
        {activeTab === "ventas" && (
          <div>
            <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#4A4A4A", marginBottom: "1rem" }}>
              Tus ventas
            </h3>
            <div
              style={{
                backgroundColor: "white",
                padding: "1.5rem",
                borderRadius: "0.5rem",
                textAlign: "center",
                color: "#999",
              }}
            >
              No hay ventas aún
            </div>
          </div>
        )}
        {activeTab === "favoritos" && (
          <div>
            <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#4A4A4A", marginBottom: "1rem" }}>
              Favoritos guardados
            </h3>
            <div
              style={{
                backgroundColor: "white",
                padding: "1.5rem",
                borderRadius: "0.5rem",
                textAlign: "center",
                color: "#999",
              }}
            >
              No hay favoritos aún
            </div>
          </div>
        )}
        {activeTab === "impacto" && (
          <div>
            <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#4A4A4A", marginBottom: "1rem" }}>
              Resumen de impacto
            </h3>
            <div
              style={{ backgroundColor: "white", padding: "1rem", borderRadius: "0.5rem", border: "1px solid #E8E8E8" }}
            >
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ fontSize: "0.875rem", color: "#999", margin: "0 0 0.5rem 0" }}>CO₂ ahorrado</p>
                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    backgroundColor: "#E8E8E8",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ width: "50%", height: "100%", backgroundColor: "#2E7D32" }} />
                </div>
              </div>
              <div>
                <p style={{ fontSize: "0.875rem", color: "#999", margin: "0 0 0.5rem 0" }}>Agua conservada</p>
                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    backgroundColor: "#E8E8E8",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ width: "60%", height: "100%", backgroundColor: "#FFB74D" }} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Settings */}
      <div
        style={{
          padding: "1rem",
          position: "fixed",
          bottom: "5.5rem",
          left: 0,
          right: 0,
          backgroundColor: "white",
          borderTop: "1px solid #E8E8E8",
        }}
      >
        <button
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
            border: "none",
            backgroundColor: "#FFF7F0",
            color: "#FFB74D",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  )
}
