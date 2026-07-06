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
import Cart from "./components/cards/Cart";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import ProductDetail from "./components/cards/ProductDetail";
import CategoryPage from "./components/cards/CategoryPage";
import SetsPage from "./components/cards/SetsPage";
import SetDetail from "./components/cards/SetDetail";


function MainPage() {
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
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar
          onLoginClick={() => setShowLogin(true)}
          onRegisterClick={() => setShowRegister(true)}
          onMenuClick={() => setSidebarOpen(true)}
          onCartClick={() => setCartOpen(true)}
        />

        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/categoria/:slug" element={<CategoryPage />} />
          <Route path="/categoria/:slug/:sub" element={<CategoryPage />} />
          <Route path="/sets" element={<SetsPage />} />
          <Route path="/sets/:id" element={<SetDetail />} />
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