export default {
   name: 'Générateur d\'adresses Pakistan - Générez des adresses pakistanaises réelles, des informations d\'identité et des coordonnées en ligne',
   description: 'Générateur d\'adresses pakistanaises gratuit en ligne qui crée des adresses pakistanaises de format réel, des numéros d\'identification, des numéros de téléphone, des numéros de cartes de crédit et des profils d\'identité complets. Prend en charge le filtrage par province, les formats d\'exportation JSON/CSV et s\'exécute entièrement dans le navigateur pour la protection de la vie privée.',
   inputTitle: 'Paramètres de génération',
   outputTitle: 'Résultats générés',
   generateBtn: 'Générer les données',
   loadSampleBtn: 'Charger l\'exemple et générer',
   clearAll: 'Tout effacer',
   noOutput: 'Aucun résultat généré pour le moment',
   preview: 'Aperçu des données',
   
   // Filtrage géographique
   locationTitle: 'Filtrage géographique',
   selectRegion: 'Sélectionner la province/région',
   allRegions: 'Toutes les provinces/régions',
   postalCodeLabel: 'Code postal',
   validatePostalCode: 'Valider le code postal',
   
   // Types d\'adresse
   addressTypeTitle: 'Type d\'adresse',
   addressTypeResidential: 'Adresse résidentielle',
   addressTypeCommercial: 'Adresse commerciale',
   addressTypeVirtual: 'Boîte aux lettres virtuelle',
   addressTypeCampus: 'Campus universitaire',
   
   // Informations d\'identité
   identityTitle: 'Informations d\'identité',
   fullName: 'Nom complet',
   gender: 'Genre',
   genderMale: 'Masculin',
   genderFemale: 'Féminin',
   age: 'Âge',
   birthDate: 'Date de naissance',
   zodiac: 'Signe zodiacal',
   height: 'Taille',
   weight: 'Poids',
   
   // Informations de contact
   contactTitle: 'Informations de contact',
   phoneNumber: 'Numéro de téléphone',
   phoneType: 'Type de téléphone',
   phoneTypeMobile: 'Mobile',
   phoneTypeLandline: 'Ligne fixe',
   areaCode: 'Indicatif régional',
   email: 'Adresse e-mail',
   tempEmail: 'E-mail temporaire',
   
   // Carte de crédit
   creditCardTitle: 'Informations de carte de crédit',
   cardType: 'Type de carte',
   cardNumber: 'Numéro de carte',
   expiryDate: 'Date d\'expiration',
   cvv: 'CVV',
   bankBin: 'BIN bancaire',
   
   // Carrière
   careerTitle: 'Profil professionnel',
   jobTitle: 'Titre du poste',
   salary: 'Salaire',
   companyName: 'Nom de l\'entreprise',
   companySize: 'Taille de l\'entreprise',
   industry: 'Industrie',
   employmentStatus: 'Statut d\'emploi',
   employmentFullTime: 'Temps plein',
   employmentPartTime: 'Temps partiel',
   
   // Carte d\'identité
   idCardTitle: 'Carte d\'identité pakistanaise',
   idCardNumber: 'Numéro de carte d\'identité',
   
   // Empreinte numérique
   fingerprintTitle: 'Empreinte numérique',
   os: 'Système d\'exploitation',
   osVersion: 'Version du système d\'exploitation',
   browser: 'Navigateur',
   userAgent: 'Agent utilisateur',
   screenResolution: 'Résolution de l\'écran',
   timezone: 'Fuseau horaire',
   guid: 'GUID',
   ipAddress: 'Adresse IP',
   macAddress: 'Adresse MAC',
   cookiePolicy: 'Politique de cookies',
   
   // Options d\'exportation
   exportTitle: 'Format d\'exportation',
   exportJson: 'Exporter JSON',
   exportCsv: 'Exporter CSV',
   downloadBtn: 'Télécharger',
   copyBtn: 'Copier',
   viewDetails: 'Voir les détails',
   
   // Génération par lots
   batchTitle: 'Génération par lots',
   quantityLabel: 'Quantité',
   quantityPlaceholder: 'Entrez la quantité (1-100)',
   
   // Messages de notification
   generating: 'Génération en cours...',
   generated: 'Génération terminée',
   copySuccess: 'Copié dans le presse-papiers',
   downloadSuccess: 'Téléchargement réussi',
   invalidQuantity: 'Veuillez entrer un nombre entre 1 et 100',
   
   // Affichage des résultats
   resultCount: '{count} enregistrements générés',
   resultSummary: 'Résumé des résultats',
   showAll: 'Tout afficher',
   collapse: 'Réduire',
   
   // Options de génération
   generateOptionsTitle: 'Options de génération',
   
   // Affichage des enregistrements
   recordLabel: 'Enregistrement #{num}',
   addressLabel: 'Adresse',
   streetLabel: 'Rue',
   houseNumberLabel: 'Numéro de maison',
   buildingLabel: 'Bâtiment',
   floorLabel: 'Étage',
   unitLabel: 'Unité',
   regionLabel: 'Province/Région',
   postalCode: 'Code postal',
   
   // Format d\'adresse
   addressNumber: 'N°',
   addressFloor: 'Étage',
   addressUnit: 'Unité',
   commercialUnit: '(Unité commerciale)',
   pakistan: 'Pakistan',
   postOfficeBox: 'Boîte postale',
   studentDormitory: 'Résidence étudiante',
   teachingBuilding: 'Bâtiment d\'enseignement',
   library: 'Bibliothèque',
   buildingUnit: 'Bâtiment',
   apartment: 'Appartement',
   
   // Noms des provinces/régions (4 provinces + territoire du Pakistan)
   regions: {
       'Punjab': 'Pendjab',
       'Sindh': 'Sindh',
       'Khyber Pakhtunkhwa': 'Khyber Pakhtunkhwa',
       'Balochistan': 'Baloutchistan',
       'Islamabad Capital Territory': 'Territoire de la capitale Islamabad'
   },
   
   // Noms des universités
   universities: {
       'LUMS': 'Université des sciences de la gestion de Lahore',
       'PU': 'Université du Pendjab',
       'KU': 'Université de Karachi',
       'QAU': 'Université Quaid-i-Azam',
       'COMSATS': 'Université COMSATS d\'Islamabad',
       'NUST': 'Université nationale des sciences et de la technologie',
       'IBA': 'Institut d\'administration des entreprises',
       'PIDE': 'Institut pakistanais d\'économie du développement',
       'NCA': 'École nationale des arts'
   },
   
   // Noms des colonnes CSV
   csv: {
       fullAddress: 'Adresse complète',
       street: 'Rue',
       houseNumber: 'Numéro de maison',
       building: 'Bâtiment',
       floor: 'Étage',
       unit: 'Unité',
       region: 'Province/Région',
       postalCode: 'Code postal',
       fullName: 'Nom complet',
       gender: 'Genre',
       age: 'Âge',
       birthDate: 'Date de naissance',
       phone: 'Téléphone',
       email: 'E-mail',
       cardType: 'Type de carte',
       cardNumber: 'Numéro de carte',
       idCardNumber: 'Numéro de carte d\'identité'
   }
};