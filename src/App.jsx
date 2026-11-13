import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}