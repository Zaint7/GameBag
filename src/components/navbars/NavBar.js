import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";

function NavBar() {
  return (
    <div className="navbar">
      <button
        className="gamepad-button"
        onClick={() => console.log("Main abierto")}
      >
        <IoGameControllerOutline />
      </button>

      <div className="logo-name">
        <p>GameBag</p>
      </div>

      <div className="navbar-behind">
        <button className="menu-icon">☰</button>

        <div className="search-container">
          <input
            type="text"
            id="search"
            name="Buscar"
            placeholder="Busca tu producto"
          ></input>

          <span className="search-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>
      </div>

      <button className="login-button">Iniciar sesión</button>

      <button className="register-button">Registrarse</button>

      <button className="cart-button"><PiShoppingCartSimple /></button>
    </div>
    



  );
}

export default NavBar;
