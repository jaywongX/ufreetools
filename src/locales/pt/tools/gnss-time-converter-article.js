export default {
    title: 'Guia do Conversor de Tempo GNSS - Ferramenta online para conversão entre semanas/segundos GPS e tempo UTC',
    functionTitle: 'O que é o Conversor de Tempo GNSS e qual é o seu propósito?',
    intro: 'Nosso <strong>Conversor de Tempo GNSS</strong> é uma ferramenta profissional online que permite a conversão mútua entre tempo UTC, semanas/segundos GPS e tempo BeiDou. Esta ferramenta suporta cálculo de data juliana, processamento em lote e funções de visualização de linha do tempo, adequada para posicionamento por navegação por satélite, engenharia topográfica, pesquisa científica e outros campos. Usando nossa <strong>ferramenta de conversão de semanas/segundos GPS</strong>, você pode completar rápida e precisamente várias necessidades de conversão de sistemas de tempo GNSS.',

    useCasesTitle: 'Cenários de aplicação comuns para o Conversor de Tempo GNSS',
    useCases: [
        'Sincronização de tempo no processamento de dados de posicionamento por navegação por satélite',
        'Análise e pós-processamento de dados de receptores GNSS',
        'Conversão precisa de tempo em engenharia topográfica',
        'Unificação de referências de tempo em campos aeroespaciais',
        'Fusão de dados de tempo de múltiplos sistemas em projetos de pesquisa científica',
        'Análise comparativa de dados entre sistemas de navegação BeiDou e GPS'
    ],

    tipTitle: 'Dica Profissional:',
    tipContent: 'Ao realizar conversões de tempo de alta precisão, preste atenção às diferenças de segundos bissextos entre diferentes sistemas GNSS. O tempo GPS tem uma diferença fixa de segundos bissextos com o tempo UTC, e o tempo BeiDou também tem diferentes diferenças de segundos bissextos com o tempo UTC. Essas diferenças mudam com o tempo.',

    conclusion: 'O <strong>Conversor de Tempo GNSS</strong> é extremamente útil para engenheiros de navegação por satélite, profissionais de topografia, pesquisadores científicos e qualquer pessoa que precise processar dados de tempo GNSS. Ao usar nossa ferramenta, você pode economizar muito tempo de cálculo manual, evitar erros de conversão e melhorar a eficiência do trabalho. Nossa ferramenta torna o processo de conversão de tempo GNSS simples e eficiente, sem a necessidade de instalar qualquer software profissional.',

    faqTitle: 'Perguntas Frequentes',
    faqs: [
        {
            question: 'O que são a semana GPS e o tempo da semana?',
            answer: 'A semana GPS é a contagem contínua de semanas a partir de 6 de janeiro de 1980 às 00:00:00, e o tempo da semana (TOW) é o número de segundos dentro de uma semana a partir do domingo às 00:00. O sistema de tempo GPS usa segundos de tempo atômico como referência temporal, não adiciona segundos bissextos após seu início e mantém a continuidade do tempo. Este método de representação é amplamente utilizado em navegação por satélite porque pode evitar a complexidade causada pelos ajustes de segundos bissextos.'
        },
        {
            question: 'Qual é a diferença entre o tempo UTC e o tempo GPS?',
            answer: 'UTC (Tempo Universal Coordenado) é o padrão internacional de tempo, que periodicamente adiciona segundos bissextos para se adaptar às mudanças na velocidade de rotação da Terra. O tempo GPS é baseado no tempo atômico, alinhado com o tempo UTC desde 6 de janeiro de 1980, mas não é ajustado por segundos bissextos. Portanto, existe uma diferença de segundos inteiros entre o tempo GPS e o tempo UTC, e essa diferença aumenta à medida que segundos bissextos são adicionados. Até agora, o tempo GPS está aproximadamente 18 segundos à frente do tempo UTC.'
        },
        {
            question: 'Como converter em lote múltiplos dados de tempo?',
            answer: 'Usando nossa <strong>função de conversão de tempo em lote</strong>, você pode inserir múltiplos dados de tempo linha por linha na caixa de entrada em lote. De acordo com o modo de entrada selecionado (data e hora, tempo GPS ou tempo BeiDou), insira os dados no formato correspondente, um registro por linha. Por exemplo, o formato de tempo GPS é "semana,segundos", como "2234,172800". Após completar a entrada, clique no botão "Converter tempo", e o sistema converterá automaticamente todos os dados.'
        },
        {
            question: 'O que é a data juliana? Por que precisamos calculá-la?',
            answer: 'A data juliana é um método contínuo de contagem de dias, contando dias desde 1º de janeiro de 4713 a.C. às 12:00, amplamente utilizado em astronomia e campos aeroespaciais. A data juliana fornece um método unificado de representação do tempo, facilitando a conversão de tempo entre sistemas e cálculos de longos períodos de tempo. Em aplicações GNSS, a data juliana é comumente usada para cálculos de órbita e cenários de sincronização de tempo.'
        },
        {
            question: 'Qual é o propósito da função de visualização de linha do tempo?',
            answer: 'A função de visualização de linha do tempo pode mostrar intuitivamente as relações de posição relativa de todos os pontos de tempo convertidos em uma interface gráfica. Ao visualizar a linha do tempo, você pode rapidamente entender os intervalos e a distribuição entre diferentes pontos de tempo, ajudando a descobrir anomalias ou padrões nos dados. Esta função é particularmente adequada para analisar dados GNSS de séries temporais longas.'
        }
    ],

    tutorialTitle: 'Como Usar o Conversor de Tempo GNSS',
    steps: [
        {
            title: 'Selecionar Modo de Entrada',
            description: 'Selecione o modo de entrada apropriado na parte superior da área de entrada esquerda: data e hora, tempo GPS ou tempo BeiDou. Escolha o modo correspondente de acordo com seu tipo de dados para analisar corretamente os dados de entrada.',
            note: 'O modo de data e hora suporta o formato ISO padrão, como 2023-01-01T00:00:00.'
        },
        {
            title: 'Inserir Dados de Tempo',
            description: 'Insira os dados de tempo na caixa de entrada correspondente. Você pode inserir um único ponto de tempo ou múltiplos pontos de tempo na caixa de entrada em lote, um registro por linha. O sistema suporta vários formatos de entrada para se adaptar a diferentes necessidades.',
            note: 'Ao inserir em lote, certifique-se de que cada linha de dados tenha um formato consistente para evitar erros de conversão.'
        },
        {
            title: 'Definir Formato de Saída',
            description: 'Selecione o formato de tempo de saída na área de configuração de parâmetros. Você pode escolher o formato ISO padrão (YYYY-MM-DD HH:mm:ss) ou um formato personalizado. Escolha o formato apropriado de acordo com os requisitos de uso posteriores.',
            note: 'O formato ISO é conveniente para processamento de programas, enquanto o formato personalizado é conveniente para leitura humana.'
        },
        {
            title: 'Executar Conversão',
            description: 'Clique no botão <strong>"Converter tempo"</strong> para iniciar a conversão. O sistema calculará e exibirá automaticamente o tempo UTC, tempo GPS, tempo BeiDou, data juliana e outras informações com base no seu modo de entrada selecionado e dados inseridos.',
            note: 'O processo de conversão geralmente é concluído em segundos, mesmo para grandes quantidades de dados.'
        },
        {
            title: 'Visualizar e Exportar Resultados',
            description: 'Após a conclusão da conversão, os resultados serão exibidos na área de saída direita. Você pode visualizar informações detalhadas de conversão para cada ponto de tempo, usar a função de visualização de linha do tempo para ver a distribuição temporal, ou clicar no botão "Exportar CSV" para salvar os resultados como um arquivo.',
            note: 'Clique no botão "Copiar" para cada item de resultado para copiar rapidamente o resultado de conversão desse registro.'
        }
    ],

    successTitle: 'Parabéns!',
    successContent: 'Você aprendeu com sucesso como usar nosso Conversor de Tempo GNSS. Agora você pode facilmente completar conversões mútuas entre tempo UTC, tempo GPS e tempo BeiDou para navegação por satélite, engenharia topográfica, pesquisa científica e vários outros cenários de aplicação.',

    relatedToolsTitle: 'Ferramentas Relacionadas Que Podem Interessar Você',
    relatedTools: [
        {
            name: 'Conversor de Coordenadas',
            description: 'Converte coordenadas de latitude e longitude entre diferentes sistemas de coordenadas, compatível com vários sistemas de projeção.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Reprodução de Trilhas GPS',
            description: 'Carrega e visualiza dados de trilhas GPS, compatível com vários formatos de arquivo.',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: 'Calculadora de Projeção Gaussiana',
            description: 'Realiza cálculos diretos e inversos de projeção Gauss-Krüger, compatível com zonas de 3 e 6 graus.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'Calculadora de Divisão de Folhas',
            description: 'Calcula números de folhas de mapa baseados em coordenadas de latitude e longitude, compatível com várias escalas.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        }
    ],

    referencesTitle: 'Recursos de Referência',
    references: [
        {
            name: 'Fundamentos de Tempo em Sistemas Globais de Navegação por Satélite',
            description: 'Introdução detalhada aos sistemas de tempo GNSS',
            url: 'https://www.ngs.noaa.gov/CORS/GNSS-Time.shtml'
        },
        {
            name: 'Sistema de Tempo GPS Explicado',
            description: 'Introdução detalhada ao sistema de tempo GPS',
            url: 'https://en.wikipedia.org/wiki/GPS_time'
        },
        {
            name: 'Sistema de Tempo BeiDou',
            description: 'Explicação da referência de tempo do sistema de navegação BeiDou',
            url: 'https://en.wikipedia.org/wiki/BeiDou'
        }
    ]
}