import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";

import Fondo from "./components/containers/Fondo";
import NavBar from "./components/navbars/NavBar";
import CardGrid from "./components/cards/CardGrid";
import Filter from "./components/buttoms/Filter";
import ScrollToTop from "./components/buttoms/ScrollToTop";
import Sidebar from "./components/navbars/Sidebar";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";

function MainPage({ onLoginClick, onRegisterClick }) {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("");

  return (
    <>
      <Fondo />
      <Filter viewMode={viewMode} onViewModeChange={setViewMode} onSortChange={setSortBy} />
      <CardGrid viewMode={viewMode} sortBy={sortBy} />
    </>
  );
}

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar
          onLoginClick={() => setShowLogin(true)}
          onRegisterClick={() => setShowRegister(true)}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categoria/:slug" element={<div style={{padding: "40px", color: "#333"}}>Página de categoría — próximamente</div>} />
          <Route path="/categoria/:slug/:sub" element={<div style={{padding: "40px", color: "#333"}}>Subcategoría — próximamente</div>} />
        </Routes>

        <ScrollToTop />

        {showLogin && (
          <LoginModal
            onClose={() => setShowLogin(false)}
            onSwitchToRegister={() => {
              setShowLogin(false);
              setShowRegister(true);
            }}
          />
        )}

        {showRegister && (
          <RegisterModal
            onClose={() => setShowRegister(false)}
            onSwitchToLogin={() => {
              setShowRegister(false);
              setShowLogin(true);
            }}
          />
        )}
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;