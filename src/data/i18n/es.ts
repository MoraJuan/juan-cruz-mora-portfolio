import type { Dictionary } from "./types";

export const es: Dictionary = {
  skipToContent: "Saltar al contenido",
  nav: {
    home: "Inicio",
    ask: "Preguntar",
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
    headline: "Full-Stack AI Engineer",
    description:
      "Diseño productos full-stack y sistemas con agentes: APIs, datos, interfaces y orquestación de flujos de IA aplicados a operación real.",
    viewProjects: "Ver proyectos",
    downloadCv: "Descargar CV",
    photoCaption: "San Juan, AR",
  },
  askAi: {
    title: "MorAI",
    chatTitle: "Chat con MorAI",
    thinkingLabel: "Pensando…",
    doneLabel: "Pensé durante",
    prompt: "Sugerencias",
    greeting:
      "Hola. Preguntame por mi perfil, proyectos, stack o disponibilidad. Elegí una sugerencia para empezar.",
    youLabel: "Vos",
    assistantLabel: "Asistente",
    composerHint: "Elegí una sugerencia para enviar…",
    viewPortfolio: "Ver portfolio",
    openChat: "Abrir chat",
    openChatAria: "Abrir chat del perfil",
    fabTeaser: "Habla con MorAI para conocerme mejor y más rápido",
    askAnother: "Otra pregunta",
    clearChat: "Limpiar chat",
    questions: {
      who: {
        label: "¿Quién sos y cuál es tu enfoque?",
        steps: [
          "Leyendo la pregunta",
          "Revisando formación y ubicación",
          "Resumiendo el enfoque profesional",
        ],
        answer:
          "Soy Juan Cruz Mora, Full-Stack AI Engineer en San Juan, Argentina. Cursando la etapa avanzada de la Licenciatura en Sistemas de Información (UNSJ). Construyo productos de punta a punta: APIs, datos, interfaces y automatizaciones. El foco es que el sistema funcione en producción, y orquestar agentes cuando aceleran el diseño y la entrega sin perder control del dominio.",
      },
      projects: {
        label: "¿Qué productos construiste y qué problema resolvía cada uno?",
        steps: [
          "Leyendo la pregunta",
          "Recorriendo los casos del portfolio",
          "Armando un resumen por producto",
        ],
        answer:
          "Chimento: e-commerce infantil (FastAPI + Next.js + PostgreSQL) con catálogo, variantes, stock y checkout. App Resto: plataforma gastronómica (Go + React) para comercios, sucursales, mesas, pedidos, cocina y caja. SafeShot: pipeline OCR/LLM sobre ShareX para censurar datos sensibles antes de compartir capturas. Studio Manager: panel de estudio (FastAPI + React) con bot de WhatsApp para reservas y consultas. En el portfolio podés abrir cada caso completo.",
      },
      "ai-work": {
        label: "¿Cómo usás agentes de IA en el día a día?",
        steps: [
          "Leyendo la pregunta",
          "Mapeando el flujo con agentes",
          "Conectando tools con entregables reales",
        ],
        answer:
          "Trabajo orquestando agentes (Cursor, Claude, Codex): investigar, proponer diseño, implementar, revisar y documentar. No dejo que el modelo “decida solo”: defino contratos, reviso diffs y valido en entorno real. También aplico IA en producto — por ejemplo OCR + reglas + LLM opcional en SafeShot, o bots de atención sincronizados con un panel. La meta es velocidad con criterio de ingeniería.",
      },
      stack: {
        label: "¿Con qué stack te movés hoy?",
        steps: [
          "Leyendo la pregunta",
          "Agrupando backend, frontend e infra",
          "Priorizando lo que más uso",
        ],
        answer:
          "Backend: Python/FastAPI, Go, TypeScript/Node y APIs REST. Frontend: React, Next.js y Tailwind. Datos: PostgreSQL, SQLAlchemy/Prisma/Alembic y Redis cuando hace falta. Infra: Docker, Linux, GitHub, Railway, Vercel y AWS. En el lado AI: orquestación de agentes y pipelines OCR/LLM. Elijo herramientas según el problema, no por moda.",
      },
      safeshot: {
        label: "Contame más de SafeShot y el ángulo de IA",
        steps: [
          "Leyendo la pregunta",
          "Repasando el pipeline OCR/LLM",
          "Explicando decisiones de privacidad",
        ],
        answer:
          "SafeShot se engancha al pipeline de ShareX después de capturar. Un servicio local en FastAPI corre OCR (Tesseract) y reglas determinísticas (emails, tarjetas, tokens, DNI, etc.). El LLM es opcional y pide consentimiento por captura; si el servicio falla, se conserva el original y se corta la subida automática. Es un ejemplo de IA aplicada con modo local-first y fallback seguro.",
      },
      available: {
        label: "¿Estás disponible y cómo te contacto?",
        steps: [
          "Leyendo la pregunta",
          "Revisando disponibilidad",
          "Dejando canales de contacto",
        ],
        answer:
          "Sí, estoy abierto a roles, proyectos freelance y conversaciones técnicas. Escribime a juancruzmora26@gmail.com o por LinkedIn (linkedin.com/in/juan-cruz-mora). También está el CV para descargar desde el portfolio. Contame el problema o el rol y vemos encaje.",
      },
    },
  },
  about: {
    title: "Sobre mí",
    description:
      "Estudio sistemas, construyo productos y orquesto agentes cerca del problema real.",
    paragraphs: [
      "Cursando la etapa avanzada de la Licenciatura en Sistemas de Información en la Universidad Nacional de San Juan. Trabajo sobre casos concretos: APIs, datos, paneles, automatizaciones y pipelines con OCR/LLM cuando aportan.",
      "Me muevo en full stack y en orquestación de agentes según lo que pida el problema. El foco es que el sistema funcione bien en producción.",
    ],
    facts: [
      { label: "Ubicación", value: "San Juan, Argentina" },
      {
        label: "Formación",
        value: "Lic. en Sistemas de Información — UNSJ (en curso)",
      },
      {
        label: "Enfoque",
        value: "Full-stack, APIs y orquestación de agentes",
      },
    ],
  },
  projects: {
    title: "Proyectos",
    description:
      "Productos full-stack y automatización inteligente. Tocá un proyecto para abrir el caso completo.",
    openCase: "Ver caso",
    close: "Cerrar proyecto",
    problem: "Problema",
    built: "Qué se desarrolló",
    decisions: "Decisiones técnicas",
    stack: "Stack",
    screenshots: "Capturas",
    repository: "Repositorio",
    demo: "Demo",
    walkthrough: "Ver recorrido",
    walkthroughCaption: "Recorrido del panel y del bot (demo anónima)",
    moreOnGithub: "Ver más proyectos en GitHub",
    status: {
      shipped: "Disponible",
      "in-progress": "En desarrollo",
      draft: "Borrador",
    },
    items: {
      safeshot: {
        tagline:
          "Pipeline OCR/LLM para censurar datos sensibles en capturas, integrado a ShareX.",
        problem:
          "Al compartir capturas de soporte, demos o documentación es fácil filtrar emails, tarjetas, tokens, DNI, CUIL, CBU o teléfonos. El riesgo aparece después de capturar, cuando la imagen ya está lista para portapapeles, disco o un host remoto.",
        built: [
          "Extensión del pipeline de ShareX en el punto DoAfterCaptureJobs, antes de copiar, guardar o subir.",
          "Servicio local en FastAPI que recibe la imagen, ejecuta OCR con Tesseract y aplica reglas determinísticas de detección.",
          "Capa opcional de LLM para reforzar detección, con consentimiento explícito por captura.",
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
          "Gestión de estudio con panel full-stack y bot de WhatsApp para reservas.",
        problem:
          "Un estudio necesita centralizar alumnos, profesores, turnos, planes y comprobantes, y ofrecer un canal de atención que reduzca fricción en la reserva y la consulta de disponibilidad.",
        built: [
          "Panel administrativo para alumnos, profesores, horarios, reservas, planes y pagos.",
          "Backend con FastAPI y PostgreSQL; frontend en React.",
          "Bot de WhatsApp como agente de atención para reserva y consulta, sincronizado con el panel.",
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
      "Tecnologías y herramientas con las que trabajo, agrupadas por área.",
    skills: "Habilidades",
    skillGroups: {
      backend: "Backend",
      frontend: "Frontend",
      databases: "Bases de datos",
      infra: "Infraestructura y DevOps",
      tools: "Herramientas y flujo",
      ai: "IA y agentes",
    },
    trajectory: "Trayectoria",
    roles: {
      freelance: {
        role: "Full-Stack AI Engineer",
        org: "Independiente",
        summary:
          "Productos full-stack, integraciones y automatizaciones. Gran parte del trabajo se apoya en orquestar agentes para diseñar, construir y entregar sistemas de operación real.",
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
