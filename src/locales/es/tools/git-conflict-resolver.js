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
  }
};