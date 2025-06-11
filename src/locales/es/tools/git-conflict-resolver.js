export default {
  name: 'Simulador de Resolución de Conflictos de Git',
  description: 'Simula escenarios de conflictos de fusión de Git y practica la resolución de conflictos de código',
  title: 'Simulador de Resolución de Conflictos de Git',
  intro: 'Esta herramienta te ayuda a comprender y practicar la resolución de conflictos de fusión de Git. Ingresa contenido conflictivo o usa ejemplos, luego resuelve manualmente los conflictos.',
  buttons: {
    generateExample: 'Generar Ejemplo de Conflicto',
    resolveOurs: 'Usar Mis Cambios (HEAD)',
    resolveTheirs: 'Usar Sus Cambios',
    validate: 'Validar Solución',
    reset: 'Reiniciar',
    useOurs: 'Usar el Mío',
    useTheirs: 'Usar el de Ellos',
    useBoth: 'Combinar Ambos'
  },
  conflictArea: {
    label: 'Contenido del Conflicto',
    hasConflict: '⚠️ Existen conflictos sin resolver',
    noConflict: '✓ No hay conflictos'
  },
  analysis: {
    title: 'Análisis del Conflicto',
    conflict: 'Conflicto #{number}',
    ours: "Mis Cambios (HEAD)",
    theirs: "Sus Cambios"
  },
  tutorial: {
    title: 'Cómo Resolver Conflictos de Git',
    intro: 'Los conflictos de Git generalmente ocurren durante operaciones de fusión o rebase cuando dos ramas modifican la misma parte de un archivo.',
    markerExplanation: 'Los marcadores de conflicto suelen tener este aspecto:',
    markerExample: `<<<<<<< HEAD
Tus cambios (rama actual)
=======
Sus cambios (rama entrante)
>>>>>>> Nombre de la Rama`,
    steps: {
      title: 'Pasos Básicos para Resolver Conflictos:',
      step1: 'Encuentra todos los marcadores de conflicto (<code><<<<<<< HEAD</code>, <code>=======</code>, <code>>>>>>> Nombre de la Rama</code>)',
      step2: 'Decide qué código conservar (el tuyo, el de ellos o una combinación de ambos)',
      step3: 'Elimina los marcadores de conflicto y deja solo el código que decidiste conservar',
      step4: 'Continúa con el siguiente conflicto hasta resolver todos'
    },
    commands: {
      title: 'Comandos Comunes de Git:',
      status: '<code>git status</code> - Ver archivos con conflictos',
      diff: '<code>git diff</code> - Ver el contenido detallado del conflicto',
      abort: '<code>git merge --abort</code> - Cancelar la fusión y regresar al estado anterior',
      add: '<code>git add <archivo></code> - Marcar el archivo conflictivo como resuelto',
      commit: '<code>git commit</code> - Completar la fusión'
    }
  },
  messages: {
    generated: "Se ha generado el contenido de ejemplo del conflicto",
    resolvedOurs: "Todos los conflictos resueltos usando 'Mis Cambios'",
    resolvedTheirs: "Todos los conflictos resueltos usando 'Sus Cambios'",
    resolvedSingle: "Conflicto #{number} resuelto",
    allResolved: "✅ ¡Todos los conflictos se han resuelto correctamente!",
    stillHasConflicts: "⚠️ Aún quedan conflictos sin resolver. Por favor revisa y resuelve todos los marcadores."
  },
  article: {
    title: "Entendiendo los Conflictos de Git y Cómo Resolverlos",
    overview: {
      title: "¿Qué es la Resolución de Conflictos de Git?",
      content: "La resolución de conflictos de Git es el proceso de gestionar y resolver conflictos que ocurren al fusionar o hacer rebase de ramas en Git. Cuando múltiples desarrolladores modifican la misma parte de un archivo, Git no puede determinar automáticamente qué cambios conservar. Aquí es donde entra en juego el resolvedor de conflictos de Git.<br><br>Este simulador de resolvedor de conflictos de Git te ayuda a entender y practicar la resolución de conflictos de fusión en un entorno seguro. Al simular escenarios comunes de conflicto, puedes aprender los fundamentos de la resolución de conflictos sin arriesgar código real de proyectos. El simulador resalta los conflictos de fusión, muestra comparativas lado a lado de los cambios conflictivos y proporciona herramientas para practicar la resolución eficiente de estos conflictos."
    },
    useCases: {
      title: "Escenarios Comunes Donde Se Necesita Resolver Conflictos de Git",
      items: [
        {
          title: "Colaboración en Equipo sobre una Base de Código Compartida",
          description: "Cuando varios miembros del equipo modifican simultáneamente el mismo archivo, es probable que surjan conflictos durante las fusiones. Aprender habilidades de resolución de conflictos asegura una colaboración fluida en equipos."
        },
        {
          title: "Integración de Ramas de Características",
          description: "Al fusionar ramas de características en las ramas principales de desarrollo, frecuentemente ocurren conflictos en áreas donde se ha desarrollado en paralelo."
        },
        {
          title: "Gestión de Solicitudes de Extracción (Pull Requests)",
          description: "Resolver conflictos que surgen al integrar una solicitud de extracción en el repositorio principal, asegurando que los cambios puedan incorporarse de forma segura."
        },
        {
          title: "Administración de Ramas de Larga Duración",
          description: "Cuando una rama ha estado separada de la línea principal de desarrollo por un período prolongado, resolver los conflictos acumulados durante la reintegración puede ser complicado."
        },
        {
          title: "Contribuciones a Proyectos de Código Abierto",
          description: "Los contribuyentes a proyectos de código abierto a menudo enfrentan conflictos cuando sus cambios coinciden con actualizaciones realizadas por otros contribuyentes o mantenedores."
        }
      ]
    },
    guide: {
      title: "Guía Paso a Paso para Resolver Conflictos de Git",
      intro: "Resolver conflictos de Git puede parecer intimidante al principio, pero siguiendo un enfoque sistemático el proceso se vuelve manejable. Aquí te explicamos cómo resolver eficazmente los conflictos de Git:",
      steps: [
        {
          title: "Identificar Archivos en Conflicto",
          description: "Usa 'git status' para identificar los archivos marcados como en conflicto. Estos archivos contienen marcadores de conflicto que necesitan resolverse."
        },
        {
          title: "Abrir los Archivos en Conflicto",
          description: "Abre los archivos conflictivos en tu editor. Busca los marcadores de conflicto (<<<<<<< HEAD, =======, y >>>>>>> branch-name) que indican dónde existen conflictos."
        },
        {
          title: "Entender Ambos Cambios",
          description: "Revisa los cambios de ambos lados del conflicto. El contenido entre <<<<<<< HEAD y ======= muestra tus cambios actuales, mientras que el contenido entre ======= y >>>>>>> muestra los cambios entrantes."
        },
        {
          title: "Decidir Cómo Resolver Cada Conflicto",
          description: "Decide si mantener tus cambios, aceptar los cambios entrantes o crear una combinación de ambos. Considera la intención detrás de cada cambio en lugar de simplemente elegir uno u otro."
        },
        {
          title: "Editar el Archivo para Resolver Conflictos",
          description: "Edita el archivo para eliminar los marcadores de conflicto y dejar solo el contenido final deseado. Esto podría implicar elegir una versión o combinar elementos manualmente de ambas."
        },
        {
          title: "Marcar Como Resuelto",
          description: "Después de editar, usa 'git add <nombre-archivo>' para marcar el archivo como resuelto. Esto prepara el archivo resuelto para el commit."
        },
        {
          title: "Completar el Proceso de Fusión",
          description: "Una vez resueltos todos los conflictos y preparados los archivos, usa 'git commit' para completar el proceso de fusión. Git creará un commit de fusión para registrar la resolución."
        }
      ]
    },
    conflictTypes: {
      title: "Tipos Comunes de Conflictos de Git",
      intro: "Los conflictos de Git pueden presentarse en diversas formas, cada una requiriendo un enfoque ligeramente diferente. Entender estos tipos te ayudará a reconocerlos y resolverlos eficientemente:",
      types: [
        {
          title: "Conflictos de Contenido",
          description: "El tipo más común de conflicto ocurre cuando dos ramas modifican las mismas líneas de código. Git no puede determinar automáticamente qué cambios conservar."
        },
        {
          title: "Conflictos por Eliminación de Archivos",
          description: "Conflictos que surgen cuando una rama modifica un archivo mientras otra rama lo elimina. Git necesita saber si mantener el archivo modificado o confirmar su eliminación."
        },
        {
          title: "Conflictos por Renombramiento de Archivos",
          description: "Cuando una rama renombra un archivo mientras otra rama modifica el archivo original, Git podría tener dificultades para seguir correctamente estos cambios."
        },
        {
          title: "Conflictos en Archivos Binarios",
          description: "Conflictos en archivos no de texto como imágenes o archivos compilados que no pueden fusionarse línea por línea. Estos frecuentemente requieren elegir una versión completa."
        },
        {
          title: "Conflictos por Espacios en Blanco",
          description: "A veces los conflictos ocurren debido a cambios en espacios en blanco como sangrías o finales de línea, que pueden ser particularmente frustrantes pero generalmente fáciles de resolver."
        }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes Sobre la Resolución de Conflictos de Git",
      items: [
        {
          question: "¿Cómo puedo prevenir conflictos de Git?",
          answer: "Aunque no puedes prevenir completamente los conflictos, especialmente en proyectos activos, puedes minimizarlos comunicándote con tu equipo sobre qué archivos estás trabajando, obteniendo cambios frecuentemente, manteniendo ramas de características cortas y usando commits pequeños y enfocados que sean más fáciles de fusionar."
        },
        {
          question: "¿Puedo usar herramientas para ayudarme a resolver conflictos de Git?",
          answer: "Sí, muchos clientes de Git y entornos de desarrollo integrados (IDEs) ofrecen herramientas visuales de resolución de conflictos que facilitan el proceso mostrando conflictos lado a lado. Opciones populares incluyen Visual Studio Code, IntelliJ IDEA, GitKraken y SourceTree. Estas herramientas destacan conflictos y proveen botones para elegir entre diferentes versiones."
        },
        {
          question: "¿Qué sucede si resuelvo un conflicto incorrectamente?",
          answer: "Si cometes un error durante la resolución de un conflicto, siempre puedes abortar la fusión actual usando 'git merge --abort' (si aún no has hecho commit) o revertir el commit después de completarlo. Es buena práctica probar tu código después de resolver conflictos para asegurar que funciona como esperado."
        },
        {
          question: "¿Cómo resuelvo conflictos durante una operación de rebase?",
          answer: "El proceso es similar a resolver conflictos de fusión, pero ocurre para cada commit que está siendo rebasado. Tendrás que resolver los conflictos, luego usar 'git add' para marcar los archivos como resueltos, seguido de 'git rebase --continue' para continuar con el siguiente commit (o conflicto) en el proceso de rebase."
        },
        {
          question: "¿Debo usar merge o rebase para minimizar conflictos?",
          answer: "Ambas estrategias tienen su lugar. La fusión preserva el historial exacto pero puede crear gráficos complejos con muchos commits de fusión. El rebase crea un historial más limpio y lineal pero reescribe el historial de commits, lo cual puede ser problemático para ramas compartidas. Los equipos deberían acordar un flujo de trabajo que se ajuste a sus necesidades."
        },
        {
          question: "¿Qué es un 'marcador de conflicto de fusión' en Git?",
          answer: "Los marcadores de conflicto de fusión son secuencias especiales de texto que Git inserta en los archivos para indicar cambios conflictivos. Incluyen: <<<<<<< HEAD (marcando el inicio de tus cambios), ======= (separando tus cambios de los cambios entrantes) y >>>>>>> nombre-de-la-rama (marcando el final de los cambios entrantes desde la rama especificada)."
        },
        {
          question: "¿Cómo practico la resolución de conflictos de Git de forma segura?",
          answer: "Este simulador de resolución de conflictos de Git está diseñado específicamente para practicar. Además, puedes crear un repositorio de prueba localmente, hacer cambios conflictivos en diferentes ramas y practicar fusionándolas. Esto te da un entorno seguro para ganar confianza en el manejo de conflictos."
        }
      ]
    },
    bestPractices: {
      title: "Mejores Prácticas para una Resolución Eficiente de Conflictos",
      items: [
        "Comunícate con tu equipo antes de comenzar a trabajar en archivos que podrían crear conflictos",
        "Obtén y fusiona desde la rama principal con frecuencia para reducir el tamaño y la complejidad de los conflictos",
        "Usa banderas de características para permitir que funciones incompletas se fusionen temprano sin afectar la funcionalidad",
        "Divide cambios grandes en commits más pequeños y enfocados que sean más fáciles de fusionar",
        "Comprende el contexto y la intención de ambos cambios antes de resolver conflictos",
        "Considera programación en pareja cuando resuelvas conflictos complejos para combinar perspectivas",
        "Prueba siempre tu aplicación después de resolver conflictos para asegurar que funciona correctamente",
        "Documenta tu estrategia de resolución de conflictos para garantizar coherencia en el equipo",
        "Usa mensajes significativos de commit cuando resuelvas conflictos para explicar tus decisiones",
        "Aprovecha las opciones de configuración de Git como 'git config merge.conflictstyle diff3' para ver el contenido original junto con los cambios conflictivos"
      ]
    }
  }
}