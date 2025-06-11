export default {
  name: 'Lista de Tareas',
  description: 'Cree, gestione y organice sus tareas y elementos por hacer',
  
  // Texto de la interfaz principal
  newTask: 'Nueva Tarea',
  addTask: 'Agregar Tarea',
  taskTitle: 'Título de la Tarea',
  description: 'Descripción',
  dueDate: 'Fecha de Vencimiento',
  priority: 'Prioridad',
  category: 'Categoría',
  status: 'Estado',
  actions: 'Acciones',
  
  // Prioridades
  priorities: {
    high: 'Alta',
    medium: 'Media',
    low: 'Baja'
  },
  
  // Categorías
  categories: {
    work: 'Trabajo',
    personal: 'Personal',
    shopping: 'Compras',
    health: 'Salud',
    finance: 'Finanzas',
    other: 'Otro'
  },
  
  // Estados
  statuses: {
    all: 'Todas',
    pending: 'Pendientes',
    completed: 'Completadas'
  },
  
  // Texto de botones
  edit: 'Editar',
  delete: 'Eliminar',
  save: 'Guardar',
  cancel: 'Cancelar',
  clear: 'Limpiar Completadas',
  clearAll: 'Limpiar Todo',
  
  // Filtro y ordenamiento
  filter: 'Filtrar',
  filterBy: 'Filtrar Por',
  sortBy: 'Ordenar Por',
  search: 'Buscar tareas...',
  
  // Opciones de ordenamiento
  sortOptions: {
    dateCreatedAsc: 'Fecha de Creación (Asc)',
    dateCreatedDesc: 'Fecha de Creación (Desc)',
    dueDateAsc: 'Fecha de Vencimiento (Asc)',
    dueDateDesc: 'Fecha de Vencimiento (Desc)',
    priorityAsc: 'Prioridad (Asc)',
    priorityDesc: 'Prioridad (Desc)',
    titleAsc: 'Título (A-Z)',
    titleDesc: 'Título (Z-A)'
  },
  
  // Estadísticas
  statistics: 'Estadísticas',
  totalTasks: 'Total de Tareas',
  completedTasks: 'Tareas Completadas',
  pendingTasks: 'Tareas Pendientes',
  completionRate: 'Tasa de Finalización',
  tasks: 'Tareas',
  
  // Mensajes y confirmaciones
  taskAdded: 'Tarea agregada',
  taskUpdated: 'Tarea actualizada',
  taskDeleted: 'Tarea eliminada',
  confirmDelete: '¿Está seguro que desea eliminar esta tarea?',
  confirmDeleteAll: '¿Está seguro que desea eliminar todas las tareas completadas?',
  confirmClearAll: '¿Está seguro que desea limpiar todas las tareas?',
  noTasks: 'Sin tareas',
  noFilteredTasks: 'No hay tareas que coincidan con los criterios de filtro',
  titleRequired: 'El título de la tarea es obligatorio',
  
  // Introducción a la herramienta
  aboutTitle: 'Acerca de Lista de Tareas',
  aboutDescription: 'Lista de Tareas es una herramienta simple y eficiente para gestionar actividades que necesita completar en su trabajo y vida personal. Al agregar, editar y marcar tareas, puede seguir claramente su progreso y mejorar su productividad.',
  
  featuresTitle: 'Características Principales',
  feature1: 'Agregar, editar y eliminar tareas',
  feature2: 'Establecer prioridades y fechas de vencimiento',
  feature3: 'Organizar tareas por categorías',
  feature4: 'Marcar tareas como completadas',
  feature5: 'Filtrar y ordenar tareas por múltiples criterios',
  feature6: 'Almacenamiento local para preservar sus datos',
  
  howToUseTitle: 'Cómo Usar',
  howToUseStep1: '1. Haga clic en el botón "Nueva Tarea" para agregar un nuevo elemento',
  howToUseStep2: '2. Complete el título, descripción, fecha de vencimiento y otros detalles',
  howToUseStep3: '3. Use los filtros y ordenamientos para organizar su lista de tareas',
  howToUseStep4: '4. Marque la casilla para indicar que una tarea está completada',
  howToUseStep5: '5. Utilice las funciones de edición y eliminación para administrar tareas existentes',
  
  tipsTitle: 'Consejos de Uso',
  tip1: 'Establezca una alta prioridad para las tareas importantes para manejarlas primero',
  tip2: 'Use categorías para organizar tareas en diferentes áreas',
  tip3: 'Limpie regularmente las tareas completadas para mantener su lista ordenada',
  tip4: 'Haga uso de los filtros para enfocarse en las tareas más importantes en cada momento',
  tip5: 'Establezca fechas de vencimiento adecuadas para ayudarse a planificar su tiempo efectivamente'
};