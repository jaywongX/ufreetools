export default {
  name: 'Libro de Cuentas Personal',
  description: 'Realice un seguimiento de sus ingresos y gastos con esta herramienta fácil de usar para finanzas personales',
  tags: ['finanzas', 'contabilidad', 'presupuesto', 'dinero', 'seguimiento-gastos', 'finanzas-personales'],
  category: 'herramientas-practicas',
  // Elementos de la interfaz
  ui: {
    addTransaction: 'Añadir Transacción',
    editTransaction: 'Editar Transacción',
    deleteTransaction: 'Eliminar Transacción',
    income: 'Ingreso',
    expense: 'Gasto',
    transfer: 'Transferencia',
    date: 'Fecha',
    amount: 'Cantidad',
    category: 'Categoría',
    account: 'Cuenta',
    description: 'Descripción',
    tags: 'Etiquetas',
    save: 'Guardar',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    filter: 'Filtrar',
    search: 'Buscar',
    clear: 'Limpiar',
    overview: 'Resumen',
    transactions: 'Transacciones',
    statistics: 'Estadísticas',
    budget: 'Presupuesto',
    settings: 'Configuración',
    exportData: 'Exportar Datos',
    importData: 'Importar Datos',
    backup: 'Copia de Seguridad',
    restore: 'Restaurar',
    currency: 'Moneda',
    language: 'Idioma',
    theme: 'Tema',
    darkMode: 'Modo Oscuro',
    lightMode: 'Modo Claro',
    resetData: 'Restablecer Datos',
    resetConfirmation: '¿Está seguro que desea restablecer todos los datos? Esta acción no se puede deshacer.',
    from: 'Desde',
    to: 'Hasta',
    filterByDate: 'Filtrar por Fecha',
    noTransactions: 'No hay transacciones para mostrar',
    allCategories: 'Todas las Categorías',
    addCategory: 'Añadir Categoría',
    editCategory: 'Editar Categoría',
    deleteCategory: 'Eliminar Categoría',
    categoryName: 'Nombre de la Categoría',
    categoryIcon: 'Icono de la Categoría',
    categoryColor: 'Color de la Categoría',
    addAccount: 'Añadir Cuenta',
    editAccount: 'Editar Cuenta',
    deleteAccount: 'Eliminar Cuenta',
    accountName: 'Nombre de la Cuenta',
    accountType: 'Tipo de Cuenta',
    accountBalance: 'Saldo de la Cuenta',
    totalIncome: 'Ingresos Totales',
    totalExpense: 'Gastos Totales',
    balance: 'Saldo',
    netWorth: 'Patrimonio Neto',
    daily: 'Diario',
    weekly: 'Semanal',
    monthly: 'Mensual',
    yearly: 'Anual',
    today: 'Hoy',
    thisWeek: 'Esta Semana',
    thisMonth: 'Este Mes',
    thisYear: 'Este Año',
    lastWeek: 'La Semana Pasada',
    lastMonth: 'El Mes Pasado',
    lastYear: 'El Año Pasado',
    custom: 'Personalizado',
    setBudget: 'Establecer Presupuesto',
    budgetLimit: 'Límite del Presupuesto',
    budgetPeriod: 'Período del Presupuesto',
    budgetCategory: 'Categoría del Presupuesto',
    budgetAlert: 'Alerta del Presupuesto',
    budgetUsage: 'Uso del Presupuesto',
    remaining: 'Restante',
    spent: 'Gastado',
    over: 'Excedido',
    exportFormat: 'Formato de Exportación',
    importFormat: 'Formato de Importación',
    csv: 'CSV',
    json: 'JSON',
    selectFile: 'Seleccionar Archivo',
    successfullyImported: 'Datos importados exitosamente',
    errorImporting: 'Error al importar datos',
    successfullyExported: 'Datos exportados exitosamente',
    errorExporting: 'Error al exportar datos',
    confirmDelete: '¿Está seguro que desea eliminar este elemento?',
    recurringTransaction: 'Transacción Recurrente',
    frequency: 'Frecuencia',
    startDate: 'Fecha de Inicio',
    endDate: 'Fecha de Finalización',
    never: 'Nunca',
    daily: 'Diariamente',
    weekly: 'Semanalmente',
    monthly: 'Mensualmente',
    yearly: 'Anualmente',
    note: 'Nota',
    attachment: 'Adjunto',
    dataSecurity: 'Seguridad de Datos',
    type: 'Tipo',
    clearTransactions: 'Limpiar Todas las Transacciones',
    confirmClearTransactions: '¿Está seguro que desea limpiar todas las transacciones? Esta acción no se puede deshacer.',
    transactionsCleared: 'Todas las transacciones han sido eliminadas',
    enterValidAmount: 'Por favor ingrese una cantidad válida',
    selectDate: 'Por favor seleccione una fecha',
    selectCategory: 'Por favor seleccione una categoría'
  },
  // Categorías predefinidas
  categories: {
    income: {
      salary: 'Salario',
      freelance: 'Trabajo Freelance',
      investments: 'Inversiones',
      gifts: 'Regalos',
      refunds: 'Reembolsos',
      other: 'Otros Ingresos'
    },
    expense: {
      food: 'Alimentos y Restaurantes',
      groceries: 'Compras de Supermercado',
      rent: 'Alquiler/Mortgage',
      utilities: 'Servicios Públicos',
      transportation: 'Transporte',
      entertainment: 'Entretenimiento',
      shopping: 'Compras',
      health: 'Salud y Médico',
      education: 'Educación',
      personal: 'Cuidado Personal',
      travel: 'Viajes',
      insurance: 'Seguros',
      taxes: 'Impuestos',
      debt: 'Pagos de Deudas',
      subscription: 'Suscripciones',
      charity: 'Donaciones y Caridad',
      business: 'Gastos Empresariales',
      other: 'Otros Gastos'
    },
    transfer: {
      bank_transfer: 'Transferencia Bancaria',
      savings: 'Ahorros',
      investment: 'Inversión',
      debt_payment: 'Pago de Deuda',
      other: 'Otra Transferencia'
    }
  },
  // Tipos de cuentas
  accountTypes: {
    cash: 'Efectivo',
    checking: 'Cuenta Corriente',
    savings: 'Cuenta de Ahorro',
    creditCard: 'Tarjeta de Crédito',
    investment: 'Cuenta de Inversión',
    loan: 'Préstamo',
    asset: 'Activo',
    other: 'Otro'
  },
  // Etiquetas de gráficos
  charts: {
    incomeVsExpense: 'Ingresos vs Gastos',
    expenseByCategory: 'Gastos por Categoría',
    monthlyTrend: 'Tendencia Mensual',
    savingsRate: 'Tasa de Ahorro',
    netWorthTrend: 'Tendencia del Patrimonio Neto',
    budgetPerformance: 'Rendimiento del Presupuesto',
    topExpenseCategories: 'Categorías Principales de Gastos',
    cashFlow: 'Flujo de Efectivo'
  },
  // Sección de documentación
  documentation: {
    title: 'Acerca del Libro de Cuentas Personal',
    introduction: 'El Libro de Cuentas Personal es una herramienta diseñada para la gestión financiera personal. Todos los datos se almacenan localmente en su navegador, asegurando que su información financiera permanezca completamente privada.',
    whyUse: {
      title: '¿Por qué Usar el Libro de Cuentas Personal?',
      points1: 'Privacidad Completa - Todos los datos se almacenan localmente y nunca se cargan a ningún servidor',
      points2: 'Interfaz Simple - Diseño limpio e intuitivo facilita registrar transacciones diarias',
      points3: 'Visualización de Datos - Comprenda sus hábitos de gasto mediante gráficos visuales',
      points4: 'Categorías Personalizables - Cree categorías personalizadas de ingresos y gastos según sus necesidades',
      points5: 'Exportación de Datos - Exporte sus datos al formato CSV para respaldo o análisis adicional'
    },
    tips: {
      title: 'Consejos de Uso',
      points1: 'Registre transacciones regularmente para mantener actualizado su libro de cuentas',
      points2: 'Use etiquetas para categorizar sus gastos con mayor detalle',
      points3: 'Establezca presupuestos mensuales para controlar sus gastos',
      points4: 'Exporte sus datos regularmente como copia de seguridad',
      points5: 'Use la función de estadísticas para identificar patrones de gasto y áreas para mejorar'
    },
    dataStorage: {
      title: 'Almacenamiento de Datos',
      content: 'Todos sus datos financieros se almacenan exclusivamente en el almacenamiento local de su navegador. Esto significa que sus datos nunca salen de su dispositivo y no son accesibles para nadie más. Sin embargo, borrar los datos de su navegador también borrará los datos de su libro de cuentas, así que asegúrese de hacer copias de seguridad regularmente.'
    }
  },
  // Sección de artículo
  article: {
    title: "Libro de Cuentas Personal: Domine Su Salud Financiera",
    features: {
      title: "Entendiendo la Gestión Financiera Personal",
      description: "El <strong>Libro de Cuentas Personal</strong> es una herramienta completa de gestión monetaria diseñada para ayudarle a tomar el control de su vida financiera. Este potente rastreador de gastos proporciona una plataforma segura y privada para registrar ingresos y gastos, monitorear su flujo de efectivo y analizar sus patrones financieros sin compartir sus datos con ningún servidor externo.<br><br>Nuestro gestor de finanzas personales ofrece múltiples funciones incluyendo categorización de transacciones, planificación de presupuesto, visualización estadística y exportación de datos. La interfaz intuitiva hace que el seguimiento financiero diario sea sencillo, mientras que herramientas avanzadas de informes le brindan conocimientos más profundos sobre sus hábitos de gasto y patrones de ahorro. Ya sea que esté buscando eliminar deudas, ahorrar para una compra importante o simplemente obtener mejor visibilidad sobre donde va su dinero, este planificador de presupuesto proporciona el conjunto completo de herramientas que necesita para una gestión financiera eficaz.",
      useCases: {
        title: "Aplicaciones Prácticas para la Planificación Presupuestaria",
        items: [
          "Estudiantes que siguen sus gastos semestrales y asignaciones para evitar gastar demasiado en artículos no esenciales mientras gestionan recursos financieros limitados",
          "Freelancers que monitorean ingresos basados en proyectos frente a gastos regulares, ayudando a mantener un flujo de caja estable durante períodos entre contratos",
          "Profesionales jóvenes creando planes de ahorro para metas importantes como pagos iniciales de vivienda, analizando patrones de gasto para identificar oportunidades de reducción",
          "Familias gestionando presupuestos domésticos, rastreando gastos compartidos y planificando costos futuros como fondos educativos o reformas de hogar",
          "Dueños de pequeñas empresas separando gastos personales y empresariales mientras mantienen una visión integral de su posición financiera general",
          "Jubilados monitoreando fuentes de ingresos fijos frente a gastos mensuales, asegurando que sus ahorros duren durante sus años no laborales"
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes sobre la Gestión Financiera Personal",
      items: [
        {
          question: "¿Es seguro mi dato financiero cuando uso este Libro de Cuentas Personal?",
          answer: "Absolutamente. La seguridad de sus datos financieros es nuestra prioridad máxima. El Libro de Cuentas Personal almacena toda la información exclusivamente en el almacenamiento local de su navegador, lo que significa que sus datos financieros sensibles nunca salen de su dispositivo y no se transmiten a ningún servidor externo. No se requiere crear cuenta ni iniciar sesión, lo que aumenta aún más la privacidad. Sin embargo, este enfoque local significa que debe exportar regularmente sus datos como copia de seguridad, ya que borrar la caché de su navegador borrará sus registros financieros. Este equilibrio entre privacidad completa y responsabilidad local le da a usted el control total sobre su información financiera personal."
        },
        {
          question: "¿Cómo puede ayudarme la característica de seguimiento del presupuesto a ahorrar dinero?",
          answer: "La característica de seguimiento del presupuesto en nuestro Libro de Cuentas Personal es una poderosa herramienta para aumentar los ahorros creando conciencia y responsabilidad financiera. Puede establecer límites presupuestarios específicos para diferentes categorías de gasto (compras, entretenimiento, servicios públicos, etc.) y monitorear sus gastos contra estas metas en tiempo real. El sistema proporciona indicadores visuales cuando se acerca o excede los umbrales del presupuesto, ayudando a prevenir gastos excesivos. Informes mensuales y por categoría revelan patrones en sus gastos, destacando posibles áreas para reducción. Esta supervisión presupuestaria completa crea un bucle de retroalimentación que naturalmente fomenta decisiones de gasto más conscientes y mejores hábitos financieros."
        },
        {
          question: "¿Puedo rastrear múltiples cuentas o divisas en este rastreador de gastos?",
          answer: "Sí, nuestro rastreador de gastos admite completamente la gestión de múltiples cuentas financieras y divisas. Puede crear y monitorear varios tipos de cuentas incluyendo efectivo, cuentas corrientes, cuentas de ahorro, tarjetas de crédito y cuentas de inversión todas dentro de un solo panel. Para quienes trabajan con múltiples divisas, la herramienta permite definir diferentes tipos de moneda y maneja cálculos de conversión. La función de transferencia permite registrar movimientos de dinero entre cuentas mientras mantiene balances precisos a través de todo su portafolio financiero. Esta capacidad multi-cuenta proporciona una visión integral de su situación financiera completa en lugar de vistas fragmentadas a través de plataformas separadas."
        },
        {
          question: "¿Qué tan detallados son los informes financieros y visualizaciones?",
          answer: "Los informes financieros y visualizaciones en el Libro de Cuentas Personal ofrecen una profundidad excepcional mientras permanecen amigables para el usuario. El panel de análisis proporciona múltiples tipos de visualización incluyendo comparaciones de ingresos vs. gastos, divisiones por categorías de gasto, análisis de tendencias mensuales y seguimiento de la tasa de ahorro. Los informes pueden filtrarse por rangos de fechas personalizados, categorías, etiquetas o cuentas para examinar aspectos específicos de su comportamiento financiero. Los gráficos interactivos le permiten profundizar en detalles de transacciones directamente desde la visualización. Estos análisis completos transforman datos financieros brutos en conocimientos accionables, ayudándole a identificar patrones de gasto, seguir el rendimiento del presupuesto y tomar decisiones informadas sobre su gestión financiera personal."
        },
        {
          question: "¿Qué hace diferente a este gestor de finanzas personales de las aplicaciones bancarias?",
          answer: "A diferencia de las aplicaciones bancarias que principalmente se enfocan en saldos y transacciones desde una sola institución, nuestro gestor de finanzas personales ofrece una supervisión financiera completa a través de todas sus cuentas con completa privacidad. Mientras que las aplicaciones bancarias muestran lo que ya ha sucedido, nuestra herramienta enfatiza la planificación, presupuesto y análisis con categorías personalizables que coincidan exactamente con su situación financiera específica. Las aplicaciones bancarias típicamente carecen de análisis detallado de gastos o solo ofrecen categorización básica, mientras que nuestro gestor de finanzas personales proporciona informes y visualizaciones en profundidad de sus patrones financieros. Lo más importante, nuestra solución almacena los datos localmente en su dispositivo, dándole control completo y privacidad sobre su información financiera, a diferencia de las aplicaciones bancarias que almacenan sus datos en sus servidores."
        }
      ]
    },
    guide: {
      title: "Guía Paso a Paso para Gestionar Sus Finanzas",
      steps: [
        "Comience accediendo al panel de Resumen para obtener una imagen completa de su situación financiera, incluyendo ingresos totales, gastos y saldo actual a través de todas sus cuentas",
        "Configure sus cuentas haciendo clic en el botón 'Añadir Cuenta' e introduciendo detalles de la cuenta tales como nombre, tipo (cuenta corriente, ahorro, tarjeta de crédito, etc.) y saldo actual",
        "Registre sus transacciones financieras haciendo clic en 'Añadir Transacción', seleccionando el tipo (ingreso, gasto o transferencia) y rellenando detalles incluyendo fecha, cantidad, categoría y cuenta",
        "Establezca límites presupuestarios navegando hasta la sección de Presupuesto y creando asignaciones mensuales para diferentes categorías de gasto para ayudar a controlar sus gastos",
        "Use la sección de Estadísticas para analizar sus patrones de gasto a través de gráficos y diagramas visuales, permitiéndole identificar áreas donde podría estar gastando demasiado",
        "Revise regularmente su historial de transacciones para asegurar que todas las entradas sean correctas y adecuadamente categorizadas, realizando correcciones según sea necesario para mantener la integridad de los datos",
        "Exporte periódicamente sus datos financieros usando la función 'Exportar Datos' para crear copias de seguridad en formato CSV o JSON, protegiendo sus registros contra pérdida accidental debido a la limpieza de datos del navegador"
      ]
    },
    conclusion: "El Libro de Cuentas Personal transforma la tarea a menudo abrumadora de gestión financiera en un proceso sencillo, incluso entretenido. Proporcionando un entorno seguro para rastrear gastos, monitorear ingresos y visualizar patrones de gasto, esta herramienta le brinda una claridad sin precedentes sobre sus hábitos financieros. A medida que continúe registrando transacciones y revisando los conocimientos generados, desarrollará una comprensión más profunda de su relación con el dinero e identificará oportunidades concretas para optimizar sus finanzas. Ya sea que su objetivo sea reducir deudas, acumular ahorros o simplemente ganar mejor conciencia financiera, el uso consistente de este gestor de finanzas personales le guiará hacia una mejor salud financiera y mayor tranquilidad respecto a su futuro económico."
  }
}