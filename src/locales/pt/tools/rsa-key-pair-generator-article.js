export default {
  title: "Gerador de Par de Chaves RSA: Crie Chaves de Criptografia Seguras Online",
  intro: "<strong>O Gerador de Par de Chaves RSA</strong> é uma ferramenta online poderosa que gera pares de chaves pública e privada RSA de alta segurança com tamanhos personalizáveis (de 256 a 16384 bits). RSA (Rivest-Shamir-Adleman) é um dos algoritmos de criptografia assimétrica mais utilizados no mundo, formando a base da comunicação segura na internet e em sistemas corporativos. Nossa ferramenta torna simples, fácil e seguro criar esses componentes essenciais de criptografia.",
  
  featuresTitle: "Principais Recursos do Gerador de Par de Chaves RSA",
  feature1: "<strong>Opções flexíveis de tamanho de chave</strong>: gere chaves RSA de 256 a 16384 bits para atender às suas necessidades específicas de segurança.",
  feature2: "<strong>Múltiplos formatos de saída</strong>: exporte chaves em formatos padrão do setor, incluindo PEM, PKCS#8, hexadecimal e codificação Base64.",
  feature3: "<strong>Geração em massa</strong>: crie vários pares de chaves simultaneamente para fins de teste ou implantação.",
  feature4: "<strong>Visualização de componentes</strong>: inspecione os componentes matemáticos das chaves, incluindo módulo, expoentes, fatores primos e parâmetros CRT.",
  feature5: "<strong>Processamento no cliente</strong>: toda a geração de chaves ocorre no seu navegador, garantindo que os materiais de criptografia sensíveis nunca saiam do seu dispositivo.",
  
  useCasesTitle: "Cenários Práticos de Uso de Pares de Chaves RSA",
  
  useCase1Title: "Comunicação Segura e Criptografia de Dados",
  useCase1Desc: "Pares de chaves RSA são a base para estabelecer canais de comunicação segura em redes inseguras. A chave pública pode ser compartilhada livremente, permitindo que outras pessoas criptografem mensagens, enquanto apenas você, com a chave privada, pode descriptografá-las. Esse sistema de <strong>criptografia RSA</strong> suporta tecnologias como SSL/TLS em sites HTTPS, sistemas de e-mail seguro e redes privadas virtuais (VPN).",
  
  useCase2Title: "Assinatura Digital e Autenticação de Documentos",
  useCase2Desc: "O RSA permite <strong>assinaturas digitais</strong>, onde você pode usar sua chave privada para assinar documentos, permitindo que qualquer pessoa com sua chave pública verifique que o documento foi realmente assinado por você e não foi adulterado. Isso é amplamente usado em certificados de assinatura de código, transações financeiras, documentos legais e tecnologia blockchain.",
  
  useCase3Title: "Autenticação e Controle de Acesso",
  useCase3Desc: "Pares de chaves RSA fornecem mecanismos robustos para sistemas de <strong>autenticação segura</strong>. O SSH (Secure Shell) usa chaves RSA para login remoto em servidores sem senha. Certificados de cliente em ambientes como autenticação TLS mútua também dependem de pares de chaves RSA para verificar com segurança a identidade do cliente.",
  
  useCase4Title: "Comunicação Segura de API e Assinatura de Tokens",
  useCase4Desc: "Aplicativos modernos e microsserviços frequentemente usam chaves RSA para <strong>proteger a comunicação de API</strong> e assinar tokens de autenticação, como JWT (JSON Web Tokens). A natureza assimétrica do RSA permite a verificação segura de tokens em sistemas distribuídos sem a necessidade de compartilhar chaves.",
  
  relatedToolsText: "Você também pode achar úteis estas ferramentas relacionadas à criptografia:",
  relatedTool1: "Calculadora de Hash - Gera e verifica valores de hash para integridade de dados",
  relatedTool2: "Gerador de Código de Registro de Empresas Chinês - Cria códigos de registro válidos para empresas chinesas",
  
  tutorialTitle: "Como Usar o Gerador de Par de Chaves RSA",
  
  step1Title: "Passo 1: Selecione o Tamanho da Chave",
  step1Desc: "Primeiro, escolha o tamanho desejado para a chave (em bits). Para fins gerais de segurança, recomenda-se usar pelo menos uma chave de 2048 bits como padrão mínimo. Para aplicações que exigem maior segurança, escolha chaves de 4096 bits ou maiores. Lembre-se que chaves maiores oferecem melhor segurança, mas exigem mais recursos computacionais para gerar e usar.",
  
  step2Title: "Passo 2: Escolha o Formato de Saída",
  step2Desc: "Selecione seu formato de saída preferido no menu suspenso. PEM é o formato mais compatível, reconhecível pelo cabeçalho '-----BEGIN RSA PRIVATE KEY-----'. PKCS#8 é um formato mais moderno suportado pela maioria dos sistemas atuais. Codificações hexadecimal e Base64 são úteis para necessidades específicas de programação ou integração de sistemas.",
  
  step3Title: "Passo 3: Especifique a Quantidade de Pares de Chaves",
  step3Desc: "Se precisar de vários pares de chaves, ajuste a quantidade usando o campo de entrada. Isso é particularmente útil para ambientes de teste ou implantação simultânea de vários sistemas de segurança.",
  
  step4Title: "Passo 4: Gere e Proteja Suas Chaves",
  step4Desc: "Clique no botão \"Gerar Par de Chaves\" e aguarde o processo ser concluído. Para tamanhos de chave maiores, isso pode levar algum tempo. Após a geração, você pode visualizar, copiar ou exportar suas chaves. Certifique-se de armazenar sua chave privada com segurança e nunca compartilhá-la com partes não autorizadas.",
  
  faqTitle: "Perguntas Frequentes sobre Pares de Chaves RSA",
  
  faq1Question: "O que é um par de chaves RSA? Por que preciso gerá-los?",
  faq1Answer: "Um par de chaves RSA consiste em uma chave pública e uma privada, formando a base da criptografia assimétrica. A chave pública é usada para criptografar dados ou verificar assinaturas, enquanto a chave privada é usada para descriptografar dados ou criar assinaturas. Você precisa gerar pares de chaves RSA para implementar recursos como comunicação segura, criptografia de dados, assinaturas digitais e autenticação.",
  
  faq2Question: "Qual tamanho de chave RSA devo escolher para obter a melhor segurança?",
  faq2Answer: "Para requisitos de segurança modernos, recomenda-se usar pelo menos chaves RSA de 2048 bits. Chaves de 1024 bits são consideradas vulneráveis a atacantes bem financiados e devem ser evitadas para dados sensíveis. Chaves de 3072 bits oferecem segurança aproximadamente equivalente à criptografia simétrica de 128 bits (recomendada pela NIST para proteção além de 2030), enquanto chaves de 4096 bits fornecem margem adicional de segurança para aplicações altamente sensíveis. No entanto, chaves maiores exigem mais recursos computacionais para geração e operações de criptografia/descriptografia.",
  
  faq3Question: "Qual é a diferença entre os formatos PEM e PKCS#8?",
  faq3Answer: "PEM e PKCS#8 são dois formatos comuns de codificação para armazenar e transmitir chaves RSA. O formato PEM usa codificação BASE64, com arquivos de chave começando com '-----BEGIN RSA PRIVATE KEY-----'; enquanto PKCS#8 é um formato mais genérico que pode armazenar vários tipos de chaves privadas, com arquivos começando com '-----BEGIN PRIVATE KEY-----'. A maioria dos sistemas modernos suporta PKCS#8, mas alguns sistemas antigos podem suportar apenas o formato PEM tradicional.",
  
  faq4Question: "Como armazenar com segurança uma chave privada RSA gerada?",
  faq4Answer: "As chaves privadas RSA devem ser protegidas adequadamente contra acesso não autorizado. Métodos recomendados de armazenamento seguro incluem: usar gerenciadores de senhas, dispositivos de armazenamento criptografados, módulos de segurança de hardware (HSM) ou sistemas de gerenciamento de chaves. Arquivos de chave privada devem ser protegidos com senhas fortes e ter permissões de acesso apropriadas. Além disso, é importante criar backups, mas garantindo que eles também estejam protegidos.",
  
  faq5Question: "Para quais aplicações específicas posso usar um par de chaves RSA gerado?",
  faq5Answer: "Pares de chaves RSA são amplamente usados em vários cenários de segurança: certificados SSL/TLS e segurança de sites HTTPS; login remoto seguro via SSH; verificação de assinaturas digitais para autenticidade de arquivos ou código; comunicação segura por e-mail (S/MIME); VPNs corporativas e sistemas de autenticação segura; blockchain e carteiras de moedas digitais; e autenticação de API e geração de tokens seguros.",
  
  referencesTitle: "Referências e Leitura Adicional",
  reference1: "Publicação Especial NIST 800-57: Recomendações para Gerenciamento de Chaves",
  reference2: "RFC 8017: PKCS #1: Especificações de Criptografia RSA versão 2.2",
  reference3: "FIPS 186-5: Padrão de Assinatura Digital (DSS)",
  
  conclusionTitle: "Conclusão",
  conclusionText: "<strong>O Gerador de Par de Chaves RSA</strong> fornece um método conveniente e seguro para criar chaves de criptografia essenciais para a segurança digital moderna. Seja protegendo comunicações de rede, implementando sistemas de autenticação ou assinando documentos sensíveis, pares de chaves RSA gerados corretamente são a base dessas medidas de segurança. Usando nossa ferramenta, você pode gerar rapidamente chaves com força e formato adequados para suas necessidades específicas de aplicação, garantindo que seus materiais de criptografia permaneçam privados e seguros."
}
