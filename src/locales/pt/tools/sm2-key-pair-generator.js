export default {
    name: "Gerador de Par de Chaves SM2",
    description: "Gera pares de chaves pública/privada SM2 conforme padrão GB/T 32918-2016, suportando múltiplos formatos de saída",
    settings: "Configurações",
    keyLength: "Tamanho da Chave",
    bits: "bits",
    standardBits: "O padrão SM2 usa chaves de 256 bits",
    outputFormat: "Formato de Saída",
    keyPairCount: "Quantidade de Pares",
    maxKeysWarning: "Máximo de 10 pares por vez",
    generating: "Gerando",
    generate: "Gerar Par de Chaves",
    results: "Resultados",
    generatingKeys: "Gerando pares de chaves...",
    copyAll: "Copiar Todos",
    noKeysGenerated: "Nenhuma chave gerada. Configure e clique em \"Gerar Par de Chaves\".",
    keyPair: "Par de Chaves",
    copy: "Copiar",
    publicKey: "Chave Pública",
    privateKey: "Chave Privada",
    keyComponents: "Componentes da Chave",
    invalidCount: "Insira um número entre 1 e 10",
    generateFailed: "Falha ao gerar pares",
    generateSuccess: "{count} pares SM2 gerados com sucesso",
    copiedToClipboard: "Copiado para área de transferência",
    copyFailed: "Falha ao copiar",
    downloadedAs: "Salvo como {filename}",
    exportPem: "Exportar como PEM",
    exportAllJson: "Exportar como JSON",
    exportAllTxt: "Exportar como TXT",
    exportTxt: "Exportar como TXT",
    singleKeyDownloaded: "{type} salvo como PEM",
    allPemDownloaded: "Todas as chaves salvas como PEM",
    keyPairCopied: "Par copiado para área de transferência",
    allKeysCopied: "Todos os pares copiados",
    componentsCopied: "Componentes copiados",
    componentsDownloaded: "Componentes salvos como TXT",

    // Conteúdo do artigo
    article: {
        title: "Gerador de Chaves SM2: Guia Completo do Padrão Chinês",
        introTitle: "O que é e para que serve?",
        introPara1: "O <strong>Gerador de Chaves SM2</strong> cria pares criptográficos conforme o padrão nacional chinês GB/T 32918-2016. Diferente de RSA ou ECC, o SM2 foi projetado especificamente para atender regulamentações chinesas.",
        introPara2: "Nossa <strong>ferramenta</strong> simplifica a geração segura de chaves SM2, com suporte a formatos como PEM, HEX e Base64 para diversos ambientes.",
        
        useCaseTitle: "Aplicações Principais",
        useCase1: "<strong>Conformidade financeira</strong>: Bancos e fintechs na China usam SM2 para transações seguras.",
        useCase2: "<strong>Sistemas governamentais</strong>: Órgãos chineses utilizam SM2 para comunicações e autenticação.",
        useCase3: "<strong>Comércio eletrônico</strong>: Empresas que negociam com a China precisam do SM2 para conformidade.",
        useCase4: "<strong>Aplicativos móveis</strong>: Desenvolvedores para o mercado chinês implementam SM2 para segurança.",
        standardInfo: "O SM2 faz parte do conjunto de algoritmos SM (que inclui SM3 para hash e SM4 para criptografia simétrica), tornando-se cada vez mais importante no ecossistema de segurança digital chinês.",
        
        tutorialTitle: "Como Usar o Gerador",
        tutorialIntro: "Siga este guia para gerar pares SM2 de forma eficiente. Cada par inclui chaves pública e privada para operações criptográficas.",
        
        step1Title: "Passo 1: Parâmetros",
        step1Desc: "O SM2 usa chaves fixas de 256 bits, balanceando segurança e desempenho conforme o padrão.",
        
        step2Title: "Passo 2: Formato",
        step2Desc: "Escolha o formato de saída:<ul><li><strong>PEM</strong>: Padrão para certificados</li><li><strong>HEX</strong>: Para implementação direta</li><li><strong>Base64</strong>: Ideal para APIs web</li></ul>",
        
        step3Title: "Passo 3: Quantidade",
        step3Desc: "Defina quantos pares são necessários - útil para testes ou múltiplos canais.",
        
        step4Title: "Passo 4: Gerenciamento",
        step4Desc: "Clique em \"Gerar\" e armazene as chaves privadas com segurança.",
        
        relatedToolsTitle: "Ferramentas Relacionadas",
        relatedToolsDesc: "Para segurança completa, considere:",
        relatedTool1: "Gerador RSA - Para padrões internacionais",
        relatedTool2: "Calculadora Hash - Incluindo SM3 para integridade",
        
        faqTitle: "Perguntas Frequentes",
        faq1Question: "Como SM2 difere de RSA?",
        faq1Answer: "SM2 é baseado em curvas elípticas (256 bits), oferecendo segurança equivalente a RSA 3072 bits com melhor desempenho. É obrigatório para conformidade na China, enquanto RSA tem adoção global mais ampla.",
        
        faq2Question: "O SM2 é seguro para uso internacional?",
        faq2Answer: "Sim, o SM2 atende padrões internacionais de segurança. Sua adoção depende mais de requisitos regulatórios do que de considerações técnicas.",
        
        faq3Question: "Como testar meus pares SM2?",
        faq3Answer: "Criptografe uma mensagem com a chave pública e descriptografe com a privada. Se o resultado coincidir, o par está funcional.",
        
        faq4Question: "Funciona com SSL/TLS?",
        faq4Answer: "O suporte varia. Na China, o protocolo TLCP usa SM2/SM3/SM4. Internacionalmente, pode requerer configurações específicas ou bibliotecas como OpenSSL 1.1.1+.",
        
        faq5Question: "O que são x, y e d no SM2?",
        faq5Answer: "<ul><li><strong>x/y</strong>: Coordenadas do ponto da curva elíptica (chave pública)</li><li><strong>d</strong>: Valor escalar secreto (chave privada)</li></ul>",
        
        resourcesTitle: "Recursos",
        resourcesDesc: "Para aprofundamento:",
        resource1: "GB/T 32918-2016 - Padrão oficial (em chinês)",
        resource2: "Administração Nacional de Criptografia - Documentos",
        resource3: "ISO/IEC 14888-3:2018 - Padrão internacional que referencia SM2",
        
        conclusionTitle: "Conclusão",
        conclusionPara: "Este <strong>gerador de chaves SM2</strong> simplifica a criação de pares criptográficos conforme os padrões chineses, auxiliando desenvolvedores e empresas a cumprirem requisitos regulatórios enquanto implementam segurança robusta."
    }
}