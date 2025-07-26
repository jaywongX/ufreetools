export default {
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
}
