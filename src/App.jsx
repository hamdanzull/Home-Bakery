import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ReactGA from "react-ga4";

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
      </Routes>
    </Router>
  )
}

export default App
