import Card from "./Card";
import CategoryCarousel from "./CategoryCarousel";
import products from "../../data/products";
import "../../App.css";

const sections = [
  { tag: "recomendado", label: "🔥Recomendado" },
  { tag: "alta-gama",   label: "⭐Alta Gama" },
  { tag: "baja-gama",   label: "💰Mejor Precio" },
];

function sortProducts(arr, sortBy) {
  console.log("sortBy:", sortBy, "primer precio:", arr[0]?.price);
  const copy = [...arr];
  if (sortBy === "price-desc") return copy.sort((a, b) => b.price - a.price);
  if (sortBy === "price-asc")  return copy.sort((a, b) => a.price - b.price);
  if (sortBy === "name-asc")   return copy.sort((a, b) =>
    a.name.localeCompare(b.name, "es", { sensitivity: "base" })
  );
  return copy;
}

function CardGrid({ viewMode, sortBy }) {
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="cardgrid-wrapper">
      {categories.map(category => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category}</h2>

          {viewMode === "list" ? (
            <div className="card-grid card-grid--list">
              {sortProducts(products.filter(p => p.category === category), sortBy)
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
            sections.map(({ tag, label }) => {
              const filtered = sortProducts(
                products.filter(p => p.category === category && p.tag === tag),
                sortBy
              );
              if (filtered.length === 0) return null;

              return (
                <CategoryCarousel
                  key={`${tag}-${sortBy}`}
                  products={filtered}
                  subtitle={label}
                  viewMode={viewMode}
                />
              );
            })
          )}
        </div>
      ))}
    </div>
  );
}

export default CardGrid;