const products = [
  // ===== TARJETAS GRÁFICAS =====
  {
    id: 1,
    name: "ASUS TUF Gaming GeForce RTX 4070 Ti Super",
    price: 3899000,
    category: "Tarjetas Gráficas",
    image: require("../images/asus.jpg"),
    description: "GPU de alto rendimiento con arquitectura Ada Lovelace, ideal para gaming 4K y creación de contenido exigente."
  },
  {
    id: 2,
    name: "MSI Gaming GeForce GTX 1650 128-Bit HDMI",
    price: 665900,
    category: "Tarjetas Gráficas",
    image: require("../images/asus.jpg"),
    description: "Tarjeta de gama entrada con bajo consumo energético, perfecta para gaming casual en 1080p."
  },
  {
    id: 3,
    name: "Gigabyte Radeon RX 6600 Eagle 8GB GDDR6",
    price: 1250000,
    category: "Tarjetas Gráficas",
    image: require("../images/asus.jpg"),
    description: "GPU AMD de gama media con 8GB GDDR6, diseñada para gaming fluido en 1080p con ray tracing."
  },
  {
    id: 4,
    name: "ASUS ROG Strix GeForce RTX 3080 10GB GDDR6X",
    price: 4200000,
    category: "Tarjetas Gráficas",
    image: require("../images/asus.jpg"),
    description: "Tarjeta insignia de la línea ROG con triple ventilador, dominante en resoluciones 4K y VR."
  },  

  {
  id: 21,
  name: "Sapphire Radeon RX 7600 Pulse 8GB GDDR6",
  price: 1450000,
  category: "Tarjetas Gráficas",
  image: require("../images/asus.jpg"),
  description: "GPU AMD de nueva generación con eficiencia mejorada, ideal para 1080p y 1440p con alto framerate."
},
{
  id: 22,
  name: "MSI GeForce RTX 4060 Gaming X 8GB GDDR6",
  price: 1890000,
  category: "Tarjetas Gráficas",
  image: require("../images/asus.jpg"),
  description: "Tarjeta NVIDIA de gama media-alta con DLSS 3 y ray tracing, perfecta para 1440p."
},
{
  id: 23,
  name: "Gigabyte GeForce RTX 4090 Gaming OC 24GB",
  price: 9800000,
  category: "Tarjetas Gráficas",
  image: require("../images/asus.jpg"),
  description: "La GPU más potente del mercado para gaming 4K extremo, renderizado profesional y IA."
},
{
  id: 24,
  name: "XFX Radeon RX 6700 XT Speedster QICK 12GB",
  price: 1750000,
  category: "Tarjetas Gráficas",
  image: require("../images/asus.jpg"),
  description: "GPU AMD con 12GB de VRAM y excelente rendimiento en 1440p con alta tasa de refresco."
},

  // ===== MEMORIAS RAM =====
  {
    id: 5,
    name: "Corsair Vengeance RGB 16GB DDR4 3200MHz",
    price: 320000,
    category: "Memorias RAM",
    image: require("../images/asus.jpg"),
    description: "Kit de memoria DDR4 con iluminación RGB, alto rendimiento para gaming y multitarea exigente."
  },
  {
    id: 6,
    name: "Kingston Fury Beast 32GB DDR5 5200MHz",
    price: 780000,
    category: "Memorias RAM",
    image: require("../images/asus.jpg"),
    description: "Memoria DDR5 de última generación, ideal para plataformas Intel y AMD de nueva generación."
  },
  {
    id: 7,
    name: "G.Skill Trident Z5 RGB 32GB DDR5 6000MHz",
    price: 950000,
    category: "Memorias RAM",
    image: require("../images/asus.jpg"),
    description: "RAM de alto desempeño con perfil XMP 3.0, diseñada para overclockers y entusiastas del PC."
  },
  {
    id: 8,
    name: "TeamGroup T-Force Delta 16GB DDR4 3600MHz",
    price: 290000,
    category: "Memorias RAM",
    image: require("../images/asus.jpg"),
    description: "Memoria DDR4 con diseño espejo RGB, equilibrio perfecto entre precio y rendimiento gaming."
  },

  {
  id: 25,
  name: "Corsair Vengeance RGB Pro 32GB DDR4 3200MHz",
  price: 420000,
  category: "Memorias RAM",
  image: require("../images/asus.jpg"),
  description: "Kit de memoria DDR4 con iluminación RGB y alto rendimiento para gaming y multitarea."
},
{
  id: 26,
  name: "Kingston Fury Beast 16GB DDR5 5200MHz",
  price: 380000,
  category: "Memorias RAM",
  image: require("../images/asus.jpg"),
  description: "Memoria DDR5 de última generación con velocidades extremas para plataformas de nueva generación."
},
{
  id: 27,
  name: "G.Skill Trident Z5 RGB 64GB DDR5 6000MHz",
  price: 980000,
  category: "Memorias RAM",
  image: require("../images/asus.jpg"),
  description: "Kit premium DDR5 con RGB sincronizable, ideal para workstations y gaming de alto nivel."
},
{
  id: 28,
  name: "TeamGroup T-Force Vulcan 32GB DDR4 3600MHz",
  price: 310000,
  category: "Memorias RAM",
  image: require("../images/asus.jpg"),
  description: "Memoria DDR4 de alto rendimiento con diseño agresivo y excelente overclocking."
},

  // ===== PLACAS MADRE =====
  {
    id: 9,
    name: "ASUS ROG Strix B650E-F Gaming WiFi",
    price: 1850000,
    category: "Placas Madre",
    image: require("../images/asus.jpg"),
    description: "Motherboard AMD AM5 con PCIe 5.0, WiFi 6E y soporte DDR5 para procesadores Ryzen 7000."
  },
  {
    id: 10,
    name: "MSI MAG Z790 Tomahawk WiFi DDR4",
    price: 1450000,
    category: "Placas Madre",
    image: require("../images/asus.jpg"),
    description: "Placa Intel LGA1700 con soporte DDR4, ideal para builds de alto rendimiento con Core i9."
  },
  {
    id: 11,
    name: "Gigabyte B550 AORUS Elite AX V2",
    price: 890000,
    category: "Placas Madre",
    image: require("../images/asus.jpg"),
    description: "Motherboard AMD AM4 con WiFi integrado, perfecta para Ryzen 5000 con buen precio-rendimiento."
  },
  {
    id: 12,
    name: "ASRock Z690 Phantom Gaming 4 DDR4",
    price: 750000,
    category: "Placas Madre",
    image: require("../images/asus.jpg"),
    description: "Placa Intel con soporte PCIe 5.0 y DDR4, opción económica para plataforma Alder Lake."
  },

  {
  id: 29,
  name: "ASUS ROG Strix B650E-F Gaming WiFi",
  price: 1650000,
  category: "Placas Madre",
  image: require("../images/asus.jpg"),
  description: "Placa AM5 con soporte DDR5, PCIe 5.0 y WiFi 6E integrado para builds de alto rendimiento."
},
{
  id: 30,
  name: "MSI MAG Z790 Tomahawk WiFi",
  price: 1450000,
  category: "Placas Madre",
  image: require("../images/asus.jpg"),
  description: "Placa LGA1700 con VRM robusto, PCIe 5.0 y soporte para memoria DDR5 de alta velocidad."
},
{
  id: 31,
  name: "Gigabyte B550 Aorus Elite AX V2",
  price: 890000,
  category: "Placas Madre",
  image: require("../images/asus.jpg"),
  description: "Placa AM4 con WiFi integrado, PCIe 4.0 y diseño optimizado para Ryzen de tercera generación."
},
{
  id: 32,
  name: "ASRock Z690 Steel Legend WiFi 6E",
  price: 1120000,
  category: "Placas Madre",
  image: require("../images/asus.jpg"),
  description: "Placa LGA1700 con diseño Steel Legend, soporte DDR4/DDR5 y conectividad WiFi 6E."
},

  // ===== MONITORES =====
  {
    id: 13,
    name: "LG UltraGear 27GP850-B 27\" 165Hz QHD",
    price: 1650000,
    category: "Monitores",
    image: require("../images/asus.jpg"),
    description: "Monitor gaming QHD con panel Nano IPS, 1ms de respuesta y 165Hz para gaming competitivo."
  },
  {
    id: 14,
    name: "Samsung Odyssey G5 34\" Curvo WQHD 165Hz",
    price: 2100000,
    category: "Monitores",
    image: require("../images/asus.jpg"),
    description: "Monitor ultrawide curvo con resolución WQHD, experiencia inmersiva para gaming y productividad."
  },
  {
    id: 15,
    name: "ASUS TUF Gaming VG279QM 27\" 280Hz FHD",
    price: 1350000,
    category: "Monitores",
    image: require("../images/asus.jpg"),
    description: "Monitor Full HD con 280Hz y ELMB Sync, diseñado para eSports y gaming de alta velocidad."
  },
  {
    id: 16,
    name: "AOC Q27G2S 27\" QHD IPS 165Hz",
    price: 980000,
    category: "Monitores",
    image: require("../images/asus.jpg"),
    description: "Monitor QHD con panel IPS y 165Hz, excelente relación calidad-precio para gaming 1440p."
  },
  {
  id: 33,
  name: "LG 27GP850-B 27\" QHD 165Hz Nano IPS",
  price: 1350000,
  category: "Monitores",
  image: require("../images/asus.jpg"),
  description: "Monitor gaming QHD con panel Nano IPS, 165Hz y 1ms para una experiencia visual fluida."
},
{
  id: 34,
  name: "Samsung Odyssey G7 32\" QHD 240Hz VA",
  price: 2100000,
  category: "Monitores",
  image: require("../images/asus.jpg"),
  description: "Monitor curvo 1000R con panel VA, 240Hz y HDR600 para gaming inmersivo de alta gama."
},
{
  id: 35,
  name: "ASUS ROG Swift PG279QM 27\" QHD 240Hz",
  price: 2800000,
  category: "Monitores",
  image: require("../images/asus.jpg"),
  description: "Monitor IPS con G-Sync, 240Hz y Extreme Low Motion Blur para competitivo profesional."
},
{
  id: 36,
  name: "AOC 24G2SP 24\" FHD 165Hz IPS",
  price: 750000,
  category: "Monitores",
  image: require("../images/asus.jpg"),
  description: "Monitor FHD de entrada con panel IPS, 165Hz y tiempo de respuesta de 1ms a precio accesible."
},

  // ===== PERIFÉRICOS =====
  {
    id: 17,
    name: "Logitech G Pro X Superlight 2 Mouse",
    price: 620000,
    category: "Periféricos",
    image: require("../images/asus.jpg"),
    description: "Mouse inalámbrico ultraligero de 60g con sensor HERO 2, el favorito de los jugadores profesionales."
  },
  {
    id: 18,
    name: "Razer BlackWidow V4 Pro Teclado Mecánico",
    price: 890000,
    category: "Periféricos",
    image: require("../images/asus.jpg"),
    description: "Teclado mecánico inalámbrico con switches Razer Yellow, RGB Chroma y rueda multimedia dedicada."
  },
  {
    id: 19,
    name: "HyperX Cloud Alpha Wireless Headset",
    price: 750000,
    category: "Periféricos",
    image: require("../images/asus.jpg"),
    description: "Auriculares gaming con hasta 300 horas de batería, sonido DTS y micrófono con cancelación de ruido."
  },
  {
    id: 20,
    name: "SteelSeries Arctis Nova Pro Wireless",
    price: 1200000,
    category: "Periféricos",
    image: require("../images/asus.jpg"),
    description: "Headset premium con sistema de batería intercambiable, audio Hi-Fi y cancelación activa de ruido."
  },

  {
  id: 37,
  name: "Logitech G Pro X Superlight 2 Mouse",
  price: 580000,
  category: "Periféricos",
  image: require("../images/asus.jpg"),
  description: "Mouse gaming ultraligero de 60g con sensor HERO 2 de 32000 DPI y batería de 95 horas."
},
{
  id: 38,
  name: "Razer BlackWidow V4 Pro Teclado Mecánico",
  price: 920000,
  category: "Periféricos",
  image: require("../images/asus.jpg"),
  description: "Teclado mecánico con switches Razer Green, RGB Chroma y rueda multimedia multifunción."
},
{
  id: 39,
  name: "HyperX Cloud Alpha S Audífonos Gaming",
  price: 420000,
  category: "Periféricos",
  image: require("../images/asus.jpg"),
  description: "Audífonos con drivers duales de cámara, sonido 7.1 virtual y micrófono desmontable con cancelación de ruido."
},
{
  id: 40,
  name: "SteelSeries Arctis Nova Pro Wireless",
  price: 1250000,
  category: "Periféricos",
  image: require("../images/asus.jpg"),
  description: "Audífonos inalámbricos premium con sistema de batería intercambiable y sonido Hi-Res certificado."
},



];

export default products;