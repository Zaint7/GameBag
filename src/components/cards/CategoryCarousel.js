import React, { useState } from "react";
import Card from "./Card";

function CategoryCarousel({ products, viewMode, subtitle }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i - 1 + products.length) % products.length);
  const next = () => setActiveIndex((i) => (i + 1) % products.length);

  return (
    <div className="category-carousel">
      <p className="carousel-subtitle">{subtitle}</p>

      <div className="carousel3d-wrapper">
        <button className="carousel3d-btn" onClick={prev}>&#8249;</button>

        <div className="carousel3d">
          {products.map((product, i) => {
            const offset = i - activeIndex;
            const absOffset = Math.abs(offset);
            const direction = offset < 0 ? -1 : 1;

            const style = {
              "--offset": offset,
              "--abs-offset": absOffset,
              "--direction": direction,
              zIndex: products.length - absOffset,
              opacity: absOffset > 2 ? 0 : 1,
              pointerEvents: absOffset > 2 ? "none" : "all",
            };

            return (
              <div className="carousel3d-card" key={product.id} style={style}>
                <Card
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                  viewMode={viewMode}
                />
              </div>
            );
          })}
        </div>

        <button className="carousel3d-btn" onClick={next}>&#8250;</button>
      </div>
    </div>
  );
}

export default CategoryCarousel;