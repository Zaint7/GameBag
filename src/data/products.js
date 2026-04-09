const products = [

  // ===== TARJETAS GRÁFICAS (1-10) =====

  {
    id: 1,
    name: "ASUS TUF Gaming GeForce RTX 4070 Ti Super",
    price: 3899000,
    category: "Tarjetas Gráficas",
    tag: "recomendado",
    brand: "NVIDIA",
    image: require("../images/asus.jpg"),
    description: "GPU de alto rendimiento con arquitectura Ada Lovelace, ideal para gaming 4K y creación de contenido exigente. Diseñada para dominar en resoluciones altas con eficiencia térmica y acústica sobresaliente.",
    specs: {
      "GPU": "NVIDIA GeForce RTX 4070 Ti SUPER",
      "CUDA Cores": "8,448",
      "Memoria": "16GB GDDR6X",
      "Bus de memoria": "256-bit",
      "Frecuencia Boost": "2,670 MHz",
      "Frecuencia Base": "2,340 MHz",
      "TDP": "285W",
      "Fuente recomendada": "750W",
      "Salidas": "3x DisplayPort 1.4a, 1x HDMI 2.1",
      "Tecnologías": "DLSS 3, Ray Tracing, Resizable BAR"
    }
  },
  {
    id: 2,
    name: "MSI GeForce RTX 4060 Gaming X 8GB GDDR6",
    price: 1890000,
    category: "Tarjetas Gráficas",
    tag: "recomendado",
    brand: "NVIDIA",
    image: require("../images/asus.jpg"),
    description: "Tarjeta NVIDIA de gama media-alta con DLSS 3 y ray tracing, perfecta para 1440p.",
    specs: {
      "GPU": "NVIDIA GeForce RTX 4060",
      "CUDA Cores": "3,072",
      "Memoria": "8GB GDDR6",
      "Bus de memoria": "128-bit",
      "Frecuencia Boost": "2,460 MHz",
      "TDP": "115W",
      "Fuente recomendada": "550W",
      "Salidas": "3x DisplayPort 1.4a, 1x HDMI 2.1",
      "Tecnologías": "DLSS 3, Ray Tracing, Ada Lovelace"
    }
  },
  {
    id: 3,
    name: "Sapphire Radeon RX 7600 Pulse 8GB GDDR6",
    price: 1450000,
    category: "Tarjetas Gráficas",
    tag: "recomendado",
    brand: "AMD",
    image: require("../images/asus.jpg"),
    description: "GPU AMD de nueva generación con eficiencia mejorada, ideal para 1080p y 1440p con alto framerate.",
    specs: {
      "GPU": "AMD Radeon RX 7600",
      "Stream Processors": "2,048",
      "Memoria": "8GB GDDR6",
      "Bus de memoria": "128-bit",
      "Frecuencia Boost": "2,655 MHz",
      "TDP": "165W",
      "Fuente recomendada": "550W",
      "Salidas": "1x HDMI 2.1, 3x DisplayPort 2.1",
      "Tecnologías": "FSR 3, Ray Tracing, RDNA 3"
    }
  },
  {
    id: 4,
    name: "XFX Radeon RX 6700 XT Speedster QICK 12GB",
    price: 1750000,
    category: "Tarjetas Gráficas",
    tag: "recomendado",
    brand: "AMD",
    image: require("../images/asus.jpg"),
    description: "GPU AMD con 12GB de VRAM y excelente rendimiento en 1440p con alta tasa de refresco.",
    specs: {
      "GPU": "AMD Radeon RX 6700 XT",
      "Stream Processors": "2,560",
      "Memoria": "12GB GDDR6",
      "Bus de memoria": "192-bit",
      "Frecuencia Boost": "2,581 MHz",
      "TDP": "230W",
      "Fuente recomendada": "650W",
      "Salidas": "1x HDMI 2.1, 3x DisplayPort 1.4",
      "Tecnologías": "FSR 2, Ray Tracing, RDNA 2"
    }
  },
  {
    id: 5,
    name: "ASUS ROG Strix GeForce RTX 3080 10GB GDDR6X",
    price: 4200000,
    category: "Tarjetas Gráficas",
    tag: "alta-gama",
    brand: "NVIDIA",
    image: require("../images/asus.jpg"),
    description: "Tarjeta insignia de la línea ROG con triple ventilador, dominante en resoluciones 4K y VR.",
    specs: {
      "GPU": "NVIDIA GeForce RTX 3080",
      "CUDA Cores": "8,704",
      "Memoria": "10GB GDDR6X",
      "Bus de memoria": "320-bit",
      "Frecuencia Boost": "1,935 MHz",
      "TDP": "370W",
      "Fuente recomendada": "850W",
      "Salidas": "3x DisplayPort 1.4a, 2x HDMI 2.1",
      "Tecnologías": "DLSS 2, Ray Tracing, Ampere"
    }
  },
  {
    id: 6,
    name: "Gigabyte GeForce RTX 4090 Gaming OC 24GB",
    price: 9800000,
    category: "Tarjetas Gráficas",
    tag: "alta-gama",
    brand: "NVIDIA",
    image: require("../images/asus.jpg"),
    description: "La GPU más potente del mercado para gaming 4K extremo, renderizado profesional y IA.",
    specs: {
      "GPU": "NVIDIA GeForce RTX 4090",
      "CUDA Cores": "16,384",
      "Memoria": "24GB GDDR6X",
      "Bus de memoria": "384-bit",
      "Frecuencia Boost": "2,535 MHz",
      "TDP": "450W",
      "Fuente recomendada": "1000W",
      "Salidas": "3x DisplayPort 1.4a, 1x HDMI 2.1",
      "Tecnologías": "DLSS 3, Ray Tracing, Ada Lovelace"
    }
  },
  {
    id: 7,
    name: "Gigabyte Radeon RX 6600 Eagle 8GB GDDR6",
    price: 1250000,
    category: "Tarjetas Gráficas",
    tag: "alta-gama",
    brand: "AMD",
    image: require("../images/asus.jpg"),
    description: "GPU AMD de gama media con 8GB GDDR6, diseñada para gaming fluido en 1080p con ray tracing.",
    specs: {
      "GPU": "AMD Radeon RX 6600",
      "Stream Processors": "1,792",
      "Memoria": "8GB GDDR6",
      "Bus de memoria": "128-bit",
      "Frecuencia Boost": "2,491 MHz",
      "TDP": "132W",
      "Fuente recomendada": "500W",
      "Salidas": "2x HDMI 2.1, 2x DisplayPort 1.4",
      "Tecnologías": "FSR 2, Ray Tracing, RDNA 2"
    }
  },
  {
    id: 8,
    name: "MSI Gaming GeForce GTX 1650 128-Bit HDMI",
    price: 665900,
    category: "Tarjetas Gráficas",
    tag: "baja-gama",
    brand: "NVIDIA",
    image: require("../images/asus.jpg"),
    description: "Tarjeta de gama entrada con bajo consumo energético, perfecta para gaming casual en 1080p.",
    specs: {
      "GPU": "NVIDIA GeForce GTX 1650",
      "CUDA Cores": "896",
      "Memoria": "4GB GDDR5",
      "Bus de memoria": "128-bit",
      "Frecuencia Boost": "1,665 MHz",
      "TDP": "75W",
      "Fuente recomendada": "350W",
      "Salidas": "1x HDMI 2.0b, 1x DisplayPort 1.4, 1x DVI-D",
      "Tecnologías": "Turing, DirectX 12"
    }
  },
  {
    id: 9,
    name: "Gigabyte GeForce GT 1030 2GB GDDR5",
    price: 320000,
    category: "Tarjetas Gráficas",
    tag: "baja-gama",
    brand: "NVIDIA",
    image: require("../images/asus.jpg"),
    description: "GPU de entrada para tareas básicas, video 4K y gaming casual con bajo consumo energético.",
    specs: {
      "GPU": "NVIDIA GeForce GT 1030",
      "CUDA Cores": "384",
      "Memoria": "2GB GDDR5",
      "Bus de memoria": "64-bit",
      "Frecuencia Boost": "1,468 MHz",
      "TDP": "30W",
      "Fuente recomendada": "300W",
      "Salidas": "1x HDMI 2.0b, 1x DisplayPort 1.2",
      "Tecnologías": "Pascal, DirectX 12"
    }
  },
  {
    id: 10,
    name: "MSI GeForce GTX 1650 Super Ventus XS OC",
    price: 750000,
    category: "Tarjetas Gráficas",
    tag: "baja-gama",
    brand: "NVIDIA",
    image: require("../images/asus.jpg"),
    description: "Tarjeta económica con rendimiento mejorado respecto a la GTX 1650, ideal para 1080p.",
    specs: {
      "GPU": "NVIDIA GeForce GTX 1650 Super",
      "CUDA Cores": "1,280",
      "Memoria": "4GB GDDR6",
      "Bus de memoria": "128-bit",
      "Frecuencia Boost": "1,755 MHz",
      "TDP": "100W",
      "Fuente recomendada": "400W",
      "Salidas": "1x HDMI 2.0b, 2x DisplayPort 1.4",
      "Tecnologías": "Turing, GDDR6"
    }
  },

  // ===== MEMORIAS RAM (11-20) =====

  {
    id: 11,
    name: "Corsair Vengeance RGB 16GB DDR4 3200MHz",
    price: 320000,
    category: "Memorias RAM",
    tag: "recomendado",
    brand: "Corsair",
    image: require("../images/asus.jpg"),
    description: "Kit de memoria DDR4 con iluminación RGB, alto rendimiento para gaming y multitarea exigente.",
    specs: {
      "Capacidad": "16GB (2x8GB)",
      "Tipo": "DDR4",
      "Velocidad": "3200MHz",
      "Latencia": "CL16",
      "Voltaje": "1.35V",
      "Perfil XMP": "XMP 2.0",
      "RGB": "Sí",
      "Factor de forma": "DIMM"
    }
  },
  {
    id: 12,
    name: "Corsair Vengeance RGB Pro 32GB DDR4 3200MHz",
    price: 420000,
    category: "Memorias RAM",
    tag: "recomendado",
    brand: "Corsair",
    image: require("../images/asus.jpg"),
    description: "Kit de memoria DDR4 con iluminación RGB y alto rendimiento para gaming y multitarea.",
    specs: {
      "Capacidad": "32GB (2x16GB)",
      "Tipo": "DDR4",
      "Velocidad": "3200MHz",
      "Latencia": "CL16",
      "Voltaje": "1.35V",
      "Perfil XMP": "XMP 2.0",
      "RGB": "Sí",
      "Factor de forma": "DIMM"
    }
  },
  {
    id: 13,
    name: "TeamGroup T-Force Vulcan 32GB DDR4 3600MHz",
    price: 310000,
    category: "Memorias RAM",
    tag: "recomendado",
    brand: "TeamGroup",
    image: require("../images/asus.jpg"),
    description: "Memoria DDR4 de alto rendimiento con diseño agresivo y excelente overclocking.",
    specs: {
      "Capacidad": "32GB (2x16GB)",
      "Tipo": "DDR4",
      "Velocidad": "3600MHz",
      "Latencia": "CL18",
      "Voltaje": "1.35V",
      "Perfil XMP": "XMP 2.0",
      "RGB": "No",
      "Factor de forma": "DIMM"
    }
  },
  {
    id: 14,
    name: "Kingston Fury Beast 32GB DDR5 5200MHz",
    price: 780000,
    category: "Memorias RAM",
    tag: "alta-gama",
    brand: "Kingston",
    image: require("../images/asus.jpg"),
    description: "Memoria DDR5 de última generación, ideal para plataformas Intel y AMD de nueva generación.",
    specs: {
      "Capacidad": "32GB (2x16GB)",
      "Tipo": "DDR5",
      "Velocidad": "5200MHz",
      "Latencia": "CL40",
      "Voltaje": "1.25V",
      "Perfil XMP": "XMP 3.0",
      "RGB": "No",
      "Factor de forma": "DIMM"
    }
  },
  {
    id: 15,
    name: "G.Skill Trident Z5 RGB 32GB DDR5 6000MHz",
    price: 950000,
    category: "Memorias RAM",
    tag: "alta-gama",
    brand: "G.Skill",
    image: require("../images/asus.jpg"),
    description: "RAM de alto desempeño con perfil XMP 3.0, diseñada para overclockers y entusiastas del PC.",
    specs: {
      "Capacidad": "32GB (2x16GB)",
      "Tipo": "DDR5",
      "Velocidad": "6000MHz",
      "Latencia": "CL36",
      "Voltaje": "1.35V",
      "Perfil XMP": "XMP 3.0",
      "RGB": "Sí",
      "Factor de forma": "DIMM"
    }
  },
  {
    id: 16,
    name: "G.Skill Trident Z5 RGB 64GB DDR5 6000MHz",
    price: 980000,
    category: "Memorias RAM",
    tag: "alta-gama",
    brand: "G.Skill",
    image: require("../images/asus.jpg"),
    description: "Kit premium DDR5 con RGB sincronizable, ideal para workstations y gaming de alto nivel.",
    specs: {
      "Capacidad": "64GB (2x32GB)",
      "Tipo": "DDR5",
      "Velocidad": "6000MHz",
      "Latencia": "CL36",
      "Voltaje": "1.35V",
      "Perfil XMP": "XMP 3.0",
      "RGB": "Sí",
      "Factor de forma": "DIMM"
    }
  },
  {
    id: 17,
    name: "Kingston Fury Beast 16GB DDR5 5200MHz",
    price: 380000,
    category: "Memorias RAM",
    tag: "alta-gama",
    brand: "Kingston",
    image: require("../images/asus.jpg"),
    description: "Memoria DDR5 de última generación con velocidades extremas para plataformas de nueva generación.",
    specs: {
      "Capacidad": "16GB (1x16GB)",
      "Tipo": "DDR5",
      "Velocidad": "5200MHz",
      "Latencia": "CL40",
      "Voltaje": "1.25V",
      "Perfil XMP": "XMP 3.0",
      "RGB": "No",
      "Factor de forma": "DIMM"
    }
  },
  {
    id: 18,
    name: "TeamGroup T-Force Delta 16GB DDR4 3600MHz",
    price: 290000,
    category: "Memorias RAM",
    tag: "baja-gama",
    brand: "TeamGroup",
    image: require("../images/asus.jpg"),
    description: "Memoria DDR4 con diseño espejo RGB, equilibrio perfecto entre precio y rendimiento gaming.",
    specs: {
      "Capacidad": "16GB (2x8GB)",
      "Tipo": "DDR4",
      "Velocidad": "3600MHz",
      "Latencia": "CL18",
      "Voltaje": "1.35V",
      "Perfil XMP": "XMP 2.0",
      "RGB": "Sí",
      "Factor de forma": "DIMM"
    }
  },
  {
    id: 19,
    name: "Kingston ValueRAM 8GB DDR4 2666MHz",
    price: 95000,
    category: "Memorias RAM",
    tag: "baja-gama",
    brand: "Kingston",
    image: require("../images/asus.jpg"),
    description: "Memoria DDR4 de entrada sin RGB, confiable y económica para equipos de oficina o uso básico.",
    specs: {
      "Capacidad": "8GB (1x8GB)",
      "Tipo": "DDR4",
      "Velocidad": "2666MHz",
      "Latencia": "CL19",
      "Voltaje": "1.2V",
      "Perfil XMP": "No",
      "RGB": "No",
      "Factor de forma": "DIMM"
    }
  },
  {
    id: 20,
    name: "Crucial 16GB DDR4 3200MHz CL22",
    price: 180000,
    category: "Memorias RAM",
    tag: "baja-gama",
    brand: "Crucial",
    image: require("../images/asus.jpg"),
    description: "RAM sin RGB de precio accesible, compatible con la mayoría de placas madre DDR4 del mercado.",
    specs: {
      "Capacidad": "16GB (1x16GB)",
      "Tipo": "DDR4",
      "Velocidad": "3200MHz",
      "Latencia": "CL22",
      "Voltaje": "1.2V",
      "Perfil XMP": "No",
      "RGB": "No",
      "Factor de forma": "DIMM"
    }
  },

  // ===== PLACAS MADRE (21-30) =====

  {
    id: 21,
    name: "MSI MAG Z790 Tomahawk WiFi DDR4",
    price: 1450000,
    category: "Placas Madre",
    tag: "recomendado",
    brand: "MSI",
    image: require("../images/asus.jpg"),
    description: "Placa Intel LGA1700 con soporte DDR4, ideal para builds de alto rendimiento con Core i9.",
    specs: {
      "Socket": "Intel LGA1700",
      "Chipset": "Z790",
      "Memoria soportada": "DDR4 hasta 7200MHz OC",
      "Slots de RAM": "4x DIMM",
      "PCIe": "PCIe 5.0 x16",
      "Almacenamiento": "3x M.2, 6x SATA",
      "WiFi": "WiFi 6E",
      "Bluetooth": "5.3",
      "Factor de forma": "ATX"
    }
  },
  {
    id: 22,
    name: "Gigabyte B550 AORUS Elite AX V2",
    price: 890000,
    category: "Placas Madre",
    tag: "recomendado",
    brand: "Gigabyte",
    image: require("../images/asus.jpg"),
    description: "Motherboard AMD AM4 con WiFi integrado, perfecta para Ryzen 5000 con buen precio-rendimiento.",
    specs: {
      "Socket": "AMD AM4",
      "Chipset": "B550",
      "Memoria soportada": "DDR4 hasta 5300MHz OC",
      "Slots de RAM": "4x DIMM",
      "PCIe": "PCIe 4.0 x16",
      "Almacenamiento": "2x M.2, 6x SATA",
      "WiFi": "WiFi 6",
      "Bluetooth": "5.0",
      "Factor de forma": "ATX"
    }
  },
  {
    id: 23,
    name: "ASRock Z690 Steel Legend WiFi 6E",
    price: 1120000,
    category: "Placas Madre",
    tag: "recomendado",
    brand: "ASRock",
    image: require("../images/asus.jpg"),
    description: "Placa LGA1700 con diseño Steel Legend, soporte DDR4/DDR5 y conectividad WiFi 6E.",
    specs: {
      "Socket": "Intel LGA1700",
      "Chipset": "Z690",
      "Memoria soportada": "DDR4/DDR5 hasta 6400MHz OC",
      "Slots de RAM": "4x DIMM",
      "PCIe": "PCIe 5.0 x16",
      "Almacenamiento": "3x M.2, 6x SATA",
      "WiFi": "WiFi 6E",
      "Bluetooth": "5.2",
      "Factor de forma": "ATX"
    }
  },
  {
    id: 24,
    name: "ASUS ROG Strix B650E-F Gaming WiFi",
    price: 1850000,
    category: "Placas Madre",
    tag: "alta-gama",
    brand: "ASUS",
    image: require("../images/asus.jpg"),
    description: "Motherboard AMD AM5 con PCIe 5.0, WiFi 6E y soporte DDR5 para procesadores Ryzen 7000.",
    specs: {
      "Socket": "AMD AM5",
      "Chipset": "B650E",
      "Memoria soportada": "DDR5 hasta 6400MHz OC",
      "Slots de RAM": "4x DIMM",
      "PCIe": "PCIe 5.0 x16",
      "Almacenamiento": "4x M.2, 6x SATA",
      "WiFi": "WiFi 6E",
      "Bluetooth": "5.3",
      "Factor de forma": "ATX"
    }
  },
  {
    id: 25,
    name: "ASUS ROG Maximus Z790 Hero",
    price: 3200000,
    category: "Placas Madre",
    tag: "alta-gama",
    brand: "ASUS",
    image: require("../images/asus.jpg"),
    description: "Placa flagship Intel LGA1700 con VRM de 24 fases, PCIe 5.0 y soporte DDR5 de alta velocidad.",
    specs: {
      "Socket": "Intel LGA1700",
      "Chipset": "Z790",
      "Memoria soportada": "DDR5 hasta 7800MHz OC",
      "Slots de RAM": "4x DIMM",
      "PCIe": "PCIe 5.0 x16",
      "Almacenamiento": "5x M.2, 6x SATA",
      "WiFi": "WiFi 6E",
      "Bluetooth": "5.3",
      "Factor de forma": "ATX"
    }
  },
  {
    id: 26,
    name: "MSI MEG Z790 ACE",
    price: 2800000,
    category: "Placas Madre",
    tag: "alta-gama",
    brand: "MSI",
    image: require("../images/asus.jpg"),
    description: "Placa tope de gama Intel con Thunderbolt 4, WiFi 6E y diseño premium para entusiastas.",
    specs: {
      "Socket": "Intel LGA1700",
      "Chipset": "Z790",
      "Memoria soportada": "DDR5 hasta 7600MHz OC",
      "Slots de RAM": "4x DIMM",
      "PCIe": "PCIe 5.0 x16",
      "Almacenamiento": "4x M.2, 6x SATA",
      "WiFi": "WiFi 6E",
      "Thunderbolt": "4",
      "Factor de forma": "ATX"
    }
  },
  {
    id: 27,
    name: "ASRock Z690 Phantom Gaming 4 DDR4",
    price: 750000,
    category: "Placas Madre",
    tag: "baja-gama",
    brand: "ASRock",
    image: require("../images/asus.jpg"),
    description: "Placa Intel con soporte PCIe 5.0 y DDR4, opción económica para plataforma Alder Lake.",
    specs: {
      "Socket": "Intel LGA1700",
      "Chipset": "Z690",
      "Memoria soportada": "DDR4 hasta 5000MHz OC",
      "Slots de RAM": "4x DIMM",
      "PCIe": "PCIe 5.0 x16",
      "Almacenamiento": "2x M.2, 6x SATA",
      "WiFi": "No",
      "Factor de forma": "ATX"
    }
  },
  {
    id: 28,
    name: "Gigabyte H610M S2H DDR4",
    price: 380000,
    category: "Placas Madre",
    tag: "baja-gama",
    brand: "Gigabyte",
    image: require("../images/asus.jpg"),
    description: "Placa micro-ATX Intel de entrada con DDR4, ideal para builds económicos de oficina o estudio.",
    specs: {
      "Socket": "Intel LGA1700",
      "Chipset": "H610",
      "Memoria soportada": "DDR4 hasta 3200MHz",
      "Slots de RAM": "2x DIMM",
      "PCIe": "PCIe 4.0 x16",
      "Almacenamiento": "1x M.2, 4x SATA",
      "WiFi": "No",
      "Factor de forma": "Micro-ATX"
    }
  },
  {
    id: 29,
    name: "MSI PRO B550M-VC WiFi",
    price: 520000,
    category: "Placas Madre",
    tag: "baja-gama",
    brand: "MSI",
    image: require("../images/asus.jpg"),
    description: "Placa AMD AM4 compacta con WiFi incluido, buena opción económica para Ryzen 5000.",
    specs: {
      "Socket": "AMD AM4",
      "Chipset": "B550",
      "Memoria soportada": "DDR4 hasta 4866MHz OC",
      "Slots de RAM": "4x DIMM",
      "PCIe": "PCIe 4.0 x16",
      "Almacenamiento": "2x M.2, 4x SATA",
      "WiFi": "WiFi 5",
      "Factor de forma": "Micro-ATX"
    }
  },

  // ===== MONITORES (30-39) =====

  {
    id: 30,
    name: "LG UltraGear 27GP850-B 27\" 165Hz QHD",
    price: 1650000,
    category: "Monitores",
    tag: "recomendado",
    brand: "LG",
    image: require("../images/asus.jpg"),
    description: "Monitor gaming QHD con panel Nano IPS, 1ms de respuesta y 165Hz para gaming competitivo.",
    specs: {
      "Tamaño": "27 pulgadas",
      "Resolución": "2560x1440 (QHD)",
      "Panel": "Nano IPS",
      "Frecuencia": "165Hz",
      "Tiempo de respuesta": "1ms (GtG)",
      "HDR": "HDR10",
      "Brillo": "350 nits",
      "Sincronización": "G-Sync Compatible, FreeSync Premium",
      "Entradas": "2x HDMI 2.0, 1x DisplayPort 1.4"
    }
  },
  {
    id: 31,
    name: "ASUS TUF Gaming VG279QM 27\" 280Hz FHD",
    price: 1350000,
    category: "Monitores",
    tag: "recomendado",
    brand: "ASUS",
    image: require("../images/asus.jpg"),
    description: "Monitor Full HD con 280Hz y ELMB Sync, diseñado para eSports y gaming de alta velocidad.",
    specs: {
      "Tamaño": "27 pulgadas",
      "Resolución": "1920x1080 (FHD)",
      "Panel": "Fast IPS",
      "Frecuencia": "280Hz",
      "Tiempo de respuesta": "1ms (GtG)",
      "HDR": "HDR400",
      "Brillo": "400 nits",
      "Sincronización": "G-Sync Compatible, FreeSync Premium",
      "Entradas": "2x HDMI 2.0, 1x DisplayPort 1.4"
    }
  },
  {
    id: 32,
    name: "LG 27GP850-B 27\" QHD 165Hz Nano IPS",
    price: 1350000,
    category: "Monitores",
    tag: "recomendado",
    brand: "LG",
    image: require("../images/asus.jpg"),
    description: "Monitor gaming QHD con panel Nano IPS, 165Hz y 1ms para una experiencia visual fluida.",
    specs: {
      "Tamaño": "27 pulgadas",
      "Resolución": "2560x1440 (QHD)",
      "Panel": "Nano IPS",
      "Frecuencia": "165Hz",
      "Tiempo de respuesta": "1ms",
      "HDR": "HDR10",
      "Brillo": "350 nits",
      "Sincronización": "G-Sync Compatible, FreeSync",
      "Entradas": "2x HDMI 2.0, 1x DisplayPort 1.4"
    }
  },
  {
    id: 33,
    name: "Samsung Odyssey G5 34\" Curvo WQHD 165Hz",
    price: 2100000,
    category: "Monitores",
    tag: "alta-gama",
    brand: "Samsung",
    image: require("../images/asus.jpg"),
    description: "Monitor ultrawide curvo con resolución WQHD, experiencia inmersiva para gaming y productividad.",
    specs: {
      "Tamaño": "34 pulgadas",
      "Resolución": "3440x1440 (UWQHD)",
      "Panel": "VA",
      "Curvatura": "1000R",
      "Frecuencia": "165Hz",
      "Tiempo de respuesta": "1ms",
      "HDR": "HDR10",
      "Sincronización": "FreeSync Premium Pro",
      "Entradas": "2x HDMI 2.0, 1x DisplayPort 1.4"
    }
  },
  {
    id: 34,
    name: "Samsung Odyssey G7 32\" QHD 240Hz VA",
    price: 2100000,
    category: "Monitores",
    tag: "alta-gama",
    brand: "Samsung",
    image: require("../images/asus.jpg"),
    description: "Monitor curvo 1000R con panel VA, 240Hz y HDR600 para gaming inmersivo de alta gama.",
    specs: {
      "Tamaño": "32 pulgadas",
      "Resolución": "2560x1440 (QHD)",
      "Panel": "VA",
      "Curvatura": "1000R",
      "Frecuencia": "240Hz",
      "Tiempo de respuesta": "1ms",
      "HDR": "HDR600",
      "Sincronización": "G-Sync Compatible, FreeSync Premium Pro",
      "Entradas": "2x HDMI 2.0, 1x DisplayPort 1.4"
    }
  },
  {
    id: 35,
    name: "ASUS ROG Swift PG279QM 27\" QHD 240Hz",
    price: 2800000,
    category: "Monitores",
    tag: "alta-gama",
    brand: "ASUS",
    image: require("../images/asus.jpg"),
    description: "Monitor IPS con G-Sync, 240Hz y Extreme Low Motion Blur para competitivo profesional.",
    specs: {
      "Tamaño": "27 pulgadas",
      "Resolución": "2560x1440 (QHD)",
      "Panel": "Fast IPS",
      "Frecuencia": "240Hz",
      "Tiempo de respuesta": "1ms",
      "HDR": "HDR400",
      "Brillo": "400 nits",
      "Sincronización": "G-Sync",
      "Entradas": "1x HDMI 2.0, 1x DisplayPort 1.4"
    }
  },
  {
    id: 36,
    name: "AOC Q27G2S 27\" QHD IPS 165Hz",
    price: 980000,
    category: "Monitores",
    tag: "baja-gama",
    brand: "AOC",
    image: require("../images/asus.jpg"),
    description: "Monitor QHD con panel IPS y 165Hz, excelente relación calidad-precio para gaming 1440p.",
    specs: {
      "Tamaño": "27 pulgadas",
      "Resolución": "2560x1440 (QHD)",
      "Panel": "IPS",
      "Frecuencia": "165Hz",
      "Tiempo de respuesta": "1ms",
      "HDR": "No",
      "Brillo": "300 nits",
      "Sincronización": "FreeSync Premium",
      "Entradas": "2x HDMI 2.0, 2x DisplayPort 1.2"
    }
  },
  {
    id: 37,
    name: "AOC 24G2SP 24\" FHD 165Hz IPS",
    price: 750000,
    category: "Monitores",
    tag: "baja-gama",
    brand: "AOC",
    image: require("../images/asus.jpg"),
    description: "Monitor FHD de entrada con panel IPS, 165Hz y tiempo de respuesta de 1ms a precio accesible.",
    specs: {
      "Tamaño": "24 pulgadas",
      "Resolución": "1920x1080 (FHD)",
      "Panel": "IPS",
      "Frecuencia": "165Hz",
      "Tiempo de respuesta": "1ms",
      "HDR": "No",
      "Brillo": "250 nits",
      "Sincronización": "FreeSync",
      "Entradas": "2x HDMI 1.4, 1x DisplayPort 1.2"
    }
  },
  {
    id: 38,
    name: "HP V22 21.5\" FHD 60Hz IPS",
    price: 420000,
    category: "Monitores",
    tag: "baja-gama",
    brand: "HP",
    image: require("../images/asus.jpg"),
    description: "Monitor FHD básico con panel IPS y colores precisos, ideal para oficina y uso cotidiano.",
    specs: {
      "Tamaño": "21.5 pulgadas",
      "Resolución": "1920x1080 (FHD)",
      "Panel": "IPS",
      "Frecuencia": "60Hz",
      "Tiempo de respuesta": "5ms",
      "HDR": "No",
      "Brillo": "250 nits",
      "Sincronización": "No",
      "Entradas": "1x HDMI 1.4, 1x VGA"
    }
  },

  // ===== PERIFÉRICOS (39-48) =====

  {
    id: 39,
    name: "Logitech G Pro X Superlight 2 Mouse",
    price: 620000,
    category: "Periféricos",
    tag: "recomendado",
    brand: "Logitech",
    image: require("../images/asus.jpg"),
    description: "Mouse inalámbrico ultraligero de 60g con sensor HERO 2, el favorito de los jugadores profesionales.",
    specs: {
      "Sensor": "HERO 2",
      "DPI": "100 - 32,000",
      "Botones": "5",
      "Peso": "60g",
      "Conexión": "Inalámbrica (LIGHTSPEED)",
      "Batería": "Hasta 95 horas",
      "Cable": "Incluido (carga)",
      "Polling Rate": "1000Hz"
    }
  },
  {
    id: 40,
    name: "Razer BlackWidow V4 Pro Teclado Mecánico",
    price: 890000,
    category: "Periféricos",
    tag: "recomendado",
    brand: "Razer",
    image: require("../images/asus.jpg"),
    description: "Teclado mecánico inalámbrico con switches Razer Yellow, RGB Chroma y rueda multimedia dedicada.",
    specs: {
      "Switches": "Razer Yellow (lineales)",
      "Layout": "Full Size",
      "Conexión": "Inalámbrico / USB-C",
      "Batería": "Hasta 200 horas",
      "RGB": "Razer Chroma RGB",
      "Rueda multimedia": "Sí",
      "Anti-ghosting": "100% N-Key Rollover",
      "Polling Rate": "8000Hz"
    }
  },
  {
    id: 41,
    name: "HyperX Cloud Alpha S Audífonos Gaming",
    price: 420000,
    category: "Periféricos",
    tag: "recomendado",
    brand: "HyperX",
    image: require("../images/asus.jpg"),
    description: "Audífonos con drivers duales, sonido 7.1 virtual y micrófono desmontable con cancelación de ruido.",
    specs: {
      "Drivers": "Duales (50mm + 16mm)",
      "Frecuencia": "13Hz - 27,000Hz",
      "Micrófono": "Desmontable con cancelación de ruido",
      "Sonido": "7.1 Virtual",
      "Conexión": "USB / 3.5mm",
      "Peso": "336g",
      "Compatible con": "PC, PS4, Xbox"
    }
  },
  {
    id: 42,
    name: "HyperX Cloud Alpha Wireless Headset",
    price: 750000,
    category: "Periféricos",
    tag: "alta-gama",
    brand: "HyperX",
    image: require("../images/asus.jpg"),
    description: "Auriculares gaming con hasta 300 horas de batería, sonido DTS y micrófono con cancelación de ruido.",
    specs: {
      "Drivers": "50mm",
      "Frecuencia": "15Hz - 21,000Hz",
      "Micrófono": "Desmontable con cancelación de ruido",
      "Batería": "Hasta 300 horas",
      "Conexión": "Inalámbrica 2.4GHz",
      "Sonido": "DTS Headphone:X",
      "Peso": "335g"
    }
  },
  {
    id: 43,
    name: "SteelSeries Arctis Nova Pro Wireless",
    price: 1200000,
    category: "Periféricos",
    tag: "alta-gama",
    brand: "SteelSeries",
    image: require("../images/asus.jpg"),
    description: "Headset premium con sistema de batería intercambiable, audio Hi-Fi y cancelación activa de ruido.",
    specs: {
      "Drivers": "40mm Hi-Fi",
      "Frecuencia": "10Hz - 40,000Hz",
      "Micrófono": "Retráctil con cancelación activa",
      "Batería": "Sistema intercambiable (22h por batería)",
      "Conexión": "Inalámbrica 2.4GHz + Bluetooth",
      "ANC": "Cancelación activa de ruido",
      "Compatible con": "PC, PS4, PS5, Switch"
    }
  },
  {
    id: 44,
    name: "SteelSeries Arctis Nova Pro Wireless Gen2",
    price: 1250000,
    category: "Periféricos",
    tag: "alta-gama",
    brand: "SteelSeries",
    image: require("../images/asus.jpg"),
    description: "Audífonos inalámbricos premium con sistema de batería intercambiable y sonido Hi-Res certificado.",
    specs: {
      "Drivers": "40mm Hi-Res",
      "Frecuencia": "10Hz - 40,000Hz",
      "Micrófono": "Retráctil bidireccional",
      "Batería": "Sistema intercambiable (22h por batería)",
      "Conexión": "Inalámbrica 2.4GHz + Bluetooth 5.0",
      "ANC": "Sí",
      "Compatible con": "PC, PS4, PS5, Nintendo Switch"
    }
  },
  {
    id: 45,
    name: "Logitech G203 Lightsync Mouse",
    price: 95000,
    category: "Periféricos",
    tag: "baja-gama",
    brand: "Logitech",
    image: require("../images/asus.jpg"),
    description: "Mouse gaming con sensor óptico de 8000 DPI, iluminación RGB y diseño ergonómico a bajo precio.",
    specs: {
      "Sensor": "Óptico",
      "DPI": "200 - 8,000",
      "Botones": "6",
      "Peso": "85g",
      "Conexión": "USB con cable",
      "RGB": "Lightsync RGB",
      "Polling Rate": "1000Hz"
    }
  },
  {
    id: 46,
    name: "Redragon K552 Teclado Mecánico RGB",
    price: 180000,
    category: "Periféricos",
    tag: "baja-gama",
    brand: "Redragon",
    image: require("../images/asus.jpg"),
    description: "Teclado mecánico compacto TKL con switches azules y retroiluminación RGB a precio accesible.",
    specs: {
      "Switches": "Outemu Blue (táctiles/clicky)",
      "Layout": "TKL (87 teclas)",
      "Conexión": "USB con cable",
      "RGB": "Retroiluminación RGB",
      "Anti-ghosting": "12 teclas anti-ghosting",
      "Material": "Estructura metálica"
    }
  },
  {
    id: 47,
    name: "HyperX Cloud Stinger Core Headset",
    price: 150000,
    category: "Periféricos",
    tag: "baja-gama",
    brand: "HyperX",
    image: require("../images/asus.jpg"),
    description: "Auriculares gaming de entrada con sonido estéreo, micrófono abatible y diseño liviano y cómodo.",
    specs: {
      "Drivers": "40mm",
      "Frecuencia": "20Hz - 20,000Hz",
      "Micrófono": "Abatible con cancelación de ruido",
      "Conexión": "3.5mm",
      "Peso": "258g",
      "Compatible con": "PC, PS4, Xbox, Switch, Mobile"
    }
  },

];

export default products;
