export default {
    title: "Générateur de code de crédit social unifié - Guide complet",
    introTitle: "Qu'est-ce qu'un générateur de code de crédit social unifié ?",
    introPara1: "Le <strong>générateur de code de crédit social unifié</strong> est un outil spécialement conçu pour créer automatiquement des codes chinois de crédit social unifiés valides conformes à la norme nationale GB 32107-2015. Ces codes à 18 caractères servent d'identifiants uniques pour les entreprises, organisations et autres entités juridiques opérant en Chine, similaires aux numéros d'identification fiscale américains (EIN) ou autres identifiants commerciaux nationaux.",
    introPara2: "Notre générateur produit des codes entièrement conformes aux spécifications requises par les régulateurs chinois, incluant les codes corrects d'autorité d'enregistrement, les identifiants de type d'entité, les codes de division administrative, ainsi qu'une somme de contrôle valide calculée avec l'algorithme ISO 7064:1983 MOD 11-2. Que vous ayez besoin de données de test pour le développement logiciel, de remplissage de base de données, ou simplement de comprendre la structure de ces identifiants commerciaux clés, cet outil fournit une solution fiable pour générer des codes de crédit social unifiés réalistes et structurellement valides.",
    
    scenariosTitle: "Scénarios d'application du générateur",
    scenariosPara: "Cet outil offre des solutions pratiques pour divers contextes professionnels et techniques :",
    scenario1: "<strong>Développement et tests logiciels</strong> : Génère des données de test valides pour les applications traitant l'enregistrement d'entreprises chinoises, les déclarations fiscales ou la conformité réglementaire, assurant que votre logiciel traite correctement ces codes sans utiliser de vrais identifiants.",
    scenario2: "<strong>Tests de base de données et assurance qualité</strong> : Remplit des bases de test avec des codes crédibles pour des tests QA complets, sans exposer de données réelles.",
    scenario3: "<strong>Éducation et formation</strong> : Fournit des exemples concrets pour les formations sur l'enregistrement d'entreprises, la conformité ou le commerce international en Chine.",
    scenario4: "<strong>Validation de migration de données</strong> : Teste les processus de migration impliquant des entités chinoises avec des identifiants structurés valides.",
    scenario5: "<strong>Simulation de processus métier</strong> : Crée des données réalistes pour simuler des flux de travail impliquant des documents réglementaires ou la conformité fiscale.",
    
    tutorialTitle: "Comment utiliser le générateur",
    step1Title: "Étape 1 : Configurer l'autorité d'enregistrement",
    step1Content: "Sélectionnez le code approprié dans la liste. Pour la plupart des entreprises, le code industrie et commerce (8) est le choix courant.",
    
    step2Title: "Étape 2 : Choisir le type d'entité",
    step2Content: "Sélectionnez entre entreprise (1), entreprise individuelle (2), coopérative agricole (3) ou autre (9). Ce choix détermine le deuxième caractère du code.",
    
    step3Title: "Étape 3 : Sélectionner le code de région",
    step3Content: "Choisissez une division administrative spécifique ou laissez l'outil attribuer un code valide aléatoirement. Ce code représente la localisation géographique de l'enregistrement.",
    
    step4Title: "Étape 4 : Définir la quantité et générer",
    step4Content: "Spécifiez le nombre de codes à générer (1 à 1000), puis cliquez sur \"Générer des codes\". Les résultats peuvent être copiés ou exportés en TXT, CSV ou Excel.",
    
    tipTitle: "Astuce professionnelle :",
    tipContent: "Pour des tests pertinents, générez des codes correspondant à votre scénario. Par exemple, pour tester un système avec des entreprises de Pékin, sélectionnez le code régional 110000.",
    
    faqTitle: "FAQ sur les codes de crédit social unifié",
    
    faq1Question: "Quelle différence entre code de crédit social unifié et code d'organisation ?",
    faq1Answer: "Le <strong>code de crédit social unifié</strong> à 18 caractères remplace les anciens identifiants dans le cadre de la réforme chinoise. Le code d'organisation à 9 chiffres est maintenant intégré aux caractères 9-17 du nouveau code, qui fusionne les informations auparavant dispersées entre plusieurs documents en un seul identifiant conforme à GB 32107-2015.",
    
    faq2Question: "Peut-on utiliser ces codes pour un enregistrement réel d'entreprise ?",
    faq2Answer: "Non. Les codes générés sont structurellement valides et passeraient les vérifications de format, mais ils sont <strong>aléatoires et uniquement destinés aux tests et à l'éducation</strong>. Les utiliser pour des procédures réelles constituerait une fraude. En Chine, les codes légitimes ne sont émis que par les autorités compétentes après un enregistrement officiel.",
    
    faq3Question: "Comment vérifier la validité d'un code ?",
    faq3Answer: "Pour valider un code :<ol><li>Vérifiez qu'il contient exactement 18 caractères</li><li>Confirmez qu'il n'utilise que des chiffres et lettres majuscules autorisées</li><li>Validez le code de contrôle (18ème caractère) avec l'algorithme MOD 11-2</li><li>Vérifiez que le code régional correspond à une division administrative valide</li></ol>Pour une vérification officielle, consultez le système national d'information sur le crédit des entreprises à <a href='https://www.gsxt.gov.cn' target='_blank' rel='noopener noreferrer'>www.gsxt.gov.cn</a>.",
    
    faq4Question: "Que signifient les différentes parties du code ?",
    faq4Answer: "Le code se décompose ainsi :<ul><li><strong>1er caractère</strong> : Autorité d'enregistrement</li><li><strong>2ème caractère</strong> : Type d'entité</li><li><strong>Caractères 3-8</strong> : Division administrative (norme GB/T 2260)</li><li><strong>Caractères 9-17</strong> : Code d'organisation</li><li><strong>18ème caractère</strong> : Code de contrôle (algorithme ISO 7064:1983 MOD 11-2)</li></ul>Chaque section fournit des informations spécifiques sur l'entité enregistrée.",
    
    faq5Question: "Quand la Chine a-t-elle mis en œuvre ce système ?",
    faq5Answer: "Le système a été officiellement lancé en octobre 2015 avec la publication de la norme GB 32107-2015, dans le cadre de la réforme de l'enregistrement des entreprises et de la construction du système de crédit social. Une période de transition de 2015 à 2017 a permis aux entreprises existantes de mettre à jour leurs informations. Depuis 2018, toutes les entités enregistrées en Chine doivent utiliser ce code comme identifiant principal pour toutes les interactions gouvernementales et la conformité réglementaire.",
    
    standardsTitle: "Normes et références",
    standardsPara: "Le système s'appuie sur plusieurs normes nationales chinoises :",
    standard1: "<strong>GB 32107-2015</strong> : Norme principale définissant la structure, le jeu de caractères et les règles de formatage. <a href='https://www.samr.gov.cn' target='_blank' rel='noopener noreferrer'>Source : Administration nationale des marchés</a>",
    standard2: "<strong>GB/T 2260</strong> : Norme des codes de division administrative, définissant les codes régionaux (caractères 3-8). <a href='http://www.stats.gov.cn' target='_blank' rel='noopener noreferrer'>Source : Bureau national des statistiques</a>",
    standard3: "<strong>ISO 7064:1983</strong> : Norme internationale spécifiant l'algorithme MOD 11-2 pour le calcul du caractère de contrôle.",
    
    relatedToolsTitle: "Outils connexes susceptibles de vous intéresser",
    relatedTool1Title: "Générateur de numéro de carte d'identité",
    relatedTool1Desc: "Génère des numéros de carte d'identité chinoise valides pour les tests et le développement.",
    relatedTool2Title: "Calculateur de hachage",
    relatedTool2Desc: "Calcule divers hachages, y compris MD5, SHA-1, SHA-256, etc.",
    relatedTool3Title: "Générateur de mots de passe",
    relatedTool3Desc: "Crée des mots de passe sécurisés et aléatoires avec des options personnalisables."
}
