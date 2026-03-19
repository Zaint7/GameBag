import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";
import { FiUser } from "react-icons/fi";

function NavBar() {
  return (
    <nav className="navbar">

      {/* IZQUIERDA */}
      <div className="navbar-left">
        <button className="menu-icon">☰</button>
        <div className="search-container">
          <input type="text" id="search" name="Buscar" placeholder="Busca tu producto" />
          <span className="search-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>
      </div>

      {/* CENTRO */}
      <div className="navbar-center">
        <div className="logo-container">
          <IoGameControllerOutline className="gamepad-icon" />
          <span className="logo-name">GameBag</span>
        </div>
      </div>

      {/* DERECHA */}
      <div className="navbar-right">
        <button className="login-button">Iniciar sesión</button>
        <button className="register-button">Registrarse</button>
        <button className="login-button-mobile"><FiUser /></button>
        <div className="cart-wrapper">
  <PiShoppingCartSimple className="cart-button" onClick={() => {}} />
  <span className="cart-badge"></span>
</div>
      </div>

    </nav>
  );
}

export default NavBar;