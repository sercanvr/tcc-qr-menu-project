"use client"

import "./ProductCard.css"

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    console.log("Ürün sepete eklendi:", product.name)
  }

  const handleImageError = (e) => {
    e.target.style.display = "none"
    e.target.parentElement.style.background = "linear-gradient(135deg, #8b4513, #d2691e)"
    e.target.parentElement.style.display = "flex"
    e.target.parentElement.style.alignItems = "center"
    e.target.parentElement.style.justifyContent = "center"
    e.target.parentElement.innerHTML = '<span style="color: white; font-size: 2rem;">☕</span>'
  }

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image || "/placeholder.svg?height=200&width=200"}
          alt={product.name}
          className="product-image"
          onError={handleImageError}
        />
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        {product.description && product.description.trim() !== "" && (
          <p className="product-description">{product.description}</p>
        )}
        <div className="product-footer">
          <span className="product-price">₺{product.price}</span>
          <button className="add-button" onClick={handleAddToCart} aria-label={`${product.name} sepete ekle`}>
            <span className="add-icon">+</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard