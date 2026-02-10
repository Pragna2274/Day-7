import { useEffect, useState } from "react"
import { getProducts } from "../services/productService"

import HeroBanner from "../components/common/HeroBanner"
import Categories from "../components/common/categories"
import ProductCarousel from "../components/common/productCarousel"

export default function Home() {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    getProducts().then((data) => {
      console.log("Products:", data) // DEBUG LINE
      setProducts(data)
    })
  }, [])

  return (
    <>
      <HeroBanner />
      <Categories />

      {/* DEBUG CHECK */}
      {products.length === 0 ? (
        <p className="p-10 text-center">Loading products...</p>
      ) : (
        <ProductCarousel products={products} />
      )}
    </>
  )
}
