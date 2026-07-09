export const corporate = {
  hero: {
    badge: 'GESTIÓN DEPORTIVA PREMIUM',
    headline_line1: 'EXPERIENCIAS',
    headline_line2: 'DE PÁDEL.',
    description: 'Organizamos ligas, torneos y eventos de pádel para empresas que quieren algo más que un evento. Gestionamos cada detalle para que tu equipo solo tenga que disfrutar.',
    cta: 'SOLICITAR INFORMACIÓN',
    image: 'https://images.unsplash.com/photo-1658723826297-fe4d1b1e6600?auto=format&fit=crop&w=1920&q=80',
  },

  about: {
    eyebrow: 'QUIÉNES SOMOS',
    headline: 'La empresa detrás del pádel premium',
    description: 'Somos Infinity Padel. Llevamos años organizando experiencias de pádel para empresas que quieren algo más que un evento. Gestionamos cada detalle — el formato, la logística, el ambiente y el postpádel — para que tu equipo solo tenga que disfrutar.',
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
        description: 'Gestionamos tu liga interna de principio a fin. Grupos por nivel, jornadas fijas, arbitraje y una experiencia que une equipos durante toda la temporada.',
        accent: 'vibora' as const,
        image: 'https://images.unsplash.com/photo-1646649853703-7645147474ba?auto=format&fit=crop&w=800&q=80',
      },
      {
        icon: 'Trophy',
        title: 'Torneo Corporativo',
        description: 'Un torneo de un día diseñado para tu empresa. Formato profesional, premios, welcome pack y toda la logística. Tu equipo compite, nosotros lo gestionamos todo.',
        accent: 'bandeja' as const,
        image: 'https://images.unsplash.com/photo-1612534847738-b3af9bc31f0c?auto=format&fit=crop&w=800&q=80',
      },
      {
        icon: 'Users',
        title: 'Team Building Pádel',
        description: 'La experiencia de pádel más efectiva para conectar equipos. Dinámica, competitiva y con postpádel incluido — porque lo mejor siempre pasa fuera de la pista.',
        accent: 'chiquita' as const,
        image: 'https://images.unsplash.com/photo-1646649851800-48dba35edc76?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },

  whyPadel: {
    eyebrow: '¿POR QUÉ EL PÁDEL?',
    headline: 'El deporte que une equipos',
    description: 'El pádel es el deporte de empresa por excelencia. Fácil de practicar desde el primer día, muy social y con una curva de aprendizaje que lo hace accesible a cualquier nivel.',
    stats: [
      {
        value: '+5M',
        label: 'Jugadores en España',
        image: 'https://images.unsplash.com/photo-1657704358775-ed705c7388d2?auto=format&fit=crop&w=600&q=75',
      },
      {
        value: '+4.000',
        label: 'Clubs en España',
        image: 'https://images.unsplash.com/photo-1526888935184-a82d2a4b7e67?auto=format&fit=crop&w=600&q=75',
      },
      {
        value: '#1',
        label: 'Deporte de crecimiento',
        image: 'https://images.unsplash.com/photo-1646651105426-e8c8ee9badde?auto=format&fit=crop&w=600&q=75',
      },
      {
        value: '100%',
        label: 'Postpádel incluido',
        image: 'https://images.unsplash.com/photo-1646649851800-48dba35edc76?auto=format&fit=crop&w=600&q=75',
      },
    ],
  },

  experience: {
    eyebrow: 'INFINITY EXPERIENCE',
    headline: 'Eventos que se recuerdan',
    subheadline: 'Torneos y experiencias premium para grupos, empresas y ocasiones especiales. Diseñamos cada evento desde cero.',
    items: [
      { id: 1, name: 'Team Building Pádel · Madrid',   location: 'Madrid',    category: 'Empresa',  spots: 20, status: 'finished' as const, image: 'https://images.unsplash.com/photo-1646649853703-7645147474ba?auto=format&fit=crop&w=600&q=75' },
      { id: 2, name: 'Torneo Social · Valencia',        location: 'Valencia',  category: 'Social',   spots: 16, status: 'finished' as const, image: 'https://images.unsplash.com/photo-1657704358775-ed705c7388d2?auto=format&fit=crop&w=600&q=75' },
      { id: 3, name: 'Clinic Premium · Sevilla',        location: 'Sevilla',   category: 'Premium',  spots: 12, status: 'finished' as const, image: 'https://images.unsplash.com/photo-1526888935184-a82d2a4b7e67?auto=format&fit=crop&w=600&q=75' },
      { id: 4, name: 'Team Building · Barcelona',       location: 'Barcelona', category: 'Empresa',  spots: 24, status: 'upcoming' as const, image: 'https://images.unsplash.com/photo-1612534847738-b3af9bc31f0c?auto=format&fit=crop&w=600&q=75' },
      { id: 5, name: 'Torneo Corporativo · Madrid',     location: 'Madrid',    category: 'Empresa',  spots: 32, status: 'upcoming' as const, image: 'https://images.unsplash.com/photo-1646649851800-48dba35edc76?auto=format&fit=crop&w=600&q=75' },
      { id: 6, name: 'Evento Privado · Bilbao',         location: 'Bilbao',    category: 'Privado',  spots: 16, status: 'upcoming' as const, image: 'https://images.unsplash.com/photo-1646651105426-e8c8ee9badde?auto=format&fit=crop&w=600&q=75' },
      { id: 7, name: 'Clinic Premium · Madrid',         location: 'Madrid',    category: 'Premium',  spots: 8,  status: 'upcoming' as const, image: 'https://plus.unsplash.com/premium_photo-1708692919998-e3dc853ef8a8?auto=format&fit=crop&w=600&q=75' },
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
