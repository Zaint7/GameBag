import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { BsGrid3X3Gap, BsList } from "react-icons/bs";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCartSimple } from "react-icons/pi";
import sets from "../../data/sets";
import { useCart } from "../../CartContext";
import setsHero from "../../images/setsgamer.jpg";

const TAG_LABELS = {
  "recomendado": "🔥 Recomendado",
  "alta-gama": "⭐ Alta Gama",
  "mejor-precio": "💰 Mejor Precio",
};

const TAG_FILTERS = ["Todos", "recomendado", "alta-gama", "mejor-precio"];

function SetCard({ set, viewMode }) {
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart } = useCart();
  const [liked, setLiked] = useState(false);

  const inCart = cartItems.some((item) => String(item.id) === String(set.id));

  const formatPrice = (value) =>
    value.toLocaleString("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 });

  const handleCartClick = (e) => {
    e.stopPropagation();
    if (inCart) {
      removeFromCart(set.id);
    } else {
      addToCart({ id: set.id, name: set.name, price: set.price, image: set.image });
    }
  };

  const handleHeartClick = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  return (
    <div
      className={`card-custom ${viewMode === "list" ? "card-custom--list" : ""}`}
      onClick={() => navigate(`/sets/${set.id}`)}
      style={{ cursor: "pointer" }}
    >
      <div className="card-img-container">
        <img src={set.image} className="card-img" alt={set.name} />
        <div className="sets-tag-badge">{TAG_LABELS[set.tag]}</div>
        <div className={`heart-icon ${liked ? "active" : ""}`} onClick={handleHeartClick}>
          {liked ? <IoMdHeart /> : <IoMdHeartEmpty />}
        </div>
        <div className={`cart-icon ${inCart ? "active" : ""}`} onClick={handleCartClick}>
          <PiShoppingCartSimple />
        </div>
      </div>
      <div className="card-body">
        <span className="card-title">{set.name}</span>
        {viewMode === "list" && (
          <p className="card-description">{set.description}</p>
        )}
        <div className="card-price-row">
          <span className="card-price-label">Precio</span>
          <span className="card-price-value">{formatPrice(set.price)}</span>
        </div>
      </div>
    </div>
  );
}

function SetsPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [activeTag, setActiveTag] = useState("Todos");
  const [sortBy, setSortBy] = useState("");
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Ordenar por");

  const filteredSets = useMemo(() => {
    let list = activeTag === "Todos" ? [...sets] : sets.filter((s) => s.tag === activeTag);
    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sortBy === "name-asc") list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [activeTag, sortBy]);

  const handleSort = (label, value) => {
    setSelectedSort(label);
    setSortBy(value);
    setSortOpen(false);
  };

  return (
    <div className="sets-page">

      {/* HERO BANNER */}
      <div className="sets-hero" style={{ backgroundImage: `url(${setsHero})` }}>
        <div className="sets-hero-overlay">
          <h1 className="sets-hero-title">Sets y Combos</h1>
          <p className="sets-hero-subtitle">Configuraciones completas listas para jugar</p>
        </div>
      </div>

      {/* TABS DE FILTRO */}
      <div className="brand-tabs" style={{ marginTop: "32px" }}>
        {TAG_FILTERS.map((tag) => (
          <button
            key={tag}
            className={`brand-tab ${activeTag === tag ? "brand-tab--active" : ""}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag === "Todos" ? "Todos" : TAG_LABELS[tag]}
          </button>
        ))}
      </div>

      {/* BARRA DE FILTROS */}
      <div className="category-filter-bar">
        <div className="view-toggle">
          <button
            className={`toggle-btn ${viewMode === "grid" ? "active" : ""}`}
            onClick={() => setViewMode("grid")}
          >
            <BsGrid3X3Gap />
          </button>
          <button
            className={`toggle-btn ${viewMode === "list" ? "active" : ""}`}
            onClick={() => setViewMode("list")}
          >
            <BsList />
          </button>
        </div>

        <div className="filter-dropdown" tabIndex={0} onBlur={() => setSortOpen(false)}>
          <button className="filter-button" onClick={() => setSortOpen((v) => !v)}>
            {selectedSort} <span className="arrow">&#9662;</span>
          </button>
          {sortOpen && (
            <ul className="filter-menu">
              <li onMouseDown={() => handleSort("Precio Alto", "price-desc")}>Precio Alto</li>
              <li onMouseDown={() => handleSort("Precio Bajo", "price-asc")}>Precio Bajo</li>
              <li onMouseDown={() => handleSort("Nombre A-Z", "name-asc")}>Nombre A-Z</li>
            </ul>
          )}
        </div>

        <span className="category-results-count">{filteredSets.length} resultados</span>
      </div>

      {/* GRID */}
      <div className={`card-grid ${viewMode === "list" ? "card-grid--list" : ""}`}>
        {filteredSets.map((set) => (
          <SetCard key={set.id} set={set} viewMode={viewMode} />
        ))}
      </div>

    </div>
  );
}

export default SetsPage;