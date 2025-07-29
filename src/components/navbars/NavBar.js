import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { LuGamepad2 } from "react-icons/lu";

function NavBar() {
  return (
    <div className="navbar">

      <button className="gamepad-button" onClick={() => console.log("Main abierto")}>
          <LuGamepad2 />
        </button>

      <div className="logo-name">
        <p>GameBag</p>
      </div>

      <div className="navbar-behind">
        <span className="menu-icon">☰</span>
        

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
    </div>
  );
}

export default NavBar;
