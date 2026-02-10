import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProduct } from "../services/productService"

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState<any>(null)

  useEffect(() => {
    if (id) getProduct(id).then(setProduct)
  }, [id])

  if (!product) return <p>Loading...</p>

  return (
    <div className="mx-auto max-w-5xl p-10 flex gap-10">
      <img src={product.image} className="h-80 object-contain" />
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="mt-4">{product.description}</p>
        <p className="mt-6 text-xl font-bold">₹{product.price}</p>
      </div>
    </div>
  )
}
