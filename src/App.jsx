import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ReactGA from "react-ga4";
import CategoryDetail from "./pages/CategoryDetail";
import CartPage from "./pages/CartPage";
import CategoriesPage from "./pages/CategoriesPage";
import ContactPage from "./pages/ContactPage";
import TestimonyPage from "./pages/TestimonyPage";

const trackingId = "G-RFM1BS2D12"
ReactGA.initialize(trackingId);

function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/" });
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:id" element={<CategoryDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/testimony" element={<TestimonyPage />} />
      </Routes>
    </Router>
  )
}

export default App
