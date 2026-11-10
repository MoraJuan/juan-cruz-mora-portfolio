import type { Dictionary } from "./types";

export const es: Dictionary = {
  skipToContent: "Saltar al contenido",
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    projects: "Proyectos",
    experience: "Experiencia",
    contact: "Contacto",
    downloadCv: "Descargar CV",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    primary: "Principal",
    mobile: "Móvil",
  },
  scroll: {
    toAbout: "Ir a Sobre mí",
    toProjects: "Ir a Proyectos",
    toExperience: "Ir a Experiencia",
    toContact: "Ir a Contacto",
    toTop: "Volver al inicio",
  },
  cv: {
    download: "Descargar CV",
    es: "CV en español",
    en: "CV in English",
  },
  lang: {
    switchTo: "Cambiar idioma",
    es: "ES",
    en: "EN",
  },
  theme: {
    toLight: "Cambiar a modo claro",
    toDark: "Cambiar a modo oscuro",
  },
  hero: {
    headline: "APIs, backends e interfaces web",
    description:
      "Desarrollo software desde San Juan, Argentina. Estoy en la etapa avanzada de la Licenciatura en Sistemas de Información (UNSJ).",
    viewProjects: "Ver proyectos",
    downloadCv: "Descargar CV",
    photoCaption: "San Juan, AR",
  },
  about: {
    title: "Sobre mí",
    description:
      "Estudio sistemas, construyo productos y me quedo cerca del problema real.",
    paragraphs: [
      "Cursando la etapa avanzada de la Licenciatura en Sistemas de Información en la Universidad Nacional de San Juan. Trabajo sobre casos concretos: APIs, datos, paneles y automatizaciones.",
      "Me muevo entre backend y full stack según lo que pida el problema. El foco es que el sistema funcione bien en producción, no en casarme con una herramienta.",
    ],
    facts: [
      { label: "Ubicación", value: "San Juan, Argentina" },
      {
        label: "Formación",
        value: "Lic. en Sistemas de Información — UNSJ (en curso)",
      },
      {
        label: "Enfoque",
        value: "Backend, APIs y desarrollo full stack",
      },
    ],
  },
  projects: {
    title: "Proyectos",
    description:
      "Expandí cada caso para ver el problema, lo construido y las decisiones técnicas.",
    problem: "Problema",
    built: "Qué se desarrolló",
    decisions: "Decisiones técnicas",
    stack: "Stack",
    screenshots: "Capturas",
    repository: "Repositorio",
    demo: "Demo",
    walkthrough: "Ver recorrido",
    walkthroughCaption: "Recorrido del panel y del bot (demo anónima)",
    status: {
      shipped: "Disponible",
      "in-progress": "En desarrollo",
      draft: "Borrador",
    },
    items: {
      safeshot: {
        tagline:
          "Censura de datos sensibles en capturas de pantalla, integrada a ShareX.",
        problem:
          "Al compartir capturas de soporte, demos o documentación es fácil filtrar emails, tarjetas, tokens, DNI, CUIL, CBU o teléfonos. El riesgo aparece después de capturar, cuando la imagen ya está lista para portapapeles, disco o un host remoto.",
        built: [
          "Extensión del pipeline de ShareX en el punto DoAfterCaptureJobs, antes de copiar, guardar o subir.",
          "Servicio local en FastAPI que recibe la imagen, ejecuta OCR con Tesseract y aplica reglas determinísticas de detección.",
          "Flujo de revisión original | censurada dentro de ShareX, con opción de continuar o cancelar.",
          "Documentación del análisis de ingeniería inversa sobre ShareX v21.0.0 y un parche exportable reproducible.",
        ],
        decisions: [
          "Modo base 100% local: el OCR y las reglas corren en el equipo; el LLM externo es opcional y requiere consentimiento explícito por captura.",
          "Si el servicio no responde, se conserva el original, se avisa y se desactiva la subida automática de esa captura.",
          "Detección por patrones (email, tarjeta Luhn, JWT, API keys, DNI, CUIL/CUIT, CBU, teléfono) en lugar de depender solo de un modelo.",
          "Evaluación con dataset sintético y suite de pruebas del servicio para validar precisión y límites del OCR.",
        ],
        imageCaptions: {
          before: "Antes — datos sensibles visibles",
          after: "Después — datos censurados",
          "before-2": "Antes — otro caso de prueba",
          "after-2": "Después — censura aplicada",
        },
        imageAlts: {
          before: "Captura sintética con datos sensibles visibles",
          after: "Misma captura con datos sensibles censurados",
          "before-2": "Segunda captura de prueba con datos sensibles",
          "after-2": "Segunda captura con datos censurados",
        },
      },
      "resto-app": {
        tagline:
          "Plataforma de gestión gastronómica: organización, catálogo, mesas, pedidos, cocina y caja.",
        problem:
          "Un comercio gastronómico necesita coordinar sucursales, personal, catálogo, mesas, pedidos y cobro con roles claros y consistencia operativa, sin sobrediseñar la arquitectura demasiado pronto.",
        built: [
          "API en Go con PostgreSQL y frontend web en React + TypeScript.",
          "Administración de plataforma SaaS para alta y habilitación de comercios.",
          "Gestión de comercios, sucursales, roles y accesos.",
          "Catálogo por sucursal, mesas, pedidos, cocina y caja.",
          "Entorno local reproducible con Docker Compose.",
        ],
        decisions: [
          "Separar API y web bajo el mismo origen para simplificar sesión, cookies y CSRF.",
          "Autorización por rol en servidor, no solo en la interfaz.",
          "Despliegue local con Docker para reproducir postgres, API y web.",
          "Alcance operativo primero; reportes y stock avanzado quedan fuera del núcleo inicial.",
        ],
        imageCaptions: {
          login: "Acceso a la administración de la plataforma",
          commerce: "Acceso de comercio / equipo",
          dashboard: "Listado de comercios en la plataforma",
          detail: "Detalle administrativo de un comercio demo",
          alta: "Alta de comercio, sucursal y propietario",
        },
        imageAlts: {
          login: "Pantalla de inicio de sesión de App Resto (plataforma)",
          commerce: "Pantalla de inicio de sesión de App Resto (comercio)",
          dashboard: "Panel de comercios de App Resto",
          detail: "Detalle de comercio demo en App Resto",
          alta: "Formulario de alta de comercio en App Resto",
        },
      },
      chimento: {
        tagline:
          "E-commerce para retail infantil: catálogo, variantes, inventario y checkout.",
        problem:
          "Un comercio de productos infantiles necesita una tienda online con gestión de catálogo, control de stock y un flujo de compra confiable, sin depender de una plantilla rígida que limite la lógica de negocio.",
        built: [
          "Backend con FastAPI orientado a catálogo, productos y operaciones de compra.",
          "Frontend en Next.js para vitrina, navegación de productos y experiencia de compra.",
          "Persistencia en PostgreSQL con modelado orientado a productos, variantes e inventario.",
          "Integración de pasarela de pagos y carrito de compras según el alcance del proyecto.",
        ],
        decisions: [
          "Separar API y frontend para mantener contratos claros entre catálogo, stock y checkout.",
          "Usar SQLAlchemy / SQL para modelar productos y pedidos con control explícito de inventario.",
          "Priorizar rendimiento y SEO en la capa Next.js de la tienda.",
        ],
        imageCaptions: {
          home: "Inicio de la tienda",
          catalog: "Catálogo con filtros y búsqueda",
          product: "Detalle de producto con variantes",
        },
        imageAlts: {
          home: "Página de inicio del e-commerce",
          catalog: "Listado de productos con filtros",
          product: "Página de detalle de un producto",
        },
      },
      pilates: {
        tagline:
          "Sistema de gestión para un estudio de pilates: alumnos, horarios, reservas y pagos.",
        problem:
          "Un estudio necesita centralizar alumnos, profesores, turnos, planes y comprobantes, y ofrecer un canal de atención que reduzca fricción en la reserva y la consulta de disponibilidad.",
        built: [
          "Panel administrativo para alumnos, profesores, horarios, reservas, planes y pagos.",
          "Backend con FastAPI y PostgreSQL; frontend en React.",
          "Bot de WhatsApp integrado como canal de reserva y consulta, sincronizado con el panel.",
          "Versión de demostración con datos de prueba, sin identidad comercial real.",
        ],
        decisions: [
          "Separar panel web y automatización de mensajería manteniendo una sola fuente de verdad.",
          "Usar datos de demo para documentar el producto sin exponer información real de clientes.",
          "Modelar reservas y planes como dominio explícito en backend, no solo como formularios de UI.",
        ],
        imageCaptions: {
          login: "Acceso a la demo anónima del estudio",
        },
        imageAlts: {
          login: "Pantalla de inicio de sesión de la demo del estudio",
        },
      },
    },
  },
  experience: {
    title: "Experiencia y conocimientos",
    description:
      "Stack y herramientas agrupadas por área, sin puntuaciones artificiales.",
    skills: "Habilidades",
    skillGroups: {
      backend: "Backend",
      frontend: "Frontend",
      databases: "Bases de datos",
      infra: "Infraestructura y DevOps",
      tools: "Herramientas y flujo",
      ai: "Desarrollo asistido por IA",
    },
    trajectory: "Trayectoria",
    roles: {
      freelance: {
        role: "Desarrollador Freelance",
        org: "Independiente",
        summary:
          "Diseño y desarrollo de sistemas de gestión e integraciones. Automatizaciones y software orientados a operación real.",
      },
      tecnico: {
        role: "Técnico",
        org: "Ministerio de Educación de la Nación",
        summary:
          "Soporte técnico, conectividad e infraestructura en entornos escolares. Configuración de redes y mantenimiento de sistemas para instituciones educativas.",
      },
    },
    educationTitle: "Formación académica",
    education: {
      degree: "Licenciatura en Sistemas de Información",
      institution: "Universidad Nacional de San Juan",
      period: "2020 — Presente",
      status: "En curso — etapa avanzada",
    },
  },
  contact: {
    title: "Contacto",
    text: "Si tenés un rol, un proyecto o una pregunta, escribime.",
    email: "Correo",
    location: "Ubicación",
  },
  footer: {
    location: "San Juan, Argentina",
  },
};
