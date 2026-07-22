export const corporate = {
  hero: {
    badge: 'INFINITY PADEL · EVENTOS & EXPERIENCIAS',
    headline_line1: 'PÁDEL PARA',
    headline_line2: 'EMPRESAS.',
    description: 'Organizamos eventos de pádel para empresas y experiencias exclusivas para grupos internacionales. Gestionamos cada detalle para que solo tengas que disfrutar.',
    cta: 'SOLICITAR INFORMACIÓN',
    image: 'https://images.unsplash.com/photo-1658723826297-fe4d1b1e6600?auto=format&fit=crop&w=1920&q=80',
  },

  about: {
    eyebrow: 'QUIÉNES SOMOS',
    headline: 'La empresa detrás del pádel premium',
    description: 'Somos Infinity Padel. Llevamos años organizando experiencias de pádel que van más allá del deporte. Para empresas que quieren un evento que se recuerde y para grupos internacionales que quieren vivir el pádel a la española.',
    stats: [
      { value: '+50', label: 'Eventos organizados' },
      { value: '+1.200', label: 'Participantes' },
      { value: '6', label: 'Ciudades activas' },
    ],
  },

  services: {
    eyebrow: 'DOS LÍNEAS DE SERVICIO',
    headline: 'Empresas y extranjeros',
    items: [
      {
        icon: 'Building2',
        title: 'Eventos para Empresas',
        description: 'Ligas corporativas, torneos de empresa y team building con pádel. Gestionamos todo el formato, la logística, el ambiente y el postpádel para que tu equipo solo tenga que aparecer.',
        accent: 'vibora' as const,
        image: 'https://images.unsplash.com/photo-1646649853703-7645147474ba?auto=format&fit=crop&w=800&q=80',
      },
      {
        icon: 'Globe',
        title: 'Experiencias para Extranjeros',
        description: 'Pádel experience diseñado para grupos internacionales. Clases, torneos amistosos, visitas a clubes premium y toda la experiencia del pádel español en un solo día.',
        accent: 'bandeja' as const,
        image: 'https://images.unsplash.com/photo-1612534847738-b3af9bc31f0c?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },

  whyPadel: {
    eyebrow: '¿POR QUÉ EL PÁDEL?',
    headline: 'El deporte que une equipos',
    description: 'El pádel es el deporte de empresa por excelencia. Fácil de practicar desde el primer día, muy social y con una curva de aprendizaje que lo hace accesible a cualquier nivel. Para extranjeros, es la experiencia deportiva más auténtica que pueden vivir en España.',
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
        label: 'Experiencia gestionada',
        image: 'https://images.unsplash.com/photo-1646649851800-48dba35edc76?auto=format&fit=crop&w=600&q=75',
      },
    ],
  },

  experience: {
    eyebrow: 'EVENTOS REALIZADOS',
    headline: 'Eventos que se recuerdan',
    subheadline: 'Empresa o grupo internacional, cada evento lo diseñamos desde cero para que sea único.',
    items: [
      { id: 1, name: 'Team Building · Madrid',           location: 'Madrid',    category: 'Empresa',      spots: 20, status: 'finished' as const, image: 'https://images.unsplash.com/photo-1646649853703-7645147474ba?auto=format&fit=crop&w=600&q=75' },
      { id: 2, name: 'Padel Experience · London Group',  location: 'Madrid',    category: 'Extranjeros',  spots: 16, status: 'finished' as const, image: 'https://images.unsplash.com/photo-1657704358775-ed705c7388d2?auto=format&fit=crop&w=600&q=75' },
      { id: 3, name: 'Torneo Corporativo · Barcelona',   location: 'Barcelona', category: 'Empresa',      spots: 32, status: 'finished' as const, image: 'https://images.unsplash.com/photo-1526888935184-a82d2a4b7e67?auto=format&fit=crop&w=600&q=75' },
      { id: 4, name: 'Padel Day · International Group',  location: 'Sevilla',   category: 'Extranjeros',  spots: 12, status: 'upcoming' as const, image: 'https://images.unsplash.com/photo-1612534847738-b3af9bc31f0c?auto=format&fit=crop&w=600&q=75' },
      { id: 5, name: 'Liga Corporativa · Valencia',      location: 'Valencia',  category: 'Empresa',      spots: 40, status: 'upcoming' as const, image: 'https://images.unsplash.com/photo-1646649851800-48dba35edc76?auto=format&fit=crop&w=600&q=75' },
      { id: 6, name: 'Padel Experience · French Group',  location: 'Barcelona', category: 'Extranjeros',  spots: 20, status: 'upcoming' as const, image: 'https://images.unsplash.com/photo-1646651105426-e8c8ee9badde?auto=format&fit=crop&w=600&q=75' },
      { id: 7, name: 'Torneo Empresa · Madrid',          location: 'Madrid',    category: 'Empresa',      spots: 24, status: 'upcoming' as const, image: 'https://plus.unsplash.com/premium_photo-1708692919998-e3dc853ef8a8?auto=format&fit=crop&w=600&q=75' },
    ],
  },

  tourHook: {
    eyebrow: '¿QUIERES COMPETIR TÚ?',
    headline: 'Infinity Padel by LOK',
    description: 'Si además de organizar eventos quieres competir, nuestro circuito es para ti. Liga semanal, LOK Padel Tour y Liga de Empresas en la mejor plataforma de pádel competitivo.',
    cta: 'Descubre el Circuito',
  },

  contact: {
    eyebrow: 'CONTACTO',
    headline: 'Hablemos de tu proyecto.',
    subheadline: 'Cuéntanos qué necesitas y te respondemos en menos de 24 horas.',
    fields: {
      nombre:   'Nombre completo',
      empresa:  'Empresa u organización',
      email:    'Email de contacto',
      telefono: 'Teléfono',
      servicio: 'Tipo de evento',
      mensaje:  'Cuéntanos más (opcional)',
    },
    servicioOptions: [
      'Evento para empresa',
      'Liga corporativa',
      'Team Building',
      'Experiencia para grupo internacional',
      'Otro',
    ],
    cta:   'ENVIAR SOLICITUD',
    legal: 'Al enviarlo aceptas que nos pongamos en contacto contigo. Sin spam, solo lo importante.',
    success_title:   '¡Solicitud recibida!',
    success_message: 'Nos pondremos en contacto en menos de 24 horas.',
  },

  meta: {
    title: 'Infinity Padel — Eventos de pádel para empresas y grupos internacionales',
    description: 'Eventos corporativos de pádel y experiencias para grupos extranjeros. Diseñamos cada evento a medida.',
  },

  footer: {
    tagline: 'Eventos para empresas · Experiencias para extranjeros.',
    copyright: `© ${new Date().getFullYear()} Infinity Padel. Todos los derechos reservados.`,
    links: [
      { label: 'Privacidad', href: '/privacidad' },
      { label: 'Contacto',   href: '#contacto' },
    ],
  },
}
