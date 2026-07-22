export const landing = {
  hub: {
    badge: 'TEMPORADA 26/27',
    headline_line1: 'INFINITY PADEL',
    headline_line2: 'BY LOK.',
    description: 'Liga semanal, circuito de torneos y liga de empresas. Tres formatos, una misma experiencia.',
    services: [
      {
        id: 'liga',
        eyebrow: 'LIGA · TEMPORADA COMPLETA',
        title: 'Liga Infinity',
        description: 'Compite cada semana durante toda la temporada. Grupos por nivel, jornadas fijas y estadísticas en tiempo real.',
        cta: 'Descubre la Liga',
        href: '/liga',
        accent: 'vibora' as const,
        image: 'https://images.unsplash.com/photo-1646649853703-7645147474ba?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'lok-tour',
        eyebrow: 'LOK PADEL TOUR · ONE DAY EXPERIENCE',
        title: 'LOK Padel Tour',
        description: 'Torneos premium de un solo día en instalaciones de élite. Gastronomía, cuadros por nivel y una experiencia única.',
        cta: 'Ver los Torneos',
        href: '/infinity-padel-tour',
        accent: 'bandeja' as const,
        image: 'https://images.unsplash.com/photo-1612534847738-b3af9bc31f0c?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'liga-empresas',
        eyebrow: 'LIGA DE EMPRESAS · COMPETICIÓN CORPORATIVA',
        title: 'Liga de Empresas',
        description: 'Tu empresa compite en una liga organizada de principio a fin. Inscribe tu equipo y disfruta de la temporada.',
        cta: 'Inscribe tu Empresa',
        href: '/liga-empresas',
        accent: 'chiquita' as const,
        image: 'https://images.unsplash.com/photo-1646649851800-48dba35edc76?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },

  ligaHero: {
    eyebrow: 'LIGA INFINITY BY LOK',
    headline_line1: 'COMPITE.',
    headline_line2: 'CADA SEMANA.',
    description: 'Una liga estructurada durante toda la temporada, con grupos por nivel real y una experiencia que va más allá de ganar o perder.',
    cta: 'INSCRIBIRME EN LA LIGA',
  },

  oneDayHero: {
    eyebrow: 'LOK PADEL TOUR · ONE DAY EXPERIENCE',
    headline_line1: 'UN DÍA.',
    headline_line2: 'TODA LA EXPERIENCIA.',
    description: 'Torneos premium de un día en instalaciones de élite. Gastronomía, competición de alto nivel y un formato único.',
    cta: 'QUIERO PARTICIPAR',
  },

  ligaEmpresasHero: {
    eyebrow: 'LIGA DE EMPRESAS · INFINITY PADEL BY LOK',
    headline_line1: 'TU EMPRESA.',
    headline_line2: 'EN LA PISTA.',
    description: 'Una liga organizada para equipos de empresa. Jornadas semanales, grupos por nivel y toda la experiencia Infinity Padel para tu equipo.',
    cta: 'INSCRIBIR MI EMPRESA',
  },

  liga: {
    eyebrow: 'LIGA INFINITY BY LOK',
    headline: 'La liga que reimagina la competición',
    description:
      'Una competición estructurada durante toda la temporada, con grupos por nivel real, un calendario fijo y una experiencia que va mucho más allá de ganar o perder.',
    pillars: [
      {
        icon: 'Trophy',
        title: 'Jornadas semanales',
        description: 'Compite regularmente a lo largo de la temporada con un calendario estructurado y partidos de alto nivel en tu grupo.',
        image: 'https://images.unsplash.com/photo-1658723826297-fe4d1b1e6600?auto=format&fit=crop&w=700&q=75',
      },
      {
        icon: 'Users',
        title: 'Grupos por nivel',
        description: 'Iniciación · Intermedio · Avanzado · Competición. Juegas siempre contra rivales de tu mismo nivel para que cada partido importe.',
        image: 'https://images.unsplash.com/photo-1657704358775-ed705c7388d2?auto=format&fit=crop&w=700&q=75',
      },
      {
        icon: 'Star',
        title: 'Experiencia premium',
        description: 'Clubs seleccionados, arbitraje profesional y estadísticas en tiempo real. Esto es una liga de verdad.',
        image: 'https://images.unsplash.com/photo-1526888935184-a82d2a4b7e67?auto=format&fit=crop&w=700&q=75',
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
    eyebrow: 'LOK PADEL TOUR',
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
      { id: 1, name: 'Madrid Open',         location: 'Madrid',    dates: 'Feb 2025', pairs: 32, format: 'One Day Mixed', status: 'upcoming' as const, image: 'https://images.unsplash.com/photo-1646649853703-7645147474ba?auto=format&fit=crop&w=800&q=75' },
      { id: 2, name: 'Valencia Experience', location: 'Valencia',  dates: 'Mar 2025', pairs: 24, format: 'One Day Open',  status: 'upcoming' as const, image: 'https://images.unsplash.com/photo-1657704358775-ed705c7388d2?auto=format&fit=crop&w=800&q=75' },
      { id: 3, name: 'Barcelona Classic',   location: 'Barcelona', dates: 'Abr 2025', pairs: 32, format: 'One Day Mixed', status: 'upcoming' as const, image: 'https://images.unsplash.com/photo-1646651105426-e8c8ee9badde?auto=format&fit=crop&w=800&q=75' },
      { id: 4, name: 'Bilbao Gourmet',      location: 'Bilbao',    dates: 'May 2025', pairs: 24, format: 'One Day Open',  status: 'upcoming' as const, image: 'https://images.unsplash.com/photo-1526888935184-a82d2a4b7e67?auto=format&fit=crop&w=800&q=75' },
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
    legal: 'Al enviarlo aceptas recibir comunicaciones sobre el LOK Padel Tour. Sin spam, solo lo importante.',
    success_title:   '¡Apuntado al circuito!',
    success_message: 'Te avisaremos cuando abramos inscripciones para los torneos cerca de ti.',
  },

  ligaEmpresas: {
    eyebrow: 'LIGA DE EMPRESAS',
    headline: 'La liga pensada para equipos de empresa',
    description:
      'Una competición organizada de principio a fin para que tu empresa solo tenga que disfrutar. Jornadas fijas, grupos por nivel y toda la gestión en nuestras manos.',
    pillars: [
      {
        icon: 'Building2',
        title: 'Gestión total',
        description: 'Nos encargamos de todo: grupos, jornadas, arbitraje y resultados. Tu empresa solo tiene que aparecer y jugar.',
        image: 'https://images.unsplash.com/photo-1646649851800-48dba35edc76?auto=format&fit=crop&w=700&q=75',
      },
      {
        icon: 'Users',
        title: 'Equipos por nivel',
        description: 'Grupos adaptados al nivel real de tus jugadores. Compite siempre contra equipos de empresa de tu misma categoría.',
        image: 'https://images.unsplash.com/photo-1657704358775-ed705c7388d2?auto=format&fit=crop&w=700&q=75',
      },
      {
        icon: 'Trophy',
        title: 'Temporada completa',
        description: 'Una liga con jornadas semanales durante toda la temporada. El equipo que más disfruta, gana.',
        image: 'https://images.unsplash.com/photo-1646649853703-7645147474ba?auto=format&fit=crop&w=700&q=75',
      },
    ],
    steps: [
      { number: '01', title: 'Inscribe tu empresa',  description: 'Rellena el formulario con los datos de tu empresa y número de equipos.' },
      { number: '02', title: 'Formamos los grupos',  description: 'Asignamos a tu equipo según el nivel y la ciudad.' },
      { number: '03', title: 'Compite cada semana',  description: 'Jornadas fijas en los clubes del circuito Infinity Padel.' },
      { number: '04', title: 'Vive la temporada',    description: 'Resultados, clasificaciones y experiencia Infinity para tu equipo.' },
    ],
  },

  ligaEmpresasForm: {
    eyebrow: 'INSCRIPCIÓN LIGA DE EMPRESAS',
    headline: 'Inscribe tu empresa.',
    subheadline: 'Cuéntanos cuántos equipos quieres inscribir y nos ponemos en contacto en menos de 24h.',
    fields: {
      nombre:   'Nombre de contacto',
      empresa:  'Nombre de la empresa',
      email:    'Email corporativo',
      telefono: 'Teléfono',
      equipos:  'Número de equipos',
      ciudad:   'Ciudad de interés',
      mensaje:  'Cuéntanos algo más (opcional)',
    },
    equiposOptions: ['1 equipo', '2 equipos', '3 o más equipos'],
    ciudadOptions:  ['Madrid', 'Valencia', 'Barcelona', 'Bilbao', 'Otra'],
    cta:   'INSCRIBIR MI EMPRESA',
    legal: 'Al enviarlo aceptas que nos pongamos en contacto contigo. Sin spam, solo lo importante.',
    success_title:   '¡Solicitud recibida!',
    success_message: 'Nos pondremos en contacto en menos de 24 horas para confirmar tu plaza en la Liga de Empresas.',
  },

  meta: {
    title: 'Infinity Padel by LOK — Liga, Tour & Empresas',
    description: 'Liga semanal, circuito de torneos y liga de empresas. Tres formatos de competición premium bajo una misma marca.',
    ogImage: '/og-image.jpg',
  },

  footer: {
    tagline:   'Liga · LOK Padel Tour · Liga de Empresas.',
    copyright: `© ${new Date().getFullYear()} Infinity Padel by LOK. Todos los derechos reservados.`,
    links: [
      { label: 'Privacidad', href: '/privacidad' },
      { label: 'Contacto',   href: 'mailto:joseubeda10@gmail.com' },
    ],
  },
}
