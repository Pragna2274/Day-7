import { Link } from "react-router-dom"

export default function ProductCarousel({ products }: any) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h2 className="mb-6 text-lg font-semibold">
        Grab the best deal on <span className="text-blue-600">Products</span>
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {products.map((product: any) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="min-w-[220px] rounded-lg border bg-white p-4 shadow-sm hover:shadow-md"
          >
            <img
              src={product.image}
              alt={product.title}
              className="mx-auto h-32 object-contain"
            />

            <p className="mt-2 line-clamp-2 text-sm">
              {product.title}
            </p>

            <p className="mt-1 font-bold text-green-600">
              ₹{product.price}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
