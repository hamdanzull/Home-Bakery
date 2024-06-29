import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ReactGA from "react-ga4";
import CategoryDetail from "./pages/CategoryPage";

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
        <Route path="/categories/:id" element={<CategoryDetail />} />
      </Routes>
    </Router>
  )
}

export default App
