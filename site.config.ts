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
    background: "#FCF7EF",
    foreground: "#101828",
    primary: "#2563EB",
    secondary: "#2DE2A6",
    accent: "#FF5A5F",
    muted: "#EEF3FF"
  },
  contact: {
    whatsapp: "+56934254398",
    whatsappMessage:
      "Hola Nanaimo, quiero una web que se vea profesional y me ayude a vender más. ¿Podemos conversar?",
    instagram: "https://www.instagram.com/lukaortizp/",
    email: "ortizpiponluka@gmail.com",
    address: "Santiago, Chile"
  },
  seo: {
    title: "Nanaimo | Sitios web, ecommerce y marketing para vender mejor",
    description:
      "Creamos sitios web premium, paneles editables, ecommerce y sistemas de venta por WhatsApp para marcas que quieren verse profesionales y convertir más.",
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
      "Diseñamos páginas, paneles editables y ecommerce con estética premium, mensajes claros y una ruta simple para que tus clientes pasen de mirar a escribirte.",
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
        "La base queda preparada para panel editable, Shopify, Mercado Pago, Meta Pixel y Analytics cuando el negocio lo necesite."
    },
    {
      title: "Entrega clara y profesional",
      description:
        "Se trabaja con estructura, revisión, capacitación y traspaso ordenado para que la web quede realmente a disposición del cliente."
    }
  ],
  categories: ["Muestra previa", "Web final", "Panel editable", "Marketing"],
  products: [
    {
      name: "Muestra previa",
      category: "Muestra previa",
      price: "Sin costo inicial",
      badge: "Para decidir",
      description:
        "Una demo visual para que veas cómo podría quedar tu negocio antes de decidir si avanzamos con la web final.",
      deliverables: [
        "Vista inicial del concepto",
        "Propuesta de estilo y mensaje",
        "Enfoque comercial por WhatsApp",
        "Base para cotizar la web final"
      ],
      cta: "Ver si califico"
    },
    {
      name: "Web final",
      category: "Web final",
      price: "$250.000 CLP",
      badge: "Lanzamiento",
      description:
        "Sitio profesional terminado, responsive y publicado para que tu negocio se vea serio y reciba consultas.",
      deliverables: [
        "Página completa",
        "Textos orientados a venta",
        "SEO inicial",
        "Cierre por WhatsApp"
      ],
      cta: "Quiero mi web"
    },
    {
      name: "Web con panel editable",
      category: "Panel editable",
      price: "$350.000 CLP",
      badge: "Más práctico",
      description:
        "Sitio con panel privado para cambiar productos, precios, stock, ofertas o contenido sin depender de código.",
      deliverables: [
        "Panel de administración",
        "Productos o servicios editables",
        "Stock, ofertas o destacados",
        "Preparado para crecer"
      ],
      cta: "Quiero panel editable"
    },
    {
      name: "Crecimiento digital",
      category: "Marketing",
      price: "A cotizar",
      badge: "Crecimiento",
      description:
        "Mejoras, campañas, ecommerce, pagos online o medición para que la web evolucione cuando el negocio esté listo.",
      deliverables: [
        "Shopify o Mercado Pago futuro",
        "Meta Pixel y Analytics",
        "Landings de campaña",
        "Optimización comercial"
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
      role: "Panel editable"
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
        "Sí, si contratas la web con panel editable de $350.000 CLP. Permite cambiar productos, precios, stock, ofertas e imágenes sin tocar código."
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
