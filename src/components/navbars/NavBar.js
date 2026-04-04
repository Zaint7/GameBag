import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useCart } from "../../CartContext";
import { useNavigate } from "react-router-dom";

function NavBar({ onLoginClick, onRegisterClick, onMenuClick, onCartClick }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* IZQUIERDA */}
        <div className="navbar-left">
          <button className="menu-icon" onClick={onMenuClick}>☰</button>

          <div className="search-container">
            <input
              type="text"
              id="search"
              name="Buscar"
              placeholder="Busca tu producto"
              className={searchOpen ? "search-open" : ""}
            />
            <span className="search-icon" onClick={() => setSearchOpen(!searchOpen)}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
          </div>
        </div>

        {/* CENTRO */}
        <div className="navbar-center">
          <div className="logo-container" onClick={() => navigate("/")}>
            <IoGameControllerOutline className="gamepad-icon" />
            <span className="logo-name">GameBag</span>
          </div>
        </div>

        {/* DERECHA */}
        <div className="navbar-right">
          <button className="login-button" onClick={onLoginClick}>Iniciar sesión</button>
          <button className="register-button" onClick={onRegisterClick}>Registrarse</button>
          <button className="login-button-mobile" onClick={onLoginClick}><FiUser /></button>

          <div className="cart-wrapper" onClick={onCartClick}>
            <PiShoppingCartSimple className="cart-button" />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </div>
        </div>

        {searchOpen && (
          <div className="search-bar-mobile">
            <input
              type="text"
              placeholder="Busca tu producto..."
              className="search-input-mobile"
              autoFocus
            />
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBar;