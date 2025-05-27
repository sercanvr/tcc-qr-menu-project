"use client"
import { useState, useEffect } from "react"
import ProductCard from "../05-ProductCard/ProductCard"
import "./ProductGrid.css"


const ProductGrid = ({ activeCategory = "all", productCounts }) => {
  const [displayedProducts, setDisplayedProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // 64 ÜRÜN - TAM LİSTE (aynı kalacak)
  const allProducts = [
    // TÜRK KAHVESİ (3 ürün)
    {
      id: 1,
      name: "Türk Kahvesi",
      price: "80.00",
      description: "",
      image: "/assets/products/turk-kahvesi.png",
      category: "turk-kahvesi",
    },
    {
      id: 2,
      name: "Double Türk Kahvesi",
      price: "105.00",
      description: "",
      image: "/assets/products/double-turk-kahvesi.png",
      category: "turk-kahvesi",
    },
    {
      id: 3,
      name: "Damla Sakızlı Türk Kahvesi",
      price: "85.00",
      description: "",
      image: "/assets/products/damla-sakizli-turk-kahvesi.jpg",
      category: "turk-kahvesi",
    },

    // ESPRESSO BAR (15 ürün)
    {
      id: 4,
      name: "Single Espresso",
      price: "85.00",
      description: "",
      image: "/assets/products/single-espresso.jpg",
      category: "espresso",
    },
    {
      id: 5,
      name: "Double Espresso",
      price: "95.00",
      description: "",
      image: "/assets/products/double-espresso.jpg",
      category: "espresso",
    },
    {
      id: 6,
      name: "Espresso Macchiato",
      price: "90.00",
      description: "",
      image: "/assets/products/espresso-macchiato.jpg",
      category: "espresso",
    },
    {
      id: 7,
      name: "Americano",
      price: "125.00",
      description: "",
      image: "/assets/products/americano.jpg",
      category: "espresso",
    },
    {
      id: 8,
      name: "Flat White",
      price: "130.00",
      description: "",
      image: "/assets/products/flat-white.jpg",
      category: "espresso",
    },
    {
      id: 9,
      name: "Cortado",
      price: "130.00",
      description: "",
      image: "/assets/products/cortado.jpg",
      category: "espresso",
    },
    {
      id: 10,
      name: "Latte",
      price: "130.00",
      description: "",
      image: "/assets/products/latte.jpg",
      category: "espresso",
    },
    {
      id: 11,
      name: "Cappucino",
      price: "130.00",
      description: "",
      image: "/assets/products/cappucino.jpg",
      category: "espresso",
    },
    {
      id: 12,
      name: "Mocca",
      price: "135.00",
      description: "",
      image: "/assets/products/mocca.jpg",
      category: "espresso",
    },
    {
      id: 13,
      name: "White Mocha",
      price: "135.00",
      description: "",
      image: "/assets/products/white-mocha.jpg",
      category: "espresso",
    },
    {
      id: 14,
      name: "Caramel Mocha",
      price: "135.00",
      description: "",
      image: "/assets/products/caramel-mocha.jpg",
      category: "espresso",
    },
    {
      id: 15,
      name: "Vanilya Latte",
      price: "135.00",
      description: "",
      image: "/assets/products/vanilya-latte.jpg",
      category: "espresso",
    },
    {
      id: 16,
      name: "Caramel Latte",
      price: "135.00",
      description: "",
      image: "/assets/products/caramel-latte.jpg",
      category: "espresso",
    },
    {
      id: 17,
      name: "Fındık Latte",
      price: "135.00",
      description: "",
      image: "/assets/products/findik-latte.jpg",
      category: "espresso",
    },
    {
      id: 18,
      name: "Filtre Kahve",
      price: "90.00",
      description: "",
      image: "/assets/products/filtre-kahve.jpg",
      category: "espresso",
    },

    // SICAK İÇECEKLER (6 ürün)
    {
      id: 19,
      name: "Çay",
      price: "40.00",
      description: "",
      image: "/assets/products/cay-1.jpg",
      category: "sicak-icecek",
    },
    {
      id: 20,
      name: "Fincan Çay",
      price: "55.00",
      description: "",
      image: "/assets/products/fincan-cay.jpg",
      category: "sicak-icecek",
    },
    {
      id: 21,
      name: "Sıcak Çikolata",
      price: "110.00",
      description: "",
      image: "/assets/products/sicak-cikolata.jpg",
      category: "sicak-icecek",
    },
    {
      id: 22,
      name: "Çay The Latte",
      price: "110.00",
      description: "",
      image: "/assets/products/cay-the-latte.jpg",
      category: "sicak-icecek",
    },
    {
      id: 23,
      name: "Sahlep",
      price: "110.00",
      description: "",
      image: "/assets/products/sahlep.jpg",
      category: "sicak-icecek",
    },
    {
      id: 24,
      name: "Ballı Süt",
      price: "90.00",
      description: "",
      image: "/assets/products/balli-sut.jpg",
      category: "sicak-icecek",
    },

    // BİTKİ ÇAYLARI (4 ürün)
    {
      id: 25,
      name: "Ihlamur",
      price: "100.00",
      description: "",
      image: "/assets/products/ihlamur.jpg",
      category: "bitki-cay",
    },
    {
      id: 26,
      name: "Yeşil Çay",
      price: "100.00",
      description: "",
      image: "/assets/products/yesil-cay.jpg",
      category: "bitki-cay",
    },
    {
      id: 27,
      name: "Kış Çayı",
      price: "100.00",
      description: "",
      image: "/assets/products/kis-cayi.jpg",
      category: "bitki-cay",
    },
    {
      id: 28,
      name: "Papatya Çayı",
      price: "100.00",
      description: "",
      image: "/assets/products/papatya-cayi.jpg",
      category: "bitki-cay",
    },

    // MATCHA ÇAYI (2 ürün)
    {
      id: 29,
      name: "Matcha Latte",
      price: "180.00",
      description: "",
      image: "/assets/products/matcha-latte.jpg",
      category: "matcha",
    },
    {
      id: 30,
      name: "Aromalı Matcha Latte",
      price: "200.00",
      description: "(Çilek, Karadut, Vanilya)",
      image: "/assets/products/aromali-matcha-latte.jpg",
      category: "matcha",
    },

    // SOĞUK ÇAY (3 ürün)
    {
      id: 31,
      name: "Ice Red",
      price: "135.00",
      description: "(Hibiscus, Karanfil, Bal, Karadut)",
      image: "/assets/products/ice-red.jpg",
      category: "soguk-cay",
    },
    {
      id: 32,
      name: "Relax",
      price: "135.00",
      description: "(Yeşil Çay, Melisa Çay, Kakule, Lime)",
      image: "/assets/products/relax.jpg",
      category: "soguk-cay",
    },
    {
      id: 33,
      name: "Purple Rain",
      price: "135.00",
      description: "(Mavi Kelebek Çayı, Limon Özü, Lavanta)",
      image: "/assets/products/purple-rain.png",
      category: "soguk-cay",
    },

    // SMOOTHIE VE MILKSHAKE (3 ürün)
    {
      id: 34,
      name: "Protein Milkshake",
      price: "175.00",
      description: "(Vanilya Dondurma, Protein Tozu, Yağsız Süt)",
      image: "/assets/products/protein-milkshake.jpg",
      category: "smoothie",
    },
    {
      id: 35,
      name: "Çilekli Milkshake",
      price: "150.00",
      description: "",
      image: "/assets/products/cilekli-milkshake.jpg",
      category: "smoothie",
    },
    {
      id: 36,
      name: "Oreolu Milkshake",
      price: "160.00",
      description: "",
      image: "/assets/products/oreolu-milkshake.jpg",
      category: "smoothie",
    },

    // SOFT İÇECEKLER (18 ürün)
    {
      id: 37,
      name: "Cola",
      price: "70.00",
      description: "",
      image: "/assets/products/coca-cola.jpg",
      category: "soft",
    },
    {
      id: 38,
      name: "Cola Zero",
      price: "70.00",
      description: "",
      image: "/assets/products/coca-cola-zero.jpg",
      category: "soft",
    },
    {
      id: 39,
      name: "Fanta",
      price: "70.00",
      description: "",
      image: "/assets/products/fanta.jpg",
      category: "soft",
    },
    {
      id: 40,
      name: "Sprite",
      price: "70.00",
      description: "",
      image: "/assets/products/sprite.jpg",
      category: "soft",
    },
    {
      id: 41,
      name: "Ayran",
      price: "60.00",
      description: "",
      image: "/assets/products/ayran.jpg",
      category: "soft",
    },
    {
      id: 42,
      name: "Fuse Tea Şeftali",
      price: "70.00",
      description: "",
      image: "/assets/products/fuse-tea-seftali.png",
      category: "soft",
    },
    {
      id: 43,
      name: "Fuse Tea Limon",
      price: "70.00",
      description: "",
      image: "/assets/products/fuse-tea-limon.png",
      category: "soft",
    },
    {
      id: 44,
      name: "Fuse Tea Mango",
      price: "70.00",
      description: "",
      image: "/assets/products/fuse-tea-mango.png",
      category: "soft",
    },
    {
      id: 45,
      name: "Su",
      price: "40.00",
      description: "",
      image: "/assets/products/su.jpg",
      category: "soft",
    },
    {
      id: 46,
      name: "Limonlu Soda",
      price: "50.00",
      description: "",
      image: "/assets/products/limonlu-soda.jpg",
      category: "soft",
    },
    {
      id: 47,
      name: "Elmalı Soda",
      price: "50.00",
      description: "",
      image: "/assets/products/elmali-soda.jpg",
      category: "soft",
    },
    {
      id: 48,
      name: "Sade Soda",
      price: "45.00",
      description: "",
      image: "/assets/products/sade-soda.jpg",
      category: "soft",
    },
    {
      id: 49,
      name: "Limonata",
      price: "120.00",
      description: "",
      image: "/assets/products/limonata.jpg",
      category: "soft",
    },
    {
      id: 50,
      name: "Çilekli Limonata",
      price: "130.00",
      description: "",
      image: "/assets/products/cilekli-limonata.jpg",
      category: "soft",
    },
    {
      id: 51,
      name: "Naneli Limonata",
      price: "130.00",
      description: "",
      image: "/assets/products/naneli-limonata.jpg",
      category: "soft",
    },
    {
      id: 52,
      name: "Redbull",
      price: "120.00",
      description: "",
      image: "/assets/products/redbull.jpg",
      category: "soft",
    },
    {
      id: 53,
      name: "Portakal Suyu",
      price: "120.00",
      description: "",
      image: "/assets/products/portakal-suyu.jpg",
      category: "soft",
    },
    {
      id: 54,
      name: "Churchill",
      price: "65.00",
      description: "",
      image: "/assets/products/churchill.jpg",
      category: "soft",
    },

    // SANDVİÇ (5 ürün)
    {
      id: 55,
      name: "Beyaz Peynir Çeri Domates Marul",
      price: "180.00",
      description: "",
      image: "/assets/products/beyaz-peynir-sandvic.png",
      category: "sandvic",
    },
    {
      id: 56,
      name: "Hindi Füme Krem Peynir Roka Kaşar",
      price: "200.00",
      description: "",
      image: "/assets/products/hindi-fume-sandvic.jpg",
      category: "sandvic",
    },
    {
      id: 57,
      name: "Rose Beef",
      price: "275.00",
      description: "",
      image: "/assets/products/rose-beef.jpg",
      category: "sandvic",
    },
    {
      id: 58,
      name: "Ton Balıklı",
      price: "220.00",
      description: "",
      image: "/assets/products/ton-balikli-sandvic.jpg",
      category: "sandvic",
    },
    {
      id: 59,
      name: "Tavuklu",
      price: "215.00",
      description: "",
      image: "/assets/products/tavuklu-sandvic.jpg",
      category: "sandvic",
    },

    // HIZLI KAHVALTI TABAĞI (1 ürün)
    {
      id: 60,
      name: "Hızlı Kahvaltı Tabağı",
      price: "210.00",
      description:
        "(Haşlanmış Yumurta, Salatalık, Domates, Kokteyl Zeytin, Hindi Jambon, Beyaz Peynir, Ekşi Mayalı Ekmek, Nutella, Çay)",
      image: "/assets/products/hizli-kahvalti.jpg",
      category: "kahvalti",
    },

    // SALATALAR (3 ürün)
    {
      id: 61,
      name: "Ton Balıklı Salata",
      price: "230.00",
      description: "",
      image: "/assets/products/ton-balikli-salata.jpg",
      category: "salata",
    },
    {
      id: 62,
      name: "Tavuklu Salata",
      price: "210.00",
      description: "",
      image: "/assets/products/tavuklu-salata.jpg",
      category: "salata",
    },
    {
      id: 63,
      name: "Vejetaryen Salata",
      price: "220.00",
      description: "(Lor Peynir, Kuru Kayısı, Avokado, Ceviz, Akdeniz Yeşillik)",
      image: "/assets/products/vejetaryen-salata.jpg",
      category: "salata",
    },

    // BOWL (1 ürün)
    {
      id: 64,
      name: "Granola Bowl",
      price: "250.00",
      description: "(Süzme Yoğurt, Granola, Çilek, Muz, Bal)",
      image: "/assets/products/granola-bowl.jpg",
      category: "bowl",
    },
  ]

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

  // productCounts kullanımı - ESLint uyarısını gidermek için
  console.log("Product counts:", productCounts)

  return (
    <section className="product-grid-section">
      <div className="container">
        <div className="category-header">
          <h2 className="category-title">{displayedProducts.length} Ürün</h2>
          <p className="category-subtitle">{getCategoryName(activeCategory)}</p>
        </div>

        <div className={`product-grid ${isLoading ? "loading" : "loaded"}`}>
          {displayedProducts.map((product, index) => (
            <div key={product.id} className="product-item" style={{ animationDelay: `${index * 50}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid