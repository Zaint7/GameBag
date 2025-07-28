import { CiSearch } from "react-icons/ci";
function NavBar() {
  return (
    <div className="navbar">
      <div style={{ position: "relative", display: "inline-block"}}>
        <input
          type="text"
          id="search"
          name="fname"
          placeholder="Busca tu producto"
        ></input>
        
        <span className="search-icon">
            <CiSearch />
            </span>
      </div>
    </div>
  );
}

export default NavBar;
