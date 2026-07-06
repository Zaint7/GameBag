import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { BsTagFill } from "react-icons/bs";
import { MdComputer, MdBuild, MdSportsEsports } from "react-icons/md";
import { GiVrHeadset } from "react-icons/gi";
import { FaHeadset, FaTshirt, FaMobileAlt } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { IoGameControllerOutline } from "react-icons/io5";
import ROUTES from "../../config/routes";


const categories = [
  {
    label: "Ofertas y Promociones",
    icon: <BsTagFill />,
    slug: "ofertas",
    subcategories: [],
  },
  {
    label: "Sets y Combos",
    icon: <MdComputer />,
    slug: "sets-y-combos",
    subcategories: ["Gamer", "Oficina", "Streaming"],
  },
  {
    label: "Consolas",
    icon: <SiNintendoswitch />,
    slug: "consolas",
    subcategories: ["PlayStation", "Xbox", "Nintendo", "Retro"],
  },
  {
    label: "Juegos de Videojuegos",
    icon: <MdSportsEsports />,
    slug: "juegos",
    subcategories: ["PS5", "Xbox Series", "Nintendo Switch", "PC"],
  },
  {
    label: "Accesorios",
    icon: <FaHeadset />,
    slug: "accesorios",
    subcategories: ["Teclados", "Mouses", "Headsets", "Sillas Gamer"],
  },
  {
    label: "PC Gamer",
    icon: <MdComputer />,
    slug: "pc-gamer",
    subcategories: ["Procesadores", "RAM", "Almacenamiento", "Fuentes"],
  },
  {
    label: "Realidad Virtual",
    icon: <GiVrHeadset />,
    slug: "realidad-virtual",
    subcategories: ["Meta Quest", "PlayStation VR", "PC VR"],
  },
  {
    label: "Tecnología General",
    icon: <FaMobileAlt />,
    slug: "tecnologia-general",
    subcategories: ["Android", "iOS", "SmartWatch"],
  },
  {
    label: "Merch y Coleccionables",
    icon: <FaTshirt />,
    slug: "merch",
    subcategories: ["Camisetas", "Tazas coleccionables", "Llaveros"],
  },
  {
    label: "Software y Suscripciones",
    icon: <TbDeviceGamepad2 />,
    slug: "software",
    subcategories: ["Game Pass", "PlayStation Plus", "EA Play", "Steam"],
  },
  {
    label: "Reparación y Servicios",
    icon: <MdBuild />,
    slug: "reparacion",
    subcategories: ["Consolas", "PC", "Celulares"],
  },
];

function Sidebar({ isOpen, onClose }) {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const navigate = useNavigate();

  const handleCategoryClick = (slug) => {
  const route = ROUTES[slug] || `/categoria/${slug}`;
  navigate(route);
  onClose();
};

  const handleSubcategoryClick = (e, catSlug, sub) => {
    e.stopPropagation();
    const subSlug = sub.toLowerCase().replace(/\s+/g, "-");
    navigate(`/categoria/${catSlug}/${subSlug}`);
    onClose();
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

      <div className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>

        {/* Header */}
        <div className="sidebar-header">
          
                  <div className="logo-container-sidebar">
                    <IoGameControllerOutline className="gamepad-icon2" onClick={onClose}/>
                  </div>
          <span className="sidebar-logo">GameBag</span>
          <button className="sidebar-close" onClick={onClose}>
            <IoClose />
          </button>
        </div>

        {/* Lista de categorías */}
        <ul className="sidebar-list">
          {categories.map((cat) => (
            <li
              key={cat.slug}
              className={`sidebar-item ${hoveredCategory === cat.slug ? "sidebar-item--active" : ""}`}
              onMouseEnter={() => setHoveredCategory(cat.slug)}
              onMouseLeave={() => setHoveredCategory(null)}
              onClick={() => handleCategoryClick(cat.slug)}
            >
              <span className="sidebar-icon">{cat.icon}</span>
              <span className="sidebar-label">{cat.label}</span>

              {/* Mega menú */}
              {cat.subcategories.length > 0 && hoveredCategory === cat.slug && (
                <div
                  className="sidebar-megamenu"
                  onMouseEnter={() => setHoveredCategory(cat.slug)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <h4 className="megamenu-title">{cat.label}</h4>
                  <ul className="megamenu-list">
                    {cat.subcategories.map((sub) => (
                      <li
                        key={sub}
                        className="megamenu-item"
                        onClick={(e) => handleSubcategoryClick(e, cat.slug, sub)}
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
