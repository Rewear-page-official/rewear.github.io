"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Send } from "lucide-react"

export default function ChatPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [messages, setMessages] = useState([
    { id: 1, sender: "other", text: "¿Aún disponible el jean?" },
    { id: 2, sender: "me", text: "Sí, está en perfecto estado" },
    { id: 3, sender: "other", text: "¿Cuál es el precio mínimo?" },
    { id: 4, sender: "me", text: "S/ 35 es el precio final" },
    { id: 5, sender: "other", text: "Perfecto, me interesa. ¿Dónde quedamos?" },
  ])
  const [newMessage, setNewMessage] = useState("")

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: "me", text: newMessage }])
      setNewMessage("")
    }
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#faf9f8", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: "white",
          padding: "1rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <button
          onClick={() => router.back()}
          style={{ background: "none", border: "none", fontSize: "24px", cursor: "pointer", color: "#2E7D32" }}
        >
          ←
        </button>
        <div>
          <h1 style={{ fontSize: "1rem", fontWeight: 700, color: "#2E7D32", margin: 0 }}>María García</h1>
          <p style={{ fontSize: "0.75rem", color: "#999", margin: 0 }}>Re: Jean Azul Mom</p>
        </div>
      </header>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          padding: "1rem",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "5.5rem",
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: "flex",
              justifyContent: msg.sender === "me" ? "flex-end" : "flex-start",
            }}
          >
            <div
              style={{
                backgroundColor: msg.sender === "me" ? "#2E7D32" : "white",
                color: msg.sender === "me" ? "white" : "#4A4A4A",
                padding: "0.75rem 1rem",
                borderRadius: "1rem",
                maxWidth: "80%",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                fontSize: "0.875rem",
                lineHeight: "1.4",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div
        style={{
          position: "fixed",
          bottom: "5rem",
          left: 0,
          right: 0,
          backgroundColor: "white",
          padding: "1rem",
          boxShadow: "0 -2px 8px rgba(0,0,0,0.08)",
          display: "flex",
          gap: "0.5rem",
        }}
      >
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          style={{
            flex: 1,
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
            border: "2px solid #E8E8E8",
            fontSize: "0.875rem",
          }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#2E7D32",
            color: "white",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            fontWeight: 600,
            fontSize: "0.875rem",
          }}
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  )
}
