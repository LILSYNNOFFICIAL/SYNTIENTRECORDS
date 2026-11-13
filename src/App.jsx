import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const AboutPage = lazy(() => import("./pages/AboutPage.jsx"));

export default function App() {
  return (
    <Suspense fallback={<div className="route-loading">SYNTIENT RECORDS</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}