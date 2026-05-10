export default {
   name: 'Générateur d\'adresses Inde - Générer de vraies adresses indiennes, informations d\'identité et coordonnées en ligne',
   description: 'Générateur d\'adresses indien gratuit en ligne qui crée des adresses indiennes au format réel, des numéros d\'identification, des numéros de téléphone, des numéros de carte de crédit et des profils d\'identité complets. Prend en charge le filtrage par état, les formats d\'exportation JSON/CSV et s\'exécute entièrement dans le navigateur pour la protection de la vie privée.',
   inputTitle: 'Paramètres de génération',
   outputTitle: 'Résultats générés',
   generateBtn: 'Générer les données',
   loadSampleBtn: 'Charger l\'échantillon et générer',
   clearAll: 'Tout effacer',
   noOutput: 'Aucun résultat généré pour le moment',
   preview: 'Aperçu des données',
   
   // Filtrage géographique
   locationTitle: 'Filtrage géographique',
   selectRegion: 'Sélectionner l\'état',
   allRegions: 'Tous les états',
   postalCodeLabel: 'Code postal',
   validatePostalCode: 'Valider le code postal',
   
   // Types d\'adresses
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
   zodiac: 'Signe du zodiaque',
   height: 'Taille',
   weight: 'Poids',
   
   // Informations de contact
   contactTitle: 'Informations de contact',
   phoneNumber: 'Numéro de téléphone',
   phoneType: 'Type de téléphone',
   phoneTypeMobile: 'Mobile',
   phoneTypeLandline: 'Fixe',
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
   jobTitle: 'Poste',
   salary: 'Salaire',
   companyName: 'Nom de l\'entreprise',
   companySize: 'Taille de l\'entreprise',
   industry: 'Secteur d\'activité',
   employmentStatus: 'Statut d\'emploi',
   employmentFullTime: 'Temps plein',
   employmentPartTime: 'Temps partiel',
   
   // Carte d\'identité
   idCardTitle: 'Carte d\'identité indienne',
   idCardNumber: 'Numéro de carte d\'identité',
   aadhaarNumber: 'Numéro Aadhaar',
   
   // Empreinte numérique
   fingerprintTitle: 'Empreinte numérique',
   os: 'Système d\'exploitation',
   osVersion: 'Version du système',
   browser: 'Navigateur',
   userAgent: 'Agent utilisateur',
   screenResolution: 'Résolution d\'écran',
   timezone: 'Fuseau horaire',
   guid: 'GUID',
   ipAddress: 'Adresse IP',
   macAddress: 'Adresse MAC',
   cookiePolicy: 'Politique des cookies',
   
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
   regionLabel: 'État',
   postalCode: 'Code postal',
   
   // Format d\'adresse
   addressNumber: 'N°',
   addressFloor: 'Ét.',
   addressUnit: 'Unité',
   commercialUnit: '(Unité commerciale)',
   india: 'Inde',
   postOfficeBox: 'Boîte postale',
   studentDormitory: 'Résidence universitaire',
   teachingBuilding: 'Bâtiment d\'enseignement',
   library: 'Bibliothèque',
   buildingUnit: 'Bloc',
   apartment: 'Appartement',
   
   // Noms des régions (États indiens)
   regions: {
       'Maharashtra': 'Maharashtra',
       'Karnataka': 'Karnataka',
       'Tamil Nadu': 'Tamil Nadu',
       'Delhi': 'Delhi',
       'Gujarat': 'Gujarat',
       'Rajasthan': 'Rajasthan',
       'Uttar Pradesh': 'Uttar Pradesh',
       'West Bengal': 'Bengale occidental',
       'Kerala': 'Kerala',
       'Andhra Pradesh': 'Andhra Pradesh',
       'Telangana': 'Telangana',
       'Madhya Pradesh': 'Madhya Pradesh',
       'Bihar': 'Bihar',
       'Punjab': 'Punjab',
       'Haryana': 'Haryana',
       'Odisha': 'Odisha',
       'Chhattisgarh': 'Chhattisgarh',
       'Jharkhand': 'Jharkhand',
       'Assam': 'Assam',
       'Jammu and Kashmir': 'Jammu et Cachemire'
   },
   
   // Noms des universités
   universities: {
       'IIT': 'Institut indien de technologie',
       'IISc': 'Institut indien des sciences',
       'IIM': 'Institut indien de gestion',
       'AIIMS': 'Institut indien des sciences médicales',
       'JNU': 'Université Jawaharlal Nehru',
       'DU': 'Université de Delhi',
       'BHU': 'Université hindoue de Bénarès',
       'Jadavpur': 'Université de Jadavpur',
       'Anna': 'Université Anna',
       'Osmania': 'Université Osmania'
   },
   
   // Noms des colonnes CSV
   csv: {
       fullAddress: 'Adresse complète',
       street: 'Rue',
       houseNumber: 'Numéro de maison',
       building: 'Bâtiment',
       floor: 'Étage',
       unit: 'Unité',
       region: 'État',
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