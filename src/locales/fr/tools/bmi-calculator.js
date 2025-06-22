export default {
    name: 'Calculateur IMC',
    description: 'Calculez votre Indice de Masse Corporelle (IMC) et évaluez votre état pondéral',
    
    // Textes principaux
    height: 'Taille',
    weight: 'Poids',
    calculate: 'Calculer l\'IMC',
    reset: 'Réinitialiser',
    yourBmi: 'Votre IMC',
    bmiCategory: 'Catégorie IMC',
    
    // Unités
    unitSystem: 'Système d\'unités',
    metric: 'Métrique (cm/kg)',
    imperial: 'Impérial (pieds/livres)',
    cm: 'cm',
    ft: 'pieds',
    in: 'pouces',
    kg: 'kg',
    lbs: 'livres',
    
    // Catégories IMC
    underweight: 'Insuffisance pondérale',
    normalWeight: 'Poids normal',
    overweight: 'Surpoids',
    obesity: 'Obésité',
    severeObesity: 'Obésité sévère',
    
    // Détails des catégories
    underweightDesc: 'IMC inférieur à 18.5',
    normalWeightDesc: 'IMC entre 18.5 et 24.9',
    overweightDesc: 'IMC entre 25 et 29.9',
    obesityDesc: 'IMC entre 30 et 34.9',
    severeObesityDesc: 'IMC de 35 ou plus',
    
    // Description des résultats
    resultPrefix: 'Votre IMC est de',
    resultSuffix: ', ce qui indique que vous êtes en',
    
    // Section d\'information
    aboutTitle: 'À propos du calculateur IMC',
    aboutDescription: 'L\'IMC (Indice de Masse Corporelle) est un indicateur permettant d\'évaluer si le rapport poids/taille d\'une personne est sain. Cet outil calcule votre IMC et fournit une évaluation de santé correspondante.',
    
    whatIsTitle: 'Qu\'est-ce que l\'IMC ?',
    whatIsDescription: 'L\'IMC (Indice de Masse Corporelle) se calcule en divisant le poids (kg) par le carré de la taille (m). Il permet d\'évaluer si un individu se situe dans une fourchette de poids saine, et constitue la norme internationale pour mesurer la corpulence.',
    
    howToCalculateTitle: 'Comment calculer l\'IMC',
    metricFormula: 'Formule métrique : IMC = poids(kg) / taille(m)²',
    imperialFormula: 'Formule impériale : IMC = poids(lbs) × 703 / taille(pouces)²',
    
    interpretationTitle: 'Interprétation de l\'IMC',
    interpretationDesc: 'Les catégories de poids selon l\'IMC sont les suivantes :',
    
    limitationsTitle: 'Limites de l\'IMC',
    limitation1: 'Ne tient pas compte du taux de graisse, de la masse musculaire ou osseuse',
    limitation2: 'Ne s\'applique pas aux athlètes, femmes enceintes et enfants',
    limitation3: 'Ne reflète pas la répartition des graisses',
    limitation4: 'Ne considère pas les différences ethniques, d\'âge ou de sexe',
    
    tipsTitle: 'Conseils pour un poids sain',
    tip1: 'Maintenez une alimentation équilibrée avec protéines, fruits/légumes et céréales complètes',
    tip2: 'Pratiquez au moins 150 minutes d\'activité aérobique modérée par semaine',
    tip3: 'Évitez la sédentarité prolongée, augmentez l\'activité quotidienne',
    tip4: 'Dormez suffisamment et hydratez-vous bien',
    tip5: 'Si votre IMC est anormal, consultez un médecin ou nutritionniste',
    
    // Ajout de cette ligne
    emptyStateMessage: 'Entrez votre taille et poids, puis cliquez sur "Calculer l\'IMC"'
  };