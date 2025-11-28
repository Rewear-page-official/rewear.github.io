"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Plus, MessageCircle, User } from "lucide-react"

export function BottomNavigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/home", icon: Home, label: "Inicio" },
    { href: "/search", icon: Search, label: "Buscar" },
    { href: "/sell", icon: Plus, label: "Publicar" },
    { href: "/messages", icon: MessageCircle, label: "Mensajes" },
    { href: "/profile", icon: User, label: "Perfil" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors ${
                isActive ? "text-emerald-600 border-t-2 border-emerald-600" : "text-gray-600 hover:text-emerald-600"
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
