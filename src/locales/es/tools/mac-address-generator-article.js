export default {
    title: 'Generador de Direcciones MAC: Generar Direcciones MAC Aleatorias e Identificadores de Dispositivos de Red en Línea',
    functionTitle: '¿Cómo puede el Generador de Direcciones MAC ayudarte a generar rápidamente identificadores válidos de dispositivos de red?',

    useCasesTitle: 'Casos de Uso Típicos del Generador de Direcciones MAC',
    useCase1: '<strong>Pruebas de Dispositivos de Red:</strong> El generador de direcciones MAC proporciona a ingenieros de red y desarrolladores una gran cantidad de direcciones MAC conformes con IEEE para pruebas de configuración y verificación funcional de dispositivos de red como routers, switches y firewalls.',
    useCase2: '<strong>Desarrollo y Depuración de Software:</strong> El generador de direcciones MAC puede generar por lotes datos estructurados de direcciones MAC para pruebas y depuración en desarrollo de aplicaciones de red, proyectos IoT y simulación de dispositivos Bluetooth.',
    useCase3: '<strong>Simulación de Dispositivos IoT:</strong> El generador de direcciones MAC ayuda a los desarrolladores a crear identificadores de dispositivos virtuales para gestión de dispositivos y pruebas de comunicación en proyectos de hogares inteligentes, IoT industrial y vehículos conectados.',
    useCase4: '<strong>Pruebas e Investigación de Seguridad:</strong> El generador de direcciones MAC proporciona direcciones MAC anonimizadas para que investigadores de seguridad las usen en pruebas de seguridad de red, pruebas de penetración e investigación de omisión de filtrado MAC.',
    useCase5: '<strong>Educación y Capacitación:</strong> El generador de direcciones MAC genera direcciones MAC en formato estándar para ayudar a maestros y estudiantes a entender la estructura de direcciones de capa de red, reglas de asignación OUI y diferenciación unicast vs multicast.',
    useCase6: '<strong>Población de Bases de Datos:</strong> El generador de direcciones MAC crea datos de direcciones MAC conformes con patrones del mundo real para bases de datos de desarrollo y pruebas de sistemas de gestión de red, plataformas de monitoreo de dispositivos y sistemas de gestión de activos.',

    tipTitle: 'Consejos de Uso Profesional',
    tipContent: 'Al usar el generador de direcciones MAC, se recomienda elegir formatos y prefijos de proveedor apropiados según las necesidades reales. Para escenarios que requieren simulación de dispositivos reales, seleccione prefijos OUI de proveedores específicos. Para escenarios de pruebas de seguridad, use direcciones administradas localmente (LAA) para evitar conflictos con dispositivos reales.',

    conclusion: '<p>Ya sea para ingeniería de red, desarrollo de software o investigación de seguridad, el <strong>Generador de Direcciones MAC</strong> proporciona direcciones MAC de alta calidad que cumplen con los estándares IEEE. El generador de direcciones MAC admite múltiples formatos de salida incluyendo formatos separados por dos puntos, guiones y puntos, mientras ofrece selección de prefijos OUI de proveedores para hacer las direcciones generadas más realistas. Todo el procesamiento se realiza localmente en el navegador, asegurando que no haya riesgo de fuga de datos.</p>',

    faqTitle: 'Preguntas Frecuentes sobre el Generador de Direcciones MAC',
    faq1Question: '¿Las direcciones generadas por el generador de direcciones MAC son reales y válidas?',
    faq1Answer: 'Las direcciones MAC generadas por el generador de direcciones MAC cumplen completamente con el formato estándar IEEE 802, asegurando la validez de la dirección mediante configuraciones de bits apropiadas. Sin embargo, estas son direcciones virtuales generadas aleatoriamente no asociadas con ningún dispositivo de red real. El generador de direcciones MAC está destinado solo para propósitos de prueba y desarrollo, no para uso como identificadores de dispositivos reales en entornos de producción.',

    faq2Question: '¿Qué es un prefijo OUI? ¿Cómo uso la función de prefijo de proveedor?',
    faq2Answer: 'OUI (Organizationally Unique Identifier) son los primeros 3 bytes de una dirección MAC, asignados por IEEE a fabricantes de dispositivos de red. El generador de direcciones MAC proporciona prefijos OUI para proveedores comunes. Al seleccionar un proveedor específico, las direcciones MAC generadas usarán el OUI de ese proveedor, haciendo que las direcciones parezcan más como dispositivos reales. También puede ingresar un prefijo OUI personalizado.',

    faq3Question: '¿Qué formatos de salida admite el generador de direcciones MAC?',
    faq3Answer: 'El generador de direcciones MAC admite múltiples formatos comunes: formato separado por dos puntos (XX:XX:XX:XX:XX:XX) para sistemas Linux/Unix, formato separado por guiones (XX-XX-XX-XX-XX-XX) para sistemas Windows, formato separado por puntos (XXXX.XXXX.XXXX) para dispositivos Cisco, y formato sin separador (XXXXXXXXXXXX) para algunos sistemas embebidos.',

    faq4Question: '¿Cuál es la diferencia entre direcciones unicast y multicast?',
    faq4Answer: 'El bit menos significativo del primer byte de una dirección MAC determina el tipo de dirección. Una dirección unicast tiene este bit en 0, usado para comunicación punto a punto para identificar un dispositivo de red específico. Una dirección multicast tiene este bit en 1, usado para comunicación grupal para identificar un grupo de dispositivos de red. El generador de direcciones MAC admite generar ambos tipos.',

    faq5Question: '¿Cuál es la diferencia entre direcciones únicas globales (UAA) y direcciones administradas localmente (LAA)?',
    faq5Answer: 'Las direcciones únicas globales (UAA, Universally Administered Address) son asignadas por fabricantes de dispositivos, con el segundo bit menos significativo del primer byte en 0. Las direcciones administradas localmente (LAA, Locally Administered Address) son asignadas por administradores de red, con este bit en 1. El generador de direcciones MAC admite ambos tipos, con LAA comúnmente usado en máquinas virtuales y entornos de prueba.',

    tutorialTitle: 'Guía de Usuario del Generador de Direcciones MAC',
    step1Title: 'Paso 1: Seleccionar Formato de Dirección MAC',
    step1Description: 'En el generador de direcciones MAC, primero seleccione el formato de salida. El formato separado por dos puntos es adecuado para la mayoría de sistemas Linux/Unix, el formato separado por guiones para sistemas Windows, y el formato separado por puntos para dispositivos de red Cisco. También puede elegir salida en mayúsculas o minúsculas.',
    step1Note: 'Diferentes sistemas y dispositivos pueden requerir diferentes formatos; por favor elija el formato apropiado según su caso de uso.',

    step2Title: 'Paso 2: Seleccionar Tipo de Dirección',
    step2Description: 'En el generador de direcciones MAC, seleccione el tipo de dirección: direcciones unicast para identificar dispositivos individuales, direcciones multicast para identificar grupos de dispositivos; direcciones únicas globales (UAA) simulan dispositivos reales, direcciones administradas localmente (LAA) para entornos virtuales. Elija la combinación apropiada según las necesidades de prueba.',
    step2Note: 'La mayoría de escenarios de prueba usan combinación unicast + dirección única global; entornos de máquinas virtuales comúnmente usan combinación unicast + dirección administrada localmente.',

    step3Title: 'Paso 3: Seleccionar Prefijo de Proveedor (Opcional)',
    step3Description: 'El generador de direcciones MAC proporciona prefijos OUI para proveedores comunes de dispositivos de red como Apple, Cisco, Intel, Huawei, etc. Al seleccionar un proveedor específico, las direcciones MAC generadas usarán el prefijo OUI real de ese proveedor, haciendo los datos de prueba más realistas. También puede ingresar un prefijo OUI personalizado.',
    step3Note: 'Si no necesita simular dispositivos de proveedores específicos, seleccione "Proveedor Aleatorio" para generar direcciones MAC completamente aleatorias.',

    step4Title: 'Paso 4: Establecer Cantidad de Generación',
    step4Description: 'En el generador de direcciones MAC, ingrese el número de direcciones MAC a generar (1-1000), luego haga clic en el botón "Generar Dirección". El sistema generará rápidamente todas las direcciones localmente en el navegador sin esperar respuesta del servidor.',
    step4Note: 'Al generar grandes cantidades por lotes, primero pruebe con una pequeña cantidad para confirmar que el formato y tipo cumplen sus requisitos.',

    step5Title: 'Paso 5: Ver y Verificar Resultados',
    step5Description: 'Después de completar la generación, el generador de direcciones MAC muestra todas las direcciones generadas en el área de salida. Puede expandir cada registro para ver información detallada incluyendo nombre del proveedor, tipo de dirección, formato, etc. Verifique que el formato y tipo de dirección cumplan sus requisitos.',
    step5Note: 'Todas las direcciones generadas por el generador de direcciones MAC cumplen con los estándares IEEE 802 y pueden usarse directamente para prueba y desarrollo.',

    step6Title: 'Paso 6: Exportar Datos',
    step6Description: 'Después de confirmar que los datos son correctos, seleccione el formato de exportación en el generador de direcciones MAC: JSON para procesamiento de programas, CSV para análisis en hojas de cálculo. También puede copiar direcciones individuales o todas las direcciones al portapapeles para pegar en otras aplicaciones.',
    step6Note: 'Los archivos exportados contienen todos los campos generados para facilitar el procesamiento de datos posterior e importación por lotes.',

    successTitle: '¡Generación Completa!',
    successContent: '¡Felicitaciones, ha dominado con éxito el generador de direcciones MAC! Ahora puede generar rápidamente direcciones MAC conformes con IEEE para pruebas de dispositivos de red, desarrollo de software, simulación IoT y varios otros escenarios.',

    relatedToolsTitle: 'Herramientas Relacionadas que Podrían Interesarle',
    relatedTool1Name: 'Generador de UUID',
    relatedTool1Description: 'Generar identificadores únicos (UUID) para claves primarias de base de datos e identificación única.',
    relatedTool1Url: 'https://www.ufreetools.com/tool/uuid-generator',

    relatedTool2Name: 'Generador de Direcciones de Hong Kong',
    relatedTool2Description: 'Generar direcciones realistas de Hong Kong, información de identidad y datos de contacto en línea.',
    relatedTool2Url: 'https://www.ufreetools.com/tool/hk-address-generator',

    relatedTool3Name: 'Generador de Contraseñas Aleatorias',
    relatedTool3Description: 'Generar contraseñas aleatorias seguras y confiables para proteger la seguridad de cuentas.',
    relatedTool3Url: 'https://www.ufreetools.com/tool/password-generator',

    relatedTool4Name: 'Formateador JSON',
    relatedTool4Description: 'Embellir y validar datos JSON para fácil lectura y depuración.',
    relatedTool4Url: 'https://www.ufreetools.com/tool/json-formatter',

    reference1Name: 'Base de Datos IEEE OUI',
    reference1Description: 'Consultar información oficial de asignación OUI y listas de proveedores.',
    reference1Url: 'https://standards-oui.ieee.org/',

    reference2Name: 'Dirección MAC - Wikipedia',
    reference2Description: 'Aprender sobre estructura de direcciones MAC, tipos y escenarios de aplicación.',
    reference2Url: 'https://en.wikipedia.org/wiki/MAC_address',

    reference3Name: 'Estándares IEEE 802',
    reference3Description: 'Profundizar en estándares y especificaciones de direcciones de red.',
    reference3Url: 'https://standards.ieee.org/ieee/802/10328/'
};
