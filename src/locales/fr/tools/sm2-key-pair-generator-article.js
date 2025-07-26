export default {
    title: "Générateur de paires de clés SM2 : Guide complet du standard cryptographique chinois",
    introTitle: "Qu'est-ce qu'un générateur de paires de clés SM2 et à quoi sert-il ?",
    introPara1: "<strong>Le générateur de paires de clés SM2</strong> est un outil cryptographique spécialisé qui crée des paires de clés publiques/privées sécurisées selon l'algorithme standard chinois (GB/T 32918-2016). Contrairement aux standards internationaux comme RSA ou ECC, SM2 est spécifiquement conçu et approuvé par les autorités chinoises, ce qui le rend essentiel pour les organisations opérant dans le cadre réglementaire chinois.",
    introPara2: "Notre <strong>outil de génération de clés SM2</strong> permet aux utilisateurs de générer facilement des paires de clés SM2 cryptographiquement sécurisées sans nécessiter de connaissances approfondies sur l'algorithme sous-jacent. L'outil prend en charge plusieurs formats de sortie, y compris PEM, HEX et Base64, le rendant polyvalent pour différents environnements de développement et de sécurité.",
    
    useCaseTitle: "Principaux cas d'utilisation",
    useCase1: "<strong>Conformité des services financiers</strong> : Les banques et fintechs opérant en Chine doivent utiliser le chiffrement SM2 pour protéger les transactions financières et les données clients afin de se conformer aux exigences réglementaires.",
    useCase2: "<strong>Systèmes d'information gouvernementaux et d'entreprise</strong> : Les agences gouvernementales chinoises et les grandes entreprises doivent implémenter SM2 pour les communications sécurisées, la signature de documents et l'authentification.",
    useCase3: "<strong>Commerce électronique transfrontalier</strong> : Les entreprises commerçant avec la Chine doivent souvent implémenter la cryptographie SM2 pour l'échange sécurisé de données et la conformité réglementaire.",
    useCase4: "<strong>Sécurité des applications mobiles</strong> : Les développeurs créant des applications pour le marché chinois ont besoin de paires de clés SM2 pour implémenter des mécanismes d'authentification sécurisée et de protection des données.",
    standardInfo: "L'algorithme SM2 fait partie de la suite d'algorithmes cryptographiques SM (Shangmi), qui comprend SM2 (cryptographie à clé publique), SM3 (hachage) et SM4 (chiffrement symétrique). Alors que la Chine continue de développer son propre cadre de cybersécurité indépendamment des standards internationaux, ces normes deviennent de plus en plus importantes.",
    
    tutorialTitle: "Comment utiliser le générateur de paires de clés SM2",
    tutorialIntro: "Suivre ce guide étape par étape vous aidera à générer rapidement et efficacement des paires de clés SM2 sécurisées. Chaque paire de clés générée inclut les composants de clé publique et privée nécessaires pour les opérations de chiffrement, déchiffrement, signature et vérification.",
    
    step1Title: "Étape 1 : Sélectionner les paramètres de clé",
    step1Desc: "La norme SM2 utilise une longueur de clé fixe de 256 bits, offrant une sécurité robuste tout en maintenant de bonnes performances. Ceci est présélectionné dans notre outil et ne peut pas être modifié car il suit le standard officiel.",
    
    step2Title: "Étape 2 : Choisir le format de sortie",
    step2Desc: "Sélectionnez votre format de sortie préféré : <ul><li><strong>PEM</strong> : Format standard pour les certificats et clés cryptographiques, facilement reconnaissable par la plupart des systèmes et applications.</li><li><strong>HEX</strong> : Représentation hexadécimale, adaptée pour une implémentation directe dans le code.</li><li><strong>Base64</strong> : Représentation compacte, couramment utilisée dans les applications web et les communications API.</li></ul>",
    
    step3Title: "Étape 3 : Spécifier le nombre de paires de clés",
    step3Desc: "Déterminez combien de paires de clés vous avez besoin. Ceci est particulièrement utile pour les tests ou la configuration de multiples canaux sécurisés.",
    
    step4Title: "Étape 4 : Générer et gérer les clés",
    step4Desc: "Cliquez sur le bouton \"Générer des paires de clés\" et attendez la fin du processus. Une fois générées, vous pouvez visualiser, copier ou exporter les clés. Assurez-vous de stocker vos clés privées en sécurité et ne les partagez jamais avec des parties non autorisées.",
    
    relatedToolsTitle: "Outils cryptographiques connexes",
    relatedToolsDesc: "Pour une mise en œuvre complète des mesures de sécurité, vous pourriez explorer ces outils complémentaires :",
    relatedTool1: "Générateur de paires de clés RSA - Génère des clés RSA conformes aux standards cryptographiques internationaux",
    relatedTool2: "Calculateur de hachage - Calcule diverses valeurs de hachage, y compris SM3 pour la vérification de l'intégrité des données",
    
    faqTitle: "FAQ sur la cryptographie SM2",
    faq1Question: "En quoi SM2 diffère-t-il d'autres algorithmes de cryptographie à clé publique comme RSA ?",
    faq1Answer: "SM2 est un algorithme de cryptographie à clé publique basé sur les courbes elliptiques développé par les autorités chinoises. Comparé à RSA, SM2 offre une sécurité comparable mais avec des longueurs de clé plus courtes (256 bits pour SM2 contre 2048+ bits pour RSA), ce qui se traduit par de meilleures performances. La principale différence est que SM2 est spécifiquement conçu pour la conformité réglementaire en Chine, tandis que RSA est plus largement utilisé internationalement. Les bases mathématiques diffèrent également : SM2 repose sur la cryptographie sur courbes elliptiques, tandis que RSA dépend de la difficulté de factorisation des grands nombres premiers.",
    
    faq2Question: "Le chiffrement SM2 est-il sûr pour les applications commerciales internationales ?",
    faq2Answer: "Oui, SM2 offre une sécurité cryptographique robuste conforme aux standards internationaux. Avec sa longueur de clé de 256 bits, il fournit une sécurité équivalente à une clé RSA de 3072 bits. SM2 a subi une analyse cryptographique approfondie par les autorités chinoises et est considéré comme résistant aux attaques connues. Cependant, pour l'interopérabilité internationale, certaines organisations peuvent préférer des standards internationaux largement adoptés comme RSA ou ECDSA. Le choix dépend généralement de vos exigences spécifiques de conformité et de l'emplacement de déploiement de votre application.",
    
    faq3Question: "Comment vérifier si ma paire de clés SM2 fonctionne correctement ?",
    faq3Answer: "Pour tester votre paire de clés SM2, vous pouvez effectuer un simple test de chiffrement/déchiffrement : utilisez la clé publique pour chiffrer un message test, puis utilisez la clé privée correspondante pour le déchiffrer. Si le message déchiffré correspond à l'original, votre paire de clés fonctionne correctement. Alternativement, vous pouvez utiliser la clé privée pour signer un message et la clé publique pour vérifier la signature. Notre outil garantit que toutes les paires de clés générées sont mathématiquement valides selon les spécifications du standard SM2.",
    
    faq4Question: "Les clés SM2 peuvent-elles être utilisées dans des implémentations SSL/TLS standard ?",
    faq4Answer: "Le support de SM2 dans SSL/TLS dépend de l'implémentation spécifique. La Chine a développé une variante appelée TLCP (Transport Layer Cryptography Protocol) qui utilise les algorithmes SM2/SM3/SM4 à la place des standards internationaux. Les principaux navigateurs en Chine supportent généralement ces standards. Pour les systèmes internationaux, vous pourriez avoir besoin de bibliothèques spécialisées ou de configurations pour activer le support SM2. OpenSSL 1.1.1 et versions ultérieures incluent le support de la cryptographie SM2, rendant l'intégration plus simple pour de nombreux systèmes.",
    
    faq5Question: "Que représentent les composants x, y et d dans une paire de clés SM2 ?",
    faq5Answer: "Dans une paire de clés SM2, ces composants représentent des valeurs mathématiques importantes : <ul><li><strong>x et y</strong> : Ce sont les coordonnées du point sur la courbe elliptique qui représente votre clé publique. Ensemble, ils forment la clé publique complète qui peut être partagée publiquement.</li><li><strong>d</strong> : C'est votre clé privée, un grand nombre aléatoire qui doit rester secret. Elle est utilisée pour les opérations de déchiffrement et de signature.</li></ul> Contrairement à RSA qui a plusieurs composants comme p, q, d, e, n, la clé privée SM2 est plus simple avec seulement la valeur scalaire d, tandis que la clé publique consiste en des coordonnées de point (x,y).",
    
    resourcesTitle: "Ressources supplémentaires",
    resourcesDesc: "Pour en savoir plus sur la cryptographie SM2 et les standards cryptographiques chinois, ces sources officielles fournissent des informations précieuses :",
    resource1: "GB/T 32918-2016 - Publication officielle du standard SM2 (en chinois)",
    resource2: "Administration nationale de la cryptographie - Documents réglementaires officiels",
    resource3: "ISO/IEC 14888-3:2018 - Standard international citant l'algorithme de signature SM2",
    
    conclusionTitle: "Conclusion",
    conclusionPara: "<strong>Le générateur de paires de clés SM2</strong> offre un moyen convivial de créer des clés cryptographiques sécurisées conformes au standard national chinois. Que vous développiez une application pour le marché chinois, implémentiez des canaux de communication sécurisés ou répondiez à des exigences réglementaires, notre outil simplifie le processus complexe de génération de clés SM2. En prenant en charge plusieurs formats de sortie et en offrant des fonctionnalités complètes de gestion des clés, cet <strong>outil cryptographique SM2</strong> aide les organisations à mettre en œuvre des mesures de sécurité robustes tout en maintenant la conformité avec la réglementation cryptographique chinoise."
}
