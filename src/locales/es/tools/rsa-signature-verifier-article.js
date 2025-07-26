export default {
    title: "Herramienta de Verificación de Firma RSA: Firmas Digitales Seguras para la Integridad de Datos",
    
    introduction: {
        title: "¿Qué es la Verificación de Firma RSA?",
        p1: "La verificación de firma RSA es un proceso criptográfico que garantiza la integridad de los datos, la autenticidad y el no repudio en las comunicaciones digitales. Nuestra herramienta de Verificación de Firma RSA le permite firmar datos utilizando claves privadas RSA y verificar firmas utilizando las claves públicas correspondientes, proporcionando una forma segura de validar que la información no ha sido alterada durante la transmisión.",
        p2: "En una era donde la seguridad de datos es primordial, las firmas digitales RSA se han convertido en el estándar de la industria para asegurar documentos electrónicos, distribuciones de software y comunicaciones seguras. Esta herramienta implementa los esquemas de relleno PKCS#1 v1.5 y PSS, soportando varios algoritmos hash incluyendo SHA-1, SHA-256, SHA-384 y SHA-512.",
        p3: "Ya sea que usted sea un desarrollador probando implementaciones criptográficas, un profesional de seguridad verificando firmas digitales, o alguien aprendiendo sobre criptografía de clave pública, nuestra herramienta de verificación de firma RSA ofrece una interfaz amigable con características completas para todas sus necesidades de firma digital.",
        p4: "El proceso de verificación de firma RSA funciona creando un hash criptográfico de sus datos, que luego se cifra con la clave privada del remitente. Cualquier persona con acceso a la clave pública correspondiente puede verificar la firma, confirmando tanto la integridad de los datos como la identidad del remitente."
    },
    
    useCases: {
        title: "Aplicaciones Comunes de la Verificación de Firma RSA",
        case1: "Verificar la autenticidad de descargas de software y actualizaciones para prevenir la distribución de malware",
        case2: "Validar certificados digitales en comunicaciones web seguras (HTTPS)",
        case3: "Asegurar la integridad de documentos electrónicos y contratos en contextos legales y empresariales",
        case4: "Implementar autenticación segura de mensajes en protocolos de comunicación y aplicaciones"
    },
    
    tutorial: {
        title: "Cómo Usar la Herramienta de Verificación de Firma RSA",
        step1: {
        title: "Paso 1: Preparar Sus Claves",
        description: "Antes de firmar o verificar, necesitará claves RSA:",
        option1: "Genere un nuevo par de claves directamente en la herramienta haciendo clic en el botón 'Generar Par de Claves' y seleccionando el tamaño de clave deseado (se recomienda 2048 bits o superior para seguridad)",
        option2: "Importe claves existentes en varios formatos (PEM, DER, HEX o Base64)"
        },
        step2: {
        title: "Paso 2: Configurar Ajustes de Firma",
        description: "Seleccione la configuración apropiada para su operación de firma:",
        option1: "Algoritmo Hash: Elija entre SHA-1, SHA-256, SHA-384 o SHA-512 (se recomienda SHA-256 o superior)",
        option2: "Esquema de Relleno: Seleccione entre PKCS#1 v1.5 (más común) o PSS (más moderno y seguro)",
        option3: "Formato de Entrada: Especifique si su entrada es texto plano, hexadecimal o codificada en Base64"
        },
        step3: {
        title: "Paso 3: Firmar o Verificar Datos",
        description: "Dependiendo de sus necesidades:",
        option1: "Para firmar: Ingrese sus datos en la sección de firma, luego haga clic en 'Firmar Datos' para generar una firma",
        option2: "Para verificar: Ingrese los datos originales y la firma en la sección de verificación, luego haga clic en 'Verificar Firma'"
        },
        step4: {
        title: "Paso 4: Ver Resultados y Exportar (si es necesario)",
        description: "Después de firmar, puede copiar la firma o exportarla en varios formatos (Base64, HEX, DER, PEM). Para la verificación, la herramienta mostrará si la firma es válida o inválida."
        },
        note: "Nota: Para usuarios avanzados, la herramienta también muestra información detallada de preprocesamiento, incluyendo resúmenes hash y datos rellenados, ayudándole a entender cada paso del proceso de firma RSA."
    },
    
    faq: {
        title: "Preguntas Frecuentes sobre Firmas RSA",
        q1: "¿Cuál es la diferencia entre los esquemas de relleno PKCS#1 v1.5 y PSS?",
        a1: "PKCS#1 v1.5 es el esquema de relleno tradicional para firmas RSA, ampliamente soportado en sistemas pero con vulnerabilidades teóricas conocidas. PSS (Esquema de Firma Probabilística) es un enfoque más moderno con propiedades de seguridad demostrables y relleno aleatorizado, haciéndolo más resistente a ciertos ataques criptográficos. Para la mayoría de las aplicaciones, cualquier esquema proporciona seguridad adecuada cuando se usa con algoritmos hash fuertes y longitudes de clave apropiadas.",
        
        q2: "¿Qué algoritmo hash debería usar para firmas RSA?",
        a2: "Para aplicaciones modernas, recomendamos usar al menos SHA-256 para una seguridad adecuada. SHA-1 se considera criptográficamente débil y solo debe usarse para compatibilidad con sistemas antiguos. SHA-384 o SHA-512 proporcionan un margen de seguridad adicional para aplicaciones altamente sensibles o al firmar grandes volúmenes de datos.",
        
        q3: "¿Qué tamaño de clave se recomienda para firmas RSA seguras?",
        a3: "A partir de 2023, se recomienda un mínimo de 2048 bits para claves RSA, con 3072 o 4096 bits preferidos para seguridad a largo plazo. Las claves menores de 2048 bits se consideran vulnerables a ataques de factorización con recursos informáticos modernos. Tenga en cuenta que tamaños de clave más grandes aumentarán el tiempo de procesamiento para operaciones de firma.",
        
        q4: "¿Puedo usar esta herramienta para datos pre-hasheados?",
        a4: "Sí, nuestra herramienta soporta la firma y verificación de datos pre-hasheados. Esto es útil cuando ya ha calculado un resumen hash usando una herramienta externa o cuando trabaja con archivos grandes donde desea calcular el hash por separado. Simplemente seleccione la opción 'Pre-Hash' y proporcione el valor hash en formato hexadecimal.",
        
        q5: "¿Es seguro usar esta herramienta en línea para firmas sensibles?",
        a5: "Esta herramienta procesa todos los datos completamente en su navegador - no se envía información a nuestros servidores. Sin embargo, para operaciones criptográficas altamente sensibles o de producción, recomendamos usar hardware de seguridad dedicado (como HSMs) o bibliotecas criptográficas establecidas en un entorno controlado.",
        a5_extra: "Para propósitos educativos, pruebas o aplicaciones no críticas, esta herramienta proporciona una manera conveniente y segura de trabajar con firmas RSA."
    },
    
    resources: {
        title: "Herramientas y Recursos Relacionados",
        description: "Mejore su flujo de trabajo criptográfico con estas herramientas complementarias:",
        tool1: "Generador de Hash - Cree resúmenes hash usando varios algoritmos",
        tool2: "Codificador/Decodificador Base64 - Convierta entre datos sin procesar y formato Base64",
        tool3: "JWT Debugger - Inspeccione y verifique Tokens Web JSON que usan firmas RSA",
        
        external: {
        title: "Recursos Externos",
        resource1: "RFC 8017 - PKCS #1: Especificaciones de Criptografía RSA Versión 2.2",
        resource2: "NIST FIPS 186-4 - Estándar de Firma Digital (DSS)"
        }
    },
    
    conclusion: {
        title: "Conclusión",
        p1: "La verificación de firma RSA sigue siendo una piedra angular de la seguridad criptográfica moderna, proporcionando mecanismos robustos para garantizar la integridad y autenticidad de los datos. Nuestra herramienta de Verificación de Firma RSA hace que esta poderosa tecnología sea accesible para todos, desde novatos en criptografía hasta profesionales de seguridad.",
        p2: "Ya sea que esté firmando código, verificando la autenticidad de documentos o aprendiendo sobre criptografía de clave pública, esta herramienta proporciona un conjunto completo de características para trabajar con firmas RSA en un entorno seguro basado en navegador. Comience a usar el Verificador de Firma RSA hoy para proteger sus activos digitales y comunicaciones."
    }
}
