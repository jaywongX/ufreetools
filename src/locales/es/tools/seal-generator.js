export default {
  name: 'Generador de Sellos',
  description: 'Cree imágenes de sellos personalizados en línea, incluyendo sellos corporativos y privados',
  
  // Interfaz principal
  text: 'Texto del sello',
  textPlaceholder: 'Introduzca el texto que desea mostrar en círculo',
  centerText: 'Texto central',
  centerTextPlaceholder: 'Introduzca el texto o símbolo central',
  font: 'Seleccionar fuente',
  shape: 'Forma del sello',
  size: 'Tamaño del sello',
  color: 'Color del sello',
  generate: 'Generar sello',
  download: 'Descargar imagen',
  reset: 'Restablecer',
  preview: 'Vista previa',
  previewPlaceholder: 'Haga clic en "Generar sello" para ver la vista previa',
  bottomText: 'Texto inferior',
  bottomTextPlaceholder: 'Introduzca el texto inferior',
  centerSymbol: 'Símbolo central',
  centerImage: 'Subir imagen central',
  template: 'Plantilla de sello',
  centerSymbolSize: 'Tamaño del símbolo central',
  exportFormat: 'Formato de exportación',
  lineWidth: 'Grosor de línea',
  defaultSealText: 'Empresa Limitada XXX',
  defaultBottomText: 'Sello de contrato',
  width: 'Ancho',
  height: 'Alto',
  agingEffect: 'Efecto envejecido',
  colorHex: 'Valor hexadecimal del color',
  customColor: 'Color personalizado',

  // Opciones de fuente
  fonts: {
    simsun: 'SimSun (宋体)',
    kaiti: 'KaiTi (楷体)',
    simhei: 'SimHei (黑体)',
    yahei: 'YaHei (微软雅黑)',
    stxingkai: 'STXingKai (华文行楷)',
    stzhongsong: 'STZhongSong (华文中宋)',
    stfangsong: 'STFangSong (华文仿宋)',
    arial: 'Arial',
    times: 'Times New Roman',
    georgia: 'Georgia'
  },
  
  // Opciones de forma
  shapes: {
    circle: 'Circular',
    ellipse: 'Elíptico',
    square: 'Cuadrado'
  },
  
  // Opciones de color
  colors: {
    red: 'Rojo',
    darkRed: 'Rojo oscuro',
    blue: 'Azul',
    navy: 'Azul marino',
    green: 'Verde',
    darkGreen: 'Verde oscuro',
    purple: 'Morado',
    magenta: 'Magenta',
    brown: 'Marrón',
    black: 'Negro',
    custom: 'Color personalizado'
  },
  
  // Guía de uso
  howToUse: 'Instrucciones de uso',
  instructions: {
    step1: 'Introduzca el texto que desea mostrar alrededor del sello, como nombre de empresa o nombre personal',
    step2: 'Seleccione el texto o imagen central, puede ser un asterisco, logotipo u otro símbolo',
    step3: 'Ajuste la forma, tamaño y color del sello y vea la vista previa',
    step4: 'Una vez satisfecho, haga clic en "Descargar imagen" para guardar su sello personalizado'
  },
  
  // Artículo
  article: {
    title: "Generador de Sellos: Cree fácilmente imágenes digitales de sellos",
    intro: {
      title: "Funcionalidad y aplicaciones del generador de sellos",
      p1: "<b>La herramienta Generador de Sellos</b> es una utilidad en línea para crear imágenes digitales de sellos sin necesidad de instalar software. Puede diseñar y generar todo tipo de sellos directamente desde su navegador. Especialmente útil para estampar documentos electrónicos con sellos, también se puede usar para diseñar logos, identidades corporativas o proyectos artísticos.",
      p2: "En aplicaciones prácticas, <b>los sellos digitales tienen múltiples usos</b>. Las empresas pueden crear sellos electrónicos con sus nombres para firmar contratos o documentos digitales; diseñadores pueden hacer sellos de estilo específico como parte de identidad visual; profesores pueden crear sellos personalizados para calificar trabajos; usuarios individuales pueden generar sellos de firma personalizados para añadir formalidad y estilo a sus documentos. El generador de sellos facilita todos estos usos sin requerir habilidades avanzadas de diseño.",
      p3: "<b>Comparado con los sellos tradicionales,</b> los generadores online ofrecen ventajas claras: primero, son completamente gratuitos, sin costes de fabricación física; segundo, el proceso es inmediato, sin esperas por producción o envío; tercero, permite ajustes y reiteraciones ilimitadas; cuarto, el sello digital generado se puede usar fácilmente en cualquier documento electrónico. Estas características hacen del generador de sellos una opción ideal para las necesidades modernas en entornos laborales y personales."
    },
    tutorial: {
      title: "Cómo usar el generador de sellos",
      intro: "Guía paso a paso para crear un sello personalizado:",
      step1: {
        title: "Paso 1: Configurar el texto del sello",
        description: "Primero, introduzca el texto que desea rodear el sello en el campo \"Texto del sello\". Esto suele ser el nombre de la empresa, departamento o persona. Se recomienda no exceder los 20 caracteres para garantizar legibilidad. Luego, en el campo \"Texto central\", introduzca el texto o símbolo central deseado, como un asterisco, el carácter '章' u otros símbolos representativos."
      },
      step2: {
        title: "Paso 2: Seleccionar fuente y forma",
        description: "Seleccione una fuente adecuada para el estilo del sello desde el menú desplegable. Fuentes como SimSun y KaiTi son ideales para sellos tradicionales, mientras que SimHei y YaHei dan un estilo más moderno. Luego seleccione la forma del sello. Los sellos empresariales chinos suelen ser circulares, mientras que los sellos privados tienden a ser cuadrados. La forma afecta el diseño general y la disposición del texto."
      },
      step3: {
        title: "Paso 3: Ajustar tamaño y color",
        description: "Use el control deslizante para ajustar el tamaño del sello según sus necesidades. Para usos estándar, se recomienda entre 200-300 píxeles. Seleccione el color del sello desde las opciones disponibles. Los sellos tradicionales suelen ser rojos, pero puede elegir azul, verde, morado o negro para cumplir requisitos específicos de diseño o identidad corporativa."
      },
      step4: {
        title: "Paso 4: Generar y descargar",
        description: "Tras configurar todas las opciones, haga clic en \"Generar sello\" para ver una vista previa. Si no queda conforme, puede ajustar los parámetros y regenerarlo. Una vez satisfecho con el resultado, pulse \"Descargar imagen\" para guardar el archivo en formato PNG con fondo transparente. Este archivo se puede usar directamente en documentos, diseños web o impresión. También puede pulsar \"Restablecer\" para volver a los valores predeterminados y comenzar de nuevo."
      }
    },
    faq: {
      title: "Preguntas frecuentes",
      q1: "¿Qué calidad tiene la imagen del sello? ¿Sirve para imprimir?",
      a1: "<b>Las imágenes generadas están en formato PNG</b>, con transparencia y bordes nítidos. Las imágenes predeterminadas de 300 píxeles son adecuadas para pantalla y usos básicos de impresión. Para impresión profesional, le recomendamos ajustar el tamaño a 400-500 píxeles. Las imágenes pueden insertarse en documentos Word, PDFs, programas de diseño o materiales impresos. Al estar generadas vectorialmente, no pierden calidad al escalar, manteniendo nitidez y apariencia profesional.",
      
      q2: "¿Tiene valor legal el sello generado con esta herramienta?",
      a2: "<b>Debe entenderse que los sellos generados con esta herramienta solo tienen valor de diseño, decorativo o informal</b>, sin validez legal. En China, los sellos electrónicos válidos legalmente deben emitirse por proveedores certificados y cumplir con la Ley de Firmas Electrónicas. Si necesita sellos con validez jurídica, consulte a proveedores especializados o abogados. Esta herramienta sirve perfectamente para documentos internos, prototipos de diseño, material educativo o creación personal donde no se requiere autenticación legal.",
      
      q3: "¿Cómo puedo añadir símbolos o imágenes especiales al centro del sello?",
      a3: "<b>En el campo de texto central puede introducir símbolos Unicode como ★, ✓, ❤, etc.</b>, que aparecerán centrados en el sello. Actualmente soporta uno o varios caracteres simples como imagen central. Para gráficos más complejos, puede editar posteriormente la imagen generada con herramientas como Photoshop o Canva. En futuras versiones planeamos añadir más iconos predefinidos y soporte para subir imágenes personalizadas, mejorando aún más las opciones de diseño.",
      
      q4: "¿Qué hacer si el texto aparece incompleto o solapado?",
      a4: "<b>Los problemas visuales suelen deberse a longitud del texto o tamaño del sello</b>. Si encuentra texto incompleto o solapado, pruebe estas soluciones: reduzca la cantidad de caracteres, especialmente en tamaños pequeños; aumente el tamaño del sello para dar más espacio al texto; experimente con diferentes fuentes, algunas más legibles en pequeño tamaño; o mueva parte del texto largo al centro del sello o use abreviaturas. Con estos ajustes podrá resolver la mayoría de los problemas de visualización y obtener sellos claros y estéticamente agradables."
    },
    relatedTools: {
      title: "Herramientas relacionadas",
      description: "Aquí hay otras herramientas útiles que complementan el trabajo con sellos y documentos:",
      tool1: {
        name: "Generador de código QR",
        url: "https://www.ufreetools.com/tool/qr-code-generator",   
        description: "Cree códigos QR personalizados con logo e estilo personalizable, útiles para marketing, tarjetas de visita y empaquetado."
      },
      tool2: {
        name: "Recortador de imágenes",
        url: "https://www.ufreetools.com/tool/image-cropper",   
        description: "Corte y ajuste el tamaño de imágenes fácilmente para adaptarlas a distintas necesidades."
      },
      tool3: {
        name: "Optimizador de SVG",
        url: "https://www.ufreetools.com/tool/svg-optimizer",   
        description: "Optimice código SVG para reducir tamaño de archivo y mejorar velocidad de carga web."
      }
    },
    resources: {
      title: "Recursos adicionales sobre diseño de sellos",
      resource1: {
        name: "Reglamento europeo sobre identidad electrónica y servicios de confianza (eIDAS)",
        url: "https://eur-lex.europa.eu/eli/reg/2014/910/oj",   
        description: "Marco legal europeo sobre firmas y sellos electrónicos, definiendo requisitos técnicos y validez jurídica."
      },
      resource2: {
        name: "Ley estadounidense de Firmas Electrónicas (ESIGN Act)",
        url: "https://www.ecfr.gov/cgi-bin/text-idx?SID=8e7f4f5d9b7f4f5d9b7f4f5d9b7f4f5d&mc=true&node=pt15.1.11&rgn=div5",
        description: "Marco normativo de EE.UU. sobre firmas y sellos electrónicos. Aunque no establece normas específicas para sellos, los archivos con sellos digitales pueden servir como evidencia legal válida."
      }
    }
  },
  templates: {
    custom: 'Personalizado',
    company: 'Sello corporativo',
    contract: 'Sello de contrato',
    finance: 'Sello financiero',
    legal: 'Sello oficial',
    personal: 'Sello personal'
  }
}