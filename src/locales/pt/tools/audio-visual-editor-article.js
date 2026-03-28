export default {
    title: 'Editor Visual de Áudio: Guia do Editor de Forma de Onda de Áudio Online',
    functionTitle: 'O que é o Editor Visual de Áudio e seus Usos?',
    intro: 'Nosso <strong>Editor Visual de Áudio</strong> é um aplicativo profissional de edição de forma de onda de áudio online que suporta edição visual de WAV, MP3, FLAC, OGG, AAC, M4A e outros formatos de áudio. Com uma interface intuitiva de exibição de forma de onda, você pode selecionar com precisão segmentos de áudio e realizar operações de edição profissionais como cortar, excluir, fade in/out, ajuste de volume, mudo, normalizar e inverter.',
    
    useCasesTitle: 'Casos de Uso Comuns para Edição Visual de Áudio',
    useCases: [
        'Editar e cortar arquivos de áudio, remover partes indesejadas',
        'Produzir podcasts e programas de rádio com pós-produção de áudio',
        'Criar música de fundo para vídeos, ajustar duração e efeitos de áudio',
        'Fazer toques e sons de notificação, cortar clipes de áudio',
        'Processar gravações de voz, remover silêncio e ruído',
        'Criar mixes musicais, combinar múltiplos clipes de áudio',
        'Ajustar volume de áudio, realizar normalização',
        'Adicionar efeitos de fade in/out para transições mais suaves'
    ],
    
    tipTitle: 'Dica Profissional:',
    tipContent: 'Recomendamos fazer backup dos arquivos de áudio originais antes de editar. Use a função de seleção para escolher com precisão os segmentos de áudio que deseja editar. Efeitos de fade in/out tornam as transições de áudio mais naturais. A função de normalizar otimiza o nível de volume geral do áudio.',
    
    conclusion: '<strong>Editor Visual de Áudio</strong> é especialmente útil para produtores de podcasts, entusiastas de música, criadores de vídeos e iniciantes em edição de áudio. Com nosso editor de áudio online, você pode realizar edição precisa de áudio em uma interface de forma de onda intuitiva, suportando várias operações profissionais como cortar, excluir, fade in/out, mudo, normalizar e inverter.',
    
    faqTitle: 'Perguntas Frequentes',
    faqs: [
        {
            question: 'Quais formatos de entrada o Editor Visual de Áudio suporta?',
            answer: 'Nosso <strong>Editor de Áudio Online</strong> suporta muitos formatos de áudio comuns incluindo WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE e mais. Você pode carregar qualquer formato suportado para edição e exportar como WAV ou MP3 após editar.'
        },
        {
            question: 'Como seleciono um segmento de áudio para editar?',
            answer: 'Na área de exibição de forma de onda, segure o botão esquerdo do mouse e arraste para selecionar um segmento de áudio. A área selecionada será destacada em azul, mostrando tempo de início, tempo de fim e duração da seleção. Após selecionar, você pode usar ferramentas de edição como cortar, excluir, fade in/out, etc.'
        },
        {
            question: 'O que fazem os efeitos de fade in/out?',
            answer: 'O efeito de fade in aumenta gradualmente o áudio do silêncio para o volume normal, enquanto o efeito de fade out diminui gradualmente o áudio do volume normal para o silêncio. Esses efeitos tornam o início e o fim do áudio mais naturais, evitando mudanças repentinas de volume, especialmente adequados para música de fundo e transições de áudio.'
        },
        {
            question: 'O que é a função de normalizar?',
            answer: 'Normalização é o processo de ajustar o volume do áudio para um nível ideal. Ela analisa o volume máximo no áudio, depois ajusta proporcionalmente o volume geral para que o volume máximo atinja próximo mas não exceda o máximo permitido (geralmente -0.5dB). Isso torna o volume geral do áudio mais cheio enquanto evita distorção de clipping.'
        },
        {
            question: 'O processo de edição é seguro? O áudio será carregado para servidores?',
            answer: 'Completamente seguro! Nossa ferramenta usa tecnologia de frontend pura, todo o processamento de áudio é feito localmente no seu navegador. Seus arquivos de áudio não são carregados para nenhum servidor, garantindo privacidade e segurança de dados. Você pode editar com confiança arquivos de áudio contendo conteúdo sensível.'
        },
        {
            question: 'Quais formatos posso exportar?',
            answer: 'Após editar, você pode exportar como WAV (formato sem perdas) ou MP3 (formato comprimido). Se você selecionou apenas parte do áudio, pode escolher exportar o áudio completo ou apenas a seleção. A taxa de amostragem original e número de canais são preservados durante a exportação.'
        }
    ],
    
    tutorialTitle: 'Como Usar o Editor Visual de Áudio',
    steps: [
        {
            title: 'Carregar Seu Arquivo de Áudio',
            description: 'Primeiro carregue o arquivo de áudio que deseja editar. Você pode carregar de duas maneiras: <strong>arrastar o arquivo</strong> para a área de upload ou <strong>clicar em navegar</strong> para selecionar um arquivo. A ferramenta suporta WAV, MP3, FLAC, OGG, AAC, M4A e muitos outros formatos.',
            note: 'Recomendamos usar formatos sem perdas (como WAV, FLAC) para editar para manter a melhor qualidade de áudio.'
        },
        {
            title: 'Ver Forma de Onda de Áudio',
            description: 'Após carregar, a forma de onda do áudio será exibida automaticamente na área de edição. A forma de onda mostra as mudanças de amplitude do áudio, permitindo ver visualmente a estrutura do áudio. Informações do arquivo são exibidas acima, incluindo duração, taxa de amostragem e número de canais.',
            note: 'Picos na forma de onda representam partes mais altas, enquanto áreas planas representam partes mais suaves ou silenciosas.'
        },
        {
            title: 'Selecionar Região de Edição',
            description: '<strong>Segure o botão esquerdo do mouse e arraste</strong> na forma de onda para selecionar um segmento de áudio. A área selecionada será destacada em azul, mostrando o intervalo de tempo da seleção. Você pode reproduzir a seleção para confirmar se está correta.',
            note: 'Se nenhuma região for selecionada, algumas ferramentas de edição (como normalizar) serão aplicadas a todo o áudio.'
        },
        {
            title: 'Usar Ferramentas de Edição',
            description: 'Após selecionar uma região, use as ferramentas de edição abaixo: <strong>Cortar</strong> mantém a seleção e remove outras partes, <strong>Excluir</strong> remove a seleção, <strong>Fade In/Out</strong> adiciona efeitos de gradiente, <strong>Mudo</strong> silencia a seleção, <strong>Normalizar</strong> otimiza o volume, <strong>Inverter</strong> reproduz o áudio ao contrário.',
            note: 'Operações de edição entram em vigor imediatamente, recomendamos verificar cuidadosamente os resultados antes de exportar.'
        },
        {
            title: 'Reproduzir e Pré-visualizar',
            description: 'Use os controles de reprodução para <strong>reproduzir/pausar</strong>, <strong>avançar/retroceder</strong>, e <strong>parar</strong> o áudio. Uma linha indicadora vermelha mostra a posição de reprodução atual. Você também pode ajustar o controle deslizante de volume para controlar o volume de reprodução.',
            note: 'O ajuste de volume de reprodução não afeta o áudio exportado, que mantém o nível de volume original.'
        },
        {
            title: 'Exportar Resultados de Edição',
            description: 'Quando estiver satisfeito com os resultados de edição, selecione o formato de exportação (WAV ou MP3), depois clique no botão <strong>"Exportar Áudio Completo"</strong> ou <strong>"Exportar Seleção"</strong>. O arquivo será baixado automaticamente para seu dispositivo. Todo o processamento é feito localmente no navegador, garantindo privacidade e segurança do áudio.',
            note: 'O formato WAV mantém qualidade sem perdas mas tamanho de arquivo maior; o formato MP3 tem tamanho de arquivo menor, adequado para compartilhar.'
        }
    ],
    
    successTitle: 'Parabéns!',
    successContent: 'Você aprendeu com sucesso como usar nosso Editor Visual de Áudio. Agora você pode facilmente editar arquivos de áudio em vários formatos, realizar operações profissionais como cortar, fade in/out, ajuste de volume e mais, satisfazendo várias necessidades como produção de podcasts, edição de música e processamento de áudio.',
    
    relatedToolsTitle: 'Ferramentas Relacionadas',
    relatedTools: [
        {
            name: 'Áudio para MP3',
            description: 'Converter áudio para formato MP3, economizar espaço de armazenamento e fácil de compartilhar.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Áudio para WAV',
            description: 'Converter áudio para formato WAV sem perdas, adequado para processamento de áudio profissional.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Áudio para M4A',
            description: 'Converter áudio para formato M4A, alta qualidade com tamanho pequeno.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: 'Áudio para Texto',
            description: 'Converter fala em áudio para texto, suporta múltiplos idiomas.',
            url: 'https://www.ufreetools.com/tool/audio-to-text'
        }
    ],
    
    referencesTitle: 'Referências',
    references: [
        {
            name: 'Princípios de Edição de Forma de Onda de Áudio',
            description: 'Aprender sobre os princípios técnicos de exibição e edição de forma de onda de áudio',
            url: 'https://en.wikipedia.org/wiki/Waveform'
        },
        {
            name: 'Processamento de Áudio Digital',
            description: 'Aprofundar em técnicas de processamento e edição de áudio digital',
            url: 'https://en.wikipedia.org/wiki/Digital_audio_editing'
        },
        {
            name: 'Guia de Formatos de Áudio',
            description: 'Conhecer as características e casos de uso de diferentes formatos de áudio',
            url: 'https://en.wikipedia.org/wiki/Audio_file_format'
        }
    ]
};
