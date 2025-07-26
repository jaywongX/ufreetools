export default {
  title: 'Decodificador de Certificados X.509: Analizar y Validar Certificados SSL/TLS',
  introduction: {
    title: '¿Qué es un Decodificador de Certificados X.509?',
    p1: 'Un <strong>decodificador de certificados X.509</strong> es una herramienta poderosa que ayuda a profesionales de seguridad, desarrolladores web y administradores de sistemas a analizar certificados digitales utilizados en protocolos SSL/TLS. Nuestra herramienta gratuita en línea para decodificar certificados X.509 proporciona un análisis completo de los componentes del certificado, su estado de validez y características de seguridad, sin necesidad de instalar ningún software.',
    p2: 'Los certificados digitales son esenciales para las comunicaciones web seguras, estableciendo conexiones confiables entre navegadores y servidores. Sin embargo, solucionar problemas con los certificados requiere comprender su estructura compleja y datos codificados. El decodificador de certificados X.509 simplifica este proceso al convertir los datos brutos del certificado en información legible, lo que permite identificar rápidamente problemas y verificar la autenticidad del certificado.'
  },
  useCases: {
    title: 'Casos de Uso Comunes para la Decodificación de Certificados',
    case1: '<strong>Verificación de Certificados SSL/TLS</strong>: Valida la autenticidad e integridad de los certificados de sitios web antes de su implementación.',
    case2: '<strong>Supervisión de Expiración de Certificados</strong>: Revisa el período de validez y las fechas de expiración para prevenir interrupciones inesperadas del servicio.',
    case3: '<strong>Validación de la Cadena de Certificados</strong>: Examina las cadenas de certificados para asegurar relaciones de confianza adecuadas entre ellos.',
    case4: '<strong>Solución de Problemas de Configuración de Certificados</strong>: Identifica errores de configuración en los certificados que causan advertencias en los navegadores o problemas de conexión.',
    case5: '<strong>Verificación de Firma Digital</strong>: Inspecciona los algoritmos de firma y parámetros de clave pública del certificado para evaluaciones de seguridad.'
  },
  faq: {
    title: 'Preguntas Frecuentes sobre los Certificados X.509',
    q1: '¿Qué información puedo extraer de un certificado X.509?',
    a1: 'Utilizando nuestro <strong>decodificador de certificados X.509</strong>, puedes extraer información completa, incluyendo detalles del emisor, información del titular, período de validez, parámetros de clave pública, extensiones (como Subject Alternative Names), algoritmo de firma digital y huellas digitales del certificado. La herramienta también proporciona indicadores visuales sobre la salud del certificado y su estado de expiración, facilitando la identificación de certificados que necesitan renovación.',
    q2: '¿Cómo sé si mi certificado es confiado por los navegadores?',
    a2: 'Un certificado suele ser confiado por los navegadores si fue emitido por una Autoridad Certificadora reconocida (CA) y forma una cadena de confianza válida. Nuestra herramienta de decodificación te ayuda a visualizar la cadena de certificados y verificar la validez de cada uno. Los indicadores clave incluyen el emisor del certificado (debe ser una CA de confianza), fechas válidas (no expirado), restricciones básicas adecuadas (para certificados intermedios) y extensiones de uso de clave apropiadas. La confianza del navegador también depende de que el certificado no haya sido revocado, lo cual puede verificarse mediante la información OCSP o CRL incluida en el certificado.',
    q3: '¿Cuál es la diferencia entre los formatos PEM y DER de certificados?',
    a3: 'PEM (Privacy Enhanced Mail) y DER (Distinguished Encoding Rules) son dos formatos comunes para certificados X.509. El <strong>formato PEM</strong> está codificado en Base64, comienza con "-----BEGIN CERTIFICATE-----" y es texto legible por humanos. Se usa comúnmente en servidores web y correo electrónico. El <strong>formato DER</strong> está codificado en binario y no es legible para humanos, aunque es más compacto. Nuestra herramienta de decodificación de certificados admite ambos formatos automáticamente, detectando y analizando el formato apropiado sin necesidad de selección manual.',
    q4: '¿Cómo puedo comprobar si mi certificado admite características específicas de TLS?',
    a4: 'Para comprobar el soporte de características de TLS en tu certificado, examina las extensiones <strong>Extended Key Usage</strong> y <strong>Key Usage</strong> con nuestra herramienta de decodificación de certificados. Para autenticación de servidor (servidores web), busca el valor "Server Authentication" (1.3.6.1.5.5.7.3.1) dentro de Extended Key Usage. La extensión Key Usage indica las operaciones permitidas como firma digital o cifrado de clave. Además, revisa el algoritmo de firma para asegurarte de que utiliza algoritmos modernos y seguros (como SHA-256 con RSA o ECDSA), en lugar de algoritmos obsoletos (como SHA-1 o MD5).',
    q5: '¿Qué debo hacer si mi certificado está próximo a vencerse?',
    a5: 'Si nuestra <strong>herramienta de decodificación de certificados</strong> muestra que tu certificado está próximo a vencerse (habitualmente dentro de 30 días), debes renovarlo oportunamente a través de tu proveedor de certificados o Autoridad Certificadora. El proceso de renovación generalmente implica: 1) Generar una nueva Solicitud de Firma de Certificado (CSR), 2) Enviarla a tu CA, 3) Completar los requisitos de validación, y 4) Instalar el nuevo certificado en tu servidor. Recomendamos iniciar este proceso al menos 2-4 semanas antes de la expiración para evitar interrupciones del servicio o advertencias de seguridad para los usuarios.'
  },
  tutorial: {
    title: 'Cómo Usar el Decodificador de Certificados X.509',
    step1: {
      title: 'Cargar o Pegar Tu Certificado',
      content: 'Comienza cargando tu archivo de certificado (.crt, .cer, .pem o .der) usando el cargador de archivos, o pega directamente el texto del certificado codificado en PEM en el cuadro de entrada. Nuestra herramienta admite funcionalidad de arrastrar y soltar para facilitar la carga de archivos. Si no tienes un certificado para analizar, puedes hacer clic en el botón "Cargar Ejemplo" para ver cómo funciona la herramienta con un certificado de demostración.'
    },
    step2: {
      title: 'Decodificar el Certificado',
      content: 'Una vez que tu certificado esté cargado, haz clic en el botón "Decodificar Certificado". Nuestra herramienta detectará automáticamente el formato (PEM o DER) y analizará los datos del certificado. El procesamiento ocurre completamente en tu navegador, asegurando que tus datos nunca salgan de tu dispositivo, lo que lo convierte en una opción segura para analizar certificados sensibles.'
    },
    step3: {
      title: 'Analizar los Detalles del Certificado',
      content: 'Tras la decodificación, la herramienta mostrará información completa del certificado organizada en pestañas fáciles de navegar. La pestaña "Información Básica" muestra detalles esenciales como el período de validez, número de serie y algoritmo de firma. Los indicadores visuales muestran claramente si el certificado es válido, está próximo a vencer o ya ha expirado. Puedes explorar información más detallada en pestañas especializadas para Titular &amp; Emisor, Extensiones, Clave Pública, entre otras.'
    },
    step4: {
      title: 'Exportar y Descargar Informes',
      content: 'Para guardar o compartir tu análisis del certificado, utiliza las funciones de exportación al final de la sección de resultados. Puedes descargar un informe completo en múltiples formatos (PDF, TXT, HTML o JSON) o copiar secciones específicas al portapapeles. Estos informes son útiles para documentación, cumplimiento normativo o compartir con compañeros durante la solución de problemas.'
    }
  },
  resources: {
    title: 'Recursos Adicionales',
    intro: 'Amplía tus conocimientos sobre certificados X.509 y temas relacionados con seguridad con estos recursos valiosos:',
    relatedTools: 'Herramientas de Seguridad Relacionadas',
    tool1: 'Generador de Hash - Crear hashes criptográficos para verificación de datos',
    tool2: 'Codificador/Decodificador Base64 - Convertir entre formatos binarios y Base64',
    tool3: 'Decodificador JWT - Analizar tokens web JSON usados en autenticación',
    externalLinks: 'Enlaces Externos',
    external1: 'IETF RFC 5280 - Infraestructura de Clave Pública X.509 en Internet',
    external2: 'Wikipedia - Visión General del Estándar X.509',
    external3: 'SSL.com - ¿Qué es un Certificado X.509?'
  },
  conclusion: {
    title: 'Conclusión',
    content: 'El <strong>decodificador de certificados X.509</strong> es una herramienta esencial para cualquier persona que trabaje con certificados digitales y comunicaciones seguras. Al proporcionar información clara y detallada sobre la estructura y validez de los certificados, nuestra herramienta te ayuda a garantizar que tus implementaciones SSL/TLS sean seguras y libres de errores. Ya seas un profesional de seguridad realizando auditorías, un desarrollador web solucionando problemas de HTTPS o un administrador de TI gestionando despliegues de certificados, este decodificador simplifica el análisis de certificados y mejora tus prácticas de seguridad.'
  }
}
