export default {
    title: 'Guia de Usuário do Localizador de Zona de Projeção - Calculadora de Zona de Projeção UTM Online',
    functionTitle: 'O que é o Localizador de Zona de Projeção e Para que Serve?',
    intro: 'Nosso <strong>Localizador de Zona de Projeção</strong> é uma ferramenta online poderosa que calcula automaticamente números de zona UTM de 3° e 6° com base nas coordenadas de latitude e longitude inseridas. A ferramenta suporta entrada de coordenadas individuais e em lote, fornece funcionalidade de exibição de grade de zonas do mapa e mostra informações de zona de projeção em tempo real ao mover o mouse sobre o mapa. Através do destaque dinâmico de áreas de zona, você pode entender intuitivamente a relação entre coordenadas e zonas de projeção. Usando nossa <strong>Calculadora de Zona de Projeção UTM</strong>, você pode facilmente obter os números de zona de projeção correspondentes aos pontos de coordenadas, com funções de cópia com um clique e exportação em lote para atender às necessidades profissionais de agrimensura e SIG.',

    useCasesTitle: 'Cenários de Aplicação Comuns do Localizador de Zona de Projeção',
    useCases: [
        'Processamento de dados SIG, determinando números de zona de projeção UTM para pontos de coordenadas',
        'Processamento de imagens de sensoriamento remoto, selecionando parâmetros de projeção corretos para imagens de satélite',
        'Configuração de parâmetros de projeção em projetos de agrimensura, garantindo a consistência do sistema de coordenadas dos dados',
        'Criação de mapas e análise espacial, selecionando sistemas de coordenadas de projeção apropriados',
        'Padronização de dados de pesquisa geográfica, unificando números de zona de projeção para integração de dados',
        'Aplicações de navegação e posicionamento, configurando parâmetros de projeção UTM corretos para dispositivos GPS'
    ],

    tipTitle: 'Dicas Profissionais:',
    tipContent: 'Ao processar coordenadas em lote, é recomendável testar primeiro os resultados de cálculo de zona de projeção com dados de amostra para garantir que o tipo de projeção selecionado (zona de 3° ou zona de 6°) atenda aos requisitos do seu projeto. Ao mover o mouse sobre o mapa, você pode visualizar intuitivamente a distribuição de zonas de projeção em diferentes áreas, ajudando você a entender melhor o princípio de zonamento de projeção UTM.',

    conclusion: 'O <strong>Localizador de Zona de Projeção</strong> é muito útil para engenheiros agrimensores, profissionais de SIG, processadores de dados de sensoriamento remoto e qualquer pessoa que precise usar coordenadas de projeção UTM. Ao usar nossa Calculadora de Zona de Projeção UTM, você pode economizar muito tempo de cálculo manual, evitar erros de seleção de zona de projeção e entender melhor a relação entre coordenadas e zonas de projeção através de recursos de visualização. Nossa ferramenta torna o processo de configuração de parâmetros de projeção simples e eficiente sem a necessidade de instalar nenhum software profissional.',

    faqTitle: 'Perguntas Frequentes',
    faqs: [
        {
            question: 'Quais tipos de projeção o Localizador de Zona de Projeção suporta?',
            answer: 'Nosso <strong>Localizador de Zona de Projeção online</strong> suporta dois tipos principais de projeção UTM: zonas de 6° e zonas de 3°. A zona de 6° é o método padrão de divisão de zonas para projeção UTM, com 60 zonas de projeção globalmente, cada uma com 6° de longitude de largura; a zona de 3° é um método de divisão mais refinado, com 120 zonas de projeção globalmente, cada uma com 3° de longitude de largura. Você pode escolher o tipo de projeção apropriado para cálculo com base nos requisitos do seu projeto.'
        },
        {
            question: 'Como realizar consultas de zona de projeção por coordenadas em lote?',
            answer: 'Usando nossa <strong>Calculadora de Zona de Projeção UTM</strong>, basta inserir vários pares de coordenadas linha por linha na área de entrada em lote, separando longitude e latitude com vírgulas. Por exemplo: 116.3975,39.9085. Após clicar no botão de cálculo, o sistema calculará automaticamente os números de zona de projeção correspondentes para todos os pontos de coordenadas, exibindo informações de número de zona, hemisfério e meridiano central. A função de exportação em lote pode salvar todos os resultados como um arquivo de texto.'
        },
        {
            question: 'Como a grade de zonas é exibida no mapa?',
            answer: 'Nossa <strong>ferramenta Localizador de Zona de Projeção</strong> exibe a grade de zonas de projeção UTM na área do mapa da direita. Quando você move o mouse sobre o mapa, ele mostrará em tempo real o número da zona de projeção da posição atual. Este recurso de visualização ajuda você a entender intuitivamente o padrão de distribuição das zonas de projeção UTM e dominar melhor a relação entre coordenadas e zonas de projeção.'
        },
        {
            question: 'Como é garantida a precisão do cálculo de zona de projeção?',
            answer: 'Nossa ferramenta utiliza fórmulas padrão de cálculo de zona de projeção UTM para garantir a precisão dos resultados de cálculo. Para zonas de 6°, a fórmula de cálculo do número de zona é: Math.floor((longitude + 180) / 6) + 1; para zonas de 3°, a fórmula de cálculo do número de zona é: Math.floor((longitude + 180) / 3) + 1. A ferramenta também valida a validade das coordenadas inseridas (longitude de -180° a 180°, latitude de -90° a 90°) para garantir a confiabilidade dos resultados de cálculo.'
        },
        {
            question: 'Como usar os resultados da consulta?',
            answer: 'Os números de zona de projeção calculados podem ser usados para configurações de parâmetros em vários softwares SIG e equipamentos de agrimensura. Você pode copiar resultados individuais com um clique ou usar a função de exportação em lote para salvar todos os resultados como um arquivo de texto. Os resultados incluem informações de longitude, latitude, número de zona, hemisfério e meridiano central, fornecendo referência completa para a configuração do seu sistema de coordenadas de projeção.'
        }
    ],

    tutorialTitle: 'Como Usar o Localizador de Zona de Projeção',
    steps: [
        {
            title: 'Selecionar Tipo de Projeção',
            description: 'Na parte superior da área de entrada da esquerda, selecione o tipo de projeção necessário: zona UTM de 6° ou zona UTM de 3°. A zona de 6° é adequada para a maioria das necessidades padrão de projeção de mapas, enquanto a zona de 3° é adequada para projetos de agrimensura que requerem maior precisão.',
            note: 'O tipo de projeção determina a densidade de zonas e o método de cálculo. Por favor, escolha o tipo apropriado de acordo com os requisitos do seu projeto.'
        },
        {
            title: 'Inserir Dados de Coordenadas',
            description: 'Ao inserir uma coordenada individual, insira valores nas caixas de entrada de longitude e latitude respectivamente; para entrada em lote, insira vários pares de coordenadas linha por linha na área de texto, separando longitude e latitude com vírgulas por linha. Por exemplo: 116.3975,39.9085.',
            note: 'O intervalo de longitude é de -180° a 180°, o intervalo de latitude é de -90° a 90°. Coordenadas fora desses intervalos serão ignoradas.'
        },
        {
            title: 'Executar Operação de Cálculo',
            description: 'Clique no botão "Calcular Zona" para executar a operação de cálculo. A ferramenta calculará automaticamente e exibirá o número de zona de projeção correspondente, hemisfério e meridiano central para cada ponto de coordenadas com base nas suas coordenadas inseridas e no tipo de projeção selecionado.',
            note: 'Após a conclusão do cálculo, o primeiro resultado mostrará um efeito de destaque para ajudá-lo a localizá-lo rapidamente.'
        },
        {
            title: 'Visualizar Zonas do Mapa',
            description: 'Na área do mapa da direita, você pode visualizar números de zona de projeção em diferentes locais movendo o mouse. O mapa mostrará informações do número de zona da posição do mouse em tempo real, ajudando você a entender intuitivamente a distribuição das zonas de projeção UTM.',
            note: 'A grade de zonas no mapa será exibida dinamicamente de acordo com o seu tipo de projeção selecionado (zona de 3° ou zona de 6°).'
        },
        {
            title: 'Exportar ou Copiar Resultados',
            description: 'Clique no botão de cópia ao lado de cada resultado para copiar esse resultado para a área de transferência. Se houver vários resultados, você pode usar o botão "Exportação em Lote" na parte superior para salvar todos os resultados como um arquivo de texto.',
            note: 'Operações de cópia também acionam animações de destaque, permitindo que você saiba claramente qual resultado foi copiado.'
        }
    ],

    successTitle: 'Parabéns!',
    successContent: 'Você aprendeu com sucesso como usar nosso Localizador de Zona de Projeção. Agora você pode facilmente calcular números de zona de projeção UTM para qualquer ponto de coordenada, melhorando a eficiência do trabalho através de funcionalidades de processamento em lote e visualização.',

    relatedToolsTitle: 'Ferramentas Relacionadas que Podem lhe Interessar',
    relatedTools: [
        {
            name: 'Conversor de Formato de Coordenadas',
            description: 'Suporta conversão entre formatos de graus decimais, graus minutos segundos e graus minutos, fornecendo funções de conversão e exportação em lote.',
            url: 'https://www.ufreetools.com/tool/coordinate-format-converter'
        },
        {
            name: 'Calculadora de Divisão de Folha de Mapa',
            description: 'Calcula números de folhas de mapa com base em coordenadas de latitude e longitude, suportando múltiplas escalas.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'Calculadora de Área e Perímetro',
            description: 'Suporta desenho de polígonos para calcular automaticamente área e perímetro, fornecendo troca de múltiplas unidades.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        {
            name: 'Calculadora de Linha de Base',
            description: 'Insira coordenadas de início e fim para calcular comprimento e azimute da linha de base, suportando análise de propagação de erro.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    ],

    referencesTitle: 'Recursos de Referência',
    references: [
        {
            name: 'Sistema de Coordenadas Universal Transversa de Mercator',
            description: 'Introdução detalhada à projeção Universal Transversa de Mercator na Wikipédia',
            url: 'https://pt.wikipedia.org/wiki/Sistema_de_coordenadas_Universal_Transverso_de_Mercator'
        },
        {
            name: 'Projeção Cartográfica',
            description: 'Recursos acadêmicos sobre métodos e aplicações de projeção cartográfica',
            url: 'https://pt.wikipedia.org/wiki/Projeção_cartográfica'
        },
        {
            name: 'Sistema de Coordenadas Gauss-Krüger',
            description: 'Introdução aos métodos de projeção cartográfica comumente usados na China',
            url: 'https://pt.wikipedia.org/wiki/Projeção_de_Mercator_transversa'
        }
    ]
}