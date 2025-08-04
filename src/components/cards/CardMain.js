import React, { useState } from 'react';
import { PiShoppingCartSimple } from 'react-icons/pi';
import { IoMdHeart,IoMdHeartEmpty } from "react-icons/io";
import favicon from "../../images/asus.jpg";


function Card() {
  const [inCart, setInCart] = useState(false);
  const [liked, setLiked] = useState(false);
  const toggleCart = () => {
    setInCart(!inCart);}  
  const toggleLike = () =>{ setLiked(!liked);
  };

  return (
    <div className="card-custom2">
      <div className="card-img-container2">
      <img src={favicon} className="card-img2" alt="favicon" />

      <div className={`heart-icon2 ${liked ? "active" : ""}`} onClick={toggleLike}>
          {liked ? <IoMdHeart /> : <IoMdHeartEmpty />}
        </div>

      <div className={`cart-icon2 ${inCart ? "active" : ""}`} 
          onClick={toggleCart}>
            <PiShoppingCartSimple />
          {inCart && <span className="plus-inside2">+</span>}
        </div>
      </div>
      <div className="card-body2">
        <p className="card-text2">
          ASUS TUF Gaming GeForce RTX 4070 Ti Super Edition Tarjeta gráfica
        </p>
      </div>
    </div>
  );
}

export default Card;
