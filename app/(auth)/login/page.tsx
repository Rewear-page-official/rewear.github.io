"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
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
      <div style={{ marginBottom: "40px" }}>
        <Image src="/rewear-logo.png" alt="Rewear Logo" width={80} height={80} priority />
      </div>

      <h1 style={{ fontSize: "28px", fontWeight: "600", marginBottom: "10px", color: "#1a1a1a" }}>
        Bienvenido a Rewear
      </h1>
      <p style={{ color: "#666", marginBottom: "30px", fontSize: "14px", textAlign: "center" }}>
        Compra y vende ropa con confianza
      </p>

      {/* Formulario */}
      <form
        onSubmit={handleLogin}
        style={{
          width: "100%",
          maxWidth: "360px",
        }}
      >
        {/* Email */}
        <div style={{ marginBottom: "16px" }}>
          <label
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: "500",
              marginBottom: "8px",
              color: "#333",
            }}
          >
            Correo electrónico
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            style={{
              width: "100%",
              padding: "12px 16px",
              fontSize: "16px",
              border: "2px solid #E0E0E0",
              borderRadius: "8px",
              boxSizing: "border-box",
              fontFamily: "Poppins, sans-serif",
            }}
          />
        </div>

        {/* Contraseña */}
        <div style={{ marginBottom: "8px" }}>
          <label
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: "500",
              marginBottom: "8px",
              color: "#333",
            }}
          >
            Contraseña
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            style={{
              width: "100%",
              padding: "12px 16px",
              fontSize: "16px",
              border: "2px solid #E0E0E0",
              borderRadius: "8px",
              boxSizing: "border-box",
              fontFamily: "Poppins, sans-serif",
            }}
          />
        </div>

        <div style={{ textAlign: "right", marginBottom: "24px" }}>
          <Link
            href="/register"
            style={{
              fontSize: "13px",
              color: "#2E7D32",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        {/* Botón principal */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px 16px",
            backgroundColor: "#2E7D32",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            marginBottom: "16px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Iniciar sesión
        </button>

        {/* Divisor */}
        <div style={{ textAlign: "center", marginBottom: "16px", color: "#999", fontSize: "13px" }}>o continúa con</div>

        {/* Botones sociales */}
        <button
          type="button"
          style={{
            width: "100%",
            padding: "12px 16px",
            border: "2px solid #E0E0E0",
            backgroundColor: "white",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            marginBottom: "10px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Google
        </button>

        <button
          type="button"
          style={{
            width: "100%",
            padding: "12px 16px",
            border: "2px solid #E0E0E0",
            backgroundColor: "white",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Facebook
        </button>
      </form>

      {/* Link a registro */}
      <div style={{ marginTop: "24px", textAlign: "center" }}>
        <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>
          ¿No tienes cuenta?{" "}
          <Link
            href="/register"
            style={{
              color: "#2E7D32",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  )
}
