"use client"

import { useState } from "react"

export default function SellPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    size: "",
    condition: "poco-uso",
  })

  const handleNext = () => {
    if (step < 5) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#4A4A4A", marginBottom: "1rem" }}>
              Paso 1: Subir fotos
            </h2>
            <div
              style={{
                border: "2px dashed #2E7D32",
                borderRadius: "0.75rem",
                padding: "2rem",
                textAlign: "center",
                backgroundColor: "#F0F9F0",
                cursor: "pointer",
              }}
            >
              <p style={{ color: "#2E7D32", fontWeight: 600 }}>Haz clic para subir fotos</p>
              <p style={{ fontSize: "0.875rem", color: "#999" }}>Selecciona 3-5 fotos de tu prenda</p>
            </div>
          </div>
        )
      case 2:
        return (
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#4A4A4A", marginBottom: "1rem" }}>
              Paso 2: Información básica
            </h2>
            <input
              type="text"
              placeholder="Título de la prenda"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                border: "2px solid #E8E8E8",
                marginBottom: "1rem",
                fontSize: "0.875rem",
              }}
            />
            <textarea
              placeholder="Describe tu prenda"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                border: "2px solid #E8E8E8",
                marginBottom: "1rem",
                fontSize: "0.875rem",
                minHeight: "100px",
              }}
            />
          </div>
        )
      case 3:
        return (
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#4A4A4A", marginBottom: "1rem" }}>
              Paso 3: Detalles
            </h2>
            <input
              type="text"
              placeholder="Talla"
              value={formData.size}
              onChange={(e) => setFormData({ ...formData, size: e.target.value })}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                border: "2px solid #E8E8E8",
                marginBottom: "1rem",
                fontSize: "0.875rem",
              }}
            />
            <select
              value={formData.condition}
              onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                border: "2px solid #E8E8E8",
                marginBottom: "1rem",
                fontSize: "0.875rem",
              }}
            >
              <option value="nuevo">Nuevo con etiqueta</option>
              <option value="como-nuevo">Como nuevo</option>
              <option value="poco-uso">Poco uso</option>
              <option value="usado">Usado</option>
            </select>
          </div>
        )
      case 4:
        return (
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#4A4A4A", marginBottom: "1rem" }}>
              Paso 4: Precio
            </h2>
            <input
              type="number"
              placeholder="Precio en S/"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                border: "2px solid #E8E8E8",
                marginBottom: "1rem",
                fontSize: "0.875rem",
              }}
            />
            <p
              style={{
                fontSize: "0.875rem",
                color: "#999",
                backgroundColor: "#F0F9F0",
                padding: "0.75rem",
                borderRadius: "0.5rem",
              }}
            >
              💡 Sugerencia: Revisa precios similares en la app para competir mejor
            </p>
          </div>
        )
      case 5:
        return (
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#4A4A4A", marginBottom: "1rem" }}>
              Paso 5: Confirmación
            </h2>
            <div
              style={{ backgroundColor: "white", padding: "1rem", borderRadius: "0.5rem", border: "1px solid #E8E8E8" }}
            >
              <p style={{ margin: "0.5rem 0", fontSize: "0.875rem" }}>
                <strong>Título:</strong> {formData.title || "Sin especificar"}
              </p>
              <p style={{ margin: "0.5rem 0", fontSize: "0.875rem" }}>
                <strong>Precio:</strong> S/ {formData.price || "0"}
              </p>
              <p style={{ margin: "0.5rem 0", fontSize: "0.875rem" }}>
                <strong>Talla:</strong> {formData.size || "Sin especificar"}
              </p>
              <p style={{ margin: "0.5rem 0", fontSize: "0.875rem" }}>
                <strong>Estado:</strong> {formData.condition}
              </p>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#faf9f8" }}>
      {/* Header */}
      <header style={{ backgroundColor: "white", padding: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2E7D32", margin: 0 }}>Vender</h1>
      </header>

      {/* Progress Bar */}
      <div style={{ padding: "1rem", display: "flex", gap: "0.5rem" }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: "4px",
              borderRadius: "2px",
              backgroundColor: i <= step ? "#2E7D32" : "#E8E8E8",
              transition: "background-color 0.2s ease",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "1rem", marginBottom: "2rem" }}>{renderStep()}</div>

      {/* Buttons */}
      <div
        style={{
          padding: "1rem",
          display: "flex",
          gap: "1rem",
          position: "fixed",
          bottom: "5rem",
          left: 0,
          right: 0,
          backgroundColor: "white",
          boxShadow: "0 -2px 8px rgba(0,0,0,0.08)",
        }}
      >
        <button
          onClick={handleBack}
          disabled={step === 1}
          style={{
            flex: 1,
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
            border: "2px solid #E8E8E8",
            backgroundColor: "white",
            color: "#4A4A4A",
            cursor: step === 1 ? "not-allowed" : "pointer",
            fontWeight: 600,
            opacity: step === 1 ? 0.5 : 1,
          }}
        >
          Atrás
        </button>
        <button
          onClick={handleNext}
          style={{
            flex: 1,
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
            border: "none",
            backgroundColor: "#2E7D32",
            color: "white",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          {step === 5 ? "Publicar prenda" : "Siguiente"}
        </button>
      </div>
    </div>
  )
}
