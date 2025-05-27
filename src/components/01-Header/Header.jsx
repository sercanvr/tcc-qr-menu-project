"use client"

import "./Header.css"

const Header = () => {
  const handleLogoClick = () => {
    window.location.reload() // F5 işlevi
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <img
            src="/assets/tcc-logo.png"
            alt="The Cup Coffee"
            className="logo"
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      {/* YENİ WAVE - LOGO ALTINDA */}
      <div className="custom-shape-divider-bottom-1748321996">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
        </svg>
      </div>
    </header>
  )
}

export default Header