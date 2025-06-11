export default {
    name: "Generador de Pares de Claves SM2",
    description: "Genera pares de claves públicas y privadas SM2 en varios formatos según el estándar GB/T 32918-2016",
    settings: "Configuración de Generación",
    keyLength: "Longitud de Clave",
    bits: "bits",
    standardBits: "El estándar SM2 utiliza una longitud de clave de 256 bits",
    outputFormat: "Formato de Salida",
    keyPairCount: "Número de Pares de Claves",
    maxKeysWarning: "Se pueden generar un máximo de 10 claves a la vez",
    generating: "Generando",
    generate: "Generar Pares de Claves",
    results: "Claves Generadas",
    generatingKeys: "Generando pares de claves...",
    copyAll: "Copiar Todo",
    noKeysGenerated: "Aún no se han generado claves. Configure los ajustes y haga clic en 'Generar Pares de Claves'.",
    keyPair: "Par de Claves",
    copy: "Copiar",
    publicKey: "Clave Pública",
    privateKey: "Clave Privada",
    keyComponents: "Componentes de la Clave",
    invalidCount: "Por favor ingrese un número entre 1 y 10",
    generateFailed: "Error al generar el par de claves",
    generateSuccess: "Se generaron correctamente {count} pares de claves SM2",
    copiedToClipboard: "Copiado al portapapeles",
    copyFailed: "Error al copiar",
    downloadedAs: "Descargado como {filename}",
    exportPem: "Exportar como PEM",
    exportAllJson: "Exportar como JSON",
    exportAllTxt: "Exportar como TXT",
    exportTxt: "Exportar como TXT",
    singleKeyDownloaded: "{type} descargado como PEM",
    allPemDownloaded: "Todas las claves descargadas como PEM",
    keyPairCopied: "Par de claves copiado al portapapeles",
    allKeysCopied: "Todos los pares de claves copiados al portapapeles",
    componentsCopied: "Componentes de clave copiados al portapapeles",
    componentsDownloaded: "Componentes de clave descargados como archivo TXT",

    // Contenido del artículo
    article: {
        title: "Generador de Pares de Claves SM2: Guía Completa del Estándar Criptográfico Chino",
        introTitle: "¿Qué es el Generador de Pares de Claves SM2 y Por Qué Usarlo?",
        introPara1: "El <strong>Generador de Pares de Claves SM2</strong> es una herramienta criptográfica especializada que crea pares de claves públicas y privadas seguras basadas en el algoritmo criptográfico estándar nacional de China (GB/T 32918-2016). A diferencia de los estándares internacionales como RSA o ECC, SM2 está específicamente diseñado y aprobado por las autoridades reguladoras chinas, lo que lo hace esencial para las organizaciones que operan dentro del marco regulatorio de China.",
        introPara2: "Nuestra <strong>herramienta de generación de claves SM2</strong> permite a los usuarios generar fácilmente pares de claves SM2 criptográficamente seguras sin requerir conocimientos especializados de los algoritmos subyacentes. La herramienta admite varios formatos de salida, incluidos PEM, HEX y Base64, lo que la hace versátil para diferentes entornos de desarrollo y seguridad.",
        
        useCaseTitle: "Aplicaciones Clave y Casos de Uso",
        useCase1: "<strong>Cumplimiento de servicios financieros</strong>: Los bancos y las empresas de tecnología financiera que operan en China necesitan utilizar el cifrado SM2 para cumplir con las regulaciones al proteger transacciones financieras y datos de clientes.",
        useCase2: "<strong>Sistemas de información gubernamentales y empresariales</strong>: Las agencias gubernamentales chinas y las grandes empresas deben implementar SM2 para comunicaciones seguras, firma de documentos y verificación de identidad.",
        useCase3: "<strong>Comercio electrónico transfronterizo</strong>: Las empresas que realizan comercio con China a menudo necesitan implementar criptografía SM2 para el intercambio seguro de datos y el cumplimiento normativo.",
        useCase4: "<strong>Seguridad de aplicaciones móviles</strong>: Los desarrolladores que crean aplicaciones para el mercado chino necesitan pares de claves SM2 para mecanismos seguros de autenticación y protección de datos.",
        standardInfo: "El algoritmo SM2 es parte del conjunto de algoritmos criptográficos ShangMi (SM) que incluye SM2 (criptografía de clave pública), SM3 (hash) y SM4 (cifrado simétrico). Estos estándares son cada vez más importantes a medida que China continúa desarrollando su propio marco de ciberseguridad independiente de los estándares internacionales.",
        
        tutorialTitle: "Cómo Usar el Generador de Pares de Claves SM2",
        tutorialIntro: "Seguir esta guía paso a paso le ayudará a generar pares de claves SM2 seguras de manera rápida y eficiente. Cada par de claves generado incluye tanto los componentes públicos como privados necesarios para operaciones de cifrado, descifrado, firma y verificación.",
        
        step1Title: "Paso 1: Seleccione Parámetros de Clave",
        step1Desc: "El estándar SM2 utiliza una longitud de clave fija de 256 bits, que proporciona una seguridad sólida al mismo tiempo que mantiene un buen rendimiento. Esto está preseleccionado en nuestra herramienta y no se puede cambiar ya que sigue el estándar oficial.",
        
        step2Title: "Paso 2: Elija el Formato de Salida",
        step2Desc: "Seleccione su formato de salida preferido:<ul><li><strong>PEM</strong>: El formato estándar para certificados y claves criptográficas, fácilmente reconocido por la mayoría de los sistemas y aplicaciones.</li><li><strong>HEX</strong>: Representación hexadecimal, útil para implementación directa en código.</li><li><strong>Base64</strong>: Representación compacta que se utiliza a menudo en aplicaciones web y comunicaciones API.</li></ul>",
        
        step3Title: "Paso 3: Especifique el Número de Pares de Claves",
        step3Desc: "Decida cuántos pares de claves necesita. Esto es particularmente útil para pruebas o cuando se configuran múltiples canales seguros.",
        
        step4Title: "Paso 4: Genere y Administre Claves",
        step4Desc: "Haga clic en el botón 'Generar Pares de Claves' y espere a que se complete el proceso. Una vez generadas, puede ver, copiar o exportar sus claves. Asegúrese de almacenar sus claves privadas de forma segura y nunca compartirlas con partes no autorizadas.",
        
        relatedToolsTitle: "Herramientas Criptográficas Relacionadas",
        relatedToolsDesc: "Para una implementación de seguridad integral, es posible que desee explorar estas herramientas complementarias:",
        relatedTool1: "Generador de Pares de Claves RSA - Genere claves RSA para estándares criptográficos internacionales",
        relatedTool2: "Calculadora de Hash - Calcule varios valores hash incluido SM3 para verificación de integridad de datos",
        
        faqTitle: "Preguntas Frecuentes sobre Criptografía SM2",
        faq1Question: "¿Cuál es la diferencia entre SM2 y otros algoritmos de criptografía de clave pública como RSA?",
        faq1Answer: "SM2 es un algoritmo de criptografía de clave pública basado en curvas elípticas desarrollado por las autoridades chinas. En comparación con RSA, SM2 ofrece una seguridad comparable con longitudes de clave más cortas (256 bits frente a 2048+ bits para RSA), lo que resulta en un mejor rendimiento. La distinción principal es que SM2 se requiere específicamente para el cumplimiento normativo en China, mientras que RSA se utiliza más ampliamente a nivel internacional. Los fundamentos matemáticos también difieren: SM2 se basa en la criptografía de curva elíptica, mientras que RSA se basa en la dificultad de factorizar grandes números primos.",
        
        faq2Question: "¿Es seguro el cifrado SM2 para aplicaciones comerciales internacionales?",
        faq2Answer: "Sí, SM2 proporciona una seguridad criptográfica fuerte que cumple con los estándares internacionales. Con su longitud de clave de 256 bits, ofrece una seguridad equivalente a las claves RSA de 3072 bits. SM2 ha sido sometido a un extenso criptoanálisis por parte de las autoridades chinas y se considera seguro contra ataques conocidos. Sin embargo, para la interoperabilidad internacional, algunas organizaciones podrían preferir estándares internacionales ampliamente adoptados como RSA o ECDSA. La elección a menudo depende de sus requisitos específicos de cumplimiento y dónde se implementará su aplicación.",
        
        faq3Question: "¿Cómo puedo verificar que mi par de claves SM2 funciona correctamente?",
        faq3Answer: "Para probar su par de claves SM2, puede realizar una simple prueba de cifrado y descifrado: cifre un mensaje de prueba con la clave pública y luego descífrelo con la clave privada correspondiente. Si el mensaje descifrado coincide con el original, su par de claves está funcionando correctamente. Alternativamente, puede firmar un mensaje con la clave privada y verificar la firma usando la clave pública. Nuestra herramienta garantiza que todos los pares de claves generados sean matemáticamente válidos según las especificaciones estándar de SM2.",
        
        faq4Question: "¿Se pueden usar claves SM2 con implementaciones estándar de SSL/TLS?",
        faq4Answer: "El soporte de SM2 en SSL/TLS depende de la implementación específica. China ha desarrollado una variante llamada TLCP (Protocolo de Criptografía de Capa de Transporte) que utiliza algoritmos SM2/SM3/SM4 en lugar de los estándares internacionales. Los principales navegadores dentro de China a menudo admiten estos estándares. Para sistemas internacionales, es posible que necesite bibliotecas o configuraciones especializadas para habilitar el soporte de SM2. Las versiones de OpenSSL 1.1.1 y posteriores incluyen soporte para criptografía SM2, lo que hace que la integración sea más sencilla para muchos sistemas.",
        
        faq5Question: "¿Qué son los componentes x, y, y d en el par de claves SM2?",
        faq5Answer: "En los pares de claves SM2, estos componentes representan valores matemáticos importantes:<ul><li><strong>x e y</strong>: Estas son las coordenadas de un punto en la curva elíptica que representa su clave pública. Juntas, forman la clave pública completa que se puede compartir abiertamente.</li><li><strong>d</strong>: Esta es su clave privada, un número aleatorio grande que debe mantenerse en secreto. Se utiliza en operaciones de descifrado y firma.</li></ul>A diferencia de RSA que tiene múltiples componentes como p, q, d, e, n, la clave privada SM2 es más simple con solo el valor escalar d, mientras que la clave pública consiste en las coordenadas del punto (x,y).",
        
        resourcesTitle: "Recursos Adicionales",
        resourcesDesc: "Para aprender más sobre criptografía SM2 y estándares criptográficos chinos, estas fuentes autorizadas proporcionan información valiosa:",
        resource1: "GB/T 32918-2016 - Publicación oficial del estándar SM2 (Chino)",
        resource2: "Administración Estatal de Criptografía de China - Documentos regulatorios oficiales",
        resource3: "ISO/IEC 14888-3:2018 - Estándar internacional que hace referencia a los algoritmos de firma SM2",
        
        conclusionTitle: "Conclusión",
        conclusionPara: "El <strong>Generador de Pares de Claves SM2</strong> proporciona una forma fácil de usar para crear claves criptográficamente seguras que cumplen con los estándares nacionales chinos. Ya sea que esté desarrollando aplicaciones para el mercado chino, implementando canales de comunicación seguros o cumpliendo con requisitos regulatorios, nuestra herramienta simplifica el complejo proceso de generación de claves SM2. Al admitir múltiples formatos de salida y proporcionar características completas de gestión de claves, esta <strong>herramienta criptográfica SM2</strong> ayuda a las organizaciones a implementar fuertes medidas de seguridad mientras mantienen el cumplimiento de las regulaciones criptográficas chinas."
    }
}