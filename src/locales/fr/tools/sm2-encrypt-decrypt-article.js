export default {
    title: 'Chiffrement SM2 : Guide complet',
    introduction: {
        title: 'Qu\'est-ce que le chiffrement SM2 et comment fonctionne-t-il ?',
        p1: 'Le chiffrement SM2 est une composante essentielle des standards cryptographiques commerciaux chinois, un algorithme de cryptographie à clé publique puissant. Créé par le Bureau chinois de gestion des cryptages commerciaux, le chiffrement SM2 offre une sécurité comparable à RSA-2048 mais avec des longueurs de clé plus courtes et de meilleures performances, idéal pour les communications numériques sécurisées et la protection des données.',
        p2: 'Contrairement aux méthodes de chiffrement symétrique, SM2 utilise une paire de clés : une clé publique partageable librement pour le chiffrement, et une clé privée qui doit rester secrète pour le déchiffrement. Cette méthode asymétrique résout les problèmes de distribution des clés dans les méthodes de chiffrement traditionnelles, permettant aux parties de communiquer en sécurité sans avoir besoin d\'une clé pré-partagée.',
        p3: 'Notre outil de chiffrement SM2 fournit une interface conviviale pour générer des paires de clés, chiffrer des informations sensibles et déchiffrer des messages chiffrés SM2 sans nécessiter de connaissances spécialisées en cryptographie. Cela rend la technologie de chiffrement avancée accessible aussi bien aux professionnels de la cybersécurité qu\'aux particuliers soucieux de la confidentialité des données.'
    },
    useCases: {
        title: 'Cas d\'utilisation du chiffrement SM2',
        item1: 'Communications sécurisées dans les systèmes bancaires et financiers, en particulier dans les régions où SM2 est un standard réglementaire',
        item2: 'Protection des communications gouvernementales et militaires sensibles',
        item3: 'Systèmes de signature numérique pour l\'authentification des documents et la non-répudiation',
        item4: 'Protection des données en transit pour les plateformes de commerce électronique et services en ligne',
        item5: 'Implémentation dans les systèmes de certificats numériques et infrastructures PKI pour l\'authentification'
    },
    guide: {
        title: 'Comment utiliser l\'outil de chiffrement SM2',
        step1: {
            title: 'Étape 1 : Gestion des clés',
            description: 'Commencez par configurer vos clés de chiffrement. Vous avez trois options :',
            option1: 'Cliquez sur "Générer une nouvelle paire" pour créer une nouvelle paire de clés SM2',
            option2: 'Importez une clé existante en cliquant sur le bouton "Importer une clé"',
            option3: 'Cliquez sur "Charger un exemple" pour essayer l\'outil avec des clés pré-générées'
        },
        step2: {
            title: 'Étape 2 : Préparation des données',
            description: 'Pour le chiffrement ou le déchiffrement, vous devez fournir des données :',
            option1: 'Sélectionnez le format d\'entrée (texte, hexadécimal, Base64 ou fichier)',
            option2: 'Pour le chiffrement, entrez votre texte clair dans le champ d\'entrée',
            option3: 'Pour le déchiffrement, entrez le texte chiffré que vous souhaitez déchiffrer',
            option4: 'En mode fichier, glissez-déposez un fichier ou cliquez pour sélectionner'
        },
        step3: {
            title: 'Étape 3 : Configuration des paramètres de chiffrement',
            description: 'Avant de traiter les données, configurez ces paramètres importants :',
            option1: 'Sélectionnez le format de texte chiffré (C1C2C3 ou C1C3C2) - les applications chinoises utilisent généralement C1C3C2',
            option2: 'Choisissez votre format de sortie préféré (texte, hexadécimal ou Base64)'
        },
        step4: {
            title: 'Étape 4 : Traitement et obtention des résultats',
            description: 'Cliquez sur les boutons "Chiffrer" ou "Déchiffrer" pour traiter vos données. Une fois terminé, vous pouvez copier le résultat dans le presse-papiers, le télécharger sous forme de fichier, ou visualiser les composants détaillés du texte chiffré (parties C1, C2 et C3) lors du chiffrement.'
        }
    },
    faq: {
        title: 'FAQ sur le chiffrement SM2',
        q1: 'Quels sont les avantages du chiffrement SM2 par rapport à d\'autres algorithmes de chiffrement ?',
        a1: 'Le chiffrement SM2 offre plusieurs avantages, notamment des longueurs de clé plus courtes (256 bits) tout en fournissant une sécurité comparable à RSA-2048, des temps de traitement plus rapides pour les opérations de chiffrement/déchiffrement, et la conformité avec les standards réglementaires chinois. Il est également conçu pour résister aux attaques par calcul quantique, en faisant une solution de chiffrement tournée vers l\'avenir.',
        q2: 'Quelle est la différence entre les formats de texte chiffré C1C2C3 et C1C3C2 ?',
        a2: 'Les deux formats contiennent les mêmes trois composants mais dans un ordre différent. C1 représente le point sur la courbe elliptique, C2 est la donnée chiffrée réelle, et C3 est la valeur de hachage pour la vérification de l\'intégrité. C1C2C3 est le format standard original, tandis que C1C3C2 est plus couramment utilisé dans les applications et systèmes chinois. Notre outil prend en charge les deux formats pour une compatibilité maximale.',
        q3: "Le chiffrement SM2 est-il adapté aux données personnelles ou commerciales sensibles ?",
        a3: "Oui, le chiffrement SM2 convient pour protéger des données sensibles car il offre une sécurité cryptographique robuste. Cependant, pour les applications d'entreprise hautement sensibles, nous recommandons d'utiliser des systèmes de gestion de clés appropriés et des protocoles d'implémentation SM2. Bien que notre outil en ligne soit pratique, les environnements de production sensibles devraient utiliser des bibliothèques de chiffrement installées localement et un stockage sécurisé des clés.",
        q4: "Comment vérifier que mon implémentation SM2 fonctionne correctement ?",
        a4: "Vous pouvez vérifier votre implémentation SM2 en chiffrant un exemple de message, puis en le déchiffrant pour confirmer que vous obtenez bien le texte clair original. Notre outil propose une option 'Charger un exemple' qui démontre automatiquement ce processus. Pour les systèmes de production, envisagez d'utiliser les vecteurs de test du document standard SM2 pour valider votre implémentation.",
        q5: "Est-il possible de déchiffrer des données SM2 sans la clé privée ?",
        a5: "Non, les données chiffrées avec SM2 ne peuvent pas être déchiffrées sans la clé privée correspondante dans une implémentation correcte. La sécurité de SM2 repose sur le problème du logarithme discret des courbes elliptiques, qui est considéré comme insoluble avec les technologies actuelles. C'est pourquoi il est crucial de garder les clés privées sécurisées et de ne jamais les partager avec des parties non autorisées."
    },
    comparison: {
        title: "Comparaison entre SM2 et d'autres algorithmes de chiffrement",
        p1: "Le chiffrement SM2 appartient à la famille des algorithmes de cryptographie sur courbes elliptiques (ECC), similaire à ECDSA mais avec des paramètres spécifiques définis par le standard chinois. Comparé à RSA, SM2 offre une sécurité équivalente avec des longueurs de clé significativement plus courtes (une clé SM2 de 256 bits offre une sécurité similaire à une clé RSA de 2048 bits), permettant des opérations plus rapides et une moindre consommation de ressources.",
        p2: "Pour les applications nécessitant la conformité avec les standards cryptographiques chinois, SM2 est préférable aux algorithmes internationaux comme RSA ou ECDSA. Ses avantages en termes de performance le rendent particulièrement adapté aux environnements avec ressources limitées comme les cartes à puce, appareils IoT et applications mobiles où la puissance de calcul et la mémoire sont limitées.",
        p3: "Bien que SM2 gagne en reconnaissance internationale, RSA bénéficie toujours d'un support plus large dans les logiciels et matériels mondiaux. Pour une comparaison avec une autre méthode de chiffrement asymétrique populaire, consultez notre",
        linkText: "Outil de chiffrement RSA"
    },
    references: {
        title: "Références et lectures complémentaires",
        link1: "Wikipédia - SM2",
        link2: "Algorithme de cryptographie à clé publique sur courbes elliptiques SM2",
        link3: "Paramètres de courbe recommandés pour l'algorithme SM2"
    },
    relatedTools: {
        title: "Outils de chiffrement connexes",
        tool1: "Outil de chiffrement RSA",
        tool2: "Calculateur de hachage",
        tool3: "Outil de chiffrement symétrique",
        tool4: "Générateur de mots de passe sécurisés"
    }
}
