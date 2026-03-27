import Card from "./Card";
import CategoryCarousel from "./CategoryCarousel";
import products from "../../data/products";
import "../../App.css";

function CardGrid({ viewMode }) {
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="cardgrid-wrapper">
      {categories.map(category => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          {viewMode === "list" ? (
            <div className="card-grid card-grid--list">
              {products
                .filter(p => p.category === category)
                .map(product => (
                  <Card
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    description={product.description}
                    viewMode={viewMode}
                  />
                ))}
            </div>
          ) : (
            <CategoryCarousel
              products={products.filter(p => p.category === category)}
              viewMode={viewMode}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default CardGrid;