export default {
  name: 'Ejemplos de Diagramas',
  description: 'Navegue y utilice diversos ejemplos de diagramas para satisfacer diferentes necesidades de modelado',
  title: 'Ejemplos de Flujo Avanzado',

  categories: {
    title: 'Categorías',
    flowcharts: 'Flujogramas',
    uml: 'Diagramas UML',
    network: 'Diagramas de Red',
    architecture: 'Diagramas de Arquitectura',
    entity: 'Diagramas de Relación de Entidades',
    sequence: 'Diagramas de Secuencia',
    mindmaps: 'Mapas Mentales',
    gantt: 'Gráficos de Gantt',
    other: 'Otros Diagramas'
  },

  actions: {
    search: 'Buscar Ejemplos',
    filter: 'Filtrar por Categoría',
    sortBy: 'Ordenar Por',
    useExample: 'Usar Este Ejemplo',
    viewFull: 'Ver Tamaño Completo',
    copyCode: 'Copiar Código',
    addToFavorites: 'Añadir a Favoritos',
    removeFavorite: 'Eliminar de Favoritos'
  },

  sortOptions: {
    popularity: 'Popularidad',
    newest: 'Más Recientes',
    alphabetical: 'Orden Alfabético',
    complexity: 'Complejidad'
  },

  exampleDetail: {
    title: 'Detalles del Ejemplo',
    description: 'Descripción',
    syntax: 'Sintaxis',
    codeView: 'Vista de Código',
    diagramView: 'Vista del Diagrama',
    complexity: 'Complejidad',
    tags: 'Etiquetas',
    relatedExamples: 'Ejemplos Relacionados'
  },

  complexityLevels: {
    beginner: 'Principiante',
    intermediate: 'Intermedio',
    advanced: 'Avanzado'
  },

  messages: {
    copied: 'El código ha sido copiado al portapapeles',
    copyFailed: 'Fallo en la copia, por favor cópielo manualmente',
    added: 'Agregado a favoritos',
    removed: 'Eliminado de favoritos',
    noResults: 'No hay ejemplos que coincidan con sus criterios de búsqueda',
    loading: 'Cargando ejemplos...'
  },

  filters: {
    all: 'Todas las Categorías',
    favorites: 'Solo Favoritos',
    recently: 'Vistos Recientemente'
  },

  examples: {
    softwareDevelopment: 'Flujo de Desarrollo de Software',
    projectManagement: 'Gráfico de Gantt de Gestión de Proyectos',
    userRegistration: 'Proceso de Registro de Usuarios'
  },

  exampleCodes: {
    softwareDevelopment: `graph TD
    A[Análisis de Requisitos] --> B[Diseño del Sistema]
    B --> C[Implementación de Código]
    C --> D[Pruebas Unitarias]
    D --> E(¿Prueba Pasada?)
    E -- No --> C
    E -- Sí --> F[Integración del Sistema]
    F --> G[Pruebas del Sistema]
    G --> H(¿Prueba Pasada?)
    H -- No --> F
    H -- Sí --> I[Despliegue]
    I --> J[Mantenimiento y Actualizaciones]
    style A fill:#f9d5e5,stroke:#333,stroke-width:2px
    style E fill:#e3f0f7,stroke:#333,stroke-width:2px
    style H fill:#e3f0f7,stroke:#333,stroke-width:2px
    style I fill:#d5f5e3,stroke:#333,stroke-width:2px
    style J fill:#d5f5e3,stroke:#333,stroke-width:2px`,
    projectManagement: `gantt
    title Plan de Desarrollo de Producto
    dateFormat  YYYY-MM-DD
    axisFormat  %m-%d
    section Planificación
    Investigación de Mercado           :a1, 2023-01-01, 15d
    Análisis de Requisitos      :a2, after a1, 10d
    Planificación del Producto          :a3, after a2, 5d
    section Diseño
    Diseño del Prototipo          :b1, after a3, 15d
    Diseño de la Interfaz                :b2, after b1, 10d
    Pruebas de Usuario             :b3, after b2, 5d
    section Desarrollo
    Arquitectura Backend     :c1, after b1, 20d
    Desarrollo Frontend    :c2, after b2, 15d
    Integración de API         :c3, after c1, 10d
    section Pruebas
    Pruebas Unitarias            :d1, after c2, 8d
    Pruebas de Integración     :d2, after c3, 7d
    Pruebas de Rendimiento     :d3, after d2, 5d
    section Liberación
    Revisión Interna         :e1, after d3, 5d
    Preparación para el Despliegue  :e2, after e1, 2d
    Liberación Oficial        :milestone, after e2, 0d`,
    userRegistration: `sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant Database
    participant EmailService
    User->>Frontend: Llenar formulario de registro
    Frontend->>Frontend: Validación del formulario
    Frontend->>Backend: Enviar información de registro
    Backend->>Backend: Validar datos del usuario
    Backend->>Database: Verificar si el usuario existe
    Database-->>Backend: Devolver resultado de verificación
    alt El usuario ya existe
        Backend-->>Frontend: Devolver error de usuario ya existente
        Frontend-->>User: Mostrar mensaje de error
    else El usuario no existe
        Backend->>Database: Crear nuevo registro de usuario
        Backend->>EmailService: Enviar correo de verificación
        EmailService-->>User: Enviar correo con enlace de verificación
        Backend-->>Frontend: Devolver registro exitoso
        Frontend-->>User: Mostrar mensaje de registro exitoso
    end
    User->>EmailService: Hacer clic en el enlace de verificación
    EmailService->>Backend: Solicitud de verificación
    Backend->>Database: Actualizar estado del usuario como verificado
    Backend-->>User: Redirigir a la página de inicio de sesión`
  }
};