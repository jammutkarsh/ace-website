import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactUs from "./screens/ContactUs";
import LandingView from "./screens/LandingView";

export default function App() {
  return (
    <div className="app">
      <div className="page-content-wrapper mb-24">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingView />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </div>
  )
}