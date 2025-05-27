"use client"

import { useState } from "react"
import "./MenuNavigation.css"

const MenuNavigation = ({ onCategoryChange, activeCategory, productCounts }) => {
  const [activeCategory_local, setActiveCategory_local] = useState("all")

  // 🎯 RADIO BUTTON STİLİ MENÜ
  const categories = [
    { id: "all", name: "Tümü" },
    { id: "turk-kahvesi", name: "Türk Kahvesi" },
    { id: "espresso", name: "Espresso Bar" },
    { id: "sicak-icecek", name: "Sıcak İçecekler" },
    { id: "bitki-cay", name: "Bitki Çayları" },
    { id: "matcha", name: "Matcha Çayı" },
    { id: "soguk-cay", name: "Soğuk Çay" },
    { id: "smoothie", name: "Smoothie & Milkshake" },
    { id: "soft", name: "Soft İçecekler" },
    { id: "sandvic", name: "Sandviç" },
    { id: "kahvalti", name: "Hızlı Kahvaltı" },
    { id: "salata", name: "Salatalar" },
    { id: "bowl", name: "Bowl" },
  ]

  const handleCategoryClick = (categoryId) => {
    setActiveCategory_local(categoryId)
    if (onCategoryChange) {
      onCategoryChange(categoryId)
    }
  }

  return (
    <nav className="menu-navigation">
      <div className="container">
        <div className="menu-glass-container">
          <div className="radio-inputs">
            {categories.map((category) => (
              <label key={category.id} className="radio">
                <input
                  type="radio"
                  name="category"
                  checked={(activeCategory || activeCategory_local) === category.id}
                  onChange={() => handleCategoryClick(category.id)}
                />
                <span className="name">{category.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MenuNavigation
