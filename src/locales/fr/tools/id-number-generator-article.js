export default {
    introduction: {
        title: "Générateur de numéros de carte d'identité : Fonctionnalités et fonctionnement",
        p1: "Le générateur de numéros de carte d'identité est un outil conçu spécifiquement pour les tests et le développement, capable de créer des numéros valides conformes au format des cartes d'identité chinoises. Ces numéros générés suivent le format officiel et les règles de validation établies par le gouvernement chinois, les rendant structurellement valides mais entièrement fictifs.",
        p2: "Cet outil est particulièrement utile pour les développeurs de logiciels, les testeurs QA et les concepteurs UI/UX qui ont besoin d'utiliser des numéros de carte d'identité chinoise dans leurs applications sans recourir à des données personnelles réelles. Les numéros générés incluent des informations intégrées telles que le code de région, la date de naissance et le sexe, toutes conformes au format officiel.",
        p3: "En proposant des options de personnalisation pour la région, la plage de dates de naissance, le sexe et la quantité, notre générateur offre une flexibilité tout en respectant les algorithmes de format et de validation requis.",
        structureTitle: "Comprendre la structure du numéro de carte d'identité",
        structureDesc: "Chaque numéro de carte d'identité chinoise se compose de 18 chiffres suivant un modèle spécifique :"
    },
    useCases: {
        title: "Cas d'utilisation pratiques du générateur de numéros de carte d'identité",
        case1: {
            title: "Tests et développement logiciel",
            description: "Pour les développeurs de systèmes nécessitant de valider des numéros de carte d'identité chinoise, cet outil génère des données de test qui passent les vérifications de validation, sans utiliser de véritables informations personnelles. Utile pour les tests de validation de formulaire, le remplissage de bases de données et les tests d'API."
        },
        case2: {
            title: "Conception UI/UX et prototypage",
            description: "Les concepteurs créant des maquettes et prototypes d'applications traitant de l'identification des utilisateurs chinois peuvent utiliser ces numéros générés, garantissant une représentation réaliste des données sans compromettre la vie privée."
        },
        case3: {
            title: "Objectifs éducatifs",
            description: "Les étudiants et enseignants étudiant les structures de données, les algorithmes de validation ou les systèmes administratifs chinois peuvent utiliser cet outil pour comprendre comment les numéros de carte d'identité encodent les informations et comment fonctionnent les mécanismes de validation."
        },
        case4: {
            title: "Conformité à la protection des données",
            description: "Les organisations peuvent éviter d'utiliser de vrais numéros de carte d'identité dans des environnements non productifs, aidant ainsi à respecter les réglementations sur la protection des données tout en fournissant des données de test réalistes pour leurs systèmes."
        }
    },
    guide: {
        title: "Comment utiliser le générateur de numéros de carte d'identité",
        step1: {
            title: "Sélectionnez les paramètres régionaux",
            description: "Choisissez entre une région aléatoire ou sélectionnez une province et une ville spécifiques. Vous pouvez activer la sélection multiple pour générer des numéros provenant de différentes régions, ou utiliser la barre de recherche pour trouver un emplacement spécifique."
        },
        step2: {
            title: "Définissez la plage de dates de naissance",
            description: "Spécifiez la plage de dates de naissance que vous souhaitez inclure dans les numéros générés. Cela vous permet de créer des numéros pour des groupes d'âge ou des périodes spécifiques, allant de dates historiques à des dates plus récentes."
        },
        step3: {
            title: "Choisissez les options de sexe",
            description: "Sélectionnez si vous souhaitez générer des numéros avec un sexe aléatoire, ou spécifiquement masculin ou féminin. Dans les numéros de carte d'identité chinoise, le sexe est encodé dans le numéro séquentiel (chiffre impair pour les hommes, pair pour les femmes)."
        },
        step4: {
            title: "Génération et exportation",
            description: "Indiquez le nombre de numéros dont vous avez besoin, puis cliquez sur le bouton de génération. Une fois générés, vous pouvez copier des numéros individuels, tous les numéros en une fois, ou exporter les résultats aux formats TXT, CSV ou Excel pour une utilisation ultérieure."
        },
        tip: "Pour des résultats optimaux, tenez compte des exigences spécifiques de votre scénario de test. Si vous testez un système avec des restrictions d'âge, ajustez la plage de dates de naissance en conséquence. Pour des tests régionaux, sélectionnez les provinces pertinentes pour votre application.",
        additionalTip: "Pour vérifier l'exactitude des numéros générés, vous pouvez utiliser notre",
        hashCalculatorLink: "outil de calcul de hachage"
    },
    faq: {
        title: "Questions fréquentes sur les numéros de carte d'identité chinoise",
        q1: "Les numéros de carte d'identité chinoise générés sont-ils légalement valides ?",
        a1: "Non, les numéros générés sont structurellement valides (ils passent les validations de format et de somme de contrôle), mais sont entièrement fictifs. Ils sont uniquement destinés à des fins de test, d'éducation et de démonstration. L'utilisation de ces numéros pour une identification officielle ou une fausse représentation d'identité est illégale.",
        q2: "Comment le sexe est-il encodé dans un numéro de carte d'identité chinoise ?",
        a2: "L'information sur le sexe dans un numéro de carte d'identité chinoise est encodée dans l'avant-dernier chiffre (17ème position). Si ce chiffre est impair (1, 3, 5, 7, 9), la carte d'identité appartient à un homme. S'il est pair (2, 4, 6, 8, 0), elle appartient à une femme.",
        q3: "Puis-je générer des numéros pour des régions spécifiques de Chine ?",
        a3: "Oui, notre outil prend en charge la sélection de provinces et villes spécifiques en Chine. Vous pouvez choisir une seule région ou activer la sélection multiple pour générer simultanément des numéros provenant de plusieurs régions. Nous incluons toutes les villes au niveau préfectoral et les divisions administratives provinciales.",
        q4: "Que signifie le dernier chiffre d'un numéro de carte d'identité chinoise ?",
        a4: "Le dernier chiffre (18ème position) est un chiffre de contrôle calculé à partir des 17 premiers chiffres à l'aide d'un algorithme spécifique. Cette somme de contrôle aide à vérifier la validité de la carte d'identité et peut être un chiffre de 0 à 9 ou X (représentant 10).",
        q5: "À quelle fréquence le format des numéros de carte d'identité chinoise est-il mis à jour ?",
        a5: "Depuis octobre 1999, le format à 18 chiffres est la norme. Bien que le format lui-même change rarement, les codes de division administrative peuvent être mis à jour au fur et à mesure que la Chine réorganise ses divisions administratives. Notre générateur utilise les derniers codes régionaux.",
        officialSource: "Ministère de la Sécurité publique de la République populaire de Chine (site officiel)"
    },
    resources: {
        title: "Outils et ressources connexes",
        passwordGenerator: "Générateur de mots de passe - Créez des mots de passe sécurisés et aléatoires avec des options personnalisables",
        wordShuffler: "Mélangeur de texte - Réorganisez aléatoirement des mots, phrases ou lignes dans un texte tout en conservant le formatage",
        hashCalculator: "Calculateur de hachage - Vérifiez l'intégrité des données avec plusieurs algorithmes de hachage",
        wikipediaLink: "Wikipédia : Carte d'identité en République populaire de Chine - Informations détaillées sur le système de carte d'identité chinois"
    },
    conclusion: {
        title: "Conclusion",
        p1: "Le générateur de numéros de carte d'identité offre une ressource précieuse aux développeurs, testeurs et concepteurs qui ont besoin de traiter l'identification chinoise. En générant des numéros valides en termes de format mais n'appartenant pas à de vraies personnes, il aide à concilier le besoin de données de test réalistes avec les considérations de vie privée et d'éthique.",
        p2: "Que vous développiez une nouvelle application, testiez un système existant ou créiez du matériel éducatif, cet outil offre la flexibilité et la précision nécessaires pour manipuler en toute confiance le format des numéros de carte d'identité chinoise, tout en respectant les principes de protection des données.",
        disclaimer: "Avertissement : Cet outil est uniquement destiné à des fins légitimes de test, d'éducation et de développement. Les numéros générés ne doivent pas être utilisés pour des fraudes d'identité, de fausses représentations ou toute activité illégale."
    }
}
