export default {
  title: "Encodeur d'entités HTML : Un outil essentiel pour la sécurité web",
  features: {
    title: "Comprendre l'encodage d'entités HTML",
    description: "L'<strong>encodeur d'entités HTML</strong> est spécialement conçu pour convertir des caractères spéciaux en leurs <strong>entités HTML</strong> correspondantes. Ce processus, appelé <strong>encodage HTML</strong>, est crucial pour la sécurité du web et l'affichage correct du contenu.<br><br>La fonction principale de cet <strong>encodeur d'entités</strong> est de convertir les caractères pouvant être interprétés comme balises HTML (comme &lt; et &gt;) en leurs <strong>entités caractères</strong> respectives (comme &amp;lt; et &amp;gt;). L'outil propose plusieurs modes d'encodage : <strong>entités nommées</strong>, <strong>entités décimales</strong>, <strong>entités hexadécimales</strong> ainsi qu'un <strong>encodage complet</strong> de tous les caractères non alphanumériques. Il offre également une fonction de base pour <strong>décoder les entités HTML</strong> en caractères originaux.",
    useCases: {
      title: "Cas d'utilisation courants de l'encodage d'entités HTML",
      items: [
        "Les développeurs web encodent les entrées utilisateur avant affichage pour prévenir les attaques XSS",
        "Les rédacteurs de contenu intègrent des extraits de code dans des documents ou articles de blog où les balises HTML doivent s'afficher comme texte",
        "Les administrateurs de CMS s'assurent que les caractères spéciaux s'affichent correctement sur différents navigateurs et systèmes",
        "Les concepteurs de modèles d'e-mails encodent les caractères spéciaux pour un rendu cohérent dans les clients de messagerie",
        "Les administrateurs de bases de données préparent les données HTML pour un stockage et une récupération sécurisés",
        "Les professionnels de la sécurité web auditent les pages pour détecter les problèmes d'encodage potentiels"
      ]
    }
  },
  faq: {
    title: "Questions fréquentes sur l'encodage d'entités HTML",
    items: [
      {
        question: "Quelles sont les différences entre les modes d'encodage d'entités HTML ?",
        answer: "Les entités nommées (comme &lt;) utilisent des noms standardisés mémorisables pour les caractères spéciaux courants - c'est le plus lisible mais limité à certains caractères. Les entités décimales (comme &#60;) utilisent des nombres décimaux représentant le point de code Unicode. Les entités hexadécimales (comme &#x3C;) utilisent aussi les points de code mais en format hexadécimal. L'encodage complet convertit tous les caractères non alphanumériques, offrant une protection maximale mais produisant un résultat plus long."
      },
      {
        question: "Pourquoi l'encodage d'entités HTML est-il important pour la sécurité web ?",
        answer: "L'encodage est crucial car il prévient les attaques XSS. En encodant les caractères spéciaux (surtout &lt; et &gt;), le contenu utilisateur s'affiche sans être interprété comme HTML/JavaScript exécutable. Sans encodage, des utilisateurs malveillants pourraient injecter des scripts volant des données ou exécutant des actions non autorisées. L'encodage garantit que l'entrée utilisateur est traitée comme texte littéral."
      },
      {
        question: "Quand utiliser l'encodage HTML plutôt que d'autres types d'encodage ?",
        answer: "Utilisez l'encodage HTML pour afficher du contenu généré par l'utilisateur dans des contextes HTML (corps de page, attributs, e-mails). Pour JavaScript, utilisez l'échappement JavaScript. Pour les paramètres d'URL, utilisez l'encodage URL. Pour les valeurs CSS, utilisez l'échappement CSS. Chaque schéma d'encodage sert des contextes différents avec leurs propres considérations de sécurité."
      },
      {
        question: "L'encodage HTML affecte-t-il l'apparence visuelle de mon contenu ?",
        answer: "Correctement implémenté, l'encodage ne devrait pas affecter l'apparence visuelle. Les navigateurs décodent et affichent automatiquement les caractères originaux. Par exemple, &amp;copy; s'affichera comme ©. L'encodage est seulement visible dans le code source. Mais si vous encodez du HTML qui devrait être interprété (comme des balises de formatage), ces éléments s'afficheront littéralement au lieu d'être rendus."
      },
      {
        question: "Puis-je représenter tous les caractères internationaux avec l'encodage HTML ?",
        answer: "Oui, l'encodage peut représenter n'importe quel caractère Unicode, convenant aux caractères internationaux et emojis. Bien que les caractères spéciaux courants aient des entités nommées (comme &amp;euro; pour €), tout caractère peut être encodé en décimal (&#8364;) ou hexadécimal (&#x20AC;). Pour du texte international étendu, envisagez d'utiliser l'encodage UTF-8 tout en encodant sélectivement les caractères spéciaux."
      }
    ]
  },
  guide: {
    title: "Guide d'utilisation de l'encodeur d'entités HTML",
    steps: [
      "Choisissez le type d'opération : 'Encodage' pour convertir des caractères en entités HTML, ou 'Décodage' pour convertir des entités en caractères",
      "Pour l'encodage, sélectionnez votre mode préféré : entités nommées (codes lisibles), décimales (codes numériques), hexadécimales ou encodage complet (conversion maximale)",
      "Entrez votre texte dans le champ approprié - soit du texte à encoder, soit des entités HTML à décoder",
      "Cliquez sur 'Encoder' ou 'Décoder' selon votre choix",
      "Consultez le résultat affiché. Pour le contenu encodé, vous pouvez basculer entre le code source et l'aperçu rendu",
      "Copiez le résultat en cliquant sur 'Copier le résultat' pour l'utiliser dans vos pages ou applications",
      "Consultez le tableau de référence des entités HTML en bas de page pour voir les entités courantes et leurs représentations"
    ]
  },
  conclusion: "L'encodage d'entités HTML est une pratique essentielle pour les développeurs web soucieux de la sécurité et du rendu cohérent sur différentes plateformes. Avec cet outil, vous garantissez que votre contenu web s'affiche correctement tout en prévenant les injections de code dangereuses. Que vous développiez des applications, créiez des documents ou gériez des systèmes de contenu, un encodage approprié devrait faire partie de votre flux de travail standard pour un développement web sécurisé et cohérent."
}
