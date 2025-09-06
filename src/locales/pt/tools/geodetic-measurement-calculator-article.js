export default {
    title: 'Calculadora de Medição Geodésica Online: Cálculo Preciso de Distâncias e Áreas na Superfície da Terra',
    functionTitle: 'O que é uma Calculadora Geodésica e para que serve?',
    intro: 'Nossa <strong>calculadora de medição geodésica online</strong> é uma ferramenta de cálculo geoespacial profissional que calcula com precisão distâncias, azimutes e áreas na superfície da Terra com base em modelos elipsoidais. Diferentemente dos simples cálculos planos, as medições geodésicas consideram a curvatura da Terra e sua forma elipsoidal, fornecendo resultados de medição geoespacial de alta precisão para agrimensura, navegação, planejamento territorial e pesquisa científica. Esta <strong>ferramenta de medição geodésica</strong> suporta múltiplos parâmetros de elipsoide padrão internacional (como WGS84, CGCS2000, etc.) e fornece visualização intuitiva de mapas, permitindo que você veja claramente os resultados da medição.',

    useCasesTitle: 'Aplicações Comuns da Calculadora de Medição Geodésica',
    useCases: [
        'Profissionais de agrimensura e sistemas de informação geográfica (SIG) realizando análises geoespaciais precisas',
        'Agrimensores calculando áreas de parcelas e comprimentos de fronteiras',
        'Planejamento de navegação marítima e aérea, cálculo de distâncias de rotas de grande círculo e azimutes',
        'Pesquisadores geográficos analisando dados geoespaciais',
        'Engenheiros planejando infraestrutura que abrange grandes distâncias (como oleodutos, cabos, estradas)',
        'Setores militares e de defesa para posicionamento preciso e cálculos de distância',
        'Profissionais de gestão ambiental e de recursos avaliando tamanhos de áreas protegidas',
        'Educadores demonstrando o impacto da curvatura da Terra nos cálculos de distância'
    ],

    tipTitle: 'Dica Profissional:',
    tipContent: 'Para cálculos de longas distâncias que abrangem escalas continentais, recomendamos usar a opção de algoritmo de alta precisão, que utiliza um modelo elipsoidal completo. Embora seja computacionalmente mais lento, fornece resultados mais precisos, especialmente em regiões polares.',

    conclusion: 'As <strong>medições geodésicas</strong> desempenham um papel crucial nas tecnologias geoespaciais modernas. Ao usar nossa calculadora, você pode evitar erros introduzidos por cálculos planos e obter resultados precisos que consideram a curvatura da Terra. Seja você um agrimensor profissional, um pesquisador acadêmico ou um entusiasta interessado em cálculos geoespaciais, esta ferramenta atende aos seus requisitos de precisão enquanto fornece visualização intuitiva e demonstrações detalhadas do processo de cálculo.',

    faqTitle: 'Perguntas Frequentes',
    faqs: [
        {
            question: 'Qual é a diferença entre cálculos geodésicos e cálculos de distância plana?',
            answer: 'Os cálculos geodésicos consideram a curvatura da Terra e sua forma elipsoidal, enquanto os cálculos de distância plana tratam a superfície da Terra como plana. Para distâncias curtas (alguns quilômetros), a diferença é mínima, mas à medida que a distância aumenta, a diferença se torna significativa. Por exemplo, em uma distância de 1000 km, os cálculos planos podem levar a erros de dezenas de quilômetros. Nossa <strong>calculadora geodésica</strong> usa modelos elipsoidais (como WGS84) para cálculos, fornecendo distâncias mais precisas na superfície da Terra.'
        },
        {
            question: 'Como escolher os parâmetros de elipsoide apropriados?',
            answer: 'A escolha dos parâmetros do elipsoide deve ser baseada em sua localização geográfica e nas necessidades da aplicação. WGS84 é o padrão usado pelo Sistema de Posicionamento Global (GPS) e é adequado para a maioria das aplicações globais; CGCS2000 é o padrão nacional chinês, adequado para medições na China; outras regiões podem ter seus próprios padrões. Para casos em que você está trabalhando com mapas ou conjuntos de dados específicos, escolha os mesmos parâmetros de elipsoide usados por esse conjunto de dados para garantir a consistência nos resultados do cálculo.'
        },
        {
            question: 'Qual é a diferença entre distância de grande círculo e distância geodésica?',
            answer: 'A distância de grande círculo é a menor distância entre dois pontos ao longo de um grande círculo (o maior círculo em uma esfera), enquanto a distância geodésica é a menor distância em uma superfície elipsoidal. Nossa <strong>ferramenta de medição geodésica de alta precisão</strong> calcula a distância geodésica, considerando a forma elipsoidal da Terra. Em aplicações práticas, para distâncias curtas a médias, a diferença é pequena, mas para longas distâncias ou aplicações que exigem alta precisão, o cálculo da distância geodésica é mais preciso.'
        },
        {
            question: 'Como calcular a área de um polígono?',
            answer: 'Para calcular a área de um polígono, primeiro adicione pelo menos três pontos na área de entrada de coordenadas (em ordem para formar um polígono), depois selecione o modo "Cálculo de Área". Nossa ferramenta usa métodos de cálculo de área de polígono esférico, considerando a curvatura da Terra, o que é mais preciso do que cálculos planos. Para necessidades de alta precisão, selecione a opção "Algoritmo de Alta Precisão", que usa um modelo elipsoidal completo para cálculos. Os resultados mostrarão a área e o perímetro do polígono, com representação visual no mapa.'
        },
        {
            question: 'Qual é a precisão dos resultados do cálculo?',
            answer: 'Nossa <strong>calculadora de medição geoespacial</strong> oferece duas opções de precisão: algoritmo rápido e algoritmo de alta precisão. O algoritmo rápido é adequado para fins gerais, geralmente preciso dentro de 0,1%; o algoritmo de alta precisão usa um modelo elipsoidal completo com cálculos iterativos, alcançando precisão de até 0,001% (nível de centímetro), adequado para agrimensura profissional e pesquisa científica. A precisão real também depende da exatidão das coordenadas de entrada e de quão bem os parâmetros de elipsoide escolhidos correspondem à região real.'
        }
    ],

    tutorialTitle: 'Como Usar a Calculadora de Medição Geodésica Online',
    steps: [
        {
            title: 'Inserir Pontos de Coordenadas',
            description: 'Na área de entrada de coordenadas, insira a latitude e longitude dos pontos que você deseja calcular. Você pode clicar no botão <strong>"Adicionar Ponto"</strong> para adicionar mais pontos. Para cálculos de distância, são necessários pelo menos dois pontos; para cálculos de área, são necessários pelo menos três pontos.',
            note: 'As coordenadas estão no formato de graus decimais (por exemplo, 39.9042, 116.4074), onde valores positivos representam latitude norte/longitude leste e valores negativos representam latitude sul/longitude oeste.'
        },
        {
            title: 'Selecionar Parâmetros do Elipsoide',
            description: 'Escolha os parâmetros do elipsoide que atendam às suas necessidades no menu suspenso. WGS84 é o padrão usado pelos sistemas GPS globais e é adequado para a maioria das aplicações; CGCS2000 é o padrão nacional chinês; outras opções são aplicáveis para regiões específicas ou dados históricos.',
            note: 'Escolher os mesmos parâmetros de elipsoide usados pelos seus dados de mapa ou dispositivo GPS garante consistência nos resultados do cálculo.'
        },
        {
            title: 'Definir Modo de Cálculo e Precisão',
            description: 'Selecione o modo <strong>"Distância e Azimute"</strong> para calcular a distância e o azimute entre dois pontos, ou selecione o modo <strong>"Cálculo de Área"</strong> para calcular a área de um polígono. Em seguida, escolha o nível de precisão desejado: algoritmo rápido ou algoritmo de alta precisão.',
            note: 'Para distâncias curtas ou fins gerais, o algoritmo rápido é suficientemente preciso; para longas distâncias ou aplicações profissionais, o algoritmo de alta precisão é recomendado.'
        },
        {
            title: 'Configurar Opções de Visualização',
            description: 'Marque as opções <strong>"Mostrar Fórmulas de Cálculo"</strong> e <strong>"Mostrar Demonstração Dinâmica"</strong> conforme necessário. A primeira exibe as fórmulas matemáticas e etapas usadas no processo de cálculo, enquanto a segunda demonstra dinamicamente o caminho do grande círculo ou o processo de construção do polígono no mapa.',
            note: 'Mostrar fórmulas de cálculo é particularmente útil para fins educacionais ou para verificar o processo de cálculo; a demonstração dinâmica ajuda a entender intuitivamente os princípios de medição da superfície da Terra.'
        },
        {
            title: 'Executar o Cálculo e Visualizar Resultados',
            description: 'Clique no botão <strong>"Calcular"</strong> para executar o cálculo. A área de resultados exibirá os dados calculados de distância, azimute ou área, enquanto o mapa visualizará os resultados da medição. Você pode ajustar as unidades (como quilômetros, metros, milhas, etc.) para ver os resultados em diferentes unidades.',
            note: 'A visualização do mapa é automaticamente ampliada para acomodar todos os pontos de entrada; você pode usar os controles do mapa para ampliar, deslocar ou alternar tipos de mapa.'
        },
        {
            title: 'Exportar ou Compartilhar Resultados',
            description: 'Após o cálculo, você pode usar os botões <strong>"Exportar para PDF"</strong> ou <strong>"Exportar para Excel"</strong> para salvar os resultados. O arquivo exportado inclui todos os parâmetros de entrada, resultados de cálculo e diagramas de visualização, convenientes para compartilhamento ou análise adicional.',
            note: 'Todos os cálculos são realizados em seu navegador e não são carregados para nenhum servidor, garantindo a segurança e privacidade de seus dados geográficos.'
        }
    ],

    successTitle: 'Parabéns!',
    successContent: 'Você aprendeu com sucesso como usar nossa calculadora de medição geodésica online. Agora você pode realizar cálculos precisos de distância e área na superfície da Terra para diversos fins profissionais e educacionais.',

    relatedToolsTitle: 'Ferramentas Relacionadas que Podem Interessar',
    relatedTools: [
        {
            name: 'Conversor de Sistemas de Coordenadas',
            description: 'Converta coordenadas geográficas entre diferentes sistemas de coordenadas, incluindo WGS-84, GCJ-02, BD-09, Web Mercator e UTM',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Reprodução de Trilhas GPS',
            description: 'Visualize e reproduza trilhas GPS de vários formatos de arquivo (GPX, KML, GeoJSON, CSV).',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: 'Calculadora de Projeção de Gauss',
            description: 'Ferramenta para conversão entre coordenadas de projeção de Gauss e coordenadas geográficas (latitude e longitude)',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'Visualizador de Nuvem de Pontos LIDAR',
            description: 'Visualizador de nuvem de pontos LIDAR online gratuito que suporta formatos LAS, XYZ, PLY, PCD. Fornece visualização 3D, múltiplos modos de coloração, navegação interativa e recursos de análise de dados',
            url: 'https://www.ufreetools.com/tool/lidar-point-cloud-viewer'
        }
    ],

    referencesTitle: 'Recursos de Referência',
    references: [
        {
            name: 'Fundamentos de Geodésia',
            description: 'Recursos acadêmicos sobre parâmetros de elipsoide e métodos de cálculo geodésico',
            url: 'https://pt.wikipedia.org/wiki/Geodésia'
        },
        {
            name: 'Serviço Internacional de Rotação da Terra e Sistemas de Referência',
            description: 'Organização autoritativa fornecendo quadros de referência terrestres internacionais e parâmetros de elipsoide',
            url: 'https://www.iers.org/IERS/EN/Home/home_node.html'
        },
        {
            name: 'Ferramentas de Cálculo do Levantamento Geodésico Nacional dos EUA',
            description: 'Materiais de referência para vários métodos e algoritmos de cálculo geodésico',
            url: 'https://www.ngs.noaa.gov/TOOLS/'
        }
    ]
}