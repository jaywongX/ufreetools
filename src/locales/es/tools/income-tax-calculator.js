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
  taxTip5: 'Reporta correctamente las deducciones especiales para evitar riesgos fiscales',
  // Añadir contenido del artículo
  article: {
    title: "Calculadora de Impuesto sobre la Renta: Herramienta Integral para Planificación Fiscal Personal",
    features: {
      title: "Entendiendo la Calculadora de Impuesto sobre la Renta y sus Beneficios",
      description: "La <strong>Calculadora de Impuesto sobre la Renta</strong> es una poderosa herramienta de planificación financiera diseñada para ayudar a individuos a estimar con precisión sus obligaciones de <strong>impuesto sobre la renta personal</strong> y su salario neto. Utilizando las más recientes <strong>tasa impositivas</strong> y reglas de deducción, esta calculadora ofrece un desglose detallado de tu responsabilidad fiscal basado en tus ingresos y deducciones aplicables.<br><br>Nuestra calculadora actualmente soporta el sistema <strong>impositivo progresivo</strong> chino con su estructura de siete niveles que va desde el 3% hasta el 45%, con planes de expansión a otros sistemas tributarios internacionales en el futuro. La herramienta no solo proporciona cifras finales, sino que también ofrece una visión transparente de cómo se calcula tu <strong>ingreso imponible</strong>, en qué <strong>tramo impositivo</strong> te encuentras y ofrece un desglose mensual de tus obligaciones fiscales durante todo el año.",
      useCases: {
        title: "Aplicaciones Prácticas del Cálculo de Impuestos",
        items: [
          "<strong>Preparación para Negociación de Salarios</strong>: Antes de aceptar una oferta laboral o negociar un aumento, utiliza la calculadora para entender la diferencia real en el salario neto. Esto te permite tomar decisiones informadas basadas en tu <strong>salario después de impuestos</strong> en lugar de en cifras brutas, asegurando que tus expectativas salariales coincidan con tus necesidades financieras.",
          "<strong>Planificación Financiera Anual</strong>: Incorpora estimados precisos de <strong>impuestos</strong> en tu planificación presupuestaria anual. Comprender tu <strong>retención mensual</strong> permite hacer proyecciones de flujo de efectivo más precisas y evita sorpresas financieras durante el ejercicio fiscal.",
          "<strong>Optimización de Deducciones Fiscales</strong>: Experimenta con distintos escenarios de <strong>deducciones especiales</strong> para comprender cómo gastos elegibles como intereses de préstamos hipotecarios, educación infantil o educación continua pueden reducir tu carga fiscal general y maximizar tu salario neto.",
          "<strong>Gestión de Ingresos Independientes</strong>: Si ganas ingresos adicionales mediante trabajo freelance, usa la calculadora para estimar el <strong>impacto fiscal</strong> de este ingreso adicional y reservar montos apropiados para pagos de impuestos y así evitar penalizaciones.",
          "<strong>Planificación de Jubilación</strong>: Proyecta tu <strong>carga fiscal post-jubilatoria</strong> basada en ingresos esperados por pensión y otras fuentes para prepararte mejor para tus necesidades financieras durante la jubilación.",
          "<strong>Ayuda para Decisión de Mudanza</strong>: Al considerar mudarte a diferentes ciudades, usa la calculadora para comparar las <strong>implicaciones fiscales</strong> de tu movimiento, especialmente en relación con las deducciones por alquiler que varían según el nivel de la ciudad en el sistema fiscal chino."
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes sobre el Cálculo del Impuesto sobre la Renta",
      items: [
        {
          question: "¿Cómo se calcula el impuesto sobre la renta personal en China?",
          answer: "El <strong>impuesto sobre la renta personal</strong> en China se calcula usando un sistema progresivo de siete niveles. Primero, se determina tu <strong>ingreso imponible</strong> restando la deducción estándar (¥5.000/mes), contribuciones a seguridad social y fondos de vivienda, y deducciones especiales elegibles de tu ingreso bruto. Este monto imponible luego se somete a la tasa impositiva correspondiente (que varía del 3% al 45%) según el tramo donde caiga. Finalmente, se resta una cantidad de deducción rápida para garantizar transiciones suaves entre tramos fiscales. La fórmula es: Impuesto a Pagar = (Ingreso - Seguridad Social - Deducciones Especiales - ¥5.000) × Tasa Aplicable - Deducción Rápida. La calculadora realiza automáticamente este complejo cálculo mostrando tanto tu responsabilidad fiscal como tu tasa efectiva de impuesto."
        },
        {
          question: "¿Qué deducciones especiales están disponibles en el sistema fiscal chino?",
          answer: "El sistema fiscal chino ofrece varias <strong>deducciones adicionales especiales</strong> para reducir el ingreso imponible: 1) <strong>Educación infantil</strong>: ¥1.000/mes por hijo para educación desde preescolar hasta secundaria. 2) <strong>Educación continua</strong>: ¥400/mes para educación universitaria o ¥3.600/anuales para calificaciones profesionales. 3) <strong>Interés del préstamo hipotecario</strong>: ¥1.000/mes para interés de primera vivienda. 4) <strong>Alquiler de vivienda</strong>: ¥1.500/mes en ciudades principales, ¥1.100/mes en ciudades secundarias o ¥800/mes en otras áreas. 5) <strong>Mantenimiento de adultos mayores</strong>: Hasta ¥2.000/mes para mantener a padres ancianos. 6) <strong>Gastos médicos importantes</strong>: Costos médicos superiores a ¥15.000 anuales, hasta ¥80.000/anuales. Nuestra calculadora incluye campos de entrada para todas estas deducciones para ayudarte a estimar con precisión tu carga impositiva."
        },
        {
          question: "¿Por qué cambia mi monto mensual de impuesto durante el año?",
          answer: "Tu <strong>retención mensual de impuesto</strong> cambia durante el año debido al método <strong>acumulativo</strong> usado en China. A diferencia de sistemas que tratan cada mes independientemente, el impuesto sobre la renta en China se calcula sobre el ingreso acumulado anual. Al inicio del año podrías estar en tramos impositivos inferiores, pero a medida que tu ingreso acumulado aumenta, podrías moverte a tramos más altos, resultando en retenciones más grandes en meses posteriores. Este enfoque asegura que tu impuesto anual total coincida con lo que pagarías si se calculara una sola vez al final del año. La función de desglose mensual de nuestra calculadora ilustra claramente este progreso, ayudándote a entender por qué tu impuesto mensual varía y permitiéndote planificar adecuadamente para meses con mayores retenciones."
        },
        {
          question: "¿Cómo minimizo legalmente mi carga impositiva?",
          answer: "Para minimizar legalmente tu <strong>carga impositiva</strong> en China: 1) Usa plenamente todas las <strong>deducciones especiales</strong> para las que seas elegible, tales como educación infantil, alquiler de vivienda y cuidado de adultos mayores. 2) Considera contribuir al máximo permitido a tu <strong>fondo de vivienda</strong>, ya que estas contribuciones reducen tu ingreso imponible. 3) Si tu empleador ofrece <strong>planes de anualidad empresarial</strong> o seguro médico comercial, participa en estos beneficios ventajosos fiscalmente. 4) Para quienes ganan altos ingresos, considera la oportunidad de bonificaciones anuales, ya que éstas pueden gravarse por separado usando un método de cálculo preferencial. 5) Conserva documentación adecuada de todos tus gastos deducibles para garantizar una verificación sin complicaciones si se solicita por parte de las autoridades fiscales. Nuestra calculadora te ayuda a modelar distintos escenarios para encontrar el enfoque óptimo para tu situación financiera específica."
        },
        {
          question: "¿Qué tan precisa es esta calculadora de impuesto sobre la renta?",
          answer: "Nuestra <strong>calculadora de impuesto sobre la renta</strong> proporciona estimaciones muy precisas basadas en las actuales regulaciones fiscales chinas, reflejando la reforma fiscal de 2019 y actualizaciones subsiguientes. La calculadora incorpora la estructura estándar de <strong>siete tramos impositivos</strong>, montos actualizados de deducción rápida, políticas vigentes de deducciones especiales y la metodología acumulativa de retención. Mientras nos esforzamos por máxima precisión, las leyes fiscales pueden cambiar, y situaciones individuales pueden implicar complejidades que cualquier calculadora no puede capturar completamente. La herramienta debe usarse con fines de planificación y orientación general, no como sustituto de asesoría fiscal profesional. Para individuos con situaciones fiscales complejas (múltiples fuentes de ingreso, ingresos extranjeros, opciones accionarias, etc.), aún se recomienda consultar con un profesional fiscal."
        }
      ]
    },
    guide: {
      title: "Guía Paso a Paso para Usar la Calculadora de Impuesto sobre la Renta",
      steps: [
        "<strong>Selecciona tu sistema tributario</strong>: Empieza eligiendo el sistema fiscal apropiado para tu cálculo. Actualmente, la calculadora soporta el sistema fiscal chino, con planes de incluir más países en futuras actualizaciones.",
        "<strong>Ingresa tus datos de ingreso</strong>: Introduce ya sea tu ingreso mensual o anual en el campo correspondiente. La calculadora convertirá automáticamente entre mensual y anual, por lo que solo necesitas ingresar uno. Para resultados más precisos, usa tu salario antes de impuestos.",
        "<strong>Configura tus contribuciones a seguridad social y fondo de vivienda</strong>: Puedes ingresar directamente un monto específico o calcularlo basado en porcentaje de tu salario. Si usas el método porcentual, ingresa tanto la base de contribución (que podría diferir de tu salario real en algunas regiones) como la tasa porcentual aplicable.",
        "<strong>Selecciona el nivel de tu ciudad</strong>: Elige entre ciudades principales, secundarias u otras. Esta selección afecta automáticamente el monto de deducción por alquiler, aunque puedes sobreescribirla con un valor personalizado si es necesario.",
        "<strong>Ingresa tus deducciones especiales</strong>: Completa todos los valores aplicables de deducciones especiales para las que seas elegible, incluyendo educación infantil, educación continua, interés del préstamo hipotecario, alquiler de vivienda, cuidado de adultos mayores y gastos médicos importantes. Para deducciones ocasionales como tratamiento médico, introduce el monto anual.",
        "<strong>Haz clic en el botón 'Calcular'</strong>: Una vez hayas introducido toda tu información, haz clic en el botón calcular para procesar tu cálculo fiscal. El sistema determinará tu ingreso imponible, tasa fiscal aplicable, monto de deducción rápida y el impuesto total a pagar.",
        "<strong>Revisa tus resultados</strong>: Examina el resumen del cálculo, que incluye tu impuesto total a pagar, salario neto y tasa efectiva de impuesto. La tabla de desglose mensual muestra cómo tu impuesto se distribuye durante el año bajo el sistema acumulativo, ayudándote a entender tu responsabilidad fiscal mes a mes."
      ]
    },
    conclusion: "La Calculadora de Impuesto sobre la Renta proporciona una solución poderosa pero fácil de usar para gestionar tu planificación fiscal personal. Ofreciendo claras perspectivas sobre tus obligaciones fiscales, salario neto e impacto de diversas deducciones, te empodera para tomar decisiones financieras más informadas. Ya sea que estés negociando un nuevo salario, planificando tu presupuesto anual o buscando optimizar tu situación fiscal, esta calculadora ofrece la información precisa que necesitas. Recuerda que mientras la planificación fiscal es importante, igualmente crucial es mantener registros precisos de tus deducciones y mantenerte informado sobre cambios en regulaciones fiscales que puedan afectar tus cálculos. Usa esta herramienta regularmente a medida que cambien tus ingresos y deducciones para asegurarte siempre trabajar con proyecciones precisas de tu situación financiera."
  }
};