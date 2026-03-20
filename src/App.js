import "./App.css";
import Fondo from "./components/containers/Fondo";
import NavBar from "./components/navbars/NavBar";
import CardGrid from "./components/cards/CardGrid";
import Filter from "./components/buttoms/Filter";
import ScrollToTop from "./components/buttoms/ScrollToTop";
import { useState } from "react";
import LoginModal from "./components/modals/LoginModal";

function App() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      <NavBar onLoginClick={() => setShowLogin(true)} />
      <Fondo />
      <Filter />
      <CardGrid />
      <ScrollToTop />
      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} />
      )}
    </div>
  );
}

export default App;