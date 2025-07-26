export default {
  title: "Herramienta de Pruebas MQTT - Guía Completa para Probar Protocolos de Mensajería IoT",
  intro: {
    title: "¿Qué es un probador MQTT y por qué lo necesita?",
    p1: "<b>MQTT (Message Queuing Telemetry Transport)</b> es un protocolo de mensajería ligero diseñado para dispositivos con recursos limitados y redes de bajo ancho de banda y alta latencia, lo que lo hace ideal para aplicaciones de Internet de las Cosas (IoT). Nuestra herramienta MQTT Tester proporciona un entorno completo para probar, depurar y optimizar conexiones MQTT, permitiendo a los desarrolladores validar eficazmente su infraestructura de comunicación IoT.",
    p2: "La <b>herramienta de prueba del protocolo MQTT</b> sirve como un puente esencial entre el desarrollo e implementación de dispositivos IoT, permitiéndole simular tanto publicadores como suscriptores en su ecosistema MQTT. Al habilitar la publicación de mensajes en tiempo real, la suscripción a temas y el diagnóstico de conexiones, nuestra herramienta ayuda a identificar posibles problemas antes de que afecten su entorno de producción. Este enfoque proactivo reduce significativamente el tiempo de depuración y mejora la confiabilidad de las aplicaciones IoT.",
    p3: "Con nuestro <b>cliente MQTT en línea</b>, puede conectarse a cualquier broker MQTT, probar varios niveles de Calidad de Servicio (QoS), implementar mensajes de Última Voluntad (LWT) y validar mensajes retenidos. Ya sea que esté desarrollando sistemas para el hogar inteligente, soluciones de monitoreo industrial o cualquier aplicación IoT, nuestro probador MQTT proporciona las capacidades necesarias para garantizar que su infraestructura de mensajería funcione correctamente en diversas condiciones de red y escenarios de uso."
  },
  useCases: {
    title: "Aplicaciones Prácticas de las Pruebas MQTT",
    case1: "<b>Desarrollo y Depuración de Dispositivos IoT</b>: Ingenieros de hardware y desarrolladores de firmware utilizan probadores MQTT para validar comunicaciones de dispositivos antes de finalizar diseños. Al desarrollar nuevos productos IoT, la capacidad de verificar patrones de publicación de mensajes, formatos de payload y respuestas de suscripción ayuda a identificar y corregir problemas de comunicación desde una etapa temprana del desarrollo, reduciendo significativamente el tiempo al mercado.",
    case2: "<b>Integración de Automatización del Hogar Inteligente</b>: Los desarrolladores que construyen sistemas de hogar inteligente confían en las pruebas MQTT para garantizar una comunicación confiable entre diversos dispositivos como termostatos, sistemas de iluminación y sensores de seguridad. Nuestro probador permite verificar reglas de automatización simulando disparadores y analizando respuestas de dispositivos, asegurando que su ecosistema de hogar inteligente funcione sin problemas.",
    case3: "<b>Sistemas de Monitoreo Industrial</b>: En entornos IoT industriales, las pruebas MQTT ayudan a verificar que los datos del sensor se transmitan, procesen y actúen correctamente. Los integradores del sistema usan nuestra herramienta para simular lecturas de sensores, probar umbrales de alerta y validar que los sistemas de control respondan adecuadamente a diferentes escenarios operativos, mejorando la confiabilidad en la planta de fabricación.",
    case4: "<b>Configuración y Optimización del Broker MQTT</b>: Los administradores del sistema usan herramientas de prueba MQTT para evaluar el rendimiento del broker bajo varias cargas, probar mecanismos de autenticación y optimizar configuraciones de calidad de servicio. Nuestro probador permite simular múltiples clientes simultáneamente, ayudando a identificar posibles cuellos de botella y problemas de configuración antes de que afecten a los sistemas de producción.",
    case5: "<b>Desarrollo de Aplicaciones IoT Multiplataforma</b>: Los desarrolladores que construyen aplicaciones IoT multiplataforma necesitan garantizar un comportamiento de mensajería consistente en interfaces web, móviles y de escritorio. El probador MQTT proporciona una implementación de referencia estándar para verificar que todas las aplicaciones cliente interpreten los mensajes de manera coherente, reduciendo errores específicos de plataforma."
  },
  tutorial: {
    title: "Cómo Usar Nuestra Herramienta MQTT Tester",
    intro: "Nuestro probador MQTT está diseñado para ser intuitivo pero potente. Siga estos sencillos pasos para probar su implementación MQTT de manera efectiva:",
    step1: {
      title: "Paso 1: Configure los Ajustes de Conexión",
      description: "Comience introduciendo los <b>detalles del broker MQTT</b> en la sección de conexión. Ingrese la URL del broker (por ejemplo, mqtt://broker.example.com:1883 o ws://broker.example.com:8083 para conexiones WebSocket). Opcionalmente, puede especificar un ID de cliente o dejarlo en blanco para obtener uno aleatorio. Si su broker requiere autenticación, ingrese su nombre de usuario y contraseña. Para conexiones seguras, active la opción SSL/TLS. Una vez configurado, haga clic en el botón \"Conectar\" para establecer una conexión con su broker MQTT."
    },
    step2: {
      title: "Paso 2: Suscríbase a Temas",
      description: "Después de conectarse correctamente al broker, vaya a la <b>sección Suscribirse</b> para escuchar mensajes. Ingrese el tema al que desea suscribirse en el campo correspondiente. Los temas MQTT admiten comodines: use # para hacer coincidir múltiples niveles de tema y + para hacer coincidir un solo nivel (por ejemplo, home/+/temperature se suscribe a lecturas de temperatura de cualquier habitación). Seleccione el nivel deseado de Calidad de Servicio (QoS) y luego haga clic en \"Suscribirse\". La herramienta ahora escuchará cualquier mensaje publicado en temas coincidentes."
    },
    step3: {
      title: "Paso 3: Publique Mensajes",
      description: "Para enviar mensajes al broker, utilice la <b>sección Publicar</b> de la herramienta. Ingrese el tema de destino y redacte su payload de mensaje. Puede formatear el payload como texto plano, JSON (con validación), hexadecimal o datos binarios. Establezca el nivel apropiado de QoS y decida si desea activar la bandera \"retener\", que instruye al broker a almacenar el mensaje para futuros suscriptores. Haga clic en el botón \"Publicar\" para enviar su mensaje al broker."
    },
    step4: {
      title: "Paso 4: Supervise y Analice los Mensajes",
      description: "La <b>sección Mensajes</b> muestra todas las comunicaciones recibidas y enviadas. Cada mensaje muestra el tema, el payload, el nivel de QoS, el estado de retención y la marca de tiempo. Puede filtrar los mensajes por tema o contenido para enfocarse en flujos de datos específicos. Para inspeccionar en detalle, haga clic en cualquier mensaje para ver su contenido completo. Utilice el botón \"Copiar Payload\" para extraer datos de mensaje para análisis posterior o la opción \"Duplicar como Publicación\" para responder rápidamente a los mensajes recibidos."
    }
  },
  mqttBasics: {
    title: "Comprensión de Conceptos Fundamentales del Protocolo MQTT",
    intro: "Para usar eficazmente el probador MQTT, es útil comprender estos conceptos clave del protocolo MQTT:",
    pubsub: {
      title: "Modelo de Publicación-Suscripción",
      description: "<b>MQTT utiliza una arquitectura de publicación-suscripción</b> que desconecta a los remitentes de mensajes (publicadores) de los receptores (suscriptores). Este modelo difiere de las comunicaciones tradicionales cliente-servidor al introducir un broker que gestiona la distribución de mensajes. Los publicadores envían mensajes a temas sin saber quién (si alguien) los recibirá, mientras que los suscriptores expresan interés en temas sin conocer quién publica en ellos. Esta desconexión proporciona escalabilidad y flexibilidad, permitiendo patrones de comunicación uno-a-muchos, muchos-a-uno y muchos-a-muchos."
    },
    qos: {
      title: "Niveles de Calidad de Servicio (QoS)",
      description: "<b>MQTT ofrece tres niveles de Calidad de Servicio</b> que equilibran fiabilidad con eficiencia: QoS 0 (Como máximo una vez) proporciona ninguna garantía de entrega pero con sobrecarga mínima, ideal para datos frecuentes y no críticos como lecturas de temperatura. QoS 1 (Al menos una vez) asegura que los mensajes lleguen al receptor pero puede entregar duplicados, adecuado para mensajes importantes donde los duplicados sean aceptables. QoS 2 (Exactamente una vez) garantiza una entrega única mediante un intercambio de cuatro partes, perfecto para comandos críticos o transacciones financieras donde los duplicados causarían problemas."
    },
    retain: {
      title: "Mensajes Retenidos",
      description: "<b>Los mensajes retenidos</b> son mensajes MQTT especiales que el broker almacena para futuros suscriptores. Cuando un mensaje se publica con la bandera de retención establecida en verdadero, el broker lo guarda como el valor más reciente para ese tema. Cualquier nuevo suscriptor al tema recibe inmediatamente el mensaje retenido más reciente, incluso si se suscribe mucho después de haberse publicado. Esta característica es especialmente útil para información sobre el estado de los dispositivos, valores de configuración u otros datos \"último conocido bueno\" que los nuevos suscriptores deben recibir al conectarse."
    },
    lastwill: {
      title: "Última Voluntad y Testamento (LWT)",
      description: "<b>La característica Última Voluntad</b> proporciona un mecanismo para que los clientes registren un mensaje de \"última voluntad\" con el broker durante la conexión. Si el cliente se desconecta inesperadamente (sin enviar un mensaje DISCONNECT adecuado), el broker publica automáticamente este mensaje de última voluntad en un tema específico. Este sistema de notificación permite que otras partes del sistema IoT se enteren de desconexiones inesperadas y tomen medidas adecuadas, como marcar dispositivos como fuera de línea o activar mecanismos de conmutación por error."
    }
  },
  faq: {
    title: "Preguntas Frecuentes sobre las Pruebas MQTT",
    q1: "¿Cuál es la diferencia entre MQTT y HTTP para aplicaciones IoT?",
    a1: "<b>MQTT y HTTP representan enfoques diferentes de comunicación IoT</b>, cada uno con ventajas distintas en escenarios específicos. MQTT está diseñado específicamente para entornos con recursos limitados con su modelo de publicación-suscripción, tamaño mínimo de paquete (tan pequeño como 2 bytes) y conexiones persistentes que reducen la sobrecarga. Destaca en entornos con ancho de banda limitado, redes poco confiables o dispositivos con batería.<br><br>En comparación, HTTP sigue un modelo de solicitud-respuesta que requiere que los clientes inicien todas las comunicaciones. Tiene una sobrecarga mayor debido al establecimiento de conexión para cada transacción y típicamente tamaños de mensaje más grandes. Sin embargo, HTTP se beneficia del soporte universal, un rico ecosistema de herramientas y una integración sencilla con aplicaciones web.<br><br>Para aplicaciones en tiempo real que requieren comunicación bidireccional, MQTT generalmente ofrece un mejor rendimiento con características como niveles de QoS, mensajes retenidos y funcionalidad de última voluntad. Nuestro probador MQTT le permite validar estas capacidades y determinar si MQTT es el protocolo correcto para su caso de uso IoT específico.",
    q2: "¿Cómo puedo proteger mis comunicaciones MQTT?",
    a2: "<b>Proteger las comunicaciones MQTT</b> implica múltiples capas de protección que pueden probarse todas con nuestra herramienta:<br><br>1. <b>Seguridad de transporte</b>: Active el cifrado TLS/SSL conectándose a puntos finales seguros (mqtts:// o wss://) y configurando certificados adecuados. Nuestra herramienta admite conexiones cifradas y no cifradas, lo que le permite verificar la implementación correcta de TLS.<br><br>2. <b>Autenticación</b>: Implemente autenticación basada en nombre de usuario/contraseña o autenticación con certificado del cliente. Puede probar estas credenciales con los ajustes de conexión de nuestra herramienta para asegurarse de que su broker aplique correctamente las políticas de autenticación.<br><br>3. <b>Autorización</b>: Configure permisos a nivel de tema para controlar qué clientes pueden publicar o suscribirse a temas específicos. Use nuestra herramienta para verificar que intentos de publicación o suscripción no autorizados sean correctamente rechazados por su broker.<br><br>4. <b>Cifrado del payload</b>: Para una seguridad adicional, cifre los payloads de los mensajes antes de publicarlos. Puede usar nuestra herramienta para probar el cifrado extremo a extremo publicando mensajes cifrados y verificando que puedan ser descifrados correctamente por suscriptores autorizados.<br><br>Recuerde que la seguridad debe implementarse en profundidad, combinando varios enfoques en lugar de depender de un único mecanismo.",
    q3: "¿Cuáles son las mejores prácticas para el diseño de temas MQTT?",
    a3: "<b>Diseño eficaz de temas MQTT</b> es crucial para sistemas IoT escalables y mantenibles. Aquí están los principios clave a seguir:<br><br>1. <b>Use estructuras jerárquicas</b> con barras inclinadas hacia adelante como separadores (por ejemplo, edificio/planta/habitación/dispositivo/medición). Esta organización permite filtrado eficiente con comodines y refleja la estructura lógica de su sistema.<br><br>2. <b>Evite comenzar temas con una barra inclinada hacia adelante</b> ya que esto crea un nivel vacío innecesario y puede causar inconsistencias en la coincidencia de temas entre diferentes implementaciones de broker.<br><br>3. <b>Incluya identificadores de dispositivo</b> en temas para sistemas IoT (por ejemplo, sensores/deviceID/temperatura) para asegurar temas únicos por dispositivo y simplificar el enrutamiento de mensajes.<br><br>4. <b>Use espacios de nombres de tema estandarizados</b> para funciones comunes como estado del dispositivo (status/deviceID), comandos (commands/deviceID) y configuración (config/deviceID).<br><br>5. <b>Considere limitaciones de longitud de tema</b> - aunque MQTT permite temas largos, mantenerlos concisos mejora la eficiencia, especialmente para dispositivos con recursos limitados.<br><br>Nuestro probador MQTT puede ayudar a validar su diseño de tema permitiéndole probar patrones de suscripción con comodines y verificar la entrega de mensajes a los destinatarios previstos.",
    q4: "¿Cómo puedo solucionar problemas de conexión MQTT?",
    a4: "Cuando enfrente <b>problemas de conexión MQTT</b>, siga este enfoque sistemático de solución de problemas:<br><br>1. <b>Verifique la conectividad de red</b>: Asegúrese de que el dispositivo pueda alcanzar la dirección IP y puerto del broker. Use los indicadores de estado de conexión de nuestra herramienta para confirmar el acceso básico a la red.<br><br>2. <b>Verifique la dirección y puerto del broker</b>: Confirme que está usando la URL del broker, número de puerto y protocolo correctos (mqtt:// para conexiones TCP, ws:// para conexiones WebSocket). Los puertos comunes son 1883 (MQTT), 8883 (MQTT sobre TLS), 8083 (WebSockets) y 8084 (WebSockets Seguros).<br><br>3. <b>Valide las credenciales</b>: Si está habilitada la autenticación, asegúrese de que el nombre de usuario y contraseña sean correctos. Los errores de conexión ocurren a menudo debido a fallos de autenticación.<br><br>4. <b>Revise la configuración SSL/TLS</b>: Para conexiones seguras, verifique configuraciones de certificados, incluyendo certificados CA, certificados del cliente y versiones TLS compatibles.<br><br>5. <b>Verifique conflictos de ID de cliente</b>: Los brokers MQTT típicamente no permiten múltiples conexiones con el mismo ID de cliente. Nuestra herramienta puede ayudar a identificar si su conexión está siendo rechazada debido a conflictos de ID.<br><br>6. <b>Revise los registros del broker</b>: La mayoría de los brokers MQTT proporcionan registros detallados de conexión que pueden revelar la razón específica de los fallos de conexión.<br><br>Nuestra herramienta MQTT Tester proporciona estado de conexión en tiempo real y mensajes de error detallados para ayudar a localizar la causa exacta de los problemas de conectividad.",
    q5: "¿Cuál es la mejor forma de manejar desconexiones y reconexiones MQTT?",
    a5: "Implementar un manejo robusto de <b>desconexiones MQTT</b> es esencial para aplicaciones IoT confiables:<br><br>1. <b>Habilite la reconexión automática</b>: Configure su cliente MQTT para que intente automáticamente la reconexión cuando se pierda la conexión. Nuestro probador MQTT tiene esta característica incorporada y puede ayudarle a probar cómo se comporta su aplicación durante escenarios de reconexión.<br><br>2. <b>Implemente retroceso exponencial</b>: En lugar de intentar reconexiones a intervalos fijos, use demoras progresivamente más largas entre intentos de reconexión para evitar sobrecargar el broker durante interrupciones.<br><br>3. <b>Configure mensajes de Última Voluntad</b>: Configure mensajes LWT para notificar a otras partes de su sistema cuando los dispositivos se desconecten inesperadamente. Puede probar esta característica en los ajustes avanzados de conexión de nuestra herramienta.<br><br>4. <b>Mantenga colas de mensajes</b>: Para datos críticos, implemente una cola de mensajes del lado del cliente durante períodos de desconexión, luego envíelos cuando se restaure la conexión.<br><br>5. <b>Use sesiones persistentes</b>: Cuando sea apropiado, active la bandera \"Sesión limpia\" para mantener información de suscripción y mensajes en cola entre conexiones.<br><br>6. <b>Supervise el estado de la conexión</b>: Implemente supervisión del estado de la conexión y alertas para desconexiones prolongadas en entornos de producción.<br><br>Nuestra herramienta MQTT Tester puede simular varios escenarios de desconexión, ayudándole a validar que su aplicación maneje problemas de conectividad con gracia."
  },
  relatedTools: {
    title: "Explore Herramientas Relacionadas de IoT y Redes",
    description: "Mejore su flujo de trabajo de desarrollo IoT con estas herramientas complementarias:",
    tool1: {
      name: "WebSocket Tester",
      url: "https://www.ufreetools.com/tool/websocket-tester",
      description: "Pruebe conexiones WebSocket con capacidades de envío y recepción de mensajes en tiempo real."
    },
    tool2: {
      name: "JSON Formatter & Validator",
      url: "https://www.ufreetools.com/tool/json-formatter",
      description: "Formatee, valide y embellezca datos JSON comúnmente utilizados en payloads MQTT."
    },
    tool3: {
      name: "HTTP Proxy Detector",
      url: "https://www.ufreetools.com/tool/http-proxy-detector",
      description: "Detecte si su conexión está utilizando un proxy HTTP y analice encabezados relacionados con proxies para verificación de seguridad."
    },
    tool4: {
      name: "Base64 Encoder/Decoder",
      url: "https://www.ufreetools.com/tool/base64-encoder-decoder",
      description: "Codifique y decodifique datos Base64 frecuentemente utilizados para payloads binarios en mensajes MQTT."
    }
  },
  resources: {
    title: "Recursos Autoritativos sobre el Protocolo MQTT",
    resource1: {
      name: "MQTT.org - Documentación Oficial MQTT",
      url: "https://mqtt.org/",
      description: "La documentación oficial del protocolo MQTT, especificaciones y mejores prácticas mantenidas por el consorcio OASIS."
    },
    resource2: {
      name: "HiveMQ - Guía Esencial MQTT",
      url: "https://www.hivemq.com/mqtt-essentials/",
      description: "Una serie completa de artículos que cubren todos los aspectos esenciales del protocolo MQTT en términos prácticos."
    },
    resource3: {
      name: "Eclipse Mosquitto - Broker MQTT de Código Abierto",
      url: "https://mosquitto.org/",
      description: "Documentación para el popular broker MQTT de código abierto, incluyendo opciones de configuración y mejores prácticas de seguridad."
    }
  }
}
