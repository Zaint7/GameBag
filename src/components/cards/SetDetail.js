import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoArrowBack } from "react-icons/io5";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { MdVerified, MdLocalShipping, MdCheckCircle } from "react-icons/md";
import sets from "../../data/sets";
import { useCart } from "../../CartContext";

const TAG_LABELS = {
  "recomendado": "🔥 Recomendado",
  "alta-gama": "⭐ Alta Gama",
  "mejor-precio": "💰 Mejor Precio",
};

function StarRating({ rating = 4.5 }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} className="star filled" />);
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(<FaStarHalfAlt key={i} className="star filled" />);
    } else {
      stars.push(<FiStar key={i} className="star empty" />);
    }
  }
  return <div className="star-rating">{stars}</div>;
}

function SetDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cartItems, addToCart } = useCart();
  const [liked, setLiked] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const set = sets.find((s) => s.id === id);

  if (!set) {
    return (
      <div className="detail-not-found">
        <p>Set no encontrado.</p>
        <button onClick={() => navigate("/")}>Volver al inicio</button>
      </div>
    );
  }

  const images = [set.image, set.image, set.image, set.image];
  const inCart = cartItems.some((item) => String(item.id) === String(set.id));

  const formatPrice = (value) =>
    value.toLocaleString("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 });

  const handleAddToCart = () => {
    if (!inCart) addToCart({ id: set.id, name: set.name, price: set.price, image: set.image });
  };

  // Sets relacionados (mismo tag, distinto id)
  const related = sets.filter((s) => s.tag === set.tag && s.id !== set.id).slice(0, 3);

  return (
    <div className="detail-page">

      {/* Botón volver */}
      <button className="detail-back" onClick={() => navigate(-1)}>
        <IoArrowBack /> Volver
      </button>

      {/* ZONA 1: HEADER */}
      <div className="detail-header">
        <span className="detail-tag-badge">{TAG_LABELS[set.tag]}</span>
        <h1 className="detail-name">{set.name}</h1>
      </div>

      {/* ZONA 2: GALERÍA + INFO */}
      <div className="detail-zone2">

        {/* Miniaturas */}
        <div className="detail-thumbs-vertical">
          {images.map((img, i) => (
            <div
              key={i}
              className={`detail-thumb ${activeImg === i ? "active" : ""}`}
              onClick={() => setActiveImg(i)}
            >
              <img src={img} alt={`${set.name} ${i + 1}`} />
            </div>
          ))}
        </div>

        {/* Imagen principal */}
        <div className="detail-img-main">
          <button className="detail-arrow left" onClick={() => setActiveImg((i) => (i - 1 + images.length) % images.length)}>&#8249;</button>
          <img src={images[activeImg]} alt={set.name} />
          <button className="detail-arrow right" onClick={() => setActiveImg((i) => (i + 1) % images.length)}>&#8250;</button>
        </div>

        {/* Panel derecho */}
        <div className="detail-panel">
          <div className="detail-meta">
            <StarRating rating={4.5} />
            <span className="detail-rating-text">4.5 / 5.0</span>
            <span className="detail-divider">|</span>
            <span className="detail-stock">
              <MdVerified className="stock-icon" /> Disponible
            </span>
          </div>

          <div className="detail-price-big">{formatPrice(set.price)}</div>

          <div className="detail-shipping">
            <MdLocalShipping className="shipping-icon" />
            <span>Envío gratis a todo Colombia</span>
          </div>

          <div className="detail-actions">
            <button
              className={`detail-cart-btn ${inCart ? "in-cart" : ""}`}
              onClick={handleAddToCart}
            >
              <PiShoppingCartSimple />
              {inCart ? "Añadido al carrito" : "Añadir al carrito"}
            </button>
            <button
              className={`detail-wish-btn ${liked ? "active" : ""}`}
              onClick={() => setLiked(!liked)}
            >
              {liked ? <IoMdHeart /> : <IoMdHeartEmpty />}
            </button>
          </div>

          <div className="detail-category-info">
            <span className="detail-category-label">Categoría</span>
            <span className="detail-category-value">Sets y Combos</span>
          </div>
        </div>
      </div>

      {/* ZONA 3: DESCRIPCIÓN + INCLUYE + SPECS */}
      <div className="detail-zone3">

        {/* Descripción */}
        <div className="detail-card detail-description-card">
          <h3 className="detail-card-title">📋 Descripción</h3>
          <p className="detail-description-text">{set.description}</p>
        </div>

        {/* Qué incluye */}
        <div className="detail-card detail-includes-card">
          <h3 className="detail-card-title">📦 ¿Qué incluye?</h3>
          <ul className="set-includes-list">
            {set.includes.map((item, i) => (
              <li key={i} className="set-includes-item">
                <MdCheckCircle className="set-includes-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Especificaciones */}
        {set.specs && (
          <div className="detail-card detail-specs-card">
            <h3 className="detail-card-title">⚙️ Especificaciones</h3>
            <div className="detail-specs-grid">
              {Object.entries(set.specs).map(([key, value]) => (
                <div key={key} className="detail-spec-row">
                  <span className="spec-key">{key}</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ZONA 4: SETS RELACIONADOS */}
      {related.length > 0 && (
        <div className="detail-related">
          <h2 className="detail-related-title">🎮 Otros sets que podrían interesarte</h2>
          <div className="detail-related-grid">
            {related.map((s) => (
              <div
                key={s.id}
                className="card-custom"
                onClick={() => navigate(`/sets/${s.id}`)}
                style={{ cursor: "pointer" }}
              >
                <div className="card-img-container">
                  <img src={s.image} className="card-img" alt={s.name} />
                  <div className="sets-tag-badge">{TAG_LABELS[s.tag]}</div>
                </div>
                <div className="card-body">
                  <span className="card-title">{s.name}</span>
                  <div className="card-price-row">
                    <span className="card-price-label">Precio</span>
                    <span className="card-price-value">{formatPrice(s.price)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default SetDetail;