import { Link } from "react-router-dom"

export default function ProductCard({ product }: any) {
  return (
    <Link to={`/products/${product.id}`} className="border p-4 rounded hover:shadow">
      <img src={product.image} className="h-40 mx-auto object-contain" />
      <h3 className="mt-2 text-sm">{product.title}</h3>
      <p className="font-bold mt-1">₹{product.price}</p>
    </Link>
  )
}
