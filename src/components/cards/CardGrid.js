import Card from "./Card";
import products from "../../data/products";
import "../../App.css";

function CardGrid({ viewMode }) {
  return (
    <div className={`card-grid ${viewMode === "list" ? "card-grid--list" : ""}`}>
      {products.map((product) => (
        <Card key={product.id} 
        name={product.name} 
        price={product.price} 
        image={product.image} 
        description={product.description}
        viewMode={viewMode}
        />
      ))}
    </div>
  );
}

export default CardGrid;