import {useState, useEffect, useMemo} from 'react';
import ProductCard from '../04-ProductCard/ProductCard';
import './ProductGrid.css';
import AllProducts from '../../products.json';
import _ from 'lodash';

const ProductGrid = () => {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const allProducts = AllProducts;

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setDisplayedProducts(allProducts);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [allProducts]);

  // Kategori ismi
  const getCategoryName = categoryId => {
    const categoryNames = {
      all: 'Tüm Ürünler',
      'turk-kahvesi': 'TÜRK KAHVESİ',
      espresso: 'ESPRESSO BAR',
      'sicak-icecek': 'SICAK İÇECEKLER',
      'bitki-cay': 'BİTKİ ÇAYLARI',
      matcha: 'MATCHA ÇAYI',
      'soguk-cay': 'SOĞUK ÇAY',
      smoothie: 'SMOOTHIE & MILKSHAKE',
      soft: 'SOFT İÇECEKLER',
      sandvic: 'SANDVİÇ',
      kahvalti: 'HIZLI KAHVALTI',
      salata: 'SALATALAR',
      bowl: 'BOWL',
      detoks:"Detoks",
      "ice-bar":"Ice Bar"
    };
    return categoryNames[categoryId] || 'Ürünler';
  };

  const displayedProductsGrouped = useMemo(() => {
    const grouped = _.groupBy(displayedProducts, 'category');
    return grouped;
  }, [displayedProducts]);

  // Kategoriler halinde gruplu görünüm
  const products = Object.entries(displayedProductsGrouped).map(
    ([key, value], index) => (
      <div
        key={key}
        id={`category-${key}`}
        className='category-section'
        style={{
          animationDelay: `${index * 50}ms`,
        }}>
        <div className='category-header-section'>
          <span className='category-title-badge'>{getCategoryName(key)}</span>
        </div>
        <div className='product-grid'>
          {value?.map((product, productIndex) => (
            <div
              key={product.id}
              className='product-item'
              style={{
                animationDelay: `${
                  (index * value.length + productIndex) * 50
                }ms`,
              }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    )
  );

  return (
    <section className='product-grid-section'>
      <div className='container'>
        <div
          className={`categories-container ${
            isLoading ? 'loading' : 'loaded'
          }`}>
          {products}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
