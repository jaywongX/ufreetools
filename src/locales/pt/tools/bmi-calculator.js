export default {
    name: 'Calculadora de IMC',
    description: 'Calcule seu Índice de Massa Corporal (IMC) e avalie sua condição de peso',
    
    // Textos principais da interface
    height: 'Altura',
    weight: 'Peso',
    calculate: 'Calcular IMC',
    reset: 'Reiniciar',
    yourBmi: 'Seu valor de IMC',
    bmiCategory: 'Classificação do IMC',
    
    // Seleção de unidades
    unitSystem: 'Sistema de unidades',
    metric: 'Métrico (cm/kg)',
    imperial: 'Imperial (pés/libras)',
    cm: 'centímetros',
    ft: 'pés',
    in: 'polegadas',
    kg: 'quilogramas',
    lbs: 'libras',
    
    // Classificação do IMC
    underweight: 'Abaixo do peso',
    normalWeight: 'Peso normal',
    overweight: 'Sobrepeso',
    obesity: 'Obesidade',
    severeObesity: 'Obesidade grave',
    
    // Detalhes da classificação
    underweightDesc: 'IMC abaixo de 18,5',
    normalWeightDesc: 'IMC entre 18,5 e 24,9',
    overweightDesc: 'IMC entre 25 e 29,9',
    obesityDesc: 'IMC entre 30 e 34,9',
    severeObesityDesc: 'IMC 35 ou acima',
    
    // Descrição do resultado
    resultPrefix: 'Seu IMC é',
    resultSuffix: ', indicando que você está na categoria',
    
    // Seção de informações sobre a ferramenta
    aboutTitle: 'Sobre a Calculadora de IMC',
    aboutDescription: 'O IMC (Índice de Massa Corporal) é um indicador que avalia se a proporção entre peso e altura de uma pessoa é saudável. Esta ferramenta calcula seu IMC com base na sua altura e peso e fornece uma avaliação de saúde correspondente.',
    
    whatIsTitle: 'O que é IMC?',
    whatIsDescription: 'IMC (Índice de Massa Corporal) é calculado dividindo o peso (kg) pelo quadrado da altura (m). O valor do IMC é usado para avaliar se um indivíduo está dentro da faixa de peso saudável e é atualmente o padrão internacional mais utilizado para medir o grau de magreza ou obesidade.',
    
    howToCalculateTitle: 'Como calcular o IMC',
    metricFormula: 'Fórmula métrica: IMC = peso(kg) / altura(m)²',
    imperialFormula: 'Fórmula imperial: IMC = peso(lbs) × 703 / altura(pol)²',
    
    interpretationTitle: 'Interpretação do IMC',
    interpretationDesc: 'A classificação do estado de peso correspondente ao valor do IMC é a seguinte:',
    
    limitationsTitle: 'Limitações do IMC',
    limitation1: 'O IMC não considera diferenças na porcentagem de gordura, massa muscular e massa óssea',
    limitation2: 'Não é adequado para avaliar o estado de peso de atletas, gestantes e crianças',
    limitation3: 'Não reflete a distribuição de gordura no corpo',
    limitation4: 'Não considera diferenças raciais, de idade e sexo',
    
    tipsTitle: 'Dicas para um peso saudável',
    tip1: 'Mantenha uma dieta equilibrada com proteínas, vegetais e grãos integrais adequados',
    tip2: 'Pratique pelo menos 150 minutos de exercícios aeróbicos moderados por semana',
    tip3: 'Evite ficar sentado por longos períodos, aumente a atividade física diária',
    tip4: 'Mantenha uma hidratação adequada e durma o suficiente',
    tip5: 'Se seu IMC estiver fora da faixa normal, consulte um médico ou nutricionista',
    
    emptyStateMessage: 'Digite sua altura e peso e clique no botão "Calcular IMC"'
  };