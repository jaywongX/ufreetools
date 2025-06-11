import wordShuffler from "./word-shuffler";

export default {
  name: "Generador de Números de ID Chino",
  description: "Genera números válidos de tarjeta de identificación china (Tarjeta de Identidad de Residente) para propósitos de prueba",
  settings: "Configuración del Generador",
  region: "Región",
  randomRegion: "Región Aleatoria",
  searchRegion: "Buscar región...",
  birthDateRange: "Rango de Fecha de Nacimiento",
  from: "Desde",
  to: "Hasta",
  gender: "Género",
  randomGender: "Aleatorio",
  male: "Masculino",
  female: "Femenino",
  quantity: "Cantidad a Generar",
  generate: "Generar Números de ID",
  results: "Resultados Generados",
  generatedIds: "Números de ID Generados",
  copyAll: "Copiar Todo",
  copy: "Copiar",
  noResults: "Aún no se han generado números de ID. Configure los ajustes y haga clic en 'Generar'.",
  formatInfo: "Información de Formato de Tarjeta ID",
  formatDescription: "Los números de ID chinos constan de 18 dígitos con la siguiente estructura:",
  regionCode: "Código de región administrativa",
  birthDate: "Fecha de nacimiento (AAAAMMDD)",
  sequenceCode: "Código secuencial (impar para hombre, par para mujer)",
  checkDigit: "Dígito de verificación (0-9, X)",
  export: "Exportar",
  exportAsTxt: "Exportar como TXT",
  exportAsCsv: "Exportar como CSV",
  exportAsExcel: "Exportar como Excel",
  idNumber: "Número de ID",
  copiedToClipboard: "¡Copiado al portapapeles!",
  allCopiedToClipboard: "¡Todos los ID copiados al portapapeles!",
  province: "Provincia",
  city: "Ciudad",
  selectProvince: "Seleccionar provincia",
  selectCity: "Seleccionar ciudad",
  multiSelect: "Habilitar selección múltiple",
  clearSelection: "Limpiar selección",
  regions: {
    // Provinces and Municipalities
    "beijing": "Pekín",
    "tianjin": "Tianjin",
    "hebei": "Hebei",
    "shanxi": "Shanxi",
    "inner_mongolia": "Mongolia Interior",
    "liaoning": "Liaoning",
    "jilin": "Jilin",
    "heilongjiang": "Heilongjiang",
    "shanghai": "Shanghái",
    "jiangsu": "Jiangsu",
    "zhejiang": "Zhejiang",
    "anhui": "Anhui",
    "fujian": "Fujian",
    "jiangxi": "Jiangxi",
    "shandong": "Shandong",
    "henan": "Henan",
    "hubei": "Hubei",
    "hunan": "Hunan",
    "guangdong": "Guangdong",
    "guangxi": "Guangxi",
    "hainan": "Hainan",
    "chongqing": "Chongqing",
    "sichuan": "Sichuan",
    "guizhou": "Guizhou",
    "yunnan": "Yunnan",
    "tibet": "Tíbet",
    "shaanxi": "Shaanxi",
    "gansu": "Gansu",
    "qinghai": "Qinghai",
    "ningxia": "Ningxia",
    "xinjiang": "Xinjiang",
    
    // Cities will follow the same pattern as the English version
    // with their Spanish translations
    "dongcheng": "Distrito Dongcheng",
    "xicheng": "Distrito Xicheng",
    // ...and so on for all other cities
  },
  
  article: {
    introduction: {
      title: "Generador de Números de ID Chino: Qué Es y Cómo Funciona",
      p1: "El Generador de Números de ID Chino es una herramienta especializada diseñada para crear números válidos de Tarjeta de Identidad de Residente chino con fines de prueba y desarrollo. Estos números de ID generados siguen el formato oficial y las reglas de validación establecidas por el gobierno chino, lo que los hace estructuralmente válidos aunque completamente ficticios.",
      p2: "Esta herramienta es particularmente valiosa para desarrolladores de software, probadores de control de calidad y diseñadores de UI/UX que necesitan trabajar con números de ID chinos en sus aplicaciones sin usar datos personales reales. Los números de ID generados contienen información incrustada como códigos de región, fechas de nacimiento y detalles de género, todo cumpliendo con el formato oficial.",
      p3: "Al proporcionar opciones para personalizar la región, el rango de fechas de nacimiento, el género y la cantidad, nuestro generador de ID chino ofrece flexibilidad mientras mantiene el cumplimiento con los formatos requeridos y los algoritmos de validación.",
      structureTitle: "Entendiendo la Estructura del Número de ID Chino",
      structureDesc: "Cada número de ID chino consta de 18 dígitos que siguen un patrón específico:"
    },
    useCases: {
      title: "Aplicaciones Prácticas del Generador de Números de ID",
      case1: {
        title: "Pruebas y Desarrollo de Software",
        description: "Para desarrolladores que trabajan en sistemas que necesitan validar números de ID chinos, esta herramienta genera datos de prueba que pasan verificaciones de validación sin usar información personal real. Ideal para pruebas de validación de formularios, población de bases de datos y pruebas de API."
      },
      case2: {
        title: "Diseño de UI/UX y Creación de Prototipos",
        description: "Los diseñadores pueden usar estos números de ID generados al crear maquetas y prototipos para aplicaciones que manejarán identificación de usuarios chinos, asegurando una representación de datos realista sin preocupaciones de privacidad."
      },
      case3: {
        title: "Propósitos Educativos",
        description: "Estudiantes y educadores que aprenden sobre estructuras de datos, algoritmos de validación o sistemas administrativos chinos pueden usar esta herramienta para entender cómo los números de ID codifican información y cómo funciona la verificación."
      },
      case4: {
        title: "Cumplimiento de Privacidad de Datos",
        description: "Las organizaciones pueden evitar usar números de ID reales en entornos que no son de producción, ayudando a cumplir con las regulaciones de protección de datos mientras siguen teniendo datos de prueba realistas para sus sistemas."
      }
    },
    guide: {
      title: "Cómo Usar el Generador de Números de ID Chino",
      step1: {
        title: "Seleccionar Configuración de Región",
        description: "Elija entre regiones aleatorias o seleccione provincias y ciudades específicas. Puede habilitar la selección múltiple para generar números de ID de diferentes regiones o buscar ubicaciones específicas usando el cuadro de búsqueda."
      },
      step2: {
        title: "Establecer Rango de Fecha de Nacimiento",
        description: "Defina el rango de fechas de nacimiento que desea en sus números de ID generados. Esto le permite crear números de ID para grupos de edad específicos o períodos de tiempo, desde fechas históricas hasta más recientes."
      },
      step3: {
        title: "Elegir Opción de Género",
        description: "Seleccione si desea generar números de ID de género aleatorio, o específicamente IDs masculinos o femeninos. En los números de ID chinos, el género está codificado en el número de secuencia (impar para hombres, par para mujeres)."
      },
      step4: {
        title: "Generar y Exportar",
        description: "Especifique cuántos números de ID necesita y haga clic en el botón Generar. Una vez generados, puede copiar números individuales, copiar todos a la vez, o exportar los resultados en formatos TXT, CSV o Excel para uso posterior."
      },
      tip: "Para obtener resultados óptimos, considere los requisitos específicos de su escenario de prueba. Si está probando un sistema con restricciones de edad, ajuste el rango de fecha de nacimiento en consecuencia. Para pruebas regionales, seleccione las provincias específicas relevantes para su aplicación.",
      additionalTip: "Para verificar la corrección de los números de ID generados, puede usar nuestra",
      hashCalculatorLink: "herramienta de Calculadora de Hash"
    },
    faq: {
      title: "Preguntas Frecuentes sobre Números de ID Chinos",
      q1: "¿Son legalmente válidos los números de ID chinos generados?",
      a1: "No, los números de ID generados son estructuralmente válidos (pasan la validación de formato y verificación de suma de comprobación) pero son completamente ficticios. Se generan solo con fines de prueba, educativos y de demostración. Usar estos números para identificación oficial o para tergiversar la identidad es ilegal.",
      q2: "¿Cómo codifica el número de ID chino la información de género?",
      a2: "La información de género en los números de ID chinos está codificada en el penúltimo dígito (el dígito 17) del número de 18 dígitos. Si este dígito es impar (1, 3, 5, 7, 9), el ID pertenece a un hombre. Si es par (2, 4, 6, 8, 0), el ID pertenece a una mujer.",
      q3: "¿Puedo generar números de ID para regiones específicas de China?",
      a3: "Sí, nuestra herramienta permite seleccionar provincias y ciudades específicas en toda China. Puede elegir regiones individuales o habilitar la selección múltiple para generar números de ID de múltiples regiones simultáneamente. Incluimos todas las ciudades a nivel de prefectura y divisiones administrativas provinciales.",
      q4: "¿Cuál es el significado del último dígito en un número de ID chino?",
      a4: "El último dígito (dígito 18) es un dígito de suma de comprobación calculado en base a los 17 dígitos anteriores utilizando un algoritmo específico. Esta suma de comprobación ayuda a verificar la validez del ID y puede ser 0-9 o X (que representa 10).",
      q5: "¿Con qué frecuencia se actualizan los formatos de números de ID chinos?",
      a5: "El formato de 18 dígitos ha sido el estándar desde octubre de 1999. Si bien el formato en sí rara vez cambia, los códigos de región administrativa pueden actualizarse a medida que China reorganiza sus divisiones administrativas. Nuestro generador utiliza códigos de región actualizados.",
      officialSource: "Ministerio de Seguridad Pública de China (Sitio Web Oficial)"
    },
    resources: {
      title: "Herramientas y Recursos Relacionados",
      passwordGenerator: "Generador de Contraseñas - Generar contraseñas aleatorias para pruebas y desarrollo",
      wordShuffler: "Desordenador de Palabras - Desordenar palabras, frases o líneas de texto, manteniendo el formato",
      hashCalculator: "Calculadora de Hash - Verifique la integridad de los datos con múltiples algoritmos hash",
      wikipediaLink: "Wikipedia: Tarjeta de Identidad de Residente (China) - Información detallada sobre el sistema de tarjeta de ID chino"
    },
    conclusion: {
      title: "Conclusión",
      p1: "El Generador de Números de ID Chino proporciona un recurso valioso para desarrolladores, probadores y diseñadores que trabajan con sistemas que necesitan manejar identificación china. Al generar números de ID de formato válido que no pertenecen a personas reales, ayuda a equilibrar la necesidad de datos de prueba realistas con consideraciones de privacidad y éticas.",
      p2: "Ya sea que esté desarrollando una nueva aplicación, probando sistemas existentes o creando materiales educativos, esta herramienta ofrece la flexibilidad y precisión necesarias para trabajar con confianza con formatos de números de ID chinos respetando los principios de privacidad de datos.",
      disclaimer: "Descargo de responsabilidad: Esta herramienta se proporciona únicamente para fines legítimos de prueba, educación y desarrollo. Los números de ID generados nunca deben usarse para fraude de identidad, tergiversación o cualquier actividad ilegal."
    }
  }
}