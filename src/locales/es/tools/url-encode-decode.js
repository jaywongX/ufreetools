export default {
  name: 'Codificador/Decodificador de URL',
  description: 'La codificación URL convierte caracteres especiales en un formato aceptable para URLs, comúnmente utilizado para parámetros de URL y envío de formularios.',
  options: {
    operationType: 'Tipo de Operación',
    encodeMode: 'Modo de Codificación'
  },
  encodeOptions: {
    standard: 'Codificación Estándar (encodeURI)',
    component: 'Codificación de Componente (encodeURIComponent)',
    full: 'Codificación Completa (todos los caracteres)',
    standardDescription: 'Codifica toda la URL preservando los caracteres estructurales de las URLs',
    componentDescription: 'Adecuado para parámetros de URL, codifica todos los caracteres especiales',
    fullDescription: 'Codifica todos los caracteres no alfanuméricos, incluidos los espacios (como %20, no como +)'
  },
  actions: {
    encode: 'Codificar URL',
    decode: 'Decodificar URL',
    clear: 'Limpiar',
    copyResult: 'Copiar Resultado'
  },
  input: {
    textToEncode: 'Texto a Codificar',
    textToDecode: 'Texto a Decodificar',
    encodePlaceholder: 'Ingrese una URL o texto a codificar...',
    decodePlaceholder: 'Ingrese una URL o texto a decodificar...'
  },
  output: {
    encodeResult: 'Resultado de la Codificación',
    decodeResult: 'Resultado de la Decodificación'
  },
  messages: {
    copied: '(¡Copiado!)',
    error: 'Error: {message}',
    decodeError: 'No se pudo decodificar: "{text}"',
    copyFailed: 'Fallo al copiar, por favor copie manualmente'
  },
  referenceTable: {
    title: 'Referencia Común de Codificación de Caracteres en URL',
    showTable: 'Mostrar Tabla',
    hideTable: 'Ocultar Tabla',
    character: 'Caracter',
    encoded: 'Codificado en URL',
    description: 'Descripción',
    descriptions: {
      space: 'Espacio',
      exclamation: 'Signo de Exclamación',
      doubleQuote: 'Comillas Dobles',
      hash: 'Numeral',
      dollar: 'Signo de Dólar',
      percent: 'Porcentaje',
      ampersand: 'Ampersand',
      singleQuote: 'Comilla Simple',
      leftParenthesis: 'Paréntesis Izquierdo',
      rightParenthesis: 'Paréntesis Derecho',
      asterisk: 'Asterisco',
      plus: 'Signo Más',
      comma: 'Coma',
      slash: 'Barra Inclinada',
      colon: 'Dos Puntos',
      semicolon: 'Punto y Coma',
      lessThan: 'Menor Que',
      equals: 'Signo de Igualdad',
      greaterThan: 'Mayor Que',
      questionMark: 'Signo de Interrogación',
      at: 'Arroba',
      leftBracket: 'Corchete Izquierdo',
      backslash: 'Barra Inversa',
      rightBracket: 'Corchete Derecho',
      caret: 'Caret (^)',
      backtick: 'Backtick (`)',
      leftBrace: 'Llave Izquierda',
      pipe: 'Tubería (|)',
      rightBrace: 'Llave Derecha',
      tilde: 'Tilde (~)',
      chinese: 'Chino codificado en UTF-8'
    }
  },
  article: {
    title: 'Codificación y Decodificación de URL: La Guía Definitiva sobre Codificación y Decodificación de URL',
    introduction: {
      title: '¿Qué es la Codificación y Decodificación de URL?',
      p1: '<strong>Codificar y decodificar URL</strong> es un proceso esencial en el desarrollo web que convierte caracteres especiales en un formato seguro para transmitirlo a través de internet. Cuando introduces información en una URL, ciertos caracteres como espacios, ampersands y barras tienen significados especiales dentro de la estructura de la URL. La codificación URL reemplaza estos caracteres con un signo de porcentaje (%) seguido de dos dígitos hexadecimales.',
      p2: 'Nuestra herramienta <strong>codificar y decodificar URL</strong> proporciona una interfaz intuitiva para manejar tres tipos de codificación: codificación estándar (encodeURI), codificación de componente (encodeURIComponent) y codificación completa para todos los caracteres. Esta versatilidad permite a desarrolladores que usan funciones <strong>JavaScript para codificar y decodificar URL</strong>, métodos <strong>PHP para codificar y decodificar URL</strong> u otros lenguajes de programación probar y verificar sus operaciones de codificación y decodificación fácilmente.',
      p3: 'Ya sea que estés trabajando con envíos de formularios, solicitudes de API o parámetros complejos de URL, comprender e implementar correctamente las técnicas de <strong>codificación y decodificación de URL</strong> es crucial para prevenir corrupción de datos y vulnerabilidades de seguridad. Esta guía exhaustiva explora varios aspectos de la codificación y decodificación de URL a través de diferentes lenguajes y marcos.'
    },
    applications: {
      title: 'Aplicaciones Prácticas',
      scenario1: {
        title: 'Desarrollo Web y Manejo de Formularios',
        content: 'Los desarrolladores web utilizan frecuentemente funciones de <strong>codificación y decodificación de URL en JavaScript</strong> o <strong>JS codificar y decodificar URL</strong> cuando trabajan con formularios para asegurar que los datos estén correctamente formateados para solicitudes HTTP. Cuando un usuario envía un formulario que contiene caracteres especiales, espacios o caracteres no ASCII, deben codificarse antes de ser enviados al servidor. En JavaScript, la función <code>encodeURIComponent()</code> suele usarse con este propósito, mientras que <code>decodeURIComponent()</code> decodifica los datos en el extremo receptor.'
      },
      scenario2: {
        title: 'Desarrollo e Integración de APIs',
        content: 'Al desarrollar o consumir APIs, los desarrolladores suelen necesitar usar funciones de <strong>codificación y decodificación de URL</strong> en diversos lenguajes como <strong>Python codificar y decodificar URL</strong>, <strong>Java codificar y decodificar URL</strong> o <strong>Golang codificar y decodificar URL</strong>. Los parámetros de consulta y segmentos de ruta pueden contener caracteres especiales que requieren codificación para garantizar una correcta formación de la solicitud. Por ejemplo, en <strong>Python codificar y decodificar URL</strong> típicamente se maneja con el módulo <code>urllib.parse</code>, mientras que en Java los desarrolladores podrían usar las clases <code>URLEncoder</code> y <code>URLDecoder</code>.'
      },
      scenario3: {
        title: 'Interacciones con Bases de Datos',
        content: 'Los desarrolladores de bases de datos a veces necesitan realizar <strong>codificación y decodificación de URL en SQL Server</strong> u otros sistemas de base de datos al almacenar o recuperar URLs. Los caracteres especiales en las URLs pueden interferir con consultas SQL si no están adecuadamente codificados. Del mismo modo, marcos como <strong>Laravel codificar y decodificar URL</strong> ofrecen utilidades para gestionar la codificación y decodificación de URL durante operaciones de base de datos, asegurando integridad de datos a lo largo del ciclo de vida de la aplicación.'
      },
      scenario4: {
        title: 'Seguridad y Autenticación',
        content: 'Los profesionales de seguridad utilizan técnicas de <strong>codificación y decodificación de URL</strong> para analizar y probar aplicaciones web contra vulnerabilidades. Una buena codificación de URL ayuda a prevenir ataques de inyección y scripting entre sitios (XSS). Al implementar sistemas de autenticación, los desarrolladores pueden necesitar codificar tokens u otra información sensible en URLs. Bibliotecas como <strong>Base64 codificar y decodificar URL</strong> suelen usarse para estas tareas relacionadas con la seguridad, especialmente en implementaciones JWT (JSON Web Tokens).'
      },
      scenario5: {
        title: 'Entornos de Desarrollo Multilenguaje',
        content: 'En entornos multilenguaje, los desarrolladores pueden necesitar asegurar codificación consistente a través de distintos ecosistemas de programación. Probar cómo funciona <strong>C# codificar y decodificar URL</strong> comparado con <strong>TypeScript codificar y decodificar URL</strong> o <strong>PHP codificar y decodificar URL</strong> puede ser crucial para mantener interoperabilidad. Nuestra herramienta en línea sirve como punto de referencia neutral, permitiendo a los desarrolladores verificar el comportamiento de codificación a través de distintas implementaciones sin escribir código adicional.'
      }
    },
    guide: {
      title: 'Cómo Usar la Herramienta de Codificación y Decodificación de URL',
      step1: {
        title: 'Paso 1: Seleccione Su Tipo de Operación',
        content: 'Empiece seleccionando su operación deseada desde el menú desplegable. Elija "Codificar URL" para convertir caracteres especiales en un formato seguro para URL, o "Decodificar URL" para revertir caracteres codificados a su forma original. Esta flexibilidad le permite probar ambas operaciones que podría implementar en lenguajes como <strong>JavaScript codificar y decodificar URL</strong>, <strong>PHP codificar y decodificar URL</strong> o <strong>Python codificar y decodificar URL</strong>.'
      },
      step2: {
        title: 'Paso 2: Elija el Modo de Codificación (para la Operación de Codificación)',
        content: 'Cuando codifique, seleccione uno de los tres modos basándose en sus necesidades:<ul><li><strong>Codificación Estándar (encodeURI)</strong>: Codifica toda la URL preservando caracteres estructurales como barras oblicuas, signos de interrogación, etc. Esto equivale al uso de la función <code>encodeURI()</code> en operaciones de <strong>codificación y decodificación de URL en JavaScript</strong>.</li><li><strong>Codificación de Componente (encodeURIComponent)</strong>: Codifica todos los caracteres especiales, incluyendo aquellos con significado especial en URLs. Ideal para codificar componentes individuales de URL, esto es equivalente al uso de <code>encodeURIComponent()</code> en operaciones de <strong>codificación y decodificación de URL en JS</strong>.</li><li><strong>Codificación Completa</strong>: Codifica todos los caracteres no alfanuméricos, proporcionando el enfoque más completo similar a lo que podría implementar en una función personalizada de <strong>codificación y decodificación de URL en Java</strong>.</li></ul>'
      },
      step3: {
        title: 'Paso 3: Ingrese Su Texto',
        content: 'A continuación, ingrese el texto que desea codificar o decodificar en el campo de entrada. Esto puede ser una URL completa, un componente de URL o cualquier cadena que contenga caracteres especiales. Si está probando funcionalidades similares a <strong>PHP codificar y decodificar URL</strong> o <strong>Python codificar y decodificar URL</strong>, puede ingresar aquí las mismas cadenas para comparar resultados.'
      },
      step4: {
        title: 'Paso 4: Procese y Use los Resultados',
        content: 'Haga clic en el botón "Codificar URL" o "Decodificar URL" para procesar su entrada. El resultado aparecerá en el campo de salida debajo. Puede copiar este resultado usando el botón de copia para utilizarlo en su aplicación, ya sea construyendo con <strong>C# codificar y decodificar URL</strong>, <strong>TypeScript codificar y decodificar URL</strong> o implementando <strong>codificación y decodificación de URL en Laravel</strong>. La tabla de referencia en la parte inferior de la herramienta muestra caracteres codificados comunes para su referencia.'
      }
    },
    faq: {
      title: 'Preguntas Frecuentes',
      q1: '¿Cuál es la diferencia entre encodeURI y encodeURIComponent en JavaScript codificar y decodificar URL?',
      a1: 'En operaciones de <strong>codificación y decodificación de URL en JavaScript</strong>, estas dos funciones sirven propósitos diferentes. <code>encodeURI()</code> está diseñado para codificar una URL completa y conserva caracteres con significado especial en URLs (como <code>/</code>, <code>?</code>, <code>:</code>, <code>=</code>). Es útil cuando necesita codificar una URL completa manteniendo su estructura.<br><br><code>encodeURIComponent()</code>, por otro lado, codifica todos los caracteres especiales, incluyendo aquellos con significado especial en URLs. Esto la hace ideal para codificar componentes individuales de URL como parámetros de consulta. Por ejemplo, si está creando una URL de búsqueda con entrada de usuario, debería usar <code>encodeURIComponent()</code> en el término de búsqueda para asegurar que los caracteres especiales no rompan la estructura de la URL. La mayoría de las implementaciones de <strong>JS codificar y decodificar URL</strong> usará <code>encodeURIComponent()</code> para envíos de formularios y llamadas a API.',
      q2: '¿Cómo implemento codificación y decodificación de URL en PHP?',
      a2: 'Para operaciones de <strong>codificación y decodificación de URL en PHP</strong>, PHP ofrece funciones integradas: <code>urlencode()</code> y <code>urldecode()</code>. La función <code>urlencode()</code> funciona de manera similar a <code>encodeURIComponent()</code> en JavaScript, codificando todos los caracteres especiales incluyendo espacios (como signos de suma). Para codificar URLs completas, PHP ofrece <code>rawurlencode()</code>, que sigue estándares RFC 3986 más estrictamente y codifica espacios como %20 en lugar de +.<br><br>Aquí hay un ejemplo simple:<pre><code>// Codificando un parámetro de URL en PHP\n$encoded = urlencode("Término de búsqueda con espacios & carácteres especiales");\n// Resultado: Search+term+with+spaces+%26+special+chars\n// Decodificando\n$decoded = urldecode("Search+term+with+spaces+%26+special+chars");\n// Resultado: Término de búsqueda con espacios & carácteres especiales</code></pre> Marcos PHP como <strong>codificación y decodificación de URL en Laravel</strong> proveen ayudantes adicionales y middleware para gestionar codificación de URL en aplicaciones web.',
      q3: '¿Cómo funciona la codificación y decodificación de URL en Python comparado con otros lenguajes?',
      a3: 'Las operaciones de <strong>codificación y decodificación de URL en Python</strong> normalmente usan el módulo <code>urllib.parse</code>, específicamente las funciones <code>quote()</code> y <code>unquote()</code>. Similar a PHP y JavaScript, Python distingue entre codificar una URL completa y codificar componentes de URL.<br><br>Aquí está cómo se compara con otros lenguajes:<pre><code># Codificación y decodificación de URL en Python\nfrom urllib.parse import quote, unquote\n# Codificar (similar a encodeURIComponent en JavaScript)\nencoded = quote("Término de búsqueda con espacios & carácteres especiales")\n# Resultado: Search%20term%20with%20spaces%20%26%20special%20chars\n# Decodificar\ndecoded = unquote("Search%20term%20with%20spaces%20%26%20special%20chars")\n# Resultado: Término de búsqueda con espacios & carácteres especiales</code></pre>A diferencia de <code>urlencode()</code> en PHP, <code>quote()</code> en Python codifica espacios como %20 en lugar de signos de más, lo cual es más coherente con el comportamiento de <strong>codificación y decodificación de URL en JavaScript</strong>.',
      q4: '¿Puedo usar Base64 en lugar de codificación URL?',
      a4: 'Si bien técnicas de <strong>codificación y decodificación Base64 en URL</strong> a veces se usan para codificar datos en URLs (especialmente en tokens JWT), Base64 no sustituye la codificación URL adecuada. Base64 convierte datos binarios en caracteres ASCII, pero puede generar caracteres como +, / y = que tienen significado especial en URLs.<br><br>Si necesita incluir datos codificados en Base64 en una URL, debe aún aplicar codificación URL a la salida Base64, o usar Base64 seguro para URL (reemplazando + por - y / por _). La mayoría de lenguajes proveen bibliotecas para esto:<pre><code>// Base64 seguro para URL en JavaScript\nconst urlSafeBase64 = btoa(data).replace(/\\+/g, \'-\').replace(/\\//g, \'_\').replace(/=+$/, \'\');\n# Base64 seguro para URL en Python\nimport base64\nurlsafe_b64 = base64.urlsafe_b64encode(data.encode()).decode().rstrip(\'=\')</code></pre>Este enfoque es común en implementaciones modernas de <strong>codificación y decodificación de URL en TypeScript</strong> para transmisión segura de datos.',
      q5: '¿Cómo debo manejar la codificación de URL en consultas SQL?',
      a5: 'Realizar <strong>codificación y decodificación de URL en SQL Server</strong> u otros sistemas de base de datos generalmente implica usar funciones incorporadas o crear funciones personalizadas. SQL Server no tiene funciones integradas para codificación URL, pero puede:<br><br>1. Realizar la codificación/decodificación en el código de su aplicación antes de construir las consultas SQL<br>2. Crear funciones definidas por el usuario en SQL. Por razones de seguridad, generalmente es mejor realizar codificación/decodificación en el código de aplicación usando métodos adecuados de <strong>codificación y decodificación en C#</strong> (para aplicaciones .NET) u otras implementaciones específicas de lenguaje en lugar de directamente en SQL.'
    },
    relatedTools: {
      title: 'Herramientas Relacionadas',
      tool1: '<a href="https://meyerweb.com/eric/tools/dencoder/" target="_blank" rel="noopener noreferrer">Codificador/Decodificador de URL</a>',
      tool2: '<a href="https://www.urldecoder.org/" target="_blank" rel="noopener noreferrer">Decodificador y Codificador de URL - Online</a>',
      tool3: '<a href="https://www.url-encode-decode.com/" target="_blank" rel="noopener noreferrer">Codificar y Decodificar URL - Codificación y Decodificación Percentual.</a>'
    },
    resources: {
      title: 'Recursos Externos',
      resource1: '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent" target="_blank" rel="noopener noreferrer">Documentación MDN Web: encodeURIComponent()</a> - Detallada documentación sobre funciones de codificación URL en JavaScript',
      resource2: '<a href="https://www.php.net/manual/en/function.urlencode.php" target="_blank" rel="noopener noreferrer">Manual de PHP: urlencode()</a> - Documentación oficial de funciones de codificación URL en PHP',
      resource3: '<a href="https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1" target="_blank" rel="noopener noreferrer">Especificación W3C para Envío de Formularios</a> - Especificación oficial sobre cómo los navegadores codifican datos de formularios'
    },
    conclusion: {
      title: 'Conclusión',
      content: 'La herramienta <strong>codificar y decodificar URL</strong> es una utilidad indispensable para desarrolladores web, ofreciendo una forma sencilla de convertir caracteres especiales en formatos seguros para URL y viceversa. Ya sea que esté trabajando con funciones <strong>JavaScript para codificar y decodificar URL</strong>, implementando <strong>codificación y decodificación de URL en Laravel</strong> o probando el comportamiento de <strong>Python para codificar y decodificar URL</strong>, esta herramienta proporciona un punto de referencia confiable.<br><br>Al comprender principios y prácticas de codificación URL en distintos entornos de programación desde <strong>PHP codificar y decodificar URL</strong> hasta <strong>Java codificar y decodificar URL</strong>, los desarrolladores pueden asegurar que sus aplicaciones manejen correctamente los caracteres especiales, conduciendo a aplicaciones web más robustas y seguras.<br><br>Recuerde que diferentes contextos de codificación requieren diferentes enfoques. Usar la función de codificación correcta para la situación adecuada es crucial para mantener la integridad de los datos a través de sus aplicaciones y servicios web. Nuestra herramienta facilita probar y verificar estas operaciones sin importar su preferencia de lenguaje o marco.'
    }
  }
};