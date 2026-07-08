export const landing = {
  hub: {
    badge: 'TEMPORADA 26/27',
    headline_line1: 'INFINITY',
    headline_line2: 'PADEL TOUR.',
    description: 'Tres formas de vivir el pádel. Una liga, un circuito de torneos y eventos a medida bajo un mismo proyecto.',
    services: [
      {
        id: 'liga',
        eyebrow: 'LIGA · PARTICULARES & EMPRESAS',
        title: 'Liga Infinity BY LOK',
        description: 'Compite cada semana durante toda la temporada. Grupos por nivel, jornadas fijas y estadísticas en tiempo real.',
        cta: 'Descubre la Liga',
        href: '/liga',
        accent: 'vibora' as const,
      },
      {
        id: 'lok-padel-tour',
        eyebrow: 'CIRCUITO DE TORNEOS',
        title: 'LOK Pádel Tour',
        description: 'Torneos de 1-2 días en las mejores instalaciones de España. Formato Open para todos los niveles. Seis ciudades, una temporada.',
        cta: 'Ver el Circuito',
        href: '/lok-padel-tour',
        accent: 'bandeja' as const,
      },
      {
        id: 'ipt-experience',
        eyebrow: 'EVENTOS · PARTICULARES & EMPRESAS',
        title: 'IPT Experience',
        description: 'Eventos exclusivos de pádel para grupos, empresas y ocasiones especiales. Diseñamos cada experiencia desde cero.',
        cta: 'Ver Experiencias',
        href: '/ipt-experience',
        accent: 'chiquita' as const,
      },
    ],
  },

  ligaHero: {
    eyebrow: 'LIGA INFINITY PADEL TOUR · BY LOK',
    headline_line1: 'COMPITE.',
    headline_line2: 'CADA SEMANA.',
    description: 'Una liga estructurada durante toda la temporada, con grupos por nivel real y una experiencia que va más allá de ganar o perder.',
    cta: 'INSCRIBIRME EN LA LIGA',
  },

  lokTourHero: {
    eyebrow: 'LOK PÁDEL TOUR · CIRCUITO OFICIAL',
    headline_line1: 'EL CIRCUITO',
    headline_line2: 'QUE RECORRE ESPAÑA.',
    description: 'Torneos de 1-2 días en las mejores instalaciones del país. Formato Open para todos los niveles. Seis ciudades, una temporada.',
    cta: 'QUIERO PARTICIPAR',
  },

  eventosHero: {
    eyebrow: 'IPT EXPERIENCE · EVENTOS EXCLUSIVOS',
    headline_line1: 'TU EVENTO',
    headline_line2: 'DE PÁDEL.',
    description: 'Diseñamos experiencias únicas de pádel para grupos, empresas y ocasiones especiales. Cada evento es completamente personalizado.',
    cta: 'QUIERO UN EVENTO',
  },

  liga: {
    eyebrow: 'LIGA INFINITY PADEL TOUR',
    headline: 'La liga que reimagina la competición',
    description:
      'Una competición estructurada durante toda la temporada, con grupos por nivel real, un calendario fijo y una experiencia que va mucho más allá de ganar o perder.',
    pillars: [
      {
        icon: 'Trophy',
        title: 'Jornadas semanales',
        description:
          'Compite regularmente a lo largo de la temporada con un calendario estructurado y partidos de alto nivel en tu grupo.',
      },
      {
        icon: 'Users',
        title: 'Grupos por nivel',
        description:
          'Iniciación · Intermedio · Avanzado · Competición. Juegas siempre contra rivales de tu mismo nivel para que cada partido importe.',
      },
      {
        icon: 'Star',
        title: 'Experiencia premium',
        description:
          'Clubs seleccionados, arbitraje profesional y estadísticas en tiempo real. Esto es una liga de verdad.',
      },
    ],
    steps: [
      { number: '01', title: 'Inscríbete',       description: 'Completa el formulario y elige tu nivel y categoría.' },
      { number: '02', title: 'Te asignamos',      description: 'Te colocamos en el grupo más adecuado para ti.' },
      { number: '03', title: 'Compite',           description: 'Juega tus jornadas en los clubes del circuito.' },
      { number: '04', title: 'Vive la temporada', description: 'Ranking, estadísticas y experiencias exclusivas.' },
    ],
  },

  ligaForm: {
    eyebrow: 'INSCRIPCIÓN A LA LIGA',
    headline: 'Únete a la liga.',
    subheadline:
      'Rellena el formulario y nos pondremos en contacto contigo para confirmar tu plaza en la temporada 26/27.',
    fields: {
      nombre:    'Nombre completo',
      email:     'Email',
      telefono:  'Teléfono',
      club:      'Club de pádel',
      nivel:     'Nivel de juego',
      categoria: 'Categoría',
    },
    nivelOptions:     ['Iniciación', 'Intermedio', 'Avanzado', 'Competición'],
    categoriaOptions: ['Masculina', 'Femenina', 'Mixta'],
    cta:   'INSCRIBIRME EN LA LIGA',
    legal: 'Al enviarlo aceptas recibir comunicaciones sobre la Liga Infinity Padel Tour. Sin spam, solo lo importante.',
    success_title:   '¡Inscripción recibida!',
    success_message: 'Nos pondremos en contacto pronto para confirmar tu plaza en la temporada 26/27.',
  },

  lokTour: {
    eyebrow: 'LOK PÁDEL TOUR',
    headline: 'El circuito que recorre España',
    description:
      'Torneos de 1 y 2 días en las mejores instalaciones del país. Formato Open con cuadros diferenciados por nivel. Seis paradas, una temporada.',
    pillars: [
      {
        icon: 'MapPin',
        title: '6 ciudades',
        description: 'Madrid, Valencia, Barcelona, Bilbao, Sevilla y Málaga. Siempre en instalaciones de primer nivel.',
      },
      {
        icon: 'Calendar',
        title: 'Formato 1-2 días',
        description: 'Torneos intensos de fin de semana. Máxima competición en el mínimo tiempo.',
      },
      {
        icon: 'Trophy',
        title: 'Todos los niveles',
        description: 'Cuadros diferenciados por nivel. Desde iniciación hasta categoría Open Competición.',
      },
    ],
    items: [
      {
        id: 1,
        name: 'LOK Pádel Tour · Madrid Open',
        city: 'Madrid',
        dates: '15–16 Mar 2025',
        pairs: 64,
        format: 'Open Mixto',
        status: 'upcoming' as const,
      },
      {
        id: 2,
        name: 'LOK Pádel Tour · Valencia Masters',
        city: 'Valencia',
        dates: '5–6 Abr 2025',
        pairs: 48,
        format: 'Open Masculino',
        status: 'upcoming' as const,
      },
      {
        id: 3,
        name: 'LOK Pádel Tour · Barcelona Premier',
        city: 'Barcelona',
        dates: '26–27 Abr 2025',
        pairs: 64,
        format: 'Open Mixto',
        status: 'upcoming' as const,
      },
      {
        id: 4,
        name: 'LOK Pádel Tour · Bilbao Classic',
        city: 'Bilbao',
        dates: '17–18 May 2025',
        pairs: 32,
        format: 'Open Femenino',
        status: 'upcoming' as const,
      },
      {
        id: 5,
        name: 'LOK Pádel Tour · Sevilla Cup',
        city: 'Sevilla',
        dates: '7–8 Jun 2025',
        pairs: 48,
        format: 'Open Mixto',
        status: 'upcoming' as const,
      },
      {
        id: 6,
        name: 'LOK Pádel Tour · Málaga Finals',
        city: 'Málaga',
        dates: '28–29 Jun 2025',
        pairs: 64,
        format: 'Open Masculino',
        status: 'upcoming' as const,
      },
    ],
  },

  lokTourForm: {
    eyebrow: 'APÚNTATE AL CIRCUITO',
    headline: 'Sé el primero en participar.',
    subheadline: 'Regístrate y te avisaremos cuando abramos las inscripciones para cada torneo.',
    fields: {
      nombre:    'Nombre completo',
      email:     'Email',
      telefono:  'Teléfono',
      nivel:     'Nivel de juego',
      ciudad:    'Ciudad de interés',
      comentario: 'Cuéntanos algo (opcional)',
    },
    nivelOptions:  ['Iniciación', 'Intermedio', 'Avanzado', 'Competición'],
    ciudadOptions: ['Madrid', 'Valencia', 'Barcelona', 'Bilbao', 'Sevilla', 'Málaga', 'Todas'],
    cta:   'APUNTARME AL CIRCUITO',
    legal: 'Al enviarlo aceptas recibir comunicaciones sobre el LOK Pádel Tour. Sin spam, solo lo importante.',
    success_title:   '¡Apuntado al circuito!',
    success_message: 'Te avisaremos cuando abramos inscripciones para los torneos cerca de ti.',
  },

  eventos: {
    eyebrow: 'IPT EXPERIENCE',
    headline: 'Tu evento de pádel, a otro nivel',
    subheadline:
      'Diseñamos experiencias únicas de pádel para grupos, empresas y ocasiones especiales. Cada evento es completamente personalizado.',
    items: [
      {
        id: 1,
        name: 'Team Building Pádel · Madrid',
        location: 'Madrid',
        category: 'Empresa',
        spots: 20,
        status: 'finished' as const,
        gradient: 'from-[#05080F] to-[#08462F]',
      },
      {
        id: 2,
        name: 'Torneo Social · Valencia',
        location: 'Valencia',
        category: 'Social',
        spots: 16,
        status: 'finished' as const,
        gradient: 'from-[#05080F] to-[#08462F]',
      },
      {
        id: 3,
        name: 'Clinic Premium · Sevilla',
        location: 'Sevilla',
        category: 'Premium',
        spots: 12,
        status: 'finished' as const,
        gradient: 'from-[#05080F] to-[#08462F]',
      },
      {
        id: 4,
        name: 'Team Building Pádel · Barcelona',
        location: 'Barcelona',
        category: 'Empresa',
        spots: 24,
        status: 'upcoming' as const,
        gradient: 'from-[#08462F] to-[#1a5c3a]',
      },
      {
        id: 5,
        name: 'Torneo Corporativo · Madrid',
        location: 'Madrid',
        category: 'Empresa',
        spots: 32,
        status: 'upcoming' as const,
        gradient: 'from-[#08462F] to-[#1a5c3a]',
      },
      {
        id: 6,
        name: 'Evento Privado · Bilbao',
        location: 'Bilbao',
        category: 'Privado',
        spots: 16,
        status: 'upcoming' as const,
        gradient: 'from-[#08462F] to-[#1a5c3a]',
      },
      {
        id: 7,
        name: 'Clinic Premium · Madrid',
        location: 'Madrid',
        category: 'Premium',
        spots: 8,
        status: 'upcoming' as const,
        gradient: 'from-[#08462F] to-[#1a5c3a]',
      },
    ],
  },

  eventoForm: {
    eyebrow: 'SOLICITA TU EVENTO',
    headline: 'Cuéntanos qué tienes en mente.',
    subheadline:
      'Diseñamos el evento de pádel perfecto para tu empresa o grupo. Rellena el formulario y te contactamos.',
    fields: {
      nombre:     'Nombre completo',
      email:      'Email',
      telefono:   'Teléfono',
      nivel:      'Nivel de juego',
      comentario: 'Cuéntanos tu idea (opcional)',
    },
    nivelOptions: ['Iniciación', 'Intermedio', 'Avanzado', 'Competición'],
    cta:   'SOLICITAR MI EVENTO',
    legal: 'Al enviarlo aceptas recibir comunicaciones sobre IPT Experience. Sin spam, solo lo importante.',
    success_title:   '¡Solicitud recibida!',
    success_message: 'Nos pondremos en contacto contigo para diseñar tu evento a medida.',
  },

  meta: {
    title: 'Infinity Padel Tour BY LOK — Liga · Circuito · Experiencias',
    description: 'Liga de pádel, circuito de torneos y eventos exclusivos. Tres formas de vivir el pádel bajo un mismo proyecto.',
    ogImage: '/og-image.jpg',
  },

  footer: {
    tagline:   'Liga · Circuito · Experiencias.',
    copyright: `© ${new Date().getFullYear()} Infinity Padel Tour BY LOK. Todos los derechos reservados.`,
    links: [
      { label: 'Privacidad', href: '/privacidad' },
      { label: 'Contacto',   href: 'mailto:joseubeda10@gmail.com' },
    ],
  },
}
