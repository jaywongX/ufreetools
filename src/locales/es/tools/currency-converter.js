export default {
  name: 'Convertidor de Monedas',
  description: 'Convierte rápidamente y con precisión entre diferentes monedas y consulta tasas de cambio',
  
  // Texto de la interfaz principal
  amount: 'Monto',
  from: 'Desde',
  to: 'Hacia',
  convert: 'Convertir',
  result: 'Resultado de la Conversión',
  swap: 'Intercambiar Monedas',
  rate: 'Tasa Actual',
  lastUpdated: 'Última Actualización',
  addCurrency: 'Añadir Moneda',
  
  // Historial
  history: 'Historial',
  clearHistory: 'Limpiar Historial',
  noHistory: 'No hay historial de conversiones',
  
  // Monedas
  currencies: {
    USD: 'Dólar Estadounidense',
    EUR: 'Euro',
    JPY: 'Yen Japonés',
    GBP: 'Libra Esterlina',
    AUD: 'Dólar Australiano',
    CAD: 'Dólar Canadiense',
    CHF: 'Franco Suizo',
    CNY: 'Yuan Chino',
    HKD: 'Dólar de Hong Kong',
    NZD: 'Dólar Neozelandés',
    SEK: 'Corona Sueca',
    KRW: 'Won Surcoreano',
    SGD: 'Dólar de Singapur',
    NOK: 'Corona Noruega',
    MXN: 'Peso Mexicano',
    INR: 'Rupia India',
    RUB: 'Rublo Ruso',
    ZAR: 'Rand Sudafricano',
    TRY: 'Lira Turca',
    BRL: 'Real Brasileño',
    TWD: 'Dólar Taiwanes',
    DKK: 'Corona Danesa',
    PLN: 'Złoty Polaco',
    THB: 'Baht Tailandés',
    IDR: 'Rupiah Indonesia',
    MYR: 'Ringgit Malasio',
    PHP: 'Peso Filipino'
  },
  
  // Mensajes de error
  errors: {
    invalidAmount: 'Por favor ingrese un monto válido',
    apiError: 'Error al obtener los datos de tipo de cambio',
    samecurrencies: 'Por favor seleccione monedas diferentes para la conversión'
  },
  
  // Consejos e información
  tips: {
    offline: 'Modo sin conexión: mostrando las tasas de cambio más recientemente almacenadas en caché',
    refreshing: 'Actualizando los datos de tipo de cambio...'
  },
  
  // Ver tasas históricas
  historicalRates: 'Tasas Históricas',
  dateRange: 'Rango de Fechas',
  from7days: 'Últimos 7 Días',
  from30days: 'Últimos 30 Días',
  from90days: 'Últimos 90 Días',
  customRange: 'Rango Personalizado',
  startDate: 'Fecha de Inicio',
  endDate: 'Fecha Final',
  viewChart: 'Ver Gráfico',
  
  // Configuración
  settings: 'Configuración',
  decimalPlaces: 'Decimales',
  autoUpdate: 'Actualización Automática de Tasas',
  defaultCurrency: 'Moneda Predeterminada',
  
  // Introducción de la herramienta
  aboutTitle: 'Acerca del Convertidor de Monedas',
  aboutDescription: 'El Convertidor de Monedas es una herramienta sencilla y eficiente que le ayuda a convertir rápidamente y con precisión entre diferentes monedas. Ya sea que esté planeando un viaje, involucrado en comercio internacional o investigando inversiones, esta herramienta cumplirá con sus necesidades.',
  
  featuresTitle: 'Características Principales',
  feature1: 'Soporte para más de 30 monedas principales',
  feature2: 'Acceso en tiempo real a las últimas tasas de cambio del mercado',
  feature3: 'Cálculos de conversión rápidos e intuitivos',
  feature4: 'Datos de tasas de cambio históricas y visualización gráfica',
  feature5: 'Guardar el historial de conversiones para referencia rápida',
  feature6: 'Configuración personalizable de visualización y moneda predeterminada',
  
  howToUseTitle: 'Cómo Usar',
  howToUseStep1: '1. Ingrese el monto que desea convertir',
  howToUseStep2: '2. Seleccione la moneda de origen (convertir desde)',
  howToUseStep3: '3. Seleccione la moneda de destino (convertir hacia)',
  howToUseStep4: '4. Haga clic en el botón "Convertir" para obtener el resultado',
  howToUseStep5: '5. Use el botón "Intercambiar Monedas" para cambiar rápidamente la dirección',
  
  tipsTitle: 'Consejos de Uso',
  tip1: 'Los datos de tasa de cambio se actualizan cada hora para garantizar resultados de conversión precisos',
  tip2: 'Agregue las monedas más utilizadas a sus favoritos para acceso rápido',
  tip3: 'Utilice la función de gráfico histórico para analizar tendencias de divisas',
  tip4: 'Los resultados de conversión se guardan automáticamente en el historial para referencia posterior',
  tip5: 'En modo sin conexión, la herramienta usará las tasas más recientes almacenadas en caché para los cálculos'
};