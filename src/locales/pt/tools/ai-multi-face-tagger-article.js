export default {
    title: 'Marcador AI de Múltiplas Faces: Identificar e Rotular Pessoas em Fotos',
    whatIsTitle: 'O que é o Marcador AI de Múltiplas Faces?',
    intro: 'Nosso <strong>Marcador AI de Múltiplas Faces</strong> é uma poderosa ferramenta online que usa tecnologia avançada de reconhecimento facial para detectar múltiplas faces em fotos e permite que você adicione rótulos para cada pessoa. Seja organizando coleções de fotos, criando mapas de assentos para salas de aula, ou simplesmente querendo identificar todos em uma foto de grupo, esta ferramenta oferece uma maneira rápida e eficiente de marcar faces sem necessidade de conhecimento técnico.',
    
    howItWorksTitle: 'Como Funciona?',
    howItWorksContent: 'O Marcador AI de Múltiplas Faces usa face-api.js, uma API JavaScript que implementa redes neurais convolucionais para detectar faces e analisar características faciais. A ferramenta primeiro identifica todas as faces na sua imagem carregada e, em seguida, permite que você adicione rótulos personalizados ou nomes para cada face detectada. Todo o processamento acontece diretamente no seu navegador, garantindo que suas fotos permaneçam privadas e nunca sejam carregadas em nenhum servidor.',
    
    tipTitle: 'Dica Profissional:',
    tipContent: 'Para melhores resultados, carregue fotos com faces claras, bem iluminadas e voltadas para a câmera. A ferramenta funciona melhor com retratos frontais com obstruções mínimas ou ângulos extremos.',
    
    featuresTitle: 'Recursos Principais',
    features: [
        'Detecção precisa de múltiplas faces em uma única imagem',
        'Sistema de rotulagem personalizado para marcar cada face detectada',
        'Suporte para processamento em lote de múltiplas fotos',
        'Opção para exportar imagens com sobreposições visíveis de rótulos faciais',
        'Opção de exportação JSON para integração com sistemas de gerenciamento de fotos',
        'Design centrado na privacidade com todo o processamento feito localmente no seu navegador'
    ],
    
    useCasesTitle: 'Quando Usar Esta Ferramenta',
    useCase1Title: 'Organização de Fotos',
    useCase1Content: 'Identifique e marque rapidamente pessoas em coleções de fotos para torná-las pesquisáveis e mais organizadas.',
    
    useCase2Title: 'Gestão de Sala de Aula',
    useCase2Content: 'Professores podem usar esta ferramenta para criar fotos de classe rotuladas para ajudar a lembrar nomes de alunos ou criar mapas de assentos.',
    
    useCase3Title: 'Fotografia de Eventos',
    useCase3Content: 'Fotógrafos de eventos podem marcar participantes em fotos de grupo para facilitar a distribuição e identificação.',
    
    useCase4Title: 'Conteúdo de Mídia Social',
    useCase4Content: 'Criadores de conteúdo podem rotular colaboradores ou membros da equipe em fotos promocionais para atribuição adequada.',
    
    faqTitle: 'Perguntas Frequentes',
    faqs: [
        {
            question: 'Quão precisa é a detecção facial?',
            answer: 'A IA fornece detecção facial geralmente precisa na maioria dos casos. No entanto, os resultados podem variar dependendo de fatores como iluminação, qualidade da imagem, ângulos faciais e oclusões. A ferramenta normalmente alcança melhor precisão com retratos frontais claros em boas condições de iluminação.'
        },
        {
            question: 'Meus dados estão seguros ao usar esta ferramenta?',
            answer: 'Sim, todo o processamento é feito localmente no seu navegador. Suas fotos nunca são carregadas em nenhum servidor, garantindo privacidade completa. A ferramenta usa JavaScript do lado do cliente para analisar imagens e não armazena ou transmite nenhum dado.'
        },
        {
            question: 'O que acontece se algumas faces não forem detectadas?',
            answer: 'A detecção facial depende de vários fatores, incluindo iluminação, ângulos e qualidade da imagem. Se algumas faces não forem detectadas, tente carregar uma foto diferente com melhor iluminação e ângulos faciais mais diretos. Faces muito pequenas ou parcialmente obscurecidas podem ser difíceis para a IA detectar.'
        },
        {
            question: 'Posso exportar os dados de marcação facial para uso em outros aplicativos?',
            answer: 'Sim, nossa ferramenta fornece uma opção de exportação JSON que inclui coordenadas para cada face detectada junto com seus rótulos personalizados. Esses dados podem ser importados para vários sistemas de gerenciamento de fotos ou usados para aplicativos personalizados. Você também pode baixar imagens com sobreposições visíveis de rótulos faciais.'
        }
    ],
    
    tutorialTitle: 'Como Usar o Marcador AI de Múltiplas Faces',
    steps: [
        {
            title: 'Carregue Sua Foto',
            description: 'Comece carregando a foto que deseja analisar. Você pode arrastar e soltar arquivos diretamente na área de upload ou clicar para navegar em seu dispositivo. A ferramenta suporta formatos comuns de imagem, incluindo JPG, PNG, WEBP e BMP.',
            note: 'Você pode carregar várias fotos de uma vez para processamento em lote.'
        },
        {
            title: 'Detectar Faces',
            description: 'Clique no botão "Detectar Faces" e aguarde alguns segundos para que nossa IA identifique todas as faces na foto. Cada face detectada será destacada com uma caixa e rotulada com um número para fácil referência.',
            note: 'O tempo de processamento depende do número e tamanho das fotos, bem como do desempenho do seu dispositivo.'
        },
        {
            title: 'Adicionar Rótulos',
            description: 'Para cada face detectada, insira um nome ou rótulo no campo de entrada correspondente. Conforme você digita, os rótulos serão automaticamente atualizados na pré-visualização da imagem, permitindo que você veja como ficará o resultado final.',
            note: 'Você pode deixar algumas faces sem marcação, se preferir, ou limpar rótulos clicando no botão X.'
        },
        {
            title: 'Exporte Seus Resultados',
            description: 'Escolha seu formato e opções de exportação preferidos. Você pode incluir sobreposições de rótulos faciais diretamente na imagem e/ou exportar um arquivo JSON contendo todas as coordenadas faciais e rótulos. Selecione seu formato de imagem preferido e, para arquivos JPG, ajuste a qualidade conforme necessário. Por fim, baixe imagens individuais ou use a opção de download em lote para obter todas as fotos processadas como um arquivo ZIP.',
            note: 'A exportação JSON é particularmente útil se você planeja importar os dados faciais para outros aplicativos ou sistemas de gerenciamento de fotos.'
        }
    ],
    
    successTitle: 'Pronto para Experimentar?',
    successContent: 'Carregue suas fotos agora e veja como nosso Marcador AI de Múltiplas Faces pode ajudá-lo a identificar e rotular pessoas em suas imagens!',
    
    relatedToolsTitle: 'Ferramentas Relacionadas Que Você Pode Gostar',
    relatedTools: [
        {
            name: 'Removedor de Fundo AI Imgly',
            description: 'Remova inteligentemente fundos de imagens usando o modelo grande de IA Imgly, com suporte para processamento em lote e múltiplos formatos de saída.',
            url: 'https://www.ufreetools.com/tool/imgly-remove-image-background'
        },
        {
            name: 'Analisador AI de Fotos de Perfil',
            description: 'Obtenha feedback impulsionado por IA sobre suas fotos pessoais e profissionais para melhorar sua imagem profissional.',
            url: 'https://www.ufreetools.com/tool/ai-profile-photo-analyzer'
        },
        {
            name: 'Estimador AI de Idade e Gênero',
            description: 'Use tecnologia de IA para analisar faces em fotos e estimar idade e gênero.',
            url: 'https://www.ufreetools.com/tool/ai-age-gender-estimator'
        }
    ],
    
    techDetailsTitle: 'Detalhes Técnicos',
    techDetailsContent: 'O Marcador AI de Múltiplas Faces usa face-api.js, que implementa os modelos TinyFaceDetector e FaceLandmark68 para analisar características faciais. Essas redes neurais leves são projetadas para funcionar eficientemente em navegadores web, proporcionando precisão razoável.',
    privacyNote: 'Priorizamos sua privacidade processando todas as imagens localmente em seu navegador. Suas fotos nunca são enviadas a nenhum servidor para análise, garantindo que seus dados pessoais e imagens permaneçam completamente privados. A ferramenta funciona inteiramente do lado do cliente, tornando-a segura e responsiva mesmo sem conexão com a internet depois que a página foi carregada.'
};