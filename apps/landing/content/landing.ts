export const landing = {
  hub: {
    badge: 'TEMPORADA 26/27',
    headline_line1: 'INFINITY',
    headline_line2: 'PADEL TOUR.',
    description: 'Dos formas de vivir el pádel. Una liga competitiva y eventos premium bajo un mismo circuito.',
    services: [
      {
        id: 'liga',
        eyebrow: 'COMPETICIÓN',
        title: 'Liga Infinity Padel Tour',
        description: 'Compite cada semana en grupos por nivel real. Calendario fijo, arbitraje profesional y estadísticas en tiempo real durante toda la temporada.',
        cta: 'Descubre la Liga',
        href: '/liga',
      },
      {
        id: 'ipt-experience',
        eyebrow: 'EXPERIENCIA',
        title: 'IPT Experience',
        description: 'Torneos y experiencias premium en instalaciones de élite. Gastronomía, formato exclusivo y un ambiente pensado para disfrutar el pádel de otra manera.',
        cta: 'Ver Eventos',
        href: '/ipt-experience',
      },
    ],
  },

  ligaHero: {
    eyebrow: 'LIGA INFINITY PADEL TOUR',
    headline_line1: 'COMPITE.',
    headline_line2: 'CADA SEMANA.',
    description: 'Una liga estructurada durante toda la temporada, con grupos por nivel real y una experiencia que va más allá de ganar o perder.',
    cta: 'INSCRIBIRME EN LA LIGA',
  },

  eventosHero: {
    eyebrow: 'IPT EXPERIENCE',
    headline_line1: 'PÁDEL',
    headline_line2: 'PREMIUM.',
    description: 'Torneos y experiencias exclusivas en instalaciones de élite. Gastronomía, formato único y un circuito diseñado para disfrutar.',
    cta: 'QUIERO APUNTARME',
  },

  meta: {
    title: 'Infinity Padel Tour BY LÕK — La liga que lo cambia todo',
    description:
      'Descubre la nueva era del pádel. Liga competitiva y eventos premium. Inscríbete antes que nadie.',
    ogImage: '/og-image.jpg',
  },

  hero: {
    badge: '★ TEMPORADA 26/27 · DOS VERTICALES',
    headline_line1: 'INFINITY PADEL',
    headline_line2: 'TOUR.',
    description:
      'La plataforma de pádel que une competición estructurada y experiencias premium. Una liga con personalidad y eventos únicos que no encontrarás en ningún otro circuito.',
    cta_primary:   'ÚNETE A LA LIGA',
    cta_secondary: 'IPT EXPERIENCE',
    stats: [
      { value: '2',      label: 'VERTICALES' },
      { value: 'T26/27', label: 'TEMPORADA' },
      { value: 'LÕK',    label: 'PARTNER OFICIAL' },
    ],
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
      { number: '01', title: 'Inscríbete',      description: 'Completa el formulario y elige tu nivel y categoría.' },
      { number: '02', title: 'Te asignamos',     description: 'Te colocamos en el grupo más adecuado para ti.' },
      { number: '03', title: 'Compite',          description: 'Juega tus jornadas en los clubes del circuito.' },
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
    nivelOptions:    ['Iniciación', 'Intermedio', 'Avanzado', 'Competición'],
    categoriaOptions: ['Masculina', 'Femenina', 'Mixta'],
    cta:             'INSCRIBIRME EN LA LIGA',
    legal:
      'Al enviarlo aceptas recibir comunicaciones sobre la Liga Infinity Padel Tour. Sin spam, solo lo importante.',
    success_title:   '¡Inscripción recibida!',
    success_message:
      'Nos pondremos en contacto pronto para confirmar tu plaza en la temporada 26/27.',
  },

  eventos: {
    eyebrow: 'IPT EXPERIENCE',
    headline: 'Vive el pádel de otra manera',
    subheadline:
      'Torneos y experiencias premium para jugadores que buscan algo más. Gastronomía, instalaciones de élite y un formato pensado para disfrutar.',
    items: [
      // Pasados
      {
        id: 1,
        name: 'IPT Experience · Madrid I',
        location: 'Madrid',
        category: 'Mixto',
        spots: 32,
        status: 'finished' as const,
        gradient: 'from-[#05080F] to-[#08462F]',
      },
      {
        id: 2,
        name: 'IPT Experience · Valencia',
        location: 'Valencia',
        category: 'Masculino',
        spots: 24,
        status: 'finished' as const,
        gradient: 'from-[#05080F] to-[#08462F]',
      },
      {
        id: 3,
        name: 'IPT Experience · Sevilla',
        location: 'Sevilla',
        category: 'Femenino',
        spots: 20,
        status: 'finished' as const,
        gradient: 'from-[#05080F] to-[#08462F]',
      },
      // Próximos
      {
        id: 4,
        name: 'IPT Experience · Barcelona',
        location: 'Barcelona',
        category: 'Mixto',
        spots: 32,
        status: 'upcoming' as const,
        gradient: 'from-dormilona to-willy',
      },
      {
        id: 5,
        name: 'IPT Experience · Bilbao',
        location: 'Bilbao',
        category: 'Masculino',
        spots: 24,
        status: 'upcoming' as const,
        gradient: 'from-dormilona to-willy',
      },
      {
        id: 6,
        name: 'IPT Experience · Málaga',
        location: 'Málaga',
        category: 'Femenino',
        spots: 28,
        status: 'upcoming' as const,
        gradient: 'from-dormilona to-willy',
      },
      {
        id: 7,
        name: 'IPT Experience · Zaragoza',
        location: 'Zaragoza',
        category: 'Mixto',
        spots: 20,
        status: 'upcoming' as const,
        gradient: 'from-dormilona to-willy',
      },
    ],
  },

  eventoForm: {
    eyebrow: 'INSCRIPCIÓN A EVENTOS',
    headline: 'Únete a la experiencia.',
    subheadline:
      'Apúntate a nuestra lista y te avisaremos cuando abramos las inscripciones para los próximos eventos.',
    fields: {
      nombre:     'Nombre completo',
      email:      'Email',
      telefono:   'Teléfono',
      nivel:      'Nivel de juego',
      comentario: 'Cuéntanos algo (opcional)',
    },
    nivelOptions: ['Iniciación', 'Intermedio', 'Avanzado', 'Competición'],
    cta:          'QUIERO APUNTARME',
    legal:
      'Al enviarlo aceptas recibir comunicaciones sobre IPT Experience. Sin spam, solo lo importante.',
    success_title:   '¡Apuntado!',
    success_message: 'Te avisaremos cuando abramos inscripciones para el próximo evento.',
  },

  footer: {
    tagline:   'La liga que lo cambia todo.',
    copyright: `© ${new Date().getFullYear()} Infinity Padel Tour. Todos los derechos reservados.`,
    links: [
      { label: 'Privacidad', href: '/privacidad' },
      { label: 'Contacto',   href: 'mailto:joseubeda10@gmail.com' },
    ],
  },
}
