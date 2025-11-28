"use client"
import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState([0, 200])
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedCondition, setSelectedCondition] = useState("")
  const [selectedType, setSelectedType] = useState("")
  const [selectedGender, setSelectedGender] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [sortBy, setSortBy] = useState("reciente")
  const [showFilters, setShowFilters] = useState(false)

  const allProducts = [
    {
      id: 1,
      title: "Jean Azul Mom",
      price: 35,
      image: "/jean-azul-mujer-segunda-mano.jpg",
      condition: "Como nueva",
      location: "San Isidro",
      size: "M",
      type: "pantalón",
      gender: "mujer",
    },
    {
      id: 2,
      title: "Jean Blanco Mujer",
      price: 40,
      image: "/jean-blanco-mujer.jpg",
      condition: "Poco uso",
      location: "Miraflores",
      size: "S",
      type: "pantalón",
      gender: "mujer",
    },
    {
      id: 3,
      title: "Blusa Blanca Clásica",
      price: 28,
      image: "/blusa-blanca-elegante.jpg",
      condition: "Como nueva",
      location: "Surco",
      size: "S",
      type: "blusa",
      gender: "mujer",
    },
    {
      id: 4,
      title: "Casaca de Cuero Negra",
      price: 120,
      image: "/casaca-cuero-negra.jpg",
      condition: "Usado",
      location: "La Molina",
      size: "L",
      type: "casaca",
      gender: "unisex",
    },
    {
      id: 5,
      title: "Falda Negra Midi",
      price: 35,
      image: "/falda-negra-midi.jpg",
      condition: "Como nueva",
      location: "Barranco",
      size: "M",
      type: "falda",
      gender: "mujer",
    },
  ]

  const filteredProducts = allProducts
    .filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    .filter((p) => !selectedSize || p.size === selectedSize)
    .filter((p) => !selectedCondition || p.condition === selectedCondition)
    .filter((p) => !selectedType || p.type === selectedType)
    .filter((p) => !selectedGender || p.gender === selectedGender)
    .filter((p) => !selectedLocation || p.location === selectedLocation)
    .sort((a, b) => {
      if (sortBy === "reciente") return 0
      if (sortBy === "menor-precio") return a.price - b.price
      if (sortBy === "mayor-precio") return b.price - a.price
      return 0
    })

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#faf9f8", paddingBottom: "5rem" }}>
      {/* Header */}
      <header style={{ backgroundColor: "white", padding: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2E7D32", margin: 0 }}>Buscar</h1>
      </header>

      {/* Search Bar */}
      <div style={{ padding: "1rem", backgroundColor: "white", marginBottom: "0.5rem" }}>
        <input
          type="text"
          placeholder="Buscar por prenda, marca o estilo"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
            border: "2px solid #E8E8E8",
            fontSize: "0.875rem",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Filter Toggle */}
      <div style={{ padding: "0 1rem 1rem" }}>
        <button
          onClick={() => setShowFilters(!showFilters)}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            backgroundColor: "#F0F9F0",
            border: "2px solid #2E7D32",
            borderRadius: "0.5rem",
            color: "#2E7D32",
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.875rem",
          }}
        >
          ⚙️ Filtros Avanzados
          <ChevronDown size={16} style={{ transform: showFilters ? "rotate(180deg)" : "" }} />
        </button>
      </div>

      {/* Filters */}
      {showFilters && (
        <div style={{ padding: "0 1rem 1.5rem", backgroundColor: "white", marginBottom: "0.5rem" }}>
          {/* Price Range */}
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#4A4A4A", marginBottom: "0.75rem" }}>
              Rango de Precio: S/ {priceRange[0]} - S/ {priceRange[1]}
            </h3>
            <input
              type="range"
              min="0"
              max="200"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              style={{ width: "100%", accentColor: "#2E7D32" }}
            />
          </div>

          {/* Size */}
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#4A4A4A", marginBottom: "0.5rem" }}>Talla</h3>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {["XS", "S", "M", "L", "XL", "Plus"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(selectedSize === size ? "" : size)}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    border: "2px solid #E8E8E8",
                    backgroundColor: selectedSize === size ? "#2E7D32" : "white",
                    color: selectedSize === size ? "white" : "#4A4A4A",
                    cursor: "pointer",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Type */}
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#4A4A4A", marginBottom: "0.5rem" }}>
              Tipo de Prenda
            </h3>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {["polo", "pantalón", "vestido", "casaca", "blusa"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(selectedType === type ? "" : type)}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    border: "2px solid #E8E8E8",
                    backgroundColor: selectedType === type ? "#2E7D32" : "white",
                    color: selectedType === type ? "white" : "#4A4A4A",
                    cursor: "pointer",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Gender */}
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#4A4A4A", marginBottom: "0.5rem" }}>Género</h3>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {["mujer", "hombre", "unisex"].map((gender) => (
                <button
                  key={gender}
                  onClick={() => setSelectedGender(selectedGender === gender ? "" : gender)}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    border: "2px solid #E8E8E8",
                    backgroundColor: selectedGender === gender ? "#2E7D32" : "white",
                    color: selectedGender === gender ? "white" : "#4A4A4A",
                    cursor: "pointer",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>

          {/* Condition */}
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#4A4A4A", marginBottom: "0.5rem" }}>Estado</h3>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {["Nuevo con etiqueta", "Como nueva", "Poco uso", "Usado"].map((condition) => (
                <button
                  key={condition}
                  onClick={() => setSelectedCondition(selectedCondition === condition ? "" : condition)}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    border: "2px solid #E8E8E8",
                    backgroundColor: selectedCondition === condition ? "#2E7D32" : "white",
                    color: selectedCondition === condition ? "white" : "#4A4A4A",
                    cursor: "pointer",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {condition}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div style={{ marginBottom: "1rem" }}>
            <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#4A4A4A", marginBottom: "0.5rem" }}>
              Ordenar por
            </h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                border: "2px solid #E8E8E8",
                fontSize: "0.875rem",
              }}
            >
              <option value="reciente">Más reciente</option>
              <option value="menor-precio">Menor precio</option>
              <option value="mayor-precio">Mayor precio</option>
            </select>
          </div>
        </div>
      )}

      {/* Results */}
      <div style={{ padding: "0 1rem" }}>
        <p style={{ fontSize: "0.875rem", color: "#999", marginBottom: "1rem", marginTop: "0.5rem" }}>
          {filteredProducts.length} resultados encontrados
        </p>
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            style={{ textDecoration: "none", display: "block", marginBottom: "1rem" }}
          >
            <div
              style={{
                display: "flex",
                gap: "1rem",
                backgroundColor: "white",
                padding: "1rem",
                borderRadius: "0.5rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                  backgroundColor: "#f0f0f0",
                }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "0.875rem", fontWeight: 600, margin: "0 0 0.5rem 0", color: "#4A4A4A" }}>
                  {product.title}
                </h3>
                <p style={{ fontSize: "1rem", fontWeight: 700, color: "#2E7D32", margin: "0.25rem 0" }}>
                  S/ {product.price}
                </p>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#999",
                    marginTop: "0.5rem",
                    display: "flex",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "#F0F9F0",
                      color: "#2E7D32",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "0.25rem",
                    }}
                  >
                    {product.condition}
                  </span>
                  <span>{product.location}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
