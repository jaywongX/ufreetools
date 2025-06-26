export default {
    name: "Analisador de Estrutura ASN.1",
    description: "Uma ferramenta abrangente para decodificar, visualizar e analisar estruturas de dados codificadas em ASN.1 usadas em criptografia, telecomunicações e protocolos de rede. Suporta formatos PEM, HEX, Base64 e DER, com visualização interativa em árvore e múltiplas opções de exportação.",
    input: "Dados de entrada",
    output: "Estrutura analisada",
    inputFormat: "Formato de entrada",
    inputPlaceholder: "Insira dados ASN.1 no formato selecionado...",
    loadExample: "Carregar exemplo",
    clickToUpload: "Clique para enviar arquivo",
    orDragDrop: "Ou arraste e solte",
    supportedFormats: "Formatos suportados: PEM, DER, HEX, Base64",
    showHexDump: "Mostrar hex dump",
    trimLargeData: "Truncar valores grandes",
    useDefinitionFile: "Usar arquivo de definição ASN.1 para análise",
    error: "Erro",
    noData: "Nenhum dado ASN.1 para exibir. Por favor, insira dados na área de entrada ou envie um arquivo.",
    treeStructure: "Estrutura de árvore ASN.1",
    hexDump: "Hex dump",
    parseError: "Falha ao analisar dados ASN.1. Verifique o formato e os dados de entrada.",
    invalidPEM: "Formato PEM inválido. Certifique-se de ter os marcadores BEGIN/END corretos.",
    invalidHex: "Dados hexadecimais inválidos. Apenas caracteres hexadecimais (0-9, A-F) são permitidos.",
    invalidBase64: "Dados Base64 inválidos.",
    derTextNotSupported: "Formato DER não pode ser inserido como texto. Por favor, envie um arquivo DER.",
    unsupportedFormat: "Formato de entrada não suportado selecionado.",
    unexpectedEOF: "Fim inesperado dos dados ao analisar estrutura ASN.1.",
    lengthTooLong: "Campo de comprimento ASN.1 muito grande para processar.",
    fileReadError: "Erro ao ler arquivo enviado.",
    fileTooLarge: "Arquivo muito grande. Tamanho máximo é 10MB.",

    // Descrições de recursos
    featureHeading: "Principais recursos",
    feature1: "Suporte a múltiplos formatos: Analisa dados ASN.1 em formatos PEM, HEX, Base64 ou DER",
    feature2: "Visualização interativa em árvore: Visualiza a estrutura ASN.1 através de nós expansíveis",
    feature3: "Visualização de hex dump: Visualiza bytes de dados brutos, com destaque ao passar o mouse",
    feature4: "Análise de OID: Exibe nomes para identificadores de objeto comuns",
    feature5: "Processamento de grandes dados: Opção para truncar valores grandes para melhor legibilidade",

    // Aplicações comuns ASN.1
    applicationsHeading: "Aplicações comuns",
    application1: "Certificados X.509: Visualiza e analisa estrutura de certificados SSL/TLS",
    application2: "Arquivos PKCS: Inspeciona formatos de chaves privadas, solicitações de certificado e armazenamento",
    application3: "CMS/PKCS#7: Examina estruturas de dados assinadas e criptografadas",
    application4: "SNMP MIB: Decodifica dados do protocolo simples de gerenciamento de rede",

    // Instruções
    instructionsHeading: "Como usar",
    step1: "Selecione o formato dos dados de entrada (PEM, HEX, Base64, DER)",
    step2: "Insira os dados na área de texto ou envie um arquivo",
    step3: "O analisador processará automaticamente os dados e exibirá a estrutura",
    step4: "Explore a árvore ASN.1 expandindo/recolhendo nós",
    step5: "Passe o mouse sobre nós para destacar bytes correspondentes no hex dump",

    // Exportação
    exportAsJson: "Exportar como JSON",
    exportFormat: "Formato de exportação",
    exportSuccess: "Estrutura exportada com sucesso",
    exportFailed: "Falha ao exportar estrutura",
    noDataToExport: "Nenhum dado para exportar",
    copiedToClipboard: "Copiado para a área de transferência",
    copyFailed: "Falha ao copiar",
    hexSeparator: "Separador hexadecimal",
    none: "Nenhum",
    space: "Espaço",
    colon: "Dois pontos",
    dash: "Traço",
    dot: "Ponto",
    colorHighlight: "Colorir por tipo",
    settings: "Configurações",
    displayOptions: "Opções de exibição",
    advancedOptions: "Opções avançadas",
    expandAllNodes: "Expandir todos os nós",
    hexDumpDisabled: "Exibição de hex dump desativada. Ative nas configurações para ver bytes brutos.",
    copyValue: "Copiar valor",
    expandAll: "Expandir tudo",
    collapseAll: "Recolher tudo",
    autoScroll: "Rolagem automática",
    article: {
        title: "Analisador de Estrutura ASN.1 - Decodificar e visualizar dados codificados em ASN.1",

        // Seção de introdução
        introTitle: "O que é um Analisador de Estrutura ASN.1?",
        introPara1: "O Analisador de Estrutura ASN.1 é uma ferramenta poderosa para decodificar e visualizar estruturas de dados codificadas em Abstract Syntax Notation One (ASN.1). ASN.1 é uma linguagem padrão de descrição de interface usada para definir estruturas de dados que podem ser serializadas e desserializadas entre plataformas. É amplamente utilizada em telecomunicações e redes de computadores, especialmente em protocolos criptográficos.",
        introPara2: "Nosso Analisador de Estrutura ASN.1 fornece uma abordagem interativa para inspecionar estruturas ASN.1 complexas, suportando múltiplos formatos de entrada incluindo PEM, HEX, Base64 e DER. Ele fornece visualização baseada em árvore, permitindo que você explore facilmente elementos ASN.1 aninhados, sendo valioso para desenvolvedores, pesquisadores de segurança e engenheiros de rede.",

        applicationTitle: "Aplicações comuns do Analisador ASN.1",
        application1: "<strong>Análise de certificados X.509</strong>: Inspeciona estrutura e conteúdo de certificados SSL/TLS para auditoria de segurança e solução de problemas.",
        application2: "<strong>Inspeção de arquivos PKCS</strong>: Analisa detalhadamente formatos de chaves privadas, solicitações de certificado e armazenamento.",
        application3: "<strong>Sintaxe de mensagem criptográfica (CMS)</strong>: Examina estruturas de dados assinadas e criptografadas usadas em protocolos de mensagem segura.",
        application4: "<strong>Análise de protocolos de rede</strong>: Decodifica dados ASN.1 usados em protocolos como SNMP, LDAP e H.323.",
        introPara3: "A análise de estrutura ASN.1 é essencial para entender formatos de dados complexos usados em sistemas de segurança modernos. Nosso analisador torna este processo intuitivo fornecendo visualização colorida, visualização em árvore expansível e hex dump dos dados codificados.",

        // Seção FAQ
        faqTitle: "Perguntas frequentes sobre o Analisador de Estrutura ASN.1",

        faq1Question: "Quais formatos o Analisador de Estrutura ASN.1 aceita?",
        faq1Answer: "Nosso Analisador de Estrutura ASN.1 suporta múltiplos formatos de entrada, incluindo PEM (Privacy Enhanced Mail), HEX (hexadecimal), Base64 e arquivos binários DER (Distinguished Encoding Rules). Esta flexibilidade permite que você trabalhe com dados ASN.1 de várias fontes sem necessidade de ferramentas de conversão.",

        faq2Question: "Como usar o analisador ASN.1 para analisar certificados X.509?",
        faq2Answer: "Para analisar certificados X.509, simplesmente selecione 'PEM' como formato de entrada e cole seu certificado (incluindo os marcadores BEGIN/END CERTIFICATE) na área de entrada. O analisador decodificará automaticamente a estrutura e a exibirá como uma árvore interativa, permitindo que você expanda nós e inspecione campos específicos do certificado como assunto, emissor, validade e extensões.",

        faq3Question: "Posso exportar a estrutura ASN.1 analisada para documentação?",
        faq3Answer: "Sim, você pode exportar a estrutura ASN.1 analisada como JSON clicando no botão \"Exportar como JSON\" no painel de configurações. Este recurso é útil para documentar estruturas, compartilhar com colegas ou processar ainda mais os dados estruturados em seus próprios aplicativos.",

        faq4Question: "Qual a diferença entre ASN.1, DER e codificação BER?",
        faq4Answer: "ASN.1 (Abstract Syntax Notation One) é a linguagem usada para definir estruturas de dados, enquanto DER (Distinguished Encoding Rules) e BER (Basic Encoding Rules) são regras específicas que determinam como estruturas ASN.1 são convertidas para formato binário. DER é um subconjunto de BER que garante que cada valor ASN.1 tenha apenas uma codificação, sendo preferido em aplicações criptográficas. Nosso analisador lida principalmente com estruturas ASN.1 codificadas em DER, que são mais comuns em aplicações de segurança.",

        faq5Question: "Como o analisador ASN.1 lida com identificadores de objeto (OID)?",
        faq5Answer: "O Analisador de Estrutura ASN.1 identifica automaticamente identificadores de objeto (OID) comuns e exibe seus nomes amigáveis junto com os valores numéricos. Por exemplo, '1.2.840.113549.1.1.11' será exibido como 'sha256WithRSAEncryption'. Este recurso facilita entender o propósito de diferentes elementos em estruturas complexas como certificados X.509 e mensagens criptográficas.",

        // Seção Tutorial
        tutorialTitle: "Como usar o Analisador de Estrutura ASN.1",

        step1Title: "Passo 1: Selecionar formato de entrada",
        step1Content: "Primeiro, selecione o formato apropriado para seus dados ASN.1. Use os botões de rádio no painel de entrada para escolher entre opções PEM, HEX, Base64 ou DER. O formato que você selecionar determinará como o analisador interpretará seus dados de entrada.",

        step2Title: "Passo 2: Inserir ou enviar dados ASN.1",
        step2Content: "Insira seus dados codificados em ASN.1 na área de texto, ou envie um arquivo clicando na área de upload. Para formato PEM, certifique-se de que seus dados contenham os marcadores BEGIN/END corretos. Para entrada hexadecimal, você pode usar vários separadores (espaço, dois pontos, etc.), que podem ser configurados no painel de configurações.",
        step2Example: "-----BEGIN CERTIFICATE-----\nMIIDazCCAlOgAwIBAgIUXF3AmOAMqvdXdFLJV8C5c9K6cI8wDQYJKoZIhvcNAQEL\n...\n-----END CERTIFICATE-----",

        step3Title: "Passo 3: Explorar estrutura de árvore ASN.1",
        step3Content: "Assim que os dados forem analisados, a estrutura de árvore ASN.1 será exibida no painel inferior esquerdo. Você pode expandir e recolher nós clicando nos triângulos. Cada nó mostra seu tipo de rótulo (como SEQUENCE, INTEGER, OBJECT IDENTIFIER) e valor. A codificação por cores ajuda a distinguir diferentes tipos ASN.1.",

        step4Title: "Passo 4: Inspecionar representação hexadecimal",
        step4Content: "Se a opção \"Mostrar hex dump\" estiver ativada, o painel direito exibirá o hex dump dos dados ASN.1. Passar o mouse sobre elementos na árvore destacará os bytes correspondentes no hex dump, ajudando você a entender a estrutura binária codificada.",
        step4Example: "00000000 30 82 03 6a 30 82 02 52 a0 03 02 01 02 02 14 5c 0..j0..R........\\",

        step5Title: "Passo 5: Configurar opções de exibição",
        step5Content: "Use o painel de configurações para personalizar a exibição de acordo com suas necessidades. As opções incluem mostrar/ocultar hex dump, truncar valores grandes para melhor legibilidade, selecionar separador hexadecimal e ativar destaque por tipo. Você também pode expandir todos os nós de uma vez para obter uma visão completa da estrutura.",

        // Seção Recursos
        resourcesTitle: "Recursos adicionais",

        relatedToolsTitle: "Ferramentas relacionadas",
        relatedTool1: "Conversor Base64 - Codifica e decodifica dados Base64",
        relatedTool2: "Conversor Base64 Hex - Converte facilmente entre formatos Base64 e hexadecimal, com suporte a separadores personalizados e maiúsculas/minúsculas",
        relatedTool3: "Decodificador de certificado - Análise detalhada de certificados X.509",

        externalResourcesTitle: "Recursos externos",
        externalResource1: "Introdução ASN.1 da ITU-T - Documentação oficial do padrão ASN.1",
        externalResource2: "RFC 5280 - Perfil de certificado e CRL de infraestrutura de chave pública X.509 da Internet"
    },
};