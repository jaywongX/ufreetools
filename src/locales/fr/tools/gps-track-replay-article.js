export default {
  title: "Outil de relecture GPS : Visualisez et analysez vos données GPS",
  introTitle: "Qu'est-ce que la relecture GPS ?",
  introPara1: "L'<strong>outil de relecture GPS</strong> est une application web puissante conçue pour visualiser et analyser des traces GPS depuis divers formats. Que vous soyez un athlète analysant ses parcours, un voyageur documentant ses trajets ou un professionnel examinant des opérations sur le terrain, notre outil offre une solution complète pour visualiser des données de mouvement dans le temps.",
  introPara2: "En supportant GPX, CSV, TXT et GeoJSON, ce <strong>visualisateur de traces GPS</strong> vous permet d'importer facilement vos données et de les voir s'animer sur une carte interactive. L'outil calcule automatiquement des métriques clés comme la distance, durée, vitesse moyenne et maximale, fournissant des insights précieux sur vos schémas de déplacement.",
  useCasesTitle: "Applications typiques",
  useCase1: "<strong>Analyse sportive</strong> : Les athlètes peuvent rejouer leurs courses/randos pour analyser la performance.",
  useCase2: "<strong>Journal de voyage</strong> : Visualisez vos trajets pour créer des cartes narratives.",
  useCase3: "<strong>Gestion de flotte</strong> : Optimisez les routes des véhicules en analysant les tracés.",
  useCase4: "<strong>Recherche</strong> : Étudiez les déplacements dans le cadre de travaux de terrain.",
  useCase5: "<strong>Loisirs outdoor</strong> : Planifiez de futures excursions en revisitant vos traces.",
  introPara3: "Au-delà de la simple visualisation, notre outil offre des contrôles de lecture variables et des graphiques d'altitude/vitesse. Vous pouvez exporter vos traces vers d'autres applications après analyse.",
  
  faqTitle: "FAQ",
  faq1Q: "Quels formats sont supportés ?",
  faq1A: "GPX (standard GPS), CSV/TXT (données brutes) et GeoJSON (géospatial). La plupart des appareils et apps d'activité exportent ces formats.",
  faq2Q: "Comment créer des fichiers de trace ?",
  faq2A: "Plusieurs méthodes :<ul class='list-disc pl-6 mt-2'><li>Apps fitness (Strava, Garmin...)</li><li>GPS dédiés (Garmin, Suunto)</li><li>Smartphones avec apps dédiées</li><li>Fichiers CSV/TXT manuels</li></ul>",
  faq3Q: "L'altitude est-elle analysée ?",
  faq3A: "Oui, si vos données contiennent des valeurs d'altitude (comme la plupart des GPX), l'outil génère un profil altimétrique pour analyser le dénivelé.",
  faq4Q: "La précision des vitesses ?",
  faq4A: "Les vitesses sont calculées à partir des coordonnées et horodatages. Plus les points sont fréquents (ex: 1-5s), plus le calcul est précis. Suffisant pour identifier des tendances.",
  faq5Q: "Partage des visualisations ?",
  faq5A: "Exportez en KML/GeoJSON pour partager. Ces fichiers s'ouvrent dans Google Earth/Maps et d'autres outils cartographiques.",
  
  tutorialTitle: "Tutoriel",
  step1Title: "Téléchargement",
  step1Content: "Cliquez ou glissez-déposez un fichier GPX/CSV/GeoJSON. Des exemples sont disponibles pour tester sans vos propres données.",
  step1Tip: "<strong>Astuce</strong> : Pour CSV/TXT, incluez au minimum des colonnes latitude/longitude. Ajoutez des horodatages pour activer l'analyse temporelle.",
  
  step2Title: "Visualisation carte",
  step2Content: "Votre trace s'affiche en bleu avec un marqueur de position. Zoomez/dézoomez avec la molette ou pincez sur mobile. Changez le fond de carte (satellite, terrain...) selon vos besoins.",
  
  step3Title: "Contrôles de lecture",
  step3Content: "Utilisez les boutons lecture/pause. Le curseur de vitesse ajuste la simulation de 1x (lent) à 20x (rapide). Le bouton reset ramène au départ.",
  
  step4Title: "Analyse des données",
  step4Content: "Consultez les statistiques (distance, vitesse...) et graphiques sous la carte. Cliquez sur les graphiques pour sauter à des points spécifiques.",
  
  step5Title: "Export",
  step5Content: "Téléchargez votre trace analysée en KML (pour Google Earth) ou GeoJSON (standard ouvert) pour une utilisation ultérieure.",
  
  resourcesTitle: "Ressources",
  relatedToolsTitle: "Outils connexes",
  relatedTool1: "Convertisseur de coordonnées",
  relatedTool2: "Visualiseur GeoJSON",
  relatedTool3: "Éditeur GPX",
  externalResourcesTitle: "Ressources externes",
  externalResource1: "OpenStreetMap - Cartographie libre",
  externalResource2: "GPS Visualizer - Outils avancés",
  externalResource3: "Documentation KML",
  
  conclusionTitle: "Conclusion",
  conclusionPara1: "Notre outil de relecture GPS transforme des données brutes en visualisations interactives riches en insights. Que ce soit pour optimiser des performances, documenter des voyages ou analyser des opérations, il rend les traces GPS accessibles et exploitables.",
  conclusionPara2: "Avec son support multi-formats, ses contrôles de lecture précis et ses fonctionnalités d'export, il s'intègre parfaitement dans vos flux existants de travail avec des données géospatiales."
}
