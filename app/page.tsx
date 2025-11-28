"use client"

import { MessageSquare, Plus, SearchIcon, ShoppingBag, User } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Home from "./(main)/home/page"
import SearchPage from "./(main)/search/page"
import Sell from "./(main)/sell/page"
import Messages from "./(main)/messages/page"
import Profile from "./(main)/profile/page"

export default function MainApp() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState("home")
  const [cartItems, setCartItems] = useState([]) // navigation and cart reference

  useEffect(() => {
    // Redirigir a login como pantalla inicial
    router.push("/login")
  }, [router])

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home cartItems={cartItems} setCartItems={setCartItems} />
      case "search":
        return <SearchPage cartItems={cartItems} setCartItems={setCartItems} />
      case "sell":
        return <Sell cartItems={cartItems} setCartItems={setCartItems} />
      case "messages":
        return <Messages cartItems={cartItems} setCartItems={setCartItems} />
      case "profile":
        return <Profile cartItems={cartItems} setCartItems={setCartItems} />
      default:
        return <Home cartItems={cartItems} setCartItems={setCartItems} />
    }
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#faf9f8", display: "flex", flexDirection: "column" }}>
      {/* Main Content */}
      <div style={{ flex: 1, paddingBottom: "5rem" }}>{renderPage()}</div>

      {/* Bottom Navigation */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
          borderTop: "1px solid #E8E8E8",
          display: "flex",
          justifyContent: "space-around",
          padding: "0.5rem 0",
          boxShadow: "0 -2px 8px rgba(0,0,0,0.08)",
        }}
      >
        {[
          { icon: ShoppingBag, label: "Inicio", key: "home" },
          { icon: SearchIcon, label: "Buscar", key: "search" },
          { icon: Plus, label: "Vender", key: "sell" },
          { icon: MessageSquare, label: "Mensajes", key: "messages" },
          { icon: User, label: "Perfil", key: "profile" },
        ].map((nav) => (
          <button
            key={nav.key}
            onClick={() => setCurrentPage(nav.key)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.25rem",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              color: currentPage === nav.key ? "#2E7D32" : "#999",
              fontSize: "0.75rem",
              transition: "color 0.2s ease",
            }}
          >
            <nav.icon size={24} />
            <span>{nav.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
