export default {
  name: 'Planificador de Presupuesto de Viaje',
  description: 'Planifica y calcula tu presupuesto de viaje para gestionar fácilmente los gastos',
  
  // Elementos principales de la interfaz
  planYourTrip: 'Planifica Tu Viaje',
  destination: 'Destino',
  startDate: 'Fecha de Inicio',
  endDate: 'Fecha de Finalización',
  travelers: 'Número de Viajeros',
  currency: 'Moneda de Visualización',
  tripDuration: 'Duración del Viaje',
  totalBudget: 'Presupuesto Total',
  perPersonBudget: 'Presupuesto por Persona',
  perDayBudget: 'Presupuesto por Día',
  
  // Botones y acciones
  calculate: 'Calcular Presupuesto',
  reset: 'Restablecer',
  addExpense: 'Añadir Gasto',
  removeExpense: 'Eliminar',
  saveAsPDF: 'Guardar como PDF',
  
  // Títulos de categorías
  categories: {
    transport: 'Transporte',
    accommodation: 'Alojamiento',
    food: 'Alimentación y Bebidas',
    activities: 'Actividades y Atracciones',
    shopping: 'Compras',
    misc: 'Varios',
    emergency: 'Fondo de Emergencia'
  },
  
  // Opciones de transporte
  transport: {
    title: 'Gastos en Transporte',
    flight: 'Vuelos',
    train: 'Trenes',
    bus: 'Autobuses',
    car: 'Alquiler/Combustible de Coche',
    taxi: 'Taxis/Viajes compartidos',
    publicTransport: 'Transporte Público',
    other: 'Otro Transporte'
  },
  
  // Opciones de alojamiento
  accommodation: {
    title: 'Gastos en Alojamiento',
    hotel: 'Hoteles',
    hostel: 'Hostales',
    apartment: 'Apartamentos/Airbnb',
    camping: 'Campamento',
    other: 'Otro Alojamiento'
  },
  
  // Opciones de alimentación
  food: {
    title: 'Gastos en Alimentación y Bebidas',
    restaurants: 'Restaurantes',
    streetFood: 'Comida de Calle',
    groceries: 'Productos Alimenticios',
    drinks: 'Bebidas/Alcohol',
    other: 'Otra Alimentación'
  },
  
  // Opciones de actividades
  activities: {
    title: 'Actividades y Atracciones',
    attractions: 'Entradas a Atracciones',
    tours: 'Tours/Actividades Guiadas',
    entertainment: 'Entretenimiento',
    other: 'Otras Actividades'
  },
  
  // Gastos varios
  misc: {
    title: 'Gastos Varios',
    insurance: 'Seguro de Viaje',
    visa: 'Tarjetas de Visado',
    souvenirs: 'Recuerdos',
    internet: 'Internet/Datos',
    tips: 'Propinas',
    other: 'Otros Gastos'
  },
  
  // Encabezados de tabla
  table: {
    category: 'Categoría',
    description: 'Descripción',
    amount: 'Cantidad',
    actions: 'Acciones'
  },
  
  // Estadísticas y análisis
  analysis: {
    title: 'Análisis del Presupuesto',
    summary: 'Resumen del Presupuesto',
    breakdown: 'Desglose',
    distribution: 'Distribución del Presupuesto',
    dailyAverage: 'Promedio Diario',
    suggestions: 'Sugerencias de Presupuesto'
  },
  
  // Monedas
  currencies: {
    CNY: 'Yuan Chino (¥)',
    USD: 'Dólar Estadounidense ($)',
    EUR: 'Euro (€)',
    JPY: 'Yen Japonés (¥)',
    GBP: 'Libra Esterlina (£)',
    KRW: 'Won Surcoreano (₩)',
    AUD: 'Dólar Australiano ($)',
    CAD: 'Dólar Canadiense ($)',
    THB: 'Baht Tailandés (฿)',
    SGD: 'Dólar Singapurense ($)'
  },
  
  // Destinos comunes
  destinations: {
    domestic: 'Destinos Nacionales',
    international: 'Destinos Internacionales',
    popularCities: 'Ciudades Populares',
    beijing: 'Pekín',
    shanghai: 'Shanghái',
    guangzhou: 'Guangzhou',
    shenzhen: 'Shenzhen',
    hangzhou: 'Hangzhou',
    chengdu: 'Chengdu',
    xian: 'Xi\'an',
    sanya: 'Sanya',
    tokyo: 'Tokio',
    osaka: 'Osaka',
    seoul: 'Seúl',
    bangkok: 'Bangkok',
    singapore: 'Singapur',
    paris: 'París',
    london: 'Londres',
    newyork: 'Nueva York',
    sydney: 'Sídney',
    custom: 'Destino Personalizado'
  },
  
  // Consejos y sugerencias
  tips: {
    general: 'Consejos Generales',
    saveMoney: 'Consejos para Ahorrar Dinero',
    localCurrency: 'Consejos sobre la Moneda Local',
    emergencyFund: 'Considera apartar un 10-15% de tu presupuesto para emergencias',
    transport: 'Reservar vuelos con antelación normalmente ahorra dinero',
    accommodation: 'El alojamiento con instalaciones para cocinar puede reducir los gastos en comida',
    food: 'Los locales suelen ser más económicos que las cadenas internacionales',
    planning: 'Crear un itinerario diario detallado ayuda a controlar el gasto',
    extraCosts: 'No olvides incluir pequeños gastos como propinas, Internet y tarjetas de transporte'
  },
  
  // Mensajes
  messages: {
    success: 'Presupuesto calculado correctamente',
    error: 'Por favor rellena todos los campos obligatorios',
    dateError: 'La fecha final debe ser posterior a la inicial',
    saved: 'Plan de presupuesto guardado',
    deleted: 'Plan de presupuesto eliminado',
    highBudget: 'Tu presupuesto parece superior al promedio para este destino',
    lowBudget: 'Tu presupuesto podría ser demasiado bajo, asegúrate de cubrir todos los gastos necesarios'
  },
  
  // Introducción del pie de página
  about: {
    title: 'Acerca del Planificador de Presupuesto de Viaje',
    description: 'El Planificador de Presupuesto de Viaje es una herramienta que te ayudará a gestionar tus gastos durante el viaje, haciendo que tu experiencia sea placentera y económica. Planificando tus gastos con detalle, puedes evitar el estrés financiero durante el recorrido y disfrutar plenamente de tu experiencia de viaje.',
    
    featuresTitle: 'Características Principales',
    feature1: 'Crear presupuestos razonables según destino, duración y tamaño del grupo',
    feature2: 'Desglosar los gastos en transporte, alojamiento, comida, actividades y más',
    feature3: 'Ofrecer análisis y visualización del presupuesto',
    feature4: 'Soportar múltiples monedas y conversiones',
    feature5: 'Dar consejos prácticos para ahorrar dinero mientras viajas',
    feature6: 'Exportar y guardar planes de presupuesto',
    
    benefitsTitle: 'Beneficios',
    benefit1: 'Evitar gastar demasiado durante el viaje',
    benefit2: 'Distribuir eficazmente los fondos entre distintos aspectos del viaje',
    benefit3: 'Reducir el estrés financiero durante el viaje',
    benefit4: 'Mejorar la eficiencia en la planificación del viaje',
    benefit5: 'Adaptarse a diferentes estilos de viaje y necesidades presupuestarias',
    
    tipsTitle: 'Consejos para Planificar el Presupuesto',
    tip1: 'Ajusta tu presupuesto según el costo de vida en tu destino',
    tip2: 'Reserva un 10-15% de tus fondos para situaciones imprevistas',
    tip3: 'Viajar en temporada baja puede reducir significativamente los costos de alojamiento y transporte',
    tip4: 'Ten cuidado con las tarifas por transacción internacional al usar tarjetas de crédito en el extranjero',
    tip5: 'Considera adquirir un seguro de viaje para posibles emergencias'
  }
};