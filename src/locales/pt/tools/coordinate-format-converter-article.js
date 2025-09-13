export default {
    title: 'Guia de uso do conversor de formato de coordenadas - Ferramenta de conversão de latitude e longitude online',
    functionTitle: 'O que é o conversor de formato de coordenadas e para que serve?',
    intro: 'Nosso <strong>conversor de formato de coordenadas</strong> é uma ferramenta online poderosa que permite a conversão precisa entre graus decimais, graus minutos segundos e formato de graus minutos. A ferramenta suporta conversão de coordenadas individuais e em lote, fornece configurações decimais personalizáveis e permite ajuste de precisão em tempo real através de um controle deslizante. Os resultados da conversão apresentam efeitos de animação em destaque, suportam cópia com um clique para a área de transferência e funcionalidade de exportação em lote. Usando nosso <strong>conversor de latitude e longitude</strong>, você pode facilmente lidar com vários formatos de coordenadas geográficas para atender às necessidades profissionais em agrimensura, navegação, SIG e mais.',

    useCasesTitle: 'Cenários comuns de aplicação do conversor de formato de coordenadas',
    useCases: [
        'Processamento de dados SIG, padronizando dados de coordenadas de diferentes formatos',
        'Conversão de coordenadas de dispositivos de navegação GPS, adaptando-se aos requisitos de coordenadas de diferentes serviços de mapas',
        'Organização de dados de coordenadas em projetos de agrimensura, melhorando a eficiência do processamento de dados',
        'Padronização de dados de pesquisa geográfica, garantindo a consistência do formato de dados',
        'Exploração ao ar livre e navegação marítima, convertendo rapidamente formatos de coordenadas para diferentes dispositivos',
        'Criação de mapas e análise espacial, processando dados de coordenadas de várias fontes'
    ],

    tipTitle: 'Dicas profissionais:',
    tipContent: 'Ao realizar conversão de coordenadas em lote, é recomendável primeiro testar os resultados da conversão com dados de amostra para garantir que as configurações de formato estejam corretas. Ajustando o controle deslizante de casas decimais, você pode visualizar em tempo real o impacto das mudanças de precisão nos resultados e selecionar a configuração de precisão mais adequada para suas necessidades de aplicação.',

    conclusion: 'O <strong>conversor de formato de coordenadas</strong> é muito útil para engenheiros agrimensores, profissionais de SIG, entusiastas de navegação e qualquer pessoa que trabalhe com dados de coordenadas geográficas. Usando nossa ferramenta de conversão de latitude e longitude, você pode economizar muito tempo de cálculo manual, evitar erros de conversão de formato e melhorar significativamente a eficiência do trabalho através de capacidades de processamento em lote. Nossa ferramenta torna o processo de conversão de coordenadas simples e eficiente sem a necessidade de instalar nenhum software profissional.',

    faqTitle: 'Perguntas frequentes',
    faqs: [
        {
            question: 'Quais modos de conversão o conversor de formato de coordenadas suporta?',
            answer: 'Nosso <strong>conversor de coordenadas online</strong> suporta três modos de conversão principais: Graus Decimais (DD), Graus Minutos Segundos (DMS) e Graus Minutos (DM). Formato de Graus Decimais como 40.7128, formato de Graus Minutos Segundos como 40°42\'46.08"N, formato de Graus Minutos como 40°42.768\'N. Você pode converter livremente entre esses três formatos para atender aos requisitos de vários cenários de aplicação.'
        },
        {
            question: 'Como realizar conversão de coordenadas em lote?',
            answer: 'Usando nossa <strong>ferramenta de conversão em lote de latitude e longitude</strong>, basta inserir vários pares de coordenadas linha por linha na área de entrada em lote, separando latitude e longitude com vírgulas. Por exemplo: 39.9042,116.4074. Após clicar no botão de conversão, o sistema processará automaticamente todas as coordenadas e exibirá os resultados da conversão. A função de exportação em lote pode salvar todos os resultados como um arquivo de texto.'
        },
        {
            question: 'Como a configuração de casas decimais afeta os resultados da conversão?',
            answer: 'A configuração de casas decimais controla a exibição de precisão dos resultados da conversão. Ajustando o controle deslizante de casas decimais, você pode visualizar em tempo real o impacto das mudanças de precisão nos resultados. Mais casas decimais significam maior precisão, mas também podem aumentar a redundância de dados. Recomendamos selecionar a precisão apropriada com base nas necessidades reais de aplicação, geralmente 6 casas decimais são suficientes para a maioria das aplicações geográficas.'
        },
        {
            question: 'Qual é o propósito da animação em destaque nos resultados da conversão?',
            answer: 'Nossa <strong>ferramenta de conversão de coordenadas</strong> exibe efeitos de animação em destaque após completar operações de conversão ou cópia, ajudando os usuários a localizar rapidamente os resultados com os quais acabaram de operar. Este mecanismo de feedback visual melhora a experiência do usuário, especialmente ao processar várias coordenadas, permitindo que você veja claramente qual resultado foi selecionado ou copiado.'
        },
        {
            question: 'Como garantir a precisão da conversão de coordenadas?',
            answer: 'Nossa ferramenta valida automaticamente as faixas de coordenadas (latitude -90° a 90°, longitude -180° a 180°) durante a conversão e realiza cálculos matemáticos precisos. Para garantir a precisão, é recomendável carregar dados de amostra antes do uso para verificar os resultados da conversão e confirmar que atendam às expectativas antes de processar dados reais. A ferramenta também suporta cópia com um clique de todos os resultados de conversão de formatos para validação cruzada.'
        }
    ],

    tutorialTitle: 'Como usar o conversor de formato de coordenadas',
    steps: [
        {
            title: 'Selecionar modo de conversão',
            description: 'Na parte superior da área de entrada esquerda, selecione o modo de conversão necessário: Graus Decimais (DD), Graus Minutos Segundos (DMS) ou Graus Minutos (DM). Diferentes modos correspondem a diferentes formatos de entrada e layouts de interface.',
            note: 'O modo de conversão determina o tipo e número de campos de entrada, por favor selecione o modo apropriado de acordo com seu formato de dados.'
        },
        {
            title: 'Inserir dados de coordenadas',
            description: 'Baseado no modo de conversão selecionado, insira dados de coordenadas nos campos de entrada correspondentes. Você pode inserir coordenadas individuais ou várias linhas de dados de coordenadas na área de entrada em lote, com latitude e longitude separadas por vírgulas por linha.',
            note: 'Os modos DMS e DM requerem entrada separada de graus, minutos, segundos (ou graus, minutos) e direção (N/S/E/O).'
        },
        {
            title: 'Ajustar configurações de precisão',
            description: 'Use o controle deslizante de casas decimais para ajustar a precisão dos resultados da conversão. A faixa do controle deslizante é de 0-8 casas decimais, e os resultados são atualizados em tempo real durante o ajuste, facilitando a seleção da precisão mais adequada.',
            note: 'O ajuste de precisão afeta todos os resultados da conversão, incluindo os resultados atualmente exibidos e os resultados de conversão em lote.'
        },
        {
            title: 'Realizar operação de conversão',
            description: 'Clique no botão "Converter Coordenadas" para realizar a operação de conversão. A ferramenta calculará automaticamente e exibirá resultados da conversão nos três formatos com base em seus dados de entrada e modo selecionado.',
            note: 'Após completar a conversão, o primeiro resultado exibirá uma animação em destaque para ajudá-lo a localizá-lo rapidamente.'
        },
        {
            title: 'Exportar ou copiar resultados',
            description: 'Clique no botão de cópia ao lado de cada resultado para copiar todos os formatos desse resultado para a área de transferência. Se houver vários resultados, você pode usar o botão "Exportação em Lote" no topo para salvar todos os resultados como um arquivo de texto.',
            note: 'Operações de cópia também acionam animações em destaque, permitindo que você saiba claramente qual resultado foi copiado.'
        }
    ],

    successTitle: 'Parabéns!',
    successContent: 'Você aprendeu com sucesso como usar nosso conversor de formato de coordenadas. Agora você pode facilmente converter entre formatos de Graus Decimais, Graus Minutos Segundos e Graus Minutos, melhorando a eficiência do trabalho através de funcionalidades de processamento em lote e ajuste de precisão.',

    relatedToolsTitle: 'Ferramentas relacionadas que podem lhe interessar',
    relatedTools: [
        {
            name: 'Calculadora de Divisão de Folha Cartográfica',
            description: 'Calcula números de folhas cartográficas com base em coordenadas de latitude e longitude, suportando múltiplas escalas.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'Conversor de Tempo GNSS',
            description: 'Ferramenta para conversão mútua entre tempo GPS, tempo BeiDou e tempo UTC.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
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

    referencesTitle: 'Recursos de referência',
    references: [
        {
            name: 'Sistema de Coordenadas Geográficas',
            description: 'Introdução detalhada aos sistemas de coordenadas geográficas na Wikipédia',
            url: 'https://pt.wikipedia.org/wiki/Sistema_de_coordenadas_geográficas'
        },
        {
            name: 'Geodésia',
            description: 'Recursos acadêmicos sobre sistemas de coordenadas e conversão',
            url: 'https://pt.wikipedia.org/wiki/Geodésia'
        },
        {
            name: 'Biblioteca de Conversão DMS',
            description: 'Biblioteca JavaScript de código aberto para conversão de coordenadas no GitHub',
            url: 'https://github.com/gmaclennan/parse-dms'
        }
    ]
}