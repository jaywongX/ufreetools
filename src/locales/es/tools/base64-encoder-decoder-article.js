export default {
  title: "Codificador Decodificador Base64: Transforma y Protege Tus Datos",
  features: {
    title: "Entendiendo la Codificación y Decodificación Base64",
    description: "El <strong>codificador decodificador Base64</strong> es una herramienta esencial para convertir entre datos binarios y formatos de texto ASCII. Esta poderosa <strong>herramienta de codificación de datos</strong> transforma cualquier tipo de información binaria en una representación segura basada en texto usando solo 64 caracteres ASCII imprimibles (A-Z, a-z, 0-9, +, /), haciéndola ideal para transferir datos a través de sistemas basados en texto.<br><br>Nuestra <strong>herramienta de conversión Base64</strong> soporta múltiples métodos de entrada, incluyendo texto, archivos y entrada hexadecimal, junto con opciones avanzadas para codificación de caracteres (UTF-8 y GBK). La herramienta detecta automáticamente tipos de archivo como imágenes, documentos y paquetes durante la <strong>decodificación Base64</strong>, ofreciendo capacidades de vista previa para imágenes y soportando la descarga de archivos en varios formatos. Para archivos grandes, nuestro <strong>codificador Base64</strong> implementa un procesamiento eficiente en bloques con visualización del progreso en tiempo real.",
    useCases: {
      title: "Aplicaciones comunes de la codificación Base64",
      items: [
        "Incrustar archivos binarios como imágenes directamente en código HTML, CSS o JavaScript usando URIs de datos, permitiendo páginas web independientes sin activos externos",
        "Transmitir datos binarios de forma segura a través de sistemas de correo electrónico o protocolos solo de texto que podrían corromper caracteres no textuales",
        "Almacenar estructuras de datos complejas en cookies, localStorage u otros mecanismos de almacenamiento web que solo soportan formatos de texto",
        "Codificar credenciales de autenticación o tokens de API para su transmisión segura en cabeceras HTTP (Autenticación Básica)",
        "Convertir adjuntos binarios de archivos para incluirlos en XML, JSON u otros formatos de intercambio de datos basados en texto",
        "Crear cadenas de datos seguras para parámetros URL, evitando caracteres especiales que requerirían codificación URL"
      ]
    }
  },
  faq: {
    title: "Preguntas Frecuentes sobre la Codificación Base64",
    items: [
      {
        question: "¿Por qué los datos codificados en Base64 aumentan de tamaño comparados con el original?",
        answer: "La codificación Base64 aumenta el tamaño de los datos aproximadamente un 33% porque representa cada 3 bytes de datos binarios usando 4 bytes de texto ASCII. Esta característica fundamental ocurre porque utiliza solo 6 bits por carácter (2^6 = 64 valores posibles) en lugar de 8 bits. El aumento de tamaño es una compensación inevitable del intercambio para lograr compatibilidad de texto en sistemas que solo soportan caracteres ASCII. Para archivos grandes, este incremento debe considerarse al planificar requisitos de almacenamiento o transmisión."
      },
      {
        question: "¿Cuál es la diferencia entre la codificación Base64 estándar y la codificación Base64 segura para URLs?",
        answer: "La codificación Base64 estándar utiliza los caracteres '+' y '/' que tienen significados especiales en las URLs y pueden causar problemas cuando los datos codificados se incluyen en parámetros de URL. La codificación Base64 segura para URLs reemplaza estos caracteres con '-' y '_' respectivamente, haciendo que la cadena codificada sea segura para usarla en URLs sin escape adicional. Nuestro codificador Base64 incluye una opción para generar salida segura para URLs, permitiéndote elegir el formato adecuado según donde se utilice la cadena codificada."
      },
      {
        question: "¿Se puede usar Base64 para cifrar datos o mejorar la seguridad?",
        answer: "No, la codificación Base64 no es cifrado y no proporciona ninguna seguridad ni confidencialidad de datos. Es simplemente un esquema de codificación que transforma datos binarios en formato de texto. Base64 puede decodificarse fácilmente por cualquiera usando herramientas ampliamente disponibles, incluyendo nuestro decodificador Base64. Para propósitos de seguridad, debes usar algoritmos de cifrado adecuados (como AES, RSA) antes de aplicar codificación Base64 si se requiere confidencialidad. Base64 es principalmente para compatibilidad, no para seguridad."
      },
      {
        question: "¿Cómo puedo identificar texto codificado en Base64?",
        answer: "El texto codificado en Base64 normalmente tiene estas características: consiste solo de letras (A-Z, a-z), números (0-9) y usualmente los caracteres '+' y '/' (o '-' y '_' para la variante segura para URLs); su longitud siempre es múltiplo de 4 caracteres (a veces termina con '=' para rellenar); y suele aparecer como una cadena aparentemente aleatoria sin patrones de palabras naturales. Nuestro decodificador Base64 incluye validación para verificar si la entrada es Base64 válido antes de intentar decodificarlo."
      },
      {
        question: "¿Qué sucede si mi cadena Base64 carece de los caracteres de relleno?",
        answer: "La codificación Base64 a veces agrega caracteres de relleno ('=') al final para asegurar que la longitud de la cadena sea múltiplo de 4. Aunque las especificaciones estándar de Base64 lo requieren, muchos decodificadores modernos (incluido el nuestro) pueden manejar cadenas Base64 sin relleno calculando automáticamente el relleno correcto según la longitud de la cadena. Sin embargo, para máxima compatibilidad con todos los decodificadores Base64, es mejor práctica incluir el relleno adecuado al generar datos codificados en Base64."
      }
    ]
  },
  guide: {
    title: "Guía Paso a Paso para Usar el Codificador Decodificador Base64",
    steps: [
      "Selecciona el modo deseado haciendo clic en 'Codificar' o 'Decodificar' en la parte superior de la interfaz",
      "Para codificar, selecciona tu método de entrada: 'Texto' para introducir texto plano, 'Archivo' para subir archivos binarios o 'Hex' para representación en cadena hexadecimal",
      "Si estás codificando un archivo, puedes opcionalmente marcar 'Agregar encabezado de imagen Base64' para incluir el prefijo apropiado de Data URI para uso directo en contextos web",
      "Para decodificar, selecciona 'Texto' para introducir una cadena Base64 o 'Archivo' para cargar un archivo de texto que contenga datos Base64",
      "Al decodificar, puedes seleccionar la codificación de caracteres deseada (UTF-8 o GBK) desde el menú desplegable para manejar correctamente caracteres internacionales",
      "Introduce tus datos o carga el archivo según el método de entrada seleccionado",
      "Haz clic en el botón 'Codificar' o 'Decodificar' para procesar tus datos - el resultado aparecerá en el campo de salida debajo",
      "Para imágenes decodificadas, usa el interruptor 'Mostrar Imagen' para ver una vista previa, o usa la opción de descarga para guardar el contenido decodificado como archivo en el formato deseado"
    ]
  },
  conclusion: "El Codificador Decodificador Base64 es una herramienta versátil para cualquiera que trabaje con datos que necesiten transportarse a través de sistemas basados únicamente en texto. Ya seas un desarrollador web incrustando imágenes en CSS, un ingeniero de sistemas enviando datos binarios a través de protocolos de texto, o simplemente necesitas decodificar una cadena Base64 que encontraste, esta herramienta proporciona una solución eficiente con opciones avanzadas para satisfacer tus requisitos específicos. Al soportar múltiples métodos de entrada, codificaciones de caracteres y formatos de archivo, nuestra utilidad Base64 ayuda a cerrar la brecha entre sistemas binarios y basados en texto en los entornos informáticos actuales."
}
