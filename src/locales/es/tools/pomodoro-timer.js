export default {
  name: 'Temporizador Pomodoro',
  description: 'Aumente la productividad y el enfoque con la Técnica Pomodoro',
  // Texto de la interfaz principal
  start: 'Iniciar',
  pause: 'Pausa',
  reset: 'Reiniciar',
  skip: 'Saltar',
  work: 'Trabajo',
  shortBreak: 'Descanso Corto',
  longBreak: 'Descanso Largo',
  settings: 'Configuración',
  stats: 'Estadísticas',
  // Configuración
  settingsTitle: 'Configuración del Temporizador',
  workDuration: 'Duración del Trabajo',
  shortBreakDuration: 'Duración del Descanso Corto',
  longBreakDuration: 'Duración del Descanso Largo',
  cyclesBeforeLongBreak: 'Ciclos Antes del Descanso Largo',
  enableSound: 'Habilitar Sonido',
  autoStartBreaks: 'Iniciar Automáticamente los Descansos',
  autoStartWork: 'Iniciar Automáticamente el Trabajo',
  minutes: 'minutos',
  saveSettings: 'Guardar Configuración',
  resetDefaults: 'Restablecer a Valores Predeterminados',
  // Estadísticas
  statsTitle: 'Estadísticas de Hoy',
  completedPomodoros: 'Pomodoros Completados',
  totalWorkTime: 'Tiempo Total de Trabajo',
  averageDailyPomodoros: 'Promedio Diario de Pomodoros',
  currentStreak: 'Racha Actual de Trabajo',
  // Mensajes de estado
  workStarted: '¡Sesión de trabajo iniciada! Enfóquese en su tarea.',
  shortBreakStarted: '¡Inicio del descanso corto. ¡Relájese!',
  longBreakStarted: '¡Inicio del descanso largo. ¡Es hora de relajarse!',
  pausedMessage: 'El temporizador está pausado',
  resetMessage: 'El temporizador ha sido reiniciado',
  workCompleted: '¡Sesión de trabajo completada!',
  breakCompleted: '¡Tiempo de descanso completado!',
  // Introducción a la herramienta
  aboutTitle: 'Acerca de la Técnica Pomodoro',
  aboutDescription: 'La Técnica Pomodoro es un método de gestión del tiempo desarrollado por Francesco Cirillo a finales de los años 80. La técnica utiliza un temporizador para dividir el trabajo en intervalos, típicamente de 25 minutos de duración, separados por breves descansos. Estos intervalos se conocen como "pomodoros", derivado de la palabra italiana para tomate, en honor al temporizador de cocina con forma de tomate que Cirillo utilizaba cuando era estudiante universitario.',
  howToUseTitle: 'Cómo Usar',
  howToUseStep1: '1. Decida qué tarea realizar',
  howToUseStep2: '2. Configure el temporizador Pomodoro a 25 minutos (o ajuste según la configuración)',
  howToUseStep3: '3. Trabaje en la tarea hasta que suene el temporizador',
  howToUseStep4: '4. Tome un breve descanso (5 minutos)',
  howToUseStep5: '5. Después de 4 pomodoros, tome un descanso más largo (15-30 minutos)',
  benefitsTitle: 'Beneficios de la Técnica Pomodoro',
  benefit1: 'Mejora el enfoque y la concentración',
  benefit2: 'Reduce distracciones y procrastinación',
  benefit3: 'Aumenta la motivación y productividad',
  benefit4: 'Mejora el equilibrio entre trabajo y descanso',
  benefit5: 'Mitiga la fatiga mental',
  tipsTitle: 'Consejos de Uso',
  tip1: 'Elija un entorno tranquilo con pocas distracciones',
  tip2: 'Durante los descansos, alejése completamente de las actividades laborales',
  tip3: 'Mantenga duraciones consistentes de pomodoros para construir hábitos',
  tip4: 'Use esta herramienta para seguir y analizar sus patrones de trabajo',
  tip5: 'Combínelo con una lista de tareas, enfocándose en una tarea por pomodoro',
  // Contenido del artículo
  article: {
    title: 'Temporizador Pomodoro: Maximice la Productividad con la Gestión del Tiempo',
    features: {
      title: 'Características y Aplicaciones',
      description: 'El <strong>Temporizador Pomodoro</strong> es una poderosa herramienta de productividad basada en la reconocida Técnica Pomodoro, un método de gestión del tiempo desarrollado por Francesco Cirillo. Esta técnica divide el trabajo en intervalos enfocados, tradicionalmente de 25 minutos de duración (llamados "pomodoros"), separados por breves descansos. Nuestra aplicación Temporizador Pomodoro mejora este enfoque con duraciones de trabajo personalizables, longitudes de descanso, notificaciones sonoras, transiciones automáticas entre sesiones y estadísticas detalladas de productividad.',
      useCasesTitle: 'Aplicaciones Prácticas',
      useCases: {
        items: [
          '<strong>Sesiones de Estudio Enfocado</strong>: Los estudiantes pueden usar el Temporizador Pomodoro para mantener la concentración durante los períodos de estudio, evitando agotamiento mientras maximizan la retención de información y la eficiencia académica.',
          '<strong>Trabajo Profundo para Profesionales</strong>: Los trabajadores del conocimiento pueden aprovechar los intervalos de trabajo cronometrados para lograr un mayor enfoque en tareas complejas como programación, escritura o análisis de datos, aumentando significativamente la calidad y cantidad de producción.',
          '<strong>Vencer la Procrastinación</strong>: El temporizador ayuda a dividir tareas intimidantes en fragmentos manejables, facilitando comenzar y mantener el impulso en proyectos desafiantes.',
          '<strong>Gestión del Trabajo Remoto</strong>: Los trabajadores desde casa pueden establecer límites claros entre el trabajo enfocado y los descansos, ayudando a mantener la productividad en entornos distractores.',
          '<strong>Creación de Contenido</strong>: Escritores, artistas y creadores pueden usar sesiones cronometradas para equilibrar la producción creativa con descansos necesarios, evitando la fatiga creativa y manteniendo la inspiración.',
          '<strong>Control de Cambio de Tareas</strong>: Profesionales que manejan múltiples responsabilidades pueden asignar pomodoros específicos a diferentes proyectos, asegurando progreso equilibrado en varias corrientes de trabajo.'
        ]
      }
    },
    faq: {
      title: 'Preguntas Frecuentes',
      items: [
        {
          question: '¿Cuál es la ciencia detrás de la Técnica Pomodoro?',
          answer: 'La Técnica Pomodoro se basa en varios principios psicológicos: la capacidad del cerebro humano para enfocarse intensamente durante periodos limitados (típicamente 25-45 minutos), la importancia de descansos regulares para prevenir la fatiga mental, y el beneficio motivacional de la delimitación temporal. Investigaciones en psicología cognitiva respaldan que alternar entre trabajo enfocado y breves descansos optimiza el rendimiento mental y reduce el agotamiento de recursos cognitivos. La técnica también utiliza el Efecto Zeigarnik: la tendencia a recordar mejor las tareas incompletas que las completadas, proporcionando un enfoque estructurado para finalizar tareas.'
        },
        {
          question: '¿Cómo debo ajustar la duración de los Pomodoros para diferentes tipos de trabajo?',
          answer: 'Diferentes tareas se benefician de intervalos de Pomodoro personalizados: <br>- <strong>Trabajo analítico complejo</strong> (programación, escritura, investigación): Considere pomodoros más largos de 30-45 minutos para acomodar pensamientos profundos.<br>- <strong>Tareas administrativas o rutinarias</strong>: Los intervalos estándar de 25 minutos suelen funcionar bien.<br>- <strong>Trabajo creativo</strong>: Algunos pueden beneficiarse de sesiones más cortas (15-20 minutos) para mantener la frescura creativa o sesiones más largas (hasta 50 minutos) cuando están en estado de flujo.<br>- <strong>Aprendizaje de material nuevo</strong>: Sesiones más cortas (15-20 minutos) suelen ayudar a la retención de información.<br>La clave es experimentar: ajuste la configuración de su <strong>Temporizador Pomodoro</strong> según sus niveles de energía, la complejidad de la tarea y cuándo note una disminución en los resultados.'
        },
        {
          question: '¿Puede la Técnica Pomodoro ayudar con el TDAH o dificultades de atención?',
          answer: 'Sí, muchas personas con TDAH o dificultades de atención encuentran particularmente útil la <strong>Técnica Pomodoro</strong>. Los bloques de tiempo estructurados crean motivación externa y límites claros, mientras que los descansos frecuentes acomodan períodos de atención más cortos. La técnica ayuda a construir gradualmente el "músculo del enfoque" y proporciona un marco para gestionar distracciones. Algunas modificaciones útiles incluyen: usar intervalos de trabajo más cortos (15-20 minutos) inicialmente, moverse físicamente durante los descansos, usar temporizadores visuales y combinarlo con listas de tareas escritas. Muchos entrenadores de TDAH y especialistas recomiendan técnicas de trabajo con temporizador como el <strong>Temporizador Pomodoro</strong> como parte de una estrategia integral de productividad.'
        },
        {
          question: '¿Cómo debo manejar interrupciones durante una sesión Pomodoro?',
          answer: 'Las interrupciones son inevitables, pero se pueden manejar con estas estrategias del <strong>Temporizador Pomodoro</strong>:<br>1. <strong>Interrupciones internas</strong> (sus propios pensamientos): Anótelas rápidamente en papel y regrese a su tarea.<br>2. <strong>Interrupciones externas</strong> (compañeros de trabajo, notificaciones): Puede:<br>- <strong>Informar-negociar-programar</strong>: Informe brevemente a la persona que está en una sesión enfocada, negocie un momento para abordar su solicitud y prográmelo.<br>- <strong>Regla de cinco minutos</strong>: Si una interrupción lleva menos de 5 minutos, considere atenderla inmediatamente y luego reinicie su pomodoro.<br>3. <strong>Interrupciones de emergencia</strong>: Para situaciones verdaderamente urgentes, detenga su temporizador, maneje la situación y luego reinicie un pomodoro nuevo.<br>Recuerde que un pomodoro es indivisible: si hay una interrupción sustancial, es mejor anular esa sesión y comenzar una nueva en lugar de pausar el temporizador.'
        },
        {
          question: '¿Cómo puedo rastrear y mejorar mi productividad con la Técnica Pomodoro?',
          answer: 'Nuestra aplicación <strong>Temporizador Pomodoro</strong> incluye estadísticas integradas para medir su progreso de productividad. Para maximizar los beneficios:<br>1. <strong>Establezca metas diarias de pomodoros</strong>: Empiece con una meta realista (por ejemplo, 6-8 pomodoros) y aumente gradualmente.<br>2. <strong>Rastree tasas de finalización</strong>: Monitoree cuántos pomodoros planeados realmente completa.<br>3. <strong>Analice patrones de interrupción</strong>: Observe qué suele interrumpir su enfoque y desarrolle estrategias para mitigarlo.<br>4. <strong>Revise tendencias de productividad</strong>: Las estadísticas de la aplicación muestran sus conteos diarios y semanales de pomodoros, ayudándole a identificar sus días y momentos más productivos.<br>5. <strong>Experimente con duraciones</strong>: Pruebe diferentes longitudes de trabajo/descanso para encontrar su ciclo óptimo de enfoque.<br>6. <strong>Celebre rachas</strong>: El contador de días consecutivos anima a construir un hábito consistente de pomodoros.<br>Este enfoque basado en datos le ayuda a refinar su método de gestión del tiempo para alcanzar la productividad óptima.'
        }
      ]
    },
    guide: {
      title: 'Cómo Usar el Temporizador Pomodoro',
      step1: {
        title: 'Configure Su Temporizador',
        description: 'Comience personalizando el <strong>Temporizador Pomodoro</strong> según sus preferencias. En el panel de configuración (lado izquierdo), ajuste la duración de su trabajo (tradicionalmente 25 minutos), la duración del descanso corto (generalmente 5 minutos), la duración del descanso largo (15-30 minutos) y ciclos antes de un descanso largo (usualmente 4). También puede activar notificaciones sonoras y transiciones automáticas entre trabajo y descanso. Haga clic en "Guardar Configuración" para aplicar sus preferencias. Esta personalización asegura que el temporizador coincida con sus patrones personales de concentración y requisitos de trabajo.'
      },
      step2: {
        title: 'Planifique Sus Tareas',
        description: 'Antes de iniciar el temporizador, identifique y priorice las tareas específicas que trabajará durante sus sesiones Pomodoro. Para mejores resultados, divida proyectos grandes en elementos más pequeños y accionables que puedan avanzarse o completarse realísticamente en un solo Pomodoro. Tener una lista clara de tareas evita perder tiempo decidiendo qué hacer a continuación durante su valioso tiempo enfocado. La <strong>Técnica Pomodoro</strong> funciona mejor cuando se combina con una planificación cuidadosa de tareas.'
      },
      step3: {
        title: 'Inicie Su Sesión de Trabajo',
        description: 'Seleccione el modo "Trabajo" (si no está ya seleccionado) y haga clic en el botón "Iniciar" para comenzar su sesión de trabajo cronometrada. Comprométase a enfocarse exclusivamente en su tarea planificada hasta que termine el temporizador. La gran pantalla digital muestra el tiempo restante. Durante este período, elimine todas las posibles distracciones: silencie notificaciones, cierre pestañas no relacionadas y, si es posible, informe a colegas que está en una sesión enfocada. El <strong>Temporizador Pomodoro</strong> crea un contenedor psicológico para trabajo profundo, así que honre este tiempo con su atención completa.'
      },
      step4: {
        title: 'Tome Descansos Entre Sesiones',
        description: 'Cuando termine su intervalo de trabajo, el temporizador le alertará (con sonido si está habilitado) y automáticamente pasará a un periodo de descanso. Los descansos cortos (generalmente 5 minutos) siguen a la mayoría de las sesiones de trabajo, con descansos más largos (15-30 minutos) después de completar un número establecido de Pomodoros. Durante los descansos, aléjese de su trabajo: estire, muévase, descanse sus ojos, tome agua o practique breve atención plena. Evite revisar correos electrónicos o redes sociales durante descansos cortos, ya que esto puede fácilmente extenderse más allá del tiempo asignado. El <strong>sistema Pomodoro</strong> depende de descansos adecuados para mantener la frescura cognitiva y prevenir el agotamiento.'
      },
      step5: {
        title: 'Seguimiento de Su Progreso',
        description: 'El <strong>Temporizador Pomodoro</strong> registra automáticamente sus sesiones completadas en el panel de estadísticas (lado derecho). Aquí puede monitorear su conteo diario de Pomodoros, tiempo total de trabajo, promedios diarios y su racha actual de días consecutivos de trabajo. Use estas métricas para entender sus patrones de productividad, establecer metas de mejora y mantener la motivación mediante un progreso visible. Con el tiempo, estos datos lo ayudarán a optimizar sus hábitos de trabajo y refinar su enfoque de gestión del tiempo para máxima eficiencia y calidad de salida.'
      }
    },
    conclusion: 'El <strong>Temporizador Pomodoro</strong> transforma cómo trabaja estructurando su tiempo en períodos óptimos de enfoque y descanso. Implementando este enfoque de gestión del tiempo respaldado científicamente, probablemente experimentará mejorada concentración, reducida procrastinación, mayor producción de trabajo y disminuida fatiga mental. La técnica es notablemente versátil, beneficiando a estudiantes, profesionales, creativos y cualquier persona que busque mejorar su productividad manteniendo su bienestar. A medida que utilice consistentemente el método Pomodoro, desarrollará una mayor conciencia sobre cómo utiliza su tiempo y construirá habilidades de enfoque más fuertes que se transferirán a todas las áreas de su vida.'
  }
}