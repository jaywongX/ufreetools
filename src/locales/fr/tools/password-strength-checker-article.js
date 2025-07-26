export default {
  title: "Vérificateur de robustesse : Évaluez et améliorez votre sécurité en ligne",
  features: {
    title: "Comprendre l'évaluation de sécurité",
    description: "Ce <strong>vérificateur de robustesse</strong> est un <strong>outil d'évaluation complet</strong> conçu pour analyser l'efficacité de votre mot de passe contre les menaces potentielles. Ce <strong>analyseur de mot de passe</strong> examine plusieurs facteurs déterminant la sécurité, incluant longueur, diversité des caractères, modèles potentiels et similarité avec des mots de passe courants.<br><br>Notre <strong>testeur de sécurité</strong> fournit un retour détaillé sur les forces et faiblesses, avec une analyse complète des éléments le rendant sécurisé ou vulnérable. L'outil génère un score de sécurité et un code couleur, avec des suggestions d'amélioration spécifiques. En tant que <strong>détecteur de vulnérabilités</strong>, il identifie les problèmes potentiels sans jamais stocker ou transmettre votre mot de passe, garantissant une confidentialité totale.",
    useCases: {
      title: "Cas d'utilisation pratiques",
      items: [
        "<strong>Création de compte</strong> : Utilisez le <strong>vérificateur</strong> lors de la création de nouveaux comptes pour garantir des identifiants conformes aux standards modernes",
        "<strong>Audit de sécurité</strong> : Testez régulièrement vos mots de passe existants pour identifier ceux nécessitant un renforcement",
        "<strong>Politique de mots de passe</strong> : Les organisations peuvent utiliser l'outil pour former les employés aux bonnes pratiques",
        "<strong>Démonstration éducative</strong> : Montrez visuellement la différence entre mots de passe faibles et forts",
        "<strong>Vérification post-fuite</strong> : Après une fuite de données, vérifiez si vos mots de passe actuels nécessitent une mise à jour",
        "<strong>Transition vers gestionnaire</strong> : Évaluez vos mots de passe existants lors du passage à un gestionnaire de mots de passe"
      ]
    }
  },
  faq: {
    title: "FAQ sur la sécurité des mots de passe",
    items: [
      {
        question: "Mon mot de passe est-il sécurisé avec cet outil ?",
        answer: "Oui, votre mot de passe est traité localement dans votre navigateur - il n'est jamais transmis sur Internet. L'outil utilise des algorithmes JavaScript locaux pour évaluer la complexité sans traitement externe."
      },
      {
        question: "Qu'est-ce qui rend un mot de passe vraiment fort ?",
        answer: "Un mot de passe fort combine : longueur suffisante (12-14 caractères minimum), complexité via diversité des caractères, imprévisibilité (éviter mots/motifs courants), unicité (non réutilisé) et résistance aux attaques automatisées. La longueur contribue plus à la robustesse que la complexité seule."
      },
      {
        question: "Pourquoi mon mot de passe apparemment complexe est-il marqué comme faible ?",
        answer: "L'outil peut détecter des vulnérabilités subtiles : motifs prévisibles (séquences clavier, répétitions), variantes de mots de passe connus, informations personnelles devinables, ou substitutions courantes (comme '0' pour 'o'). L'analyse moderne va au-delà des types de caractères pour évaluer l'entropie et les motifs reconnaissables par les outils de piratage."
      },
      {
        question: "À quelle fréquence dois-je vérifier/mettre à jour mes mots de passe ?",
        answer: "Vérifiez vos mots de passe critiques tous les 3-6 mois. Mettez-les à jour immédiatement après : une fuite de données affectant vos services, un partage de mot de passe, une connexion sur un appareil public, un soupçon d'accès non autorisé, ou un changement majeur (nouveau travail, déménagement)."
      },
      {
        question: "Quoi de mieux : mot de passe court complexe ou long simple ?",
        answer: "Un mot de passe long simple est généralement plus sécurisé qu'un court complexe. Par exemple, un mot de passe de 16 caractères en minuscules seulement est mathématiquement plus difficile à pirater par force brute qu'un mot de passe de 8 caractères mélangeant différents types. La solution idéale combine longueur significative (16+ caractères) et complexité modérée (divers types de caractères)."
      }
    ]
  },
  guide: {
    title: "Guide étape par étape",
    steps: [
      "Saisissez votre mot de passe dans le champ sécurisé. La conception respectueuse de la vie privée garantit qu'il n'est ni transmis ni stocké.",
      "Consultez le <strong>score global</strong> sur l'indicateur coloré (très faible/rouge à très fort/vert).",
      "Examinez la section <strong>analyse détaillée</strong> pour comprendre les aspects spécifiques affectant votre score.",
      "Notez les <strong>problèmes détectés</strong> mettant en évidence des vulnérabilités spécifiques.",
      "Lisez les <strong>suggestions d'amélioration</strong> personnalisées pour renforcer votre mot de passe.",
      "Appliquez les modifications recommandées et <strong>retestez</strong> jusqu'à obtenir une évaluation satisfaisante."
    ]
  },
  conclusion: "Ce vérificateur est un outil essentiel dans un environnement numérique où les fuites de données et attaques sont en hausse. En fournissant une analyse détaillée et des suggestions concrètes, il permet aux utilisateurs de reprendre le contrôle de leur sécurité en ligne. Rappelez-vous qu'un mot de passe fort est votre première ligne de défense - il doit être unique pour chaque compte important, suffisamment complexe, et régulièrement mis à jour. Pour une sécurité maximale, combinez cet outil avec un gestionnaire de mots de passe réputé."
}
