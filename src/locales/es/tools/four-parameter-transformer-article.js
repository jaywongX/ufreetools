export default {
    title: 'Transformador de Cuatro Parámetros: Guía por Lotes de Transformación de Similitud Planar y Helmert',
    functionTitle: '¿Cómo garantiza el Transformador de Cuatro Parámetros la Integración de Coordenadas Regionales con Un Solo Clic?',
    intro: '<p>El transformador de cuatro parámetros se basa en modelos de similitud planar, Bursa simplificado y Helmert, cubriendo todos los parámetros incluyendo traslación ΔX, ΔY, rotación θ y escala m. A través de algoritmos puramente frontend, el sistema puede completar cálculos directos/inversos de punto único y por lotes localmente en el navegador, proporcionando vectores residuales, RMSE, intervalos de confianza del 95% y mapas de calor de precisión en tiempo real, asegurando que cada integración de coordenadas sea rastreable, verificable y evaluable.</p>',
    useCasesTitle: 'Funciones de la Herramienta y Escenarios de Aplicación',
    useCases: {
        first: '<strong>Integración de Coordenadas de Ingeniería</strong>: En proyectos de renovación urbana o transporte ferroviario, mapea rápidamente sistemas de coordenadas independientes locales a sistemas de coordenadas de ingeniería unificados, mejorando la eficiencia de colaboración en diseño y construcción.',
        second: '<strong>Mosaico de Proyección Regional</strong>: Los resultados de teledetección y UAV a menudo provienen de diferentes zonas de proyección, el transformador de cuatro parámetros puede actualizar por lotes puntos de control planares para lograr un enlosado perfecto.',
        third: '<strong>Integración de Sistemas Planarios Personalizados</strong>: Integrando sistemas de coordenadas construidos internamente en fábricas o parques industriales, utilizando el modelo de cuatro parámetros para eliminar diferencias de escala y rotación, logrando consistencia entre planos y condiciones de campo.',
        fourth: '<strong>Revisión de Resultados y Aceptación</strong>: Genera histogramas de distribución de residuos e intervalos de confianza para presentar informes de evaluación cuantitativa a clientes o autoridades reguladoras.'
    },
    tipTitle: 'Imagen de la Página del Producto',
    logoAlt: 'Vista Previa del Producto del Transformador de Cuatro Parámetros',
    tipContent: 'Esta ilustración puede ser rastreada por motores de búsqueda para fragmentos multimedia enriquecidos en resultados de búsqueda.',
    conclusion: '<p>Con el transformador de cuatro parámetros, los equipos de topografía, diseño y supervisión pueden completar conversiones localizadas, revisiones de residuos y salida de informes sin filtrar coordenadas originales, cumpliendo con los requisitos del ciclo de vida del proyecto para rastreabilidad y verificación de datos. Para transformaciones adicionales de zonas de proyección, se puede usar con la <a href="https://www.ufreetools.com/tool/coordinate-zone-switcher" target="_blank">Herramienta de Cambio de Zona de Coordenadas por Lotes</a>; para estándares internacionales, visite <a href="https://www.ogc.org/" target="_blank" rel="noopener noreferrer">Transformación de Coordenadas OGC</a> para más orientación.</p>',
    faqTitle: 'Preguntas Frecuentes',
    faqs: {
        q1: {
            question: '¿Cómo garantiza el Transformador de Cuatro Parámetros la precisión y estabilidad de la transformación de similitud planar?',
            answer: '<p>La herramienta utiliza ajuste por mínimos cuadrados para resolver ΔX, ΔY, θ, m, y genera RMSE, residuo máximo e intervalo de confianza del 95%. Los usuarios pueden revisar operaciones matriciales a través de registros para verificar la precisión de la transformación de similitud planar.</p>'
        },
        q2: {
            question: '¿Se pueden omitir automáticamente coordenadas erróneas durante la importación por lotes?',
            answer: '<p>Sí. Si se encuentran recuentos de columnas inconsistentes o datos anormales durante la fase de análisis, el sistema registrará y omitirá esa entrada en el registro, continuando con el procesamiento de coordenadas restantes para garantizar una conversión por lotes ininterrumpida.</p>'
        },
        q3: {
            question: '¿El Transformador de Cuatro Parámetros admite cálculos directos e inversos?',
            answer: '<p>Sí. La herramienta proporciona botones de cálculo directo (fuente → destino) y cálculo inverso (destino → fuente), facilitando la comparación de coordenadas antes y después de la transformación y generando visualizaciones superpuestas.</p>'
        },
        q4: {
            question: '¿Cómo ver la distribución de residuos en el Transformador de Cuatro Parámetros?',
            answer: '<p>Después de completar la conversión, el sistema dibuja automáticamente gráficos de distribución de puntos de control, histogramas de residuos y cuadrículas de mapa de calor de precisión, ayudándole a determinar si los grupos de puntos son uniformes y los errores están concentrados.</p>'
        },
        q5: {
            question: '¿Se pueden citar informes generados por el Transformador de Cuatro Parámetros?',
            answer: '<p>Sí. El área de resultados admite exportación CSV, los registros se pueden copiar con un clic, y los gráficos se pueden capturar y embeber en informes técnicos, cumpliendo con los requisitos de aceptación o archivo de ingeniería.</p>'
        }
    },
    tutorialTitle: 'Guía de Operación del Transformador de Cuatro Parámetros',
    steps: {
        step1: {
            title: 'Preparar Coordenadas Fuente y Puntos de Control',
            description: 'Primero organice coordenadas fuente con coordenadas destino correspondientes, y confirme el formato del delimitador, asegurando que cada fila de datos contenga X, Y, y valores destino y nombres de puntos opcionales.'
        },
        step2: {
            title: 'Seleccionar Modelo e Ingresar Parámetros',
            description: 'En la "Configuración del Modelo", seleccione similitud planar, Bursa simplificado o modelo Helmert, ingrese ΔX, ΔY, θ, m, o déjelo en blanco para esperar resultados de ajuste.'
        },
        step3: {
            title: 'Cargar Ejemplo o Importar Archivo',
            description: 'Puede usar "Cargar Ejemplo" para una experiencia rápida, o arrastrar archivos CSV/TXT para importar grandes cantidades de coordenadas y analizarlas automáticamente.'
        },
        step4: {
            title: 'Realizar Ajuste y Conversión',
            description: 'Pegue coordenadas emparejadas en el área de solución de puntos comunes, haga clic en "Ajuste de Similitud Planar" para obtener parámetros óptimos, luego ejecute cálculo directo o inverso para completar la conversión por lotes.'
        },
        step5: {
            title: 'Ver Registros y Visualización',
            description: 'Los registros en tiempo real mostrarán procesos de análisis, ajuste, conversión y estadísticas, mientras dibujan distribución de puntos de control, histogramas de residuos y resumen de mapa de calor.'
        },
        step6: {
            title: 'Exportar Resultados y Compartir',
            description: 'Después de confirmar los resultados, exporte CSV y registros, y capture pantallas de gráficos de visualización para presentación de resultados, revisión o archivo de documentos.'
        }
    },
    successTitle: 'Implementación Completada',
    successContent: '¡Felicitaciones! Ha dominado todo el flujo de trabajo del transformador de cuatro parámetros y puede manejar con confianza diversas tareas de integración de coordenadas planares y generar informes de evaluación de precisión.',
    relatedToolsTitle: 'Herramientas Relacionadas Recomendadas',
    relatedTools: {
        first: {
            name: 'Calculadora de Hojas Cartográficas',
            description: 'Calcula números de hojas basados en coordenadas de latitud y longitud, compatible con múltiples escalas.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        second: {
            name: 'Convertidor de Tiempo GNSS',
            description: 'Herramienta para convertir entre tiempo GPS, tiempo BeiDou y tiempo UTC.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        third: {
            name: 'Calculadora de Área y Perímetro',
            description: 'Admite dibujar polígonos para calcular automáticamente área y perímetro, proporcionando múltiples interruptores de unidades.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        fourth: {
            name: 'Calculadora de Línea Base',
            description: 'Ingrese coordenadas de inicio y fin para calcular longitud y acimut de línea base, compatible con análisis de propagación de errores.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    },
    referencesTitle: 'Referencias',
    references: {
        first: {
            name: 'Asociación China de Ciencias de Información Geográfica - Normas y Regulaciones',
            description: 'Normas técnicas y regulaciones industriales de información geográfica china',
            url: 'http://www.cagis.org.cn/'
        },
        second: {
            name: 'Estándar ISO 19111 de Sistema de Coordenadas de Referencia',
            description: 'Estándar internacional autoritario para transformación de referencia y proyección de coordenadas.',
            url: 'https://www.iso.org/standard/74039.html'
        },
        third: {
            name: 'Estándares del Consorcio Geoespacial Abierto (OGC)',
            description: 'Estándares internacionales para transformación de datos geoespaciales',
            url: 'https://www.ogc.org/'
        }
    }
}