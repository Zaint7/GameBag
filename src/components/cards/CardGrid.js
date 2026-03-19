import Card from "./Card";
import products from "../../data/products";
import "../../App.css";

function CardGrid() {
  return (
    <div className="card-grid">
      {products.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default CardGrid;