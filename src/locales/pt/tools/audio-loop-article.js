export default {
    title: 'Ferramenta de Loop de Áudio: Guia do Criador de Loops de Áudio Online',
    functionTitle: 'O que é a Ferramenta de Loop de Áudio e seus Usos?',
    intro: 'Nossa <strong>Ferramenta de Loop de Áudio</strong> é um aplicativo profissional online para criar loops de áudio que pode processar WAV, MP3, FLAC, OGG, AAC, M4A e outros formatos de áudio. Você pode definir o número de loops, tempo de intervalo e escolher se deve adicionar efeito de fade out para transições mais suaves. Com nosso <strong>Criador de Loops de Áudio Online</strong>, você pode rapidamente criar música de fundo, áudio de meditação, toques, efeitos sonoros de jogos, etc. Processamento em lote e controle preciso de parâmetros são suportados sem instalar nenhum software.',
    
    useCasesTitle: 'Casos de Uso Comuns para Loop de Áudio',
    useCases: [
        'Criar música de fundo em loop para vídeos, jogos ou aplicativos',
        'Criar áudio em loop para meditação ou relaxamento',
        'Criar toques ou sons de notificação',
        'Criar música de fundo em loop para apresentações PPT',
        'Criar acompanhamento em loop para prática musical',
        'Criar efeitos sonoros em loop para ASMR ou ajuda para dormir',
        'Criar música de intro/outro para transmissões ao vivo ou podcasts',
        'Criar música de fundo em loop para aulas de fitness ou yoga'
    ],
    
    tipTitle: 'Dica Profissional:',
    tipContent: 'Para obter os melhores resultados, escolha clipes de áudio com boa qualidade de som e início e fim naturais. Definir um tempo de intervalo apropriado (500-1000ms) torna as transições de loop mais suaves. Para loops sem interrupções, defina o intervalo como 0.',
    
    conclusion: '<strong>O Criador de Loops de Áudio</strong> é especialmente útil para criadores de vídeo, desenvolvedores de jogos, criadores de música e entusiastas de meditação. Com nossa ferramenta de loop de áudio online, você pode transformar qualquer clipe de áudio em formato de loop para vários projetos criativos. Nossa ferramenta suporta processamento em lote com parâmetros como número de loops, tempo de intervalo e efeito de fade out. Todo o processamento é feito localmente no seu navegador, garantindo a privacidade e segurança do seu áudio.',
    
    faqTitle: 'Perguntas Frequentes',
    faqs: [
        {
            question: 'Quais formatos de entrada a ferramenta de loop de áudio suporta?',
            answer: 'Nossa <strong>Ferramenta de Loop de Áudio Online</strong> suporta múltiplos formatos de áudio comuns incluindo WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE, etc. Você pode carregar múltiplos arquivos de áudio em diferentes formatos para processamento em lote. A ferramenta detecta automaticamente o formato de entrada e o processa.'
        },
        {
            question: 'Qual é o número máximo de loops?',
            answer: 'Nossa ferramenta suporta definir de 2 a 100 loops. Você pode ajustar livremente de acordo com suas necessidades, seja um loop duplo simples ou horas de áudio em loop. O sistema calcula automaticamente a duração final de saída para sua referência.'
        },
        {
            question: 'O que faz o tempo de intervalo do loop?',
            answer: 'O tempo de intervalo do loop é o tempo de silêncio entre cada loop de áudio. Definir um intervalo apropriado (500-1000ms) torna as transições de loop mais naturais, evitando reinícios repentinos. Se você precisa de um efeito de loop sem interrupções, defina o intervalo como 0.'
        },
        {
            question: 'O que é o efeito de fade out?',
            answer: 'O efeito de fade out reduz gradualmente o volume no final do áudio. Quando ativado, a ferramenta adiciona um fade out no final do último loop, tornando o final do áudio mais suave em vez de parar abruptamente. Isto é especialmente útil para áudio de meditação, música de fundo, etc.'
        },
        {
            question: 'Posso processar múltiplos arquivos de áudio em lote?',
            answer: 'Absolutamente! Nossa <strong>Ferramenta de Loop de Áudio</strong> suporta processamento em lote. Você pode carregar múltiplos arquivos de áudio de uma vez (arrastar e soltar ou seleção de arquivos suportada), e a ferramenta processa todos os arquivos sequencialmente. Após o processamento, você pode baixar cada áudio em loop individualmente ou usar a função de download em lote para obter todos os resultados em um arquivo ZIP.'
        },
        {
            question: 'O processamento é seguro? O áudio é carregado para servidores?',
            answer: 'Completamente seguro! Nossa ferramenta usa tecnologia puramente frontend, todo o processamento de áudio é feito localmente no seu navegador. Seus arquivos de áudio não são carregados para nenhum servidor, garantindo privacidade e segurança de dados. Você pode processar com confiança arquivos de áudio com conteúdo sensível.'
        },
        {
            question: 'Qual é o formato de saída?',
            answer: 'A versão atual produz em formato WAV, que é um formato de áudio sem perdas que preserva a qualidade original. O nome do arquivo de áudio em loop de saída adiciona automaticamente o sufixo "_loop" para facilitar a identificação e organização.'
        }
    ],
    
    tutorialTitle: 'Como Usar a Ferramenta de Loop de Áudio',
    steps: [
        {
            title: 'Carregue Seus Arquivos de Áudio',
            description: 'Primeiro carregue os arquivos de áudio que você quer colocar em loop. Você pode carregar de duas formas: <strong>arrastar e soltar arquivos</strong> na área de upload ou <strong>clicar para navegar</strong> e selecionar arquivos. A ferramenta suporta WAV, MP3, FLAC, OGG, AAC, M4A e outros formatos. Você pode carregar múltiplos arquivos de uma vez para processamento em lote.',
            note: 'Recomendamos escolher clipes de áudio com início e fim naturais para melhor efeito de loop.'
        },
        {
            title: 'Visualizar Arquivos de Áudio',
            description: 'Após o carregamento, você verá todos os arquivos de áudio carregados na área de visualização esquerda. Cada arquivo mostra nome do arquivo, tamanho e duração. Você pode clicar no botão de reprodução para visualizar o áudio e confirmar que selecionou os arquivos corretos. Para excluir um arquivo, clique no ícone de exclusão.',
            note: 'Para processamento em lote, recomendamos visualizar primeiro a lista de áudio para garantir que todos os arquivos necessários foram carregados corretamente.'
        },
        {
            title: 'Configure os Parâmetros de Loop',
            description: 'Antes do processamento, você pode ajustar as configurações de loop. Defina o <strong>número de loops</strong> (2-100 vezes), ajuste o <strong>tempo de intervalo do loop</strong> (0-5000 milissegundos), escolha se ativa o <strong>efeito de fade out</strong>. Estes parâmetros ajudam você a obter o efeito de loop ideal.',
            note: 'Definir o intervalo como 0 alcança um loop sem interrupções, 500-1000ms torna as transições mais naturais.'
        },
        {
            title: 'Gerar Áudio em Loop',
            description: 'Após configurar, clique no botão <strong>"Criar Loop de Áudio"</strong> para começar o processamento. A ferramenta processa todos os arquivos de áudio carregados sequencialmente, mostrando o progresso para processamento em lote. O tempo de processamento depende do tamanho do arquivo e quantidade, a maioria do áudio pode ser completada em segundos.',
            note: 'Por favor mantenha a página aberta durante o processamento, não feche a aba do navegador.'
        },
        {
            title: 'Visualizar Resultados do Processamento',
            description: 'Após o processamento, a área de saída direita mostra todos os arquivos de áudio em loop. Cada arquivo fornece função de <strong>visualização de reprodução</strong>, mostrando duração original, duração de saída e número de loops. Você pode clicar no botão de reprodução para visualizar e confirmar que atende às suas necessidades.',
            note: 'Se não estiver satisfeito com o resultado, você pode ajustar os parâmetros e reprocessar.'
        },
        {
            title: 'Baixar Resultados do Processamento',
            description: 'Quando estiver satisfeito com os resultados, você pode clicar no botão <strong>"Baixar Áudio"</strong> sob cada arquivo para salvar individualmente, ou usar o botão <strong>"Download em Lote (ZIP)"</strong> no topo da área de saída para baixar todos os arquivos de áudio em loop em um arquivo ZIP de uma vez. Todo o processamento é feito localmente no navegador, garantindo a privacidade e segurança do seu áudio.',
            note: 'Para download em lote, o áudio no arquivo ZIP mantém o nome do arquivo original com o sufixo _loop adicionado automaticamente.'
        }
    ],
    
    successTitle: 'Parabéns!',
    successContent: 'Você aprendeu com sucesso como usar nossa ferramenta de loop de áudio. Agora você pode facilmente criar áudio em loop para música de fundo, áudio de meditação, toques e vários outros propósitos.',
    
    relatedToolsTitle: 'Ferramentas Relacionadas que Podem Interessar Você',
    relatedTools: [
        {
            name: 'Velocidade de Áudio',
            description: 'Ajuste a velocidade de reprodução de áudio de 0.25x a 4x.',
            url: 'https://www.ufreetools.com/tool/audio-speed'
        },
        {
            name: 'Juntar Áudio',
            description: 'Junte múltiplos arquivos de áudio em um.',
            url: 'https://www.ufreetools.com/tool/audio-joiner'
        },
        {
            name: 'Reverter Áudio',
            description: 'Reproduza áudio ao contrário para efeitos sonoros únicos.',
            url: 'https://www.ufreetools.com/tool/audio-reverse'
        },
        {
            name: 'Editor de Volume',
            description: 'Ajuste o volume do áudio com suporte a processamento em lote.',
            url: 'https://www.ufreetools.com/tool/audio-volume-editor'
        }
    ],
    
    referencesTitle: 'Recursos de Referência',
    references: [
        {
            name: 'Tecnologia de Loop de Áudio',
            description: 'Saiba mais sobre princípios técnicos e melhores práticas de processamento de loops de áudio',
            url: 'https://en.wikipedia.org/wiki/Loop_(music)'
        },
        {
            name: 'Padrão de Formato WAV',
            description: 'Aprofunde-se nas especificações técnicas do formato de áudio WAV',
            url: 'https://en.wikipedia.org/wiki/WAV'
        },
        {
            name: 'Processamento de Áudio Digital',
            description: 'Explore técnicas de processamento e edição de áudio digital',
            url: 'https://en.wikipedia.org/wiki/Digital_audio'
        }
    ]
};
