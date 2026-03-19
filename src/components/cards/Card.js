  import React, { useState } from "react";
  import { PiShoppingCartSimple } from "react-icons/pi";
  import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

  function Card({ name, price, image }) {
    const [inCart, setInCart] = useState(false);
    const [liked, setLiked] = useState(false);

    const formatPrice = (value) =>
      value.toLocaleString("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 });

return (
    <div className="card-custom">
      <div className="card-img-container">
        <img src={image} className="card-img" alt={name} style={{ cursor: "pointer" }} />

        <div className={`heart-icon ${liked ? "active" : ""}`} onClick={() => setLiked(!liked)}>
          {liked ? <IoMdHeart /> : <IoMdHeartEmpty />}
        </div>

        <div className={`cart-icon ${inCart ? "active" : ""}`} onClick={() => setInCart(!inCart)}>
          <PiShoppingCartSimple />
          
        </div>
      </div>

      <div className="card-body">
        <p className="card-title">{name}</p>
        <div className="card-price-row">
          <span className="card-price-label">Precio</span>
          <span className="card-price-value">{formatPrice(price)}</span>
        </div>
      </div>
    </div>
  );
  }
  export default Card;