import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoArrowBack } from "react-icons/io5";
import { FiStar } from "react-icons/fi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdVerified, MdLocalShipping } from "react-icons/md";
import products from "../../data/products";
import Card from "./Card";
import { useCart } from "../../CartContext";



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

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [liked, setLiked] = useState(false);
  const product = products.find((p) => p.id === parseInt(id));
  const { cartItems } = useCart();
  const inCart = cartItems.some((item) => item.id === product.id);
  const [activeImg, setActiveImg] = useState(0);
  

  

  if (!product) {
    return (
      <div className="detail-not-found">
        <p>Producto no encontrado.</p>
        <button onClick={() => navigate("/")}>Volver al inicio</button>
      </div>
    );
  }

  const images = [product.image, product.image, product.image, product.image];

  const tagMap = {
    "recomendado": "🔥 Recomendado",
    "alta-gama": "⭐ Alta Gama",
    "baja-gama": "💰 Mejor Precio",
  };

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 6);

  const formatPrice = (value) =>
    value.toLocaleString("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 });

const handleAddToCart = () => {
  if (!inCart) addToCart({ id: product.id, name: product.name, price: product.price, image: product.image });
  
};

  return (
    <div className="detail-page">

      {/* Botón volver */}
      <button className="detail-back" onClick={() => navigate(-1)}>
        <IoArrowBack /> Volver
      </button>

      {/* ===== ZONA 1: HEADER — Nombre + Tag ===== */}
      <div className="detail-header">
        <span className="detail-tag-badge">{tagMap[product.tag]}</span>
        <h1 className="detail-name">{product.name}</h1>
      </div>

      {/* ===== ZONA 2: GALERÍA + INFO ===== */}
      <div className="detail-zone2">

        {/* Miniaturas verticales */}
        <div className="detail-thumbs-vertical">
          {images.map((img, i) => (
            <div
              key={i}
              className={`detail-thumb ${activeImg === i ? "active" : ""}`}
              onClick={() => setActiveImg(i)}
            >
              <img src={img} alt={`${product.name} ${i + 1}`} />
            </div>
          ))}
        </div>

        {/* Imagen principal */}
        <div className="detail-img-main">
          <button className="detail-arrow left" onClick={() => setActiveImg((i) => (i - 1 + images.length) % images.length)}>&#8249;</button>
          <img src={images[activeImg]} alt={product.name} />
          <button className="detail-arrow right" onClick={() => setActiveImg((i) => (i + 1) % images.length)}>&#8250;</button>
        </div>

        {/* Panel derecho — precio, rating, botones */}
        <div className="detail-panel">
          <div className="detail-meta">
            <StarRating rating={4.5} />
            <span className="detail-rating-text">4.5 / 5.0</span>
            <span className="detail-divider">|</span>
            <span className="detail-stock">
              <MdVerified className="stock-icon" /> En stock
            </span>
          </div>

          <div className="detail-price-big">
            {formatPrice(product.price)}
          </div>

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

          {/* Categoría */}
          <div className="detail-category-info">
            <span className="detail-category-label">Categoría</span>
            <span className="detail-category-value">{product.category}</span>
          </div>
        </div>
      </div>

      {/* ===== ZONA 3: DESCRIPCIÓN + SPECS ===== */}
      <div className="detail-zone3">

        {/* Descripción */}
        <div className="detail-card detail-description-card">
          <h3 className="detail-card-title">📋 Descripción</h3>
          <p className="detail-description-text">{product.description}</p>
        </div>

        {/* Especificaciones */}
        {product.specs && (
          <div className="detail-card detail-specs-card">
            <h3 className="detail-card-title">⚙️ Especificaciones técnicas</h3>
            <div className="detail-specs-grid">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="detail-spec-row">
                  <span className="spec-key">{key}</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ===== ZONA 4: RELACIONADOS ===== */}
      {related.length > 0 && (
        <div className="detail-related">
          <h2 className="detail-related-title">👀 Productos que podrían interesarte</h2>
          <div className="detail-related-grid">
            {related.map((p) => (
              <Card
                key={p.id}
                id={p.id}
                name={p.name}
                price={p.price}
                image={p.image}
                description={p.description}
                viewMode="grid"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;