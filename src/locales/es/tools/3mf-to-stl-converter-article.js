export default {
    title: "Herramienta 3MF a STL: Guía de Uso del Convertidor de Formato de Impresión 3D en Línea",
    functionTitle: "¿Qué es la herramienta 3MF a STL y sus usos?",
    intro: "Nuestra <strong>herramienta 3MF a STL</strong> es una aplicación profesional en línea de conversión de formato de impresión 3D que puede convertir rápidamente archivos 3MF (3D Manufacturing Format) al formato STL (Stereo Lithography). Aunque 3MF es el formato más moderno, STL sigue siendo el formato de archivo más utilizado en la industria de la impresión 3D, soportado por casi todas las impresoras 3D y software de corte. Usando nuestro <strong>convertidor en línea de 3MF a STL</strong>, puede procesar por lotes múltiples archivos 3MF, configurar unidades del modelo, elegir el formato de salida (binario o ASCII), y completar la conversión sin instalar software.",

    useCasesTitle: "Casos de Uso Comunes para 3MF a STL",
    useCases: [
            "Convertir modelos de impresión 3D en formato 3MF a formato STL para mayor compatibilidad con dispositivos",
            "Convertir por lotes múltiples archivos 3MF a formato STL para mejorar la eficiencia del flujo de trabajo de impresión 3D",
            "Convertir archivos 3MF a formato STL para uso con impresoras 3D antiguas o software de corte",
            "Extraer información geométrica de archivos 3MF y convertirla a formato STL simple",
            "Preparar archivos para dispositivos de impresión 3D que no soportan formato 3MF",
            "Convertir modelos 3MF a formato STL para fácil intercambio de datos entre diferentes sistemas",
            "Optimizar el formato de archivo de impresión 3D, STL tiene la mayor compatibilidad",
            "Preparar archivos estandarizados en formato STL para proveedores de servicios de impresión 3D"
    ],

    tipTitle: "Consejo Profesional:",
    tipContent: "El formato 3MF soporta información rica como color y material, que se perderá al convertir a STL. Si necesita preservar información de color, considere usar otros formatos. Para impresión 3D, los milímetros son la unidad recomendada.",

    conclusion: "La herramienta de <strong>conversión de formato 3MF a STL</strong> es particularmente útil para entusiastas de la impresión 3D, diseñadores, ingenieros y usuarios que necesitan procesar grandes cantidades de modelos 3D. Usando nuestro convertidor en línea, puede convertir rápidamente formatos modernos de impresión 3D a un formato universal, asegurando compatibilidad con varios dispositivos y software de impresión 3D. Nuestra herramienta soporta procesamiento por lotes, proporciona funciones de selección de formato, y todo el procesamiento se realiza localmente en su navegador, asegurando la privacidad y seguridad de los datos de su modelo.",

    faqTitle: "Preguntas Frecuentes",
    faqs: [
        {
            question: "¿Qué formatos 3MF admite la herramienta 3MF a STL?",
            answer: "Nuestro <strong>convertidor en línea de 3MF a STL</strong> admite el formato de archivo 3MF (3D Manufacturing Format) estándar. 3MF es un formato XML basado en ZIP que contiene geometría del modelo, color, material y otra información. Nuestra herramienta analiza archivos 3MF, extrae datos geométricos y los convierte al formato STL."
        },
        {
            question: "¿Qué ventajas tiene el formato STL sobre 3MF?",
            answer: "Las ventajas del formato STL en impresión 3D incluyen: (1) Mayor compatibilidad, soportado por todas las impresoras 3D y software de corte; (2) Estructura de archivo simple con procesamiento rápido; (3) El estándar tradicional de la industria de impresión 3D; (4) Tamaño pequeño de archivo binario. Aunque 3MF tiene características más ricas, STL tiene mejor compatibilidad."
        },
        {
            question: "¿Qué información se perderá durante la conversión?",
            answer: "El formato 3MF soporta información rica como color, material, textura y parámetros de impresión, mientras que el formato STL solo contiene información geométrica (vértices y caras). Durante la conversión, la información de color, material y otra se perderá, solo se preserva la geometría del modelo. Si esta información es importante, considere usar otros métodos de conversión."
        },
        {
            question: "¿Cuál es la diferencia entre STL binario y STL ASCII?",
            answer: "STL binario usa codificación binaria con tamaño de archivo más pequeño y procesamiento más rápido, lo que lo convierte en el formato preferido para impresión 3D. STL ASCII usa formato de texto con tamaño de archivo más grande pero es más fácil de leer y editar para humanos. Nuestra herramienta soporta generar ambos formatos, y recomendamos elegir STL binario para la mayoría de los casos para mejor rendimiento."
        },
        {
            question: "¿En qué software se pueden usar los archivos STL convertidos?",
            answer: "El formato STL es ampliamente soportado por software principal de corte de impresión 3D, incluyendo Cura, PrusaSlicer, Simplify3D, 3D Builder (Windows) y más. Los archivos STL convertidos pueden importarse directamente a estos software para corte y preparación de impresión. STL es el formato más universal en la industria de impresión 3D."
        },
        {
            question: "¿Es seguro el proceso de conversión? ¿Se subirán los archivos a servidores?",
            answer: "¡Completamente seguro! Nuestra herramienta utiliza tecnología puramente front-end, y todo el procesamiento de archivos se realiza localmente en su navegador. Sus archivos 3MF no se subirán a ningún servidor, asegurando privacidad y seguridad de datos. Puede procesar con confianza archivos de modelos 3D que contienen secretos comerciales o diseños personales."
        },
        {
            question: "¿Cambiará el tamaño del archivo STL convertido?",
            answer: "Usualmente cambia. El formato 3MF usa compresión ZIP, por lo que los archivos son típicamente más pequeños que STL. Después de convertir a STL, el tamaño del archivo depende de la complejidad del modelo y conteo de triángulos. STL binario es típicamente 30-50% más pequeño que STL ASCII."
        }
    ],

    tutorialTitle: "Cómo usar la Herramienta 3MF a STL",
    steps: [
        {
            title: "Cargar Archivos 3MF",
            description: "Primero cargue los archivos 3MF que desea convertir al formato STL. Puede <strong>arrastrar y soltar archivos</strong> al área de carga, o <strong>hacer clic en explorar</strong> para seleccionar archivos. Nuestra herramienta soporta el formato de archivo 3MF estándar, y puede cargar múltiples archivos a la vez para procesamiento por lotes.",
            note: "Soporta cargar múltiples archivos 3MF simultáneamente, la herramienta los analizará y procesará automáticamente."
        },
        {
            title: "Establecer Parámetros de Conversión",
            description: "En el panel de control izquierdo, establezca el <strong>nombre del modelo</strong> (opcional) y el <strong>formato de salida</strong> (STL binario o STL ASCII). Se recomienda formato binario para menor tamaño de archivo.",
            note: "Si no está seguro del formato, STL binario es usualmente la opción más segura."
        },
        {
            title: "Convertir a Formato STL",
            description: "Después de completar la configuración, haga clic en el botón <strong>\"Convertir a STL\"</strong> para comenzar el procesamiento. La herramienta procesará todos los archivos 3MF cargados secuencialmente, mostrando información de progreso durante el procesamiento por lotes. El proceso de conversión incluye analizar datos 3MF, extraer información geométrica y generar la estructura del archivo STL.",
            note: "Por favor mantenga la página abierta durante la conversión. Los archivos grandes pueden tomar unos segundos."
        },
        {
            title: "Vista Previa de Resultados de Conversión",
            description: "Después de completar la conversión, el área de salida derecha mostrará información para todos los archivos STL convertidos. Puede ver información detallada incluyendo <strong>comparación de tamaño de archivo</strong>, <strong>conteo de triángulos</strong>, y <strong>conteo de vértices</strong>. Esta información ayuda a confirmar si los resultados de conversión cumplen las expectativas.",
            note: "Los archivos STL usan mallas triangulares para representar modelos, adecuados para impresión 3D."
        },
        {
            title: "Descargar Archivos STL",
            description: "Cuando esté satisfecho con los resultados de conversión, puede hacer clic en el botón <strong>\"Descargar STL\"</strong> debajo de cada archivo para guardar individualmente, o usar el botón <strong>\"Descarga por Lotes (ZIP)\"</strong> en la parte superior del área de salida para empaquetar todos los archivos STL convertidos en un archivo ZIP para descarga única. Los archivos descargados pueden importarse directamente a software de corte que soporta STL.",
            note: "Todo el procesamiento se realiza localmente en su navegador, asegurando la privacidad y seguridad de los datos de su modelo 3D."
        }
    ],

    successTitle: "¡Felicidades!",
    successContent: "Ha aprendido con éxito cómo usar nuestra herramienta 3MF a STL. Ahora puede convertir fácilmente modelos de impresión 3D en formato 3MF al formato universal STL, disfrutando de mayor compatibilidad con impresoras 3D.",

    relatedToolsTitle: "Herramientas Relacionadas que Pueden Interesarle",
    relatedTools: [
            {
                    "name": "Herramienta STL a 3MF",
                    "description": "Convertir archivos STL a formato 3MF, admite color, material e información rica, adecuado para impresión 3D moderna.",
                    "url": "https://www.ufreetools.com/tool/stl-to-3mf-converter"
            },
            {
                    "name": "Herramienta STL a OBJ",
                    "description": "Convertir archivos STL a formato OBJ, admite cálculo de normales y coordenadas de textura, adecuado para desarrollo de juegos y modelado complejo.",
                    "url": "https://www.ufreetools.com/tool/stl-to-obj-converter"
            },
            {
                    "name": "Herramienta Imagen a PNG",
                    "description": "Convertir JPG, WebP y otros formatos a formato PNG, admite fondos transparentes y procesamiento por lotes.",
                    "url": "https://www.ufreetools.com/tool/image-to-png"
            },
            {
                    "name": "Herramienta Imagen a JPG",
                    "description": "Convertir PNG, WebP y otros formatos a formato JPG, adecuado para fotos e imágenes complejas.",
                    "url": "https://www.ufreetools.com/tool/image-to-jpg"
            }
    ],

    referencesTitle: "Recursos de Referencia",
    references: [
            {
                    "name": "Especificación Oficial del Formato 3MF",
                    "description": "Comprenda la especificación técnica y estructura de archivo del formato 3MF",
                    "url": "https://3mf.io/specification/"
            },
            {
                    "name": "Descripción del Formato de Archivo STL",
                    "description": "Comprenda la historia y estructura del archivo del formato STL",
                    "url": "https://en.wikipedia.org/wiki/STL_%28file_format%29"
            },
            {
                    "name": "Comparación de Formatos de Archivo de Impresión 3D",
                    "description": "Características y escenarios aplicables de formatos STL, OBJ, 3MF y otros",
                    "url": "https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/"
            }
    ]
}
