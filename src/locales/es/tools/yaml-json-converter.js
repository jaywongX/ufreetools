export default {
  name: 'Conversor YAML-JSON',
  description: 'Convertir entre formatos YAML y JSON con opciones personalizables',
  input: {
    title: 'Entrada',
    yamlPlaceholder: 'Ingrese YAML aquí...',
    jsonPlaceholder: 'Ingrese JSON aquí...',
    loadSample: 'Cargar Ejemplo',
    clearInput: 'Limpiar Entrada',
    uploadFile: 'Subir Archivo'
  },
  output: {
    title: 'Salida',
    copyOutput: 'Copiar Salida',
    downloadOutput: 'Descargar Salida',
    clearOutput: 'Limpiar Salida'
  },
  options: {
    conversionMode: 'Modo de Conversión',
    jsonToYaml: 'JSON a YAML',
    yamlToJson: 'YAML a JSON',
    formatOutput: 'Dar Formato a la Salida',
    indentSize: 'Tamaño de Sangrado',
    quoteKeys: 'Comillas en las Claves del Objeto',
    sortKeys: 'Ordenar Claves Alfabéticamente',
    flowStyle: 'Estilo de Flujo (Flow Style) de YAML',
    jsonCompatible: 'Compatibilidad con JSON',
    singleQuotes: 'Usar Comillas Simples',
    includeSchema: 'Incluir Esquema',
    preserveKeyOrder: 'Preservar Orden de las Claves'
  },
  flowStyles: {
    block: 'Estilo Bloque',
    flow: 'Estilo Flujo',
    auto: 'Automático'
  },
  validation: {
    validate: 'Validar Antes de Convertir',
    validInput: '{format} válido',
    invalidInput: '{format} inválido: {error}',
    checkSyntax: 'Verificar Sintaxis'
  },
  actions: {
    convert: 'Convertir',
    swap: 'Intercambiar Formatos',
    beautify: 'Embellecer',
    minify: 'Minificar'
  },
  messages: {
    conversionSuccess: 'Conversión exitosa',
    conversionFailed: 'Fallo en la conversión: {error}',
    copySuccess: '¡Copiado al portapapeles!',
    downloadSuccess: 'Archivo descargado exitosamente',
    emptyInput: 'Por favor ingrese contenido para convertir',
    invalidYaml: 'Sintaxis YAML inválida',
    invalidJson: 'Sintaxis JSON inválida'
  },
  article: {
    title: "Conversor YAML a JSON: Transformación de Formatos de Datos Hecha Fácil",
    features: {
      title: "Entendiendo los Formatos YAML y JSON",
      description: "El <strong>Conversor YAML-JSON</strong> es una herramienta especializada diseñada para transformar datos entre dos populares <strong>formatos de serialización de datos</strong>: <strong>YAML</strong> (YAML Ain't Markup Language) y <strong>JSON</strong> (JavaScript Object Notation). Este <strong>conversor bidireccional</strong> permite una transformación sin problemas entre estos formatos manteniendo la estructura e integridad de sus datos.<br><br>Nuestro <strong>conversor YAML a JSON</strong> soporta características avanzadas como sangrado personalizable, ordenamiento de claves y opciones de estilo de salida YAML. Para quienes trabajan con conversiones de <strong>JSON a YAML</strong>, la herramienta ofrece opciones para embellecer la salida o mantener notación compacta. Ya sea que esté lidiando con simples pares clave-valor o estructuras anidadas complejas, este <strong>conversor de formatos de datos</strong> maneja eficientemente las transformaciones manteniendo intactas las relaciones jerárquicas de sus datos.",
      useCases: {
        title: "Aplicaciones Comunes para la Conversión YAML-JSON",
        items: [
          "Ingenieros DevOps convirtiendo archivos de configuración entre distintas pipelines CI/CD que requieren YAML (GitHub Actions, GitLab CI) o JSON (CircleCI, AWS CodeBuild)",
          "Desarrolladores backend trabajando con APIs que aceptan payloads en JSON mientras mantienen archivos de configuración en YAML por legibilidad",
          "Arquitectos en la nube transformando plantillas de AWS CloudFormation (JSON) a formato YAML más mantenible o viceversa",
          "Científicos de datos convirtiendo definiciones de estructuras entre entornos de notebooks que prefieren JSON y archivos de configuración en YAML",
          "Escritores técnicos documentando APIs necesitando mostrar la misma estructura en ambos formatos (YAML y JSON) según preferencias de su audiencia",
          "Desarrolladores frontend trabajando con gestores de paquetes y herramientas de construcción que usan diferentes formatos de configuración (package.json vs docker-compose.yml)"
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes sobre la Conversión YAML-JSON",
      items: [
        {
          question: "¿Cuáles son las diferencias principales entre YAML y JSON?",
          answer: "YAML y JSON son ambos formatos de serialización de datos, pero difieren significativamente en sintaxis y capacidades. JSON usa una sintaxis estricta con llaves, comillas alrededor de las claves y comas explícitas entre elementos. YAML es más legible para humanos con espaciado significativo, sin necesidad de comillas ni llaves, y soporte para comentarios. Aunque JSON es más compacto y ampliamente usado para intercambio de datos en aplicaciones web, YAML ofrece mejor legibilidad, soporte para estructuras de datos complejas y frecuentemente se prefiere para archivos de configuración. Nuestro conversor YAML-JSON maneja automáticamente estas diferencias sintácticas asegurando una conversión precisa entre formatos."
        },
        {
          question: "¿Puede el conversor manejar estructuras anidadas complejas?",
          answer: "Sí, nuestro conversor YAML-JSON soporta completamente estructuras de datos anidadas complejas incluyendo objetos profundos, arrays y jerarquías mixtas. El conversor preserva las relaciones jerárquicas independientemente de la dirección de conversión, asegurando que mapas anidados, secuencias y escalares en YAML correspondan correctamente a objetos, arrays y valores primitivos en JSON. Esto lo hace adecuado para archivos de configuración complejos, esquemas de API y plantillas de datos con múltiples niveles de anidamiento y diversos tipos de datos."
        },
        {
          question: "¿Soporta el conversor las características avanzadas de YAML?",
          answer: "El conversor YAML-JSON soporta muchas de las características avanzadas de YAML dentro de las limitaciones de JSON. Al convertir desde YAML a JSON, características como comentarios y referencias (anchors) se procesan adecuadamente: los comentarios se eliminan (ya que JSON no los soporta) y las referencias se resuelven a sus valores reales. Al convertir desde JSON a YAML, puede elegir entre estilo bloque (más legible) o estilo flujo (más compacto) en la salida YAML. El conversor mantiene la integridad de los datos adaptándose a las capacidades de cada formato."
        },
        {
          question: "¿Cómo maneja el conversor los distintos tipos de datos?",
          answer: "El conversor YAML-JSON preserva los tipos de datos durante la conversión para aquellos compatibles entre los formatos. Números, cadenas, booleanos, nulls, arrays y objetos se convierten con precisión en ambas direcciones. Los tipos adicionales de YAML como fechas y datos binarios se manejan especialmente: las fechas típicamente se convierten al formato ISO en JSON, y los datos binarios se convierten a cadenas base64. La característica de tipado dinámico del conversor asegura que los valores numéricos sean reconocidos correctamente y no tratados como cadenas cuando corresponde."
        },
        {
          question: "¿Existe un límite de tamaño para los archivos que puedo convertir?",
          answer: "Como el conversor YAML-JSON opera completamente en su navegador, el límite práctico depende de la memoria y capacidad de procesamiento de su dispositivo. Para mejor rendimiento recomendamos mantener los archivos bajo los 5MB, aunque navegadores modernos pueden manejar frecuentemente archivos más grandes. Para archivos muy grandes, podría notar cierto retardo en el procesamiento. Si trabaja con conjuntos de datos extremadamente grandes, considere dividirlos en fragmentos menores o procesarlos incrementalmente para obtener mejor desempeño."
        }
      ]
    },
    guide: {
      title: "Guía Paso a Paso para Usar el Conversor YAML-JSON",
      steps: [
        "Seleccione la dirección de conversión usando los botones superiores de alternancia ('toggle'): 'YAML a JSON' para convertir sintaxis YAML a formato JSON, o 'JSON a YAML' para el proceso inverso",
        "Configure sus preferencias de formato de salida en la sección de ajustes: para salida JSON puede elegir el tamaño de sangrado y opciones de embellecimiento; para salida YAML puede seleccionar entre estilo bloque o flujo y habilitar el ordenamiento de claves",
        "Introduzca sus datos fuente en el panel izquierdo de entrada o use el botón 'Pegar' para pegar contenido desde su portapapeles (también puede cargar datos de ejemplo usando los botones 'Simple', 'Anidado' o 'Complejo')",
        "El conversor procesa automáticamente su entrada a medida que escribe, mostrando en tiempo real la salida convertida en el panel derecho",
        "Revise los resultados de la conversión y haga los ajustes necesarios a su entrada o configuración de formato para obtener el resultado deseado",
        "Haga clic en el botón 'Copiar Resultado' para copiar la salida convertida a su portapapeles y usarla en otras aplicaciones",
        "Opcionalmente, utilice el botón 'Descargar' para guardar la salida convertida como archivo en su dispositivo para uso posterior o integración en sus proyectos"
      ]
    },
    conclusion: "El Conversor YAML-JSON proporciona una forma sencilla de transformar datos entre estos dos populares formatos de serialización sin perder integridad estructural ni precisión de los datos. Ya sea que sea un desarrollador trabajando con archivos de configuración, un ingeniero DevOps gestionando infraestructura como código, o un profesional de datos manejando distintos formatos de intercambio de información, esta herramienta simplifica el proceso de conversión gracias a su interfaz intuitiva y potentes funcionalidades. Al soportar ambas direcciones de conversión y ofrecer opciones de salida personalizables, cubre una amplia gama de casos de uso ahorrándole tiempo y reduciendo el riesgo de errores manuales en la conversión."
  }
}