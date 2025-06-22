export default {
    name: 'Générateur de QR Code',
    description: 'Générez des QR codes personnalisables pour URL, texte, etc.',
    options: {
        content: 'Contenu du QR code',
        contentType: 'Type de contenu',
        errorCorrectionLevel: 'Niveau de correction d\'erreur',
        size: 'Taille',
        margin: 'Marge',
        foregroundColor: 'Couleur de premier plan',
        backgroundColor: 'Couleur d\'arrière-plan',
        logo: 'Ajouter un logo',
        logoSize: 'Taille du logo',
        cornerRadius: 'Rayon des coins'
    },
    contentTypes: {
        url: 'URL',
        text: 'Texte brut',
        email: 'E-mail',
        phone: 'Numéro de téléphone',
        sms: 'SMS',
        wifi: 'Réseau WiFi',
        vcard: 'Carte de visite (vCard)',
        mecard: 'Carte de visite (MeCard)'
    },
    errorLevels: {
        L: 'Bas (7%)',
        M: 'Moyen (15%)',
        Q: 'Élevé (25%)',
        H: 'Très élevé (30%)'
    },
    actions: {
        generate: 'Générer QR code',
        download: 'Télécharger',
        downloadSVG: 'Télécharger SVG',
        downloadPNG: 'Télécharger PNG',
        copy: 'Copier l\'image',
        clear: 'Réinitialiser',
        uploadLogo: 'Télécharger logo'
    },
    templates: {
        title: 'Modèles rapides',
        confirmReplace: 'Voulez-vous vraiment remplacer le contenu actuel ?',
        confirm: 'Confirmer',
        cancel: 'Annuler',
        url: {
            name: 'Lien URL'
        },
        email: {
            name: 'Adresse e-mail'
        },
        phone: {
            name: 'Numéro de téléphone'
        },
        sms: {
            name: 'SMS'
        },
        wifi: {
            name: 'Configuration WiFi',
            example: {
                ssid: 'Nom du réseau',
                password: 'Mot de passe'
            }
        },
        geo: {
            name: 'Localisation géographique'
        }
    },
    appearance: {
        title: 'Paramètres d\'apparence'
    },
    preview: {
        title: 'Aperçu',
        generating: 'Génération en cours...',
        clickGenerateButton: 'Cliquez sur le bouton "Générer QR code"',
        clickToDownload: 'Cliquez pour télécharger le QR code'
    },
    tips: {
        title: 'Conseils',
        saveToPrint: 'Les QR codes générés peuvent être enregistrés comme images pour impression ou partage.',
        errorCorrection: 'Le niveau de correction d\'erreur indique la lisibilité du QR code lorsqu\'il est partiellement obstrué ou endommagé. Le niveau L a la tolérance la plus faible, le niveau H la plus élevée mais rend le QR code plus complexe.'
    },
    wifi: {
        ssid: 'Nom du réseau (SSID)',
        password: 'Mot de passe',
        encryption: 'Méthode de chiffrement',
        hidden: 'Réseau masqué'
    },
    placeholders: {
        content: 'Entrez du texte, un lien ou autre contenu...'
    },
    characters: 'caractères',
    maxChars: 'Il est recommandé de ne pas dépasser 300 caractères',
    messages: {
        copied: 'Copié dans le presse-papiers !',
        generated: 'QR code généré avec succès',
        contentRequired: 'Veuillez entrer le contenu du QR code',
        downloaded: 'QR code téléchargé',
        confirmReplace: 'Cliquez pour confirmer le remplacement du contenu actuel',
        contentUpdated: 'Contenu mis à jour',
        changesCancelled: 'Modifications annulées',
        invalidUrl: 'Veuillez entrer une URL valide',
        invalidEmail: 'Veuillez entrer une adresse e-mail valide',
        invalidPhone: 'Veuillez entrer un numéro de téléphone valide',
        logoTooBig: 'Le fichier logo est trop grand, la taille maximale est de 1 Mo'
    },
    errors: {
        canvasNotReady: 'L\'élément Canvas n\'est pas prêt',
        generationError: 'Erreur lors de la génération du QR code',
        generationErrorWithMessage: 'Erreur lors de la génération du QR code : {message}',
        downloadError: 'Erreur lors du téléchargement du QR code : {message}'
    },
    article: {
        title: "Générateur de QR Code : Créez et personnalisez des codes à réponse rapide",
        features: {
            title: "Comprendre les QR codes et leurs applications",
            description: "Notre <strong>générateur de QR code</strong> est un outil en ligne polyvalent qui crée des QR codes personnalisables pour divers types d'informations. Contrairement aux codes-barres traditionnels, les <strong>QR codes</strong> peuvent stocker une grande quantité de données dans un format compact et lisible par machine, pouvant être rapidement scannés à l'aide de smartphones ou de scanners dédiés.<br><br>Cet <strong>outil avancé de création de QR code</strong> prend en charge plusieurs types de contenu, notamment les URL, le texte brut, les informations de contact, les identifiants WiFi et les coordonnées géographiques. Chaque code généré peut être entièrement personnalisé, avec des options de taille, de couleur, de niveau de correction d'erreur, et même la possibilité d'ajouter un logo ou de modifier l'apparence du code tout en maintenant sa lisibilité.<br><br>Le <strong>créateur de QR code</strong> génère des codes haute résolution pouvant être téléchargés aux formats PNG ou SVG, les rendant adaptés à la fois à une utilisation numérique et à une impression physique sur du matériel marketing, des emballages produits ou des panneaux.",
            useCases: {
                title: "Applications pratiques des QR codes",
                items: [
                    "<strong>Marketing commercial</strong> : Créez des <strong>QR codes personnalisés</strong> pour cartes de visite, brochures et matériel promotionnel, reliant les prospects à votre site web, offres spéciales ou informations de contact. Les entreprises peuvent utiliser des QR codes uniques intégrant leurs couleurs et logo pour améliorer la reconnaissance de marque tout en offrant un moyen pratique aux clients d'accéder à du contenu numérique.",

                    "<strong>Paiement sans contact</strong> : Générez des <strong>QR codes de paiement</strong> liant directement à des plateformes de paiement ou contenant des informations de portefeuille cryptographique, permettant des transactions rapides et sans contact. Cela devient de plus en plus important pour les petites entreprises et les vendeurs ambulants qui peuvent accepter des paiements numériques sans avoir besoin de terminaux de point de vente coûteux.",

                    "<strong>Menus de restaurant</strong> : Développez des <strong>QR codes scannables</strong> pour un accès sans contact aux menus, permettant aux clients de consulter les plats sur leur téléphone sans toucher de menus physiques. Les restaurants peuvent mettre à jour instantanément leurs menus numériques sans réimpression, et même inclure des photos, descriptions détaillées ou informations diététiques qui ne tiendraient pas sur un menu traditionnel.",

                    "<strong>Gestion d'événements</strong> : Créez des <strong>billets QR code</strong> et badges d'enregistrement pour conférences, concerts ou expositions, pouvant être rapidement scannés pour validation. Les organisateurs peuvent suivre la participation en temps réel, réduire la contrefaçon et simplifier le processus d'enregistrement tout en minimisant les contacts physiques.",

                    "<strong>Emballage produit</strong> : Intégrez des <strong>étiquettes QR code</strong> sur les produits, liant à des manuels utilisateur, instructions de configuration, enregistrement de garantie ou vérification de certification. Les fabricants peuvent fournir des informations produits étendues, des tutoriels vidéo et des ressources d'assistance sans augmenter la taille des emballages ou les coûts d'impression.",

                    "<strong>Ressources éducatives</strong> : Générez des <strong>QR codes éducatifs</strong> reliant les étudiants à du matériel d'apprentissage complémentaire, des quiz interactifs ou des démonstrations vidéo. Les enseignants peuvent placer ces codes sur des polycopiés ou présentations, créant un pont entre les environnements d'apprentissage physiques et numériques tout en suivant l'interaction avec des ressources spécifiques."
                ]
            }
        },
        faq: {
            title: "FAQ sur les QR codes",
            items: [
                {
                    question: "Quelles sont les différences entre les différents niveaux de correction d'erreur des QR codes ?",
                    answer: "<strong>Les niveaux de correction d'erreur</strong> des QR codes déterminent la quantité de dommages que le code peut subir tout en restant lisible :<br><br>• <strong>Niveau L (Bas)</strong> : Récupère jusqu'à 7% de dommages, créant le code le plus compact, adapté aux environnements contrôlés<br>• <strong>Niveau M (Moyen)</strong> : Gère jusqu'à 15% de dommages, offrant un bon équilibre pour la plupart des applications standard<br>• <strong>Niveau Q (Quartile)</strong> : Résiste jusqu'à 25% de dommages, recommandé pour les usages industriels ou les affichages extérieurs<br>• <strong>Niveau H (Haut)</strong> : Tolère jusqu'à 30% de dommages, idéal pour les environnements difficiles ou lors de l'ajout d'un logo<br><br>Des niveaux de correction plus élevés créent des <strong>motifs QR code</strong> plus complexes avec une redondance supplémentaire, rendant le code légèrement plus grand mais significativement plus fiable dans des conditions difficiles ou avec des couleurs ou logos personnalisés."
                },
                {
                    question: "Puis-je ajouter un logo sans compromettre la fonctionnalité du QR code ?",
                    answer: "Oui, vous pouvez ajouter un logo à un <strong>QR code</strong> tout en maintenant sa lisibilité en suivant ces directives :<br><br>1. Utilisez un niveau de correction d'erreur plus élevé (de préférence H) lors de la création d'un <strong>QR code personnalisé avec logo</strong><br>2. Gardez le logo relativement petit, couvrant idéalement au maximum 30% de la zone centrale<br>3. Assurez un contraste suffisant entre la couleur du logo et celle du QR code<br>4. Évitez de placer le logo sur les trois motifs de détection de position (les carrés dans les coins)<br><br>Notre <strong>générateur de QR code</strong> ajuste automatiquement la densité des données lorsque vous ajoutez un logo, garantissant que le code généré reste entièrement fonctionnel. Après avoir ajouté un logo, testez toujours votre QR code avec plusieurs appareils pour vérifier qu'il se scanne correctement dans diverses conditions."
                },
                {
                    question: "Quelles informations puis-je encoder dans un QR code ?",
                    answer: "Les QR codes peuvent encoder divers types d'informations, les rendant extrêmement polyvalents :<br><br>• <strong>URL de site web</strong> : Dirige les scanners vers une page web, une landing page ou une ressource en ligne spécifique<br>• <strong>Texte brut</strong> : Stocke des messages, identifiants ou toute information alphanumérique (jusqu'à environ 4000 caractères)<br>• <strong>Informations de contact (vCard/meCard)</strong> : Partage des coordonnées complètes pouvant être directement enregistrées dans les contacts téléphoniques<br>• <strong>Identifiants réseau WiFi</strong> : Permet une connexion instantanée à un réseau WiFi sans saisie de mot de passe<br>• <strong>Numéro de téléphone</strong> : Lance un appel lors du scan<br>• <strong>SMS</strong> : Ouvre un message texte pré-rempli<br>• <strong>Adresse e-mail</strong> : Commence un nouvel e-mail au destinataire spécifié<br>• <strong>Localisation géographique</strong> : Ouvre l'application de cartes à des coordonnées spécifiques<br><br>Notre <strong>outil de création de QR code</strong> fournit des modèles spécialisés pour chaque type de contenu, formatant automatiquement les données correctement pour assurer la compatibilité avec la plupart des applications de scan."
                },
                {
                    question: "Quelle taille dois-je imprimer un QR code pour une meilleure lisibilité ?",
                    answer: "La taille optimale d'impression d'un <strong>QR code</strong> dépend de la distance de scan :<br><br>• <strong>Taille minimale</strong> : 2 × 2 cm (0,8 × 0,8 pouces) pour un scan rapproché<br>• <strong>Recommandation standard</strong> : 3 × 3 cm (1,2 × 1,2 pouces) pour des usages typiques<br>• <strong>Scan à 1-2 mètres</strong> : 10 × 10 cm (4 × 4 pouces) ou plus<br>• <strong>Panneaux d'affichage ou scan à distance</strong> : Au moins 30 × 30 cm (12 × 12 pouces)<br><br>Une règle générale est qu'un <strong>QR code imprimé</strong> doit représenter au moins 1/10 de la distance de scan. De plus, incluez toujours une zone tranquille (marge blanche) autour du code, mesurant au moins quatre fois la largeur d'un module (le plus petit carré du code).<br><br>Notre <strong>générateur de QR code</strong> produit des fichiers SVG haute résolution pouvant être redimensionnés sans perte de qualité, garantissant que votre code reste net et lisible quelle que soit la taille d'impression."
                },
                {
                    question: "Comment suivre le nombre de scans de mon QR code ?",
                    answer: "Pour suivre les scans d'un <strong>QR code</strong> et collecter des données analytiques, vous pouvez :<br><br>1. Utiliser un <strong>raccourcisseur URL</strong> avec suivi (comme Bit.ly, TinyURL ou Rebrandly) comme destination du QR code, fournissant des métriques de scan<br>2. Pointer le QR code vers une landing page spécifique sur votre site, surveillée via Google Analytics ou un outil similaire<br>3. Utiliser un service professionnel de <strong>QR code dynamique</strong> offrant des analyses intégrées, vous permettant de modifier l'URL cible sans créer de nouveau code<br>4. Créer des paramètres UTM uniques pour chaque QR code afin de différencier les sources de trafic dans les analyses<br><br>Bien que notre <strong>générateur de QR code</strong> crée des codes statiques, vous pouvez facilement implémenter ces stratégies de suivi en encodant des URL de suivi appropriées. Pour des applications professionnelles nécessitant une analyse complète des scans (incluant données de localisation, informations sur les appareils et heures de scan), envisagez d'utiliser une plateforme dédiée au marketing par QR code."
                }
            ]
        },
        guide: {
            title: "Comment créer un QR code : guide étape par étape",
            step1: "<strong>Sélectionnez le type de contenu</strong> : Commencez par décider quelle information vous souhaitez encoder dans le QR code. Choisissez parmi des options comme URL de site web, texte brut, informations de contact ou identifiants WiFi. Pour plus de facilité, vous pouvez utiliser l'un des modèles fournis par notre <strong>générateur de QR code</strong>, qui formatera automatiquement vos données correctement selon le type de contenu.",
            step2: "<strong>Entrez vos informations</strong> : Remplissez les détails nécessaires dans le champ de contenu. Pour une URL, assurez-vous d'inclure l'adresse web complète commençant par 'http://' ou 'https://'. Pour un réseau WiFi, fournissez le nom du réseau (SSID), le mot de passe et le type de chiffrement. Notre <strong>outil de création de QR code</strong> validera votre saisie pour s'assurer qu'elle peut être correctement encodée et scannée ultérieurement.",
            step3: "<strong>Personnalisez l'apparence</strong> : Adaptez votre QR code en ajustant des paramètres comme la taille, les couleurs et le niveau de correction d'erreur. Vous pouvez sélectionner différentes couleurs de premier plan et d'arrière-plan pour correspondre à votre marque, ajuster le rayon des coins pour un aspect plus doux, ou même ajouter un logo au centre de votre code. Notre <strong>créateur de QR code</strong> garantit automatiquement que ces personnalisations maintiennent la lisibilité en ajustant le niveau de correction d'erreur si nécessaire.",
            step4: "<strong>Générez et testez votre QR code</strong> : Cliquez sur le bouton \"Générer QR code\" pour créer votre code basé sur les informations fournies et les options de design choisies. Une fois généré, testez votre QR code avec l'appareil photo de votre smartphone ou une application dédiée pour vérifier qu'il s'affiche ou fonctionne comme prévu. Ce test est particulièrement important si vous avez personnalisé l'apparence ou ajouté un logo.",
            step5: "<strong>Téléchargez et déployez votre QR code</strong> : Après avoir vérifié que votre QR code fonctionne correctement, téléchargez-le dans votre format préféré (PNG pour une utilisation numérique ou SVG pour du matériel imprimé redimensionnable). Vous pouvez ensuite intégrer <strong>l'image du QR code</strong> dans votre matériel marketing, site web, emballages produits ou tout endroit nécessitant un accès rapide à vos informations. Rappelez-vous que pour les impressions, le format SVG est préférable car il maintient la qualité à toute taille."
        },
        conclusion: "Les QR codes ont transformé la façon dont nous connectons les mondes physique et numérique, offrant un moyen fluide de partager des informations et d'engager les utilisateurs. Avec leur adoption croissante dans tous les secteurs, la création de QR codes efficaces et lisibles est devenue une compétence essentielle pour les marketeurs, entreprises, éducateurs et particuliers. Notre générateur de QR code simplifie ce processus en fournissant des outils pour créer des codes personnalisés qui reflètent votre identité de marque tout en maintenant une fonctionnalité parfaite. Que vous liiez à du contenu web premium, simplifiiez des processus de paiement ou enrichissiez du matériel éducatif, les QR codes offrent une solution polyvalente combinant commodité et efficacité technologique. Alors que la technologie mobile continue d'évoluer, l'importance et les applications de ces QR codes ne feront que croître, en faisant un atout de plus en plus précieux dans notre monde interconnecté."
    }
}  