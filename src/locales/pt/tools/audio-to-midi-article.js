export default {
    title: 'Conversor de Áudio para MIDI - ferramenta gratuita online',
    functionTitle: 'Funcionalidades do conversor',
    intro: 'Nosso conversor gratuito online de áudio para MIDI permite transformar facilmente gravações de áudio em arquivos MIDI. É uma ferramenta poderosa para músicos, compositores e produtores que funciona inteiramente no navegador sem necessidade de instalação de software.',
    useCasesTitle: 'Casos de uso',
    useCases: [
        'Transcrever melodias de gravações de áudio para edição em editores MIDI',
        'Criar arquivos MIDI a partir de partes vocais para uso com instrumentos virtuais',
        'Extrair notas de amostras de áudio para arranjo musical',
        'Converter partes de áudio em MIDI para alteração de tempo e tonalidade',
        'Transformar ideias musicais gravadas em formato MIDI editável'
    ],
    tipTitle: 'Dicas para melhor resultado',
    tipContent: 'Para reconhecimento ideal, use áudio com uma linha melódica clara e ruído de fundo mínimo. Gravações monofônicas (um instrumento ou voz) são reconhecidas muito melhor do que polifônicas. Se possível, use formatos de áudio não comprimidos como WAV.',
    
    conclusion: '<strong>A conversão de áudio para MIDI</strong> é particularmente útil para produtores musicais, compositores, professores de música e amantes da música. Usando nosso conversor de áudio para MIDI online, você pode extrair melodias de qualquer áudio em dados de notas MIDI editáveis, para uso em composição musical, arranjo, aprendizado e análise. Nossa ferramenta suporta processamento em lote, oferece controle de sensibilidade, faixa de notas, quantização de tempo e outros parâmetros, todo o processamento é feito localmente no navegador, garantindo a privacidade e segurança do seu áudio.',
    
    faqTitle: 'Perguntas frequentes',
    faqs: [
        {
            question: 'Como funciona a conversão de áudio para MIDI?',
            answer: 'O conversor analisa o espectro de frequência do sinal de áudio e determina as notas, sua duração e intensidade. Essas informações são então codificadas no formato MIDI padrão.'
        },
        {
            question: 'Quais tipos de áudio são mais adequados para conversão?',
            answer: 'Os melhores resultados são obtidos com gravações monofônicas onde um único instrumento ou voz está presente. Gravações limpas sem reverberação, eco ou ruído de fundo são reconhecidas com mais precisão.'
        },
        {
            question: 'Pode-se converter composições musicais complexas?',
            answer: 'Sim, mas os resultados podem variar. O reconhecimento polifônico (vários instrumentos simultaneamente) é uma tarefa difícil e pode exigir correção manual do resultado.'
        },
        {
            question: 'Quais parâmetros podem ser ajustados?',
            answer: 'Você pode ajustar a faixa de notas reconhecidas, sensibilidade de detecção, duração mínima das notas e outros parâmetros para otimizar o resultado de acordo com seu material de áudio.'
        },
        {
            question: 'O reconhecimento de percussão é suportado?',
            answer: 'O reconhecimento de instrumentos percussivos tem suas particularidades. O programa pode determinar os momentos das batidas, mas o reconhecimento preciso dos tipos de instrumentos percussivos é limitado.'
        },
        {
            question: 'Há limitações no tamanho do arquivo?',
            answer: 'O tamanho máximo do arquivo depende das capacidades do seu navegador. Arquivos de até 50-100 MB são geralmente suportados. Para arquivos grandes, recomenda-se cortar ou comprimir o áudio previamente.'
        }
    ],
    tutorialTitle: 'Guia passo a passo',
    steps: [
        'Selecione o arquivo de áudio clicando em "Escolher arquivo" ou arrastando o arquivo para a área de upload',
        'Se necessário, ajuste os parâmetros de reconhecimento: faixa de notas, sensibilidade, duração mínima das notas',
        'Clique no botão "Iniciar conversão" para iniciar o processo',
        'Aguarde a conclusão do processamento - o tempo depende da duração e complexidade do áudio',
        'Ouça o resultado e, se necessário, baixe o arquivo MIDI em seu dispositivo'
    ],
    successTitle: 'Conversão concluída com sucesso',
    successContent: 'Seu arquivo MIDI está pronto para download. Você pode abri-lo em qualquer editor MIDI ou DAW para continuar trabalhando.',
    relatedToolsTitle: 'Ferramentas relacionadas',
    relatedTools: [
        {
            name: 'Áudio para MP3',
            description: 'Converter áudio para formato MP3, economizar espaço de armazenamento para fácil compartilhamento.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Áudio para WAV',
            description: 'Converter áudio para formato WAV sem perdas, adequado para processamento de áudio profissional.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Áudio para M4A',
            description: 'Converter áudio para formato M4A, compatível com dispositivos Apple, excelente qualidade de som.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: 'Áudio para PCM',
            description: 'Converter áudio para formato PCM bruto, adequado para processamento e análise de áudio profissionais.',
            url: 'https://www.ufreetools.com/tool/audio-to-pcm'
        }
    ],
    
    referencesTitle: 'Recursos de referência',
    references: [
        {
            name: 'Padrão de formato MIDI',
            description: 'Saiba mais sobre especificações técnicas e casos de uso do formato MIDI',
            url: 'https://en.wikipedia.org/wiki/MIDI'
        },
        {
            name: 'Tecnologia de Áudio para MIDI',
            description: 'Aprofunde-se na detecção de altura e algoritmos de conversão MIDI',
            url: 'https://en.wikipedia.org/wiki/Audio_to_score'
        },
        {
            name: 'Recuperação de Informação Musical',
            description: 'Explore a recuperação de informação musical e tecnologia de transcrição musical automática',
            url: 'https://en.wikipedia.org/wiki/Music_information_retrieval'
        }
    ]
};
