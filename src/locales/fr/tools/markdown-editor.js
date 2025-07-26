export default {
  name: 'Éditeur Markdown',
  description: 'Éditez et prévisualisez en temps réel des documents Markdown',

  options: {
    mode: 'Mode',
    syntaxHighlighting: 'Coloration syntaxique',
    autoSave: 'Sauvegarde automatique',
    lineNumbers: 'Numéros de ligne',
    spellCheck: 'Vérification orthographique',
    wordWrap: 'Retour à la ligne automatique'
  },

  modes: {
    split: 'Vue fractionnée',
    edit: 'Édition seule',
    preview: 'Prévisualisation seule'
  },

  actions: {
    bold: 'Gras',
    italic: 'Italique',
    strikethrough: 'Barré',
    heading: 'Titre',
    link: 'Lien',
    image: 'Image',
    list: 'Liste',
    quote: 'Citation',
    code: 'Code',
    table: 'Tableau',
    hr: 'Ligne horizontale',
    preview: 'Prévisualiser',
    copy: 'Copier',
    clear: 'Effacer',
    download: 'Télécharger Markdown',
    downloadHTML: 'Télécharger HTML',
    upload: 'Importer Markdown'
  },

  messages: {
    copied: 'Contenu Markdown copié dans le presse-papiers !',
    copyError: 'Échec de la copie, veuillez copier manuellement',
    clearConfirm: 'Voulez-vous vraiment vider le contenu de l\'éditeur ?',
    templateConfirm: 'Appliquer un modèle remplacera le contenu actuel, continuer ?',
    templateApplied: 'Modèle "{name}" appliqué',
    saved: 'Document sauvegardé',
    uploadSuccess: 'Document importé avec succès',
    uploadError: 'Erreur lors de l\'import du document',
    wordCount: '{count} mots',
    charCount: '{count} caractères'
  },

  placeholder: 'Saisissez votre contenu Markdown ici...',

  placeholders: {
    linkText: 'Texte du lien',
    imageAlt: 'Description de l\'image'
  },

  templates: {
    title: 'Modèles rapides',
    apply: 'Appliquer le modèle',
    confirm: 'Confirmer l\'application',
    simple: {
      name: 'Document simple',
      description: 'Inclut titres, listes, citations etc.',
      content: `# Titre du document

## Introduction
Ceci est un exemple simple de document Markdown.

## Fonctionnalités
- Prise en charge des titres et paragraphes
- Prise en charge du **gras** et de l'*italique*
- Prise en charge des listes ordonnées et non ordonnées

> Ceci est un bloc de citation, utilisé pour citer les opinions d'autrui.

## Conclusion
Markdown est un langage de balisage simple et facile à utiliser.`
    },
    readme: {
      name: 'README de projet',
      description: 'Structure standard pour la documentation de projet',
      content: `# Nom du projet

## Description du projet
Brève description des fonctionnalités principales et de l'utilité du projet.

## Fonctionnalités
- Fonctionnalité principale 1
- Fonctionnalité principale 2
- Fonctionnalité principale 3

## Instructions d'installation
\`\`\`
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
\`\`\`

## Exemple d'utilisation
\`\`\`
// Exemple de code
const exemple = new Exemple();
exemple.init();
\`\`\`

## Documentation
Pour une documentation plus détaillée, veuillez consulter le lien.

## Guide de contribution
Les contributions sont les bienvenues, veuillez consulter le guide.

## Licence
Ce projet est publié sous licence MIT, voir le fichier LICENSE pour plus de détails.`
    },
    resume: {
      name: 'CV personnel',
      description: 'Modèle de curriculum vitae',
      content: `# Curriculum Vitae

## Informations personnelles
- Nom : Jean Dupont
- Téléphone : 06xxxx1234
- Email : jeandupont123@exemple.com
- Objectif : Développeur Front-end

## Formation
Nom de l'université, Informatique, Septembre 2016 à Juin 2020

## Expérience professionnelle
### Entreprise Tech, Développeur Front-end, Juillet 2020 à aujourd'hui
- Développement et maintenance des produits principaux
- Développement d'un système de gestion d'entreprise avec Vue.js
- Optimisation des performances, réduction du temps de chargement de 30%

### Entreprise Tech, Stagiaire Front-end, Juillet 2019 à Juin 2020
- Participation au projet de refonte du site web
- Assistance à l'équipe pour la refactorisation du code

## Compétences techniques
- Front-end : HTML, CSS, JavaScript, Vue.js, React
- Back-end : Node.js, Express
- Outils : Git, Webpack, Docker

## Projets
### Système de gestion d'entreprise
- Développé avec Vue.js
- Implémentation de visualisation de données, gestion des permissions
- Optimisation de la vitesse de réponse

## Langues
- Anglais (courant)
- Japonais (notions)`
    },
    meeting: {
      name: 'Compte-rendu de réunion',
      description: 'Modèle pour les comptes-rendus',
      content: `# Compte-rendu de réunion

## Informations
- Sujet : Discussion sur l'avancement du projet
- Date : 15 Mai 2023
- Heure : 14:00 à 16:00
- Lieu : Salle de réunion A
- Président : M. Martin
- Secrétaire : Mme Léa

## Participants
- M. Martin (Produit)
- M. Pierre (Développement)
- Mme Sophie (Design)
- M. Jacques (Tests)

## Ordre du jour
1. Bilan de la semaine précédente
2. Planification de la semaine
3. Résolution des problèmes
4. Définition des prochaines étapes

## Discussions
### 1. Bilan hebdomadaire
- Documentation des besoins terminée
- Maquettes achevées à 60%
- Développement du framework front-end terminé

### 2. Planification
- Finalisation des maquettes
- Début du développement des fonctionnalités principales
- Préparation des cas de test

### 3. Problèmes et solutions
- Problème : Conception des interfaces de données inadéquate
- Solution : Redesign par M. Pierre pour mercredi

## Prochaine réunion
- Date : 22 Mai 2023
- Heure : 14:00 à 15:00`
    }
  },

  dialogs: {
    clear: {
      title: 'Vider l\'éditeur',
      message: 'Confirmez-vous vouloir effacer le contenu ?'
    },
    template: {
      title: 'Appliquer un modèle',
      message: 'Ceci remplacera le contenu actuel, continuer ?'
    }
  },

  defaultContent: `# Bienvenue dans l'éditeur Markdown

Ceci est un éditeur Markdown simple avec prévisualisation en temps réel et coloration syntaxique.

## Syntaxe de base

### Titres
Utilisez le symbole # pour les titres, par exemple :
# Titre niveau 1
## Titre niveau 2
### Titre niveau 3

### Mise en forme
**Gras** ou __Gras__
*Italique* ou _Italique_
~~Barré~~

### Listes
Liste non ordonnée :
- Élément 1
- Élément 2
- Élément 3

Liste ordonnée :
1. Premier élément
2. Deuxième élément
3. Troisième élément

### Liens et images
[Texte du lien](https://exemple.com)


### Code
Code en ligne : \`var exemple = "bonjour";\`

### Citation
> Ceci est un paragraphe de citation.

### Tableaux
| En-tête 1 | En-tête 2 | En-tête 3 |
|-----------|-----------|-----------|
| Cellule 1 | Cellule 2 | Cellule 3 |
| Cellule 4 | Cellule 5 | Cellule 6 |

### Ligne horizontale
---

Commencez à éditer ! Vous pouvez utiliser la barre d'outils ci-dessus pour insérer rapidement divers éléments Markdown.`
};