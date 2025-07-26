export default {
    title: "Analizador de Estructura ASN.1 - Decodificar y Visualizar Datos Codificados en ASN.1",

    // Introduction section
    introTitle: "¿Qué es el Analizador de Estructura ASN.1?",
    introPara1: "El Analizador de Estructura ASN.1 es una herramienta potente para decodificar y visualizar estructuras de datos codificadas en Notación de Sintaxis Abstracta Uno (ASN.1). ASN.1 es un lenguaje estándar de descripción de interfaces para definir estructuras de datos que pueden ser serializadas y deserializadas de manera multiplataforma. Se utiliza ampliamente en telecomunicaciones y redes informáticas, particularmente en protocolos de criptografía.",
    introPara2: "Nuestro Analizador de Estructura ASN.1 proporciona una forma interactiva de examinar estructuras ASN.1 complejas con soporte para múltiples formatos de entrada, incluidos PEM, HEX, Base64 y DER. Ofrece una visualización basada en árbol que le permite explorar elementos ASN.1 anidados con facilidad, lo que lo hace invaluable para desarrolladores, investigadores de seguridad e ingenieros de redes.",

    applicationTitle: "Aplicaciones Comunes del Analizador ASN.1",
    application1: "<strong>Análisis de Certificados X.509</strong>: Examine la estructura y el contenido de certificados SSL/TLS para auditorías de seguridad y solución de problemas.",
    application2: "<strong>Inspección de Archivos PKCS</strong>: Analice en detalle claves privadas, solicitudes de certificados y formatos de almacén de certificados.",
    application3: "<strong>Sintaxis de Mensajes Criptográficos (CMS)</strong>: Inspeccione estructuras de datos firmadas y cifradas utilizadas en protocolos de mensajería segura.",
    application4: "<strong>Análisis de Protocolos de Red</strong>: Decodifique datos ASN.1 utilizados en protocolos como SNMP, LDAP y H.323.",
    introPara3: "El análisis de la estructura ASN.1 es esencial para comprender los formatos de datos complejos utilizados en los sistemas de seguridad modernos. Nuestro analizador hace que este proceso sea intuitivo al proporcionar visualización con códigos de colores, vistas de árbol expandibles y volcados hexadecimales de los datos codificados.",

    // FAQ section
    faqTitle: "Preguntas Frecuentes sobre el Analizador de Estructura ASN.1",

    faq1Question: "¿Qué formatos puede aceptar el Analizador de Estructura ASN.1?",
    faq1Answer: "Nuestro Analizador de Estructura ASN.1 admite múltiples formatos de entrada, incluidos PEM (Privacy Enhanced Mail), HEX (hexadecimal), Base64 y archivos binarios DER (Reglas de Codificación Distinguida). Esta flexibilidad le permite trabajar con datos ASN.1 de varias fuentes sin necesidad de herramientas de conversión de formato.",

    faq2Question: "¿Cómo analizo un certificado X.509 con el analizador ASN.1?",
    faq2Answer: "Para analizar un certificado X.509, simplemente seleccione 'PEM' como su formato de entrada y pegue su certificado (incluidos los marcadores BEGIN/END CERTIFICATE) en el área de entrada. El analizador decodificará automáticamente la estructura y la mostrará como un árbol interactivo, permitiéndole expandir nodos y examinar campos específicos del certificado como asunto, emisor, períodos de validez y extensiones.",

    faq3Question: "¿Puedo exportar la estructura ASN.1 analizada para documentación?",
    faq3Answer: "Sí, puede exportar la estructura ASN.1 analizada como JSON haciendo clic en el botón 'Exportar como JSON' en el panel de configuración. Esta función es útil para documentar estructuras, compartir con colegas o procesar adicionalmente los datos estructurados en sus propias aplicaciones.",

    faq4Question: "¿Cuál es la diferencia entre la codificación ASN.1, DER y BER?",
    faq4Answer: "ASN.1 (Notación de Sintaxis Abstracta Uno) es el lenguaje utilizado para definir estructuras de datos, mientras que DER (Reglas de Codificación Distinguida) y BER (Reglas de Codificación Básica) son reglas de codificación específicas que determinan cómo las estructuras ASN.1 se convierten a formato binario. DER es un subconjunto de BER que garantiza que cada valor ASN.1 tenga exactamente una codificación, lo que lo hace preferido para aplicaciones criptográficas. Nuestro analizador maneja principalmente estructuras ASN.1 codificadas en DER, que es lo más común en aplicaciones de seguridad.",

    faq5Question: "¿Cómo maneja el analizador ASN.1 los Identificadores de Objeto (OID)?",
    faq5Answer: "El Analizador de Estructura ASN.1 reconoce automáticamente los Identificadores de Objeto (OID) comunes y muestra sus nombres amigables junto con los valores numéricos de OID. Por ejemplo, '1.2.840.113549.1.1.11' se mostrará como 'sha256WithRSAEncryption'. Esta característica facilita la comprensión del propósito de diferentes elementos en estructuras complejas como certificados X.509 y mensajes criptográficos.",

    // Tutorial section
    tutorialTitle: "Cómo Usar el Analizador de Estructura ASN.1",

    step1Title: "Paso 1: Seleccionar Formato de Entrada",
    step1Content: "Comience seleccionando el formato de entrada apropiado para sus datos ASN.1. Elija entre las opciones PEM, HEX, Base64 o DER usando los botones de radio en el panel de entrada. El formato que seleccione determina cómo el analizador interpretará sus datos de entrada.",

    step2Title: "Paso 2: Introducir o Cargar Datos ASN.1",
    step2Content: "Ingrese sus datos ASN.1 codificados en el área de texto o cargue un archivo haciendo clic en la zona de carga. Para el formato PEM, asegúrese de que sus datos incluyan los marcadores BEGIN/END adecuados. Para la entrada hexadecimal, puede usar varios separadores (espacio, dos puntos, etc.) que se pueden configurar en el panel de configuración.",
    step2Example: "-----BEGIN CERTIFICATE-----\nMIIDazCCAlOgAwIBAgIUXF3AmOAMqvdXdFLJV8C5c9K6cI8wDQYJKoZIhvcNAQEL\n...\n-----END CERTIFICATE-----",

    step3Title: "Paso 3: Explorar la Estructura de Árbol ASN.1",
    step3Content: "Una vez que se analizan sus datos, la estructura de árbol ASN.1 se mostrará en el panel inferior izquierdo. Puede expandir y colapsar nodos haciendo clic en los triángulos. Cada nodo muestra su tipo de etiqueta (como SEQUENCE, INTEGER, OBJECT IDENTIFIER) y valor. La codificación de colores ayuda a distinguir entre diferentes tipos ASN.1.",

    step4Title: "Paso 4: Examinar la Representación Hexadecimal",
    step4Content: "Si la opción 'Mostrar volcado hexadecimal' está habilitada, el panel derecho mostrará un volcado hexadecimal de sus datos ASN.1. Al pasar el cursor sobre elementos en el árbol, se resaltarán los bytes correspondientes en el volcado hexadecimal, lo que le ayudará a comprender la estructura binaria de la codificación.",
    step4Example: "00000000 30 82 03 6a 30 82 02 52 a0 03 02 01 02 02 14 5c 0..j0..R........\\",

    step5Title: "Paso 5: Configurar Opciones de Visualización",
    step5Content: "Utilice el panel de configuración para personalizar la visualización según sus necesidades. Las opciones incluyen mostrar/ocultar el volcado hexadecimal, recortar valores de datos grandes para una mejor legibilidad, elegir separadores hexadecimales y habilitar el resaltado de color por tipo. También puede expandir todos los nodos a la vez para una vista completa de la estructura.",

    // Resources section
    resourcesTitle: "Recursos Adicionales",

    relatedToolsTitle: "Herramientas Relacionadas",
    relatedTool1: "Conversor Base64 - Codificar y decodificar datos Base64",
    relatedTool2: "Conversor Hexadecimal - Convertir entre formatos hexadecimal y Base64, con separadores personalizables y sensibilidad de mayúsculas/minúsculas",
    relatedTool3: "Decodificador de Certificados - Analizar certificados X.509 en detalle",

    externalResourcesTitle: "Recursos Externos",
    externalResource1: "Introducción a ASN.1 de ITU-T - Documentación oficial sobre el estándar ASN.1",
    externalResource2: "RFC 5280 - Perfil de Certificado y CRL de Infraestructura de Clave Pública X.509 de Internet",
}
