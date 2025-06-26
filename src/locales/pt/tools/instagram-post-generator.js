export default {
    name: 'Gerador de Postagens do Instagram',
    description: 'Crie simulações realistas de postagens do Instagram com conteúdo, fundo e dados de engajamento personalizáveis',
    
    // Opções de Design
    designOptions: 'Opções de Design',
    
    // Perfil do Usuário
    userProfile: {
      title: 'Configurações do Perfil',
      username: 'Nome de Usuário',
      location: 'Localização',
      postedTime: 'Data e Hora da Postagem',
      postDate: 'Data Detalhada',
      avatar: 'Foto de Perfil',
      uploadAvatar: 'Enviar Foto',
      removeAvatar: 'Remover',
      verifiedAccount: 'Status da Conta',
      isVerified: 'Conta Verificada'
    },
    
    // Tipo de Conteúdo
    contentType: 'Tipo de Conteúdo',
    contentTypes: {
      text: 'Apenas Texto',
      image: 'Apenas Imagem',
      mixed: 'Texto e Imagem'
    },
    
    // Conteúdo de Texto
    textContent: 'Conteúdo de Texto',
    postText: 'Texto da Postagem',
    addHashtag: 'Adicionar Hashtag',
    mentionUser: 'Mencionar Usuário',
    insertEmoji: 'Emoji',
    commonEmojis: 'Emojis Populares',
    recommendedHashtags: 'Hashtags Recomendadas',
    
    // Formatação de Texto
    fontFamily: 'Fonte',
    fontSize: 'Tamanho da Fonte',
    textAlign: 'Alinhamento',
    textColor: 'Cor do Texto',
    
    // Imagem de Fundo
    backgroundImage: 'Imagem de Fundo',
    uploadImage: 'Enviar Imagem',
    dragAndDrop: 'Ou arraste e solte',
    imageFormats: 'Formatos: PNG, JPG, GIF (até 2MB)',
    
    // Fundo
    background: 'Fundo',
    backgroundColor: 'Cor de Fundo',
    backgroundType: 'Tipo de Fundo',
    backgroundTypes: {
      solid: 'Sólido',
      gradient: 'Gradiente',
      pattern: 'Padrão'
    },
    
    // Opções de Gradiente
    gradientStartColor: 'Cor Inicial',
    gradientEndColor: 'Cor Final',
    gradientDirection: 'Direção',
    gradientDirections: {
      horizontal: 'Horizontal',
      vertical: 'Vertical',
      diagonal: 'Diagonal',
      diagonalReverse: 'Diagonal Invertida'
    },
    
    // Opções de Padrão
    patternType: 'Tipo de Padrão',
    
    // Formato da Postagem
    postFormat: 'Formato',
    formats: {
      square: 'Quadrado',
      portrait: 'Retrato',
      landscape: 'Paisagem'
    },
    
    // Engajamento
    engagement: {
      title: 'Simulação de Engajamento',
      likeCount: 'Curtidas',
      commentCount: 'Comentários',
      viewCount: 'Visualizações',
      isLiked: 'Curtido pelo Visualizador',
      isSaved: 'Salvo pelo Visualizador',
      hasStory: 'Tem Story',
      showComments: 'Mostrar Comentários',
      isTagged: 'Pessoas Marcadas',
      isSponsored: 'Patrocinado'
    },
    
    // Comentários
    comments: {
      title: 'Comentários Simulados',
      addComment: 'Adicionar Comentário',
      delete: 'Excluir',
      addForRealism: 'Adicione comentários para maior realismo',
      username: 'Nome de Usuário',
      text: 'Texto do Comentário'
    },
    
    // Prompts
    prompts: {
      enterHashtag: 'Digite a hashtag (sem #)',
      enterUsername: 'Digite o nome de usuário',
      enterComment: 'Digite o comentário',
      defaultComment: 'Ficou incrível!',
      enterCommentUsername: 'Nome para o comentário',
      justNow: 'Agora há pouco'
    },
    
    // Botões de Ação
    resetDesign: 'Redefinir',
    
    // Visualização e Exportação
    preview: 'Pré-visualizar',
    export: 'Exportar',
    downloadAsPNG: 'Baixar como PNG',
    downloadAsJPG: 'Baixar como JPG',
    copyToClipboard: 'Copiar',
    copied: 'Copiado!',
    generating: 'Gerando imagem...',
    
    article: {
      title: 'Gerador de Postagens do Instagram: Guia Completo',
      introduction: 'Crie simulações realistas de postagens para marketing, planejamento ou educação com nossa ferramenta completa.',
      
      whatIs: {
        title: 'O que é um Gerador de Postagens do Instagram?',
        paragraph1: 'O Gerador de Postagens do Instagram é uma ferramenta profissional que permite criar simulações realistas sem publicar de verdade. Ideal para planejamento de conteúdo, marketing e educação.',
        paragraph2: 'Com a importância do Instagram como canal de marketing, essa ferramenta se tornou essencial para empresas, influenciadores e gerentes de mídia social visualizarem postagens antes da publicação.'
      },
      
      whyUse: {
        title: 'Por que usar um Gerador de Postagens?',
        paragraph1: 'O Instagram evoluiu para uma das plataformas de marketing mais poderosas, exigindo planejamento cuidadoso para se destacar.',
        paragraph2: 'Principais benefícios:',
        reasons: {
          contentPlanning: {
            title: 'Planejamento',
            description: 'Visualize postagens antes de publicar para aprovação de clientes'
          },
          educational: {
            title: 'Educação',
            description: 'Ferramenta prática para ensinar marketing digital'
          },
          marketing: {
            title: 'Marketing',
            description: 'Crie materiais promocionais profissionais'
          },
          experimentation: {
            title: 'Experimentos',
            description: 'Teste diferentes designs sem risco'
          },
          consistency: {
            title: 'Consistência',
            description: 'Mantenha uma estética coesa no feed'
          }
        }
      },
      
      keyFeatures: {
        title: 'Principais Recursos',
        intro: 'Diferenciais da nossa ferramenta:',
        
        profile: {
          title: '1. Personalização Completa',
          description: 'Customize todos os aspectos do perfil:',
          items: {
            username: {
              title: 'Nome e Foto',
              description: 'Defina nome de usuário e foto de perfil'
            },
            verification: {
              title: 'Verificação',
              description: 'Adicione o selo de conta verificada'
            },
            location: {
              title: 'Local',
              description: 'Inclua geolocalização'
            },
            timing: {
              title: 'Tempo',
              description: 'Defina data/hora da postagem'
            }
          }
        },
        
        content: {
          title: '2. Criação de Conteúdo',
          description: 'Diversos formatos de conteúdo:',
          items: {
            textOnly: {
              title: 'Só Texto',
              description: 'Postagens focadas em conteúdo escrito'
            },
            imageOnly: {
              title: 'Só Imagem',
              description: 'Destaque para imagens visuais'
            },
            mixed: {
              title: 'Misto',
              description: 'Combine texto e imagem'
            },
            richText: {
              title: 'Texto Rico',
              description: 'Adicione hashtags, menções e emojis'
            },
            hashtags: {
              title: 'Hashtags',
              description: 'Sugestões de hashtags relevantes'
            }
          }
        },
        
        design: {
          title: '3. Design Avançado',
          description: 'Controle total sobre o visual:',
          items: {
            typography: {
              title: 'Tipografia',
              description: 'Escolha fontes, tamanhos e cores'
            },
            background: {
              title: 'Fundo',
              description: 'Sólido, gradiente ou padrão'
            },
            gradient: {
              title: 'Gradiente',
              description: 'Crie degradês personalizados'
            },
            pattern: {
              title: 'Padrão',
              description: 'Selecione entre diversos estilos'
            },
            format: {
              title: 'Formato',
              description: 'Quadrado, retrato ou paisagem'
            }
          }
        },
        
        engagement: {
          title: '4. Engajamento Realista',
          description: 'Simule interações autênticas:',
          items: {
            likes: {
              title: 'Curtidas',
              description: 'Defina números de curtidas'
            },
            comments: {
              title: 'Comentários',
              description: 'Adicione comentários simulados'
            },
            views: {
              title: 'Visualizações',
              description: 'Configure visualizações para vídeos'
            },
            interactions: {
              title: 'Interações',
              description: 'Mostre se foi curtido/salvo'
            },
            story: {
              title: 'Story',
              description: 'Indicador de story ativo'
            },
            tags: {
              title: 'Marcações',
              description: 'Mostre pessoas marcadas'
            },
            sponsored: {
              title: 'Patrocinado',
              description: 'Identifique conteúdo pago'
            }
          }
        },
        
        export: {
          title: '5. Exportação',
          description: 'Opções para salvar e compartilhar:',
          items: {
            png: {
              title: 'PNG',
              description: 'Qualidade alta com fundo transparente'
            },
            jpg: {
              title: 'JPG',
              description: 'Arquivo compactado para compartilhamento'
            },
            clipboard: {
              title: 'Copiar',
              description: 'Copie diretamente para outros apps'
            }
          }
        }
      },
      
      howTo: {
        title: 'Como Usar: Passo a Passo',
        description: 'Guia completo para criar sua postagem simulada:',
        
        profileSetup: {
          title: 'Passo 1: Configurar Perfil',
          description: 'Personalize os dados da conta:',
          step1: 'Digite o nome de usuário desejado',
          step2: 'Adicione localização para realismo',
          step3: 'Defina data/hora da postagem',
          step4: 'Marque "Conta Verificada" se necessário',
          step5: 'Envie uma foto de perfil personalizada'
        },
        
        contentSelection: {
          title: 'Passo 2: Escolher Conteúdo',
          description: 'Selecione o formato e adicione conteúdo:',
          step1: 'Escolha entre texto, imagem ou ambos',
          step2: 'Para texto: escreva sua legenda',
          step3: 'Para imagens: envie seus arquivos',
          step4: 'Adicione hashtags relevantes',
          step5: 'Observe o limite de caracteres'
        },
        
        stylingContent: {
          title: 'Passo 3: Estilizar',
          description: 'Personalize o visual:',
          step1: 'Selecione fonte e tamanho',
          step2: 'Escolha alinhamento e cor do texto',
          step3: 'Para fundos:',
          step4: '- Sólido: escolha uma cor',
          step5: '- Gradiente: defina cores e direção',
          step6: '- Padrão: selecione um estilo',
          step7: '- Para gradientes, escolha as cores de início e fim, bem como a direção',
          step8: '- Para o padrão, escolha o estilo do padrão das opções disponíveis'
        },
        
        postFormat: {
          title: 'Passo 4: Formato',
          description: 'Selecione a proporção ideal:',
          step1: 'Quadrado (1:1) - Clássico',
          step2: 'Retrato (4:5) - Mais vertical',
          step3: 'Paisagem (16:9) - Mais horizontal'
        },
        
        engagementSettings: {
          title: 'Passo 5: Engajamento',
          description: 'Adicione interações realistas:',
          step1: 'Ajuste números de curtidas/comentários',
          step2: 'Ative "Curtido pelo Visualizador"',
          step3: 'Mostre se foi salvo',
          step4: 'Adicione indicador de story',
          step5: 'Habilite área de comentários',
          step6: 'Marque como conteúdo patrocinado',
          step7: '- favorito pelo espectador: exibir o ícone bookmark como um estado de preenchimento ',
          step8: '- há uma história do Instagram: adicione anéis coloridos em torno da imagem do perfil ',
          step9: '- mostrar comentários: ativar área de comentários ',
          step10: '- alguém está marcado: adicionar sobreposição de ícone de pessoa na imagem ',
          step11: '- conteúdo patrocinado: adicione a tag "parceria paga" para simulação de posts patrocinados'
        },
        
        commentSimulation: {
          title: 'Passo 6: Comentários',
          description: 'Adicione comentários simulados:',
          step1: 'Insira nomes e textos',
          step2: 'Use emojis para realismo',
          step3: 'Adicione comentários relevantes',
          step4: 'Inclua perguntas para engajar'
        },
        
        previewExport: {
          title: 'Passo 7: Exportar',
          description: 'Finalize e salve seu trabalho:',
          step1: 'Revise o design final',
          step2: 'Faça ajustes finais',
          step3: 'Escolha formato de exportação:',
          step4: '- PNG para qualidade máxima',
          step5: '- JPG para arquivos menores',
          step6: '- Copie para colar em outros apps',
          step7: 'Aguarde a geração',
          step8: 'Use em apresentações e materiais'
        }
      },
      
      tips: {
        title: 'Dicas Profissionais',
        description: 'Melhores práticas para postagens eficazes:',
        
        contentStrategy: {
          title: 'Conteúdo',
          tip1: 'Use 7-15 hashtags (mix de populares e nicho)',
          tip2: 'Inclua chamadas para ação claras',
          tip3: 'Seja conciso ou use quebras para histórias',
          tip4: 'Informações importantes no início',
          tip5: 'Use emojis estrategicamente'
        },
        
        visualDesign: {
          title: 'Visual',
          tip1: 'Mantenha consistência no feed',
          tip2: 'Alto contraste para texto sobre imagens',
          tip3: 'Teste diferentes formatos',
          tip4: 'Pense na grade do perfil',
          tip5: 'Use psicologia das cores'
        },
        
        engagementOptimization: {
          title: 'Engajamento',
          tip1: 'Simule números realistas',
          tip2: 'Inclua comentários que gerem discussão',
          tip3: 'Use geolocalização relevante',
          tip4: 'Alinhe com identidade da marca',
          tip5: 'Visualize primeiro no mobile'
        }
      },
      
      faq: {
        title: 'Perguntas Frequentes',
        
        question1: 'É uma ferramenta oficial do Instagram?',
        answer1: 'Não, é uma solução independente para criar simulações.',
        
        question2: 'Posso postar diretamente desta ferramenta?',
        answer2: 'Não, é apenas para simulação. Use o app oficial para publicar.',
        
        question3: 'As simulações são 100% idênticas?',
        answer3: 'Bem próximas, mas o Instagram atualiza frequentemente seu design.',
        
        question4: 'Posso usar comercialmente?',
        answer4: 'Sim, para materiais de marketing e propostas.',
        
        question5: 'Há limite de postagens?',
        answer5: 'Não, crie quantas precisar.',
        
        question6: 'Preciso criar conta?',
        answer6: 'Não, use sem cadastro.',
        
        question7: 'Os números de engajamento são reais?',
        answer7: 'Não, são apenas simulados.',
        
        question8: 'Posso salvar para editar depois?',
        answer8: 'Atualmente não, exporte como imagem.',
        
        question9: 'Quais formatos de imagem?',
        answer9: 'JPG, PNG, GIF (até 2MB).',
        
        question10: 'Como criar simulações mais realistas?',
        answer10: 'Use foto real, números condizentes, localização e comentários autênticos.',
        
        question11: 'Tem para Stories ou Reels?',
        answer11: 'Atualmente só para postagens no feed.',
        
        question12: 'Meus dados são armazenados?',
        answer12: 'Não, todo processamento é local no seu navegador.'
      },
      
      relatedTools: {
        title: 'Ferramentas Relacionadas',
        description: 'Complemente sua estratégia:',
        
        tool1: {
          name: 'Gerador de Imagens para Redes',
          description: 'Crie imagens otimizadas para várias plataformas',
          url: '/tools/social-media-image-generator'
        },
        tool2: {
          name: 'Gerador de Hashtags',
          description: 'Encontre hashtags populares para maior alcance',
          url: '/tools/hashtag-generator'
        },
        tool3: {
          name: 'Gerador de Paleta de Cores',
          description: 'Crie esquemas de cores harmoniosos',
          url: '/tools/color-palette-generator'
        },
        tool4: {
          name: 'Combinador de Fontes',
          description: 'Encontre pares de fontes complementares',
          url: '/tools/font-pairing'
        },
        tool5: {
          name: 'Gerador de Legendas',
          description: 'Inspiração para legendas engajadoras',
          url: '/tools/caption-generator'
        }
      },
      
      conclusion: {
        title: 'Conclusão',
        paragraph1: 'O Gerador de Postagens do Instagram é uma ferramenta poderosa para planejamento de conteúdo, permitindo visualizar postagens antes da publicação.',
        paragraph2: 'Ideal para marcas, influenciadores e educadores que buscam criar conteúdo impactante com maior controle criativo.',
        paragraph3: 'Em um cenário de marketing digital competitivo, ferramentas de simulação como esta se tornaram essenciais para estratégias eficazes.',
        paragraph4: 'Comece agora a criar postagens profissionais que se destacam no feed do Instagram.'
      }
    }
}