"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    district: "San Juan de Miraflores",
    terms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, value } = e.target as HTMLInputElement
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    // Sin validación, solo navega a home
    router.push("/home")
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF7F0",
        padding: "20px",
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: "30px" }}>
        <Image src="/rewear-logo.png" alt="Rewear Logo" width={70} height={70} priority />
      </div>

      <h1 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "8px", color: "#1a1a1a" }}>Crea tu cuenta</h1>
      <p style={{ color: "#666", marginBottom: "24px", fontSize: "14px", textAlign: "center" }}>
        Únete a la comunidad sostenible
      </p>

      {/* Formulario */}
      <form
        onSubmit={handleRegister}
        style={{
          width: "100%",
          maxWidth: "360px",
        }}
      >
        {/* Nombre */}
        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", fontSize: "13px", fontWeight: "500", marginBottom: "6px", color: "#333" }}>
            Nombre completo
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: "14px",
              border: "2px solid #E0E0E0",
              borderRadius: "8px",
              boxSizing: "border-box",
              fontFamily: "Poppins, sans-serif",
            }}
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", fontSize: "13px", fontWeight: "500", marginBottom: "6px", color: "#333" }}>
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: "14px",
              border: "2px solid #E0E0E0",
              borderRadius: "8px",
              boxSizing: "border-box",
              fontFamily: "Poppins, sans-serif",
            }}
          />
        </div>

        {/* Teléfono */}
        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", fontSize: "13px", fontWeight: "500", marginBottom: "6px", color: "#333" }}>
            Celular
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+51 999 999 999"
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: "14px",
              border: "2px solid #E0E0E0",
              borderRadius: "8px",
              boxSizing: "border-box",
              fontFamily: "Poppins, sans-serif",
            }}
          />
        </div>

        {/* Distrito */}
        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", fontSize: "13px", fontWeight: "500", marginBottom: "6px", color: "#333" }}>
            Distrito en Lima
          </label>
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: "14px",
              border: "2px solid #E0E0E0",
              borderRadius: "8px",
              boxSizing: "border-box",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <option>San Juan de Miraflores</option>
            <option>Miraflores</option>
            <option>Lima Centro</option>
            <option>Surco</option>
            <option>San Isidro</option>
            <option>Barranco</option>
            <option>Cercado</option>
            <option>Chorrillos</option>
            <option>Rímac</option>
          </select>
        </div>

        {/* Contraseña */}
        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", fontSize: "13px", fontWeight: "500", marginBottom: "6px", color: "#333" }}>
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: "14px",
              border: "2px solid #E0E0E0",
              borderRadius: "8px",
              boxSizing: "border-box",
              fontFamily: "Poppins, sans-serif",
            }}
          />
        </div>

        {/* Confirmar contraseña */}
        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", fontSize: "13px", fontWeight: "500", marginBottom: "6px", color: "#333" }}>
            Confirmar contraseña
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: "14px",
              border: "2px solid #E0E0E0",
              borderRadius: "8px",
              boxSizing: "border-box",
              fontFamily: "Poppins, sans-serif",
            }}
          />
        </div>

        {/* Terms */}
        <div style={{ marginBottom: "16px", display: "flex", alignItems: "flex-start", gap: "8px" }}>
          <input
            type="checkbox"
            name="terms"
            id="terms"
            checked={formData.terms}
            onChange={handleChange}
            style={{ marginTop: "2px", cursor: "pointer" }}
          />
          <label htmlFor="terms" style={{ fontSize: "12px", color: "#666", cursor: "pointer" }}>
            Acepto los términos y condiciones y la política de privacidad
          </label>
        </div>

        {/* Botón principal */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px 16px",
            backgroundColor: "#2E7D32",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            marginBottom: "12px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Crear cuenta
        </button>
      </form>

      {/* Link a login */}
      <div style={{ marginTop: "16px", textAlign: "center" }}>
        <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>
          ¿Ya tienes cuenta?{" "}
          <Link
            href="/login"
            style={{
              color: "#2E7D32",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  )
}
