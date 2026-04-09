import React, { useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsGrid3X3Gap, BsList } from "react-icons/bs";
import products from "../../data/products";
import Card from "./Card";




const SLUG_TO_CATEGORY = {
  "sets-y-combos": "Sets y Combos",
  "memorias-ram": "Memorias RAM",
  "placas-madre": "Placas Madre",
  "monitores": "Monitores",
  "perifericos": "Periféricos",
};

function CategoryPage() {
  const { slug, sub } = useParams();
  const categoryName = SLUG_TO_CATEGORY[slug];
  const [selectedBrand, setSelectedBrand] = useState("Todos");


  const [sortBy, setSortBy] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Ordenar por");

  const categoryProducts = useMemo(
    () => products.filter((p) => p.category === categoryName),
    [categoryName]
  );

  const brands = useMemo(() => {
    const set = new Set(categoryProducts.map((p) => p.brand));
    return ["Todos", ...Array.from(set)];
  }, [categoryProducts]);

  
  useEffect(() => {
  if (!sub) return;
  const match = brands.find(
    (b) => b.toLowerCase().replace(/[\s.]/g, "-") === sub
  );
  if (match) setSelectedBrand(match);
}, [sub, brands]);


  const carouselProducts = useMemo(() => {
    if (selectedBrand === "Todos") return categoryProducts;
    return categoryProducts.filter((p) => p.brand === selectedBrand);
  }, [categoryProducts, selectedBrand]);

  const filteredProducts = useMemo(() => {
    let list = [...carouselProducts];
    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sortBy === "name-asc") list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [carouselProducts, sortBy]);

  const handleSort = (label, value) => {
    setSelectedSort(label);
    setSortBy(value);
    setSortOpen(false);
  };

  if (!categoryName) {
    return (
      <div className="category-page-not-found">
        <h2>Categoría no encontrada</h2>
        <p>La categoría que buscas no existe o aún no está disponible.</p>
      </div>
    );
  }

  if (categoryName === "Sets y Combos") {
  return (
    <div className="category-page">
      <div className="category-page-header">
        <h1 className="category-page-title">Sets y Combos</h1>
        <p className="category-page-subtitle">Configuraciones completas para tu setup</p>
      </div>
      <div className="category-coming-soon">
        <span className="coming-soon-icon">🎮</span>
        <h2>Próximamente</h2>
        <p>Estamos armando los mejores combos gaming para ti.<br/>Vuelve pronto.</p>
      </div>
    </div>
  );
}



  return (
    <div className="category-page">

      {/* HEADER */}
      <div className="category-page-header">
        <h1 className="category-page-title">{categoryName}</h1>
        <p className="category-page-subtitle">{categoryProducts.length} productos disponibles</p>
      </div>

      {/* TABS DE MARCA */}
      <div className="brand-tabs">
        {brands.map((brand) => (
          <button
            key={brand}
            className={`brand-tab ${selectedBrand === brand ? "brand-tab--active" : ""}`}
            onClick={() => setSelectedBrand(brand)}
          >
            {brand}
          </button>
        ))}
      </div>

      {/* CARRUSEL 3D */}
      <BrandCarousel products={carouselProducts} />

      {/* BARRA DE FILTROS */}
      <div className="category-filter-bar">

        <div className="view-toggle">
          <button
            className={`toggle-btn ${viewMode === "grid" ? "active" : ""}`}
            onClick={() => setViewMode("grid")}
          >
            <BsGrid3X3Gap />
          </button>
          <button
            className={`toggle-btn ${viewMode === "list" ? "active" : ""}`}
            onClick={() => setViewMode("list")}
          >
            <BsList />
          </button>
        </div>

        <div className="filter-dropdown" tabIndex={0} onBlur={() => setSortOpen(false)}>
          <button className="filter-button" onClick={() => setSortOpen((v) => !v)}>
            {selectedSort} <span className="arrow">&#9662;</span>
          </button>
          {sortOpen && (
            <ul className="filter-menu">
              <li onMouseDown={() => handleSort("Precio Alto", "price-desc")}>Precio Alto</li>
              <li onMouseDown={() => handleSort("Precio Bajo", "price-asc")}>Precio Bajo</li>
              <li onMouseDown={() => handleSort("Nombre A-Z", "name-asc")}>Nombre A-Z</li>
            </ul>
          )}
        </div>

        <span className="category-results-count">
          {filteredProducts.length} resultados
        </span>

      </div>

      {/* GRID DE PRODUCTOS */}
      <div className={`card-grid ${viewMode === "list" ? "card-grid--list" : ""}`}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              viewMode={viewMode}
            />
          ))
        ) : (
          <div className="category-no-results">
            <p>No hay productos con estos filtros.</p>
            <button
              className="brand-tab brand-tab--active"
              onClick={() => setSelectedBrand("Todos")}
            >
              Ver todos
            </button>
          </div>
        )}
      </div>

    </div>
  );
}

// Carrusel 3D — siempre grid, independiente del toggle
function BrandCarousel({ products }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i - 1 + products.length) % products.length);
  const next = () => setActiveIndex((i) => (i + 1) % products.length);

  if (!products.length) return null;

  return (
    <div className="category-carousel">
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
                  viewMode="grid"
                  id={product.id}
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

export default CategoryPage;