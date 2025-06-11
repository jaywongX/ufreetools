export default {
  name: 'Administrador de Cookies',
  description: 'Ver, crear, editar y eliminar cookies del sitio web actual',
  
  // Etiquetas principales de pestañas
  currentCookies: 'Cookies Actuales',
  createCookie: 'Crear Cookie',
  importExport: 'Importar/Exportar',
  
  // Lista de cookies
  noCookies: 'No hay cookies para este sitio',
  cookieName: 'Nombre',
  cookieValue: 'Valor',
  cookieDomain: 'Dominio',
  cookiePath: 'Ruta',
  cookieExpires: 'Expira',
  cookieSecure: 'Seguro',
  cookieHttpOnly: 'Solo HTTP',
  cookieSameSite: 'Mismo Sitio',
  actions: 'Acciones',
  edit: 'Editar',
  delete: 'Eliminar',
  save: 'Guardar',
  cancel: 'Cancelar',
  refresh: 'Actualizar',
  
  // Formulario de creación/edición
  addCookie: 'Agregar Cookie',
  editCookie: 'Editar Cookie',
  required: 'Requerido',
  optional: 'Opcional',
  days: 'Días',
  hours: 'Horas',
  minutes: 'Minutos',
  cookieCreated: 'Cookie creada',
  cookieUpdated: 'Cookie actualizada',
  cookieDeleted: 'Cookie eliminada',
  createError: 'Error al crear la cookie',
  updateError: 'Error al actualizar la cookie',
  deleteError: 'Error al eliminar la cookie',
  
  // Importar/Exportar
  export: 'Exportar Cookies',
  import: 'Importar Cookies',
  exportAs: 'Exportar como',
  exportSuccess: 'Cookies exportadas',
  importSuccess: '{count} cookies importadas',
  importError: 'Error al importar las cookies',
  
  // Opciones de seguridad
  none: 'Ninguno',
  strict: 'Estricto',
  lax: 'Flexible',
  
  // Notas y sugerencias
  domainNote: 'Déjalo vacío para usar el dominio actual',
  pathNote: 'Por defecto es la ruta raíz "/"',
  expiresNote: 'Deja sin definir para una cookie de sesión',
  secureNote: 'Enviar solo mediante HTTPS',
  httpOnlyNote: 'Evita el acceso desde JavaScript',
  sameSiteNote: 'Controla las solicitudes entre sitios',
  
  // Formato de importación
  importFormat: 'Ejemplo de formato de importación:\nnombre=valor; expira=fecha; ruta=/; dominio=ejemplo.com; seguro; httpOnly; mismoSitio=estricto',
  jsonFormat: 'Formato JSON',
  textFormat: 'Formato de Texto',
  invalidFormat: 'Formato inválido',
  
  // Contenido del artículo
  article: {
    title: 'Administrador de Cookies: Comprender y controlar las cookies del sitio web',
    features: {
      title: 'Características y aplicaciones',
      description: 'Nuestra herramienta <strong>Administrador de Cookies</strong> ofrece un control completo sobre las cookies del sitio web, permitiéndote ver, crear, editar y eliminar las cookies del sitio actual. Esta poderosa herramienta te brinda visibilidad completa y control sobre las cookies almacenadas en tu navegador, ayudándote a gestionar tu privacidad en línea y solucionar problemas funcionales del sitio web.',
      useCasesTitle: 'Aplicaciones prácticas',
      useCases: {
        items: [
          '<strong>Pruebas de desarrollo web</strong>: Prueba cómo se comporta tu sitio web con diferentes configuraciones de cookies sin tener que editar manualmente el almacenamiento del navegador.',
          '<strong>Solución de problemas del sitio web</strong>: Diagnostica problemas de inicio de sesión, problemas de sesión u otras disfunciones relacionadas con las cookies examinando y modificando estas.',
          '<strong>Gestión de privacidad</strong>: Toma el control sobre tus datos personales viendo qué información almacenan los sitios web en las cookies y eliminando selectivamente las cookies de seguimiento no deseadas.',
          '<strong>Administración de sesiones</strong>: Crea o modifica cookies de sesión para probar diferentes estados de usuario o escenarios de autenticación sin tener que iniciar y cerrar sesión repetidamente.',
          '<strong>Pruebas entre navegadores</strong>: Exporta cookies de un navegador e impórtalas a otro para replicar el mismo estado de navegación en diferentes navegadores.'
        ]
      }
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          question: '¿Qué son las cookies y por qué los sitios web las utilizan?',
          answer: 'Las cookies son pequeños fragmentos de datos que los sitios web almacenan en tu navegador. Sirven para diversas funciones, incluyendo recordar información de inicio de sesión, rastrear el comportamiento del usuario, almacenar preferencias, mantener carritos de compra y habilitar experiencias personalizadas. Las cookies son esenciales para muchas funcionalidades modernas de la web, pero también pueden generar preocupaciones de privacidad cuando se usan para rastreo.'
        },
        {
          question: '¿En qué se diferencia la herramienta Administrador de Cookies de la configuración integrada del navegador?',
          answer: 'Aunque los navegadores ofrecen gestión básica de cookies a través de sus ajustes, nuestro <strong>Administrador de Cookies</strong> proporciona un control más detallado y funcionalidad adicional. No solo puedes ver y eliminar cookies (como permiten los navegadores), sino también crear nuevas cookies, editar las existentes, exportarlas para respaldo e importarlas. Esto lo hace ideal para desarrolladores, probadores y usuarios concienciados con la privacidad que necesitan capacidades avanzadas de gestión de cookies.'
        },
        {
          question: '¿Es seguro eliminar cookies? ¿Afectará mi experiencia de navegación?',
          answer: 'Eliminar cookies generalmente es seguro, pero puede afectar tu experiencia de navegación de varias maneras. Podrías cerrar sesión en sitios web, perder preferencias guardadas o necesitar reconstruir carritos de compra. El <strong>Administrador de Cookies</strong> te permite eliminar cookies específicas en lugar de borrar todas, dándote control preciso sobre qué datos de navegación conservar o eliminar.'
        },
        {
          question: '¿Qué significan los distintos atributos de las cookies como "SameSite" y "HttpOnly"?',
          answer: 'Los atributos de las cookies controlan cómo se comportan y acceden a ellas:<br>- <strong>Secure</strong>: La cookie solo se envía mediante conexiones HTTPS<br>- <strong>HttpOnly</strong>: La cookie no puede ser accedida por JavaScript<br>- <strong>SameSite</strong>: Controla cuándo se envían las cookies con solicitudes cruzadas (None, Lax o Strict)<br>- <strong>Dominio</strong>: Especifica qué dominios pueden recibir la cookie<br>- <strong>Ruta</strong>: Restringe la cookie a rutas específicas del sitio web<br>- <strong>Expira</strong>: Establece cuándo el navegador debe eliminar la cookie'
        },
        {
          question: '¿Puedo usar esta herramienta para importar cookies desde otro ordenador o navegador?',
          answer: 'Sí, la funcionalidad de importación/exportación del <strong>Administrador de Cookies</strong> permite transferir cookies entre navegadores o dispositivos. Exporta tus cookies a un archivo JSON o de texto, transfiere el archivo a otro dispositivo y luego impórtalas usando la herramienta <strong>Administrador de Cookies</strong> en ese dispositivo. Esto es especialmente útil para desarrolladores que necesitan replicar estados de usuario o para transferir tu sesión de navegación entre diferentes computadoras.'
        }
      ]
    },
    guide: {
      title: 'Cómo usar la herramienta Administrador de Cookies',
      step1: {
        title: 'Ver las cookies actuales',
        description: 'Cuando abras el <strong>Administrador de Cookies</strong>, la pestaña "Cookies Actuales" mostrará todas las cookies del sitio web actual. Esta lista muestra el nombre, valor y fecha de vencimiento de cada cookie. Para ver más detalles sobre una cookie específica, haz clic en el botón "Editar" junto a ella. Para actualizar la lista y asegurarte de que estás viendo las cookies más recientes, haz clic en el botón "Actualizar" en la parte superior de la lista.'
      },
      step2: {
        title: 'Crear nuevas cookies',
        description: 'Para agregar una nueva cookie, haz clic en la pestaña "Crear Cookie". Rellena los campos obligatorios (Nombre y Valor) y cualquier atributo opcional como Dominio, Ruta o Tiempo de expiración. Establece opciones de seguridad como la marca "Seguro" o el atributo "SameSite" según tus necesidades. Una vez configurada la cookie, haz clic en el botón "Guardar" para crearla. La herramienta confirmará que se creó correctamente y volverá automáticamente a la vista de la lista de cookies.'
      },
      step3: {
        title: 'Editar cookies existentes',
        description: 'Para modificar una cookie, búscala en la lista "Cookies Actuales" y haz clic en el botón "Editar". Esto cargará los detalles de la cookie en el formulario de edición. Realiza los cambios deseados en cualquiera de los atributos de la cookie. Cuando termines, haz clic en "Guardar" para actualizarla. La herramienta confirmará que la actualización fue exitosa. Ten en cuenta que editar una cookie en realidad crea una nueva cookie con el mismo nombre pero atributos actualizados.'
      },
      step4: {
        title: 'Eliminar cookies',
        description: 'Para eliminar una cookie, localízala en la lista "Cookies Actuales" y haz clic en el botón "Eliminar". Aparecerá un diálogo de confirmación para evitar eliminaciones accidentales. Una vez confirmado, la cookie se eliminará inmediatamente de tu navegador y la lista se actualizará automáticamente. Esto te da un control completo sobre qué datos pueden almacenar los sitios web en tu navegador.'
      },
      step5: {
        title: 'Importar y exportar cookies',
        description: 'Para transferir cookies, ve a la pestaña "Importar/Exportar". Para exportar, elige entre el formato JSON (para mejor estructura) o el formato de texto (para mayor compatibilidad). Haz clic en el botón correspondiente para descargar el archivo. Para importar, pega los datos de las cookies en el área de texto y haz clic en "Importar". Puedes importar cookies en el formato estándar de texto o en formato JSON. La herramienta confirmará las importaciones exitosas y mostrará cuántas cookies se importaron.'
      }
    },
    conclusion: 'La herramienta <strong>Administrador de Cookies</strong> te da un control completo sobre las cookies del navegador, ya seas un desarrollador probando la funcionalidad de un sitio web, un usuario consciente de su privacidad gestionando datos personales o alguien solucionando problemas del sitio web. Al comprender y gestionar activamente las cookies, puedes mejorar tu experiencia de navegación manteniendo el control sobre tu privacidad en línea.'
  }
};