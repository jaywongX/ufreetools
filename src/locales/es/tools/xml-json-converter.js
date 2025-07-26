export default {
  name: 'Conversor XML/JSON',
  title: 'Conversor XML ↔ JSON',
  description: 'Convertir entre formatos XML y JSON con opciones avanzadas y configuraciones personalizadas',

  conversion: {
    direction: 'Dirección de Conversión',
    xmlToJson: 'XML a JSON',
    jsonToXml: 'JSON a XML'
  },

  options: {
    title: 'Opciones de Conversión',
    show: 'Mostrar Opciones',
    hide: 'Ocultar Opciones',
    xmlToJson: {
      ignoreAttributes: 'Ignorar Atributos',
      ignoreAttributesHint: 'Deshabilite para preservar información de atributos XML en JSON',
      parseAttributeValue: 'Analizar Valores de Atributos',
      parseAttributeValueHint: 'Convertir números, booleanos, etc. en atributos a sus tipos reales en lugar de cadenas',
      ignoreDeclaration: 'Ignorar Declaración XML',
      ignoreDeclarationHint: 'Ignorar declaraciones como <?xml version="1.0"?>',
      parseTagValue: 'Analizar Valores de Etiquetas',
      parseTagValueHint: 'Convertir números, booleanos, etc. en contenido de etiquetas a sus tipos reales en lugar de cadenas',
      trimValues: 'Recortar Espacios',
      attributePrefix: 'Prefijo de Atributo',
      attributePrefixPlaceholder: 'Ejemplos: arroba, guion_bajo, attr_',
      attributePrefixHint: 'Prefijo para atributos XML en JSON, por defecto es arroba (@)'
    },
    jsonToXml: {
      format: 'Formato XML',
      formatHint: 'Habilitar sangrado y saltos de línea para mejor legibilidad',
      indentBy: 'Añadir Sangrado (2 espacios)',
      addDeclaration: 'Añadir Declaración XML',
      addDeclarationHint: 'Añadir <?xml version="1.0" encoding="UTF-8"?> al inicio',
      rootName: 'Nombre del Elemento Raíz (Opcional)',
      rootNamePlaceholder: 'Por ejemplo: raiz, datos, xml',
      rootNameHint: 'Nombre del elemento raíz a usar cuando el JSON tenga múltiples claves en el nivel superior',
      attributePrefix: 'Reconocimiento de Prefijo de Atributo',
      attributePrefixPlaceholder: 'Ejemplos: arroba, guion_bajo, attr_',
      attributePrefixHint: 'Prefijo usado para identificar atributos XML en JSON, por defecto es arroba (@)'
    }
  },

  buttons: {
    convert: 'Convertir',
    swap: 'Intercambiar Contenido',
    clear: 'Limpiar',
    loadExample: 'Cargar Ejemplo'
  },

  input: {
    xmlInput: 'Entrada XML',
    jsonInput: 'Entrada JSON',
    placeholder: {
      xml: 'Ingrese XML...',
      json: 'Ingrese JSON...'
    }
  },

  output: {
    xmlResult: 'Resultado XML',
    jsonResult: 'Resultado JSON',
    copy: 'Copiar'
  },

  stats: {
    title: 'Estadísticas de Conversión',
    inputSize: 'Tamaño de Entrada',
    outputSize: 'Tamaño de Salida',
    sizeChange: 'Cambio de Tamaño',
    conversionTime: 'Tiempo de Conversión'
  },

  help: {
    title: 'Ayuda de Uso',
    show: 'Mostrar Ayuda',
    hide: 'Ocultar Ayuda',
    about: {
      title: 'Sobre XML y JSON',
      content: 'XML (eXtensible Markup Language) es un lenguaje de marcas ampliamente utilizado para archivos de configuración, intercambio de datos y servicios web. JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos fácil de leer y escribir para humanos, y fácil de analizar y generar para máquinas.'
    },
    xmlToJson: {
      title: 'Consideraciones al Convertir XML a JSON',
      items: [
        'Los atributos XML se convierten en claves con prefijo arroba por defecto',
        'El contenido de texto XML se representa con la clave #text por defecto',
        'Activando "Analizar Valores de Etiqueta", los números, booleanos, etc. se convierten a tipos reales en JSON',
        'Varias etiquetas con el mismo nombre se convierten automáticamente en arrays en JSON'
      ]
    },
    jsonToXml: {
      title: 'Consideraciones al Convertir JSON a XML',
      items: [
        'Las claves con prefijo arroba se tratan como atributos XML por defecto',
        'Los arrays en JSON crean múltiples etiquetas con el mismo nombre en XML',
        'Objetos JSON complejos generan estructuras XML jerárquicas',
        'Múltiples claves en el nivel superior sin nombre de elemento raíz especificado generarán múltiples elementos raíz en XML'
      ]
    }
  },

  errors: {
    xmlParse: 'Error al analizar XML: {0}',
    jsonParse: 'Error al analizar JSON: {0}',
    xmlGeneration: 'Error al generar XML: {0}',
    emptyObject: 'El objeto JSON está vacío o no es válido',
    conversion: 'Error durante la conversión: {0}'
  },

  alerts: {
    copied: '¡Copiado al portapapeles!'
  }
};