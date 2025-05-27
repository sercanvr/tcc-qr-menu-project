"use client"

import { useState, useEffect } from "react"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      if (scrolled > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }


  const buttonStyle = {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "60px",
    height: "60px",
    backgroundColor: "red",
    color: "white",
    border: "3px solid yellow",
    borderRadius: "50%",
    fontSize: "24px",
    cursor: "pointer",
    zIndex: 999999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 30px rgba(255,0,0,0.8)",
  }

  return (
    <div>
      {/* TEST BUTONU - HER ZAMAN GÖRÜNÜR */}
      <button style={buttonStyle} onClick={scrollToTop}>
        ↑
      </button>

      {/* DEBUG BİLGİSİ */}
      <div
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          background: "black",
          color: "white",
          padding: "10px",
          zIndex: 999999,
        }}
      >
        isVisible: {isVisible.toString()}
      </div>
    </div>
  )
}

export default ScrollToTop