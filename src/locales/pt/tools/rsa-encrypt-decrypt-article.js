export default {
    title: "Guia da Ferramenta de Criptografia RSA: Proteja Seus Dados com Criptografia de Chave Pública",
    introTitle: "Entendendo a Criptografia RSA",
    intro1: "A criptografia RSA é um poderoso algoritmo de criptografia assimétrica que usa um par de chaves - pública e privada - para proteger dados sensíveis. Nossa <strong>ferramenta de criptografia RSA</strong> fornece uma interface amigável para executar operações de criptografia e descriptografia RSA diretamente no seu navegador, sem enviar seus dados para nenhum servidor.",
    intro2: "Diferente dos métodos de criptografia simétrica que usam uma única chave, a criptografia RSA usa pares de chaves matematicamente relacionadas, onde dados criptografados com a chave pública só podem ser descriptografados com a chave privada correspondente. Isso torna o RSA ideal para comunicação segura e assinaturas digitais em várias aplicações.",
    intro3: "Nossa ferramenta suporta geração de chaves com vários tamanhos (1024, 2048, 3072 e 4096 bits), diferentes métodos de preenchimento (PKCS#1 v1.5 e OAEP) e múltiplos formatos de entrada/saída (texto, Base64 e hexadecimal). Essa flexibilidade a torna útil tanto para fins educacionais quanto para necessidades criptográficas práticas.",

    useCasesTitle: "Aplicações Práticas da Criptografia RSA",
    useCase1: "<strong>Comunicação Segura</strong>: criptografe mensagens confidenciais usando a chave pública do destinatário, garantindo que apenas o destinatário pretendido com a chave privada possa descriptografar a mensagem.",
    useCase2: "<strong>Verificação de Certificados</strong>: gere pares de chaves para testar implementações de certificados digitais, infraestrutura PKI ou configurações SSL/TLS.",
    useCase3: "<strong>Proteção de Dados</strong>: criptografe arquivos sensíveis antes de armazená-los em serviços na nuvem ou transmiti-los por redes inseguras, mantendo a confidencialidade mesmo se os dados criptografados forem interceptados.",
    useCase4: "<strong>Fins Educacionais</strong>: aprenda e demonstre os princípios da criptografia de chave pública, explorando como a criptografia RSA funciona na prática com diferentes tamanhos de chave e métodos de preenchimento.",

    faqTitle: "Perguntas Frequentes",

    faq1q: "Qual a diferença entre RSA e outros algoritmos de criptografia?",
    faq1a: "RSA é um <strong>algoritmo de criptografia assimétrica</strong> que usa um par de chaves pública-privada, enquanto algoritmos simétricos como AES usam uma única chave compartilhada. Essa abordagem de par de chaves permite que o RSA forneça troca segura de chaves e assinaturas digitais, que algoritmos simétricos não podem oferecer. No entanto, o RSA é mais intensivo computacionalmente e normalmente usado para criptografar pequenas quantidades de dados ou para troca de chaves, enquanto algoritmos simétricos são mais rápidos para criptografia de dados em massa.",

    faq2q: "Qual tamanho de chave RSA devo escolher para obter a melhor segurança?",
    faq2a: "Para requisitos de segurança modernos, recomendamos usar pelo menos chaves RSA de 2048 bits. Chaves de 1024 bits são consideradas vulneráveis a atacantes bem financiados e devem ser evitadas para dados sensíveis. Chaves de 3072 bits fornecem segurança aproximadamente equivalente à criptografia simétrica de 128 bits (recomendada pela NIST para proteção além de 2030), enquanto chaves de 4096 bits fornecem margem adicional de segurança para aplicações altamente sensíveis. No entanto, chaves maiores exigem mais recursos computacionais para geração e operações de criptografia/descriptografia.",

    faq3q: "Qual a diferença entre preenchimento PKCS#1 v1.5 e OAEP?",
    faq3a: "PKCS#1 v1.5 é um esquema de preenchimento mais antigo, amplamente suportado, mas com vulnerabilidades conhecidas para certos tipos de ataques (como o ataque de Bleichenbacher). <strong>OAEP (Optimal Asymmetric Encryption Padding)</strong> é um esquema de preenchimento mais novo e seguro, projetado para fornecer segurança semântica contra ataques de texto cifrado escolhido adaptativamente. Para novas aplicações, recomendamos usar o preenchimento OAEP sempre que possível, mas PKCS#1 v1.5 ainda pode ser usado para compatibilidade com sistemas legados.",

    faq4q: "Como armazenar e compartilhar com segurança minhas chaves RSA?",
    faq4a: "Para <strong>chaves privadas RSA</strong>, sempre armazene-as com segurança usando controles de acesso fortes, de preferência criptografadas. Nunca compartilhe chaves privadas ou as armazene em texto simples em sistemas inseguros. Para <strong>chaves públicas RSA</strong>, embora sejam projetadas para serem compartilhadas, verifique a autenticidade das chaves públicas recebidas de outras pessoas para prevenir ataques de intermediário. Nossa ferramenta permite exportar chaves no formato PEM padrão, que pode ser importado pela maioria dos aplicativos e bibliotecas criptográficas.",

    faq5q: "Quais são as limitações da criptografia RSA baseada em navegador?",
    faq5a: "Ferramentas baseadas em navegador como a nossa têm algumas limitações: (1) <strong>Restrições de desempenho</strong> - geração de chaves e criptografia/descriptografia de arquivos grandes podem ser mais lentas que aplicativos locais; (2) <strong>Limites de memória</strong> - navegadores limitam a quantidade de memória que pode ser usada, o que pode afetar operações muito grandes; (3) <strong>Limites de bibliotecas criptográficas</strong> - usamos bibliotecas padrão do setor (Forge), mas implementações em navegadores podem variar ligeiramente. Para aplicações críticas de segurança que requerem alto desempenho ou processamento de arquivos muito grandes, considere usar software criptográfico dedicado.",

    tutorialTitle: "Guia Passo a Passo para Usar a Ferramenta de Criptografia RSA",
    tutorialIntro: "Siga este guia abrangente para usar efetivamente nossa ferramenta de criptografia e descriptografia RSA para proteger seus dados sensíveis:",

    step1Title: "Passo 1: Gerar ou Importar um Par de Chaves RSA",
    step1: "Primeiro, gere um novo par de chaves RSA ou importe um existente. Para gerar uma nova chave, selecione o tamanho desejado (recomendamos pelo menos 2048 bits para segurança) e clique no botão <strong>Gerar Par de Chaves</strong>. A ferramenta criará chaves pública e privada no formato PEM. Alternativamente, você pode importar chaves existentes clicando no botão de importação ou usando as áreas de arrastar e soltar nos campos de chave pública ou privada.",

    step2Title: "Passo 2: Criptografar Dados Usando a Chave Pública",
    step2: "Para criptografar dados, certifique-se de ter uma chave pública no campo correspondente. Selecione o modo <strong>Criptografar</strong>, escolha seu método de preenchimento preferido (recomendamos OAEP para segurança) e selecione seu formato de entrada. Digite a mensagem de texto simples que deseja criptografar no campo de entrada. Você também pode usar o botão de importação ou a área de arrastar e soltar para importar texto simples de um arquivo. Clique no botão <strong>Criptografar</strong> para processar seus dados. A saída criptografada será exibida por padrão no formato Base64, mas você pode alternar para o formato Hex usando as opções de formato de saída.",

    step3Title: "Passo 3: Descriptografar Dados Usando a Chave Privada",
    step3: "Para descriptografar dados previamente criptografados, certifique-se de ter a chave privada correta no campo de chave privada. Selecione o modo <strong>Descriptografar</strong>, escolha o mesmo método de preenchimento usado na criptografia e selecione o formato de entrada apropriado (normalmente Base64 para dados criptografados). Cole o texto criptografado no campo de entrada ou importe de um arquivo. Clique no botão <strong>Descriptografar</strong> para recuperar o texto simples original. A saída descriptografada será exibida no campo de saída e pode ser copiada ou baixada conforme necessário.",

    step4Title: "Passo 4: Exportar e Gerenciar Chaves",
    step4: "Após gerar ou importar chaves, você pode exportá-las para uso futuro clicando no botão <strong>Exportar</strong> ao lado de cada campo de chave. Isso salvará as chaves no formato PEM padrão, compatível com a maioria dos aplicativos e bibliotecas criptográficas. Lembre-se de armazenar suas chaves privadas com segurança e nunca compartilhá-las com partes não autorizadas. No entanto, chaves públicas podem ser livremente distribuídas para qualquer pessoa que precise criptografar dados para você.",

    relatedToolsTitle: "Ferramentas Criptográficas Relacionadas",
    relatedTool1: "Calculadora de Hash",
    relatedTool1Desc: "Gera valores de hash seguros usando vários algoritmos como SHA-256, SHA-512.",
    relatedTool2: "Gerador de Senhas",
    relatedTool2Desc: "Cria senhas fortes e aleatórias para melhorar sua segurança online.",
    relatedTool3: "Ferramenta de Criptografia Simétrica",
    relatedTool3Desc: "criptografe dados com algoritmos simétricos como o AES para trabalhar com arquivos maiores mais rapidamente. AES 这样的对称算法加密数据，以更快地处理较大文件。",
    relatedTool4: "Base64 codificadores/decodificadores",
    relatedTool4Desc: "converte dados binários para o formato Base64 e vice-versa para transferência segura. Base64 格式，反之亦然，以安全传输。",

    resourcesTitle: "recursos adicionais",
    resource1: "NIST FIPS 186-4: padrão de assinatura digital (DSS)",
    resource2: "RRFC 8017: PKCS #1: especificação de criptografia RSA versão 2.2",
    resource3: "NNIST SP 800-57: recomendações de gestão de chaves"
}
