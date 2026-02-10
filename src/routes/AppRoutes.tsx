import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import ProductDetail from "../pages/productDetail"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  )
}
