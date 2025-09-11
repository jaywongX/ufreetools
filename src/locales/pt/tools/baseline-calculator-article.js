export default {
    title: 'Guia de Uso da Calculadora de Linha de Base - Ferramenta online para cálculo de comprimento e azimute de linha de base de coordenadas',
    functionTitle: 'O que é uma Calculadora de Linha de Base e qual é o seu propósito?',
    intro: 'Nossa <strong>Calculadora de Linha de Base</strong> é uma ferramenta profissional online que calcula rápida e precisamente o comprimento e o azimute da linha de base entre dois pontos. Esta ferramenta suporta entrada de variância de coordenadas, pode calcular resultados de propagação de erro e gerar visualizações de elipse de erro. É adequada para engenharia de agrimensura, aplicações SIG, engenharia civil e pesquisa geográfica. Usando nossa <strong>ferramenta de cálculo de linha de base de coordenadas</strong>, você pode processar facilmente grandes quantidades de dados de coordenadas e exibir resultados de maneira visual intuitiva.',

    useCasesTitle: 'Cenários de aplicação comuns para a Calculadora de Linha de Base',
    useCases: [
        'Medição de poligonais e ajuste de rede de controle em engenharia de agrimensura',
        'Análise de dados espaciais e cálculo de distância em projetos SIG',
        'Layout de construção e medição em engenharia civil',
        'Análise de relações espaciais em pesquisa geográfica',
        'Solução de linha de base em sistemas de posicionamento por navegação',
        'Análise de relações entre pontos em exploração geológica'
    ],

    tipTitle: 'Dica profissional:',
    tipContent: 'Ao realizar medições de alta precisão, recomenda-se inserir dados de variância de coordenadas para obter resultados de análise de erro mais precisos. A função de visualização de elipse de erro pode ajudá-lo a entender intuitivamente a distribuição de erros de posição de pontos.',

    conclusion: 'A <strong>Calculadora de Linha de Base</strong> é extremamente útil para engenheiros agrimensores, profissionais de SIG, engenheiros civis e qualquer pessoa que precise processar dados de coordenadas. Ao usar nossa ferramenta, você pode economizar uma quantidade significativa de tempo de cálculo manual, evitar erros de cálculo e entender melhor os dados através de recursos de visualização. Nossa ferramenta torna o processo de cálculo de linha de base simples e eficiente, sem a necessidade de instalar qualquer software profissional.',

    faqTitle: 'Perguntas Frequentes',
    faqs: [
        {
            question: 'O que são comprimento de linha de base e azimute?',
            answer: 'O <strong>comprimento da linha de base</strong> refere-se à distância em linha reta entre dois pontos, e o <strong>azimute</strong> é o ângulo no sentido horário do norte até a linha de base. Em agrimensura, uma linha de base é um componente básico de uma rede de controle, e seu comprimento e azimute são parâmetros importantes que descrevem a relação espacial entre dois pontos. Ao calcular com precisão o comprimento e o azimute da linha de base, dados fundamentais confiáveis podem ser fornecidos para trabalhos de agrimensura subsequentes.'
        },
        {
            question: 'Como inserir dados de variância de coordenadas?',
            answer: 'Ao usar nossa <strong>Calculadora de Linha de Base</strong>, você pode inserir diretamente as variâncias de coordenadas X e Y dos pontos inicial e final no modo de entrada de ponto único, ou adicionar informações de variância após cada linha de dados no modo de entrada em lote. O formato dos dados de variância é: ponto inicial X, ponto inicial Y, ponto final X, ponto final Y, variância do ponto inicial X, variância do ponto inicial Y, variância do ponto final X, variância do ponto final Y. Após inserir os dados de variância, a ferramenta calculará automaticamente os resultados de propagação de erro e gerará elipses de erro.'
        },
        {
            question: 'O que representa a elipse de erro?',
            answer: 'A <strong>elipse de erro</strong> é uma ferramenta gráfica que representa a distribuição de erros de posição de pontos. Os semi-eixos maior e menor da elipse representam as direções de erro máximo e mínimo, respectivamente, e o ângulo de orientação representa a direção do semi-eixo maior. Através da visualização da elipse de erro, você pode entender intuitivamente a magnitude e a distribuição direcional dos erros de posição de pontos, o que é muito importante para avaliar a precisão da medição e realizar controle de qualidade.'
        },
        {
            question: 'Como processar múltiplos cálculos de linha de base em lote?',
            answer: 'Usando nossa <strong>função de cálculo de linha de base em lote</strong>, você pode inserir múltiplos dados de linha de base linha por linha na caixa de entrada em lote. O formato de cada linha de dados é: ponto inicial X, ponto inicial Y, ponto final X, ponto final Y [, variância do ponto inicial X, variância do ponto inicial Y, variância do ponto final X, variância do ponto final Y]. Após concluir a entrada, clique no botão "Calcular Linha de Base", e o sistema calculará automaticamente o comprimento, o azimute e as informações de erro relacionadas para todas as linhas de base.'
        },
        {
            question: 'Qual é o propósito da função de visualização de mapa?',
            answer: 'A função de visualização de mapa pode exibir intuitivamente todas as linhas de base e pontos calculados em um sistema de coordenadas bidimensional. Os pontos iniciais são representados por pontos verdes, os pontos finais por pontos vermelhos, e as linhas de base são conectadas por linhas azuis. Se dados de variância forem inseridos, elipses de erro vermelhas também serão exibidas. Esta função é particularmente adequada para verificar a razoabilidade dos dados, identificar valores discrepantes e realizar análise de relações espaciais.'
        }
    ],

    tutorialTitle: 'Como usar a Calculadora de Linha de Base',
    steps: [
        {
            title: 'Selecionar o modo de entrada',
            description: 'Escolha o modo de entrada apropriado no topo da área de entrada à esquerda: entrada de ponto único ou entrada em lote. A entrada de ponto único é adequada para calcular algumas linhas de base, enquanto a entrada em lote é adequada para processar grandes quantidades de dados.',
            note: 'O modo de entrada em lote suporta cálculos com dados de variância e oferece formatação mais flexível.'
        },
        {
            title: 'Inserir dados de coordenadas',
            description: 'Insira os dados de coordenadas de acordo com o modo de entrada selecionado. No modo de entrada de ponto único, insira separadamente as coordenadas X e Y dos pontos inicial e final; no modo de entrada em lote, insira múltiplos dados de linha de base linha por linha, com cada linha no formato: ponto inicial X, ponto inicial Y, ponto final X, ponto final Y.',
            note: 'Se a análise de erro for necessária, os dados de variância de coordenadas correspondentes também devem ser inseridos.'
        },
        {
            title: 'Executar o cálculo',
            description: 'Clique no botão <strong>"Calcular Linha de Base"</strong> para iniciar o cálculo. O sistema calculará automaticamente o comprimento e o azimute de cada linha de base com base nos dados de coordenadas que você inseriu, e calculará os resultados de propagação de erro e gerará parâmetros de elipse de erro quando dados de variância forem inseridos.',
            note: 'O processo de cálculo geralmente é concluído em segundos, mesmo para grandes quantidades de dados.'
        },
        {
            title: 'Visualizar e analisar resultados',
            description: 'Após a conclusão do cálculo, os resultados serão exibidos na área de saída à direita. Você pode visualizar informações detalhadas para cada linha de base, incluindo comprimento da linha de base, azimute, resultados de propagação de erro e parâmetros de elipse de erro. A área de visualização de mapa exibirá a distribuição de todas as linhas de base e pontos.',
            note: 'Clique no botão "Copiar" para qualquer item de resultado para copiar rapidamente os resultados de cálculo para esse registro.'
        },
        {
            title: 'Exportar relatório',
            description: 'Se você precisar salvar os resultados, pode clicar no botão <strong>"Exportar CSV"</strong> ou <strong>"Exportar TXT"</strong> no topo da área de saída. O sistema gerará um relatório contendo todos os resultados de cálculo, conveniente para impressão e compartilhamento.',
            note: 'O relatório exportado contém informações de cálculo completas, adequadas para documentação de projeto e relatórios.'
        }
    ],

    successTitle: 'Parabéns!',
    successContent: 'Você aprendeu com sucesso como usar nossa Calculadora de Linha de Base. Agora você pode facilmente calcular o comprimento e o azimute da linha de base entre quaisquer dois pontos, realizar análise de erro e entender melhor os dados através de recursos de visualização.',

    relatedToolsTitle: 'Ferramentas relacionadas que podem interessar a você',
    relatedTools: [
        {
            name: 'Conversor de Coordenadas',
            description: 'Converta coordenadas de latitude e longitude entre diferentes sistemas de coordenadas, suportando múltiplos sistemas de projeção.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Calculadora de Folhas de Mapa',
            description: 'Calcule números de folhas de mapa com base em coordenadas de latitude e longitude, suportando múltiplas escalas.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'Conversor de Tempo GNSS',
            description: 'Converta entre tempo UTC e segundos de semana GPS, tempo BeiDou.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        {
            name: 'Calculadora de Projeção de Gauss',
            description: 'Realize cálculos diretos e inversos de projeção de Gauss-Krüger, suportando zonas de 3 graus e 6 graus.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        }
    ],

    referencesTitle: 'Recursos de referência',
    references: [
        {
            name: 'NOAA - Levantamento Geodésico Nacional',
            description: 'Referências de medição, sistemas de coordenadas e ferramentas de medição fornecidos pelo Levantamento Geodésico Nacional dos EUA',
            url: 'https://www.ngs.noaa.gov/TOOLS/'
        },
        {
            name: 'Federação Internacional de Agrimensores (FIG)',
            description: 'Padrões de agrimensura, melhores práticas e recursos de pesquisa fornecidos pela Federação Internacional de Agrimensores',
            url: 'https://www.fig.net/resources/publications/'
        },
        {
            name: 'Journal of Surveying Engineering - Biblioteca ASCE',
            description: 'Periódico acadêmico de engenharia de agrimensura publicado pela Sociedade Americana de Engenheiros Civis, contendo as mais recentes pesquisas e métodos',
            url: 'https://ascelibrary.org/journal/jsued2'
        }
    ]
}