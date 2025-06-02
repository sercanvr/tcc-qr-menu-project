import { useState, useEffect, useMemo } from "react"
import ProductCard from "../05-ProductCard/ProductCard"
import "./ProductGrid.css"
import AllProducts from '../../products.json'
import _ from "lodash"

const ProductGrid = ({ activeCategory = "all" }) => {
  const [displayedProducts, setDisplayedProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  const allProducts = AllProducts;
    
  // 🎬 SMOOTH TRANSITION EFFECT
  useEffect(() => {
    setIsLoading(true)

    const timer = setTimeout(() => {
      const filteredProducts =
        activeCategory === "all" ? allProducts : allProducts.filter((product) => product.category === activeCategory)

      setDisplayedProducts(filteredProducts)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [activeCategory])

  // Kategori ismi
  const getCategoryName = (categoryId) => {

    const categoryNames = {
      all: "Tüm Ürünler",
      "turk-kahvesi": "Türk Kahvesi",
      espresso: "Espresso Bar",
      "sicak-icecek": "Sıcak İçecekler",
      "bitki-cay": "Bitki Çayları",
      matcha: "Matcha Çayı",
      "soguk-cay": "Soğuk Çay",
      smoothie: "Smoothie & Milkshake",
      soft: "Soft İçecekler",
      sandvic: "Sandviç",
      kahvalti: "Hızlı Kahvaltı",
      salata: "Salatalar",
      bowl: "Bowl",
    }
    return categoryNames[categoryId] || "Ürünler"
  }

  const displayedProductsGrouped = useMemo(() => {
    const grouped = _.groupBy(displayedProducts, "category");

    return grouped;
  },[displayedProducts]);


  if(activeCategory === 'all'){
    const products = Object.entries(displayedProductsGrouped).map(
      ([key, value], index) => (
        <div
          key={key}
          className="product-item"
          style={{
            animationDelay: `${index * 50}ms`,
          }}
        >
          <div style={{ width: "100%", textAlign: "center", margin: "40px 0" }}>
            <span
              style={{
                textAlign: "center",
                background: "#fff",
                padding: "10px",
                borderRadius: "5px",
                minWidth: "150px",
              }}
            >
              {getCategoryName(key)}
            </span>
          </div>
          <div className="product-grid">
            {value?.map((product, index) => (
              <div
                key={product.id}
                className="product-item"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      )
    );

    return <div className="container">{products}</div>;
  }


  return (
    <section className="product-grid-section">
      <div className="container">
        <div className={`product-grid ${isLoading ? "loading" : "loaded"}`}>
          {activeCategory !== "all" &&
            displayedProducts.map((product, index) => (
              <div
                key={product.id}
                className="product-item"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid