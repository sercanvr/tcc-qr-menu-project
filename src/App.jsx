"use client"

import { useState, useEffect } from "react"
import Header from "./components/01-Header/Header"
import MenuNavigation from "./components/03-MenuNavigation/MenuNavigation"
import ProductGrid from "./components/04-ProductGrid/ProductGrid"
import SocialMediaBox from "./components/08-SocialMediaBox/SocialMediaBox"
import Footer from "./components/06-Footer/Footer"
import "./App.css"

function App() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [showScrollButton, setShowScrollButton] = useState(false)

  // ÜRÜN SAYILARI
  const productCounts = {
    all: 64,
    "turk-kahvesi": 3,
    espresso: 15,
    "sicak-icecek": 6,
    "bitki-cay": 4,
    matcha: 2,
    "soguk-cay": 3,
    smoothie: 3,
    soft: 18,
    sandvic: 5,
    kahvalti: 1,
    salata: 3,
    bowl: 1,
  }

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
  }

  // Scroll kontrolü
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      const triggerPoint = (documentHeight - windowHeight) / 3

      if (scrolled > triggerPoint) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    const startPosition = window.pageYOffset
    const startTime = performance.now()
    const duration = 2000

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    }

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const ease = easeInOutCubic(progress)

      window.scrollTo(0, startPosition * (1 - ease))

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }

  return (
    <div className="app">
      <Header />
      <MenuNavigation
        onCategoryChange={handleCategoryChange}
        activeCategory={activeCategory}
        productCounts={productCounts}
      />
      <ProductGrid activeCategory={activeCategory} productCounts={productCounts} />
      <SocialMediaBox />
      <Footer />

      {showScrollButton && (
        <button className="scroll-to-top-button" onClick={scrollToTop} aria-label="Yukarı çık">
          <svg viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </button>
      )}
    </div>
  )
}

export default App