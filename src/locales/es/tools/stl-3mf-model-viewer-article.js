export default {
    title: 'Herramienta Visor de Modelos STL/3MF: Guía del Visor 3D Online',
    functionTitle: '¿Qué es la Herramienta Visor de Modelos STL/3MF y sus Usos?',
    intro: 'Nuestro <strong>Visor de Modelos STL/3MF</strong> es un visor profesional de modelos 3D online que puede cargar rápidamente y previsualizar archivos de modelos 3D en formato STL (Stereo Lithography) y 3MF (3D Manufacturing Format). Sin necesidad de instalar software, solo ábrelo en el navegador para ver modelos 3D desde cualquier ángulo. Usando nuestro <strong>visor 3D online</strong>, puedes rotar, hacer zoom y desplazar modelos, ver información detallada como conteo de vértices, caras y dimensiones. También puedes cambiar al modo alambrado, ajustar colores de materiales y exportar capturas de alta resolución.',

    useCasesTitle: 'Casos de Uso Comunes para la Previsualización de Modelos STL/3MF',
    useCases: [
        'Previsualizar modelos STL antes de imprimir en 3D para verificar que estén completos y sin errores',
        'Ver información de color, material y otros datos en modelos 3MF para confirmar resultados de impresión',
        'Verificar rápidamente dimensiones y proporciones de modelos 3D para asegurar que cumplan requisitos',
        'Usar el modo alambrado para inspeccionar la topología de malla y encontrar problemas potenciales',
        'Tomar capturas de modelos 3D para presentaciones, redes sociales o documentación',
        'Ver rápidamente archivos de modelos sin instalar software de modelado 3D',
        'Previsualizar múltiples archivos de modelos 3D por lotes para filtrar rápidamente',
        'Mostrar diseños de modelos 3D a clientes o miembros del equipo sin software profesional'
    ],

    tipTitle: 'Consejo Profesional:',
    tipContent: 'Usa el botón izquierdo del ratón para rotar el modelo, el derecho para desplazar la vista y la rueda para hacer zoom. Doble clic en el modelo para centrarlo automáticamente.',

    conclusion: 'La herramienta <strong>Visor de Modelos STL/3MF</strong> es especialmente útil para entusiastas de la impresión 3D, diseñadores, ingenieros y cualquier persona que necesite ver modelos 3D. Usando nuestro visor 3D online, puedes ver modelos 3D en formato STL y 3MF en cualquier momento y lugar, sin instalar software profesional. Nuestra herramienta soporta varios controles de vista, configuración de renderizado y funciones de exportación. Todo el procesamiento se realiza localmente en tu navegador para garantizar la privacidad y seguridad de tus datos.',

    faqTitle: 'Preguntas Frecuentes',
    faqs: [
        {
            question: '¿Qué formatos de archivo soporta el Visor de Modelos STL/3MF?',
            answer: 'Nuestro <strong>visor 3D online</strong> soporta dos formatos principales de archivos de impresión 3D: STL (incluyendo formatos binario y ASCII) y formato 3MF. STL es el formato más utilizado en impresión 3D, mientras que 3MF es un formato de nueva generación que soporta color, material y otra información rica.'
        },
        {
            question: '¿Cómo rotar y hacer zoom en el modelo 3D?',
            answer: 'Usa el botón izquierdo del ratón para arrastrar y rotar el modelo. Usa la rueda del ratón para hacer zoom. Usa el botón derecho para arrastrar y desplazar la vista. Doble clic en el modelo para centrarlo automáticamente.'
        },
        {
            question: '¿Qué información muestra el panel de información del modelo?',
            answer: 'El panel muestra: (1) Vértices - total de vértices del modelo; (2) Caras/Triángulos - número de caras triangulares; (3) Tamaño del archivo; (4) Dimensiones físicas - largo, ancho y alto del modelo (ejes XYZ).'
        },
        {
            question: '¿Qué es el modo alambrado? ¿Para qué sirve?',
            answer: 'El modo alambrado muestra la estructura de malla del modelo sin superficies sólidas. Es útil para inspeccionar la topología y encontrar problemas como caras rotas, superpuestas o agujeros.'
        },
        {
            question: '¿Puedo exportar capturas del modelo 3D?',
            answer: '¡Sí! Soportamos exportación de capturas de alta resolución. Puedes elegir formato PNG o JPG, y seleccionar fondo transparente.'
        },
        {
            question: '¿El proceso de previsualización es seguro?',
            answer: '¡Completamente seguro! Todo el procesamiento se realiza localmente en tu navegador. Tus archivos no se suben a ningún servidor.'
        },
        {
            question: '¿Qué tamaño de archivos 3D se soporta?',
            answer: 'Generalmente podemos manejar archivos STL de decenas de MB y archivos 3MF más grandes. Para archivos muy grandes (más de 100MB), los tiempos de carga pueden ser más largos.'
        }
    ],

    tutorialTitle: 'Cómo Usar el Visor de Modelos STL/3MF',
    steps: [
        {
            title: 'Subir Archivos de Modelo 3D',
            description: 'Primero sube los archivos STL o 3MF que quieres previsualizar. Puedes <strong>arrastrar archivos</strong> al área de carga o <strong>hacer clic en examinar</strong>.',
            note: 'Soporta subir múltiples archivos simultáneamente.'
        },
        {
            title: 'Ver Modelo 3D',
            description: 'Después de subir, la vista 3D cargará automáticamente el modelo. Usa el <strong>botón izquierdo</strong> para rotar, <strong>rueda</strong> para zoom, <strong>botón derecho</strong> para desplazar.',
            note: 'La primera carga de modelos grandes puede tomar unos segundos.'
        },
        {
            title: 'Ver Información del Modelo',
            description: 'El panel derecho muestra información detallada: <strong>conteo de vértices</strong>, <strong>caras</strong>, <strong>tamaño del archivo</strong> y <strong>dimensiones físicas</strong>.',
            note: 'Para archivos 3MF también se muestra información de colores y materiales.'
        },
        {
            title: 'Ajustar Vista y Configuración',
            description: 'Usa las opciones del panel derecho para ajustar efectos. Puedes habilitar <strong>modo alambrado</strong>, <strong>rotación automática</strong>, ajustar <strong>colores</strong> y mostrar <strong>cuadrícula</strong> y <strong>ejes</strong>.',
            note: 'El modo alambrado es especialmente útil para verificar problemas de topología.'
        },
        {
            title: 'Exportar Captura',
            description: 'Haz clic en <strong>"Exportar Captura"</strong> para guardar una captura de alta resolución. Puedes elegir formato PNG o JPG y <strong>fondo transparente</strong>.',
            note: 'Perfecto para presentaciones, redes sociales o documentación.'
        }
    ],

    successTitle: '¡Felicitaciones!',
    successContent: 'Has aprendido exitosamente cómo usar nuestro Visor de Modelos STL/3MF.',

    relatedToolsTitle: 'Herramientas Relacionadas',
    relatedTools: [
        { name: 'STL a 3MF', description: 'Convierte archivos STL a formato 3MF con información de color y material.', url: 'https://www.ufreetools.com/tool/stl-to-3mf-converter' },
        { name: 'STL a OBJ', description: 'Convierte archivos STL a formato OBJ con cálculo de normales.', url: 'https://www.ufreetools.com/tool/stl-to-obj-converter' },
        { name: 'Imagen a PNG', description: 'Convierte JPG, WebP y otros formatos a PNG con fondo transparente.', url: 'https://www.ufreetools.com/tool/image-to-png' },
        { name: 'Compresor de Imágenes', description: 'Reduce el tamaño de imágenes sin pérdida notable de calidad.', url: 'https://www.ufreetools.com/tool/image-compressor' }
    ],

    referencesTitle: 'Recursos de Referencia',
    references: [
        { name: 'Formato de Archivo STL', description: 'Historia y estructura del formato STL', url: 'https://en.wikipedia.org/wiki/STL_%28file_format%29' },
        { name: 'Especificación 3MF', description: 'Especificación técnica del formato 3MF', url: 'https://3mf.io/specification/' },
        { name: 'Documentación Three.js', description: 'Detalles técnicos del motor de renderizado 3D', url: 'https://threejs.org/docs/' }
    ]
}