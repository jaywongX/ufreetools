export default {
  title: "Depurador JWT: Decodifica, Verifica y Depura Tokens Web JSON",
  features: {
    title: "Entendiendo la Depuración JWT",
    description: "El <strong>Depurador JWT</strong> es una herramienta especializada de análisis de <strong>tokens</strong> diseñada para desarrolladores y profesionales de seguridad que necesiten inspeccionar, validar y solucionar problemas de los Tokens Web JSON (JWTs). Este <strong>decodificador JWT en línea</strong> permite pegar cualquier JWT y ver instantáneamente sus componentes decodificados - encabezado, payload y firma - en un formato legible.<br><br>Más allá de la simple <strong>decodificación de token</strong>, la herramienta ofrece capacidades completas de verificación para confirmar si la firma del token es válida usando la clave secreta o pública adecuada. El <strong>herramienta de verificación JWT</strong> soporta todos los algoritmos JWT estándar incluyendo HS256, RS256, ES256 y otros, asegurando compatibilidad con sistemas modernos de autenticación. Para desarrolladores que construyen o mantienen aplicaciones con autenticación basada en tokens, este <strong>utilidad de depuración JWT</strong> proporciona información esencial sobre la estructura del token, estado de expiración y reivindicaciones de seguridad.",
    useCases: {
      title: "Aplicaciones Prácticas para la Depuración JWT",
      items: [
        "<strong>Solución de problemas de autenticación de API</strong>: Cuando las llamadas a la API fallan con errores de autenticación, los desarrolladores pueden usar el <strong>herramienta de validación JWT</strong> para inspeccionar los tokens e identificar problemas tales como tokens expirados, firmas inválidas o reivindicaciones incorrectas",
        "<strong>Integración con proveedor de identidad</strong>: Durante la integración con servicios OAuth o OpenID Connect, el <strong>inspector de token</strong> ayuda a verificar que los tokens de identidad contengan las reivindicaciones esperadas y estén firmados correctamente",
        "<strong>Auditoría de seguridad</strong>: Los profesionales de seguridad pueden examinar <strong>tokens de autenticación</strong> para asegurar que contengan permisos apropiados, tiempos razonables de expiración y sigan mejores prácticas de seguridad",
        "<strong>Generación personalizada JWT</strong>: Al implementar sistemas personalizados de autenticación, los desarrolladores pueden usar la herramienta para crear y probar <strong>tokens JWT codificados</strong> con reivindicaciones específicas y algoritmos de firma",
        "<strong>Depuración de token de portador</strong>: Los desarrolladores front-end que trabajen con <strong>autenticación de portador</strong> pueden validar que los tokens usados en los encabezados de aplicación estén correctamente formateados y contengan los datos necesarios",
        "<strong>Autenticación de microservicios</strong>: Los equipos que construyan arquitecturas de microservicios pueden verificar que <strong>los tokens de servicio</strong> pasen la información correcta de autorización entre servicios y mantengan límites de seguridad apropiados"
      ]
    }
  },
  faq: {
    title: "Preguntas Frecuentes sobre la Depuración JWT",
    items: [
      {
        question: "¿Es seguro pegar mi JWT en este depurador en línea?",
        answer: "Sí, nuestro depurador JWT está diseñado pensando en la seguridad. Todo el procesamiento de token ocurre completamente dentro de tu navegador usando JavaScript del lado del cliente, lo que significa que tus tokens nunca se envían a ningún servidor para decodificación o validación. El decodificador JWT no almacena tus tokens, claves secretas ni datos de payload de ninguna manera. Sin embargo, como buena práctica de seguridad, recomendamos usar solo tokens de prueba en lugar de tokens de producción que contengan información sensible. Si trabajas con sistemas de autenticación altamente sensibles, considera usar una herramienta local de depuración JWT en tu entorno de desarrollo seguro en lugar de cualquier servicio en línea de validación de tokens."
      },
      {
        question: "¿Cuál es la diferencia entre el encabezado, el payload y la firma en un JWT?",
        answer: "Un Token Web JSON consta de tres partes distintas separadas por puntos: encabezado, payload y firma. El encabezado típicamente contiene el tipo de token ('JWT') y el algoritmo de firma que se usa (como 'HS256' o 'RS256'). El payload contiene las reivindicaciones o afirmaciones, que son declaraciones sobre una entidad (típicamente el usuario) y datos adicionales. Las reivindicaciones comunes incluyen ID de usuario, tiempo de expiración e información del emisor. La firma se crea combinando el encabezado y el payload codificados con una clave secreta usando el algoritmo especificado en el encabezado. Esta firma verifica que el mensaje no haya sido alterado y, con ciertos algoritmos, autentica al remitente. Nuestro decodificador de token muestra claramente las tres secciones para ayudarte a entender y depurar tus tokens de autenticación."
      },
      {
        question: "¿Cómo puedo verificar si la firma de mi JWT es válida?",
        answer: "Para verificar una firma JWT usando nuestra herramienta de validación de token, ingresa tu token en el campo de entrada y proporciona la clave secreta o pública adecuada (dependiendo del algoritmo usado). Para algoritmos basados en HMAC como HS256, necesitarás la misma clave secreta que se usó para crear el token. Para algoritmos RSA o ECDSA como RS256 o ES256, necesitarás la clave pública correspondiente que coincida con la clave privada usada para la firma. El depurador JWT calculará entonces una firma basada en el encabezado y el payload usando tu clave proporcionada, y la comparará con la firma en tu token. Si coinciden, la firma es válida, confirmando que el token no ha sido alterado y fue firmado por una parte de confianza que posee la clave privada o secreta correcta."
      },
      {
        question: "¿Por qué puede fallar la validación JWT incluso con la clave secreta correcta?",
        answer: "Hay varias razones por las que la verificación JWT podría fallar incluso con la clave secreta correcta en nuestro decodificador de token. Problemas comunes incluyen: expiración del token (verifique la reclamación 'exp' en el payload), el token aún no siendo válido (verifique la reclamación 'nbf'), uso del algoritmo incorrecto (asegúrese de que el algoritmo especificado en el encabezado coincida con el que usa para verificación), manipulación del token (incluso un pequeño cambio en el encabezado o el payload causará fallo en la verificación de la firma), formato incorrecto de clave (asegúrese de que su clave esté en el formato correcto, especialmente para claves RSA y ECDSA), o problemas de codificación (si su secreto contiene caracteres especiales). El depurador JWT proporciona mensajes detallados de error para ayudarle a identificar la razón específica de los fallos de validación, facilitando la solución de problemas relacionados con tokens de autenticación."
      },
      {
        question: "¿Puedo generar nuevos JWT con esta herramienta?",
        answer: "Sí, nuestro depurador JWT incluye capacidades de generación de token. Para crear un nuevo JWT, puede especificar el payload deseado (las reclamaciones que desea incluir), seleccionar un algoritmo de firma apropiado (como HS256, RS256, etc.) y proporcionar la clave de firma necesaria. Para algoritmos simétricos como HS256, necesitará proporcionar una clave secreta. Para algoritmos asimétricos como RS256, necesitará una clave privada para firmar. La herramienta incluso puede ayudar a generar claves aleatorias si es necesario. Tras configurar estas opciones, el codificador de token generará un JWT válido que puede usar para pruebas o implementación. Esta característica es particularmente útil para desarrolladores que implementan sistemas de autenticación basados en JWT y necesitan crear tokens de prueba con reclamaciones específicas para fines de prueba."
      }
    ]
  },
  guide: {
    title: "Guía Paso a Paso para Usar el Depurador JWT",
    steps: [
      "Ingrese su <strong>Token Web JSON</strong> en el campo de entrada de token en la parte superior del depurador. Puede pegar un JWT completo (incluidas las tres partes separadas por puntos) que haya recibido de un sistema de autenticación o API",
      "Haga clic en el botón <strong>Decodificar</strong> para ver inmediatamente los componentes decodificados de su token. El decodificador JWT mostrará las secciones de encabezado y payload en una vista JSON formateada para facilitar su lectura",
      "Revise la sección de <strong>Encabezado</strong>, que normalmente muestra el tipo de token ('typ') y el algoritmo de firma ('alg'). Esta información indica cómo se creó el token y cómo debería verificarse su firma",
      "Examine la sección de <strong>Payload</strong>, que contiene todas las reclamaciones o datos almacenados en el token. Preste atención especial a las reclamaciones de expiración ('exp'), hora de emisión ('iat') y sujeto ('sub') que determinan la validez",
      "Para verificar la firma del token, ingrese la <strong>clave de verificación</strong> en el campo designado. Use una clave secreta para algoritmos simétricos (HS256) o una clave pública para algoritmos asimétricos (RS256/ES256)",
      "Haga clic en el botón <strong>Verificar Firma</strong> para comprobar si la firma del token es válida. El validador JWT indicará si la verificación tuvo éxito o falló, junto con detalles relevantes",
      "Para <strong>generar nuevos tokens</strong>, haga clic en la opción 'Generar Token', especifique su payload deseado como JSON, seleccione un algoritmo, proporcione la clave de firma (o genérela) y la herramienta creará un JWT correctamente formateado para su uso"
    ]
  },
  conclusion: "El Depurador JWT sirve como una herramienta esencial para desarrolladores que trabajan con sistemas modernos de autenticación, proporcionando capacidades completas para inspección de token, validación y generación. Ofreciendo una visión clara sobre la estructura y estado de verificación del token, facilita agilizar los procesos de depuración y asegurar la seguridad de las implementaciones JWT. Ya sea que esté resolviendo problemas de autenticación, integrando proveedores de identidad o diseñando nuevos sistemas basados en token, esta herramienta simplifica el complejo proceso de trabajar con JWTs. A medida que los tokens de autenticación continúan siendo un pilar fundamental de la seguridad en aplicaciones web, tener una utilidad confiable de depuración JWT en tu kit de desarrollo se vuelve cada vez más valiosa para mantener flujos de autenticación seguros y funcionales."
}
