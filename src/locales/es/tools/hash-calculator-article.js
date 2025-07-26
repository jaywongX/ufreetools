export default {
  title: "Calculadora de Hash: Generar y verificar resúmenes criptográficos",
  intro: "Nuestra <strong>calculadora de hash en línea</strong> ofrece una forma sencilla de generar resúmenes criptográficos para cualquier texto o archivo. Esta herramienta gratuita soporta múltiples algoritmos, incluyendo MD5, SHA-1, SHA-256, SHA-512, RIPEMD, BLAKE y muchos más.",
  features: {
    title: "Entendiendo las funciones hash y sus aplicaciones",
    description: "<strong>Las funciones hash</strong> son algoritmos matemáticos que convierten cualquier cantidad de datos en una cadena de tamaño fijo. La <strong>calculadora hash de UFreeTools</strong> le permite generar estas huellas digitales en tiempo real, útiles para validación de seguridad, integridad de datos o aplicaciones blockchain.<br><br>A diferencia del cifrado, las funciones hash son unidireccionales – convierten datos en un <strong>resumen hash</strong> único que no puede revertirse. Una propiedad importante es que cambios mínimos en la entrada generan salidas completamente distintas, lo que hace que estos <strong>algoritmos hash</strong> sean ideales para validar integridad de datos y detectar modificaciones no autorizadas.",
    useCases: {
      title: "Casos prácticos de uso",
      items: [
        "<strong>Verificación de integridad</strong>: Antes de instalar software descargado, puede usar nuestro <strong>verificador de hash</strong> comparando su valor hash con el proporcionado por el desarrollador. Esto asegura que el archivo no haya sido alterado ni contenga malware.",
        "<strong>Detección de duplicados</strong>: Los sistemas de almacenamiento usan <strong>hashes</strong> para identificar archivos repetidos, independientemente del nombre. Nuestra herramienta ayuda a calcular estos identificadores fácilmente.",
        "<strong>Seguridad de contraseñas</strong>: Sistemas modernos almacenan <strong>hashes de contraseñas</strong>, no las contraseñas directamente. Aunque esta herramienta ilustra este proceso, en producción deben usarse funciones especializadas como bcrypt o Argon2 con salting.",
        "<strong>Forense digital</strong>: Investigadores usan la <strong>calculadora de hash</strong> para crear huellas de archivos, estableciendo pruebas inequívocas de autenticidad durante investigaciones.",
        "<strong>Blockchain</strong>: Las <strong>funciones hash</strong> son fundamentales en tecnologías descentralizadas, con SHA-256 y Keccak-256 protegiendo transacciones en Bitcoin y Ethereum respectivamente.",
        "<strong>Validación de contenido</strong>: Autores pueden publicar <strong>resúmenes hash</strong> de sus obras originales, dando a otros una forma de verificar que poseen la versión exacta e inalterada."
      ]
    },
    toolAdvantages: {
      title: "Ventajas de nuestra calculadora de hash",
      items: [
        "Soporta más de 30 algoritmos, desde MD5 hasta opciones avanzadas como BLAKE3",
        "Todo el procesamiento ocurre localmente, sin enviar datos fuera de su dispositivo",
        "Permite verificar hashes contra valores esperados, asegurando integridad",
        "Resultados en múltiples formatos: hexadecimal y Base64",
        "Funciona tanto con texto como con archivos de hasta 100MB",
        "Compare resultados de múltiples algoritmos simultáneamente"
      ]
    }
  },
  faq: {
    title: "Preguntas Frecuentes sobre funciones hash",
    items: [
      {
        question: "¿Cuál es la diferencia entre MD5, SHA-1 y SHA-256?",
        answer: "Son diferentes algoritmos de hash criptográfico con distintos niveles de seguridad.<strong>MD5</strong> genera 128 bits (16 bytes) y está roto por colisiones.<strong>SHA-1</strong> produce 160 bits (20 bytes), también considerado inseguro tras avances en criptoanálisis.<strong>SHA-256</strong> forma parte de la familia SHA-2, con 256 bits (32 bytes), aún seguro. Recomendamos SHA-256 o SHA-512 para aplicaciones críticas. Puede encontrar más información en el sitio del <a href='https://csrc.nist.gov/projects/hash-functions'  target='_blank'>NIST</a>."
      },
      {
        question: "¿Qué tan seguras son las funciones hash criptográficas?",
        answer: "La seguridad depende de tres propiedades: resistencia a colisiones (no encontrar dos entradas con mismo hash), resistencia a preimagen (no encontrar entrada a partir del hash) y resistencia a segunda preimagen. Algoritmos como <strong>SHA-256</strong>, <strong>SHA-512</strong> y <strong>SHA3</strong> son actualmente seguros, mientras que MD5 y SHA-1 tienen fallos conocidos. Para aplicaciones seguras, siempre use SHA-256 o superiores y siga recursos como <a href='https://www.schneier.com/blog/archives/2005/02/cryptanalysis_o.html'  target='_blank'>el blog de Bruce Schneier</a> para estar informado sobre avances en criptoanálisis."
      },
      {
        question: "¿Puedo usar esta calculadora para verificar la integridad de archivos?",
        answer: "Sí, nuestra <strong>calculadora de hash</strong> sirve perfectamente para esto. Muchos proveedores publican hashes junto a sus archivos descargables. Para verificar: 1) Seleccione el archivo, 2) Elija el algoritmo usado (habitualmente SHA-256), 3) Calcule el hash, 4) Compare con el hash publicado. Si coincide, el archivo es idéntico al original. Esta herramienta procesa archivos localmente, preservando privacidad y seguridad. Es útil para descargar archivos desde <a href='https://ubuntu.com/download/desktop/thank-you'  target='_blank'>Ubuntu</a> o <a href='https://www.python.org/downloads/'  target='_blank'>Python</a>."
      },
      {
        question: "¿Sirve esta herramienta para hashing de contraseñas?",
        answer: "Aunque esta <strong>generadora de hash</strong> ilustra cómo funciona el hashing, para almacenar contraseñas en producción deben usarse funciones especializadas como bcrypt, Argon2 o PBKDF2. Estas añaden sal (datos aleatorios por contraseña) y estiramientos (operaciones lentas deliberadamente) para evitar ataque de fuerza bruta. Esta herramienta sirve fines educativos o de prueba, pero en sistemas reales deben seguirse mejores prácticas de seguridad. Más info en <a href='https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html'  target='_blank'>OWASP Password Storage Cheatsheet</a>."
      },
      {
        question: "¿Cómo comparo o verifico hashes en distintos formatos?",
        answer: "Nuestra <strong>herramienta de verificación</strong> facilita comparar hashes incluso si están en diferentes formatos. Muestra resultados en hexadecimal minúscula, mayúscula y codificación Base64. Para verificar: 1) Calcule el hash del dato, 2) Pegue el hash a comparar, 3) Se ignora la diferencia de mayúsculas/minúsculas. Si el hash referencia está en otro formato, debe usarse el mismo algoritmo para comparar, ya que cada uno produce salidas totalmente distintas."
      },
      {
        question: "¿Qué algoritmo debo elegir según mis necesidades?",
        answer: "La elección depende de su caso:<br><strong>General y alta seguridad:</strong> SHA-256 equilibra bien seguridad y rendimiento.<br><strong>Blockchain:</strong> SHA-256 (Bitcoin) o Keccak-256 (Ethereum).<br><strong>Datos muy sensibles:</strong> SHA-512 o SHA3-512.<br><strong>Rendimiento crítico:</strong> BLAKE2 o BLAKE3 ofrecen gran velocidad y seguridad razonable.<br><strong>Compatibilidad con legacy:</strong> SHA-1 o MD5 pueden ser necesarios, pero evite usarlos en nuevos proyectos por vulnerabilidades.<br><strong>Checksum rápido:</strong> CRC32 es rápido pero solo para detección de errores, no para seguridad.<br>En duda, <strong>SHA-256</strong> es una opción segura y universal. Pruébelo con nuestra <a href='https://www.ufreetools.com/tools/hash-calculator'  target='_blank'>calculadora de hash</a>."
      }
    ]
  },
  guide: {
    title: "Guía paso a paso para usar la calculadora de hash",
    intro: "Instrucciones claras para generar y verificar hashes:",
    step1: "<strong>Seleccione tipo de entrada</strong>: Elija entre 'Texto' o 'Archivo'. Use 'Texto' para cadenas pequeñas y 'Archivo' para documentos, imágenes u otros.",
    step2: "<strong>Elija el algoritmo</strong>: Seleccione el algoritmo deseado del menú desplegable. SHA-256 es una buena opción por defecto, pero puede elegir otros por compatibilidad.",
    step3: "<strong>Introduzca los datos</strong>: Para texto, escriba o pegue el contenido. Para archivos, arrástrelos o haga clic para seleccionarlos.",
    step4: "<strong>Defina codificación</strong>: Si usa texto, seleccione UTF-8 (predeterminado) o Latin1 según sea necesario.",
    step5: "<strong>Calcule el hash</strong>: Haga clic en \"Calcular hash\". El sistema usará el algoritmo seleccionado y mostrará el resultado.",
    step6: "<strong>Revise y copie</strong>: Los resultados se muestran en varios formatos (hexadecimal y Base64). Haga clic en \"Copiar\" para transferir el valor a su portapapeles.",
    step7: "<strong>Verifique (opcional)</strong>: En la sección de verificación, ingrese un hash externo para compararlo con el generado. El sistema indicará si hay coincidencia.",
    additionalTips: "Para archivos grandes, el tiempo de procesamiento puede variar según su dispositivo. Como todo ocurre en su navegador, sus datos permanecen privados."
  },
  relatedTools: {
    title: "Herramientas relacionadas",
    tools: [
      {
        name: 'Generador de contraseñas',
        description: 'Cree contraseñas seguras para sus cuentas',
        url: 'https://www.ufreetools.com/tools/password-generator' 
      },
      {
        name: 'Codificador/decodificador de texto',
        description: 'Convierta texto entre Base64, URL y codificaciones HTML',
        url: 'https://www.ufreetools.com/tools/text-encoder-decoder' 
      },
      {
        name: 'Convertidor de archivos',
        description: 'Transforme archivos entre diferentes formatos',
        url: 'https://www.ufreetools.com/tools/file-converter' 
      }
    ]
  },
  conclusion: "La calculadora de hash proporciona una herramienta potente y accesible para aprovechar funciones hash criptográficas en diversas aplicaciones, desde verificación básica de archivos hasta implementaciones avanzadas de seguridad. Ofreciendo múltiples algoritmos estándar y una interfaz intuitiva, esta herramienta conecta conceptos criptográficos complejos con usos cotidianos. Ya sea un desarrollador implementando funcionalidad segura, un profesional verificando archivos o alguien curioso sobre funcionamiento de hashes, esta calculadora pone potentes herramientas criptográficas a su alcance directamente en el navegador. En un mundo donde la seguridad y la integridad de datos son prioritarias, comprender y usar hashes se vuelve cada vez más relevante."
}
