"use client"

import type React from "react"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div style={{ minHeight: "100vh", backgroundColor: "#FFF7F0" }}>{children}</div>
}
