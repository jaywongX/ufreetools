export default {
  name: 'Codificador de Entidades HTML',
  description: 'Convierte entre texto HTML y codificación de entidades',
  title: 'Codificador/Decodificador de Entidades HTML',
  intro: 'La codificación de entidades HTML se usa para convertir caracteres especiales en un formato seguro para HTML, comúnmente usado para prevenir ataques XSS o mostrar código fuente HTML.',

  operation: {
    title: 'Tipo de Operación',
    encode: 'Codificar Entidad HTML',
    decode: 'Decodificar Entidad HTML'
  },

  mode: {
    title: 'Modo de Codificación',
    named: 'Entidades con Nombre (&amp;lt;)',
    decimal: 'Entidades Decimales (&amp;#60;)',
    hex: 'Entidades Hexadecimales (&amp;#x3C;)',
    full: 'Codificación Completa (todos los caracteres)'
  },

  input: {
    encodeTitle: 'Texto a Codificar',
    decodeTitle: 'Texto a Decodificar',
    encodePlaceholder: 'Introduce el HTML o texto que quieras codificar...',
    decodePlaceholder: 'Introduce el texto de entidad HTML que quieras decodificar...',
    clear: 'Limpiar'
  },

  output: {
    encodeTitle: 'Resultado Codificado',
    decodeTitle: 'Resultado Decodificado',
    copy: 'Copiar Resultado',
    copied: '(¡Copiado!}',
    preview: 'Previsualizar Efecto',
    showSource: 'Mostrar Código Fuente'
  },

  reference: {
    title: 'Referencia de Entidades',
    commonReferenceTables: 'Tablas Comunes de Referencia de Entidades HTML',
    show: 'Mostrar Tabla',
    hide: 'Ocultar Tabla',
    description: {
      named: 'Usa formatos con nombre como &amp;lt; para < (solo aplica a entidades comunes de HTML)',
      decimal: 'Usa formatos decimales como &amp;#60; para <',
      hex: 'Usa formatos hexadecimales como &amp;#x3C; para <',
      full: 'Codifica todos los caracteres no alfanuméricos, incluyendo espacios, saltos de línea, etc.'
    },
    table: {
      char: 'Carácter',
      named: 'Entidad con Nombre',
      decimal: 'Entidad Decimal',
      description: 'Descripción'
    },
    entities: {
      lt: 'Símbolo menor que',
      gt: 'Símbolo mayor que',
      amp: 'Ampersand',
      quot: 'Comillas dobles',
      apos: 'Apóstrofe',
      copy: 'Símbolo de derechos de autor',
      reg: 'Marca registrada',
      trade: 'Símbolo de marca comercial',
      nbsp: 'Espacio no separable',
      cent: 'Símbolo de centavo',
      pound: 'Símbolo de libra esterlina',
      euro: 'Símbolo de euro',
      yen: 'Símbolo de yen/yuan',
      sect: 'Símbolo de sección',
      minus: 'Símbolo de menos',
      times: 'Símbolo de multiplicación',
      divide: 'Símbolo de división',
      deg: 'Símbolo de grado',
      plusmn: 'Símbolo más-menos',
      frac14: 'Fracción de un cuarto'
    }
  },

  messages: {
    copySuccess: '¡Copiado al portapapeles!',
    copyError: 'Fallo al copiar, por favor copia manualmente',
    encodeSuccess: 'Codificación completada',
    decodeSuccess: 'Decodificación completada',
    invalidInput: 'Texto de entrada inválido'
  }
};