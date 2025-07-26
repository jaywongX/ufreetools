export default {
  title: 'Cifrado y Descifrado SM2: Guía Completa',
  introduction: {
    title: '¿Qué es el Cifrado SM2 y Cómo Funciona?',
    p1: 'El cifrado SM2 es un potente algoritmo criptográfico de clave pública desarrollado como parte de los estándares de criptografía comercial de China. Creado por la Oficina de Administración de Criptografía Comercial China, el cifrado SM2 ofrece una seguridad comparable a RSA-2048 pero con longitudes de clave más cortas y un rendimiento mejorado, lo que lo hace ideal para comunicaciones digitales seguras y protección de datos.',
    p2: 'A diferencia de los métodos de cifrado simétrico, SM2 utiliza un par de claves: una clave pública para el cifrado que puede compartirse libremente, y una clave privada para el descifrado que debe mantenerse en secreto. Este enfoque asimétrico resuelve el problema de distribución de claves que se encuentra en los métodos de cifrado tradicionales, permitiendo a las partes comunicarse de forma segura sin un secreto compartido previamente.',
    p3: 'Nuestra herramienta de cifrado SM2 proporciona una interfaz fácil de usar para generar pares de claves, cifrar información sensible y descifrar mensajes cifrados con SM2 sin requerir conocimientos criptográficos especializados. Esto hace que la tecnología de cifrado avanzada sea accesible para todos, desde profesionales de ciberseguridad hasta personas preocupadas por la privacidad de los datos.'
  },
  useCases: {
    title: 'Aplicaciones y Casos de Uso del Cifrado SM2',
    item1: 'Comunicación segura en sistemas bancarios y financieros, especialmente en regiones donde SM2 es un estándar regulatorio',
    item2: 'Protección de comunicaciones sensibles gubernamentales y militares',
    item3: 'Sistemas de firma digital para autenticación de documentos y no repudio',
    item4: 'Asegurando datos en tránsito para plataformas de comercio electrónico y servicios en línea',
    item5: 'Implementación en sistemas de certificados digitales e infraestructura PKI para verificación de identidad'
  },
  guide: {
    title: 'Cómo Usar la Herramienta de Cifrado y Descifrado SM2',
    step1: {
      title: 'Paso 1: Gestión de Claves',
      description: 'Comience configurando sus claves de cifrado. Tiene tres opciones:',
      option1: 'Haga clic en "Generar Nuevas Claves" para crear un nuevo par de claves SM2',
      option2: 'Importe claves existentes haciendo clic en el botón "Importar Clave"',
      option3: 'Haga clic en "Cargar Ejemplo" para probar la herramienta con claves pregeneradas'
    },
    step2: {
      title: 'Paso 2: Preparar Sus Datos',
      description: 'Para cifrado o descifrado, necesitará introducir sus datos:',
      option1: 'Seleccione el formato de entrada (Texto, Hexadecimal, Base64 o Archivo)',
      option2: 'Para cifrado, introduzca su texto plano en el campo de entrada',
      option3: 'Para descifrado, introduzca el texto cifrado que desea descifrar',
      option4: 'Cuando use el modo archivo, arrastre y suelte su archivo o haga clic para seleccionarlo'
    },
    step3: {
      title: 'Paso 3: Configurar Ajustes de Cifrado',
      description: 'Antes de procesar sus datos, configure estos importantes ajustes:',
      option1: 'Elija el formato de texto cifrado (C1C2C3 o C1C3C2) - Las aplicaciones chinas típicamente usan C1C3C2',
      option2: 'Seleccione su formato de salida preferido (Texto, Hexadecimal o Base64)'
    },
    step4: {
      title: 'Paso 4: Procesar y Recuperar Resultados',
      description: 'Haga clic en el botón "Cifrar" o "Descifrar" para procesar sus datos. Una vez completado, puede copiar el resultado a su portapapeles, descargarlo como un archivo o ver los componentes detallados del texto cifrado (partes C1, C2 y C3) al cifrar.'
    }
  },
  faq: {
    title: 'Preguntas Frecuentes Sobre el Cifrado SM2',
    q1: '¿Cuáles son las ventajas del cifrado SM2 sobre otros algoritmos de cifrado?',
    a1: 'El cifrado SM2 ofrece varias ventajas incluyendo longitudes de clave más cortas (256 bits) mientras proporciona seguridad equivalente a RSA-2048, tiempos de procesamiento más rápidos para operaciones de cifrado y descifrado, y cumplimiento con los estándares regulatorios chinos. También está diseñado para ser resistente a ataques de computación cuántica, lo que lo convierte en una solución de cifrado con visión de futuro.',
    q2: '¿Cuál es la diferencia entre los formatos de texto cifrado C1C2C3 y C1C3C2?',
    a2: 'Ambos formatos contienen los mismos tres componentes pero organizados de manera diferente. C1 representa el punto de la curva elíptica, C2 son los datos realmente cifrados, y C3 es un valor hash utilizado para verificación de integridad. C1C2C3 es el formato estándar original, mientras que C1C3C2 es más comúnmente usado en aplicaciones y sistemas chinos. Nuestra herramienta soporta ambos formatos para máxima compatibilidad.',
    q3: '¿Es el cifrado SM2 adecuado para datos personales o empresariales sensibles?',
    a3: 'Sí, el cifrado SM2 es adecuado para proteger datos sensibles ya que proporciona una fuerte seguridad criptográfica. Sin embargo, para aplicaciones empresariales altamente sensibles, recomendamos implementar el cifrado SM2 con sistemas y protocolos de gestión de claves adecuados. Aunque nuestra herramienta en línea es conveniente, los entornos de producción sensibles deberían usar bibliotecas criptográficas instaladas localmente con almacenamiento seguro de claves.',
    q4: '¿Cómo puedo verificar que mi cifrado SM2 está funcionando correctamente?',
    a4: 'Puede verificar su implementación SM2 cifrando un mensaje de muestra, luego descifrándolo para confirmar que obtiene el texto original. Nuestra herramienta proporciona una opción "Cargar Ejemplo" que demuestra este proceso automáticamente. Para sistemas de producción, considere usar vectores de prueba de la documentación estándar SM2 para validar su implementación.',
    q5: '¿Pueden los datos cifrados con SM2 ser descifrados sin la clave privada?',
    a5: 'No, el cifrado SM2 correctamente implementado no puede ser descifrado sin la clave privada correspondiente. La seguridad de SM2 se basa en el problema del logaritmo discreto de curva elíptica, que es computacionalmente inviable resolver con la tecnología actual. Por eso es crítico mantener su clave privada segura y nunca compartirla con partes no autorizadas.'
  },
  comparison: {
    title: 'SM2 vs. Otros Algoritmos de Cifrado',
    p1: 'El cifrado SM2 pertenece a la familia de algoritmos de criptografía de curva elíptica (ECC), similar a ECDSA pero con parámetros específicos definidos por los estándares chinos. Comparado con RSA, SM2 ofrece seguridad equivalente con longitudes de clave significativamente más cortas (las claves SM2 de 256 bits proporcionan seguridad similar a las claves RSA de 2048 bits), resultando en operaciones más rápidas y menores requisitos de recursos.',
    p2: 'Para aplicaciones que requieren cumplimiento con estándares criptográficos chinos, SM2 es la opción preferida sobre algoritmos internacionales como RSA o ECDSA. Sus ventajas de rendimiento lo hacen particularmente adecuado para entornos con recursos limitados como tarjetas inteligentes, dispositivos IoT y aplicaciones móviles donde la potencia de procesamiento y la memoria son limitadas.',
    p3: 'Aunque SM2 está ganando reconocimiento internacional, RSA sigue siendo más ampliamente soportado en software y hardware global. Para comparación con otro método de cifrado asimétrico popular, consulte nuestra',
    linkText: 'Herramienta de Cifrado y Descifrado RSA'
  },
  references: {
    title: 'Referencias y Lecturas Adicionales',
    link1: 'Wikipedia -SM2',
    link2: 'SM2 curva elíptica algoritmo criptográfico de clave pública',
    link3: 'SM2 curva elíptica algoritmo criptográfico de clave pública curva recomendada parámetros',
  },
  relatedTools: {
    title: 'Herramientas Criptográficas Relacionadas',
    tool1: 'Herramienta de Cifrado y Descifrado RSA',
    tool2: 'Calculadora de Hash',
    tool3: 'Herramienta de Cifrado Simétrico',
    tool4: 'Generador de Contraseñas Seguras'
  }
}
