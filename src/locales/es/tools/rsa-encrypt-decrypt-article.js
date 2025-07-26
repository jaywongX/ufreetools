export default {
  title: "Guía de la Herramienta de Encriptación y Desencriptación RSA: Asegura tus Datos con Criptografía de Clave Pública",
  introTitle: "Comprendiendo la Encriptación RSA",
  intro1: "La encriptación RSA es un potente algoritmo de criptografía asimétrica que utiliza un par de claves —pública y privada— para proteger datos sensibles. Nuestra <strong>herramienta de encriptación RSA</strong> proporciona una interfaz fácil de usar para realizar operaciones de encriptación y desencriptación RSA directamente en tu navegador, sin enviar tus datos a ningún servidor.",
  intro2: "A diferencia de los métodos de encriptación simétrica que utilizan una sola clave, la criptografía RSA utiliza pares de claves matemáticamente relacionadas, donde los datos encriptados con una clave pública solo pueden ser desencriptados con la clave privada correspondiente. Esto hace que RSA sea ideal para comunicaciones seguras y firmas digitales en diversas aplicaciones.",
  intro3: "Nuestra herramienta admite la generación de claves con varias longitudes de bits (1024, 2048, 3072 y 4096 bits), diferentes métodos de relleno (PKCS#1 v1.5 y OAEP) y múltiples formatos de entrada/salida (texto, Base64 y hexadecimal). Esta flexibilidad la hace adecuada tanto para fines educativos como para necesidades criptográficas prácticas.",
  
  useCasesTitle: "Aplicaciones Prácticas de la Encriptación RSA",
  useCase1: "<strong>Comunicación Segura</strong>: Intercambia mensajes confidenciales encriptándolos con la clave pública del destinatario, asegurando que solo el destinatario previsto con la clave privada pueda desencriptar el mensaje.",
  useCase2: "<strong>Verificación de Certificados</strong>: Genera pares de claves para probar implementaciones de certificados digitales, infraestructuras PKI o configuraciones SSL/TLS.",
  useCase3: "<strong>Protección de Datos</strong>: Encripta archivos sensibles antes de almacenarlos en servicios en la nube o transmitirlos a través de redes no seguras, manteniendo la confidencialidad incluso si los datos encriptados son interceptados.",
  useCase4: "<strong>Fines Educativos</strong>: Aprende y demuestra los principios de la criptografía de clave pública, explorando cómo funciona la encriptación RSA en la práctica con diferentes tamaños de clave y métodos de relleno.",
  
  faqTitle: "Preguntas Frecuentes",
  
  faq1q: "¿Cuál es la diferencia entre RSA y otros algoritmos de encriptación?",
  faq1a: "RSA es un <strong>algoritmo de encriptación asimétrica</strong> que utiliza un par de claves pública-privada, mientras que los algoritmos simétricos como AES utilizan una única clave compartida. Este enfoque de par de claves permite a RSA proporcionar intercambio seguro de claves y firmas digitales, lo que los algoritmos simétricos no pueden hacer. Sin embargo, RSA es computacionalmente más intensivo y típicamente se utiliza para encriptar pequeñas cantidades de datos o para el intercambio de claves, mientras que los algoritmos simétricos son más rápidos y se utilizan para la encriptación de grandes volúmenes de datos.",
  
  faq2q: "¿Qué tamaño de clave RSA debería elegir para mayor seguridad?",
  faq2a: "Para los requisitos de seguridad modernos, recomendamos al menos claves RSA de 2048 bits. Las claves de 1024 bits se consideran vulnerables a atacantes bien financiados y deben evitarse para datos sensibles. Las claves de 3072 bits proporcionan una seguridad aproximadamente equivalente a la encriptación simétrica de 128 bits (recomendada por el NIST para protección más allá de 2030), mientras que las claves de 4096 bits ofrecen un margen de seguridad adicional para aplicaciones altamente sensibles. Sin embargo, los tamaños de clave más grandes requieren más recursos computacionales tanto para la generación de claves como para las operaciones de encriptación/desencriptación.",
  
  faq3q: "¿Cuál es la diferencia entre el relleno PKCS#1 v1.5 y OAEP?",
  faq3a: "PKCS#1 v1.5 es un esquema de relleno más antiguo que, aunque es ampliamente compatible, tiene vulnerabilidades conocidas a ciertos tipos de ataques (como el ataque de Bleichenbacher). <strong>OAEP (Optimal Asymmetric Encryption Padding)</strong> es un esquema de relleno más nuevo y seguro diseñado para proporcionar seguridad semántica contra ataques de texto cifrado elegido adaptativamente. Para nuevas aplicaciones, recomendamos usar el relleno OAEP siempre que sea posible, pero PKCS#1 v1.5 sigue estando disponible para compatibilidad con sistemas heredados.",
  
  faq4q: "¿Cómo puedo almacenar y compartir mis claves RSA de forma segura?",
  faq4a: "Para <strong>claves privadas RSA</strong>, almacénalas siempre de forma segura con fuertes controles de acceso y, idealmente, encriptación. Nunca compartas claves privadas ni las almacenes en texto plano en sistemas no seguros. Para <strong>claves públicas RSA</strong>, aunque están diseñadas para ser compartidas, verifica la autenticidad de las claves públicas que recibes de otros para prevenir ataques de intermediario. Nuestra herramienta te permite exportar claves en formato PEM estándar, que puede ser importado en la mayoría de aplicaciones y bibliotecas criptográficas.",
  
  faq5q: "¿Cuáles son las limitaciones de la encriptación RSA basada en navegador?",
  faq5a: "Las herramientas basadas en navegador como la nuestra tienen ciertas limitaciones: (1) <strong>Restricciones de rendimiento</strong> - la generación de claves y la encriptación/desencriptación de archivos grandes pueden ser más lentas que en aplicaciones nativas; (2) <strong>Limitaciones de memoria</strong> - los navegadores restringen la cantidad de memoria que se puede utilizar, lo que potencialmente afecta a operaciones muy grandes; (3) <strong>Restricciones de biblioteca criptográfica</strong> - utilizamos bibliotecas estándar de la industria (Forge), pero las implementaciones del navegador pueden variar ligeramente. Para aplicaciones de seguridad críticas que requieren alto rendimiento o manejan archivos muy grandes, considera usar software criptográfico dedicado.",
  
  tutorialTitle: "Guía Paso a Paso para Usar la Herramienta de Encriptación RSA",
  tutorialIntro: "Sigue esta guía completa para utilizar eficazmente nuestra herramienta de encriptación y desencriptación RSA para proteger tus datos sensibles:",
  
  step1Title: "Paso 1: Generar o Importar Par de Claves RSA",
  step1: "Comienza generando un nuevo par de claves RSA o importando claves existentes. Para generar nuevas claves, selecciona el tamaño de clave deseado (se recomienda 2048 bits o superior para seguridad) y haz clic en el botón <strong>Generar Par de Claves</strong>. La herramienta creará tanto la clave pública como la privada en formato PEM. Alternativamente, puedes importar claves existentes haciendo clic en el botón Importar o usando el área de arrastrar y soltar para los campos de clave pública o privada.",
  
  step2Title: "Paso 2: Encriptar Datos Usando la Clave Pública",
  step2: "Para encriptar datos, asegúrate de tener una clave pública en el campo correspondiente. Selecciona el modo <strong>Encriptar</strong>, elige tu método de relleno preferido (se recomienda OAEP para mayor seguridad) y selecciona tu formato de entrada. Introduce el mensaje de texto plano que deseas encriptar en el campo de entrada. También puedes importar texto plano desde un archivo usando el botón de importar o el área de arrastrar y soltar. Haz clic en el botón <strong>Encriptar</strong> para procesar tus datos. La salida encriptada aparecerá en formato Base64 por defecto, pero puedes cambiar a formato Hex usando las opciones de formato de salida.",
  
  step3Title: "Paso 3: Desencriptar Datos Usando la Clave Privada",
  step3: "Para desencriptar datos previamente encriptados, asegúrate de tener la clave privada correcta en el campo de clave privada. Selecciona el modo <strong>Desencriptar</strong>, elige el mismo método de relleno que se utilizó para la encriptación y selecciona el formato de entrada apropiado (generalmente Base64 para datos encriptados). Pega el texto encriptado en el campo de entrada o impórtalo desde un archivo. Haz clic en el botón <strong>Desencriptar</strong> para recuperar el texto plano original. La salida desencriptada se mostrará en el campo de salida y puede ser copiada o descargada según sea necesario.",
  
  step4Title: "Paso 4: Exportar y Gestionar Claves",
  step4: "Después de generar o importar claves, puedes exportarlas para uso futuro haciendo clic en el botón <strong>Exportar</strong> junto a cada campo de clave. Esto guarda la clave en formato PEM estándar, que es compatible con la mayoría de aplicaciones y bibliotecas criptográficas. Recuerda almacenar tu clave privada de forma segura y nunca compartirla con partes no autorizadas. La clave pública, sin embargo, puede ser distribuida libremente a cualquiera que necesite encriptar datos para ti.",
  
  relatedToolsTitle: "Herramientas Criptográficas Relacionadas",
  relatedTool1: "Calculadora de Hash",
  relatedTool1Desc: "Genera valores hash seguros utilizando varios algoritmos como SHA-256, SHA-512 y más.",
  relatedTool2: "Generador de Contraseñas",
  relatedTool2Desc: "Crea contraseñas fuertes y aleatorias para mejorar tu seguridad en línea.",
  relatedTool3: "Herramienta de Encriptación Simétrica",
  relatedTool3Desc: "Encripta datos utilizando algoritmos simétricos como AES para un procesamiento más rápido de archivos más grandes.",
  relatedTool4: "Codificador/Decodificador Base64",
  relatedTool4Desc: "Convierte datos binarios a formato Base64 y viceversa para una transmisión segura.",
  
  resourcesTitle: "Recursos Adicionales",
  resource1: "NIST FIPS 186-4: Estándar de Firma Digital (DSS)",
  resource2: "RFC 8017: PKCS #1: Especificaciones de Criptografía RSA Versión 2.2",
  resource3: "NIST SP 800-57: Recomendación para la Gestión de Claves"
}
