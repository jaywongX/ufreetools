// src/locales/es/tools/asn1-structure-parser.js 完整修复
export default {
    name: "Analizador de Estructura ASN.1",
    description: "Una herramienta completa para decodificar, visualizar y analizar estructuras de datos codificadas en ASN.1 utilizadas en criptografía, telecomunicaciones y protocolos de red. Admite formatos PEM, HEX, Base64 y DER con visualización de árbol interactiva y múltiples opciones de exportación.",
    input: "Datos de Entrada",
    output: "Estructura Analizada",
    inputFormat: "Formato de Entrada",
    inputPlaceholder: "Ingrese sus datos ASN.1 en el formato seleccionado...",
    loadExample: "Cargar Ejemplo",
    clickToUpload: "Haga clic para subir archivo",
    orDragDrop: "o arrastre y suelte",
    supportedFormats: "Archivos PEM, DER, HEX, Base64",
    showHexDump: "Mostrar volcado hexadecimal",
    trimLargeData: "Recortar valores de datos grandes",
    useDefinitionFile: "Usar archivo de definición ASN.1 para análisis",
    error: "Error",
    noData: "No hay datos ASN.1 para mostrar. Ingrese datos en el área de entrada o cargue un archivo.",
    treeStructure: "Estructura de Árbol ASN.1",
    hexDump: "Volcado Hexadecimal",
    parseError: "Error al analizar datos ASN.1. Verifique su formato de entrada y datos.",
    invalidPEM: "Formato PEM inválido. Asegúrese de que tenga los marcadores BEGIN/END adecuados.",
    invalidHex: "Datos hexadecimales inválidos. Solo se permiten caracteres hexadecimales (0-9, A-F).",
    invalidBase64: "Datos Base64 inválidos.",
    derTextNotSupported: "El formato DER no se puede ingresar como texto. Por favor, cargue un archivo DER.",
    unsupportedFormat: "Formato de entrada no compatible seleccionado.",
    unexpectedEOF: "Fin inesperado de datos al analizar la estructura ASN.1.",
    lengthTooLong: "Campo de longitud ASN.1 demasiado grande para procesar.",
    fileReadError: "Error al leer el archivo cargado.",
    fileTooLarge: "El archivo es demasiado grande. El tamaño máximo es de 10MB.",

    // Feature descriptions
    featureHeading: "Características Principales",

    feature1: "Soporte Multi-formato: Analiza datos ASN.1 en formatos PEM, HEX, Base64 o DER",
    feature2: "Vista de Árbol Interactiva: Visualiza la estructura ASN.1 con nodos expandibles",
    feature3: "Visualización de Volcado Hex: Ver bytes de datos sin procesar con resaltado al pasar sobre los nodos",
    feature4: "Resolución de OID: Los Identificadores de Objeto comunes se muestran con sus nombres",
    feature5: "Manejo de Datos Grandes: Opción para recortar valores grandes para mejor legibilidad",

    // Common ASN.1 applications
    applicationsHeading: "Aplicaciones Comunes",

    application1: "Certificados X.509: Ver y analizar estructuras de certificados SSL/TLS",
    application2: "Archivos PKCS: Examinar formatos de clave privada, solicitud de certificado y almacén de certificados",
    application3: "CMS/PKCS#7: Inspeccionar estructuras de datos firmadas y cifradas",
    application4: "MIB SNMP: Decodificar datos del Protocolo Simple de Administración de Red",

    // Instructions
    instructionsHeading: "Cómo Usar",

    step1: "Seleccione el formato de sus datos de entrada (PEM, HEX, Base64, DER)",
    step2: "Ingrese sus datos en el área de texto o cargue un archivo",
    step3: "El analizador procesará automáticamente los datos y mostrará la estructura",
    step4: "Explore el árbol ASN.1 expandiendo/colapsando nodos",
    step5: "Pase el cursor sobre los nodos para resaltar los bytes correspondientes en el volcado hexadecimal",

    // Export
    exportAsJson: "Exportar como JSON",

    exportFormat: "Formato de Exportación",
    exportSuccess: "Estructura exportada correctamente",
    exportFailed: "Error al exportar la estructura",
    noDataToExport: "No hay datos para exportar",
    copiedToClipboard: "Copiado al portapapeles",
    copyFailed: "Error al copiar al portapapeles",
    hexSeparator: "Separador hexadecimal",
    none: "Ninguno",
    space: "Espacio",
    colon: "Dos puntos",
    dash: "Guion",
    dot: "Punto",
    colorHighlight: "Resaltar por tipo",
    settings: "Configuración",
    displayOptions: "Opciones de Visualización",
    advancedOptions: "Opciones Avanzadas",
    expandAllNodes: "Expandir todos los nodos",
    hexDumpDisabled: "La visualización del volcado hexadecimal está desactivada. Habilítela en la configuración para ver los bytes de datos sin procesar.",
    copyValue: "Copiar Valor",
    expandAll: "Expandir",
    collapseAll: "Colapsar",
    autoScroll: "Desplazamiento Automático"
}; 