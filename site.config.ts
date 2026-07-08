export type Product = {
  name: string;
  category: string;
  price: string;
  badge: string;
  description: string;
  deliverables: string[];
  cta: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const siteConfig = {
  name: "nanaimo",
  logo: {
    text: "nanaimo",
    mark: "/brand/nanaimo-mark.svg",
    alt: "Logo de Nanaimo"
  },
  city: "Santiago",
  country: "Chile",
  colors: {
    background: "#0B0D12",
    foreground: "#FFF8ED",
    primary: "#FF4D2E",
    secondary: "#A7F35A",
    accent: "#47D7FF",
    muted: "#F7F1E8"
  },
  contact: {
    whatsapp: "+56934254398",
    whatsappMessage:
      "Hola Nanaimo, quiero una web que se vea profesional y me ayude a vender más. ¿Podemos conversar?",
    instagram: "https://www.instagram.com/lukaortizp/",
    email: "hola@nanaimo.cl",
    address: "Santiago, Chile"
  },
  seo: {
    title: "Nanaimo | Sitios web, ecommerce y marketing para vender mejor",
    description:
      "Creamos sitios web premium, catálogos editables, ecommerce y sistemas de venta por WhatsApp para marcas que quieren verse profesionales y convertir más.",
    url: "https://nanaimo.cl",
    keywords: [
      "sitios web chile",
      "diseño web santiago",
      "ecommerce chile",
      "marketing digital",
      "paginas web para emprendedores",
      "catalogo editable"
    ]
  },
  navigation: [
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Confianza", href: "#confianza" },
    { label: "Cotizar", href: "#contacto" }
  ],
  hero: {
    eyebrow: "Webs con estrategia, actitud y cierre por WhatsApp",
    title: "Tu negocio no necesita otra plantilla. Necesita una presencia que venda.",
    subtitle:
      "Diseñamos páginas, catálogos y ecommerce con estética premium, mensajes claros y una ruta simple para que tus clientes pasen de mirar a escribirte.",
    primaryCta: "Quiero cotizar mi web",
    secondaryCta: "Ver servicios",
    proof: ["Next.js + Vercel", "SEO base", "WhatsApp listo", "Escalable a ecommerce"],
    stats: [
      { value: "7 días", label: "para una demo sólida" },
      { value: "100%", label: "editable desde configuración" },
      { value: "0 pagos", label: "con tarjeta si no los necesitas" }
    ]
  },
  benefits: [
    {
      title: "Diseño que no parece genérico",
      description:
        "Cada web se piensa desde la personalidad del negocio: colores, ritmo, copy, secciones y llamados a la acción hechos para ese cliente."
    },
    {
      title: "Venta sin complicar al cliente",
      description:
        "El visitante entiende qué ofreces, confía más rápido y termina la compra o cotización por WhatsApp."
    },
    {
      title: "Lista para crecer",
      description:
        "La base queda preparada para catálogo editable, Shopify, Mercado Pago, Meta Pixel y Analytics cuando el negocio lo necesite."
    },
    {
      title: "Entrega clara y profesional",
      description:
        "Se trabaja con estructura, revisión, capacitación y traspaso ordenado para que la web quede realmente a disposición del cliente."
    }
  ],
  categories: ["Demo premium", "Catálogo editable", "Ecommerce", "Marketing"],
  products: [
    {
      name: "Demo web premium",
      category: "Demo premium",
      price: "Desde $299.000 CLP",
      badge: "Ideal para partir",
      description:
        "Sitio completo para mostrar confianza, explicar tu oferta y captar consultas por WhatsApp.",
      deliverables: [
        "Home profesional responsive",
        "Copy orientado a conversión",
        "SEO inicial y publicación en Vercel",
        "Formulario o WhatsApp directo"
      ],
      cta: "Cotizar demo"
    },
    {
      name: "Catálogo editable",
      category: "Catálogo editable",
      price: "Desde $449.000 CLP",
      badge: "Más vendido",
      description:
        "Página con panel simple para editar productos, precios, stock y ofertas sin tocar código.",
      deliverables: [
        "Panel privado",
        "Productos visibles u ocultos",
        "Stock, packs y ofertas",
        "Cierre de pedidos por WhatsApp"
      ],
      cta: "Quiero catálogo"
    },
    {
      name: "Ecommerce escalable",
      category: "Ecommerce",
      price: "A cotizar",
      badge: "Etapa 2",
      description:
        "Arquitectura lista para conectar pagos, envíos, automatizaciones y medición comercial.",
      deliverables: [
        "Preparación Shopify o Mercado Pago",
        "Analítica y eventos",
        "Embudo de compra",
        "Acompañamiento de salida"
      ],
      cta: "Planear ecommerce"
    },
    {
      name: "Impulso marketing",
      category: "Marketing",
      price: "Mensual",
      badge: "Crecimiento",
      description:
        "Mejoras, campañas, piezas visuales y ajustes para que la web no quede quieta después de lanzarse.",
      deliverables: [
        "Optimización mensual",
        "Piezas para redes",
        "Landing de campaña",
        "Reporte simple de oportunidades"
      ],
      cta: "Conversar plan"
    }
  ] satisfies Product[],
  about: {
    title: "Nanaimo nace para que los negocios chicos se vean grandes sin perder alma.",
    body:
      "Somos una marca joven, obsesionada con hacer que una web se sienta viva: bonita, rápida, entendible y con una intención comercial clara. Nos importan los detalles, pero también que la dueña o el dueño entienda lo que está comprando y pueda usarlo sin miedo.",
    values: ["Claridad antes que humo", "Diseño con intención", "Tecnología sin enredo", "Entrega humana"]
  },
  process: [
    {
      step: "01",
      title: "Escuchamos el negocio",
      description:
        "Entendemos qué vende, a quién le vende, qué dudas tiene el cliente y cuál es la acción principal: cotizar, reservar o comprar."
    },
    {
      step: "02",
      title: "Diseñamos la experiencia",
      description:
        "Creamos la estructura, tono, secciones y visuales para que la página no sea solo linda: tiene que guiar."
    },
    {
      step: "03",
      title: "Construimos en Next.js",
      description:
        "Desarrollamos un sitio rápido, responsive, SEO friendly y listo para publicarse en Vercel."
    },
    {
      step: "04",
      title: "Publicamos y capacitamos",
      description:
        "Probamos, corregimos, dejamos el cierre por WhatsApp activo y explicamos cómo queda administrado."
    }
  ],
  testimonials: [
    {
      quote:
        "La demo se entendió altiro. Sentí que por fin mi negocio se veía como yo quería mostrarlo.",
      name: "Clienta de tienda botánica",
      role: "Catálogo editable"
    },
    {
      quote:
        "Me ayudó a ordenar la oferta. La página no solo se veía mejor, también explicaba mejor lo que vendo.",
      name: "Productor independiente",
      role: "Web de servicios"
    },
    {
      quote:
        "Lo mejor fue que no tuve que aprender cosas raras. Mis clientes ven, preguntan y cierro por WhatsApp.",
      name: "Emprendimiento local",
      role: "Demo comercial"
    }
  ] satisfies Testimonial[],
  faq: [
    {
      question: "¿La página queda a nombre del cliente?",
      answer:
        "Sí. El proyecto se puede traspasar a las cuentas del cliente en GitHub, Vercel y las herramientas que correspondan. También se puede dejar una guía de uso y capacitación."
    },
    {
      question: "¿Incluye pagos online?",
      answer:
        "La versión inicial está pensada para cerrar por WhatsApp. Mercado Pago, Shopify u otro sistema de pago se puede integrar como una etapa futura cotizada aparte."
    },
    {
      question: "¿Puedo editar productos y precios?",
      answer:
        "Sí, si contratas la versión con catálogo editable. Permite cambiar productos, precios, stock, ofertas e imágenes sin tocar código."
    },
    {
      question: "¿Cuánto demora una demo?",
      answer:
        "Una demo premium puede estar lista entre 5 y 10 días hábiles, dependiendo de la cantidad de contenido, revisiones e imágenes disponibles."
    },
    {
      question: "¿Necesito dominio propio?",
      answer:
        "No es obligatorio para partir. Puedes usar una URL de Vercel y luego conectar un dominio propio cuando sea el momento."
    }
  ] satisfies Faq[],
  integrations: {
    whatsappSales: true,
    futureShopify: true,
    futureMercadoPago: true,
    futureMetaPixel: true,
    futureAnalytics: true
  }
} as const;
