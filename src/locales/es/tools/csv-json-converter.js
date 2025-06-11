export default {
  name: 'Convertidor de CSV a JSON',
  description: 'Convierte datos CSV al formato JSON con opciones personalizables',
  
  options: {
    delimiter: 'Delimitador',
    quote: 'Carácter de comillas',
    header: 'Primera fila como encabezado',
    dynamicTyping: 'Tipado dinámico',
    dynamicTypingDescription: 'Convertir cadenas numéricas a números, "true/false" a booleanos, etc.',
    skipEmptyLines: 'Saltar líneas vacías',
    comments: 'Carácter de comentario',
    outputFormat: 'Formato de salida',
    indentation: 'Indentación',
    encoding: 'Codificación',
    newline: 'Carácter de nueva línea',
    title: 'Opciones de conversión'
  },
  
  delimiters: {
    comma: 'Coma (,)',
    semicolon: 'Punto y coma (;)',
    tab: 'Tabulador (\\t)',
    pipe: 'Tubería (|)',
    custom: 'Personalizado'
  },
  
  formats: {
    array: 'Matriz de objetos',
    arrayOfArrays: 'Matriz de matrices',
    keyed: 'Objeto clave-valor',
    nested: 'Objeto anidado'
  },
  
  preview: {
    input: 'Entrada...',
    output: 'Salida...',
    rawCsv: 'CSV sin procesar',
    parsedCsv: 'CSV analizado',
    jsonOutput: 'Salida JSON',
    firstRows: 'Primeras {count} Filas',
    showAll: 'Mostrar Todo'
  },
  
  actions: {
    convert: 'Convertir',
    copy: 'Copiar JSON',
    download: 'Descargar JSON',
    clear: 'Limpiar',
    uploadCsv: 'Subir CSV',
    swap: 'Intercambiar Entrada/Salida',
    loadExample: 'Cargar Ejemplo',
    clearInput: 'Limpiar Entrada',
    formatOutput: 'Formatear Salida',
    copyResult: 'Copiar Resultado',
    downloadResult: 'Descargar Resultado',
    paste: 'Pegar',
    showOptions: 'Mostrar Opciones',
    hideOptions: 'Ocultar Opciones',
    uploadJson: 'Subir JSON'
  },
  
  results: {
    rowsProcessed: 'Procesadas {count} Filas',
    conversionComplete: 'Conversión Completada',
    copied: 'Copiado al Portapapeles',
    downloaded: 'Descargado',
    error: 'Error'
  },
  
  errors: {
    noData: 'No hay datos CSV para convertir',
    invalidCsv: 'Formato CSV inválido',
    parsingFailed: 'Fallo en el análisis: {error}',
    missingHeader: 'Fila de encabezado faltante',
    invalidJson: 'Formato JSON inválido',
    formatFailed: 'Fallo en el formato: {error}',
    copyFailed: 'Fallo en la copia, por favor cópielo manualmente',
    downloadFailed: 'Fallo en la descarga',
    pasteError: 'No se pudo pegar desde el portapapeles',
    conversionFailed: 'Fallo en la conversión'
  },
  
  conversion: {
    title: 'Dirección de Conversión',
    csvToJson: {
      title: 'CSV a JSON',
      delimiterLabel: 'Delimitador',
      headerLabel: 'Primera fila como encabezado',
      dynamicTypingLabel: 'Tipado dinámico',
      skipEmptyLinesLabel: 'Saltar líneas vacías',
      convertButton: 'Convertir CSV a JSON'
    },
    jsonToCsv: {
      title: 'JSON a CSV',
      delimiterLabel: 'Delimitador',
      headerLabel: 'Incluir fila de encabezado',
      quotesLabel: 'Añadir comillas a todos los campos',
      nestedModeLabel: 'Seleccionar modo de procesamiento de datos anidados',
      flat: 'Procesamiento aplanado',
      stringify: 'Convertir a cadena',
      ignore: 'Ignorar procesamiento',
      convertButton: 'Convertir JSON a CSV'
    }
  },
  
  stats: {
    processed: 'Filas de datos procesadas',
    fields: 'Número de campos/columnas',
    inputSize: 'Tamaño de entrada antes de la conversión',
    outputSize: 'Tamaño de salida después de la conversión',
    title: 'Estadísticas de conversión'
  },
  
  messages: {
    copied: 'Copiado al Portapapeles',
    download: 'Descargado',
    error: 'Error'
  },
  
  formatBytes: {
    bytes: 'Bytes',
    kb: 'KB',
    mb: 'MB',
    gb: 'GB',
    tb: 'TB'
  },
  
  article: {
    title: "Convertidor de CSV a JSON: Transformación de Formatos de Datos Hecha Fácil",
    features: {
      title: "Entendiendo la Conversión de CSV a JSON",
      description: "El <strong>convertidor CSV a JSON</strong> es una herramienta poderosa diseñada para transformar datos entre <strong>formato CSV</strong> (Valores Separados por Comas) y <strong>formato JSON</strong> (Notación de Objeto de JavaScript). Este <strong>conversor de datos</strong> bidireccional permite una conversión sin problemas de datos tabulares a objetos JSON estructurados y viceversa.<br><br>Nuestra <strong>herramienta CSV JSON</strong> ofrece opciones personalizables para manejar diversos <strong>formatos de datos</strong>, incluyendo diferentes delimitadores (coma, punto y coma, tabulador, tubería), gestión de encabezados y detección inteligente de <strong>tipos de datos</strong>. Para estructuras JSON complejas, la herramienta proporciona opciones para aplanar objetos anidados o convertirlos a cadenas, convirtiéndola en una solución versátil para tareas de <strong>transformación de datos</strong> en diferentes aplicaciones y flujos de trabajo.",
      useCases: {
        title: "Aplicaciones Comunes para la Conversión de CSV a JSON",
        items: [
          "Analistas de datos convirtiendo exportaciones de hojas de cálculo a JSON para herramientas de visualización de datos o APIs",
          "Desarrolladores preparando datos para aplicaciones web que requieren estructuras de datos JSON",
          "Administradores de bases de datos migrando datos entre sistemas con requisitos de formato diferentes",
          "Desarrolladores de APIs convirtiendo datos de exportación CSV al formato JSON para consumo en APIs RESTful",
          "Científicos de datos convirtiendo resultados experimentales entre formatos de hojas de cálculo y estructuras de datos amigables para código",
          "Analistas empresariales preparando informes CSV de sistemas contables o CRM para dashboards basados en web usando JSON"
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes sobre la Conversión de CSV a JSON",
      items: [
        {
          question: "¿Cuál es la diferencia entre los formatos CSV y JSON?",
          answer: "CSV (Valores Separados por Comas) es un formato tabular simple donde los datos se organizan en filas y columnas, separados por delimitadores (normalmente comas). Es plano, ligero y comúnmente usado para hojas de cálculo. JSON (Notación de Objeto de JavaScript) es un formato de datos jerárquico y estructurado que admite objetos y matrices anidados. JSON puede representar relaciones de datos más complejas y es el formato estándar para APIs web y aplicaciones de JavaScript."
        },
        {
          question: "¿Cómo maneja la herramienta los objetos JSON anidados al convertir a CSV?",
          answer: "Nuestro convertidor CSV a JSON proporciona tres opciones para manejar objetos JSON anidados: 'Aplanar' convierte propiedades anidadas en nombres de columnas con notación de puntos (por ejemplo, 'user.name'), 'Convertir a cadena' convierte todo el objeto anidado en una representación de cadena, e 'Ignorar' excluye los objetos anidados de la conversión. Estas opciones le brindan flexibilidad según sus necesidades específicas de transformación de datos."
        },
        {
          question: "¿Puede el convertidor CSV a JSON manejar diferentes delimitadores en archivos CSV?",
          answer: "Sí, nuestro convertidor de datos admite múltiples opciones de delimitadores, incluyendo comas, puntos y comas, tabuladores y caracteres de tubería. Esta flexibilidad le permite trabajar con varias variaciones de formato CSV de diferentes sistemas o regiones. Simplemente seleccione el delimitador adecuado en el panel de opciones antes de la conversión."
        },
        {
          question: "¿Cómo funciona el tipado dinámico en la conversión de CSV a JSON?",
          answer: "El tipado dinámico detecta y convierte automáticamente los tipos de datos en su CSV. Cuando se habilita, los valores de cadena que parecen números (por ejemplo, '42') se convierten en tipos numéricos reales, las cadenas 'true'/'false' se convierten en valores booleanos y los campos vacíos pueden convertirse en valores nulos. Esto crea datos JSON más útiles con tipos de datos adecuados en lugar de tratar todo como cadenas."
        },
        {
          question: "¿Qué tamaño pueden tener mis archivos CSV o JSON para este convertidor?",
          answer: "El convertidor CSV a JSON procesa datos directamente en su navegador, por lo tanto, las limitaciones de tamaño dependen de la memoria de su dispositivo. Recomendamos archivos menores a 5 MB para un rendimiento óptimo, aunque los navegadores modernos pueden manejar archivos más grandes. Para conjuntos de datos muy grandes, considere dividir los archivos en fragmentos más pequeños o usar herramientas de conversión basadas en servidor."
        }
      ]
    },
    guide: {
      title: "Cómo Usar el Convertidor CSV a JSON",
      steps: [
        "Elija la dirección de conversión: 'CSV a JSON' o 'JSON a CSV' según el formato de sus datos de origen",
        "Haga clic en 'Mostrar Opciones' para configurar las opciones de conversión como delimitadores, encabezados y reglas de manejo especial",
        "Para CSV a JSON, seleccione el delimitador adecuado (coma, punto y coma, tabulador, etc.) y marque 'Primera fila como encabezado' si su CSV incluye encabezados de columna",
        "Para JSON a CSV, configure cómo deben manejarse los objetos anidados (aplanar, convertir a cadena o ignorar) y si desea agregar comillas a todos los valores de campo",
        "Ingrese sus datos pegándolos en el campo de entrada o haciendo clic en 'Cargar Ejemplo' para ver cómo funciona el convertidor con datos de muestra",
        "Haga clic en el botón 'Convertir' para realizar la transformación de datos entre los formatos CSV y JSON",
        "Revise las estadísticas de conversión y el resultado de salida, luego use los botones 'Copiar Resultado' o 'Descargar Resultado' para guardar sus datos transformados"
      ]
    },
    conclusion: "El convertidor CSV a JSON es una herramienta esencial para profesionales de datos que trabajan regularmente con diferentes formatos de datos. Al simplificar el proceso de conversión entre datos tabulares CSV y objetos JSON estructurados, esta herramienta ahorra tiempo y reduce errores en los flujos de trabajo de procesamiento de datos. Ya sea que esté preparando datos para integración de API, transformando exportaciones de aplicaciones de hojas de cálculo o convirtiendo entre requisitos de formato de diferentes sistemas, este convertidor ofrece una solución flexible basada en el navegador para sus necesidades de transformación de datos."
  }
}