export default {
  title: "Generador de pares de claves RSA: Cree claves criptográficas seguras en línea",
  intro: "<strong>El Generador de pares de claves RSA</strong> es una herramienta potente y segura que permite crear pares de claves públicas y privadas con longitudes personalizables (desde 256 hasta 16384 bits). El algoritmo RSA (Rivest-Shamir-Adleman) es uno de los más extendidos del mundo para criptografía asimétrica y forma la base de las comunicaciones seguras en Internet y sistemas empresariales. Nuestra herramienta hace sencillo, seguro y accesible el proceso de generación de estas claves criptográficas esenciales.",

  featuresTitle: "Funcionalidades principales del generador de claves RSA",
  feature1: "<strong>Opciones flexibles de longitud de clave</strong>: Genere claves RSA desde 256 hasta 16384 bits para adaptarse a sus necesidades específicas de seguridad.",
  feature2: "<strong>Múltiples formatos de salida</strong>: Exporte las claves en formatos estándar como PEM, PKCS#8, hexadecimal y Base64 codificado.",
  feature3: "<strong>Generación por lotes</strong>: Cree varios pares de claves simultáneamente, ideales para entornos de prueba o despliegue.",
  feature4: "<strong>Visualización de componentes</strong>: Inspeccione los elementos matemáticos detrás de la clave: módulo, exponentes, primos y parámetros CRT.",
  feature5: "<strong>Procesamiento local</strong>: Toda la generación ocurre en su navegador; información sensible nunca abandona su dispositivo.",

  useCasesTitle: "Casos prácticos de uso de pares de claves RSA",

  useCase1Title: "Comunicación segura y cifrado de datos",
  useCase1Desc: "Los pares de claves RSA son fundamentales para establecer canales seguros sobre redes inseguras. La clave pública puede compartirse libremente, permitiendo a otros cifrar mensajes, mientras solo usted, poseedor de la clave privada, puede descifrarlos. Este sistema <strong>RSA de cifrado</strong> soporta tecnologías como SSL/TLS para HTTPS, correo electrónico seguro y redes privadas virtuales (VPN).",

  useCase2Title: "Firmas digitales y autenticación de documentos",
  useCase2Desc: "RSA permite implementar <strong>firma digital</strong>, donde puede usar su clave privada para firmar documentos y cualquiera con su clave pública puede verificar que fueron creados por usted y no alterados. Ampliamente utilizado en certificados de código firmado, transacciones financieras, documentos legales y tecnología blockchain.",

  useCase3Title: "Autenticación y control de acceso",
  useCase3Desc: "Los pares de claves RSA proporcionan mecanismos sólidos para <strong>sistemas de autenticación segura</strong>. SSH (Secure Shell) utiliza claves RSA para iniciar sesión sin contraseña en servidores remotos. Los certificados cliente en ambientes como TLS mutuo también dependen de pares RSA para verificar identidad de manera segura.",

  useCase4Title: "Comunicación API segura y firma de tokens",
  useCase4Desc: "Las aplicaciones modernas y microservicios frecuentemente emplean claves RSA para <strong>proteger la comunicación de APIs</strong> y firmar tokens de autenticación como JWT (JSON Web Token). Su naturaleza asimétrica permite validar tokens en sistemas distribuidos sin compartir la clave privada.",

  relatedToolsText: "También puede encontrar útiles estas herramientas criptográficas relacionadas:",
  relatedTool1: "Calculadora de hash - Genere y verifique huellas digitales criptográficas",
  relatedTool2: "Generador de códigos CUIT/CIF - Cree códigos corporativos válidos para empresas chinas",

  tutorialTitle: "Cómo usar el generador de pares de claves RSA",

  step1Title: "Paso 1: Seleccione la longitud de clave",
  step1Desc: "Seleccione la longitud deseada (en bits). Para propósitos generales, se recomienda al menos 2048 bits. Para mayor seguridad, seleccione 4096 bits o más. Tenga en cuenta que claves más largas ofrecen mejor protección pero requieren más recursos computacionales.",

  step2Title: "Paso 2: Elija el formato de salida",
  step2Desc: "Seleccione el formato deseado desde el menú desplegable. PEM es el más compatible y comienza con '-----BEGIN RSA PRIVATE KEY-----'. PKCS#8 es un formato más moderno y ampliamente soportado. Hexadecimal y Base64 son útiles para integración programática específica.",

  step3Title: "Paso 3: Especifique cantidad de pares",
  step3Desc: "Si necesita varios pares de claves, ajuste este valor. Ideal para entornos de pruebas o cuando deba configurar múltiples sistemas de seguridad simultáneamente.",

  step4Title: "Paso 4: Genere y proteja sus claves",
  step4Desc: "Haga clic en \"Generar par de claves\" y espere a que termine el proceso. Las claves largas pueden tardar más tiempo. Una vez creadas, podrá visualizarlas, copiarlas o exportarlas. Almacene siempre su clave privada con seguridad y evite compartirla con terceros no autorizados.",

  faqTitle: "Preguntas frecuentes sobre pares de claves RSA",

  faq1Question: "¿Qué es un par de claves RSA? ¿Por qué necesito generarlas?",
  faq1Answer: "Un par de claves RSA consta de una clave pública y una privada, base de la criptografía asimétrica. La clave pública se usa para cifrar datos o verificar firmas, mientras que la privada se usa para descifrar o crear firmas. Necesita generar estos pares para lograr comunicación segura, firma digital, autenticación y más.",

  faq2Question: "¿Qué longitud de clave RSA debería elegir?",
  faq2Answer: "Para seguridad actual, se recomienda una longitud mínima de 2048 bits. Para usos generales, esta longitud ofrece suficiente protección. Para datos sensibles o aplicaciones de alta seguridad, se recomienda usar 4096 bits o superior. A mayor longitud, mayor seguridad pero también mayor consumo de recursos.",

  faq3Question: "¿Cuál es la diferencia entre los formatos PEM y PKCS#8?",
  faq3Answer: "PEM y PKCS#8 son dos formatos comunes para almacenar y transmitir claves RSA. El formato PEM usa codificación BASE64 y empieza con '-----BEGIN RSA PRIVATE KEY-----'. PKCS#8 es más genérico y moderno, capaz de contener cualquier tipo de clave privada y comienza con '-----BEGIN PRIVATE KEY-----'. La mayoría de los sistemas actuales aceptan PKCS#8, aunque algunos antiguos solo funcionan con PEM.",

  faq4Question: "¿Cómo puedo almacenar de forma segura mis claves privadas RSA?",
  faq4Answer: "Las claves privadas deben mantenerse bajo estricta protección. Métodos recomendados: gestor de contraseñas, almacenamiento en dispositivos cifrados, módulos de seguridad física (HSM) o sistemas de gestión de claves. Además, las claves deberían estar cifradas con una contraseña fuerte y tener permisos restringidos. Crear copias de seguridad es importante, pero estas también deben estar protegidas.",

  faq5Question: "¿En qué aplicaciones puedo usar estos pares de claves RSA?",
  faq5Answer: "Los pares de claves RSA se usan en multitud de escenarios: certificados SSL/TLS y sitios web HTTPS, inicio de sesión SSH seguro, verificación de autenticidad mediante firma digital, comunicación electrónica segura (S/MIME), sistemas de autenticación empresarial, carteras de criptomonedas y blockchain, así como autenticación de APIs y generación de tokens seguros.",

  referencesTitle: "Recursos adicionales",
  reference1: "NIST Special Publication 800-57: Recomendaciones sobre gestión de claves",
  reference2: "RFC 8017: PKCS #1 v2.2 – Especificación de criptografía RSA",
  reference3: "FIPS 186-5: Estándar de firmas digitales (DSS)",

  conclusionTitle: "Conclusión",
  conclusionText: "<strong>El generador de pares de claves RSA</strong> proporciona una forma conveniente y segura de crear claves criptográficas esenciales para la seguridad digital moderna. Ya sea protegiendo comunicaciones, implementando sistemas de autenticación o firmando documentos sensibles, los pares de claves RSA generados correctamente forman la base de estas medidas de seguridad. Con nuestra herramienta, puede generar claves de la fuerza adecuada y en el formato correcto para satisfacer sus necesidades específicas, manteniendo su información criptográfica privada y segura."
}
