export default {
  name: 'Calculadora de IMC',
  description: 'Calcula tu Índice de Masa Corporal (IMC) y evalúa tu estado de peso',

  // Main interface text
  height: 'Altura',
  weight: 'Peso',
  calculate: 'Calcular IMC',
  reset: 'Reiniciar',
  yourBmi: 'Tu IMC',
  bmiCategory: 'Categoría del IMC',

  // Unit selection
  unitSystem: 'Sistema de Unidades',
  metric: 'Métrico (cm/kg)',
  imperial: 'Imperial (ft/lbs)',
  cm: 'centímetros',
  ft: 'pies',
  in: 'pulgadas',
  kg: 'kilogramos',
  lbs: 'libras',

  // BMI categories
  underweight: 'Bajo Peso',
  normalWeight: 'Peso Normal',
  overweight: 'Sobrepeso',
  obesity: 'Obesidad',
  severeObesity: 'Obesidad Severa',

  // Category details
  underweightDesc: 'IMC por debajo de 18.5',
  normalWeightDesc: 'IMC entre 18.5 y 24.9',
  overweightDesc: 'IMC entre 25 y 29.9',
  obesityDesc: 'IMC entre 30 y 34.9',
  severeObesityDesc: 'IMC de 35 o más',

  // Result description
  resultPrefix: 'Tu IMC es',
  resultSuffix: 'indicando',

  // Tool introduction
  aboutTitle: 'Acerca de la Calculadora del IMC',
  aboutDescription: 'La calculadora del IMC (Índice de Masa Corporal) es una herramienta que evalúa si tu peso está en proporción saludable respecto a tu altura. Esta herramienta calcula tu IMC basándose en tu altura y peso, y proporciona una evaluación de salud.',

  whatIsTitle: '¿Qué es el IMC?',
  whatIsDescription: 'El IMC (Índice de Masa Corporal) es un valor calculado dividiendo el peso de una persona en kilogramos por el cuadrado de su altura en metros. Es una medida internacionalmente utilizada para evaluar el peso corporal en relación con la altura.',

  howToCalculateTitle: 'Cómo calcular el IMC',
  metricFormula: 'Fórmula métrica: IMC = Peso(kg) / Altura(m)²',
  imperialFormula: 'Fórmula imperial: IMC = Peso(lbs) × 703 / Altura(in)²',

  interpretationTitle: 'Interpretación del IMC',
  interpretationDesc: 'Los valores del IMC corresponden a las siguientes categorías de estado de peso:',

  limitationsTitle: 'Limitaciones del IMC',
  limitation1: 'El IMC no tiene en cuenta diferencias en porcentaje de grasa corporal, masa muscular o densidad ósea',
  limitation2: 'No es adecuado para atletas, mujeres embarazadas o niños',
  limitation3: 'No refleja la distribución de grasa en el cuerpo',
  limitation4: 'No considera diferencias raciales, de edad o género',

  tipsTitle: 'Consejos para un peso saludable',
  tip1: 'Mantén una dieta equilibrada con proteínas suficientes, frutas, verduras y granos enteros',
  tip2: 'Realiza al menos 150 minutos de actividad aeróbica moderada por semana',
  tip3: 'Evita estar sentado durante mucho tiempo e incrementa la actividad física diaria',
  tip4: 'Asegúrate de dormir lo suficiente y mantenerte hidratado',
  tip5: 'Si tu IMC es anormal, considera consultar con un médico o nutricionista para recibir consejos profesionales'
};