export default {
  title: "Calculateur de projection Gauss : outil de conversion coordonnées géo/planes",
  introTitle: "Qu'est-ce que la projection Gauss et pourquoi cet outil ?",
  introPara1: "Le <strong>calculateur de projection Gauss</strong> est un outil indispensable pour les géomètres, cartographes et professionnels SIG. Il permet de convertir entre coordonnées géographiques (lat/lon) et coordonnées planes (X/Y) selon la méthode Gauss.",
  introPara2: "Notre <strong>outil de conversion</strong> gère avec précision les calculs directs et inverses. Il supporte plusieurs ellipsoïdes (WGS84, CGCS2000, Krasovsky etc.) et applique automatiquement les formules mathématiques appropriées.",
  
  scenariosTitle: "Cas d'utilisation pratiques",
  scenario1: "<strong>Topographie et cadastre</strong> : Conversion de coordonnées GPS pour les relevés et plans.",
  scenario2: "<strong>Cartographie</strong> : Création de cartes topographiques précises.",
  scenario3: "<strong>SIG</strong> : Intégration de données spatiales dans des référentiels unifiés.",
  scenario4: "<strong>Génie civil</strong> : Conception d'infrastructures avec positionnement précis.",
  scenario5: "<strong>Défense</strong> : Planification militaire et navigation tactique.",
  scenariosConclusion: "La <strong>projection Gauss</strong> est essentielle pour tout besoin de positionnement spatial précis. Notre outil simplifie ce processus mathématique complexe.",
  
  faqTitle: "FAQ sur la projection Gauss",
  faq1q: "Différence entre Gauss et UTM ?",
  faq1a: "Gauss est la base mathématique d'UTM. Principales différences :<ul><li>UTM standardise les fuseaux (6°)</li><li>Gauss permet plus de flexibilité (3° ou 6°)</li><li>Notre <strong>calculateur</strong> offre plus d'options de personnalisation</li></ul>",
  
  faq2q: "Quel ellipsoïde choisir ?",
  faq2a: "Cela dépend de votre région et système :<ul><li><strong>WGS84</strong> : Standard GPS mondial</li><li><strong>CGCS2000</strong> : Système chinois depuis 2000</li><li><strong>Krasovsky/Pékin54</strong> : Historique en Chine/Europe de l'Est</li></ul>",
  
  faq3q: "Quelle précision ?",
  faq3a: "Notre <strong>calculateur</strong> atteint une précision sub-millimétrique pour la plupart des applications. La précision dépend des paramètres saisis.",
  
  faq4q: "Traitement par lot possible ?",
  faq4a: "Oui, notre <strong>convertisseur</strong> gère :<ul><li>Multiples paires de coordonnées</li><li>Import de fichiers CSV/Excel</li><li>Export en CSV, Excel, GeoJSON, KML</li></ul>",
  
  faq5q: "Fuseaux 3° vs 6° ?",
  faq5a: "<ul><li><strong>3°</strong> : Précision accrue pour cartes détaillées</li><li><strong>6°</strong> : Couverture plus large avec légère distorsion</li></ul>",
  
  tutorialTitle: "Guide pas à pas",
  forwardCalcTitle: "Calcul direct (lat/lon → Gauss)",
  step1: "<strong>Sélectionnez</strong> \"Directe\"",
  step2: "<strong>Choisissez</strong> l'ellipsoïde approprié",
  step3: "<strong>Configurez</strong> les paramètres de projection",
  step4: "<strong>Saisissez</strong> latitude/longitude",
  
  inverseCalcTitle: "Calcul inverse (Gauss → lat/lon)",
  step5: "<strong>Sélectionnez</strong> \"Inverse\"",
  step6: "<strong>Utilisez</strong> les mêmes paramètres que pour le calcul direct",
  step7: "<strong>Entrez</strong> X/Y en mètres",
  step8: "<strong>Consultez</strong> les résultats en degrés et DMS",
  
  batchTitle: "Traitement par lot",
  step9: "<strong>Préparez</strong> vos données (une paire par ligne)",
  step10: "<strong>Cliquez</strong> \"Calcul par lot\"",
  step11: "<strong>Exportez</strong> les résultats",
  
  tutorialConclusion: "Avec ce <strong>calculateur</strong>, convertissez facilement entre systèmes de coordonnées.",
  
  relatedToolsTitle: "Outils connexes",
  relatedTool1: "Convertisseur de coordonnées",
  relatedTool1Desc: "Conversion entre systèmes (UTM, MGRS, grilles nationales).",
  relatedTool2: "Visualisateur de traces GPS",
  relatedTool2Desc: "Analyse de traces GPS sur carte interactive.",
  
  referencesTitle: "Références techniques",
  reference1: "Système géodésique mondial 1984 (WGS84) - NGA",
  reference2: "Projection Mercator transverse - Wikipedia",
  reference3: "Système de coordonnées planes 1983 - NGS"
}
