export default function Filters({ setFilter }: any) {
  return (
    <div className="mb-6 flex gap-4">
      <button
        className="rounded border px-4 py-2"
        onClick={() => setFilter("all")}
      >
        All
      </button>

      <button
        className="rounded border px-4 py-2"
        onClick={() => setFilter("electronics")}
      >
        Electronics
      </button>

      <button
        className="rounded border px-4 py-2"
        onClick={() => setFilter("jewelery")}
      >
        Jewelery
      </button>
    </div>
  )
}
