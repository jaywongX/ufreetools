export default {
    title: "Ferramenta GLB para STL: Guia de Uso do Conversor de Formato de Modelo 3D Online",
    functionTitle: "O que é a ferramenta GLB para STL?",
    intro: "Nossa <strong>ferramenta GLB para STL</strong> é um aplicativo profissional online de conversão de formato de modelo 3D que pode converter rapidamente arquivos GLB (Binary glTF) para o formato STL (Stereo Lithography). STL é o formato de arquivo mais utilizado na indústria de impressão 3D. Usando nosso conversor online, você pode processar em lote vários arquivos GLB e completar a conversão sem instalar nenhum software.",

    useCasesTitle: "Casos de Uso Comuns para GLB para STL",
    useCases: [
        "Converter modelos de jogos GLB para STL para preparação de impressão 3D",
        "Converter em lote vários arquivos GLB para STL",
        "Converter GLB para STL para criar modelos físicos",
        "Extrair informações geométricas de arquivos GLB",
        "Preparar STL padronizados para provedores de serviços de impressão 3D",
        "Converter modelos GLB para STL para fácil troca de dados",
        "Otimizar formato de arquivo de impressão 3D, STL tem maior compatibilidade",
        "Preparar arquivos para impressão 3D"
    ],

    tipTitle: "Dica Profissional:",
    tipContent: "O formato GLB suporta informações ricas como materiais, texturas e animações. Ao converter para STL, estas informações serão perdidas e apenas a forma geométrica é preservada.",

    conclusion: "A ferramenta de <strong>conversão de formato GLB para STL</strong> é particularmente útil para entusiastas de impressão 3D, desenvolvedores de jogos, designers e usuários que precisam materializar modelos digitais.",

    faqTitle: "Perguntas Frequentes",
    faqs: [
        {
            question: "Quais formatos GLB são suportados?",
            answer: "Nosso conversor suporta o formato de arquivo GLB (Binary glTF) padrão, incluindo as versões glTF 1.0 e glTF 2.0."
        },
        {
            question: "Quais as vantagens do STL sobre o GLB?",
            answer: "Vantagens do STL: (1) Maior compatibilidade; (2) Estrutura de arquivo simples; (3) Padrão tradicional; (4) Foco em informações geométricas."
        },
        {
            question: "Quais informações serão perdidas?",
            answer: "GLB suporta materiais, texturas, animações. STL contém apenas informações geométricas. Essas informações serão perdidas."
        },
        {
            question: "Qual a diferença entre STL binário e STL ASCII?",
            answer: "STL binário usa codificação binária com tamanho menor. STL ASCII usa formato de texto."
        },
        {
            question: "Em quais softwares os arquivos STL podem ser usados?",
            answer: "STL é suportado por softwares de fatiamento principais incluindo Cura, PrusaSlicer, Simplify3D, 3D Builder."
        },
        {
            question: "O processo de conversão é seguro?",
            answer: "Completamente seguro! Todo o processamento é feito localmente em seu navegador."
        },
        {
            question: "O tamanho do arquivo STL mudará?",
            answer: "Geralmente muda. GLB usa compressão binária. Após conversão para STL, o tamanho depende da complexidade do modelo."
        }
    ],

    tutorialTitle: "Como Usar a Ferramenta GLB para STL",
    steps: [
        {
            title: "Carregar Arquivos GLB",
            description: "Carregue os arquivos GLB. Você pode <strong>arrastar e soltar arquivos</strong> ou <strong>clicar em procurar</strong>.",
            note: "Suporta vários arquivos GLB simultaneamente."
        },
        {
            title: "Definir Parâmetros",
            description: "Defina o <strong>nome do modelo</strong> (opcional) e o <strong>formato de saída</strong> (STL binário ou STL ASCII).",
            note: "Formato binário recomendado para menor tamanho."
        },
        {
            title: "Converter para STL",
            description: "Clique no botão <strong>\"Converter para STL\"</strong>.",
            note: "Mantenha a página aberta."
        },
        {
            title: "Visualizar Resultados",
            description: "A área de saída mostrará informações para todos os arquivos STL convertidos.",
            note: "STL é adequado para impressão 3D."
        },
        {
            title: "Baixar Arquivos STL",
            description: "Clique em <strong>\"Baixar STL\"</strong> ou use <strong>\"Download em Lote (ZIP)\"</strong>.",
            note: "Todo o processamento é local."
        }
    ],

    successTitle: "Parabéns!",
    successContent: "Você aprendeu com sucesso como usar nossa ferramenta GLB para STL.",

    relatedToolsTitle: "Ferramentas Relacionadas que Você Pode Estar Interessado",
    relatedTools: [
        {
            name: "Ferramenta STL para GLB",
            description: "Converter STL para GLB.",
            url: "https://www.ufreetools.com/tool/stl-to-glb-converter"
        },
        {
            name: "Ferramenta STL para OBJ",
            description: "Converter STL para OBJ.",
            url: "https://www.ufreetools.com/tool/stl-to-obj-converter"
        },
        {
            name: "Ferramenta Imagem para PNG",
            description: "Converter JPG/WebP para PNG.",
            url: "https://www.ufreetools.com/tool/image-to-png"
        },
        {
            name: "Ferramenta Imagem para JPG",
            description: "Converter PNG/WebP para JPG.",
            url: "https://www.ufreetools.com/tool/image-to-jpg"
        }
    ],

    referencesTitle: "Recursos de Referência",
    references: [
        {
            name: "Especificação Oficial do Formato glTF",
            description: "Entenda a especificação técnica glTF/GLB",
            url: "https://www.khronos.org/gltf/"
        },
        {
            name: "Formato de Arquivo STL",
            description: "História e estrutura do STL",
            url: "https://en.wikipedia.org/wiki/STL_%28file_format%29"
        },
        {
            name: "Comparação de Formatos de Arquivo 3D",
            description: "Características de STL, OBJ, glTF",
            url: "https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/"
        }
    ]
}
