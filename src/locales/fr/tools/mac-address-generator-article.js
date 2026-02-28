export default {
    title: 'Générateur d\'adresses MAC : générer des adresses MAC aléatoires et identifiants d\'appareils réseau en ligne',
    functionTitle: 'Comment le générateur d\'adresses MAC peut-il vous aider à générer rapidement des identifiants d\'appareils réseau valides ?',

    useCasesTitle: 'Cas d\'utilisation typiques du générateur d\'adresses MAC',
    useCase1: '<strong>Test d\'appareils réseau :</strong> Le générateur d\'adresses MAC fournit aux ingénieurs réseau et développeurs un grand nombre d\'adresses MAC conformes aux normes IEEE pour les tests de configuration et la vérification fonctionnelle d\'appareils réseau comme les routeurs, commutateurs et pare-feu.',
    useCase2: '<strong>Développement et débogage logiciel :</strong> Le générateur d\'adresses MAC peut générer par lots des données d\'adresses MAC structurées pour les tests et le débogage dans le développement d\'applications réseau, les projets IoT et la simulation d\'appareils Bluetooth.',
    useCase3: '<strong>Simulation d\'appareils IoT :</strong> Le générateur d\'adresses MAC aide les développeurs à créer des identifiants d\'appareils virtuels pour la gestion d\'appareils et les tests de communication dans les projets de maison intelligente, IoT industriel et véhicules connectés.',
    useCase4: '<strong>Tests et recherche en sécurité :</strong> Le générateur d\'adresses MAC fournit des adresses MAC anonymisées aux chercheurs en sécurité pour les tests de sécurité réseau, les tests de pénétration et la recherche sur le contournement du filtrage MAC.',
    useCase5: '<strong>Éducation et formation :</strong> Le générateur d\'adresses MAC génère des adresses MAC au format standard pour aider les enseignants et étudiants à comprendre la structure des adresses de couche réseau, les règles d\'attribution OUI et la différenciation unicast/multicast.',
    useCase6: '<strong>Remplissage de bases de données :</strong> Le générateur d\'adresses MAC crée des données d\'adresses MAC conformes aux modèles réels pour les bases de données de développement et de test des systèmes de gestion réseau, plateformes de surveillance d\'appareils et systèmes de gestion d\'actifs.',

    tipTitle: 'Conseils d\'utilisation professionnelle',
    tipContent: 'Lors de l\'utilisation du générateur d\'adresses MAC, il est recommandé de choisir des formats et préfixes de fabricants appropriés selon les besoins réels. Pour les scénarios nécessitant la simulation d\'appareils réels, sélectionnez des préfixes OUI de fabricants spécifiques. Pour les scénarios de tests de sécurité, utilisez des adresses administrées localement (LAA) pour éviter les conflits avec les appareils réels.',

    conclusion: '<p>Que ce soit pour l\'ingénierie réseau, le développement logiciel ou la recherche en sécurité, le <strong>générateur d\'adresses MAC</strong> fournit des adresses MAC de haute qualité conformes aux normes IEEE. Le générateur d\'adresses MAC prend en charge plusieurs formats de sortie dont les formats séparés par deux-points, tirets et points, tout en offrant la sélection de préfixes OUI de fabricants pour rendre les adresses générées plus réalistes. Tout le traitement est effectué localement dans le navigateur, garantissant l\'absence de risque de fuite de données.</p>',

    faqTitle: 'Questions fréquemment posées sur le générateur d\'adresses MAC',
    faq1Question: 'Les adresses générées par le générateur d\'adresses MAC sont-elles réelles et valides ?',
    faq1Answer: 'Les adresses MAC générées par le générateur d\'adresses MAC sont entièrement conformes au format standard IEEE 802, assurant la validité de l\'adresse par des paramètres de bits appropriés. Cependant, ce sont des adresses virtuelles générées aléatoirement non associées à aucun appareil réseau réel. Le générateur d\'adresses MAC est destiné uniquement à des fins de test et de développement, et non à une utilisation comme identifiants d\'appareils réels dans des environnements de production.',

    faq2Question: 'Qu\'est-ce qu\'un préfixe OUI ? Comment utiliser la fonction de préfixe de fabricant ?',
    faq2Answer: 'L\'OUI (Organizationally Unique Identifier) représente les 3 premiers octets d\'une adresse MAC, attribués par l\'IEEE aux fabricants d\'appareils réseau. Le générateur d\'adresses MAC fournit des préfixes OUI pour les fabricants courants. En sélectionnant un fabricant spécifique, les adresses MAC générées utiliseront l\'OUI de ce fabricant, rendant les adresses plus similaires à des appareils réels. Vous pouvez également entrer un préfixe OUI personnalisé.',

    faq3Question: 'Quels formats de sortie le générateur d\'adresses MAC prend-il en charge ?',
    faq3Answer: 'Le générateur d\'adresses MAC prend en charge plusieurs formats courants : le format séparé par deux-points (XX:XX:XX:XX:XX:XX) pour les systèmes Linux/Unix, le format séparé par tirets (XX-XX-XX-XX-XX-XX) pour les systèmes Windows, le format séparé par points (XXXX.XXXX.XXXX) pour les appareils Cisco, et le format sans séparateur (XXXXXXXXXXXX) pour certains systèmes embarqués.',

    faq4Question: 'Quelle est la différence entre les adresses unicast et multicast ?',
    faq4Answer: 'Le bit de poids faible du premier octet d\'une adresse MAC détermine le type d\'adresse. Une adresse unicast a ce bit défini à 0, utilisé pour la communication point à point pour identifier un appareil réseau spécifique. Une adresse multicast a ce bit défini à 1, utilisé pour la communication de groupe pour identifier un groupe d\'appareils réseau. Le générateur d\'adresses MAC prend en charge la génération des deux types.',

    faq5Question: 'Quelle est la différence entre les adresses uniques globalement (UAA) et les adresses administrées localement (LAA) ?',
    faq5Answer: 'Les adresses uniques globalement (UAA, Universally Administered Address) sont attribuées par les fabricants d\'appareils, avec le deuxième bit de poids faible du premier octet défini à 0. Les adresses administrées localement (LAA, Locally Administered Address) sont attribuées par les administrateurs réseau, avec ce bit défini à 1. Le générateur d\'adresses MAC prend en charge les deux types, LAA étant couramment utilisé dans les machines virtuelles et les environnements de test.',

    tutorialTitle: 'Guide d\'utilisation du générateur d\'adresses MAC',
    step1Title: 'Étape 1 : Sélectionner le format de l\'adresse MAC',
    step1Description: 'Dans le générateur d\'adresses MAC, sélectionnez d\'abord le format de sortie. Le format séparé par deux-points convient à la plupart des systèmes Linux/Unix, le format séparé par tirets aux systèmes Windows, et le format séparé par points aux appareils réseau Cisco. Vous pouvez également choisir la sortie en majuscules ou minuscules.',
    step1Note: 'Différents systèmes et appareils peuvent nécessiter différents formats ; veuillez choisir le format approprié selon votre cas d\'utilisation.',

    step2Title: 'Étape 2 : Sélectionner le type d\'adresse',
    step2Description: 'Dans le générateur d\'adresses MAC, sélectionnez le type d\'adresse : les adresses unicast pour identifier des appareils individuels, les adresses multicast pour identifier des groupes d\'appareils ; les adresses uniques globalement (UAA) simulent des appareils réels, les adresses administrées localement (LAA) pour les environnements virtuels. Choisissez la combinaison appropriée selon les besoins de test.',
    step2Note: 'La plupart des scénarios de test utilisent la combinaison unicast + adresse unique globalement ; les environnements de machines virtuelles utilisent généralement la combinaison unicast + adresse administrée localement.',

    step3Title: 'Étape 3 : Sélectionner le préfixe du fabricant (optionnel)',
    step3Description: 'Le générateur d\'adresses MAC fournit des préfixes OUI pour les fabricants d\'appareils réseau courants comme Apple, Cisco, Intel, Huawei, etc. En sélectionnant un fabricant spécifique, les adresses MAC générées utiliseront le préfixe OUI réel de ce fabricant, rendant les données de test plus réalistes. Vous pouvez également entrer un préfixe OUI personnalisé.',
    step3Note: 'Si vous n\'avez pas besoin de simuler des appareils de fabricants spécifiques, sélectionnez "Fabricant aléatoire" pour générer des adresses MAC entièrement aléatoires.',

    step4Title: 'Étape 4 : Définir la quantité de génération',
    step4Description: 'Dans le générateur d\'adresses MAC, entrez le nombre d\'adresses MAC à générer (1-1000), puis cliquez sur le bouton "Générer l\'adresse". Le système générera rapidement toutes les adresses localement dans le navigateur sans attendre de réponse du serveur.',
    step4Note: 'Lors de la génération par lots de grandes quantités, testez d\'abord une petite quantité pour confirmer que le format et le type répondent à vos exigences.',

    step5Title: 'Étape 5 : Afficher et vérifier les résultats',
    step5Description: 'Une fois la génération terminée, le générateur d\'adresses MAC affiche toutes les adresses générées dans la zone de sortie. Vous pouvez développer chaque enregistrement pour voir les informations détaillées incluant le nom du fabricant, le type d\'adresse, le format, etc. Vérifiez que le format et le type d\'adresse répondent à vos exigences.',
    step5Note: 'Toutes les adresses générées par le générateur d\'adresses MAC sont conformes aux normes IEEE 802 et peuvent être directement utilisées pour les tests et le développement.',

    step6Title: 'Étape 6 : Exporter les données',
    step6Description: 'Après avoir confirmé que les données sont correctes, sélectionnez le format d\'exportation dans le générateur d\'adresses MAC : JSON pour le traitement par programme, CSV pour l\'analyse de tableur. Vous pouvez également copier des adresses individuelles ou toutes les adresses dans le presse-papiers pour les coller dans d\'autres applications.',
    step6Note: 'Les fichiers exportés contiennent tous les champs générés pour faciliter le traitement ultérieur des données et l\'importation par lots.',

    successTitle: 'Génération terminée !',
    successContent: 'Félicitations, vous maîtrisez maintenant le générateur d\'adresses MAC ! Vous pouvez désormais générer rapidement des adresses MAC conformes aux normes IEEE pour les tests d\'appareils réseau, le développement logiciel, la simulation IoT et divers autres scénarios.',

    relatedToolsTitle: 'Outils connexes qui pourraient vous intéresser',
    relatedTool1Name: 'Générateur d\'UUID',
    relatedTool1Description: 'Générer des identifiants uniques (UUID) pour les clés primaires de base de données et l\'identification unique.',
    relatedTool1Url: 'https://www.ufreetools.com/tool/uuid-generator',

    relatedTool2Name: 'Générateur d\'adresses de Hong Kong',
    relatedTool2Description: 'Générer des adresses réalistes de Hong Kong, des informations d\'identité et des coordonnées en ligne.',
    relatedTool2Url: 'https://www.ufreetools.com/tool/hk-address-generator',

    relatedTool3Name: 'Générateur de mots de passe aléatoires',
    relatedTool3Description: 'Générer des mots de passe aléatoires sécurisés et fiables pour protéger la sécurité des comptes.',
    relatedTool3Url: 'https://www.ufreetools.com/tool/password-generator',

    relatedTool4Name: 'Formateur JSON',
    relatedTool4Description: 'Embellir et valider les données JSON pour une lecture et un débogage faciles.',
    relatedTool4Url: 'https://www.ufreetools.com/tool/json-formatter',

    reference1Name: 'Base de données IEEE OUI',
    reference1Description: 'Rechercher les informations d\'attribution OUI officielles et les listes de fabricants.',
    reference1Url: 'https://standards-oui.ieee.org/',

    reference2Name: 'Adresse MAC - Wikipédia',
    reference2Description: 'En savoir plus sur la structure, les types et les scénarios d\'application des adresses MAC.',
    reference2Url: 'https://en.wikipedia.org/wiki/MAC_address',

    reference3Name: 'Normes IEEE 802',
    reference3Description: 'Approfondir les normes et spécifications des adresses réseau.',
    reference3Url: 'https://standards.ieee.org/ieee/802/10328/'
};
