export default {
    title: 'Guia de Uso do Comparador de Trajetórias de Coordenadas - Ferramenta de Análise de Diferenças de Trajetórias Online',
    functionTitle: 'O que é o Comparador de Trajetórias de Coordenadas e para que serve?',
    intro: 'Nosso <strong>Comparador de Trajetórias de Coordenadas</strong> é uma ferramenta online poderosa que permite fazer upload de dois conjuntos de dados de trajetórias e realizar análise comparativa visual em um mapa. A ferramenta suporta translação, rotação e cálculo de desvio de trajetórias, calculando automaticamente indicadores-chave como o erro quadrático médio (RMSE) e deslocamento entre dois conjuntos de trajetórias. Ao exibir duas trajetórias em cores diferentes com um efeito de comparação "piscando" dinâmico, as partes diferentes são automaticamente destacadas. Usando nossa <strong>ferramenta de análise de diferenças de trajetórias</strong>, você pode exportar relatórios de comparação detalhados contendo capturas de tela do mapa e gráficos de estatísticas de erro, com cópia de resultados para a área de transferência com um clique, atendendo às necessidades profissionais em topografia, navegação e análise de trajetórias.',

    useCasesTitle: 'Cenários de aplicação comuns do Comparador de Trajetórias de Coordenadas',
    useCases: [
        'Avaliação da precisão de trajetórias GPS, comparando trajetórias medidas com trajetórias de referência',
        'Otimização de algoritmos de navegação, analisando diferenças de trajetórias entre diferentes algoritmos de planejamento de rotas',
        'Testes de condução autônoma, comparando trajetórias reais de veículos com trajetórias esperadas',
        'Análise de trajetórias esportivas, comparando o desempenho de trajetórias de diferentes atletas ou fases de treinamento',
        'Otimização de entrega logística, analisando desvios entre rotas de entrega e caminhos ótimos',
        'Validação de dados de pesquisa geográfica, avaliando a precisão e consistência dos dados de trajetórias'
    ],

    tipTitle: 'Dicas Profissionais:',
    tipContent: 'Ao realizar análise comparativa de trajetórias, recomenda-se primeiro usar dados de exemplo para se familiarizar com as funções da ferramenta e entender o significado dos diferentes indicadores de erro. Através do efeito de comparação "piscando" dinâmico, você pode observar mais intuitivamente as diferenças entre duas trajetórias. O relatório de comparação exportado contém estatísticas de erro detalhadas e gráficos visuais, facilitando análises posteriores e arquivamento.',

    conclusion: 'O <strong>Comparador de Trajetórias de Coordenadas</strong> é muito útil para engenheiros topógrafos, desenvolvedores de algoritmos de navegação, pesquisadores de condução autônoma e qualquer pessoa que precise realizar análise de dados de trajetórias. Usando nossa ferramenta de análise de diferenças de trajetórias, você pode avaliar rapidamente e com precisão a qualidade dos dados de trajetórias, identificar desvios de trajetórias e otimizar o desempenho dos algoritmos. Nossa ferramenta torna o processo de análise comparativa de trajetórias simples e eficiente, sem necessidade de instalar nenhum software profissional.',

    faqTitle: 'Perguntas Frequentes',
    faqs: [
        {
            question: 'Quais formatos de arquivo o Comparador de Trajetórias de Coordenadas suporta?',
            answer: 'Nossa <strong>ferramenta de comparação de trajetórias online</strong> suporta vários formatos de arquivo de trajetórias comuns, incluindo GeoJSON, JSON e KML. Esses formatos são amplamente utilizados em softwares SIG e dispositivos GPS, garantindo que você possa importar facilmente dados de trajetórias de várias fontes. Após fazer upload dos arquivos, a ferramenta analisa automaticamente os pontos de trajetória e realiza análise comparativa.'
        },
        {
            question: 'Como interpretar o RMSE e outros indicadores de erro?',
            answer: 'Nossa <strong>ferramenta de análise de diferenças de trajetórias</strong> fornece vários indicadores de erro para ajudá-lo a avaliar de forma abrangente as diferenças de trajetórias. O erro quadrático médio (RMSE) é um indicador comumente usado para medir o desvio geral da trajetória, com valores menores indicando trajetórias mais próximas; o erro médio representa a média aritmética de todos os erros de pontos; o erro máximo exibe o ponto com o maior desvio na trajetória; o desvio padrão reflete o grau de dispersão da distribuição de erros. Esses indicadores usados em conjunto podem avaliar de forma abrangente a qualidade da trajetória.'
        },
        {
            question: 'Como o efeito de visualização da comparação de trajetórias é realizado?',
            answer: 'Nosso <strong>Comparador de Trajetórias de Coordenadas</strong> exibe duas trajetórias em cores diferentes, uma em azul e a outra em vermelho. Através de um efeito "piscando" dinâmico, você pode observar mais intuitivamente as diferenças de trajetórias. Pontos com grandes diferenças são automaticamente destacados, facilitando a identificação rápida de áreas problemáticas. A interface do mapa suporta operações de zoom e panorâmica, permitindo que você visualize detalhes da comparação de trajetórias em áreas específicas.'
        },
        {
            question: 'Que conteúdo o relatório de comparação inclui?',
            answer: 'O relatório gerado por nossa <strong>ferramenta de comparação de trajetórias</strong> contém informações ricas: 1) Informações básicas: nomes de arquivos de trajetória, número de pontos, etc.; 2) Estatísticas de erro: indicadores-chave como RMSE, erro médio, erro máximo e desvio padrão; 3) Análise de diferenças: quantidade e distribuição de pontos de diferença; 4) Capturas de tela do mapa: resultados visuais da comparação de trajetórias; 5) Gráficos de estatísticas de erro: exibição intuitiva da distribuição de erros. Os relatórios podem ser exportados em formato de texto para arquivamento e compartilhamento.'
        },
        {
            question: 'Como melhorar a precisão da comparação de trajetórias?',
            answer: 'Para obter resultados de comparação de trajetórias mais precisos, recomenda-se: 1) Garantir a sincronização temporal de duas trajetórias ou realizar processamento de alinhamento temporal; 2) Pré-processar trajetórias, como filtragem e remoção de ruído, conversão de sistema de coordenadas, etc.; 3) Selecionar método de cálculo de erro apropriado e configurações de parâmetros; 4) Para trajetórias de comprimentos diferentes, usar interpolação ou amostragem de trajetórias para tornar o número de pontos consistente. Nossa ferramenta fornece funções de comparação básicas, e para aplicações profissionais complexas, pode ser necessário combinar conhecimento do domínio para análise aprofundada.'
        }
    ],

    tutorialTitle: 'Como usar o Comparador de Trajetórias de Coordenadas',
    steps: [
        {
            title: 'Fazer Upload de Arquivos de Trajetória',
            description: 'Na área de entrada esquerda, faça upload de dois arquivos de trajetória que precisam ser comparados. Clique nas áreas de upload para Trajetória 1 e Trajetória 2, selecione arquivos de trajetória locais nos formatos GeoJSON, JSON ou KML, ou arraste diretamente os arquivos para a área de upload. A ferramenta analisará automaticamente os arquivos e exibirá o número de pontos de trajetória.',
            note: 'Os formatos de arquivo suportados incluem GeoJSON, JSON e KML, garantindo que os arquivos contenham dados de coordenadas de trajetória válidos.'
        },
        {
            title: 'Carregar Dados de Exemplo',
            description: 'Se você estiver usando a ferramenta pela primeira vez, pode clicar no botão "Carregar Exemplo" para carregar dados de trajetória predefinidos. Isso o ajudará a entender rapidamente as funções da ferramenta e os resultados de saída, familiarizando-se com todo o processo de comparação de trajetórias.',
            note: 'Os dados de exemplo contêm duas trajetórias predefinidas com certas diferenças, facilitando a demonstração das várias funções da ferramenta.'
        },
        {
            title: 'Realizar Comparação de Trajetórias',
            description: 'Após fazer upload de duas trajetórias, clique no botão "Comparar Trajetórias" para iniciar a análise. A ferramenta calculará automaticamente as diferenças de trajetórias, incluindo indicadores RMSE, erro médio, erro máximo e desvio padrão, e exibirá visualmente duas trajetórias no mapa.',
            note: 'O processo de comparação pode levar alguns segundos, dependendo do tamanho e complexidade dos dados de trajetória.'
        },
        {
            title: 'Visualizar Resultados da Comparação',
            description: 'Após a conclusão da comparação, a área direita exibirá estatísticas de erro detalhadas e resultados de análise de diferenças. Você pode visualizar a comparação visual de duas trajetórias no mapa, com pontos de grandes diferenças destacados. Através do efeito "piscando" dinâmico, você pode observar mais intuitivamente as diferenças de trajetórias.',
            note: 'O mapa suporta operações de zoom e panorâmica, facilitando a visualização de detalhes da comparação de trajetórias em áreas específicas.'
        },
        {
            title: 'Exportar ou Copiar Resultados',
            description: 'Você pode clicar no botão "Exportar Relatório" para gerar um relatório de comparação detalhado contendo estatísticas de erro, análise de diferenças e capturas de tela do mapa. Se precisar apenas de indicadores-chave, pode usar o botão "Copiar Resultados" para copiar dados principais como RMSE para a área de transferência.',
            note: 'O relatório exportado está em formato de texto, facilitando o arquivamento e compartilhamento. A função de cópia copia apenas indicadores de erro-chave.'
        }
    ],

    successTitle: 'Parabéns!',
    successContent: 'Você aprendeu com sucesso como usar nosso Comparador de Trajetórias de Coordenadas. Agora você pode facilmente fazer upload e comparar duas trajetórias, analisar diferenças de trajetórias através de estatísticas de erro detalhadas e efeitos visuais, e exportar relatórios de comparação profissionais.',

    relatedToolsTitle: 'Ferramentas relacionadas que podem lhe interessar',
    relatedTools: [
        {
            name: 'Calculadora de Área e Perímetro',
            description: 'Suporta desenho de polígonos para calcular automaticamente área e perímetro, fornecendo troca de múltiplas unidades.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        {
            name: 'Calculadora de Área e Perímetro',
            description: 'Suporta desenho de polígonos para calcular automaticamente área e perímetro, fornecendo troca de múltiplas unidades.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        {
            name: 'Localizador de Zona de Projeção',
            description: 'Digite a longitude para calcular automaticamente os números de zona UTM 3° e 6°, suportando processamento em lote.',
            url: 'https://www.ufreetools.com/tool/projection-zone-finder'
        },
        {
            name: 'Conversor de Formato de Coordenadas',
            description: 'Suporta conversão entre formatos de graus decimais, graus-minutos-segundos e graus-minutos, fornecendo funções de conversão em lote.',
            url: 'https://www.ufreetools.com/tool/coordinate-format-converter'
        }
    ],

    referencesTitle: 'Recursos de Referência',
    references: [
        {
            name: 'Análise de Dados de Trajetória',
            description: 'Recursos acadêmicos sobre processamento e análise de dados de trajetória GPS',
            url: 'https://pt.wikipedia.org/wiki/Minera%C3%A7%C3%A3o_de_dados_de_trajet%C3%B3ria'
        },
        {
            name: 'Erro Quadrático Médio',
            description: 'Introdução detalhada ao RMSE na Wikipédia',
            url: 'https://pt.wikipedia.org/wiki/Erro_quadr%C3%A1tico_m%C3%A9dio'
        },
        {
            name: 'Especificação do Formato GeoJSON',
            description: 'Documento de especificação oficial para o formato de dados geográficos GeoJSON',
            url: 'https://tools.ietf.org/html/rfc7946'
        }
    ]
}