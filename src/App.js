import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingView from "./screens/LandingView";

export default function App() {
  return (
    <div className="app">
      <div className="page-content-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingView />} />
        </Routes>
      </div>
    </div>
  )
}