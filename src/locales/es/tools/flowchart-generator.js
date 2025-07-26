export default {
  name: 'Generador de Diagramas de Flujo',
  description: 'Crear diagramas de flujo y diagramas utilizando una sintaxis basada en texto simple',
  title: 'Generador de Diagramas y Flujogramas',
  renderBtn: 'Dibujar Diagrama',
  resetBtn: 'Restablecer',
  downloadSvgBtn: 'Descargar SVG',
  copySvgBtn: 'Copiar SVG',

  input: {
    title: 'Definición de Diagrama',
    placeholder: 'Ingrese código de sintaxis Mermaid...',
    loadExample: 'Cargar Ejemplo',
    clear: 'Limpiar',
    uploadFile: 'Subir Archivo'
  },

  output: {
    title: 'Diagrama Generado',
    downloadImage: 'Descargar Imagen',
    downloadSVG: 'Descargar SVG',
    copyImage: 'Copiar Imagen',
    copySVG: 'Copiar SVG',
    zoomIn: 'Acercar',
    zoomOut: 'Alejar',
    fitView: 'Ajustar Vista',
    resetView: 'Restablecer Vista',
    preview: 'Vista Previa',
    code: 'Código Mermaid'
  },

  options: {
    title: 'Opciones',
    theme: 'Tema',
    orientation: 'Orientación',
    nodeShape: 'Forma del Nodo',
    arrowStyle: 'Estilo de Flecha',
    lineStyle: 'Estilo de Línea',
    textPosition: 'Posición del Texto',
    fontSize: 'Tamaño de Fuente',
    fontFamily: 'Fuente',
    showGrid: 'Mostrar Cuadrícula',
    autoRender: 'Renderizar Automáticamente'
  },

  themes: {
    default: 'Predeterminado',
    simple: 'Simple',
    forest: 'Bosque',
    neutral: 'Neutro',
    dark: 'Oscuro',
    business: 'Empresarial',
    base: 'Base',
    custom: 'Personalizado'
  },

  orientations: {
    topToBottom: 'De Arriba a Abajo',
    bottomToTop: 'De Abajo a Arriba',
    leftToRight: 'De Izquierda a Derecha',
    rightToLeft: 'De Derecha a Izquierda'
  },

  nodeShapes: {
    rectangle: 'Rectángulo',
    roundedRectangle: 'Rectángulo Redondeado',
    circle: 'Círculo',
    diamond: 'Diamante',
    hexagon: 'Hexágono',
    parallelogram: 'Paralelogramo'
  },

  arrowStyles: {
    arrow: 'Flecha',
    open: 'Abierta',
    filled: 'Llena',
    diamond: 'Diamante',
    circle: 'Círculo'
  },

  lineStyles: {
    solid: 'Sólido',
    dashed: 'Punteado',
    dotted: 'Puntos',
    curved: 'Curvado',
    straight: 'Recto',
    orthogonal: 'Ortogonal'
  },

  syntax: {
    title: 'Ayuda de Sintaxis',
    node: 'Nodo',
    edge: 'Conexión',
    subgraph: 'Subgrafo',
    comment: 'Comentario',
    styling: 'Estilo',
    showMore: 'Mostrar Más'
  },

  actions: {
    render: 'Dibujar Diagrama',
    save: 'Guardar Diagrama',
    export: 'Exportar',
    share: 'Compartir'
  },

  messages: {
    renderSuccess: 'Flujograma dibujado correctamente',
    renderError: 'Error al dibujar el flujograma: {error}',
    syntaxError: 'Error de sintaxis: {error}',
    saved: 'El diagrama ha sido guardado',
    copied: 'El código SVG ha sido copiado al portapapeles',
    copyFailed: 'Error al copiar, por favor cópielo manualmente',
    exported: 'El flujograma ha sido exportado',
    emptyCode: 'Por favor ingrese código de sintaxis Mermaid',
    rendering: 'Dibujando...',
    errorTitle: 'Error de Dibujo'
  },

  examples: {
    flowchart: 'Flujograma',
    classDiagram: 'Diagrama de Clases',
    sequenceDiagram: 'Diagrama de Secuencia',
    entityRelationship: 'Diagrama de Relación de Entidades',
    gantt: 'Gráfico de Gantt',
    stateDiagram: 'Diagrama de Estados',
    pieChart: 'Gráfico de Pastel',
    userJourney: 'Mapa de Viaje del Usuario'
  },

  exampleCodes: {
    flowchart: `graph TD
    A[Inicio] --> B{¿Es correcto?}
    B -->|Sí| C[Resultado Correcto]
    B -->|No| D[Resultado Incorrecto]
    C --> E[Fin]
    D --> E
`,
    sequenceDiagram: `sequenceDiagram
    participant Cliente
    participant Servidor
    Cliente->>Servidor: Solicitar datos
    Servidor-->>Cliente: Responder con datos
    Cliente->>Servidor: Enviar formulario
    Servidor-->>Cliente: Confirmar envío
`,
    gantt: `gantt
    title Cronograma de Progreso del Proyecto
    dateFormat  YYYY-MM-DD
    section Fase de Planificación
    Recopilación de Requisitos           :a1, 2023-01-01, 30d
    Diseño del Sistema                  :after a1, 20d
    section Fase de Desarrollo
    Desarrollo del Backend            :2023-02-20, 45d
    Desarrollo del Frontend           :2023-02-25, 40d
    section Fase de Pruebas
    Pruebas del Sistema                :2023-04-05, 20d
    Pruebas del Usuario               :2023-04-20, 15d
    section Fase de Implementación
    Implementación                    :2023-05-05, 10d
`,
    stateDiagram: `stateDiagram-v2
    [*] --> Editando
    Editando --> Revisión: Enviar para revisión
    Revisión --> Rechazado: Rechazar
    Revisión --> Publicado: Aprobar
    Rechazado --> Editando: Revisar y reenviar
    Publicado --> [*]
`,
    pieChart: `pie
    title Distribución de Fuentes de Tráfico Web
    "Motores de Búsqueda" : 42.7
    "Acceso Directo" : 28.9
    "Redes Sociales" : 18.5
    "Otros Canales" : 9.9
`,
    classDiagram: `classDiagram
    class Animal {
        +String nombre
        +int edad
        +hacerSonido() void
    }
    class Perro {
        +String raza
        +buscar() void
    }
    class Gato {
        +String color
        +trepar() void
    }
    Animal <|-- Perro
    Animal <|-- Gato
`
  }
};