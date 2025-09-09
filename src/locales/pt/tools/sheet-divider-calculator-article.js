export default {
    title: 'Guia da Calculadora de Divisão de Folhas de Mapa - Ferramenta Online de Consulta de Números de Folhas',
    functionTitle: 'O que é a Calculadora de Divisão de Folhas de Mapa e qual é o seu propósito?',
    intro: 'Nossa <strong>Calculadora de Divisão de Folhas de Mapa</strong> é uma poderosa ferramenta online que calcula rápida e precisamente os números de folhas de mapa com base nas coordenadas de latitude e longitude. A ferramenta suporta múltiplas escalas (incluindo 1:500, 1:1000, 1:50000, etc.) e fornece recursos de cálculo em lote e visualização de grade de folhas. Usando nossa <strong>ferramenta de consulta de números de folhas de mapa</strong>, você pode facilmente processar grandes quantidades de dados de coordenadas e exportar os resultados em formato Excel ou PDF.',

    useCasesTitle: 'Aplicações Comuns da Calculadora de Divisão de Folhas de Mapa',
    useCases: [
        'Gerenciamento e numeração de folhas de mapa em projetos de levantamento e cartografia',
        'Organização de dados espaciais em projetos de Sistemas de Informação Geográfica (SIG)',
        'Divisão de folhas no planejamento territorial e design urbano',
        'Divisão de áreas de trabalho em explorações geológicas e levantamentos de recursos',
        'Produção de mapas militares e divisão de campos de batalha',
        'Processamento de dados geográficos em larga escala em projetos de pesquisa'
    ],

    tipTitle: 'Dica Profissional:',
    tipContent: 'Ao dividir mapas para grandes áreas, recomenda-se usar zonas de 3 graus para maior precisão, enquanto zonas de 6 graus podem ser usadas para áreas menores para simplificar os cálculos.',

    conclusion: 'A <strong>Calculadora de Divisão de Folhas de Mapa</strong> é extremamente útil para engenheiros agrimensores, profissionais de SIG, planejadores urbanos e qualquer pessoa que precise processar dados geoespaciais. Usando nossa ferramenta, você pode economizar tempo significativo em cálculos manuais, evitar erros de numeração e melhorar a eficiência do trabalho. Nossa ferramenta torna o processo de divisão de folhas de mapa simples e eficiente, sem a necessidade de instalação de software profissional.',

    faqTitle: 'Perguntas Frequentes',
    faqs: [
        {
            question: 'Quais escalas são suportadas pela Calculadora de Divisão de Folhas de Mapa?',
            answer: 'Nossa <strong>Calculadora de Divisão de Folhas de Mapa online</strong> suporta várias escalas comuns de 1:500 a 1:1000000, incluindo 1:500, 1:1000, 1:2000, 1:5000, 1:10000, 1:25000, 1:50000, 1:100000, 1:250000, 1:500000 e 1:1000000. Você pode escolher a escala apropriada de acordo com suas necessidades específicas.'
        },
        {
            question: 'O que são zonas de 3 graus e zonas de 6 graus?',
            answer: 'Zonas de 3 graus e zonas de 6 graus são dois métodos de zoneamento na projeção de Gauss-Krüger. As zonas de 6 graus começam em 0° de longitude leste, cada zona cobrindo 6°, dividindo o globo em 60 zonas. As zonas de 3 graus começam em 1,5° de longitude leste, cada zona cobrindo 3°, dividindo o globo em 120 zonas. As zonas de 3 graus fornecem maior precisão e são adequadas para cartografia em grande escala; as zonas de 6 graus cobrem áreas mais amplas e são adequadas para cartografia em pequena escala.'
        },
        {
            question: 'Como calcular números de folhas de mapa para múltiplos pontos de coordenadas em lote?',
            answer: 'Usando nosso <strong>recurso de cálculo em lote</strong>, você pode inserir múltiplos pontos de coordenadas na caixa de entrada em lote, cada linha no formato "latitude,longitude,descrição(opcional)". Por exemplo: "39.9042,116.4074,Centro de Pequim". Após a entrada, clique no botão "Calcular Folha", e o sistema calculará automaticamente os números de folhas de mapa para todos os pontos de coordenadas.'
        },
        {
            question: 'Em quais formatos os resultados do cálculo podem ser exportados?',
            answer: 'Nossa ferramenta suporta a exportação dos resultados do cálculo em formatos Excel e PDF. O formato Excel é conveniente para processamento e análise posterior de dados, enquanto o formato PDF é adequado para impressão e compartilhamento. Você pode concluir a exportação clicando no botão "Exportar para Excel" ou "Exportar para PDF" no topo da área de saída.'
        },
        {
            question: 'Qual é o propósito do recurso de visualização de grade de mapa?',
            answer: 'O recurso de visualização de grade de mapa exibe intuitivamente a posição e distribuição de todos os pontos calculados no mapa. Ao clicar nos pontos na grade, você pode ver informações detalhadas sobre aquele ponto. A folha selecionada será destacada, ajudando você a entender melhor as características de distribuição espacial dos dados. Este recurso é particularmente útil para verificar os resultados do cálculo e realizar análise espacial.'
        }
    ],

    tutorialTitle: 'Como Usar a Calculadora de Divisão de Folhas de Mapa',
    steps: [
        {
            title: 'Insira os Dados de Coordenadas',
            description: 'Insira os dados de coordenadas que você deseja calcular na área de entrada à esquerda. Você pode inserir um único ponto de coordenada (insira a latitude e longitude em suas respectivas caixas de entrada) ou inserir múltiplos pontos de coordenadas em lote (insira na caixa de entrada em lote, cada linha no formato "latitude,longitude,descrição(opcional)").',
            note: 'Os formatos de coordenadas devem estar em graus decimais, por exemplo, latitude 39.9042, longitude 116.4074.'
        },
        {
            title: 'Defina os Parâmetros de Cálculo',
            description: 'Na área de configurações de parâmetros, selecione a escala apropriada e o método de zona de projeção. As escalas comuns incluem 1:500, 1:1000, 1:50000, etc., e os métodos de zona incluem zonas de 3 graus ou zonas de 6 graus.',
            note: 'Para grandes escalas (como 1:500, 1:1000), recomenda-se usar zonas de 3 graus para maior precisão.'
        },
        {
            title: 'Execute o Cálculo',
            description: 'Clique no botão <strong>"Calcular Folha"</strong> para iniciar o cálculo. O sistema calculará automaticamente o número da folha de mapa e as informações relacionadas para cada ponto com base nas coordenadas e parâmetros que você definiu.',
            note: 'O processo de cálculo geralmente é concluído em segundos, mesmo para grandes volumes de dados.'
        },
        {
            title: 'Visualize e Analise os Resultados',
            description: 'Após a conclusão do cálculo, os resultados serão exibidos na área de saída à direita. Você pode ver informações detalhadas como o número da folha de mapa, coordenadas e escala para cada ponto. A área de visualização de grade de mapa mostrará a distribuição de todos os pontos no mapa.',
            note: 'Clique em qualquer item de resultado ou ponto na grade para ver informações detalhadas e destacá-lo.'
        },
        {
            title: 'Exporte os Resultados',
            description: 'Se você precisar salvar os resultados, pode clicar no botão <strong>"Exportar para Excel"</strong> ou <strong>"Exportar para PDF"</strong> no topo da área de saída. O formato Excel é conveniente para processamento de dados, enquanto o formato PDF é adequado para impressão e compartilhamento.',
            note: 'O arquivo exportado conterá informações completas sobre todos os resultados do cálculo.'
        },
        {
            title: 'Use Recursos Avançados',
            description: 'Você pode usar o botão "Carregar Dados de Exemplo" para experimentar rapidamente a funcionalidade da ferramenta, ou o botão "Limpar Tudo" para redefinir todas as entradas e resultados. Ao clicar em diferentes itens de resultado, você pode ver sua posição na grade de mapa.',
            note: 'A ferramenta funciona inteiramente no navegador, e seus dados não serão carregados em nenhum servidor, garantindo privacidade e segurança.'
        }
    ],

    successTitle: 'Parabéns!',
    successContent: 'Você aprendeu com sucesso como usar nossa Calculadora de Divisão de Folhas de Mapa. Agora você pode facilmente calcular números de folhas de mapa para qualquer ponto de coordenada para uso em agrimensura, SIG, planejamento urbano e vários outros cenários de aplicação.',

    relatedToolsTitle: 'Ferramentas Relacionadas Que Podem Interessar a Você',
    relatedTools: [
        {
            name: 'Conversor de Coordenadas',
            description: 'Converter coordenadas de latitude e longitude entre diferentes sistemas de coordenadas, suporta muitos sistemas de projeção.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Reprodução de Trilhas GPS',
            description: 'Carregar e visualizar dados de trilhas GPS, suporta muitos formatos de arquivo.',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: 'Calculadora de Projeção Gaussiana',
            description: 'Realizar cálculos de projeção Gauss-Krüger direta e inversa, suporta zonas de 3 graus e 6 graus.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'Gerador de Curvas de Nível',
            description: 'Criar mapas de curvas de nível baseados em dados de elevação, suporta muitos formatos de saída.',
            url: 'https://www.ufreetools.com/tool/elevation-contour-generator'
        }
    ],

    referencesTitle: 'Recursos de Referência',
    references: [
        {
            name: 'Sistemas de Grade de Mapas Internacionais',
            description: 'Padrões internacionais para grades de mapas e sistemas de numeração de folhas',
            url: 'https://www.icsm.gov.au/education/fundamentals-mapping/map-grids'
        },
        {
            name: 'Projeção de Mercator Transversa',
            description: 'Explicação detalhada dos princípios matemáticos por trás das projeções UTM/Gauss-Krüger',
            url: 'https://en.wikipedia.org/wiki/Transverse_Mercator_projection'
        },
        {
            name: 'Projeções Cartográficas',
            description: 'Guia detalhado para projeções cartográficas e sistemas de coordenadas fornecido por agências governamentais australianas',
            url: 'https://www.icsm.gov.au/education/fundamentals-mapping/map-projections'
        }
    ]
}