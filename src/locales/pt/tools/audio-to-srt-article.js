export default {
    title: 'Ferramenta de Conversão de Áudio para Legendas SRT: Guia de Uso do Conversor Online',
    functionTitle: 'O que é a Ferramenta de Conversão de Áudio para Legendas SRT e para que serve?',
    intro: 'Nossa <strong>ferramenta de conversão de áudio para legendas SRT</strong> é uma aplicação online profissional que pode converter diversos formatos de áudio como WAV, MP3, FLAC, OGG, AAC, M4A para o formato de legendas SRT. O SRT (SubRip Text) é um dos formatos de legendas mais amplamente utilizados, suportado por quase todos os reprodutores de vídeo e softwares de edição. Usando nosso <strong>conversor online de áudio para legendas</strong>, você pode analisar a energia do áudio para detectar automaticamente segmentos de fala e gerar códigos de tempo precisos. A ferramenta suporta ajuste de sensibilidade, configuração de duração de legendas e processamento em lote, com todo o processamento realizado localmente no navegador, sem necessidade de instalar nenhum software.',
    
    useCasesTitle: 'Cenários Comuns de Uso da Conversão de Áudio para Legendas SRT',
    useCases: [
        'Criar arquivos de legendas SRT para vídeos e enviar para YouTube, TikTok e outras plataformas',
        'Segmentar automaticamente gravações de podcasts para facilitar a adição posterior de texto',
        'Gerar linha do tempo de legendas para vídeos de cursos online',
        'Converter gravações de reuniões em arquivos de legendas com códigos de tempo',
        'Preparar legendas para vídeos curtos (Reels, Shorts, TikTok)',
        'Segmentar gravações de audiolivros e combinar com texto para criar legendas',
        'Gerar códigos de tempo de legendas para vídeos de letras de músicas',
        'Criar estrutura de legendas para material bruto de entrevistas ou documentários'
    ],
    
    tipTitle: 'Dica Profissional:',
    tipContent: 'Esta ferramenta identifica segmentos de fala por meio da detecção de energia do áudio, mas não reconhece automaticamente o conteúdo da fala. Os arquivos SRT gerados contêm códigos de tempo e textos de preenchimento que podem ser importados em softwares de edição de legendas (como Aegisub, Subtitle Edit, etc.) para substituição por texto real. Para áudio com muito ruído de fundo, recomenda-se realizar processamento de redução de ruído antes para obter códigos de tempo mais precisos.',
    
    conclusion: 'A ferramenta de <strong>conversão de áudio para legendas SRT</strong> é especialmente útil para criadores de vídeos, produtores de podcasts, criadores de conteúdo e qualquer usuário que precise adicionar legendas a áudio/vídeo. Usando nosso conversor online de áudio para legendas, você pode rapidamente gerar linhas do tempo precisas de legendas a partir de áudio, economizando significativamente o tempo de criação manual de eixos de tempo. Nossa ferramenta suporta processamento em lote e oferece controle de parâmetros como sensibilidade, duração de legendas e intervalo de silêncio, com todo o processamento realizado localmente no navegador, garantindo a privacidade e segurança do seu áudio.',
    
    faqTitle: 'Perguntas Frequentes',
    faqs: [
        {
            question: 'Quais formatos de entrada a ferramenta de conversão de áudio para SRT suporta?',
            answer: 'Nosso <strong>conversor online de áudio para legendas</strong> suporta diversos formatos de áudio comuns, incluindo WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE e outros. Você pode enviar múltiplos arquivos de áudio em diferentes formatos simultaneamente para conversão em lote.'
        },
        {
            question: 'O que é o formato de legendas SRT?',
            answer: 'O SRT (SubRip Text) é um dos formatos de arquivo de legendas mais populares, criado pelo software SubRip. Usa formato de texto simples, contendo número de sequência, códigos de tempo e texto da legenda. Quase todos os reprodutores de vídeo (VLC, PotPlayer, etc.) e softwares de edição de vídeo (Premiere, Final Cut, etc.) suportam o formato SRT.'
        },
        {
            question: 'A ferramenta reconhece automaticamente o conteúdo da fala?',
            answer: 'Atualmente, esta ferramenta analisa a energia do áudio para detectar automaticamente segmentos de fala e silêncio, gerando códigos de tempo de legendas, mas não converte automaticamente a fala em texto. Os arquivos de legendas gerados contêm códigos de tempo e textos de preenchimento; você precisa digitar manualmente em softwares de edição de legendas ou usar ferramentas de reconhecimento de fala para adicionar o texto real.'
        },
        {
            question: 'Como obter códigos de tempo mais precisos?',
            answer: 'Para obter códigos de tempo mais precisos, recomendamos: 1) Usar arquivos de áudio de alta qualidade com pouco ruído; 2) Escolher configurações de sensibilidade adequadas às características do áudio; 3) Ajustar o intervalo mínimo de silêncio de acordo com a velocidade da fala; 4) Para áudio com muito ruído de fundo, realizar redução de ruído primeiro. Alta sensibilidade é adequada para áudio com volume baixo, baixa sensibilidade é adequada para áudio com ruído de fundo.'
        },
        {
            question: 'É possível converter múltiplos arquivos de áudio para SRT em lote?',
            answer: 'Com certeza! Nossa <strong>ferramenta de conversão de áudio para legendas SRT</strong> suporta processamento em lote. Você pode enviar múltiplos arquivos de áudio de uma vez e a ferramenta processará todos os arquivos sequencialmente. Após a conclusão, você pode baixar cada arquivo SRT individualmente ou usar a função de download em lote para compactar todos os resultados em um arquivo ZIP.'
        },
        {
            question: 'Em quais softwares posso usar os arquivos SRT convertidos?',
            answer: 'Os arquivos SRT convertidos podem ser usados em quase todos os softwares de edição de legendas e edição de vídeo, incluindo: Aegisub, Subtitle Edit, PotPlayer, VLC, Adobe Premiere, Final Cut Pro, DaVinci Resolve e outros. Também podem ser enviados diretamente para YouTube, TikTok, Vimeo e outras plataformas de vídeo como legendas.'
        },
        {
            question: 'O processo de conversão é seguro? O áudio é enviado para servidores?',
            answer: 'Totalmente seguro! Nossa ferramenta usa tecnologia puramente de front-end, com todo o processamento de áudio realizado localmente no seu navegador. Seus arquivos de áudio não são enviados para nenhum servidor, garantindo privacidade e segurança de dados.'
        }
    ],
    
    tutorialTitle: 'Como Usar a Ferramenta de Conversão de Áudio para Legendas SRT',
    steps: [
        {
            title: 'Envie Seus Arquivos de Áudio',
            description: 'Primeiro, envie os arquivos de áudio que deseja converter para legendas SRT. Você pode enviar de duas formas: <strong>arraste e solte os arquivos</strong> na área de envio ou <strong>clique para navegar</strong> e selecionar os arquivos. A ferramenta suporta múltiplos formatos como WAV, MP3, FLAC, OGG, AAC, M4A, e você pode enviar múltiplos arquivos de uma vez para processamento em lote.',
            note: 'Recomenda-se usar arquivos de áudio claros com pouco ruído de fundo para obter códigos de tempo mais precisos.'
        },
        {
            title: 'Pré-visualize os Arquivos de Áudio',
            description: 'Após o envio, você verá a lista de todos os arquivos de áudio enviados na área de pré-visualização à esquerda. Cada arquivo exibe informações de nome, formato e tamanho. Você pode clicar no botão de reprodução para pré-visualizar o áudio e confirmar que selecionou os arquivos corretos.',
            note: 'Durante o processamento em lote, recomenda-se pré-visualizar a lista de áudio primeiro para garantir que todos os arquivos necessários foram enviados corretamente.'
        },
        {
            title: 'Configure os Parâmetros de Conversão',
            description: 'Antes da conversão, você pode ajustar as configurações de saída. Selecione a <strong>sensibilidade de detecção</strong> adequada (alta/média/baixa), configure a <strong>duração máxima da legenda</strong> (duração máxima dos segmentos de legenda), configure o <strong>intervalo mínimo de silêncio</strong> (quanto silêncio é necessário para dividir as legendas), e selecione o <strong>formato de codificação</strong> do arquivo.',
            note: 'Sensibilidade média, 5 segundos de duração máxima e 0.5 segundos de intervalo de silêncio são adequados para a maioria dos áudios. Se o resultado não for ideal, experimente ajustar.'
        },
        {
            title: 'Converta para Legendas SRT',
            description: 'Após a configuração, clique no botão <strong>"Converter para SRT"</strong> para iniciar o processamento. A ferramenta analisará as mudanças de energia de cada arquivo de áudio, detectará segmentos de fala e gerará os códigos de tempo correspondentes. Durante o processamento em lote, informações de progresso serão exibidas.',
            note: 'Mantenha a página aberta durante a conversão e não feche a aba do navegador.'
        },
        {
            title: 'Pré-visualize os Resultados da Conversão',
            description: 'Após a conclusão da conversão, a área de saída à direita exibirá todos os arquivos de legendas SRT convertidos. Cada arquivo oferece uma <strong>função de pré-visualização de legendas</strong>, exibindo as primeiras linhas do conteúdo das legendas. Você pode verificar informações como número de legendas, duração e tamanho do arquivo.',
            note: 'As legendas geradas são textos de preenchimento que podem ser substituídos por texto real em softwares de edição de legendas.'
        },
        {
            title: 'Baixe os Resultados da Conversão',
            description: 'Satisfeito com os resultados, você pode clicar no botão <strong>"Baixar SRT"</strong> abaixo de cada arquivo para salvar individualmente, ou usar o botão <strong>"Download em Lote (ZIP)"</strong> no topo da área de saída para baixar todos os arquivos SRT compactados.',
            note: 'No download em lote, os arquivos SRT no arquivo ZIP manterão os nomes de arquivo originais com a extensão .srt adicionada automaticamente.'
        }
    ],
    
    successTitle: 'Parabéns!',
    successContent: 'Você aprendeu com sucesso como usar nossa ferramenta de conversão de áudio para legendas SRT. Agora você pode facilmente gerar códigos de tempo precisos de legendas para diversos tipos de áudio, para criação de legendas de vídeo, segmentação de podcasts e muitos outros usos.',
    
    relatedToolsTitle: 'Ferramentas Relacionadas que Podem lhe Interessar',
    relatedTools: [
        {
            name: 'Áudio para MP3',
            description: 'Converta áudio para o formato MP3, economizando espaço de armazenamento e facilitando o compartilhamento.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Áudio para WAV',
            description: 'Converta áudio para o formato WAV sem perdas, ideal para processamento profissional de áudio.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Áudio para MIDI',
            description: 'Converta áudio para o formato MIDI, ideal para produção musical e análise.',
            url: 'https://www.ufreetools.com/tool/audio-to-midi'
        },
        {
            name: 'Áudio para M4A',
            description: 'Converta áudio para o formato M4A, compatível com dispositivos Apple e com excelente qualidade de som.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        }
    ],
    
    referencesTitle: 'Recursos de Referência',
    references: [
        {
            name: 'Especificação do Formato de Legendas SRT',
            description: 'Entenda as especificações técnicas e cenários de aplicação do formato de legendas SRT',
            url: 'https://en.wikipedia.org/wiki/SubRip'
        },
        {
            name: 'Tecnologia de Detecção de Energia do Áudio',
            description: 'Entenda melhor os algoritmos de detecção de atividade de voz baseados em energia',
            url: 'https://en.wikipedia.org/wiki/Voice_activity_detection'
        },
        {
            name: 'Melhores Práticas para Criação de Legendas',
            description: 'Aprenda fluxos de trabalho profissionais e normas para criação de legendas',
            url: 'https://en.wikipedia.org/wiki/Subtitle'
        }
    ]
};
