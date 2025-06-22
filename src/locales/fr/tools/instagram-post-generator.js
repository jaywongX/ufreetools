export default {
    name: 'Générateur de publications Instagram',
    description: 'Créez des simulations réalistes de publications Instagram avec contenu personnalisable, arrière-plans et données d\'engagement',
    
    // Options de conception
    designOptions: 'Options de conception',
    
    // Profil utilisateur
    userProfile: {
      title: 'Paramètres du profil utilisateur',
      username: 'Nom d\'utilisateur',
      location: 'Localisation',
      postedTime: 'Date et heure de publication',
      postDate: 'Date détaillée',
      avatar: 'Photo de profil',
      uploadAvatar: 'Télécharger une photo',
      removeAvatar: 'Supprimer',
      verifiedAccount: 'Statut du compte',
      isVerified: 'Compte vérifié'
    },
    
    // Type de contenu
    contentType: 'Type de contenu',
    contentTypes: {
      text: 'Texte uniquement',
      image: 'Image uniquement',
      mixed: 'Texte et image'
    },
    
    // Contenu texte
    textContent: 'Contenu texte',
    postText: 'Texte de la publication',
    addHashtag: 'Ajouter un hashtag',
    mentionUser: 'Mentionner un utilisateur',
    insertEmoji: 'Emoji',
    commonEmojis: 'Emojis couramment utilisés',
    recommendedHashtags: 'Hashtags recommandés',
    
    // Formatage du texte
    fontFamily: 'Police',
    fontSize: 'Taille de police',
    textAlign: 'Alignement du texte',
    textColor: 'Couleur du texte',
    
    // Image de fond
    backgroundImage: 'Image de fond',
    uploadImage: 'Télécharger une image',
    dragAndDrop: 'Ou glisser-déposer un fichier',
    imageFormats: 'Formats PNG, JPG, GIF, max 2MB',
    
    // Arrière-plan
    background: 'Arrière-plan',
    backgroundColor: 'Couleur d\'arrière-plan',
    backgroundType: 'Type d\'arrière-plan',
    backgroundTypes: {
      solid: 'Uni',
      gradient: 'Dégradé',
      pattern: 'Motif'
    },
    
    // Options de dégradé
    gradientStartColor: 'Couleur de départ',
    gradientEndColor: 'Couleur de fin',
    gradientDirection: 'Direction',
    gradientDirections: {
      horizontal: 'Horizontal',
      vertical: 'Vertical',
      diagonal: 'Diagonale',
      diagonalReverse: 'Diagonale inverse'
    },
    
    // Options de motif
    patternType: 'Type de motif',
    
    // Format de publication
    postFormat: 'Format de publication',
    formats: {
      square: 'Carré',
      portrait: 'Portrait',
      landscape: 'Paysage'
    },
    
    // Engagement
    engagement: {
      title: 'Simulation d\'engagement',
      likeCount: 'Nombre de likes',
      commentCount: 'Nombre de commentaires',
      viewCount: 'Nombre de vues',
      isLiked: 'Aimé par le spectateur',
      isSaved: 'Enregistré par le spectateur',
      hasStory: 'A une story Instagram',
      showComments: 'Afficher les commentaires',
      isTagged: 'Personnes taguées',
      isSponsored: 'Contenu sponsorisé'
    },
    
    // Commentaires
    comments: {
      title: 'Commentaires simulés',
      addComment: 'Ajouter un commentaire',
      delete: 'Supprimer',
      addForRealism: 'Ajoutez des commentaires simulés pour plus de réalisme',
      username: 'Nom d\'utilisateur',
      text: 'Texte du commentaire'
    },
    
    // Invites
    prompts: {
      enterHashtag: 'Entrez un hashtag (sans #)',
      enterUsername: 'Entrez le nom d\'utilisateur à mentionner',
      enterComment: 'Entrez le texte du commentaire',
      defaultComment: 'Superbe publication !',
      enterCommentUsername: 'Entrez le nom d\'utilisateur du commentaire',
      justNow: 'À l\'instant'
    },
    
    // Boutons d'action
    resetDesign: 'Réinitialiser la conception',
    
    // Prévisualisation et export
    preview: 'Aperçu',
    export: 'Exporter',
    downloadAsPNG: 'Télécharger en PNG',
    downloadAsJPG: 'Télécharger en JPG',
    copyToClipboard: 'Copier dans le presse-papiers',
    copied: 'Copié !',
    generating: 'Génération de l\'image en cours...',
    
    article: {
      title: 'Générateur de publications Instagram : Guide complet',
      introduction: 'Créez des simulations réalistes de publications Instagram à des fins marketing, de conception ou éducatives avec notre outil complet.',
      
      whatIs: {
        title: 'Qu\'est-ce qu\'un générateur de publications Instagram ?',
        paragraph1: 'Un générateur de publications Instagram est un outil de conception professionnel permettant de créer des simulations réalistes de publications sans les publier réellement sur la plateforme. Notre générateur offre une solution complète pour divers besoins personnels et professionnels, de la planification des réseaux sociaux au marketing et à l\'éducation, en créant du contenu Instagram réaliste.',
        paragraph2: 'Alors qu\'Instagram gagne en importance comme canal marketing, la capacité à concevoir, prévisualiser et perfectionner des publications avant leur publication devient cruciale pour les entreprises, influenceurs et gestionnaires de réseaux sociaux. Notre générateur répond à ce besoin avec une interface conviviale simulant l\'apparence exacte des publications sur la plateforme.'
      },
      
      whyUse: {
        title: 'Pourquoi utiliser un générateur de publications Instagram',
        paragraph1: 'Dans l\'environnement numérique actuel, Instagram est passé d\'une simple application de partage de photos à l\'une des plateformes marketing les plus puissantes. Avec plus d\'un milliard d\'utilisateurs actifs, Instagram offre des opportunités uniques pour le branding, la promotion de produits et l\'engagement avec le public. Cependant, créer des publications Instagram efficaces nécessite une planification et une conception minutieuses pour se démarquer dans un flux saturé.',
        paragraph2: 'Notre générateur de publications Instagram a été développé pour répondre à plusieurs défis clés rencontrés par les créateurs de contenu :',
        reasons: {
          contentPlanning: {
            title: 'Planification de contenu',
            description: 'Les gestionnaires de réseaux sociaux doivent visualiser l\'apparence des publications avant leur mise en ligne. Le générateur permet de créer des maquettes à soumettre aux clients ou équipes sans publication réelle.'
          },
          educational: {
            title: 'Fins éducatives',
            description: 'Pour les enseignants en marketing digital, cet outil offre une expérience d\'apprentissage pratique sans nécessiter d\'accès à un vrai compte.'
          },
          marketing: {
            title: 'Matériel marketing',
            description: 'Les entreprises ont souvent besoin de visuels de publications pour des présentations, sites web ou supports promotionnels. Notre générateur crée des simulations professionnelles adaptées.'
          },
          experimentation: {
            title: 'Expérimentation',
            description: 'Le générateur permet d\'essayer différents éléments de conception, légendes et indicateurs d\'engagement sans la pression d\'une publication réelle.'
          },
          consistency: {
            title: 'Planification de la cohérence',
            description: 'Pour les marques soucieuses d\'une esthétique uniforme, l\'outil permet de visualiser comment les nouvelles publications s\'intègrent dans la stratégie existante.'
          }
        }
      },
      
      keyFeatures: {
        title: 'Fonctionnalités clés de notre générateur',
        intro: 'Notre générateur se distingue par ses fonctionnalités complètes et son attention aux détails. Voici ce qui en fait l\'outil préféré des créateurs de contenu Instagram :',
        
        profile: {
          title: '1. Personnalisation complète du profil',
          description: 'Personnalisez tous les aspects d\'un compte Instagram simulé :',
          items: {
            username: {
              title: 'Nom d\'utilisateur et photo',
              description: 'Ajoutez une photo personnalisée et définissez un nom d\'utilisateur unique'
            },
            verification: {
              title: 'Badge de vérification',
              description: 'Ajoutez le badge bleu convoité pour simuler un compte vérifié'
            },
            location: {
              title: 'Tag de localisation',
              description: 'Incluez des informations géographiques pour plus de réalisme'
            },
            timing: {
              title: 'Timing de publication',
              description: 'Définissez une date et heure personnalisées, avec calcul automatique du temps relatif (ex: "il y a 2h")'
            }
          }
        },
        
        content: {
          title: '2. Options flexibles de création de contenu',
          description: 'Notre générateur prend en charge plusieurs types de contenu pour différents besoins créatifs :',
          items: {
            textOnly: {
              title: 'Publications texte uniquement',
              description: 'Créez des publications axées sur le contenu écrit avec arrière-plan personnalisable'
            },
            imageOnly: {
              title: 'Publications image uniquement',
              description: 'Téléchargez vos propres images comme contenu visuel'
            },
            mixed: {
              title: 'Contenu mixte',
              description: 'Combinez du texte et des images pour un impact maximal'
            },
            richText: {
              title: 'Édition de texte enrichi',
              description: 'Ajoutez hashtags, mentions et emojis en un clic'
            },
            hashtags: {
              title: 'Hashtags recommandés',
              description: 'Obtenez des suggestions de hashtags populaires et pertinents'
            }
          }
        },
        
        design: {
          title: '3. Personnalisation avancée du design',
          description: 'Contrôlez totalement l\'apparence visuelle de vos publications :',
          items: {
            typography: {
              title: 'Contrôle typographique',
              description: 'Choisissez parmi plusieurs polices, tailles, couleurs et options d\'alignement'
            },
            background: {
              title: 'Options d\'arrière-plan',
              description: 'Sélectionnez parmi des couleurs unies, dégradés ou motifs'
            },
            gradient: {
              title: 'Personnalisation des dégradés',
              description: 'Créez des dégradés personnalisés avec couleurs de début/fin et direction ajustables'
            },
            pattern: {
              title: 'Sélection de motifs',
              description: 'Choisissez parmi divers styles de motifs pour des effets uniques'
            },
            format: {
              title: 'Options de format',
              description: 'Basculez entre formats carré, portrait et paysage pour correspondre aux ratios Instagram'
            }
          }
        },
        
        engagement: {
          title: '4. Simulation réaliste d\'engagement',
          description: 'Reproduisez les interactions Instagram authentiques :',
          items: {
            likes: {
              title: 'Compteur de likes',
              description: 'Affichez le nombre de likes sous forme numérique ou en format K/M'
            },
            comments: {
              title: 'Système de commentaires',
              description: 'Ajoutez des commentaires simulés d\'autres utilisateurs'
            },
            views: {
              title: 'Compteur de vues',
              description: 'Définissez un nombre de vues personnalisé pour les publications vidéo'
            },
            interactions: {
              title: 'Interactions des spectateurs',
              description: 'Options pour indiquer si la publication est aimée ou enregistrée par le spectateur'
            },
            story: {
              title: 'Indicateur de story',
              description: 'Ajoutez un cercle coloré indiquant une story active'
            },
            tags: {
              title: 'Contenu tagué',
              description: 'Incluez des tags de personnes pour plus de réalisme'
            },
            sponsored: {
              title: 'Contenu sponsorisé',
              description: 'Ajoutez le label "Partenariat" pour les publications sponsorisées'
            }
          }
        },
        
        export: {
          title: '5. Options d\'exportation et partage',
          description: 'Une fois votre design terminé, notre outil offre des options pratiques d\'exportation :',
          items: {
            png: {
              title: 'Télécharger en PNG',
              description: 'Exportez des images PNG haute qualité avec transparence'
            },
            jpg: {
              title: 'Télécharger en JPG',
              description: 'Créez des fichiers JPG compressés pour un partage rapide'
            },
            clipboard: {
              title: 'Copier dans le presse-papiers',
              description: 'Copiez directement l\'image pour un collage immédiat dans d\'autres applications'
            }
          }
        }
      },
      
      howTo: {
        title: 'Comment utiliser le générateur : Guide étape par étape',
        description: 'Notre générateur est conçu pour être intuitif et facile à utiliser. Suivez ces étapes pour créer votre simulation parfaite :',
        
        profileSetup: {
          title: 'Étape 1 : Configurer le profil',
          description: 'Commencez par personnaliser les détails du compte affichés sur votre publication :',
          step1: 'Entrez le nom d\'utilisateur souhaité dans le champ en haut du panneau gauche',
          step2: 'Ajoutez une localisation (ex: "Paris, France") pour plus de réalisme',
          step3: 'Utilisez le sélecteur de date/heure pour définir quand la publication apparaîtrait',
          step4: 'Cochez "Compte vérifié" si vous voulez le badge bleu de vérification',
          step5: 'Cliquez sur "Télécharger une photo" pour ajouter une photo de profil personnalisée'
        },
        
        contentSelection: {
          title: 'Étape 2 : Sélectionner le type de contenu',
          description: 'Choisissez votre format préféré et ajoutez vos éléments créatifs :',
          step1: 'Sélectionnez parmi les trois types : "Texte uniquement", "Image uniquement" ou "Mixte"',
          step2: 'Pour le texte : rédigez votre légende dans l\'éditeur. Utilisez les boutons pour ajouter hashtags, mentions et emojis',
          step3: 'Pour les images : cliquez sur "Télécharger une image" ou glissez-déposez un fichier',
          step4: 'Cliquez sur les hashtags recommandés pour les ajouter rapidement',
          step5: 'Surveillez le nombre de caractères pour éviter les textes trop longs'
        },
        
        stylingContent: {
          title: 'Étape 3 : Styliser le contenu',
          description: 'Personnalisez l\'apparence visuelle de votre publication :',
          step1: 'Sélectionnez une police (Inter, Roboto, Poppins...) dans le menu déroulant',
          step2: 'Choisissez une taille de police adaptée à la longueur de votre texte',
          step3: 'Utilisez les boutons d\'alignement pour positionner votre texte',
          step4: 'Sélectionnez une couleur de texte contrastant avec l\'arrière-plan',
          step5: 'Pour les publications sans image ou avec texte superposé, personnalisez l\'arrière-plan :',
          step6: '- Choisissez le type (uni, dégradé ou motif)',
          step7: '- Pour les dégradés, sélectionnez les couleurs de début/fin et la direction',
          step8: '- Pour les motifs, choisissez parmi les styles disponibles'
        },
        
        postFormat: {
          title: 'Étape 4 : Choisir le format',
          description: 'Sélectionnez le ratio qui convient le mieux à votre contenu :',
          step1: 'Carré (1:1) - Format classique d\'Instagram, idéal pour les compositions équilibrées',
          step2: 'Portrait (4:5) - Format vertical prenant plus d\'espace dans le flux',
          step3: 'Paysage (16:9) - Format large parfait pour les images panoramiques'
        },
        
        engagementSettings: {
          title: 'Étape 5 : Configurer l\'engagement',
          description: 'Ajoutez des éléments d\'interaction réalistes à votre simulation :',
          step1: 'Définissez les indicateurs d\'engagement :',
          step2: '- Likes : ajustez le nombre (affiché en valeur numérique ou format K/M)',
          step3: '- Commentaires : définissez le nombre de commentaires reçus',
          step4: '- Vues : pour les publications vidéo, définissez un nombre de vues personnalisé',
          step5: 'Activez les options d\'interaction pour plus de réalisme :',
          step6: '- "Aimé par le spectateur" : affiche le cœur en rouge',
          step7: '- "Enregistré par le spectateur" : affiche l\'icône de signet remplie',
          step8: '- "A une story" : ajoute un cercle coloré autour de la photo de profil',
          step9: '- "Afficher les commentaires" : active la section commentaires',
          step10: '- "Personnes taguées" : ajoute une icône de personne sur l\'image',
          step11: '- "Sponsorisé" : ajoute le label "Partenariat"'
        },
        
        commentSimulation: {
          title: 'Étape 6 : Ajouter des commentaires simulés',
          description: 'Si vous avez activé les commentaires, ajoutez des exemples réalistes :',
          step1: 'Saisissez jusqu\'à deux noms d\'utilisateurs et textes de commentaires',
          step2: 'Utilisez des emojis dans les commentaires pour plus de réalisme',
          step3: 'Ajoutez des commentaires pertinents par rapport à votre contenu',
          step4: 'Incluez des commentaires susceptibles d\'encourager l\'engagement'
        },
        
        previewExport: {
          title: 'Étape 7 : Prévisualiser et exporter',
          description: 'Finalisez votre simulation et enregistrez le résultat :',
          step1: 'Vérifiez votre design dans la zone de prévisualisation',
          step2: 'Apportez les derniers ajustements si nécessaire',
          step3: 'Choisissez votre format d\'exportation préféré :',
          step4: '- PNG : pour une qualité maximale avec transparence',
          step5: '- JPG : pour des fichiers plus légers',
          step6: '- Presse-papiers : pour un collage immédiat ailleurs',
          step7: 'Attendez que la génération se termine (quelques secondes)',
          step8: 'Utilisez votre simulation dans vos présentations, propositions ou documents'
        }
      },
      
      tips: {
        title: 'Conseils professionnels pour des publications efficaces',
        description: 'Maximisez l\'impact de vos publications Instagram avec ces conseils d\'experts :',
        
        contentStrategy: {
          title: 'Stratégie de contenu',
          tip1: 'Utilisez un mix de hashtags populaires et de niche (7-15 est optimal pour la découvrabilité)',
          tip2: 'Incluez un appel à l\'action clair dans votre légende pour encourager l\'engagement',
          tip3: 'Gardez les légendes concises pour un impact immédiat, ou utilisez des sauts de ligne pour raconter une histoire plus longue',
          tip4: 'Placez les informations importantes au début, Instagram tronque après 125 caractères',
          tip5: 'Utilisez stratégiquement des emojis pour ajouter de la personnalité et structurer le texte'
        },
        
        visualDesign: {
          title: 'Design visuel',
          tip1: 'Maintenez une cohérence visuelle entre vos publications pour une esthétique de flux uniforme',
          tip2: 'Utilisez des couleurs de texte contrastées pour les superpositions sur images',
          tip3: 'Testez différents formats pour voir lequel fonctionne le mieux',
          tip4: 'Concevez en pensant à l\'apparence dans la grille du profil',
          tip5: 'Utilisez la psychologie des couleurs pour évoquer des émotions spécifiques'
        },
        
        engagementOptimization: {
          title: 'Optimisation de l\'engagement',
          tip1: 'Simulez des chiffres d\'engagement réalistes correspondant à votre audience réelle',
          tip2: 'Incluez des commentaires susceptibles de déclencher des discussions',
          tip3: 'Utilisez des tags de localisation pertinents pour augmenter la découvrabilité',
          tip4: 'Gardez une cohérence avec l\'identité de votre marque',
          tip5: 'Prévisualisez sur mobile, où la majorité du trafic Instagram se produit'
        }
      },
      
      faq: {
        title: 'FAQ sur le générateur de publications',
        
        question1: 'Est-ce un outil officiel Instagram ?',
        answer1: 'Non, notre générateur est un outil indépendant pour créer des simulations réalistes. Il n\'est pas affilié à Instagram/Meta.',
        
        question2: 'Peut-on publier directement depuis cet outil ?',
        answer2: 'Non, le générateur ne crée que des simulations. Pour publier, utilisez l\'app officielle Instagram.',
        
        question3: 'Les simulations correspondent-elles exactement à l\'interface Instagram ?',
        answer3: 'Bien que très réalistes, les simulations peuvent légèrement différer des mises à jour récentes d\'Instagram.',
        
        question4: 'Peut-on utiliser ces simulations à des fins commerciales ?',
        answer4: 'Oui, mais notez que les éléments de design Instagram sont des marques déposées de Meta.',
        
        question5: 'Y a-t-il une limite au nombre de publications créées ?',
        answer5: 'Non, vous pouvez créer autant de simulations que nécessaire pour vos projets.',
        
        question6: 'Faut-il créer un compte pour utiliser l\'outil ?',
        answer6: 'Non, le générateur est gratuit et ne nécessite pas d\'inscription.',
        
        question7: 'Les indicateurs d\'engagement sont-ils précis ?',
        answer7: 'Ils sont entièrement personnalisables et simulés, ne reflétant pas de données réelles.',
        
        question8: 'Peut-on enregistrer des designs pour les modifier plus tard ?',
        answer8: 'Non, mais vous pouvez exporter et sauvegarder les images pour référence future.',
        
        question9: 'Quels formats d\'image sont supportés ?',
        answer9: 'JPG, PNG et GIF jusqu\'à 2MB. Utilisez des images adaptées au ratio choisi.',
        
        question10: 'Comment créer la simulation la plus réaliste ?',
        answer10: 'Utilisez une vraie photo de profil, des chiffres d\'engagement réalistes, des localisations, hashtags variés et des commentaires authentiques.',
        
        question11: 'Peut-on créer des stories ou reels avec cet outil ?',
        answer11: 'Actuellement, l\'outil se concentre sur les publications statiques. Les fonctionnalités stories/reels pourraient être ajoutées ultérieurement.',
        
        question12: 'Mes créations sont-elles stockées sur vos serveurs ?',
        answer12: 'Non, tout le traitement se fait dans votre navigateur pour garantir la confidentialité.'
      },
      
      relatedTools: {
        title: 'Outils et ressources complémentaires',
        description: 'Améliorez votre stratégie réseaux sociaux avec ces outils :',
        
        tool1: {
          name: 'Générateur d\'images pour réseaux sociaux',
          description: 'Créez des images optimisées pour Twitter, Facebook et LinkedIn',
          url: '/tools/social-media-image-generator'
        },
        tool2: {
          name: 'Générateur de hashtags',
          description: 'Découvrez des hashtags tendance pour maximiser votre portée',
          url: '/tools/hashtag-generator'
        },
        tool3: {
          name: 'Générateur de palette de couleurs',
          description: 'Créez des schémas de couleurs harmonieux pour votre feed Instagram',
          url: '/tools/color-palette-generator'
        },
        tool4: {
          name: 'Outil d\'association de polices',
          description: 'Trouvez des combinaisons de polices complémentaires',
          url: '/tools/font-pairing'
        },
        tool5: {
          name: 'Générateur de légendes',
          description: 'Obtenez de l\'inspiration pour des légendes engageantes',
          url: '/tools/caption-generator'
        },
        
        article1: {
          title: 'Guide du marketing Instagram 2023',
          description: 'Stratégies complètes pour augmenter vos abonnés et engagements',
          url: '/blog/instagram-marketing-guide-2023'
        },
        article2: {
          title: 'Tendances du contenu visuel',
          description: 'Maîtrisez les dernières tendances de design sur Instagram',
          url: '/blog/visual-content-trends'
        },
        article3: {
          title: 'Créer une esthétique Instagram cohérente',
          description: 'Techniques pour un feed visuellement attractif et uniforme',
          url: '/blog/cohesive-instagram-aesthetic'
        }
      },
      
      conclusion: {
        title: 'Conclusion : Élevez votre stratégie Instagram avec des simulations professionnelles',
        paragraph1: 'Le générateur de publications Instagram est un outil puissant pour quiconque souhaite améliorer sa présence sur les réseaux sociaux. En permettant la création de simulations professionnelles et réalistes, notre outil comble le fossé entre concept et exécution, offrant une planification complète avant publication.',
        paragraph2: 'Que vous soyez gestionnaire de réseaux sociaux cherchant l\'approbation des clients, entreprise planifiant une campagne, influenceur concevant son feed idéal ou éducateur enseignant les bonnes pratiques, notre générateur offre la polyvalence et les options de personnalisation nécessaires pour atteindre vos objectifs.',
        paragraph3: 'Dans l\'environnement en constante évolution du marketing digital, les outils de visualisation comme notre générateur sont deven',
        paragraph4: "Commencez dès maintenant avec notre générateur de publications Instagram et découvrez comment des simulations professionnelles peuvent transformer votre processus de planification et de présentation sur les réseaux sociaux."
      }
    }
  }
