export default {
    title: 'Guia de uso da calculadora de área e perímetro - Ferramenta de medição online de área e perímetro de polígonos',
    functionTitle: 'O que é a calculadora de área e perímetro e para que serve?',
    intro: 'Nossa <strong>calculadora de área e perímetro</strong> é uma ferramenta online poderosa que permite desenhar polígonos em um mapa e calcular automaticamente sua área e perímetro. A ferramenta suporta múltiplas trocas de unidades, incluindo metros quadrados, hectares, quilômetros quadrados e mu, e fornece um modo de cálculo elipsoidal terrestre para resultados mais precisos. Você também pode inserir pontos de coordenadas diretamente para calcular área e perímetro, e suporta exportação em múltiplos formatos, incluindo GeoJSON, KML, imagens, CSV, TXT e PDF.',

    useCasesTitle: 'Cenários de aplicação comuns da calculadora de área e perímetro',
    useCases: [
        'Avaliação e medição de terras, cálculo de área e perímetro de lotes',
        'Planejamento urbano e design, medição de áreas de construção e espaços públicos',
        'Gestão agrícola, cálculo de área de terras agrícolas e alcance de irrigação',
        'Avaliação imobiliária, medição de limites de propriedades e área utilizável',
        'Monitoramento ambiental, cálculo da área de zonas protegidas e áreas afetadas',
        'Construção de engenharia, medição de áreas de construção e necessidades de materiais'
    ],

    tipTitle: 'Dicas profissionais:',
    tipContent: 'Ao medir áreas de grande extensão, recomenda-se usar o modo de cálculo elipsoidal para obter resultados mais precisos. Você pode inserir pontos de coordenadas diretamente para calcular a área e o perímetro de áreas complexas, suportando múltiplos formatos de entrada de coordenadas. A troca entre diferentes unidades pode ajudá-lo a exibir os resultados de medição da maneira mais adequada.',

    conclusion: 'A <strong>calculadora de área e perímetro</strong> é muito útil para agrimensores, urbanistas, gestores agrícolas, avaliadores imobiliários e qualquer pessoa que precise de medição precisa de áreas. Ao usar nossa ferramenta, você pode economizar muito tempo de cálculo manual, evitar erros de medição e entender melhor os dados através de recursos de visualização. Nossa ferramenta torna o processo de cálculo de área e perímetro simples e eficiente sem a necessidade de instalar nenhum software profissional.',

    faqTitle: 'Perguntas frequentes',
    faqs: [
        {
            question: 'Que modos de cálculo a calculadora de área e perímetro suporta?',
            answer: 'Nossa <strong>calculadora de área e perímetro</strong> suporta dois modos de cálculo: cálculo planar e cálculo elipsoidal. O cálculo planar é adequado para medição de áreas de pequena extensão com velocidade de cálculo rápida; o cálculo elipsoidal considera o impacto da curvatura terrestre, sendo adequado para medição de áreas de grande extensão com resultados mais precisos. Você pode escolher o modo de cálculo apropriado de acordo com necessidades específicas.'
        },
        {
            question: 'Como desenhar polígonos no mapa para medição?',
            answer: 'Usando nossa <strong>ferramenta de medição de área online</strong>, basta selecionar a ferramenta de desenho de polígonos na caixa de ferramentas esquerda e clicar no mapa para determinar os vértices do polígono. Clique duas vezes no último vértice para completar o desenho, e o sistema calculará e exibirá automaticamente a área e o perímetro. Você também pode usar as ferramentas de retângulo e círculo para desenhar formas regulares para medição.'
        },
        {
            question: 'Que unidades de área e comprimento são suportadas?',
            answer: 'Nossa ferramenta suporta múltiplas unidades de área e comprimento comumente usadas. As unidades de área incluem metros quadrados, hectares, quilômetros quadrados, acres e mu; as unidades de comprimento incluem metros, quilômetros e milhas. Você pode trocar de unidade a qualquer momento para se adaptar a diferentes cenários de uso e hábitos regionais, e os resultados de medição serão atualizados em tempo real.'
        },
        {
            question: 'Como usar a função de entrada de coordenadas?',
            answer: 'Nossa função de <strong>entrada de coordenadas da calculadora de área</strong> permite inserir pontos de coordenadas diretamente para calcular área e perímetro sem desenhar manualmente no mapa. Você pode usar múltiplos formatos para inserir coordenadas, incluindo o formato "longitude,latitude", "[longitude,latitude]" ou "longitude latitude", com um ponto por linha. Após inserir pelo menos 3 pontos, clique no botão "Calcular", e o sistema criará automaticamente um polígono e calculará sua área e perímetro. Isto é particularmente útil para medição de áreas com coordenadas conhecidas.'
        },
        {
            question: 'Como exportar os resultados de medição?',
            answer: 'Após completar a medição, você pode exportar os resultados em múltiplos formatos: GeoJSON e KML são formatos de dados geoespaciais padrão que podem ser importados para outros softwares GIS; a função de exportação de imagens pode salvar a visualização atual do mapa como uma imagem PNG; os formatos CSV e TXT são convenientes para abrir e analisar dados em softwares de planilha como o Excel; o formato PDF é adequado para gerar relatórios e documentos formais. Escolha o formato de exportação mais adequado de acordo com suas necessidades.'
        }
    ],

    tutorialTitle: 'Como usar a calculadora de área e perímetro',
    steps: [
        {
            title: 'Selecionar ferramentas de desenho e modo de cálculo',
            description: 'Antes de iniciar a medição, primeiro selecione a ferramenta de desenho apropriada (polígono, retângulo ou círculo) na caixa de ferramentas esquerda. Em seguida, selecione o modo de cálculo, para áreas de grande extensão recomenda-se escolher o cálculo elipsoidal para obter resultados mais precisos.',
            note: 'As ferramentas de desenho e o modo de cálculo podem ser trocados a qualquer momento conforme necessário.'
        },
        {
            title: 'Desenhar área de medição no mapa',
            description: 'Após ativar a ferramenta de desenho, clique no mapa para determinar o limite da área. Para a ferramenta de polígono, clique em cada vértice sequencialmente e clique duas vezes no último vértice para completar o desenho. A área e o perímetro da área atual serão exibidos em tempo real durante o processo de desenho.',
            note: 'Você pode ajustar a forma da área arrastando os vértices, e os resultados de medição serão atualizados em tempo real.'
        },
        {
            title: 'Usar a função de entrada de coordenadas',
            description: 'Se você já possui os dados de pontos de coordenadas da área, pode usar diretamente a função de entrada de coordenadas. Na caixa de entrada de coordenadas, insira um ponto de coordenada por linha (formato: longitude,latitude) e clique no botão "Calcular", e o sistema criará automaticamente um polígono e calculará sua área e perímetro.',
            note: 'Suporta múltiplos formatos de entrada de coordenadas, incluindo "longitude,latitude", "[longitude,latitude]" ou "longitude latitude".'
        },
        {
            title: 'Visualizar e gerenciar resultados de medição',
            description: 'Na lista de resultados abaixo da área do mapa direito, você pode visualizar a área e o perímetro de todas as áreas desenhadas. Cada área tem um identificador de tipo e dados de medição correspondentes, facilitando a comparação e análise.',
            note: 'A lista de resultados é atualizada em tempo real, exibindo a quantidade e os dados de todas as áreas de medição atuais.'
        },
        {
            title: 'Exportar resultados de medição',
            description: 'Após completar a medição, você pode exportar os resultados em múltiplos formatos, incluindo GeoJSON, KML, imagens, CSV, TXT e PDF. Clique no botão de exportação na caixa de ferramentas e selecione o formato correspondente para completar a operação de exportação.',
            note: 'O arquivo exportado contém todas as informações de medição, que podem ser usadas para outros softwares GIS, análise de dados ou compartilhamento com outras pessoas. Os formatos CSV e TXT são convenientes para abrir em softwares de planilha, e o formato PDF é adequado para relatórios formais.'
        }
    ],

    successTitle: 'Parabéns!',
    successContent: 'Você aprendeu com sucesso como usar nossa calculadora de área e perímetro. Agora você pode facilmente desenhar áreas no mapa e calcular sua área e perímetro, obtendo a melhor experiência de medição através de múltiplas unidades e modos de visualização.',

    relatedToolsTitle: 'Ferramentas relacionadas que podem lhe interessar',
    relatedTools: [
        {
            name: 'Calculadora de linha de base',
            description: 'Insira coordenadas de ponto inicial e final para calcular comprimento e azimute da linha de base, suportando análise de propagação de erro.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        },
        {
            name: 'Calculadora de divisão de folha cartográfica',
            description: 'Calcule o número da folha cartográfica com base em coordenadas de longitude e latitude, suportando múltiplas escalas.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'Conversor de coordenadas',
            description: 'Converta coordenadas de longitude e latitude entre diferentes sistemas de coordenadas, suportando múltiplos sistemas de projeção.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Conversor de tempo GNSS',
            description: 'Realize conversão mútua entre tempo UTC e segundos da semana GPS, tempo BeiDou.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        }
    ],

    referencesTitle: 'Recursos de referência',
    references: [
        {
            name: 'Biblioteca GeographicLib',
            description: 'Biblioteca de código aberto focada em cálculos geoespaciais de alta precisão',
            url: 'https://geographiclib.sourceforge.io/'
        },
        {
            name: 'Biblioteca de mapas Leaflet',
            description: 'Biblioteca JavaScript de mapas interativos de código aberto',
            url: 'https://leafletjs.com/'
        },
        {
            name: 'Biblioteca de análise espacial Turf.js',
            description: 'Biblioteca JavaScript para análise geoespacial',
            url: 'https://turfjs.org/'
        },
        {
            name: 'Biblioteca jsPDF',
            description: 'Biblioteca JavaScript para gerar documentos PDF no lado do cliente',
            url: 'https://github.com/parallax/jsPDF'
        }
    ]
}