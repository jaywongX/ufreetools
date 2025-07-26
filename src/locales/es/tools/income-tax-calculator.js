export default {
  name: 'Calculadora de Impuesto sobre la Renta',
  description: 'Calcula el impuesto sobre la renta personal y salario neto a partir de tus ingresos',

  // Texto principal de la interfaz
  taxSystem: 'Sistema Tributario',

  china: 'China',
  usa: 'EE. UU.',
  uk: 'Reino Unido',
  monthlyIncome: 'Ingreso Mensual',
  annualIncome: 'Ingreso Anual',
  socialSecurity: 'Seguridad Social y Fondos',
  socialSecurityAmount: 'Monto de Seguridad Social',
  socialSecurityPercent: 'Porcentaje de Seguridad Social',
  socialSecurityBase: 'Base de Seguridad Social',
  deductions: 'Deducciones Especiales',
  childrenEducation: 'Educación Infantil',
  continuingEducation: 'Educación Continua',
  housingLoanInterest: 'Interés del Préstamo Hipotecario',
  housingRent: 'Alquiler de Vivienda',
  elderlySupport: 'Cuidado de Adultos Mayores',
  medicalTreatment: 'Tratamiento Médico',
  otherDeductions: 'Otras Deducciones',
  calculate: 'Calcular',
  reset: 'Restablecer',

  // Área de resultados
  results: 'Resultados',

  taxableIncome: 'Ingreso Imponible',
  taxRate: 'Tasa de Impuesto',
  quickDeduction: 'Deducción Rápida',
  taxPayable: 'Impuesto a Pagar',
  afterTaxIncome: 'Ingreso Neto',
  effectiveTaxRate: 'Tasa Efectiva de Impuesto',
  monthlyBreakdown: 'Desglose Mensual',

  // Área de gráficos
  taxAnalysis: 'Análisis de Impuestos',

  incomeDistribution: 'Distribución de Ingresos',
  income: 'Ingreso',
  tax: 'Impuesto',
  takeHome: 'Ingreso Neto',

  // Tramos impositivos
  taxBrackets: 'Tramos Impositivos',

  bracketRange: 'Rango del Tramo',
  rate: 'Tasa',

  // Desglose mensual
  month: 'Mes',

  cumulativeIncome: 'Ingreso Acumulado',
  cumulativeDeduction: 'Deducción Acumulada',
  cumulativeTaxable: 'Ingreso Imponible Acumulado',
  cumulativeTax: 'Impuesto Acumulado',
  previousTax: 'Impuesto Pagado Anteriormente',
  currentMonthTax: 'Impuesto del Mes Actual',

  // Selección de ciudad
  city: 'Ciudad',

  firstTier: 'Ciudad Principal',
  secondTier: 'Ciudad Secundaria',
  otherCity: 'Otra Ciudad',

  // Introducción a la herramienta
  aboutTitle: 'Acerca del Impuesto sobre la Renta',

  aboutDescription: 'El impuesto sobre la renta se aplica al ingreso individual en la mayoría de los países. En China, se utiliza un sistema progresivo con tasas que van del 3% al 45%, siendo los mayores ingresos sujetos a mayores tasas impositivas.',
  howToUseTitle: 'Cómo Usar Esta Calculadora',
  howToUseStep1: '1. Selecciona el sistema tributario (actualmente soporta el sistema chino)',
  howToUseStep2: '2. Ingresa tu ingreso mensual o anual (se convierten automáticamente)',
  howToUseStep3: '3. Ingresa el monto de seguridad social o selecciona cálculo por porcentaje',
  howToUseStep4: '4. Completa las deducciones especiales aplicables a tu situación',
  howToUseStep5: '5. Haz clic en "Calcular" para ver los resultados',
  chinaTaxRulesTitle: 'Reglas de Cálculo del Impuesto en China',
  chinaTaxRule1: 'Límite exento: 5.000 CNY/mes',
  chinaTaxRule2: 'Ingreso imponible = Ingreso - Seguridad Social - Deducciones Especiales - Límite Exento',
  chinaTaxRule3: 'Impuesto = Ingreso Imponible × Tasa Impositiva - Deducción Rápida',
  deductionExplainTitle: 'Explicación de las Deducciones Especiales',
  childrenEducationExplain: 'Educación Infantil: 1.000 CNY/mes por niño',
  continuingEducationExplain: 'Educación Continua: 400 CNY/mes para educación académica; 3.600 CNY/año para calificaciones profesionales',
  housingLoanExplain: 'Interés del Préstamo Hipotecario: 1.000 CNY/mes',
  housingRentExplain: 'Alquiler de Vivienda: 1.500 CNY/mes en ciudades principales; 1.100 CNY/mes en ciudades secundarias; 800 CNY/mes en otras ciudades',
  elderlyExplain: 'Cuidado de Adultos Mayores: 2.000 CNY/mes para único hijo; dividido entre hermanos en caso contrario',
  medicalExplain: 'Tratamiento Médico: Gastos médicos anuales superiores a 15.000 CNY, hasta 60.000 CNY/año',
  taxTipsTitle: 'Consejos Tributarios',
  taxTip1: 'Aprovecha todas las deducciones especiales para reducir tu carga tributaria',
  taxTip2: 'Los bonos anuales pueden ser gravados por separado o combinados con el ingreso anual',
  taxTip3: 'Las fuentes múltiples de ingreso deben combinarse para el cálculo del impuesto',
  taxTip4: 'Las anualidades empresariales y seguros médicos comerciales pueden ser deducibles dentro de límites',
  taxTip5: 'Reporta correctamente las deducciones especiales para evitar riesgos fiscales'
};