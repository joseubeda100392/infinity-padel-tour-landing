export const landing = {
  hub: {
    badge: 'TEMPORADA 26/27',
    headline_line1: 'INFINITY PADEL',
    headline_line2: 'TOUR.',
    description: 'Liga semanal y torneos de un día. Dos formatos, una misma experiencia.',
    services: [
      {
        id: 'liga',
        eyebrow: 'LIGA · TEMPORADA COMPLETA',
        title: 'Liga Infinity',
        description: 'Compite cada semana durante toda la temporada. Grupos por nivel, jornadas fijas y estadísticas en tiempo real.',
        cta: 'Descubre la Liga',
        href: '/liga',
        accent: 'vibora' as const,
      },
      {
        id: 'one-day',
        eyebrow: 'ONE DAY EXPERIENCE · TORNEOS PREMIUM',
        title: 'Infinity Padel Tour',
        description: 'Torneos premium de un solo día en instalaciones de élite. Gastronomía, cuadros por nivel y una experiencia única.',
        cta: 'Ver los Torneos',
        href: '/infinity-padel-tour',
        accent: 'bandeja' as const,
      },
    ],
  },

  ligaHero: {
    eyebrow: 'LIGA INFINITY PADEL',
    headline_line1: 'COMPITE.',
    headline_line2: 'CADA SEMANA.',
    description: 'Una liga estructurada durante toda la temporada, con grupos por nivel real y una experiencia que va más allá de ganar o perder.',
    cta: 'INSCRIBIRME EN LA LIGA',
  },

  oneDayHero: {
    eyebrow: 'INFINITY PADEL TOUR · ONE DAY EXPERIENCE',
    headline_line1: 'UN DÍA.',
    headline_line2: 'TODA LA EXPERIENCIA.',
    description: 'Torneos premium de un día en instalaciones de élite. Gastronomía, competición de alto nivel y un formato único.',
    cta: 'QUIERO PARTICIPAR',
  },

  liga: {
    eyebrow: 'LIGA INFINITY PADEL',
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
    legal: 'Al enviarlo aceptas recibir comunicaciones sobre la Liga Infinity Padel. Sin spam, solo lo importante.',
    success_title:   '¡Inscripción recibida!',
    success_message: 'Nos pondremos en contacto pronto para confirmar tu plaza en la temporada 26/27.',
  },

  oneDay: {
    eyebrow: 'ONE DAY EXPERIENCE',
    headline: 'Pádel premium en un solo día',
    description:
      'Toda la emoción de un torneo de alto nivel concentrada en una única jornada. Instalaciones de élite, cuadros diferenciados y una experiencia diseñada al detalle.',
    pillars: [
      {
        icon: 'Clock',
        title: 'Formato de un día',
        description: 'Toda la emoción del torneo concentrada en una única jornada. Máxima intensidad, sin semanas de espera.',
      },
      {
        icon: 'Trophy',
        title: 'Cuadros premium',
        description: 'Niveles diferenciados con arbitraje y dirección técnica profesional. Compite contra rivales de tu nivel.',
      },
      {
        icon: 'Star',
        title: 'Experiencia gourmet',
        description: 'Instalaciones de élite, catering y atención al detalle en cada momento. Porque el pádel también es lifestyle.',
      },
    ],
    items: [
      { id: 1, name: 'Madrid Open',         location: 'Madrid',    dates: 'Feb 2025', pairs: 32, format: 'One Day Mixed',  status: 'upcoming' as const },
      { id: 2, name: 'Valencia Experience', location: 'Valencia',  dates: 'Mar 2025', pairs: 24, format: 'One Day Open',   status: 'upcoming' as const },
      { id: 3, name: 'Barcelona Classic',   location: 'Barcelona', dates: 'Abr 2025', pairs: 32, format: 'One Day Mixed',  status: 'upcoming' as const },
      { id: 4, name: 'Bilbao Gourmet',      location: 'Bilbao',    dates: 'May 2025', pairs: 24, format: 'One Day Open',   status: 'upcoming' as const },
    ],
  },

  oneDayForm: {
    eyebrow: 'APÚNTATE AL CIRCUITO',
    headline: 'Sé el primero en participar.',
    subheadline: 'Regístrate y te avisaremos cuando abramos las inscripciones para cada torneo.',
    fields: {
      nombre:     'Nombre completo',
      email:      'Email',
      telefono:   'Teléfono',
      nivel:      'Nivel de juego',
      ciudad:     'Ciudad de interés',
      comentario: 'Cuéntanos algo (opcional)',
    },
    nivelOptions:  ['Iniciación', 'Intermedio', 'Avanzado', 'Competición'],
    ciudadOptions: ['Madrid', 'Valencia', 'Barcelona', 'Bilbao', 'Todas'],
    cta:   'APUNTARME AL TORNEO',
    legal: 'Al enviarlo aceptas recibir comunicaciones sobre Infinity Padel Tour. Sin spam, solo lo importante.',
    success_title:   '¡Apuntado al circuito!',
    success_message: 'Te avisaremos cuando abramos inscripciones para los torneos cerca de ti.',
  },

  meta: {
    title: 'Infinity Padel Tour — Liga & One Day Experience',
    description: 'Liga semanal y torneos de un día. Dos formatos de competición premium bajo una misma marca.',
    ogImage: '/og-image.jpg',
  },

  footer: {
    tagline:   'Liga · One Day Experience.',
    copyright: `© ${new Date().getFullYear()} Infinity Padel Tour. Todos los derechos reservados.`,
    links: [
      { label: 'Privacidad', href: '/privacidad' },
      { label: 'Contacto',   href: 'mailto:joseubeda10@gmail.com' },
    ],
  },
}
