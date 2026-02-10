import mobile from "../../assets/categories/mobile.webp"
import cosmetics from "../../assets/categories/cosmetics.png"
import electronics from "../../assets/categories/electronics.webp"
import furniture from "../../assets/categories/furniture.webp"
import watch from "../../assets/categories/watch.webp"
import decor from "../../assets/categories/decor.webp"
import accessories from "../../assets/categories/accessories.png"

const categories = [
  { name: "Mobile", image: mobile },
  { name: "Cosmetics", image: cosmetics },
  { name: "Electronics", image: electronics },
  { name: "Furniture", image: furniture },
  { name: "Watches", image: watch },
  { name: "Decor", image: decor },
  { name: "Accessories", image: accessories },
]

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h2 className="mb-6 text-lg font-semibold">
        Shop From <span className="text-blue-600">Top Categories</span>
      </h2>

      <div className="flex gap-8 overflow-x-auto">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex min-w-[100px] flex-col items-center"
          >
            <div className="flex h-36 w-36 items-center justify-center rounded-full border bg-white shadow-sm">
              <img
                src={cat.image}
                alt={cat.name}
                className="h-24 w-24 object-contain"
              />
            </div>
            <p className="mt-3 text-sm">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
