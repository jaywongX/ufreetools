export default {
    title: "Herramienta STL a GLB: Guía de Uso del Convertidor de Formato de Modelo 3D en Línea",
    functionTitle: "¿Qué es la herramienta STL a GLB y sus usos?",
    intro: "Nuestra <strong>herramienta STL a GLB</strong> es una aplicación profesional en línea de conversión de formato de modelo 3D que puede convertir rápidamente archivos STL (Stereo Lithography) al formato GLB (Binary glTF). GLB es la versión binaria de glTF, un formato de archivo 3D eficiente ampliamente utilizado en desarrollo de juegos, aplicaciones AR/VR, visualización 3D web y más. Usando nuestro <strong>convertidor en línea de STL a GLB</strong>, puede procesar por lotes múltiples archivos STL, configurar unidades del modelo, ajustar colores de material, y completar la conversión sin instalar software.",

    useCasesTitle: "Casos de Uso Comunes para STL a GLB",
    useCases: [
        "Convertir modelos de impresión 3D en formato STL a formato GLB para desarrollo de juegos o aplicaciones AR/VR",
        "Convertir por lotes múltiples archivos STL a formato GLB para mejorar la eficiencia de producción de contenido 3D",
        "Preparar archivos de modelo en formato GLB para visualización 3D web",
        "Convertir archivos STL a formato GLB para uso en motores de juegos como Unity, Unreal Engine",
        "Preparar recursos de modelo 3D optimizados para aplicaciones AR/VR",
        "Convertir modelos STL a formato GLB con soporte de material y textura",
        "Preparar formatos de modelo 3D ligeros para aplicaciones móviles",
        "Migrar modelos STL a formato GLB para fácil intercambio entre diferentes plataformas"
    ],

    tipTitle: "Consejo Profesional:",
    tipContent: "El formato GLB soporta información rica incluyendo materiales, texturas y animaciones, con tamaños de archivo pequeños y carga rápida. Los archivos STL solo contienen información geométrica, por lo que se pueden agregar colores de material al convertir a GLB. Para aplicaciones web, GLB es el formato preferido.",

    conclusion: "La herramienta de <strong>conversión de formato STL a GLB</strong> es particularmente útil para desarrolladores de juegos, diseñadores AR/VR, desarrolladores web y usuarios que necesitan procesar modelos 3D. Usando nuestro convertidor en línea, puede convertir rápidamente modelos de impresión 3D a formatos adecuados para juegos y aplicaciones AR/VR, con soporte de información de material y optimización del tamaño de archivo. Nuestra herramienta soporta procesamiento por lotes, proporciona configuraciones de color de material, y todo el procesamiento se realiza localmente en su navegador, asegurando la privacidad y seguridad de los datos de su modelo.",

    faqTitle: "Preguntas Frecuentes",
    faqs: [
        {
            question: "¿Qué formatos STL admite la herramienta STL a GLB?",
            answer: "Nuestro <strong>convertidor en línea de STL a GLB</strong> admite ambos formatos principales de archivo STL: STL binario y STL ASCII. La herramienta detecta automáticamente el formato del archivo y lo procesa en consecuencia. Ya sean archivos STL exportados de software CAD o descargados de bibliotecas de modelos 3D, pueden convertirse sin problemas al formato GLB."
        },
        {
            question: "¿Qué ventajas tiene el formato GLB sobre STL?",
            answer: "El formato GLB tiene varias ventajas sobre STL: (1) Admite información de material, textura y animación; (2) Usa formato binario con tamaño de archivo pequeño; (3) Carga rápida, adecuado para renderizado en tiempo real; (4) Soportado por motores de juegos principales y plataformas AR/VR; (5) Admite materiales PBR (Renderizado Basado en Física). Para juegos y aplicaciones AR/VR, GLB es el formato más recomendado."
        },
        {
            question: "¿Cómo configurar el color del material durante la conversión?",
            answer: "Nuestra <strong>herramienta STL a GLB</strong> proporciona configuraciones de color de material. Puede elegir colores preestablecidos o personalizar valores de color RGB. El color establecido se aplicará a toda la superficie del modelo. Si necesita efectos de material más complejos, puede usar software 3D para mayor edición después de importar el archivo GLB."
        },
        {
            question: "¿En qué software se pueden usar los archivos GLB convertidos?",
            answer: "El formato GLB es ampliamente soportado por motores de juegos principales y plataformas 3D, incluyendo Unity, Unreal Engine, Blender, Three.js, Babylon.js y más. Los archivos GLB convertidos pueden importarse directamente a estos software para edición adicional, renderizado o integración en juegos y aplicaciones AR/VR."
        },
        {
            question: "¿Es seguro el proceso de conversión? ¿Se subirán los archivos a servidores?",
            answer: "¡Completamente seguro! Nuestra herramienta utiliza tecnología puramente front-end, y todo el procesamiento de archivos se realiza localmente en su navegador. Sus archivos STL no se subirán a ningún servidor, asegurando privacidad y seguridad de datos."
        },
        {
            question: "¿Cambiará el tamaño del archivo GLB convertido?",
            answer: "Usualmente cambia. El formato GLB usa codificación binaria y tecnología de compresión, con tamaño de archivo típicamente menor que STL. Para modelos simples, los archivos GLB pueden ser ligeramente más grandes que STL binario (debido a la inclusión de información de material); para modelos complejos, los archivos GLB suelen ser más pequeños."
        },
        {
            question: "¿Qué características 3D admite el formato GLB?",
            answer: "El formato GLB admite muchas características 3D: datos geométricos, materiales PBR, mapeo de texturas, animación esquelética, objetivos de morfo, jerarquías de escena y más. Basado en el estándar glTF 2.0, es el formato recomendado para Web 3D y renderizado en tiempo real."
        }
    ],

    tutorialTitle: "Cómo usar la Herramienta STL a GLB",
    steps: [
        {
            title: "Cargar Archivos STL",
            description: "Primero cargue los archivos STL que desea convertir al formato GLB. Puede <strong>arrastrar y soltar archivos</strong> al área de carga, o <strong>hacer clic en explorar</strong> para seleccionar archivos. Nuestra herramienta admite tanto formatos STL binario como ASCII, y puede cargar múltiples archivos a la vez para procesamiento por lotes.",
            note: "Admite cargar múltiples archivos STL simultáneamente, la herramienta los reconocerá y procesará automáticamente."
        },
        {
            title: "Establecer Parámetros de Conversión",
            description: "En el panel de control izquierdo, establezca el <strong>nombre del modelo</strong> (opcional) y la <strong>unidad del modelo</strong>. Elija el <strong>color del material</strong>, puede usar colores preestablecidos o personalizar valores RGB. Elegir la unidad correcta es muy importante para asegurar dimensiones precisas del modelo.",
            note: "Si no está seguro de las unidades, seleccionar milímetros (mm) es usualmente la opción más segura."
        },
        {
            title: "Convertir a Formato GLB",
            description: "Después de completar la configuración, haga clic en el botón <strong>\"Convertir a GLB\"</strong> para comenzar el procesamiento. La herramienta procesará todos los archivos STL cargados secuencialmente, mostrando información de progreso. El proceso de conversión incluye analizar datos STL, calcular normales y generar datos binarios GLB.",
            note: "Por favor mantenga la página abierta durante la conversión. Los archivos grandes pueden tomar unos segundos."
        },
        {
            title: "Vista Previa de Resultados",
            description: "Después de completar la conversión, el área de salida derecha mostrará información para todos los archivos GLB convertidos. Puede ver información detallada incluyendo <strong>comparación de tamaño de archivo</strong>, <strong>conteo de triángulos</strong>, y <strong>conteo de vértices</strong>.",
            note: "Los archivos GLB suelen ser más pequeños que los archivos STL originales, adecuados para renderizado en tiempo real."
        },
        {
            title: "Descargar Archivos GLB",
            description: "Cuando esté satisfecho con los resultados, puede hacer clic en el botón <strong>\"Descargar GLB\"</strong> debajo de cada archivo para guardar individualmente, o usar el botón <strong>\"Descarga por Lotes (ZIP)\"</strong> en la parte superior del área de salida para empaquetar todos los archivos GLB convertidos en un archivo ZIP. Los archivos descargados pueden importarse directamente a motores de juegos o software 3D que soporta GLB.",
            note: "Todo el procesamiento se realiza localmente en su navegador, asegurando la privacidad y seguridad de los datos de su modelo 3D."
        }
    ],

    successTitle: "¡Felicidades!",
    successContent: "Ha aprendido con éxito cómo usar nuestra herramienta STL a GLB. Ahora puede convertir fácilmente modelos de impresión 3D en formato STL al formato GLB adecuado para desarrollo de juegos y aplicaciones AR/VR.",

    relatedToolsTitle: "Herramientas Relacionadas que Pueden Interesarle",
    relatedTools: [
        {
            name: "Herramienta STL a OBJ",
            description: "Convertir archivos STL a formato OBJ, admite cálculo de normales y coordenadas de textura, adecuado para desarrollo de juegos y modelado complejo.",
            url: "https://www.ufreetools.com/tool/stl-to-obj-converter"
        },
        {
            name: "Herramienta STL a 3MF",
            description: "Convertir archivos STL a formato 3MF, admite color, material e información rica, adecuado para impresión 3D moderna.",
            url: "https://www.ufreetools.com/tool/stl-to-3mf-converter"
        },
        {
            name: "Herramienta Imagen a PNG",
            description: "Convertir JPG, WebP y otros formatos a formato PNG, admite fondos transparentes y procesamiento por lotes.",
            url: "https://www.ufreetools.com/tool/image-to-png"
        },
        {
            name: "Herramienta Imagen a JPG",
            description: "Convertir PNG, WebP y otros formatos a formato JPG, adecuado para fotos e imágenes complejas.",
            url: "https://www.ufreetools.com/tool/image-to-jpg"
        }
    ],

    referencesTitle: "Recursos de Referencia",
    references: [
        {
            name: "Especificación Oficial del Formato glTF",
            description: "Comprenda la especificación técnica y estructura de archivo del formato glTF/GLB",
            url: "https://www.khronos.org/gltf/"
        },
        {
            name: "Descripción del Formato de Archivo STL",
            description: "Comprenda la historia y estructura del archivo del formato STL",
            url: "https://en.wikipedia.org/wiki/STL_%28file_format%29"
        },
        {
            name: "Comparación de Formatos de Archivo 3D",
            description: "Características y escenarios aplicables de formatos STL, OBJ, glTF y otros",
            url: "https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/"
        }
    ]
}
