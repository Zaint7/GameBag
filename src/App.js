import "./App.css";
import Fondo from "./components/containers/Fondo";
import NavBar from "./components/navbars/NavBar";
import CardGrid from "./components/cards/CardGrid";
import Filter from "./components/buttoms/Filter";
import ScrollToTop from "./components/buttoms/ScrollToTop";
import { useState } from "react";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div>
      <NavBar onLoginClick={() => setShowLogin(true)} onRegisterClick={() => setShowRegister(true)} />
      <Fondo />
      <Filter viewMode={viewMode} onViewModeChange={setViewMode} />
      <CardGrid viewMode={viewMode}/>
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
    </div>
  );
}

export default App;