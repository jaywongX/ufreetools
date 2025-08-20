export default {
  loading: 'Cargando...',
  error: 'Error',
  success: 'Éxito',
  cancel: 'Cancelar',
  save: 'Guardar',
  delete: 'Eliminar',
  confirm: 'Confirmar',
  navigation: 'Navegación',
  expand: 'Expandir',
  collapse: 'Colapsar',
  languageDetector: {
    detected: 'Detectamos que tu idioma del navegador es {lang}',
    switchQuestion: '¿Quieres cambiar al este idioma?',
    switchNow: 'Cambiar ahora',
    stayOn: 'Permanecer en {lang}'
  },
  defaultDescription: 'Herramientas en línea gratuitas para desarrolladores, diseñadores y usuarios comunes.',
  site: {
    name: 'Colección de Herramientas'
  },
  characters: 'Caracteres',
  lines: 'Líneas',
  pasteFromClipboard: 'Pegar desde el portapapeles',
  pasteError: 'No se pudo leer desde el portapapeles',
  copyFailed: 'Fallo al copiar',
  simple: 'Simple',
  nested: 'Anidado',
  complex: 'Complejo',
  example: 'Ejemplo',
  loadExample: 'Cargar Ejemplo',
  spaces: 'espacios',
  donate: 'Donar',
  buyMeACoffee: 'Cómprame un café',
  donateInternational: 'Internacional',
  donateChina: 'Continente chino',
  wechatPay: 'Pago WeChat',
  wechatDonation: 'Código QR para donaciones por WeChat',
  scanToSupport: 'Escanea el código QR a continuación para apoyarnos',
  thankYouForSupport: '¡Gracias por tu apoyo!',
  backToHome: "Volver a inicio",
  submit: 'Enviar',
  submitting: 'Enviando...',
  favorites: {
    title: 'Mis Favoritos',
    description: 'Ver y gestionar tus herramientas favoritas',
    add: 'Agregar a Favoritos',
    remove: 'Eliminar de Favoritos',
    empty: 'Tu lista de favoritos está vacía',
    browseTools: 'Explorar todas las herramientas',
    article: {
      title: "Función de Favoritos: Gestiona eficientemente tus herramientas preferidas",
      intro: {
        title: "Introducción a la función de Favoritos y casos de uso",
        p1: "<b>La función de Favoritos</b> te permite guardar fácilmente y gestionar tus herramientas en línea más utilizadas. Al añadir herramientas a tus favoritos, creas una colección personalizada, eliminando la necesidad de buscar entre múltiples opciones cada vez. Esto mejora significativamente la eficiencia de trabajo para usuarios que usan regularmente ciertas herramientas, ahorrando tiempo valioso. La función de favoritos funciona completamente dentro del navegador localmente, sin necesidad de crear cuenta ni iniciar sesión, ofreciendo conveniencia y protegiendo tu privacidad.",
        p2: "En el trabajo y estudio diario, <b>suelemos usar varias herramientas en línea</b> para ayudarnos con distintas tareas. Por ejemplo, los desarrolladores pueden acceder frecuentemente a formateadores JSON, convertidores de codificación y herramientas de compresión; los diseñadores podrían usar regularmente seleccionadores de colores, procesadores de imágenes y optimizadores SVG; mientras que los usuarios generales pueden depender de convertidores de documentos, generadores aleatorios o herramientas de cálculo. Con la función de favoritos, puedes organizar estas herramientas de uso común juntas, creando una caja de herramientas adaptada específicamente a tu flujo de trabajo.",
        p3: "<b>La función de favoritos es adecuada para múltiples escenarios</b>, incluyendo pero no limitándose a: acceso rápido a herramientas de codificación comunes durante el desarrollo de programación; organizar recursos educativos y herramientas de cálculo durante el aprendizaje; organizar herramientas de procesamiento de documentos y conversión de formatos en entornos laborales; y recopilar herramientas prácticas para uso personal. Tanto si eres un profesional como un usuario general, la función de favoritos te ayuda a utilizar herramientas en línea de manera más eficiente, creando una colección única de herramientas hecha a tu medida."
      },
      tutorial: {
        title: "Cómo Usar la Función de Favoritos",
        intro: "A continuación se muestra una guía paso a paso sencilla para usar la función de favoritos, ayudándote a comenzar a organizar y gestionar tus herramientas favoritas:",
        step1: {
          title: "Paso 1: Añadir herramientas a Favoritos",
          description: "Cuando estés navegando por las herramientas, encontrarás un icono de estrella en la esquina superior derecha de cada tarjeta de herramienta o página de detalle. Haz clic en esta estrella para añadir la herramienta a tus favoritos. Cuando se agrega correctamente, el icono de estrella se vuelve amarillo, indicando que la herramienta ya está en tu lista de favoritos. Puedes agregar o quitar herramientas cuando quieras, y el sistema guarda automáticamente tus elecciones."
        },
        step2: {
          title: "Paso 2: Acceder a tus Favoritos",
          description: "Para ver todas tus herramientas favoritas, haz clic en el enlace 'Favoritos' en la barra de navegación o en la barra lateral. Esto te llevará a la página de favoritos, mostrando todas las herramientas que has añadido. También puedes acceder rápidamente a las herramientas favoritas recientes a través de la sección 'Mis Favoritos' en la página principal e ingresar a la página completa de favoritos a través del enlace 'Ver todo'."
        },
        step3: {
          title: "Paso 3: Gestionar tus herramientas favoritas",
          description: "En la página de favoritos, puedes ver, usar y gestionar tus herramientas favoritas. Cada entrada tiene un botón de eliminar (ícono de papelera) en la esquina superior derecha — haz clic para removerla de tus favoritos. También puedes hacer clic en el nombre o descripción de la herramienta para ir directamente a su página de uso. Tu lista de favoritos se guarda automáticamente y seguirá disponible cuando visites el sitio web la próxima vez."
        },
        step4: {
          title: "Paso 4: Comprender las limitaciones del almacenamiento local",
          description: "Dado que la función de favoritos utiliza el localStorage del navegador para almacenar datos, hay varias limitaciones que debes conocer: 1) Los datos solo se guardan en el navegador actual y no se sincronizan entre dispositivos; 2) Si borras los datos del navegador o usas el modo incógnito, tus registros de favoritos pueden perderse; 3) El localStorage normalmente tiene un límite de almacenamiento de 5-10MB, más que suficiente para esta función, aunque teóricamente existe un límite máximo; 4) Las listas de favoritos en diferentes navegadores y dispositivos son independientes entre sí."
        }
      },
      faq: {
        title: "Preguntas Frecuentes",
        q1: "¿Dónde se almacenan mis datos de favoritos? ¿Se sincronizan entre dispositivos?",
        a1: "<b>Los datos de los favoritos se almacenan completamente en tu navegador local</b>, utilizando la API localStorage proporcionada por los navegadores. Esto significa que tu lista de favoritos no se carga en ningún servidor y no se sincroniza automáticamente entre diferentes dispositivos o navegadores. Este diseño tiene dos ventajas principales: primero, protege tu privacidad ya que los datos permanecen completamente en tu dispositivo; segundo, te permite usar la función sin registrarte ni iniciar sesión. Sin embargo, esto también implica que si usas un dispositivo, navegador diferente o borras tus datos del navegador, tendrás que volver a crear tu lista de favoritos. Considerando que la mayoría de los usuarios típicamente acceden a las herramientas desde dispositivos y navegadores fijos, este compromiso es razonable.",
        q2: "¿Cuántas herramientas puedo marcar como favoritas? ¿Hay un límite?",
        a2: "<b>El número de herramientas que puedes marcar como favoritas está teóricamente limitado por el tamaño del almacenamiento localStorage del navegador</b>, que normalmente oscila entre 5-10 MB, lo cual es más que suficiente para esta función. Calculando aproximadamente 1 KB por herramienta, puedes marcar miles de herramientas sin encontrar problemas de almacenamiento. En la práctica, la mayoría de los usuarios no suelen marcar más de 100 herramientas, por lo que no debes preocuparte por alcanzar dicho límite. Si eres un usuario avanzado y has marcado muchas herramientas, considera organizar tu lista eliminando aquellas que ya no uses, manteniéndola limpia y útil. En casos raros donde sí encuentres limitaciones de almacenamiento, el navegador generalmente mostrará mensajes de error relevantes.",
        q3: "¿Perderé mis favoritos si borro los datos del navegador?",
        a3: "<b>Sí, si borras los datos del navegador (especialmente los datos de almacenamiento local o cookies), tus registros de favoritos se perderán</b>. Esto ocurre porque la función de favoritos depende del localStorage del navegador para guardar tus preferencias. Del mismo modo, si usas el modo privado/incógnito del navegador, los registros de favoritos no se conservarán tras cerrar la ventana. Para evitar perder accidentalmente estos datos, considera las siguientes sugerencias: al borrar los datos del navegador, preserva selectivamente los datos del sitio web; antes de actualizar el navegador o cambiar de dispositivo, anota tus herramientas favoritas importantes; evita añadir herramientas importantes a favoritos en modo privado. Si usas múltiples dispositivos con frecuencia o borras regularmente tus datos, considera usar la función de marcadores del navegador como método de respaldo, agregando páginas de herramientas importantes a tus favoritos. ",
        q4: "¿Por qué no ofrecer un sistema de cuentas para guardar mis favoritos?",
        a4: "<b>Optamos por usar almacenamiento local en lugar de un sistema de cuentas principalmente por las siguientes razones</b>: Primero, protege la privacidad del usuario, ya que no necesitas proporcionar información personal para usar la función de favoritos; Segundo, simplifica la experiencia del usuario sin tener que registrarse, iniciar sesión o recordar contraseñas; Tercero, reduce riesgos de seguridad al no haber información de cuenta que pueda potencialmente filtrarse; Finalmente, hace que el sitio web cargue más rápido sin necesidad de verificar cuentas ni sincronizar datos. Entendemos que la sincronización entre dispositivos es una característica útil, pero priorizamos la simplicidad, la privacidad y una experiencia sin fricciones. En futuras actualizaciones, podríamos considerar ofrecer un sistema de cuentas opcional, permitiendo a los usuarios elegir si desean usar cuentas para sincronizar sus favoritos, pero siempre estará disponible la opción de almacenamiento local, respetando a aquellos que priorizan la privacidad y la simplicidad."
      },
      relatedTools: {
        title: "Herramientas que también podrías disfrutar",
        description: "Explora estas herramientas populares y agrégalas a tus favoritos:",
        tool1: {
          name: "Formateador JSON",
          url: "https://www.ufreetools.com/tool/json-formatter",
          description: "Beautify, minify and validate JSON data with syntax highlighting and error detection."
        },
        tool2: {
          name: "Generador de Contraseñas",
          url: "https://www.ufreetools.com/tool/password-generator",
          description: "Create strong passwords with customizable length, complexity, and character types."
        },
        tool3: {
          name: "Compresor de Imágenes",
          url: "https://www.ufreetools.com/tool/image-compressor",
          description: "Compress image size while maintaining image quality, suitable for web and social media."
        }
      },
      resources: {
        title: "Obtén más información sobre la tecnología de almacenamiento local",
        resource1: {
          name: "MDN Web Docs: localStorage",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
          description: "Documentación técnica detallada y guía de uso del API localStorage por parte de Mozilla Developer Network."
        },
        resource2: {
          name: "Especificación W3C de Web Storage",
          url: "https://www.w3.org/TR/webstorage/",
          description: "Documento oficial de especificación de la tecnología Web Storage, detallando la implementación estándar de localStorage."
        }
      }
    }
  },
  home: {
    favoritedToolsTitle: 'Mis Favoritos',
    viewAllFavorites: 'Ver todo',
  },
  featuredIn: "Destacado en:",
  browserExtensionsDesc: "Obtén todas las herramientas con un clic a través de la extensión",
  addToChrome: "Usar Chrome",
  addToFireFox: "Usar FireFox",
  addToEdge: "Usar Edge",

  share: 'Compartir',
  shareTo: 'Compartir con',
  like: 'Me gusta',
  tweet: 'Tweet',
  copyLink: 'Copiar enlace',
  copied: 'Copiado',
  freeTools: 'Herramientas gratuitas',
  telegram: 'Telegram',
  youtube: 'YouTube',
  line: 'Line',
  qq: 'QQ',
  weibo: 'Weibo',
  defaultTitle: 'UFreeTools - Colección de Herramientas Gratis en Línea',
  defaultDescription: 'Descubre una poderosa colección de herramientas gratuitas en línea para mejorar tu productividad laboral! Incluye herramientas de procesamiento de imágenes, herramientas de texto, herramientas de desarrollo y muchas otras funciones prácticas.',
  toolShareDescription: 'Estoy usando la herramienta {toolName}, que es una herramienta gratuita en línea que ayuda a resolver varios problemas. ¡Características poderosas, interfaz limpia y completamente gratuita para usar! ¡Ven y pruébalo!',
  categoryShareDescription: 'Explora herramientas prácticas en la categoría {categoryName}, que son completamente gratuitas y fáciles de usar. Incluye varias herramientas profesionales para mejorar tu productividad.',
  homeShareDescription: 'UFreeTools - Colección de herramientas gratuitas en línea, que incluye herramientas de procesamiento de imágenes, herramientas de texto, herramientas de desarrollo, herramientas de diseño y muchas otras funciones prácticas. Todos los herramientas son completamente gratuitas y no requieren registro.',
  searchShareDescription: 'Resultados de búsqueda para "{searchQuery}" en UFreeTools, descubre herramientas prácticas gratuitas en línea!',
};