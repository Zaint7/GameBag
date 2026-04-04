import React, { useState } from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useCart } from "../../CartContext";
import { useNavigate } from "react-router-dom";

function Card({ id, name, price, image, description, viewMode }) {
  const [inCart, setInCart] = useState(false);
  const [liked, setLiked] = useState(false);
  const { addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const formatPrice = (value) =>
    value.toLocaleString("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 });

  const handleCartClick = (e) => {
  e.stopPropagation();
  if (inCart) {
    removeFromCart(id);
  } else {
    addToCart({ id, name, price, image });
  }
  setInCart(!inCart);
};

  const handleHeartClick = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const handleNavigate = () => {
    if (id) navigate(`/producto/${id}`);
  };

  return (
    <div className={`card-custom ${viewMode === "list" ? "card-custom--list" : ""}`}>
      <div className="card-img-container" onClick={handleNavigate} style={{ cursor: id ? "pointer" : "default" }}>
        <img src={image} className="card-img" alt={name} />

        <div className={`heart-icon ${liked ? "active" : ""}`} onClick={handleHeartClick}>
          {liked ? <IoMdHeart /> : <IoMdHeartEmpty />}
        </div>

        <div className={`cart-icon ${inCart ? "active" : ""}`} onClick={handleCartClick}>
          <PiShoppingCartSimple />
        </div>
      </div>

      <div className="card-body">
        <span className="card-title" onClick={handleNavigate} style={{ cursor: id ? "pointer" : "default" }}>
          {name}
        </span>
        {viewMode === "list" && (
          <p className="card-description">{description}</p>
        )}
        <div className="card-price-row">
          <span className="card-price-label">Precio</span>
          <span className="card-price-value">{formatPrice(price)}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;