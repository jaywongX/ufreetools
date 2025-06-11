export default {
  name: 'Generador de Publicaciones de Instagram',
  description: 'Crear mockups realistas de publicaciones de Instagram con contenido personalizado, fondos y estadísticas de interacción',
  // Design Options
  designOptions: 'Opciones de Diseño',
  // User Profile
  userProfile: {
    title: 'Configuración del Perfil de Usuario',
    username: 'Nombre de Usuario',
    location: 'Ubicación',
    postedTime: 'Fecha y Hora de Publicación',
    postDate: 'Fecha de Publicación',
    avatar: 'Avatar',
    uploadAvatar: 'Subir Avatar',
    removeAvatar: 'Eliminar',
    verifiedAccount: 'Estado de la Cuenta',
    isVerified: 'Cuenta Verificada'
  },
  // Content Type
  contentType: 'Tipo de Contenido',
  contentTypes: {
    text: 'Solo Texto',
    image: 'Solo Imagen',
    mixed: 'Texto e Imagen'
  },
  // Text Content
  textContent: 'Contenido de Texto',
  postText: 'Texto de la Publicación',
  addHashtag: 'Agregar Hashtag',
  mentionUser: 'Mencionar Usuario',
  insertEmoji: 'Emoji',
  commonEmojis: 'Emojis Comunes',
  recommendedHashtags: 'Hashtags Recomendados',
  // Text Formatting
  fontFamily: 'Familia de Fuentes',
  fontSize: 'Tamaño de Fuente',
  textAlign: 'Alineación del Texto',
  textColor: 'Color del Texto',
  // Background Image
  backgroundImage: 'Imagen de Fondo',
  uploadImage: 'Subir una imagen',
  dragAndDrop: 'o arrastrar y soltar',
  imageFormats: 'PNG, JPG, GIF hasta 2MB',
  // Background
  background: 'Fondo',
  backgroundColor: 'Color de Fondo',
  backgroundType: 'Tipo de Fondo',
  backgroundTypes: {
    solid: 'Color Sólido',
    gradient: 'Degradado',
    pattern: 'Patrón'
  },
  // Gradient Options
  gradientStartColor: 'Color Inicial',
  gradientEndColor: 'Color Final',
  gradientDirection: 'Dirección',
  gradientDirections: {
    horizontal: 'Horizontal',
    vertical: 'Vertical',
    diagonal: 'Diagonal',
    diagonalReverse: 'Diagonal Inversa'
  },
  // Pattern Options
  patternType: 'Tipo de Patrón',
  // Post Format
  postFormat: 'Formato de Publicación',
  formats: {
    square: 'Cuadrado',
    portrait: 'Retrato',
    landscape: 'Paisaje'
  },
  // Engagement
  engagement: {
    title: 'Simulador de Interacciones',
    likeCount: 'Número de Me Gusta',
    commentCount: 'Número de Comentarios',
    viewCount: 'Número de Vistas',
    isLiked: 'Me gustó (por el espectador)',
    isSaved: 'Guardado (por el espectador)',
    hasStory: 'Tiene Historia de Instagram',
    showComments: 'Mostrar Comentarios',
    isTagged: 'Personas Etiquetadas',
    isSponsored: 'Contenido Patrocinado'
  },
  // Comments
  comments: {
    title: 'Comentarios Simulados',
    addComment: 'Agregar Comentario',
    delete: 'Eliminar',
    addForRealism: 'Agregar comentarios simulados para realismo',
    username: 'Nombre de Usuario',
    text: 'Comentario'
  },
  // Prompts
  prompts: {
    enterHashtag: 'Ingrese hashtag (sin #)',
    enterUsername: 'Ingrese nombre de usuario a mencionar',
    enterComment: 'Ingrese texto del comentario',
    defaultComment: '¡Se ve genial!',
    enterCommentUsername: 'Ingrese nombre de usuario del comentario',
    justNow: 'justo ahora'
  },
  // Action Buttons
  resetDesign: 'Restablecer Diseño',
  // Preview and Export
  preview: 'Vista Previa',
  export: 'Exportar',
  downloadAsPNG: 'Descargar como PNG',
  downloadAsJPG: 'Descargar como JPG',
  copyToClipboard: 'Copiar al Portapapeles',
  copied: '¡Copiado!',
  generating: 'Generando imagen...',
  article: {
    title: 'Generador de Publicaciones de Instagram: Guía Completa',
    introduction: 'Crear mockups realistas de publicaciones de Instagram para marketing, planificación de diseños o propósitos educativos con nuestra herramienta integral.',
    whatIs: {
      title: '¿Qué es un Generador de Publicaciones de Instagram?',
      paragraph1: 'Un Generador de Publicaciones de Instagram es una herramienta especializada que permite a los usuarios crear mockups realistas de publicaciones de Instagram sin publicarlas realmente en la plataforma. Nuestro Generador de Publicaciones de Instagram ofrece una solución integral para crear contenido auténtico de Instagram para diversos propósitos personales y profesionales, desde planificación de redes sociales hasta marketing y educación.',
      paragraph2: 'Con la creciente importancia de Instagram como canal de marketing, tener la capacidad de diseñar, visualizar y perfeccionar tus publicaciones de Instagram antes de publicarlas se ha convertido en algo esencial para empresas, influencers y gestores de redes sociales. Nuestro Generador de Publicaciones de Instagram aborda esta necesidad proporcionando una interfaz amigable para simular exactamente cómo se verán tus publicaciones en la plataforma.'
    },
    whyUse: {
      title: 'Por qué Necitas una Herramienta Generadora de Publicaciones de Instagram',
      paragraph1: 'En el paisaje digital actual, Instagram ha evolucionado desde una simple aplicación de compartir fotos hasta convertirse en una de las plataformas de marketing más poderosas disponibles. Con más de mil millones de usuarios activos, Instagram ofrece oportunidades sin precedentes para construir marcas, promocionar productos y conectar con audiencias. Sin embargo, crear publicaciones efectivas en Instagram requiere una planificación cuidadosa y diseño para destacarse en feeds saturados.',
      paragraph2: 'Nuestro Generador de Publicaciones de Instagram fue desarrollado en respuesta a varios desafíos clave enfrentados por creadores de redes sociales:',
      reasons: {
        contentPlanning: {
          title: 'Planificación de Contenido',
          description: 'Los gestores de redes sociales necesitan visualizar cómo se verán las publicaciones antes de publicarlas. El Generador de Publicaciones de Instagram permite crear mockups que pueden presentarse a clientes o miembros del equipo para aprobación sin requerir publicación real.'
        },
        educational: {
          title: 'Propósitos Educativos',
          description: 'Para quienes enseñan marketing en redes sociales, tener una herramienta que simule publicaciones de Instagram proporciona valiosas experiencias prácticas sin requerir acceso a cuentas reales.'
        },
        marketing: {
          title: 'Material de Marketing',
          description: 'Las empresas a menudo necesitan visuales de publicaciones de Instagram para presentaciones, sitios web o materiales promocionales. Nuestro generador crea mockups profesionales adecuados para estos propósitos.'
        },
        experimentation: {
          title: 'Experimentación de Diseño',
          description: 'El Generador de Publicaciones de Instagram permite a los creadores experimentar con diferentes elementos de diseño, leyendas y métricas de interacción sin la presión de publicar en vivo.'
        },
        consistency: {
          title: 'Planificación de Coherencia',
          description: 'Para marcas e influencers preocupados por mantener una estética cohesiva, la herramienta permite visualizar cómo nuevas publicaciones encajarán dentro de una estrategia de contenido existente.'
        }
      }
    },
    keyFeatures: {
      title: 'Características Clave de Nuestro Generador de Publicaciones de Instagram',
      intro: 'Nuestro Generador de Publicaciones de Instagram destaca de otras herramientas similares debido a sus características integrales y atención al detalle. Aquí está lo que hace de nuestra herramienta la elección preferida para creadores de contenido de Instagram:',
      profile: {
        title: '1. Personalización Completa del Perfil de Usuario',
        description: 'Personaliza cada aspecto de la cuenta simulada de Instagram:',
        items: {
          username: {
            title: 'Nombre de Usuario y Foto de Perfil',
            description: 'Sube avatares personalizados y establece nombres de usuario personalizados'
          },
          verification: {
            title: 'Insignia de Verificación',
            description: 'Agrega la codiciada insignia azul de verificación para simular cuentas verificadas'
          },
          location: {
            title: 'Etiquetas de Ubicación',
            description: 'Incluye información geográfica para aumentar la autenticidad'
          },
          timing: {
            title: 'Hora de Publicación',
            description: 'Establece fechas y horas personalizadas con cálculo automático de visualizaciones relativas (ej. "hace 2h" o "3d")'
          }
        }
      },
      content: {
        title: '2. Opciones Flexibles de Creación de Contenido',
        description: 'Nuestro Generador de Publicaciones de Instagram soporta múltiples tipos de contenido para satisfacer diferentes necesidades creativas:',
        items: {
          textOnly: {
            title: 'Publicaciones Solo de Texto',
            description: 'Crea publicaciones enfocadas en contenido escrito con fondos personalizables'
          },
          imageOnly: {
            title: 'Publicaciones Solo de Imagen',
            description: 'Sube tus propias imágenes para contenido visual'
          },
          mixed: {
            title: 'Contenido Mixto',
            description: 'Combina superposiciones de texto con imágenes de fondo para máximo impacto'
          },
          richText: {
            title: 'Edición Avanzada de Texto',
            description: 'Agrega hashtags, menciones y emojis con herramientas de un clic'
          },
          hashtags: {
            title: 'Hashtags Recomendados',
            description: 'Accede a sugerencias de hashtags populares y relevantes'
          }
        }
      },
      design: {
        title: '3. Personalización Avanzada de Diseño',
        description: 'Toma control completo sobre la presentación visual de tus publicaciones de Instagram:',
        items: {
          typography: {
            title: 'Controles de Tipografía',
            description: 'Elige entre múltiples familias de fuentes, tamaños, colores y opciones de alineación'
          },
          background: {
            title: 'Opciones de Fondo',
            description: 'Selecciona entre colores sólidos, degradados o patrones'
          },
          gradient: {
            title: 'Personalización de Degradados',
            description: 'Crea fondos degradados personalizados con ajuste de colores inicial y final, y direcciones'
          },
          pattern: {
            title: 'Selección de Patrón',
            description: 'Elige entre varias estilos de patrón para efectos únicos de fondo'
          },
          format: {
            title: 'Opciones de Formato',
            description: 'Cambia entre cuadrado, retrato y paisaje para coincidir con las proporciones de Instagram'
          }
        }
      },
      engagement: {
        title: '4. Simulación Realista de Interacciones',
        description: 'Repite interacciones auténticas de Instagram para crear mockups convincentes:',
        items: {
          likes: {
            title: 'Contador de Me Gusta',
            description: 'Ajusta el número de me gusta con displays numéricos o formato K/M'
          },
          comments: {
            title: 'Sistema de Comentarios',
            description: 'Agrega comentarios simulados de otros usuarios'
          },
          views: {
            title: 'Contador de Vistas',
            description: 'Establece recuentos personalizados de vistas para simulaciones de video'
          },
          interactions: {
            title: 'Interacciones del Espectador',
            description: 'Activa opciones para estados de "me gustó" y "guardado"'
          },
          story: {
            title: 'Indicadores de Historias',
            description: 'Agrega el anillo colorido que indica historias activas'
          },
          tags: {
            title: 'Contenido Etiquetado',
            description: 'Incluye personas etiquetadas para aumentar la realismo'
          },
          sponsored: {
            title: 'Contenido Patrocinado',
            description: 'Agrega etiquetas de "Colaboración pagada" para simulaciones de publicaciones patrocinadas'
          }
        }
      },
      export: {
        title: '5. Opciones de Exportación y Compartir',
        description: 'Una vez completado tu diseño de publicación de Instagram, nuestra herramienta ofrece convenientes opciones de exportación:',
        items: {
          png: {
            title: 'Exportar como PNG',
            description: 'Exporta imágenes PNG de alta calidad con transparencia'
          },
          jpg: {
            title: 'Exportar como JPG',
            description: 'Crea archivos JPG comprimidos para compartir más rápido'
          },
          clipboard: {
            title: 'Copiar al Portapapeles',
            description: 'Copia directamente la imagen para pegarla inmediatamente en otras aplicaciones'
          }
        }
      }
    },
    howTo: {
      title: 'Cómo Usar el Generador de Publicaciones de Instagram: Guía Paso a Paso',
      description: 'Nuestro Generador de Publicaciones de Instagram está diseñado para ser intuitivo y fácil de usar. Sigue estos pasos detallados para crear tu perfecto mockup de publicación de Instagram:',
      profileSetup: {
        title: 'Paso 1: Configurar la Configuración del Perfil de Usuario',
        description: 'Empieza personalizando los detalles de la cuenta que aparecerán en tu publicación de Instagram:',
        step1: 'Ingresa tu nombre de usuario deseado en el campo "Nombre de Usuario" en la parte superior del panel izquierdo',
        step2: 'Agrega una ubicación (ej. "Nueva York, EE.UU.") para aumentar la autenticidad',
        step3: 'Establece la fecha y hora de publicación usando el selector de fecha y hora - esto afecta cómo se muestra el tiempo relativo (ej. "hace 2h")',
        step4: 'Marca la casilla "Cuenta Verificada" si quieres agregar la insignia azul de verificación a tu perfil',
        step5: 'Sube una foto de perfil personalizada haciendo clic en el botón "Subir Avatar", o usa el icono de perfil predeterminado'
      },
      contentSelection: {
        title: 'Paso 2: Seleccionar Tipo de Contenido y Agregar Contenido',
        description: 'Elige tu tipo de contenido preferido y agrega tus elementos creativos:',
        step1: 'Selecciona entre tres tipos de contenido: "Solo Texto", "Solo Imagen" o "Texto e Imagen"',
        step2: 'Para contenido de texto: Escribe tu pie de foto en el editor de texto. Usa los botones de hashtag, mención y emoji para mejorar tu texto',
        step3: 'Para contenido de imagen: Haz clic en el botón "Subir una imagen" o arrastra y suelta un archivo de imagen en el área de carga',
        step4: 'Haz clic en cualquier hashtag recomendado que aparezca para agregarlos rápidamente a tu publicación',
        step5: 'Presta atención al conteo de caracteres para asegurarte de que tu texto no sea demasiado largo'
      },
      stylingContent: {
        title: 'Paso 3: Estilizar Tu Contenido',
        description: 'Personaliza la apariencia visual de tu publicación de Instagram:',
        step1: 'Elige una familia de fuentes desde el menú desplegable (ej. Inter, Roboto, Poppins)',
        step2: 'Selecciona un tamaño de fuente apropiado basado en la longitud de tu contenido',
        step3: 'Establece la alineación del texto (izquierda, centro o derecha) usando los botones de alineación',
        step4: 'Elige un color de texto que contraste bien con tu fondo usando el selector de colores',
        step5: 'Para publicaciones sin imágenes o con superposición de texto, personaliza el fondo:',
        step6: '- Selecciona un tipo de fondo (color sólido, degradado o patrón)',
        step7: '- Para degradados, elige colores inicial y final más una dirección',
        step8: '- Para patrones, selecciona un estilo de patrón desde las opciones disponibles'
      },
      postFormat: {
        title: 'Paso 4: Seleccionar Formato de Publicación',
        description: 'Selecciona la proporción que mejor funcione para tu contenido:',
        step1: 'Cuadrado (1:1) - El formato clásico de Instagram, ideal para composiciones equilibradas',
        step2: 'Retrato (4:5) - Formato más alto que ocupa más espacio en el feed, bueno para contenido vertical',
        step3: 'Paisaje (16:9) - Formato más ancho, perfecto para imágenes panorámicas o contenido horizontal'
      },
      engagementSettings: {
        title: 'Paso 5: Configurar Ajustes de Interacción',
        description: 'Agrega elementos realistas de interacción a tu mockup de publicación de Instagram:',
        step1: 'Establece métricas de interacción usando controles deslizantes o entrada directa:',
        step2: '- Contador de Me Gusta: Ajusta el número de me gusta (se muestra como valor numérico o formato K/M)',
        step3: '- Contador de Comentarios: Establece cuántos comentarios ha recibido la publicación',
        step4: '- Contador de Vistas: Para publicaciones tipo video, establece un contador personalizado',
        step5: 'Activa opciones de interacción para aumentar la realismo:',
        step6: '- Me gustó (por el espectador): Muestra el ícono de corazón en rojo',
        step7: '- Guardado (por el espectador): Muestra el ícono de marcador como lleno',
        step8: '- Tiene Historia de Instagram: Agrega un anillo colorido alrededor de la foto de perfil',
        step9: '- Mostrar Comentarios: Habilita la sección de comentarios',
        step10: '- Personas Etiquetadas: Agrega una superposición de ícono de persona a la imagen',
        step11: '- Contenido Patrocinado: Agrega etiqueta de "Colaboración pagada" para simulación de publicación patrocinada'
      },
      commentSimulation: {
        title: 'Paso 6: Agregar Comentarios Simulados',
        description: 'Si has activado comentarios, agrega comentarios realistas de usuario:',
        step1: 'Ingresa nombres de usuario y texto de comentario para hasta dos comentarios destacados',
        step2: 'Usa emojis en comentarios para aumentar la autenticidad',
        step3: 'Considera agregar comentarios relevantes al contenido de tu publicación',
        step4: 'Incluye comentarios que podrían animar la interacción o conversación'
      },
      previewExport: {
        title: 'Paso 7: Vista Previa y Exportar Tu Diseño',
        description: 'Finaliza tu mockup de publicación de Instagram y guárdalo:',
        step1: 'Revisa tu diseño en el área de vista previa para asegurarte de que todos los elementos se vean como esperabas',
        step2: 'Haz cualquier ajuste final al texto, fondo o métricas de interacción',
        step3: 'Elige tu formato de exportación preferido:',
        step4: '- Descargar como PNG: Lo mejor para imágenes transparentes de alta calidad',
        step5: '- Descargar como JPG: Crea archivos más pequeños, bueno para compartir',
        step6: '- Copiar al Portapapeles: Copia instantáneamente la imagen para pegarla en otras aplicaciones',
        step7: 'Espera a que se complete la generación de la imagen (esto generalmente toma solo unos segundos)',
        step8: 'Usa tu mockup exportado en presentaciones, propuestas o documentos de planificación'
      }
    },
    tips: {
      title: 'Consejos Profesionales para Crear Publicaciones Efectivas en Instagram',
      description: 'Maximiza el impacto de tus publicaciones de Instagram con estas recomendaciones expertas:',
      contentStrategy: {
        title: 'Estrategia de Contenido',
        tip1: 'Usa una mezcla de hashtags populares y específicos (7-15 es óptimo para descubrimiento)',
        tip2: 'Incluye una llamada a la acción clara en tus pies de foto para impulsar la interacción',
        tip3: 'Mantén pies de foto concisos para impacto inmediato, o usa saltos de línea para historias más largas',
        tip4: 'Coloca información importante al principio de tu pie de foto ya que Instagram la trunca después de 125 caracteres',
        tip5: 'Usa emojis estratégicamente para añadir personalidad y romper el texto'
      },
      visualDesign: {
        title: 'Diseño Visual',
        tip1: 'Mantén consistencia visual a través de publicaciones para una estética cohesiva',
        tip2: 'Usa colores de alto contraste cuando superpones texto sobre imágenes',
        tip3: 'Prueba diferentes formatos (cuadrado, retrato, paisaje) para ver cuál funciona mejor',
        tip4: 'Considera cómo se verá tu publicación en una cuadrícula al diseñar contenido',
        tip5: 'Usa psicología del color para evocar emociones específicas relacionadas con tu mensaje'
      },
      engagementOptimization: {
        title: 'Optimización de Interacción',
        tip1: 'Simula números realistas de interacción que coincidan con tu tamaño real de audiencia',
        tip2: 'Incluye comentarios que podrían iniciar discusiones reales o preguntas',
        tip3: 'Usa etiquetas de ubicación relevantes para tu contenido para mayor descubrimiento',
        tip4: 'Mantén diseños de publicación alineados con tu identidad de marca para reconocimiento',
        tip5: 'Previsualiza cómo se ve tu publicación en dispositivos móviles, donde ocurre la mayoría de la navegación en Instagram'
      }
    },
    faq: {
      title: 'Preguntas Frecuentes sobre el Generador de Publicaciones de Instagram',
      question1: '¿Es esta una herramienta oficial de Instagram?',
      answer1: 'No, nuestro Generador de Publicaciones de Instagram es una herramienta independiente diseñada para crear mockups realistas de publicaciones de Instagram. No está afiliada ni avalada por Instagram ni por Meta Platforms, Inc.',
      question2: '¿Puedo publicar directamente en Instagram desde esta herramienta?',
      answer2: 'No, el Generador de Publicaciones de Instagram está diseñado solo para crear mockups. Para publicar contenido en Instagram, necesitarás usar la aplicación oficial de Instagram o una herramienta autorizada de programación de terceros.',
      question3: '¿Son réplicas exactas de la interfaz de Instagram los mockups creados con esta herramienta?',
      answer3: 'Aunque nuestro Generador de Publicaciones de Instagram tiene como objetivo crear mockups altamente realistas, Instagram actualiza regularmente su interfaz. Nos esforzamos por mantener precisión, pero ocasionalmente puede haber pequeñas diferencias respecto al diseño actual de Instagram.',
      question4: '¿Puedo usar estos mockups para propósitos comerciales?',
      answer4: 'Sí, puedes usar las imágenes creadas con nuestro Generador de Publicaciones de Instagram para propósitos comerciales tales como material de marketing, presentaciones o propuestas a clientes. Sin embargo, ten en cuenta que el logotipo y elementos de diseño de Instagram son marcas registradas de Meta Platforms, Inc., y su uso está sujeto a sus directrices de marca.',
      question5: '¿Hay un límite en la cantidad de publicaciones que puedo crear?',
      answer5: 'No, no hay límites en la cantidad de mockups de publicaciones de Instagram que puedes crear con nuestra herramienta. Puedes crear tantos diseños como necesites para tus proyectos.',
      question6: '¿Necesito crear una cuenta para usar el Generador de Publicaciones de Instagram?',
      answer6: 'No, nuestro Generador de Publicaciones de Instagram está disponible gratuitamente sin requerir registro o creación de cuenta. Puedes comenzar a diseñar inmediatamente sin registrarte.',
      question7: '¿Qué tan precisas son las métricas de interacción?',
      answer7: 'Las métricas de interacción (me gusta, comentarios, vistas) son totalmente personalizables y simuladas. No reflejan datos reales ni predicen el rendimiento real en Instagram, pero ayudan a crear mockups realistas.',
      question8: '¿Puedo guardar mis diseños para editarlos más tarde?',
      answer8: 'Actualmente, el Generador de Publicaciones de Instagram no tiene una función para guardar diseños en borrador. Recomendamos exportar tu diseño y conservar la imagen si necesitas hacer referencia a ella más adelante.',
      question9: '¿Qué formatos de imagen son compatibles para subir?',
      answer9: 'La herramienta soporta formatos de imagen comunes incluyendo JPG, PNG y GIF de hasta 2MB. Para mejores resultados, usa imágenes de alta calidad que se adapten a la proporción que hayas seleccionado.',
      question10: '¿Cómo puedo crear una publicación de Instagram que parezca muy realista?',
      answer10: 'Para máxima realismo, usa una foto de perfil real, establece números realistas de interacción apropiados para tu tamaño de audiencia, agrega una etiqueta de ubicación, incluye una mezcla de hashtags y agrega algunos comentarios auténticos.',
      question11: '¿Puedo crear Historias o Reels de Instagram con esta herramienta?',
      answer11: 'Actualmente, esta herramienta se enfoca en crear mockups de publicaciones estáticas de Instagram. Podríamos agregar capacidades de mockups para Historias y Reels de Instagram en actualizaciones futuras basadas en retroalimentación de usuarios.',
      question12: '¿Se almacenarán mis cargas o contenido creado en sus servidores?',
      answer12: 'No, todo procesamiento de imagen ocurre en tu navegador. No almacenamos tus imágenes cargadas o diseños creados en nuestros servidores, asegurando que tu contenido permanezca privado.'
    },
    relatedTools: {
      title: 'Herramientas y Recursos Relacionados',
      description: 'Mejora tu estrategia de redes sociales con estas herramientas complementarias:',
      tool1: {
        name: 'Generador de Imágenes para Redes Sociales',
        description: 'Crea imágenes optimizadas para diversas plataformas de redes sociales incluyendo Twitter, Facebook y LinkedIn',
        url: '/tools/social-media-image-generator'
      },
      tool2: {
        name: 'Generador de Hashtags',
        description: 'Descubre hashtags populares y específicos para maximizar el alcance y la interacción de tus publicaciones de Instagram',
        url: '/tools/hashtag-generator'
      },
      tool3: {
        name: 'Generador de Paletas de Colores',
        description: 'Crea esquemas armónicos de colores para feeds de Instagram visualmente atractivos y consistentes',
        url: '/tools/color-palette-generator'
      },
      tool4: {
        name: 'Herramienta de Combinación de Fuentes',
        description: 'Encuentra combinaciones complementarias de fuentes para mejorar la tipografía de tus publicaciones de Instagram',
        url: '/tools/font-pairing'
      },
      tool5: {
        name: 'Generador de Leyendas',
        description: 'Obtén inspiración para leyendas atractivas que impulsen la interacción y comentarios en Instagram',
        url: '/tools/caption-generator'
      },
      article1: {
        title: 'Guía de Marketing en Instagram para 2023',
        description: 'Estrategias integrales para aumentar tu seguidores y compromiso en Instagram',
        url: '/blog/instagram-marketing-guide-2023'
      },
      article2: {
        title: 'Tendencias de Contenido Visual para Redes Sociales',
        description: 'Mantente al día con las últimas tendencias de diseño visual para Instagram y otras plataformas',
        url: '/blog/visual-content-trends'
      },
      article3: {
        title: 'Cómo Crear una Estética Cohesiva en Instagram',
        description: 'Consejos y técnicas para diseñar un feed de Instagram visualmente consistente y atractivo',
        url: '/blog/cohesive-instagram-aesthetic'
      }
    },
    conclusion: {
      title: 'Conclusión: Eleva Tu Estrategia de Instagram con Mockups Profesionales',
      paragraph1: 'El Generador de Publicaciones de Instagram representa una herramienta poderosa para cualquiera que busque mejorar su estrategia de contenido en redes sociales. Al permitir la creación de mockups profesionales y realistas de publicaciones de Instagram, nuestra herramienta cierra la brecha entre concepto y ejecución, permitiendo una planificación y refinamiento minucioso antes de la publicación real.',
      paragraph2: 'Ya seas un gestor de redes sociales buscando aprobación de clientes, una empresa planificando una campaña de marketing, un influencer diseñando tu estética ideal de feed o un educador enseñando buenas prácticas en redes sociales, nuestro Generador de Publicaciones de Instagram proporciona la versatilidad y opciones detalladas de personalización necesarias para alcanzar tus metas.',
      paragraph3: 'En el paisaje en constante evolución del marketing en redes sociales, herramientas de visualización como nuestro Generador de Publicaciones de Instagram se han convertido en componentes esenciales de un flujo de trabajo efectivo. Al invertir tiempo en crear mockups pulidos, puedes refinar tu mensaje, perfeccionar tu estrategia visual y, en última instancia, entregar contenido más impactante a tu audiencia de Instagram.',
      paragraph4: 'Comienza a usar nuestro Generador de Publicaciones de Instagram hoy y experimenta la diferencia que pueden hacer mockups profesionales en tu proceso de planificación y presentación de redes sociales.'
    }
  }
}