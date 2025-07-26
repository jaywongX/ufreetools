export default {
  name: 'Calculadora de Préstamos',
  description: 'Calcule pagos mensuales, intereses totales y cronograma de pagos para préstamos hipotecarios, de automóviles y personales',

  // Interfaz principal
  loanType: 'Tipo de Préstamo',

  housingLoan: 'Préstamo Hipotecario',
  carLoan: 'Préstamo de Automóvil',
  personalLoan: 'Préstamo Personal',
  loanAmount: 'Monto del Préstamo',
  loanTerm: 'Plazo del Préstamo',
  interestRate: 'Tasa de Interés',
  paymentMethod: 'Método de Pago',
  equalPrincipalAndInterest: 'Pago Equitativo',
  equalPrincipal: 'Cuota Principal Igual',
  calculate: 'Calcular',
  reset: 'Restablecer',
  years: 'Años',
  months: 'Meses',
  amount: 'Monto',
  currency: 'Moneda',
  CNY: 'CNY (¥)',
  USD: 'USD ($)',
  EUR: 'EUR (€)',
  JPY: 'JPY (¥)',
  GBP: 'GBP (£)',

  // Resultados
  results: 'Resultados',

  monthlyPayment: 'Pago Mensual',
  firstMonthPayment: 'Primer Pago Mensual',
  lastMonthPayment: 'Último Pago Mensual',
  totalInterest: 'Intereses Totales',
  totalPayment: 'Pago Total',
  interestRatio: 'Relación de Interés',

  // Cronograma de Pagos
  paymentSchedule: 'Cronograma de Pagos',

  downloadExcel: 'Exportar a Excel',
  paymentNo: 'N.º',
  paymentDate: 'Fecha de Pago',
  principal: 'Capital',
  interest: 'Interés',
  payment: 'Pago',
  remainingPrincipal: 'Capital Restante',

  // Gráficos
  paymentChart: 'Análisis de Pago',

  principalAndInterest: 'Capital vs Interés',
  monthlyPaymentTrend: 'Tendencia de Pago Mensual',

  // Introducción a la herramienta
  aboutTitle: 'Acerca de la Calculadora de Préstamos',

  aboutDescription: 'La Calculadora de Préstamos es una herramienta que le ayuda a calcular los detalles de varios tipos de préstamos, incluidos préstamos hipotecarios, de automóviles y personales, brindándole una comprensión clara del costo del préstamo.',
  featuresTitle: 'Características Principales',
  feature1: 'Soporte para métodos de pago equitativo y cuota principal igual',
  feature2: 'Cálculo de pagos mensuales, intereses totales y pago total',
  feature3: 'Generación de un cronograma detallado de pagos',
  feature4: 'Gráficos visuales que muestran la distribución entre capital e interés',
  feature5: 'Soporte para múltiples monedas',
  usageTitle: 'Cómo Usar',
  usageStep1: 'Seleccione el tipo de préstamo (hipotecario, de auto o personal)',
  usageStep2: 'Ingrese el monto del préstamo, plazo y tasa de interés anual',
  usageStep3: 'Elija el método de reembolso (pago equitativo o cuota principal igual)',
  usageStep4: 'Haga clic en el botón "Calcular" para obtener información detallada',
  usageStep5: 'Vea el cronograma de pagos y análisis gráfico',
  explanationTitle: 'Explicación de Métodos de Pago',
  explanationEqualPayment: 'Pago Equitativo: El pago mensual permanece igual, pero la parte correspondiente a los intereses disminuye con el tiempo mientras que la parte correspondiente al capital aumenta.',
  explanationEqualPrincipal: 'Cuota Principal Igual: Se paga un capital igual cada mes, mientras que los intereses disminuyen a medida que se reduce el capital restante, lo que resulta en pagos mensuales decrecientes.',
  tipsTitle: 'Consejos',
  tip1: 'Ampliar el plazo del préstamo reduce el pago mensual pero aumenta los intereses totales pagados',
  tip2: 'El método de cuota principal igual genera menos intereses totales que el pago equitativo, pero implica pagos iniciales más altos',
  tip3: 'El pago anticipado reduce los gastos por intereses, especialmente en las primeras etapas del préstamo',
  tip4: 'Use esta herramienta para comparar diferentes opciones de préstamo y elegir la que mejor se ajuste a su situación financiera',

  relatedTools: {
    title: "Explore Herramientas Financieras Relacionadas",
    description: "Mejore su planificación financiera con estas calculadoras y recursos complementarios:",
    tool1: {
      name: "Calculadora de Interés Compuesto",
      url: "https://www.ufreetools.com/tool/compound-interest-calculator",
      description: "Calcule cómo crecen sus inversiones con el poder del interés compuesto."
    },
    tool2: {
      name: "Conversor de Moneda",
      url: "https://www.ufreetools.com/tool/currency-converter",
      description: "Convierta entre diferentes monedas usando tasas de cambio actualizadas."
    },
    tool3: {
      name: "Calculadora de Porcentaje",
      url: "https://www.ufreetools.com/tool/percentage-calculator",
      description: "Calcule porcentajes, aumentos, disminuciones y diferencias entre valores."
    },
    tool4: {
      name: "Calculadora de Jubilación",
      url: "https://www.ufreetools.com/tool/retirement-calculator",
      description: "Planifique su futuro estimando sus ahorros y necesidades de jubilación."
    }
  },

  resources: {
    title: "Recursos Autoritativos sobre Planificación de Préstamos",
    resource1: {
      name: "Oficina de Protección Financiera del Consumidor (CFPB)",
      url: "https://www.consumerfinance.gov/owning-a-home/",
      description: "Recursos gubernamentales oficiales para entender opciones hipotecarias y derechos de los prestatarios."
    },
    resource2: {
      name: "Comisión Federal de Comercio - Información para el Consumidor",
      url: "https://consumer.ftc.gov/money-and-credit",
      description: "Orientación confiable sobre préstamos, crédito y protección contra préstamos depredadores."
    },
    resource3: {
      name: "Autoridad Regulatoria de la Industria Financiera (FINRA)",
      url: "https://www.finra.org/investors/insights/mortgage-calculator",
      description: "Recursos educativos sobre cálculos hipotecarios y planificación financiera desde una organización regulatoria."
    }
  }
};