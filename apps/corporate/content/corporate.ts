export const corporate = {
  hero: {
    badge: 'GESTIÓN DEPORTIVA PREMIUM',
    headline_line1: 'EXPERIENCIAS',
    headline_line2: 'DE PÁDEL.',
    description: 'Organizamos ligas corporativas, torneos de empresa e Infinity Experience. Diseñamos cada proyecto a medida para tu equipo.',
    cta: 'SOLICITAR INFORMACIÓN',
  },

  about: {
    eyebrow: 'QUIÉNES SOMOS',
    headline: 'La empresa detrás del pádel premium',
    description: 'Somos Infinity Padel. Llevamos años diseñando experiencias de pádel para empresas y jugadores que quieren algo más que un partido. Gestionamos la logística, el formato y los detalles para que tú solo tengas que jugar.',
    stats: [
      { value: '+50', label: 'Eventos organizados' },
      { value: '+1.200', label: 'Jugadores participantes' },
      { value: '6', label: 'Ciudades activas' },
    ],
  },

  services: {
    eyebrow: 'SERVICIOS PARA EMPRESAS',
    headline: 'Todo lo que necesitas en la pista',
    items: [
      {
        icon: 'Building2',
        title: 'Liga Corporativa',
        description: 'Organizamos una liga interna para tu empresa. Jornadas regulares, grupos por nivel y seguimiento completo durante toda la temporada.',
        accent: 'vibora' as const,
      },
      {
        icon: 'Trophy',
        title: 'Torneo Corporativo',
        description: 'Un torneo de un día diseñado para tu empresa. Formato, catering y logística completa. Tu equipo compite, nosotros organizamos.',
        accent: 'bandeja' as const,
      },
      {
        icon: 'Users',
        title: 'Team Building Pádel',
        description: 'Una experiencia diseñada para unir equipos. Dinámica, competitiva y con un ambiente que facilita la conexión entre personas.',
        accent: 'chiquita' as const,
      },
    ],
  },

  experience: {
    eyebrow: 'INFINITY EXPERIENCE',
    headline: 'Eventos que se recuerdan',
    subheadline: 'Torneos y experiencias premium para grupos, empresas y ocasiones especiales. Diseñamos cada evento desde cero.',
    items: [
      { id: 1, name: 'Team Building Pádel · Madrid',   location: 'Madrid',    category: 'Empresa',  spots: 20, status: 'finished' as const },
      { id: 2, name: 'Torneo Social · Valencia',        location: 'Valencia',  category: 'Social',   spots: 16, status: 'finished' as const },
      { id: 3, name: 'Clinic Premium · Sevilla',        location: 'Sevilla',   category: 'Premium',  spots: 12, status: 'finished' as const },
      { id: 4, name: 'Team Building · Barcelona',       location: 'Barcelona', category: 'Empresa',  spots: 24, status: 'upcoming' as const },
      { id: 5, name: 'Torneo Corporativo · Madrid',     location: 'Madrid',    category: 'Empresa',  spots: 32, status: 'upcoming' as const },
      { id: 6, name: 'Evento Privado · Bilbao',         location: 'Bilbao',    category: 'Privado',  spots: 16, status: 'upcoming' as const },
      { id: 7, name: 'Clinic Premium · Madrid',         location: 'Madrid',    category: 'Premium',  spots: 8,  status: 'upcoming' as const },
    ],
  },

  tourHook: {
    eyebrow: '¿QUIERES COMPETIR TÚ?',
    headline: 'Infinity Padel Tour',
    description: 'Si además de organizarlo quieres competir, tenemos un circuito para ti. Liga semanal y torneos premium de un día en instalaciones de élite.',
    cta: 'Descubre el Tour',
  },

  contact: {
    eyebrow: 'CONTACTO',
    headline: 'Hablemos de tu proyecto.',
    subheadline: 'Cuéntanos qué necesitas y te respondemos en menos de 24 horas.',
    fields: {
      nombre:   'Nombre completo',
      empresa:  'Empresa',
      email:    'Email corporativo',
      telefono: 'Teléfono',
      servicio: 'Servicio de interés',
      mensaje:  'Cuéntanos más (opcional)',
    },
    servicioOptions: [
      'Liga Corporativa',
      'Torneo Corporativo',
      'Team Building Pádel',
      'Infinity Experience',
      'Otro',
    ],
    cta:   'ENVIAR SOLICITUD',
    legal: 'Al enviarlo aceptas que nos pongamos en contacto contigo. Sin spam, solo lo importante.',
    success_title:   '¡Solicitud recibida!',
    success_message: 'Nos pondremos en contacto en menos de 24 horas.',
  },

  meta: {
    title: 'Infinity Padel — Gestión deportiva premium para empresas',
    description: 'Ligas corporativas, torneos de empresa y experiencias premium de pádel. Diseñamos cada evento a medida.',
  },

  footer: {
    tagline: 'Gestión deportiva premium.',
    copyright: `© ${new Date().getFullYear()} Infinity Padel. Todos los derechos reservados.`,
    links: [
      { label: 'Privacidad', href: '/privacidad' },
      { label: 'Contacto',   href: '#contacto' },
    ],
  },
}
