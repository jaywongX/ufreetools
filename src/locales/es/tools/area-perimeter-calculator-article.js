export default {
    title: 'Guía de Usuario de la Calculadora de Área y Perímetro - Herramienta de Medición Online de Área y Perímetro de Polígonos',
    functionTitle: '¿Qué es la Calculadora de Área y Perímetro y para qué se utiliza?',
    intro: 'Nuestra <strong>Calculadora de Área y Perímetro</strong> es una herramienta en línea potente que le permite dibujar polígonos en un mapa y calcular automáticamente su área y perímetro. La herramienta soporta múltiples cambios de unidad, incluyendo metros cuadrados, hectáreas, kilómetros cuadrados y mu, y proporciona un modo de cálculo elipsoidal terrestre para resultados más precisos. También puede ingresar directamente puntos de coordenadas para calcular área y perímetro, y admite la exportación en múltiples formatos incluyendo GeoJSON, KML, imágenes, CSV, TXT y PDF.',

    useCasesTitle: 'Escenarios Comunes de Aplicación de la Calculadora de Área y Perímetro',
    useCases: [
        'Topografía y evaluación de tierras, calcular el área y perímetro de parcelas',
        'Planificación urbana y diseño, medir áreas de construcción y espacios públicos',
        'Gestión agrícola, calcular el área de tierras de cultivo y el rango de riego',
        'Evaluación inmobiliaria, medir los límites de la propiedad y el área utilizable',
        'Monitoreo ambiental, calcular el rango de áreas protegidas y áreas afectadas',
        'Construcción de ingeniería, medir áreas de construcción y requisitos de materiales'
    ],

    tipTitle: 'Consejos Profesionales:',
    tipContent: 'Al medir áreas extensas, se recomienda utilizar el modo de cálculo elipsoidal para obtener resultados más precisos. Puede ingresar directamente puntos de coordenadas para calcular el área y perímetro de áreas complejas, soportando múltiples formatos de entrada de coordenadas. Cambiar entre diferentes unidades puede ayudarle a mostrar los resultados de medición de la manera más adecuada.',

    conclusion: 'La <strong>Calculadora de Área y Perímetro</strong> es muy útil para topógrafos, planificadores urbanos, administradores agrícolas, tasadores inmobiliarios y cualquier persona que necesite medición de áreas precisa. Al utilizar nuestra herramienta, puede ahorrar mucho tiempo de cálculo manual, evitar errores de medición y comprender mejor los datos a través de funciones de visualización. Nuestra herramienta hace que el proceso de cálculo de área y perímetro sea simple y eficiente sin necesidad de instalar ningún software profesional.',

    faqTitle: 'Preguntas Frecuentes',
    faqs: [
        {
            question: '¿Qué modos de cálculo soporta la Calculadora de Área y Perímetro?',
            answer: 'Nuestra <strong>Calculadora de Área y Perímetro</strong> soporta dos modos de cálculo: cálculo plano y cálculo elipsoidal. El cálculo plano es adecuado para mediciones de áreas pequeñas con velocidad de cálculo rápida; el cálculo elipsoidal considera el impacto de la curvatura terrestre, adecuado para mediciones de áreas extensas con resultados más precisos. Puede elegir el modo de cálculo apropiado según sus necesidades específicas.'
        },
        {
            question: '¿Cómo dibujar polígonos en el mapa para medir?',
            answer: 'Usando nuestra <strong>herramienta de medición de área en línea</strong>, solo necesita seleccionar la herramienta de dibujo de polígonos en la caja de herramientas izquierda, luego hacer clic en el mapa para determinar los vértices del polígono. Haga doble clic en el último vértice para completar el dibujo, y el sistema calculará y mostrará automáticamente el área y perímetro. También puede usar herramientas de rectángulo y círculo para dibujar formas regulares para medir.'
        },
        {
            question: '¿Qué unidades de área y longitud se soportan?',
            answer: 'Nuestra herramienta soporta múltiples unidades de área y longitud de uso común. Las unidades de área incluyen metros cuadrados, hectáreas, kilómetros cuadrados, acres y mu; las unidades de longitud incluyen metros, kilómetros y millas. Puede cambiar de unidad en cualquier momento para adaptarse a diferentes escenarios de uso y hábitos regionales, y los resultados de medición se actualizarán en tiempo real.'
        },
        {
            question: '¿Cómo usar la función de entrada de coordenadas?',
            answer: 'Nuestra función de <strong>entrada de coordenadas de la calculadora de área</strong> le permite ingresar directamente puntos de coordenadas para calcular área y perímetro sin dibujar manualmente en el mapa. Puede usar múltiples formatos para ingresar coordenadas, incluyendo formato "longitud,latitud", "[longitud,latitud]" o "longitud latitud", con un punto por línea. Después de ingresar al menos 3 puntos, haga clic en el botón "Calcular", y el sistema creará automáticamente un polígono y calculará su área y perímetro. Esto es particularmente útil para la medición de áreas con coordenadas conocidas.'
        },
        {
            question: '¿Cómo exportar los resultados de medición?',
            answer: 'Después de completar la medición, puede exportar los resultados en múltiples formatos: GeoJSON y KML son formatos de datos geoespaciales estándar que se pueden importar a otros software GIS; la función de exportación de imágenes puede guardar la vista de mapa actual como una imagen PNG; los formatos CSV y TXT son convenientes para abrir y analizar datos en software de hojas de cálculo como Excel; el formato PDF es adecuado para generar informes y documentos formales. Elija el formato de exportación más adecuado según sus necesidades.'
        }
    ],

    tutorialTitle: 'Cómo Usar la Calculadora de Área y Perímetro',
    steps: [
        {
            title: 'Seleccionar Herramientas de Dibujo y Modo de Cálculo',
            description: 'Antes de comenzar la medición, primero seleccione la herramienta de dibujo apropiada (polígono, rectángulo o círculo) en la caja de herramientas izquierda. Luego seleccione el modo de cálculo, para áreas extensas se recomienda elegir el cálculo elipsoidal para obtener resultados más precisos.',
            note: 'Las herramientas de dibujo y el modo de cálculo se pueden cambiar en cualquier momento según sea necesario.'
        },
        {
            title: 'Dibujar Área de Medición en el Mapa',
            description: 'Después de activar la herramienta de dibujo, haga clic en el mapa para determinar el límite del área. Para la herramienta de polígono, haga clic en cada vértice en secuencia, y haga doble clic en el último vértice para completar el dibujo. El área y perímetro del área actual se mostrarán en tiempo real durante el proceso de dibujo.',
            note: 'Puede ajustar la forma del área arrastrando los vértices, y los resultados de medición se actualizarán en tiempo real.'
        },
        {
            title: 'Usar la Función de Entrada de Coordenadas',
            description: 'Si ya tiene datos de puntos de coordenadas para el área, puede usar directamente la función de entrada de coordenadas. En el cuadro de entrada de coordenadas, ingrese un punto de coordenada por línea (formato: longitud,latitud), luego haga clic en el botón "Calcular", y el sistema creará automáticamente un polígono y calculará su área y perímetro.',
            note: 'Soporta múltiples formatos de entrada de coordenadas, incluyendo "longitud,latitud", "[longitud,latitud]" o "longitud latitud".'
        },
        {
            title: 'Ver y Gestionar los Resultados de Medición',
            description: 'En la lista de resultados debajo del área de mapa derecha, puede ver el área y perímetro de todas las áreas dibujadas. Cada área tiene un identificador de tipo y datos de medición correspondientes, lo que facilita la comparación y análisis.',
            note: 'La lista de resultados se actualiza en tiempo real, mostrando la cantidad y datos de todas las áreas de medición actuales.'
        },
        {
            title: 'Exportar Resultados de Medición',
            description: 'Después de completar la medición, puede exportar los resultados en múltiples formatos, incluyendo GeoJSON, KML, imágenes, CSV, TXT y PDF. Haga clic en el botón de exportación en la caja de herramientas y seleccione el formato correspondiente para completar la operación de exportación.',
            note: 'El archivo exportado contiene toda la información de medición, que se puede utilizar para otros software GIS, análisis de datos o compartir con otros. Los formatos CSV y TXT son convenientes para abrir en software de hojas de cálculo, y el formato PDF es adecuado para informes formales.'
        }
    ],

    successTitle: '¡Felicitaciones!',
    successContent: 'Ha aprendido con éxito cómo usar nuestra calculadora de área y perímetro. Ahora puede dibujar fácilmente áreas en el mapa y calcular su área y perímetro, obteniendo la mejor experiencia de medición a través de múltiples unidades y modos de vista.',

    relatedToolsTitle: 'Herramientas Relacionadas que Podrían Interesarte',
    relatedTools: [
        {
            name: 'Calculadora de Línea Base',
            description: 'Ingrese coordenadas de punto inicial y final para calcular la longitud y acimut de la línea base, soportando análisis de propagación de errores.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        },
        {
            name: 'Calculadora de División de Hojas',
            description: 'Calcule el número de hoja según coordenadas de longitud y latitud, soportando múltiples escalas.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'Convertidor de Coordenadas',
            description: 'Convierta coordenadas de longitud y latitud entre diferentes sistemas de coordenadas, soportando múltiples sistemas de proyección.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Convertidor de Tiempo GNSS',
            description: 'Convierta entre tiempo UTC y segundos de semana GPS, tiempo BeiDou.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        }
    ],

    referencesTitle: 'Recursos de Referencia',
    references: [
        {
            name: 'Biblioteca GeographicLib',
            description: 'Biblioteca de código abierto enfocada en cálculos geoespaciales de alta precisión',
            url: 'https://geographiclib.sourceforge.io/'
        },
        {
            name: 'Biblioteca de Mapas Leaflet',
            description: 'Biblioteca JavaScript de mapas interactivos de código abierto',
            url: 'https://leafletjs.com/'
        },
        {
            name: 'Biblioteca de Análisis Espacial Turf.js',
            description: 'Biblioteca JavaScript para análisis geoespacial',
            url: 'https://turfjs.org/'
        },
        {
            name: 'Biblioteca jsPDF',
            description: 'Biblioteca JavaScript para generar documentos PDF en el lado del cliente',
            url: 'https://github.com/parallax/jsPDF'
        }
    ]
}