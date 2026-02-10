import { Button } from "../ui/button"

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-4">
        <h1 className="text-xl font-bold text-blue-600">MegaMart</h1>

        <input
          className="flex-1 rounded-md border px-4 py-2"
          placeholder="Search essentials, groceries and more..."
        />

        <Button variant="outline">Sign In</Button>
        <Button>Cart</Button>
      </div>
    </header>
  )
}
